// Time - O(1) -> As ip addresses runs in 32 bits. Each segments will have 8 bits and we can store 0-255 integers in that bits i.e. 266. Thats why we know we can generate max of 2^32.
// Space - O(1) -> We can store max in the list till 2^32

function validIPAddresses(string) {
    let ipAddresses = [];

    for (let i = 1;i < Math.min(string.length,4);i++) {
        let currentIpAddressParts = ['','','',''];
        currentIpAddressParts[0] = string.slice(0,i);

        if (!isIPAddressValid(currentIpAddressParts[0])) {
            continue;
        }

        for (let j = i+1; j < i + Math.min(string.length - i,4);j++) {
            currentIpAddressParts[1] = string.slice(i,j);
            if (!isIPAddressValid(currentIpAddressParts[1])) {
                continue;
            }

            for (let k = j + 1; k < j + Math.min(string.length - j,4); k++) {
                currentIpAddressParts[2] = string.slice(j,k);
                currentIpAddressParts[3] = string.slice(k);

                if (isIPAddressValid(currentIpAddressParts[2]) && isIPAddressValid(currentIpAddressParts[3])) {
                    ipAddresses.push(currentIpAddressParts.join("."))
                }
            }
        }
    }

    console.log(ipAddresses);
    return ipAddresses;
}

function isIPAddressValid(ipAddress) {
    const stringAsInt = parseInt(ipAddress);
    if (stringAsInt > 255) return false;
    return ipAddress.length === stringAsInt.toString().length; // For ignoring leading zeros
}

validIPAddresses("1921680")