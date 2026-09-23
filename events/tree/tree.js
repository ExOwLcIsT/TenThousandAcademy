class NestedSet {
  /**
   *
   */
  constructor(array) {
    if (!Array.isArray(array)) {
      throw new TypeError();
    }
    this.set = [];
    for (let i = 0; i < array.length; i++) {
      this.insertNode(array[i]);
    }
  }
  findNodeById(id) {
    for (let i = 0; i < this.set.length; i++) {
      if (id === this.set[i].id) {
        return this.set[i];
      }
    }
    return undefined;
  }

  insertNode(node) {
    if (this.set.length === 0) {
      node.left = 1;
      node.right = 2;
      node.depth = 0;
    } else {
      let parent = this.findNodeById(node.parentId);
      for (let i = 0; i < this.set.length; i++) {
        // Зміщення left/right усіх наступних дітей/батьків
        const current = this.set[i];
        if (node.parentId !== current.id) {
          if (current.left > parent.right) {
            current.left += 2;
          }

          if (current.right > parent.right) {
            current.right += 2;
          }
        }
      }
      node.left = parent.right;
      node.right = parent.right + 1;
      node.depth = parent.depth + 1;
      parent.right += 2;
    }
    delete node.parentId;
    this.set.push(node);
  }

  findAllChildren(parentID) {
    let parent = this.findNodeById(parentID);
    const result = [];
    for (let i = 0; i < this.set.length; i++) {
      if (this.set[i].left > parent.left && this.set[i].right < parent.right) {
        result.push(this.set[i]);
      }
    }
    return result;
  }
  findDirectChildren(parentID) {
    const result = [];
    let parent = this.findNodeById(parentID);
    const allChildren = this.findAllChildren(parentID);
    loop1: for (let i = 0; i < allChildren.length; i++) {
      const beingChecked = allChildren[i];
      loop2: for (let j = 0; j < allChildren.length; j++) {
        const current = allChildren[j];
        if (
          beingChecked.left > current.left &&
          beingChecked.right < current.right
        )
          // якщо нода є child іншої ноди, то це не прямий нащадок
          continue loop1;
      }
      result.push(allChildren[i]);
    }
    return result;
  }
  findParent(userID) {
    const allParents = this.findAllParents(userID);
    if (allParents.length === 0) return null;
    let parent = allParents[0];
    for (let i = 1; i < allParents.length; i++) {
      if (parent.left < allParents[i].left) {
        parent = allParents[i];
      }
    }
    return parent;
  }
  findAllParents(userID) {
    const node = this.findNodeById(userID);
    const result = [];
    for (let i = 0; i < this.set.length; i++) {
      const current = this.set[i];
      if (current.left < node.left && current.right > node.right) {
        result.push(current);
      }
    }
    return result;
  }
  findLeaves(parentID) {
    const allChildren = this.findAllChildren(parentID);
    const result = [];
    for (let i = 0; i < allChildren.length; i++) {
      if (allChildren[i].left === allChildren[i].right - 1) {
        result.push(allChildren[i]);
      }
    }
    return result;
  }
  findRoot() {
    for (let i = 0; i < this.set.length; i++) {
      if (this.set[i].left === 1) return this.set[i];
    }
  }
  countDescendants(parentID) {
    return this.findAllChildren(parentID).length;
  }
  countDirectChildren(parentID) {
    return this.findDirectChildren(parentID).length;
  }
  findPath(userID) {
    const result = this.findAllParents(userID);
    result.push(this.findNodeById(userID));
    result.sort((a, b) => a.left - b.left);
    return result;
  }

  isAncestor(ancestorID, nodeID) {
    const ancestor = this.findNodeById(ancestorID);
    const node = this.findNodeById(nodeID);
    return ancestor.left < node.left && ancestor.right > node.right;
  }
  isDescendant(nodeID, ancestorID) {
    const ancestor = this.findNodeById(ancestorID);
    const node = this.findNodeById(nodeID);
    return ancestor.left < node.left && ancestor.right > node.right;
  }
  findDepthNodes(depth) {
    const result = [];
    for (let i = 0; i < this.set.length; i++) {
      if (this.set[i].depth === depth) {
        result.push(this.set[i]);
      }
    }
    return result;
  }
  findSiblings(userID) {
    const parent = this.findParent(userID);
    return this.findAllChildren(parent.id);
  }
  findDirectSiblings(userID) {
    const node = this.findNodeById(userID);
    const parent = this.findParent(userID);
    const result = [];
    for (let i = 0; i < this.set.length; i++) {
      const current = this.set[i];
      if (parent.left < current.left && parent.right > current.right) {
        if (current.left !== node.left) {
          result.push(current);
        }
      }
    }
    return result;
  }

  getSubtree(parentID) {
    const result = new NestedSet([]);
    const node = this.findNodeById(parentID);
    const children = this.findAllChildren(parentID);
    children.push(node);
    const diff = node.left - 1;
    const depth = node.depth;
    const resultSet = [];
    children.forEach((c) => {
      resultSet.push({
        left: c.left - diff,
        depth: c.depth - depth,
        right: c.right - diff,
        name: c.name,
        id: c.id,
      });
    });
    result.set = resultSet;
    return result;
  }
  show() {
    console.log(
      this.set.map((node) => {
        return {
          name: node.name,
          left: node.left,
          right: node.right,
          depth: node.depth,
        };
      }),
    );
  }
}
const familyTree = [
  { id: 1, name: "Прадед Гриша", parentId: null },

  { id: 2, name: "Дед Вася", parentId: 1 },
  { id: 3, name: "Бабка Маша", parentId: 1 },
  { id: 4, name: "Дед Миша", parentId: 1 },

  { id: 5, name: "Тетя Таня", parentId: 2 },
  { id: 6, name: "Дядя Вадик", parentId: 2 },
  { id: 7, name: "Тетя Оля", parentId: 2 },
  { id: 8, name: "Тетя Валя", parentId: 2 },

  { id: 9, name: "Дядя Гарик", parentId: 3 },
  { id: 10, name: "Дядя Ваня", parentId: 3 },

  { id: 11, name: "Папа Сергей", parentId: 4 },
  { id: 12, name: "Тетя Ира", parentId: 4 },
  { id: 13, name: "Тетя Наташа", parentId: 4 },
  { id: 14, name: "Дядя Игорь", parentId: 4 },
  { id: 15, name: "Дядя Кирилл", parentId: 4 },

  // Дети Папы Сергея
  { id: 16, name: "Я (Вася)", parentId: 11 },
  { id: 17, name: "Сестра Аня", parentId: 11 },
  { id: 18, name: "Брат Коля", parentId: 11 },

  // Дети Тети Иры
  { id: 19, name: "Кузен Дима", parentId: 12 },
  { id: 20, name: "Кузина Лена", parentId: 12 },

  // Дети Тети Наташи
  { id: 21, name: "Кузина Света", parentId: 13 },
  { id: 22, name: "Кузен Саша", parentId: 13 },

  // Дети Дяди Игоря
  { id: 23, name: "Кузен Андрей", parentId: 14 },
  { id: 24, name: "Кузен Петр", parentId: 14 },

  // Дети Дяди Кирилла
  { id: 25, name: "Кузина Катя", parentId: 15 },
  { id: 26, name: "Кузен Женя", parentId: 15 },
  { id: 27, name: "Кузен Максим", parentId: 15 },

  // Дети Тети Тани
  { id: 28, name: "Кузен Рома", parentId: 5 },
  { id: 29, name: "Кузина Вика", parentId: 5 },

  // Дети Дяди Вадика
  { id: 30, name: "Кузен Тимур", parentId: 6 },
  { id: 31, name: "Кузен Олег", parentId: 6 },

  // Дети Тети Оли
  { id: 32, name: "Кузина Юля", parentId: 7 },

  // Дети Тети Вали
  { id: 33, name: "Кузина Алина", parentId: 8 },
  { id: 34, name: "Кузен Марк", parentId: 8 },

  // Дети Дяди Гарика
  { id: 35, name: "Кузен Артем", parentId: 9 },
  { id: 36, name: "Кузина Настя", parentId: 9 },

  // Дети Дяди Вани
  { id: 37, name: "Кузен Илья", parentId: 10 },

  // Дети "Я (Вася)"
  { id: 38, name: "Сын Даня", parentId: 16 },
  { id: 39, name: "Дочь София", parentId: 16 },

  // Дети Сестры Ани
  { id: 40, name: "Племянник Кирюша", parentId: 17 },

  // Дети Брата Коли
  { id: 41, name: "Племянница Мила", parentId: 18 },
];

const ns = new NestedSet(familyTree);

ns.show();
console.log(ns.findAllChildren(1));
console.log(ns.findDirectChildren(1));
console.log(ns.findAllParents(41));
console.log(ns.findParent(41));
console.log(ns.findRoot());
console.log(ns.findLeaves(1));
console.log(ns.countDescendants(1));
console.log(ns.countDirectChildren(1));
console.log(ns.findPath(41));
console.log(ns.isAncestor(41, 1));
console.log(ns.isAncestor(1, 41));

console.log(ns.findDepthNodes(2));

ns.getSubtree(5).show();
ns.show();
// Домашка:
// Промапьте каждый объект и высчитайте параметры left, right, depth

// Реализуйте следующие методы используя параметры left, right, depthв объектах.

//  •

//
//  • getAllNodesAtLevel(tree, level) – все узлы на определённом уровне (например, все правнуки).
//  ??
