function esprimo(n){
    x=2;
    while (x<n){
        if (n%x==0){
            return false;    
        }
        x++;
    }
    return true;
}