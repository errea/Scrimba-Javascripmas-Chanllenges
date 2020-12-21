function validTime(str) {
    const [hours, minutes] = str.split(':');
    
    if(parseInt(hours) > 23 || parseInt(hours) < 0) {
        return false;
    }
    
    if(parseInt(minutes) > 59 || parseInt(minutes) < 0) {
        return false;
    }
    
    return true;
}