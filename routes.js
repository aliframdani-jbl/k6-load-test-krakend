export const routes = [
    {
      "url": "https://gw-api-beta.jubelio.com/push-notification/shopee",
      "headers": { 
        "Content-Type": "application/json"
     },
      "payload": {
        "msg_id": "",
        "data": {
          "completed_scenario": "",
          "items": [],
          "ordersn": "240716R9SYG4X5",
          "status": "TO_CONFIRM_RECEIVE",
          "update_time": 1721298318
        },
        "shop_id": 323233231,
        "code": 3,
        "timestamp": 1721298318
      }
    },
    {
        "url": "https://gw-api-beta.jubelio.com/push-notification/lazada",
        "headers": {
            "Content-Type": "application/json"
        },
        "payload": {
            "seller_id": "400596435779",
            "message_type": 0,
            "data": {
              "order_status": "ready_to_ship",
              "trade_order_id": "1499204910315939",
              "trade_order_line_id": "1499204920415939",
              "status_update_time": 1721299109,
              "buyer_id": "400285215939"
            },
            "timestamp": 1721299120,
            "site": "lazada_id"
          }
    },
    {
        "url": "https://gw-api-beta.jubelio.com/push-notification/tokopedia",
        "headers": {
            "Content-Type": "application/json"
        },
        "payload": {
            "fs_id": 18159,
            "order_status": 500,
            "order_id": 1893497890,
            "shop_id": 12184678,
            "warehouse_id": 12127925,
            "product_details": [
              {
                "id": 2135270954,
                "name": "Oli Transmisi Motor Castrol Scooter Gear Oil Kemasan 0.12L",
                "notes": "",
                "currency": "Rp.",
                "weight": 0.28,
                "total_weight": 0.28,
                "price": 14918,
                "total_price": 14918,
                "quantity": 1,
                "sku": "3411865",
                "addon_summary": {
                  "addons": null,
                  "total": 0,
                  "total_price": 0,
                  "total_price_str": "",
                  "total_quantity": 0
                },
                "is_eligible_pof": true
              },
              {
                "id": 7027237413,
                "name": "Oli Mesin Motor Castrol POWER1 Ultimate Matic 10W-30 (0.8L) - 0,8 l",
                "notes": "",
                "currency": "Rp.",
                "weight": 0.987,
                "total_weight": 0.987,
                "price": 62302,
                "total_price": 62302,
                "quantity": 1,
                "sku": "3431562",
                "addon_summary": {
                  "addons": null,
                  "total": 0,
                  "total_price": 0,
                  "total_price_str": "",
                  "total_quantity": 0
                },
                "is_eligible_pof": true
              }
            ],
            "shipping_info": {
              "awb": "",
              "logistic_name": "Kurir Rekomendasi",
              "logistic_service": "Reguler"
            },
            "source": "",
            "features": {}
          }
    },
    {
        "url": "https://gw-api-beta.jubelio.com/push-notification/tiktok",
        "headers": {
            "Content-Type": "application/json"
        },
        "payload": {
            "type": 1,
            "tts_notification_id": "7392922053974394642",
            "shop_id": "7493999789368181917",
            "timestamp": 1721298801,
            "data": {
              "is_on_hold_order": false,
              "order_id": "577042645727872816",
              "order_status": "AWAITING_SHIPMENT",
              "update_time": 1721298799
            }
          }
    },
    {
        "url": "https://gw-api-beta.jubelio.com/push-notification/blibli",
        "headers": {
            "Content-Type": "application/json"
        },
        "payload": {
            "timestamp": 1721299268416,
            "order": {
              "id": "12156255245",
              "status": "FP",
              "type": "B2C_RETAIL",
              "fpDate": 1721299266578
            },
            "store": {
              "code": "ROH-60038",
              "name": "Rodeo House Official Store",
              "commissionType": "CM",
              "deliveryType": "DROPSHIP"
            },
            "recipient": {
              "name": "Sundari .",
              "streetAddress": "Jl. Gunung Galunggung 13. D4 No.13 RT.001/RW.010, Cengkareng Timur, Kecamatan Cengkareng, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11730, Indonesia",
              "country": "ID",
              "state": "DKI Jakarta",
              "city": "Kota Jakarta Barat",
              "district": "Cengkareng",
              "subDistrict": "Cengkareng Timur",
              "zipCode": "11730",
              "longitude": 106.7363715,
              "latitude": -6.1429825
            },
            "orderItems": [
              {
                "orderItem": {
                  "id": "12218620432",
                  "packageId": "4474703702",
                  "packageCreated": false
                },
                "product": {
                  "blibliSku": "ROH-60038-00803-00001",
                  "name": "Rodeo - Blouse Wanita - Broun Batik L",
                  "sellerSku": "222.0933.BRN.L",
                  "quantity": 1,
                  "initialQuantity": 1,
                  "itemPrice": 120000,
                  "type": "1",
                  "notes": null
                },
                "storePickupPoint": {
                  "code": "PP-3187447",
                  "sellerPickupPointCode": null,
                  "name": "Rodeo House Official",
                  "picName": "Asti",
                  "picPhone": "6287700101983",
                  "streetAddress": "Jl. Indo Karya No.10, RT.10/RW.4, Papanggo, Tj. Priok, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14340, Indonesia",
                  "city": "Kota Jakarta Utara",
                  "state": "DKI Jakarta",
                  "zipCode": "14340",
                  "country": "ID",
                  "district": "Tanjung Priok",
                  "subdistrict": "Papanggo",
                  "warehouseCode": null,
                  "warehouseName": null,
                  "longitude": 106.8736556,
                  "latitude": -6.133303499999999
                },
                "shipment": {
                  "logisticProductCode": "JNT_CASHLESS",
                  "logisticProductName": "JNT CASHLESS",
                  "logisticOptionCode": "STANDARD",
                  "logisticOptionName": "Standard",
                  "notes": null,
                  "shippingEtdMin": 1721440800000,
                  "shippingEtdMax": 1721653200000,
                  "totalWeight": 1
                },
                "adjustment": [
                  {
                    "name": "Road to Anniversary 13th",
                    "code": null,
                    "type": "PRODUCT",
                    "merchantMargin": 100,
                    "amount": -41000,
                    "description": "CAMP-02143: Road to Anniversary 13th"
                  }
                ],
                "amount": {
                  "itemAmount": 120000,
                  "itemTotalAmount": 120000,
                  "sellerAmount": 79000,
                  "shippingCost": 5200,
                  "shippingInsuranceCost": 64,
                  "paymentFee": 0
                },
                "flags": {
                  "instantPickup": false,
                  "fulfilledByBlibli": false,
                  "cashOnDelivery": false
                }
              }
            ],
            "notificationType": "order"
          }
    },
    {
        "url": "https://gw-api-beta.jubelio.com/push-notification/shopify/62500274342",
        "headers": {
          "Accept": "*/*",
          "Host": "gw-api-beta.jubelio.com",
        },
        "payload": {}
    },
    {
      "url": "https://gw-api-beta.jubelio.com/push-notification/zalora/73647282389",
      "headers": {
          "Accept": "*/*",
          "Host": "gw-api-beta.jubelio.com",
        },
      "payload": {}
    }, 
    {
      "url": "https://gw-api-beta.jubelio.com/push-notification/webstore/coba",
      "headers": {
        "x-request-id": "4c821f84f7c1f7507456f65f7ba6c9bb",
        "x-real-ip": "10.104.0.50",
        "x-forwarded-for": "10.104.0.50",
        "x-forwarded-host": "push.jubelio.coms",
        "x-forwarded-port": "443",
        "x-forwarded-proto": "https",
        "x-forwarded-scheme": "https",
        "x-scheme": "https",
        "x-original-forwarded-for": "2a04:3543:1000:2310:ec90:7ff:fe3d:47af",
        "cdn-loop": "cloudflare",
        "cf-ipcountry": "SG",
        "accept-encoding": "gzip, br",
        "user-agent": "WooCommerce/9.2.3 Hookshot (WordPress/6.6.1)",
        "accept": "*/*",
        "content-type": "application/json",
        "x-wc-webhook-source": "https://yasmeera.id/",
        "x-wc-webhook-topic": "action.woocommerce_order_status_changed",
        "x-wc-webhook-resource": "action",
        "x-wc-webhook-event": "woocommerce_order_status_changed",
        "x-wc-webhook-signature": "qno38tcPW63bRcmtKh2147Gl8hJ4AYzl9KBLt6wLR/E=",
        "x-wc-webhook-id": "9",
        "x-wc-webhook-delivery-id": "7516fc0970a9289c8cec3ec950ff0c28",
        "cf-connecting-ip": "2a04:3543:1000:2310:ec90:7ff:fe3d:47af"
      },
      "payload": {}
  }
]
  