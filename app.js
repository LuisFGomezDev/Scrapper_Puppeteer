const puppeteer = require("puppeteer");
const colors = require('colors');

tag = "dogs";
likes = 3;

let counter = 0;

(async() => {

    try {
        //Abrir Chromium
        const browser = await puppeteer.launch({
            headless: false, 
            devtools: true,
            args: ['--disable-web-security'], 
        });

        //Abrir nueva pagina en el anterior navegador
        const page = await browser.newPage();

        await page.setViewport({
            width: 1200, height: 800,
            deviceScaleFactor: 2,
            });

        await page.goto("https://instagram.com", { waitUntil: 'networkidle2'});

        //Seleccionar los campos de Instagram para Login y escribir el username

        //Campo Username
        await page.waitForSelector("input[name='username']", { visible: true, });
        await page.type("input[name='username']", "Lfernangm", { delay: 300});

        //Campo Password
        await page.waitForSelector("input[name='password']", { visible: true, });
        await page.type("input[name='password']", "3Icloudc$$", { delay: 300});

        //Dar click en el boton Log in
        await page.click("button[type='submit']");

        /*Dar Click al boton "Ahora No"*/
        await page.waitForSelector("div[class='_ac8f']", { visible: true, });
        await page.click("div[class='_ac8f']");

        /*Dar Click al boton "Turn On Notifications"*/
        await page.waitForSelector("div[class='_a9-z'] > button:nth-child(2)", { visible: true, });
        await page.click("div[class='_a9-z'] > button:nth-child(2)");

        //Ir al Hastag "dogs"
        await page.goto(`https://www.instagram.com/explore/tags/${tag}/`, { waitUntil: 'networkidle2'});
        

        for(let i = 0; i < likes; i++)
        {//Inicio del For

            //await page.waitForSelector("button[class='_abl-']", { visible: true, });

            //Esperamos que cargue cualquier DIV de adentro en Instagram

            await page.waitForSelector("div[class='_aagu']", { visible: true, });

            //Click para el DIV que contiene la imagen
            await page.click("div[class='_aagu']");

            //Click en el corazon para LIKE en fotos
            //await page.click("body > div.x1n2onr6.xzkaem6 > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div.xb88tzc.xw2csxc.x1odjw0f.x5fp0pe.x1qjc9v5.xjbqb8w.x1lcm9me.x1yr5g0i.xrt01vj.x10y3i5r.xr1yuqi.xkrivgy.x4ii5y1.x1gryazu.x15h9jz8.x47corl.xh8yej3.xir0mxb.x1juhsu6 > div > article > div > div._ae65 > div > div > div._ae2s._ae3v._ae3w > section._aamu._ae3_._ae47._ae48 > span._aamw > div");
            
            await page.click("body > div.x1n2onr6.xzkaem6 > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div.xb88tzc.xw2csxc.x1odjw0f.x5fp0pe.x1qjc9v5.xjbqb8w.x1lcm9me.x1yr5g0i.xrt01vj.x10y3i5r.xr1yuqi.xkrivgy.x4ii5y1.x1gryazu.x15h9jz8.x47corl.xh8yej3.xir0mxb.x1juhsu6 > div > article > div > div._ae65 > div > div > div._ae2s._ae3v._ae3w > section._aamu._ae3_._ae47._ae48 > span._aamw > div > div");

            //_abl-     button flecha
            //body > div.x1n2onr6.xzkaem6 > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div:nth-child(1) > div > div > div > button
            
            /*Dar Click al boton "NEXT"*/
            await page.waitForSelector("button[class='_abl-']", { visible: true, });
            await page.click("button[class='_abl-']");
            counter++;
            await page.waitForTimeout(2000);

            console.log("Llevamos:", counter);

        }//Fin del For

        console.log("Termino el Proceso...!");
        await process.exit();

        
        
    } catch (error) {
        console.error(error);
    }

})();