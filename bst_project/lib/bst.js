class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {

    constructor(){
        this.root = null;
    }

   insert(val, root = this.root){
       if(!root) {
           this.root = new TreeNode(val);
           return;
       }

       if(val < root.val){
           if(!root.left){
               root.left = new TreeNode(val);
           }else{
               this.insert(val, root.left);
           }
       }

       if(val >= root.val){
           if(!root.right){
               root.right = new TreeNode(val);
           }else{
               this.insert(val, root.right);
           }
       }

   }


   searchRecur(target, root = this.root){
        if(!root) return false;

        if(target < root.val){
            return this.searchRecur(target, root.left);
        }else if(target > root.val){
            return this.searchRecur(target, root.right);
        }else {
            return true;
        }

   }

   searchIter(target, root = this.root){
       let curr = root;

       while(curr){
           if(target < curr.val){
               curr = curr.left;
           }else if(target > curr.val){
               curr = curr.right;
           }else{
               return true;
           }
       }
       return false;
   }

}

module.exports = {
    TreeNode,
    BST
};