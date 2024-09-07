import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://magiya-balkonov.by/back', // http://magiya-balkonov.by/back http://localhost:8723/back
    headers: {
        'Content-Type': 'application/json'
    }
})

export const sendData = {
    send_feedback(values){
        console.log(values);
        return instance.post('/send_feedback', values)
    }
    // send_feedback(values) {
    //     const message = values.type === 'Мебель' ?
    //         `Новое сообщение от ${values.data.name}\n` +
    //         `Заявка типа ${values.type}\n\n` +
    //         `Материал мебели: ${values.data.material}\n` +
    //         `Номер телефона: ${values.data.phone}\n`
    //         :
    //         `Новое сообщение от ${values.data.name}\n` +
    //         `Заявка типа ${values.type}\n\n` +
    //         `Материал пола: ${values.data.floorMaterial}\n` +
    //         `Материал стен: ${values.data.wallsMaterial}\n` +
    //         `Материал потолка: ${values.data.ceilingMaterial}\n` +
    //         `Утепление пола: ${values.data.floorInsulation}\n` +
    //         `Ширина: ${values.data.width}\n` +
    //         `Длина: ${values.data.length}\n` +
    //         `Высота: ${values.data.heights}\n` +
    //         `Демонтаж балконной группы: ${values.data.dismantling ? 'Да' : 'Нет'}\n` +
    //         `Остекление балкона: ${values.data.glazing ? 'Да' : 'Нет'}\n` +
    //         `Утепление стен: ${values.data.wallsInsulation ? 'Да' : 'Нет'}\n` +
    //         `Проводка электрики: ${values.data.electricity ? 'Да' : 'Нет'}\n` +
    //         `Внешняя обшивка: ${values.data.exteriorCladding ? 'Да' : 'Нет'}\n` +
    //         `Балконная мебель: ${values.data.balkonyFurniture ? 'Да' : 'Нет'}\n\n` +
    //         `Номер телефона: ${values.data.phone}`;

    //     const url = `https://api.telegram.org/bot7525633936:AAGuT7p0vL2MMfK8wF0qfbKCxvl3bECeXM4/sendMessage?ts=${new Date().getTime()}`;

    //     const payload = {
    //         chat_id: '681618053', // 681618053 6327912179
    //         text: message,
    //         parse_mode: 'Markdown'
    //     };
        
    //     axios.post(url, payload, {
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //     })
    //     .then(response => {
    //         console.log('Message sent:', response.data);
    //     })
    //     .catch(error => {
    //         console.error('Error sending message:', error.response ? error.response.data : error.message);
    //     });
    // }
}
