// removing the duplicates
let cur = headNode;
let visited = new Set([cur.data]);
while (cur.next) {
  let nextnode = cur.next;
  if (visited.has(nextnode.data)) {
 
    cur.next = nextnode.next;
  } else {
    visited.add(nextnode.data);
    cur = nextnode;
  }
}
return headNode;