export default function findItemsOver(list, threshold) {
  var results = [];
  for (var i = 0; i < list.length; i++) {
    if (list[i].qty > threshold) {
      results.push(list[i]);
    }
  }
  return results;
}
