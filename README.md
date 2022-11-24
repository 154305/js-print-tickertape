# js-print-tickertape

```
用前端的布局方式实现凭条布局，生成bmp图片交给打印机打印
```
## 1.使用

```
npm i js-print-tickertape
or
yarn add js-print-tickertape
```
```typescript
//base64
let data = await generate(`
                                <div style="height: auto;width: 300px;padding:20px;display: flex;flex-direction:column;align-items: center;border: 1px #000 solid">
                                    <h1 style="display: inline-block">打印凭条测试</h1>
                                    <div style="display: flex;padding: 12px 20px;width: 100%;align-items: center">
                                        <div style="font-weight: bold;font-size: 16px;width: 120px;padding-right: 20px">名称:</div>
                                        <div style="">打印测试值</div>
                                    </div>
                                     <div style="display: flex;padding: 12px 20px;width: 100%;align-items: center">
                                        <div style="font-weight: bold;font-size: 16px;width: 120px;padding-right: 20px">名称:</div>
                                        <div style="">打印测试值</div>
                                    </div>
                                     <div style="display: flex;padding: 12px 20px;width: 100%;align-items: center">
                                        <div style="font-weight: bold;font-size: 16px;width: 120px;padding-right: 20px">名称:</div>
                                        <div style="">打印测试值</div>
                                    </div>
                                     <div style="display: flex;padding: 12px 20px;width: 100%;align-items: center">
                                        <div style="font-weight: bold;font-size: 16px;width: 120px;padding-right: 20px">名称:</div>
                                        <div style="">打印测试值</div>
                                    </div>
                                    <div>-----------------------------------------</div>
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAAC5CAAAAABRxsGAAAACHUlEQVR42u3aUY6DMAxFUfa/6c4GmuQ+R2ia+PI1FQwcKtVxbD+fU49HuXLlypUr/xX5sz6+3mF0CbjV8CMQKFfeUT7+KX85S23zW80vHv+bcuVd5XPCPI7MX2l4g0igXLlyIgfxhiTa8BnKlSvfii3zWw3f8AeionLlR8lBBIheLopLL+4slCs/Xh5til/568XqnHLlJ8txg2a9H6Yl6yiP3+9wKVd+spyWqGgYWKTXSWxRrlw52cTmwQSk6+Bpi/xcufKGcvr04Ufazo34ypW3ldOFGgxHgSgTtXOz+rly5VfKweRT/vQ8kcDBSbnyXvLtmSW6555/LOTnypW3kUf5ND2bb6i3qtDKlfeS59MU+cXDAIN70MqVN5SDhm2+oOf8wuqvXPltcrqxpbXnebigxetsGkq58nvl2/k5TbmjieLClIhy5ffKaY2rWAEDEYo2lZQr7yiPekJzW17tAieUK+8tz2cT8xZR3ifKoqJy5ffK6SpMK1vFoEOyfOXKlYOxxDwDzwaHo72/cuUd5DQ+FPe+9GmF2KJc+b1yPIaUZNHRKEfWgVKuvJc8mg/ON9k0auFvQrnyhvJoO5vPAhd7UdW9v3LlV8rp7x7MWkSjFzScKVeuPFuZ810wSBAKfSLlypVnlaj1IOP85baq0MqVXymf5+e0YpUnA1HbV7nyjvJoGS/Wj8FyD9q5ypU3kx92KFeuXLly5f97/AGmZM95vU+apAAAAABJRU5ErkJggg=="/>
                                    <h2 style="display: inline-block">关注二维码</h2>
                                    <div>-----------------------------------------</div>
                                </div>`
            );
```
