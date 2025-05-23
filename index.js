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
    var obj={
        a1:[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
        a2:[[,,],[,,],[,,],[,,],[,,],[,,],[,,],[,,],[],[],[],[],[],[],[],[]],
        a3:[[,,,,],[,,,,],[,,,,],[,,,,],[,,],[,,],[,,],[,,]],
        a4:[[,,,,,,,,],[,,,,,,,,],[,,,,],[,,,,]],
        a5:[[,,,,,,,,,,,,,,,,],[,,,,,,,,]],
        a6:[[,,,,,,,,,,,,,,,,,,,,,,,,]]
    }
    var queue = []
    var popped = []
    var progress = 0
    const data = [
        ["윤서연","SeoYeon","22aeff","fff","aa6721ee-f377-4d8b-edaa-1af78e844f00"],
        ["정혜린","HyeRin","9200ff","fff","f28b16f4-046e-4c3f-43ce-68b39a9dec00"],
        ["이지우","JiWoo","fff800","000","83dde759-c871-4b46-afa5-283333923b00"],
        ["김채연","ChaeYeon","98f21d","000","76907ffa-a859-46b0-6e51-b1cdaa8d3b00"],
        ["김유연","YooYeon","db0c74","fff","233096a1-8a64-490b-5eb1-b3e00f8eea00"],
        ["김수민","SooMin","fc83a4","000","297bb399-7bd8-4fd3-9e32-bb8ebe47ed00"],
        ["김나경","NaKyoung","6799a0","fff","5b7a39c7-406b-434d-ef80-24b53e445400"],
        ["공유빈","YuBin","ffe3e2","000","fc94989c-be36-429d-0ff9-0a7838db9800"],
        ["카에데","Kaede","ffc935","000","4f289d2f-6dd2-4057-072a-9c0ac57d7900"],
        ["서다현","DaHyun","ff9ad6","000","766e9b8f-5af0-4b29-4df8-5643fb19b700"],
        ["코토네","Kotone","ffde00","000","b348e441-9e74-4b1c-4f35-6b5f7a8c9c00"],
        ["곽연지","YeonJi","5974ff","fff","4c6bdee9-fad9-439e-1616-a6817d050800"],
        ["니엔","Nien","ff953f","000","ea57cbda-0a93-4c05-9c06-8bffb0728500"],
        ["박소현","SoHyun","1222b5","fff","1b3054a6-bd1c-4d26-24d4-a8c3ade24700"],
        ["신위","Xinyu","d51313","fff","380f2ff3-b690-4b80-93b8-be5af529a000"],
        ["마유","Mayu","fe8e76","000","9d99d7a5-54b6-4b28-891b-6aae450c0600"],
        ["린","Lynn","ac62b7","fff","bc97a137-d3d5-469d-8e0b-78a31731fa00"],
        ["주빈","JooBin","b7f54c","000","81067b94-62a0-4024-9feb-d97baccfc700"],
        ["정하연","HaYeon","52d9bb","000","35080be2-380e-4c2e-72ff-21306c793100"],
        ["박시온","ShiOn","ff428a","fff","e464e0e0-d48c-4438-e560-4b56f2d51900"],
        ["김채원","ChaeWon","c7a3e0","000","d9379cd6-0959-47d4-f4f6-315cfdb7f000"],
        ["설린","Sullin","7bba8d","000","2a3d9150-5e68-43d6-bbcf-41fd9c358600"],
        ["서아","SeoAh","cff3ff","000","e429aa91-95ac-4688-2b2f-9fab96dba000"],
        ["지연","JiYeon","ffab62","000","b84deb0e-42be-4028-5766-d2562822a700"]
    ]
    
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
            if (progress) localStorage.setItem("suspended",JSON.stringify({"obj":obj,"queue":queue,"popped":popped,"progress":progress}))
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
        //select(0)
        return 0
    }
    
    function result() {
        localStorage.suspended=""
        btn_left.remove()
        btn_right.remove()
        const final = obj.a6[0].map(v=>callData(v))
        localStorage.setItem("prevResults",JSON.stringify({"date":Date.now(),"results":final.map(v=>v[1])}))
        const content = final.map(v=>`<tr><td>${final.indexOf(v)+1}</td><td style="background:#${v[2]};color:#${v[3]}">${v[language]}</td></tr>`).join('')
        const content2 = final.slice(0,12).map((v,i)=>`<tr><td>${i+1}</td><td style="background:#${v[2]};color:#${v[3]}">${v[language]}</td><td>${i+13}</td><td style="background:#${final[i+12][2]};color:#${final[i+12][3]}">${final[i+12][language]}</td></tr>`).join('')
        const table = `<table><thead><tr><th>${language?'Rank':'순위'}</th><th>${language?'Name':'이름'}</th><tr></thead><tbody>${content}</tbody></table>`
        const table2 = `<table><thead><tr><th>${language?'Rank':'순위'}</th><th>${language?'Name':'이름'}</th><th>${language?'Rank':'순위'}</th><th>${language?'Name':'이름'}</th><tr></thead><tbody>${content2}</tbody></table>`
        span_progress.remove()
        document.querySelector('footer').remove()
        const btn_save = document.createElement('button')
        const btn_mode = document.createElement('button')
        const btn_save_wrap = document.createElement('div')
        const overflowArea = document.createElement('div')
        btn_save.addEventListener('click',()=>{
            capture()
        })
        var tableMode = 0
        const tablewrap = document.createElement('table-wrap')
        tablewrap.style.display="inline-block";
        overflowArea.style.overflowX="auto";
        overflowArea.style.width="100%";
        btn_mode.addEventListener('click',()=>{
            if (tableMode) {
                tablewrap.innerHTML = table
                btn_mode.innerHTML = language ? '2 columns' : '두 줄로'
                tableMode=0
            }
            else {
                tablewrap.innerHTML = table2
                btn_mode.innerHTML = language ? '1 column' : '한 줄로'
                tableMode=1
            }
        })
        btn_save.innerHTML = language ? 'Save' : '저장'
        btn_save.style.cssText = 'margin:10px !important'
        btn_mode.innerHTML = language ? '2 lines' : '두 줄로'
        btn_mode.style.cssText = 'margin:10px !important'
        btn_save_wrap.append(btn_save)
        btn_save_wrap.append(btn_mode)
        tablewrap.innerHTML = table
        document.querySelector('article').append(btn_save_wrap)
        document.querySelector('article').append(overflowArea)
        overflowArea.append(tablewrap)
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
    
    if (localStorage.getItem("suspended") && confirm(language?"There is a suspended Sort. Do you want to continue?":"중단된 Sort가 있습니다. 계속하시겠습니까?")) {
        const suspenedData = JSON.parse(localStorage.getItem("suspended"))
        obj = suspenedData.obj
        queue = suspenedData.queue
        popped = suspenedData.popped
        progress = suspenedData.progress

        const arr = obj[popped[0]]
        const left = callData(arr[popped[1]*2][popped[2]])
        const right = callData(arr[popped[1]*2+1][popped[3]])
        
        if (Math.random()<0.5) {
            display(btn_left,left,select0)
            display(btn_right,right,select1)
        } else {
            display(btn_right,left,select0)
            display(btn_left,right,select1)
        }

        span_progress.innerText = (progress*100/112).toFixed(1)+'%'
        span_progress.style.background = `linear-gradient(to right, #6e2cff ${progress*100/112}%, #000 ${progress*100/112}%)`
    } else {
        localStorage.suspended = ""
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
        while (popping()) {}
    }

    document.querySelector('button-wrap').append(btn_left)
    document.querySelector('button-wrap').append(btn_right)
    document.querySelector('footer').append(span_progress)

    return 0
}