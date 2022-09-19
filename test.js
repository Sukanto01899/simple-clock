let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let sesson = 'AM'
    let month = date.getMonth()
    let day = date.getDay()

    let dd = ['Sunday', 'Monday', 'Tuesday',' Wednesday',' Thirstday', 'Friday', 'Satarday']

    const mm = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    console.log(dd[day])