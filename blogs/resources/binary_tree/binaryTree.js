
function Node(leftChild, rightChild, value) {
    this.leftChild = leftChild;
    this.rightChild = rightChild;
    this.value = value;
}

function insert(head,insert_value){
    if(head.value===null){
        head.value = insert_value;
    }else{
        var cur_node = head;
        while(cur_node.value){
            if(insert_value<cur_node.value){
                if(cur_node.leftChild===null){
                    var new_node = new Node(null,null,null);
                    cur_node.leftChild = new_node;        
                }
                cur_node = cur_node.leftChild; 
            }else{
                if(cur_node.rightChild===null){
                    var new_node = new Node(null,null,null);
                    cur_node.rightChild = new_node;        
                }
                cur_node = cur_node.rightChild; 
            }
        }
        cur_node.value = insert_value;
    }
    return head;
}

function height(node){
    if(!node.leftChild && !node.rightChild){
        return 0;
    }else if (!node.leftChild && node.rightChild ){
        return 1+ height(node.rightChild); 
    }else if (node.leftChild && !node.rightChild){
        return 1 + height(node.leftChild);
    }else{
        return 1 + Math.max(height(node.leftChild),height(node.rightChild));
    }
}

function create_tree(value_array){
    var tree_head = new Node(null,null,null);
    for(i=0;i<value_array.length;i++){
        tree_head = insert(tree_head,value_array[i]);
    }
    return tree_head;
}

function stringify_tree(tree_head){
    var print_string = [];
 
    for(i=0; i<=height(tree_head); i++) {
        print_string.push(new Array(90).fill(" "));
    }

    function print_tree(node, is_left, offset, depth) {
	if(!node){return 0;}
	var zeroed_value = ("("+('000' + node.value).substr(-3)+")").split("");
	var node_width = zeroed_value.length;

	var left = print_tree(node.leftChild, true, offset, depth+1);
	var right= print_tree(node.rightChild, false, offset+left+node_width, depth+1);

	for (i = 0; i < node_width; i++){
	    print_string[depth][offset + left + i] = zeroed_value[i];
	}
	if (depth>0 && is_left) {
	    for (i = 0; i < node_width + right; i++){
		    print_string[depth - 1][offset + left + Math.floor(node_width/2) + i] = "-";
	    }
		print_string[depth - 1][offset + left + Math.floor(node_width/2)] = ".";

	}else if (depth>0 && !is_left) {
	    for (i = 0; i < left + node_width; i++){
		print_string[depth - 1][offset - Math.floor(node_width/2) + i] = "-";
	    }
	    print_string[depth - 1][offset + left + Math.floor(node_width/2)] = ".";
	}
	return left + zeroed_value.length + right;
    }

    print_tree(tree_head,false,0,0);
    return print_string;
}



function test(input_array){
    print("input array: "+input_array);
    var tree_head = new Node(null,null,null);
    for(i=0;i<input_array.length;i++){
        tree_head = insert(tree_head,input_array[i]);
    }

    var print_string = stringify_tree(tree_head,false,0,0);
    
    for(i=0; i<=height(tree_head); i++) {
        print(print_string[i].join(""))
    }
}     

//test([2,4,5,1,199,92,91,3,6,7,8]);
