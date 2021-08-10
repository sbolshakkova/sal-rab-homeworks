function sendRequest(name, phone, address, goods, sum) {
    let address_string = 'ул. ' + address.street + ', дом ' + address.house + ', ' + address.entrance + ' подъезд, ' + address.floor + ' этаж, кв ' + address.flat
    let data = {
        client: name + " " + phone,
        goods: [],
        order: {
            address: address_string,
            sum: sum
        }
    };
​
    let countOfGoods = goods.length;
​
    for (let i = 0; i < countOfGoods; i += 1) {
        let title = goods[i].title
        let count = goods[i].count
        data.goods.push(
            {title: title, count: count}
        );
    }
    data = {data: data}
    let json_data = JSON.stringify(data);
​
    return json_data;
}
