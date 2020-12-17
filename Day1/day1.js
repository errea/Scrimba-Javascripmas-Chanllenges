function candies(children, candy){
    const candyPerChild = Math.floor(candy / children); 
 	return candyPerChild * children;
}