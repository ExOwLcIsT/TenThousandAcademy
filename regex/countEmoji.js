function countEmoji(str, emoji) {
  const result = {};
  const regexp = new RegExp(
    `<\\s*@\\s*(?<name>.+?)\\s*/\\s*>|:(?<emoji>${emoji}):`,
    "g",
  );
  const results = [...str.matchAll(regexp)];
  console.log(results);
  let counter = 0;
  for (let i = results.length - 1; i >= 0; i--) {
    if (results[i].groups.emoji) {
      if (!results[i + 1]) {
        counter++;
        continue;
      }
      if (results[i + 1].groups.name) {
        counter = 1;
        continue;
      }
      counter++;
    } else {
      const name = results[i].groups.name.toLowerCase();
      if (!result[name]) {
        result[name] = 0;
      }
      result[name] += counter;
    }
  }
  return result;
}
console.log(
  countEmoji(
    "<@Kate />:apple: <@Max/>:apple: :APPLE: :AppLe:<@alisa /> :like: received:apple::apple:",
    "apple",
  ),
);
console.log(
  countEmoji(
    "<@Kate />:apple: <@Max/>:like:<@alisa /> :like: received:apple::apple: <@kate / > alsdaksdjhsa <@KATE / > :apple: :apple:",
    "apple",
  ),
);
