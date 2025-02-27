function run() {
    document.querySelector('article').innerHTML='<button-wrap />'
    document.querySelector('footer').innerHTML=''
    const btn_left = document.createElement('member')
    const btn_right = document.createElement('member')
    const span_progress = document.createElement('p')
    span_progress.innerText = '0.0%'
    span_progress.style.color = '#fff'
    span_progress.style.width = '90%'
    span_progress.style.background = `#000`
    const obj={
        a1:[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
        a2:[[,,],[,,],[,,],[,,],[,,],[,,],[,,],[,,],[],[],[],[],[],[],[],[]],
        a3:[[,,,,],[,,,,],[,,,,],[,,,,],[,,],[,,],[,,],[,,]],
        a4:[[,,,,,,,,],[,,,,,,,,],[,,,,],[,,,,]],
        a5:[[,,,,,,,,,,,,,,,,],[,,,,,,,,]],
        a6:[[,,,,,,,,,,,,,,,,,,,,,,,,]]
    }
    const queue = []
    var popped = []
    var progress = 0
    const data = [
        ["윤서연","SeoYeon","22aeff","fff","a06a58b3-0e42-412b-8fbd-5365e8b2e600"],
        ["정혜린","HyeRin","9200ff","fff","cb680cdb-c828-462b-d407-31a40844d600"],
        ["이지우","JiWoo","fff800","000","2c62b9ea-41eb-4e46-503c-a3843466d300"],
        ["김채연","ChaeYeon","98f21d","000","719345ef-e209-4170-3317-64d3a3dbae00"],
        ["김유연","YooYeon","db0c74","fff","e554dd93-82ca-433b-62fb-995f78d91000"],
        ["김수민","SooMin","fc83a4","000","84ae2a1e-8972-42c3-a250-ce5c1032c100"],
        ["김나경","NaKyoung","6799a0","fff","ed3dece3-7e52-412f-5db2-6b4e92092100"],
        ["공유빈","YuBin","ffe3e2","000","f693c934-3059-4b92-b44a-3826605b2500"],
        ["카에데","Kaede","ffc935","000","e724420e-23eb-42a1-0155-79b17708d800"],
        ["서다현","DaHyun","ff9ad6","000","dd72bafe-8d65-496c-16f8-85daa2be7900"],
        ["코토네","Kotone","ffde00","000","5b158bdb-2425-4bd9-2a56-60864add6e00"],
        ["곽연지","YeonJi","5974ff","fff","dc10b38f-d94f-4539-8700-92521dfb6c00"],
        ["니엔","Nien","ff953f","000","19b9a11c-a52e-464d-3e2f-89c5dc902b00"],
        ["박소현","SoHyun","1222b5","fff","075da2bd-73b1-4540-1960-915ed1248400"],
        ["신위","Xinyu","d51313","fff","fecb2227-0ec9-47ae-f64f-7d2f46d12700"],
        ["마유","Mayu","fe8e76","000","fc7d71f8-4f32-425c-7252-a5b14c4c7900"],
        ["린","Lynn","ac62b7","fff","9c294f95-4ba7-4f61-4eeb-1014a33df300"],
        ["주빈","JooBin","b7f54c","000","e563d01a-2cee-4209-3808-aea3e8c7c400"],
        ["정하연","HaYeon","52d9bb","000","44797c2d-7fea-41bd-83b6-323294835f00"],
        ["박시온","ShiOn","ff428a","fff","13513781-77e5-48f1-00f1-eb7053a63100"],
        ["김채원","ChaeWon","c7a3e0","000","e304f533-1360-4ea9-aa81-efaf14bed800"],
        ["설린","Sullin","7bba8d","000","cd11ad5c-6e67-49a2-6507-bca738967c00"],
        ["서아","SeoAh","cff3ff","000","1ab799fe-d6be-4dea-7d52-e3c4af961200"],
        ["지연","JiYeon","ffab62","000","b2afc966-d504-435c-f771-33e478511500"]
    ]
    const init=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    const temp = init.map(v=>[v,Math.random()]).sort((x,y)=>x[1]-y[1]).map(v=>v[0])
    for (let i=0;i<8;i++){
        obj.a1[i].push(temp[3*i])
        obj.a1[i+8].push(temp[3*i+1])
        obj.a2[i+8].push(temp[3*i+2])
        queue.push(['a1',i,0,0])
        queue.push(['a2',i,0,0])
    }
    for (let i=0;i<4;i++) {
        queue.push(['a3',i,0,0])
    }
    for (let i=0;i<2;i++) {
        queue.push(['a4',i,0,0])
    }
    queue.push(['a5',0,0,0])
    
    function popping() {
        if (queue.length==0) {
            result()
            return 0
        }
        const index = Math.floor(queue.length * Math.random())
        popped = queue[index]
        const arr = obj[popped[0]]
        const left = callData(arr[popped[1]*2][popped[2]])
        const right = callData(arr[popped[1]*2+1][popped[3]])
        if (left && right) {
            queue.splice(queue.indexOf(popped),1)
            if (Math.random()<0.5) {
                display(btn_left,left,select0)
                display(btn_right,right,select1)
            } else {
                display(btn_right,left,select0)
                display(btn_left,right,select1)
            }
            // const final = new Array(24).fill().map((v,i)=>(callData('a600'+String(i).padStart(2,'0'))||[undefined])[0])
            // console.log(final)    
            return 0
        } else {
            return 1
        }
    }

    function display(element,source,handler) {
        element.innerHTML = ''
        const img = document.createElement('img')
        img.src = 'https://imagedelivery.net/qQuMkbHJ-0s6rwu8vup_5w/'+source[4]+'/thumbnail'
        const span = document.createElement('span')
        span.innerText = source[language]
        element.style.background = '#'+source[2]
        element.style.color = '#'+source[3]
        element.append(img)
        element.append(span)
        element.addEventListener('click',handler)
        return 0
    }
    
    function callData(key) {
        if (typeof(key)=='number') return data[key]
        if (!key) {return undefined}
        const d = String(obj[key.slice(0,2)][parseInt(key.slice(2,4))][parseInt(key.slice(4,6))])
        if (d.startsWith('a')) {
            return callData(d)
        } else {
            return data[d]
        }
    }
    
    function select(num) {
        btn_left.removeEventListener('click',select0)
        btn_right.removeEventListener('click',select0)
        btn_left.removeEventListener('click',select1)
        btn_right.removeEventListener('click',select1)
        btn_left.innerHTML = `<p>Loading</p>`
        btn_right.innerHTML = `<p>Loading</p>`
        const arrkey = popped[0]
        const arr = obj[arrkey]
        const nextarrkey = arrkey[0]+(parseInt(arrkey[1])+1)
        const win = arrkey+String(popped[1]*2+num).padStart(2,'0')+String(popped[2+num]).padStart(2,'0')
        const pushed = obj[nextarrkey][popped[1]]
        const index = pushed.filter(i=>i).length
        pushed.splice(index,0,win)
        pushed.pop()
        progress += 1
        if (arr[popped[1]*2+num].length==popped[2+num]+1) {
            for (let i=popped[3-num];i<arr[popped[1]*2+1-num].length;i++) {
                const index = pushed.filter(j=>j).length
            const lose = arrkey+String(popped[1]*2+1-num).padStart(2,'0')+String(i).padStart(2,'0')
            pushed.splice(index,0,lose)
            pushed.pop()
            progress += 1
        }
        } else {
            queue.push([popped[0],popped[1],popped[2]+1-num,popped[3]+num])
        }
        popped=[]
        span_progress.innerText = (progress*100/112).toFixed(1)+'%'
        span_progress.style.background = `linear-gradient(to right, #6e2cff ${progress*100/112}%, #000 ${progress*100/112}%)`
        while (popping()) {}
        // select(0)
        return 0
    }
    
    function result() {
        btn_left.remove()
        btn_right.remove()
        const final = obj.a6[0].map(v=>callData(v))
        const content = final.map(v=>`<tr><td>${final.indexOf(v)+1}</td><td style="background:#${v[2]};color:#${v[3]}">${v[language]}</td></tr>`).join('')
        // const content2 = final.slice(0,12).map((v,i)=>`<tr><td>${i+1}</td><td style="background:#${v[2]};color:#${v[3]}">${v[language]}</td><td>${i+13}</td><td style="background:#${final[i+12][2]};color:#${final[i+12][3]}">${final[i+12][language]}</td></tr>`).join('')
        const table = `<table><thead><tr><th>${language?'Rank':'순위'}</th><th>${language?'Name':'이름'}</th><tr></thead><tbody>${content}</tbody></table>`
        // const table2 = `<table><thead><tr><th>${language?'Rank':'순위'}</th><th>${language?'Name':'이름'}</th><th>${language?'Rank':'순위'}</th><th>${language?'Name':'이름'}</th><tr></thead><tbody>${content2}</tbody></table>`
        span_progress.remove()
        document.querySelector('footer').remove()
        const btn_save = document.createElement('button')
        const btn_save_wrap = document.createElement('div')
        btn_save.addEventListener('click',()=>{
            capture()
        })
        btn_save.innerHTML = language ? 'Save' : '저장'
        btn_save.style.cssText = 'margin:10px !important'
        btn_save_wrap.append(btn_save)
        const tablewrap = document.createElement('table-wrap')
        tablewrap.innerHTML = table
        document.querySelector('article').append(btn_save_wrap)
        document.querySelector('article').append(tablewrap)
        document.querySelector('article').style.height = ''
        return 0
    }
    
    async function capture() {
        const span1 = document.createElement('p')
        span1.innerText = 'https://sort.wav.haus/'
        span1.style.fontSize = '11px'
        const span2 = document.createElement('p')
        span2.innerText = 'tripleS Sort'
        span2.style.fontWeight = 'bold'
        span2.style.fontSize = '19px'
        document.querySelector('table-wrap').append(span2)
        document.querySelector('table-wrap').append(span1)
        const c = await html2canvas(document.querySelector('table-wrap'), {scale:2})
        span1.remove()
        span2.remove()
        c.toBlob(async blob=>{
            const downloadLink = document.createElement("a");
            downloadLink.download = 'tripleS_sort_'+new Date()*1;
            downloadLink.href = URL.createObjectURL(blob);
            downloadLink.click();
        })
        return 0
    }

    function select0() {
        select(0)
        return 0
    }
    function select1() {
        select(1)
        return 0
    }
    
    while (popping()) {}

    document.querySelector('button-wrap').append(btn_left)
    document.querySelector('button-wrap').append(btn_right)
    document.querySelector('footer').append(span_progress)

    return 0
}