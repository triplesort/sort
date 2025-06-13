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
        ["윤서연","SeoYeon","22aeff","fff","42867d41-0bfa-4621-3443-582335cea700"],
        ["정혜린","HyeRin","9200ff","fff","8a63e7b6-f32d-47c6-0673-61cb194f2500"],
        ["이지우","JiWoo","fff800","000","7c9b67a3-30b1-4af8-c1f9-d2b20b6eec00"],
        ["김채연","ChaeYeon","98f21d","000","205bc405-7fc2-459c-34da-ddee0681ae00"],
        ["김유연","YooYeon","db0c74","fff","72f940ef-3efe-4a2b-7bc3-3a310586c100"],
        ["김수민","SooMin","fc83a4","000","5c4fa552-67d9-46bb-7c59-2e908e89d800"],
        ["김나경","NaKyoung","6799a0","fff","aeee9b5c-32ff-4510-23ba-9a5aec49f500"],
        ["공유빈","YuBin","ffe3e2","000","72a33977-96ce-4347-1dd5-d9f5127f0600"],
        ["카에데","Kaede","ffc935","000","fe191efe-ec6f-449b-dae4-3f8c0ce68d00"],
        ["서다현","DaHyun","ff9ad6","000","32aa4a12-6742-4fe1-f406-402a86c61400"],
        ["코토네","Kotone","ffde00","000","653c2486-0386-46b6-1a34-6826432f6b00"],
        ["곽연지","YeonJi","5974ff","fff","6f404018-bee1-4e1e-8e43-364c1cf3d000"],
        ["니엔","Nien","ff953f","000","df91388e-fbab-4947-354b-992bddeaea00"],
        ["박소현","SoHyun","1222b5","fff","6c93ce8d-f23e-4f8c-1c5a-f4db4b492300"],
        ["신위","Xinyu","d51313","fff","c5c0f2c0-2f5f-4ba8-0790-cb6498fd5d00"],
        ["마유","Mayu","fe8e76","000","ab88afe6-9407-460f-3b96-47b4a8d42200"],
        ["린","Lynn","ac62b7","fff","2c5f1ae8-99df-43d7-8ea5-a1ad86d8cc00"],
        ["주빈","JooBin","b7f54c","000","98e28ae8-4535-411e-719a-d686cd5d6b00"],
        ["정하연","HaYeon","52d9bb","000","bd649903-860f-430b-70e7-11e3bee07200"],
        ["박시온","ShiOn","ff428a","fff","9a4c0082-01e8-4483-df6e-0418281c6200"],
        ["김채원","ChaeWon","c7a3e0","000","ae595c76-1111-45c4-45e7-dfbf21c8a600"],
        ["설린","Sullin","7bba8d","000","294b47d4-3814-4526-f877-6f60a6480000"],
        ["서아","SeoAh","cff3ff","000","56fc9299-0c81-468a-3b1b-43523ab48700"],
        ["지연","JiYeon","ffab62","000","994de483-c445-43af-690c-952c32c5e800"]
    ]

    data.forEach(i=>{
        const img = new Image()
        img.src = 'https://imagedelivery.net/qQuMkbHJ-0s6rwu8vup_5w/'+i[4]+'/thumbnail'
        i.push(img)
    })
    
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
                // setTimeout(()=>{
                //     if (data.indexOf(left) > data.indexOf(right)) btn_left.click()
                //     else btn_right.click()
                // },10)
            } else {
                display(btn_right,left,select0)
                display(btn_left,right,select1)
                // setTimeout(() => {
                //     if (data.indexOf(left) > data.indexOf(right)) btn_right.click()
                //     else btn_left.click()
                // }, 10);
            }
            // const final = new Array(24).fill().map((v,i)=>(callData('a600'+String(i).padStart(2,'0'))||[undefined])[0])
            // console.log(final)    
            return 0
        } else {
            return 1
        }
    }

    function display(element,source,handler) {
        // const img = document.createElement('img')
        // img.src = 'https://imagedelivery.net/qQuMkbHJ-0s6rwu8vup_5w/'+source[4]+'/thumbnail'
        const img = source[5]
        const span = document.createElement('span')
        setTimeout(() => {
            element.innerHTML = ''
            span.innerText = source[language]
            element.style.background = '#'+source[2]
            element.style.color = '#'+source[3]
            element.append(img)
            element.append(span)
            element.style.transform = "rotateY(0)"
            element.addEventListener('click',handler)
            // setTimeout(()=>{
            // },250)
        }, 180);
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
        // btn_left.innerHTML = `<p>Loading</p>`
        // btn_right.innerHTML = `<p>Loading</p>`
        btn_left.style.transform = "rotateY(90deg)"
        btn_right.style.transform = "rotateY(90deg)"
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
        // console.log(progress)
        // console.log(JSON.stringify(obj,undefined,2))
        // console.log(obj)
        // console.log(Object.values(obj).map(u=>u.map(v=>v.join()).join('/')).join('\n'))
        // console.log(queue.join('\n'))
        span_progress.innerText = (progress*100/112).toFixed(1)+'%'
        span_progress.style.background = `linear-gradient(to right, #6e2cff ${progress*100/112}%, #000 ${progress*100/112}%)`
        while (popping()) {}
        // select(0)
        return 0
    }
    
    function result() {
        localStorage.suspended=""
        btn_left.remove()
        btn_right.remove()
        const final = obj.a6[0].map(v=>callData(v))
        const prev = JSON.parse(localStorage.getItem("prevResults"))
        var prevDate
        if (prev) {
            prevDate = new Date(prev.date)
            prev.results.forEach((v,i)=>final.find(x=>x[1]==v).push(i))
        }
        localStorage.setItem("prevResults",JSON.stringify({"date":Date.now(),"results":final.map(v=>v[1])}))
        const content = final.map((v,i)=>`<tr><td>${i+1}</td><td style="background:#${v[2]};color:#${v[3]}">${v[language]}</td></tr>`).join('')
        // const content = final.map((v,i)=>`<tr><td>${i+1}</td><td style="background:#${v[2]};color:#${v[3]}">${v[language]}</td>${prev?`<td>${v[6]-i>0?"▲"+(v[6]-i):v[6]-i<0?"▼"+(i-v[6]):"-"}</td>`:''}</tr>`).join('')
        const content2 = final.slice(0,12).map((v,i)=>`<tr><td>${i+1}</td><td style="background:#${v[2]};color:#${v[3]}">${v[language]}</td><td>${i+13}</td><td style="background:#${final[i+12][2]};color:#${final[i+12][3]}">${final[i+12][language]}</td></tr>`).join('')
        const content3 = final.map((v,i)=>`<tr><td>${i+1}${prev?` <span style="font-size:0.75em;color:${v[6]-i>0?"red":v[6]-i<0?"blue":"grey"}">(${v[6]-i>0?"▲"+(v[6]-i):v[6]-i<0?"▼"+(i-v[6]):"-"})</span>`:''}</td><td style="background:#${v[2]};color:#${v[3]}">${v[language]}</td></tr>`).join('')
        // const content3 = final.map((v,i)=>`<tr><td>${i+1}</td><td style="background:#${v[2]};color:#${v[3]}">${v[language]}${prev?` (${v[6]-i>0?"▲"+(v[6]-i):v[6]-i<0?"▼"+(i-v[6]):"-"})`:''}</td></tr>`).join('')
        const content4 = final.slice(0,12).map((v,i)=>`<tr><td>${i+1}${prev?` <span style="font-size:0.75em;color:${v[6]-i>0?"red":v[6]-i<0?"blue":"grey"}">(${v[6]-i>0?"▲"+(v[6]-i):v[6]-i<0?"▼"+(i-v[6]):"-"})</span>`:''}</td><td style="background:#${v[2]};color:#${v[3]}">${v[language]}</td><td>${i+13}${prev?` <span style="font-size:0.75em;color:${final[i+12][6]-i-12>0?"red":final[i+12][6]-i-12<0?"blue":"grey"}">(${final[i+12][6]-i-12>0?"▲"+(final[i+12][6]-i-12):final[i+12][6]-i-12<0?"▼"+(i+12-final[i+12][6]):"-"})</span>`:''}</td><td style="background:#${final[i+12][2]};color:#${final[i+12][3]}">${final[i+12][language]}</td></tr>`).join('')
        // const content4 = final.slice(0,12).map((v,i)=>`<tr><td>${i+1}</td><td style="background:#${v[2]};color:#${v[3]}">${v[language]}${prev?` (${v[6]-i>0?"▲"+(v[6]-i):v[6]-i<0?"▼"+(i-v[6]):"-"})`:''}</td><td>${i+13}</td><td style="background:#${final[i+12][2]};color:#${final[i+12][3]}">${final[i+12][language]}${prev?` (${final[i+12][6]-i-12>0?"▲"+(final[i+12][6]-i-12):final[i+12][6]-i-12<0?"▼"+(i+12-final[i+12][6]):"-"})`:''}</td></tr>`).join('')
        // const content4 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23].map(i=>`<tr><td>${i+1}</td><td style="background:#${final[i][2]};color:#${final[i][3]}">${final[i][language]}</td><td style="background:#${prevFinal[i][2]};color:#${prevFinal[i][3]}">${prevFinal[i][language]}</td></tr>`).join('')
        const table = `<table><thead><tr><th>${language?'Rank':'순위'}</th><th>${language?'Name':'이름'}</th><tr></thead><tbody>${content}</tbody></table>`
        const table2 = `<table><thead><tr><th>${language?'Rank':'순위'}</th><th>${language?'Name':'이름'}</th><th>${language?'Rank':'순위'}</th><th>${language?'Name':'이름'}</th><tr></thead><tbody>${content2}</tbody></table>`
        const table3 = `<table><thead><tr><th>${language?'Rank':'순위'}</th><th>${language?'Name':'이름'}</th><tr></thead><tbody>${content3}</tbody></table>`
        const table4 = `<table><thead><tr><th>${language?'Rank':'순위'}</th><th>${language?'Name':'이름'}</th><th>${language?'Rank':'순위'}</th><th>${language?'Name':'이름'}</th><tr></thead><tbody>${content4}</tbody></table>`
        // const table3 = `<table><thead><tr><th></th><th>${new Date().getMonth()+1}/${new Date().getDate()}</th><th>${prevDate.getMonth()+1}/${prevDate.getDate()}</th><tr></thead><tbody>${content3}</tbody></table>`
        span_progress.remove()
        document.querySelector('footer').remove()
        const btn_save = document.createElement('button')
        const btn_mode = document.createElement('button')
        const btn_compare = document.createElement('button')
        const btn_save_wrap = document.createElement('div')
        const overflowArea = document.createElement('div')
        btn_save.addEventListener('click',()=>{
            capture()
        })
        var tableMode = 0
        var tableCompare = 0
        const tablewrap = document.createElement('table-wrap')
        tablewrap.style.display="inline-block";
        overflowArea.style.overflowX="auto";
        overflowArea.style.width="100%";
        btn_mode.addEventListener('click',()=>{
            if (tableMode&&tableCompare) {
                tablewrap.innerHTML = table3
                btn_mode.innerHTML = language ? '2 columns' : '두 줄로'
                tableMode=0
            }
            else if (tableMode) {
                tablewrap.innerHTML = table
                btn_mode.innerHTML = language ? '2 columns' : '두 줄로'
                tableMode=0
            }
            else if (tableCompare) {
                tablewrap.innerHTML = table4
                btn_mode.innerHTML = language ? '1 column' : '한 줄로'
                tableMode=1
            }
            else {
                tablewrap.innerHTML = table2
                btn_mode.innerHTML = language ? '1 column' : '한 줄로'
                tableMode=1
            }
        })
        btn_compare.addEventListener('click',()=>{
            if (tableCompare&&tableMode) {
                tablewrap.innerHTML = table2
                tableCompare=0
            }
            else if (tableCompare) {
                tablewrap.innerHTML = table
                tableCompare=0
            }
            else if (tableMode) {
                tablewrap.innerHTML = table4
                tableCompare=1
            }
            else {
                tablewrap.innerHTML = table3
                tableCompare=1
            }
        })
        btn_save.innerHTML = language ? 'Save' : '저장'
        btn_save.style.cssText = 'margin:10px !important'
        btn_mode.innerHTML = language ? '2 lines' : '두 줄로'
        btn_mode.style.cssText = 'margin:10px !important'
        btn_compare.innerHTML = language ? 'Compare' : '비교'
        btn_compare.style.cssText = 'margin:10px !important'
        btn_save_wrap.append(btn_save)
        btn_save_wrap.append(btn_mode)
        if (prev) {
            btn_save_wrap.append(btn_compare)
        }
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