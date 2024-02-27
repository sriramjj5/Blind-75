# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        def numberFinder(l, i=1):
            if not l:
                return 0
            return (l.val)*i + numberFinder(l.next, i*10)
        
        soln = numberFinder(l1) + numberFinder(l2)

        soln = str(soln)
        l = ListNode()
        l.val = int(soln[len(soln) - 1])
        prev = l
        for i in range(len(soln)-2, -1, -1):
            n = ListNode()
            n.val = int(soln[i])
            prev.next = n
            prev = n

        return l

        