// const util = require('util')
// const axios = require('axios')
const test = () => {
    window.print()
}
// Getting the Token
// axios.get('https://apitest.dhlecommerce.asia/rest/v1/OAuth/AccessToken?clientId=LTExMTgwNTI4MTY=&password=APITest1&returnFormat=json')
//     .then(res => {
//         console.log(res.data.accessTokenResponse.token)
//     })
//     .catch(err => console.log(err))


// Calling the shipment creation API
// let imageBox = document.getElementById('qr-code')
// imageBox.src = 'https://api.qrserver.com/v1/create-qr-code/?data=5120115490551570!&size=200x200'
// const updateElement = (id, attr, value) => {
// let element = window.document.getElementById(id)
// if (value) element[attr] = value
// return element
// }
// updateElement('depot', 'innerHTML', 'TEST')
// console.log(updateElement('depot', 'innerHTML', 'TEST'))
// Creating a label
// axios.post('https://apitest.dhlecommerce.asia/rest/v3/Shipment', {
//     "manifestRequest": {
//         "hdr": {
//             "messageType": "SHIPMENT",
//             "messageDateTime": "2016-01-12T11:20:27+08:00",
//             "accessToken": "cb8aa4475ebd426c942c0f004ef91fb6",
//             "messageVersion": "1.0",
//             "messageLanguage": "en"
//         },
//         "bd": {
//             "pickupAccountId": "5999999939",
//             "soldToAccountId": "5999999939",
//             "pickupDateTime": "2020-11-06T11:20:27+08:00",
//             "handoverMethod": 2,
//             "pickupAddress": {
//                 "companyName": "ABC SDN BHD",
//                 "name": "Sultai",
//                 "address1": "Jalan Bukit",
//                 "address2": null,
//                 "address3": null,
//                 "city": "Kajang",
//                 "state": "Selangor",
//                 "country": "MY",
//                 "postCode": "43000",
//                 "phone": "123456789",
//                 "email": null
//             },
//             "shipmentItems": [{
//                 "consigneeAddress": {
//                     "companyName": "null",
//                     "name": "Desiree",
//                     "address1": "Jalan PPU1",
//                     "address2": null,
//                     "address3": null,
//                     "city": "Puchong",
//                     "state": "Selangor",
//                     "district": null,
//                     "country": "MY",
//                     "postCode": "47100",
//                     "phone": "01123456789",
//                     "email": null
//                 },
//                 "returnAddress": {
//                     "companyName": "ABC SDN BHD",
//                     "name": "Vasan",
//                     "address1": "Jalan Bukit",
//                     "address2": null,
//                     "address3": null,
//                     "city": "Kajang",
//                     "state": "Selangor",
//                     "country": "MY",
//                     "postCode": "43000",
//                     "phone": "123456789",
//                     "email": null
//                 },
//                 "shipmentID": "MYZZQ000023",
//                 "returnMode": "03",
//                 "packageDesc": "Pacakge Descs",
//                 "totalWeight": 10,
//                 "totalWeightUOM": "g",
//                 "dimensionUOM": "CM",
//                 "height": 10.00,
//                 "length": 30.00,
//                 "width": 20.00,
//                 "productCode": "PDO",
//                 "codValue": null,
//                 "insuranceValue": null,
//                 "totalValue": 100.0,
//                 "currency": "MYR",
//                 "remarks": "SHIPPERname",
//                 "isRoutingInfoRequired": "Y"
//             }]

//         }
//     }
// }
// )
//     .then(res => {
//         const response = res.data
//         // document.getElementById('depot').innerHTML = res.data.manifestResponse.bd.shipmentItems[0].deliveryDepotCode
//         // updateElement('depot', 'innerHTML', res.data.manifestResponse.bd.shipmentItems[0].deliveryDepotCode)
//         // console.log(res.data.manifestResponse.bd.shipmentItems[0].deliveryConfirmationNo)
//         // console.log(res.data.manifestResponse.bd.shipmentItems[0].deliveryDepotCode)
//         // console.log(res.data.manifestResponse.bd.shipmentItems[0].secondarySortCode)
//         // console.log(res.data.manifestResponse.bd.shipmentItems[0].primarySortCode)

//         console.log(util.inspect(response, false, null, true /* enable colors */))
//         // console.log(response.manifestResponse.bd)
//     })
//     .catch(err => console.log(err))

// The Following Data will be used in the Label: 

// 3 = res.data.bd.shipmentItems.deliveryDepotCode
// 4 = res.data.bd.shipmentItems.primarySortCode
// 5 = res.data.bd.shipmentItems.deliveryConfirmationNo
// 9 = res.data.bd.shipmentItems.deliveryConfirmationNo
// 10 = res.data.bd.shipmentItems.secondarySortCode