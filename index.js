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
        ["윤서연","SeoYeon","22aeff","fff","e6949a0d-bc3b-48c6-2299-d371e3d1c100"],
        ["정혜린","HyeRin","9200ff","fff","07b2cd4a-2969-4b96-553c-5d3c76ee3b00"],
        ["이지우","JiWoo","fff800","000","78b76d07-4213-467f-bb69-15129d056300"],
        ["김채연","ChaeYeon","98f21d","000","a0406b3d-d778-45a9-d40b-77c0ae39a400"],
        ["김유연","YooYeon","db0c74","fff","bcf3edab-bf86-4f87-0f7b-4d20842cba00"],
        ["김수민","SooMin","fc83a4","000","5a58c903-0ef8-4687-eaf1-e649ece20600"],
        ["김나경","NaKyoung","6799a0","fff","f4fe4694-1003-46ac-8b8e-012b92597d00"],
        ["공유빈","YuBin","ffe3e2","000","f9b3d92d-a07a-40b9-0fde-5aa5bdf4dc00"],
        ["카에데","Kaede","ffc935","000","25bb0918-5fac-4b0b-84d1-487df806bf00"],
        ["서다현","DaHyun","ff9ad6","000","6f4c5abf-ec87-4e99-2f82-745ece32d400"],
        ["코토네","Kotone","ffde00","000","115350a6-c779-47eb-5339-6abc5ddbeb00"],
        ["곽연지","YeonJi","5974ff","fff","02d510ca-3511-426a-80c1-f311eba43200"],
        ["니엔","Nien","ff953f","000","3f37380d-8c57-4d02-bc19-86d743237d00"],
        ["박소현","SoHyun","1222b5","fff","9f454326-8b99-49d2-515a-6dd377840600"],
        ["신위","Xinyu","d51313","fff","382ea02f-3c71-42aa-a0a8-e8fc0210c900"],
        ["마유","Mayu","fe8e76","000","ed8f1ce9-01a4-4373-ae48-e0252dc5b600"],
        ["린","Lynn","ac62b7","fff","a65420d0-5f2d-4d1a-7d03-a9815dd72700"],
        ["주빈","JooBin","b7f54c","000","25b79966-692f-4f4d-27fa-55150bf42100"],
        ["정하연","HaYeon","52d9bb","000","949a286c-4ef0-43d2-0d2b-a92e78204600"],
        ["박시온","ShiOn","ff428a","fff","e9f8193f-dc98-4b39-d6d6-921637970000"],
        ["김채원","ChaeWon","c7a3e0","000","fc8e02ba-b32e-4ccc-5dba-6247c3b21500"],
        ["설린","Sullin","7bba8d","000","1a3405c8-c17a-4877-0907-42bbf00ce900"],
        ["서아","SeoAh","cff3ff","000","dd77678d-e989-409d-cc53-73a16b65c800"],
        ["지연","JiYeon","ffab62","000","3c984ac5-31b1-4f54-950b-6e548a73e100"]
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