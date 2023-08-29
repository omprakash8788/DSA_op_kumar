
if(head.next==null){return null;}
let first = head; 
let last = head; 
let previous;
while(last && last.next){
    last = last.next.next;
    previous = first;
    first = first.next;
}
previous.next = previous.next.next;
return head;