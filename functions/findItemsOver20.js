export default function findItemsOver20(list) {
  var results = [];
  for (var i = 0; i < list.length; i++) {
    if (list[i].qty > 20) {
      results.push(list[i]);
    }
  }
  return results;
}
