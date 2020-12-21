function domainType(domains) {
    const domainTypes = [];
    
    for(let i = 0; i < domains.length; i++) {
        const urlPieces = domains[i].split('.');
        const domain = urlPieces[urlPieces.length - 1];
        
        if(domain === 'org') {
            domainTypes.push('organization');   
        } else if (domain === 'com') {
            domainTypes.push('commercial');
        } else if (domain === 'net') {
            domainTypes.push('network');
        } else if (domain === 'info') {
            domainTypes.push('information');
        }
    }
    
    return domainTypes;
}