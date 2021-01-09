var frequencySort = function(s) {
    let a = Object.entries([...s].reduce((acc, el) => (acc[el] = acc[el] + 1 || 1) && acc,{}))
    console.log(a)
        debugger;
   
     let b = a.sort((a,b) => b[1] - a[1])
        console.log(b)
    let c= b.reduce((acc, el) => acc + el[0].repeat(el[1]), '')
    // console.log(c)
};

frequencySort('iihhhssssseeey')

var killProcess = function(pid, ppid, kill) {
    const parents = {};
    for (let i = 0; i < ppid.length; i++) {
        parents[ppid[i]] = parents[ppid[i]] || [];
        parents[ppid[i]].push(pid[i]);
    }
    const res = [];
    dfs(parents, kill, res);
    return res;
};

function dfs(parents, kill, res) {
    res.push(kill);
    if (!parents[kill]) return;
    for (let pid of parents[kill]) {
        dfs(parents, pid, res);
    }
}


var addTwoNumbers = function(l1, l2) {
    let result = head = {};
    let carry = 0;
    while (!!l1 || !!l2 || carry) {
        let temp = (l1 === null ? 0 : l1.val) + (l2 === null ? 0 : l2.val) + carry;
        carry = 0;
        if (temp > 9) {
            carry = 1;
            temp -= 10;
        };
        result.next = new ListNode(temp);
        result = result.next;
        l1 = l1 === null ? null : l1.next;
        l2 = l2 === null ? null : l2.next;
    };
    return head.next;
};

var addTwoNumbers = function (l1, l2) {
    const result = { val: 0, next: null };
    let c1 = l1, c2 = l2, cr = result;
    let carry = false;
    const nullNode = { val: 0, next: null };
    while (1) {
        const r = c1.val + c2.val + carry;
        carry = !!(r - (r % 10));

        cr.next = { val: r % 10, next: null };
        cr = cr.next;

        if (!(c1.next || c2.next)) {
            if (carry) cr.next = { val: 1, next: null }
            break;
        };
        c1 = c1.next ? c1.next : nullNode;
        c2 = c2.next ? c2.next : nullNode;
    }
    return result.next;
};

function help(node, min, max) {
    if(!node) return true;
    if((min != null && node.val <= min)||(max != null && node.val >= max)) {
        return false;
    }
    return help(node.left, min, node.val) && help(node.right, node.val, max);
}
var isValidBST = function(root) {
    return help(root, null, null);
};

const createL = (arr) => { // array -> linkedlist
    let tmp, node = null;
    let n = arr.length;
    for (let i = n - 1; ~i; i--) {
        if (!node) {
            node = new ListNode(arr[i]);
        } else {
            tmp = new ListNode(arr[i]);
            tmp.next = node;
            node = tmp;
        }
    }
    return node;
};