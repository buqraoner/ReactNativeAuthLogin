export default function (data) {
    Object.keys(data).map(key => {
        return {
            name: key,
            value: data[key]
            
        };
    });
}


