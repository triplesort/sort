function run() {
    qs = s => document.querySelector(s)
    ce = s => document.createElement(s)
    innerH = (e,c) => e.innerHTML = c
    innerT = (e,c) => e.innerText = c
    append = (p,c) => p.append(c)

    innerH(qs('article'),'<button-wrap />')
    innerH(qs('footer'),'')
    const btn_left = ce('member')
    const btn_right = ce('member')
    const span_progress = ce('p')
    innerT(span_progress,'0.0%')
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
        ["윤서연","SeoYeon","22aeff","fff","79f33df8-b0c9-47b7-60e0-da705e77e500"],
        ["정혜린","HyeRin","9200ff","fff","8214bbdc-eaf5-4b3b-6a53-0dd3b7387e00"],
        ["이지우","JiWoo","fff800","000","81705f26-becd-49c2-d82e-2cd7b2d58600"],
        ["김채연","ChaeYeon","98f21d","000","0c7a91c3-a8f1-4fbc-9079-22e4269fb000"],
        ["김유연","YooYeon","db0c74","fff","e677a38c-7b5b-4819-f5b8-a641dd46f800"],
        ["김수민","SooMin","fc83a4","000","0c0e1bec-b9f1-4148-a9bc-f6bd2caa2900"],
        ["김나경","NaKyoung","6799a0","fff","60745423-b026-4750-bf96-d1671e196800"],
        ["공유빈","YuBin","ffe3e2","000","bd445d60-a78f-4458-49e1-5b0568aff600"],
        ["카에데","Kaede","ffc935","000","b29e2350-fb52-4b0e-6731-051b2e4aaf00"],
        ["서다현","DaHyun","ff9ad6","000","2b6bcaf8-8ac7-40e4-10cf-0acc5dc50000"],
        ["코토네","Kotone","ffde00","000","75d6de2f-6e2d-4478-6998-f5e890fc3500"],
        ["곽연지","YeonJi","5974ff","fff","84aaa919-14a8-4439-89b8-8f7850510a00"],
        ["니엔","Nien","ff953f","000","d0e2aa97-5932-468c-b5c5-c169408acc00"],
        ["박소현","SoHyun","1222b5","fff","f9938b82-3ca9-4535-268b-c62d656ece00"],
        ["신위","Xinyu","d51313","fff","5883e7ba-1204-4629-03f9-70570576c500"],
        ["마유","Mayu","fe8e76","000","5a0913d9-46e5-4669-758c-64dbb45d1c00"],
        ["린","Lynn","ac62b7","fff","f4d08676-a67e-45d2-33d1-05a1f5163b00"],
        ["주빈","JooBin","b7f54c","000","52cbc4bd-00b1-4fb8-daab-0b2a057e8600"],
        ["정하연","HaYeon","52d9bb","000","3786b239-4b83-4d62-0040-884e73281900"],
        ["박시온","ShiOn","ff428a","fff","f4178d87-4a67-448d-28f6-ffb876305300"],
        ["김채원","ChaeWon","c7a3e0","000","b5ad778a-f794-4bca-8756-1c83807d5800"],
        ["설린","Sullin","7bba8d","000","eeec64f7-28a5-45cf-2794-d99c0189a900"],
        ["서아","SeoAh","cff3ff","000","25e61d21-6a16-48da-0360-cf0b19aa5200"],
        ["지연","JiYeon","ffab62","000","2b07ffb1-3fe7-44ce-1663-031db0e68600"]
    ]

    data.forEach(i=>{
        const img = new Image()
        img.src = 'https://imagedelivery.net/qQuMkbHJ-0s6rwu8vup_5w/'+i[4]+'/thumbnail'
        i.push(img)
    })
    
    function popping() {
        if (queue.length==0) {
            return result()
        }
        const index = Math.floor(queue.length * Math.random())
        popped = queue[index]
        const arr = obj[popped[0]]
        const left = callData(arr[popped[1]*2][popped[2]])
        const right = callData(arr[popped[1]*2+1][popped[3]])
        if (left && right) {
            queue.splice(queue.indexOf(popped),1)
            if (progress) localStorage.setItem("suspended",JSON.stringify({"obj":obj,"queue":queue,"popped":popped,"progress":progress}))
            return (Math.random()<0.5) ? display(left,right,select0,select1) : display(right,left,select1,select0)
        } else {
            return 1
        }
    }

    function displayOne(element,source,handler) {
        const img = source[5]
        const span = ce('span')
        setTimeout(() => {
            innerH(element,'')
            innerT(span,source[language])
            element.style.background = '#'+source[2]
            element.style.color = '#'+source[3]
            append(element,img)
            append(element,span)
            element.style.transform = "rotateY(0)"
            element.addEventListener('click',handler)
        }, 180);
        return 0
    }

    function display(left,right,handlerL,handlerR) {
        displayOne(btn_left,left,handlerL)
        displayOne(btn_right,right,handlerR)
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
        innerT(span_progress,(progress*100/112).toFixed(1)+'%')
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
        if (prev) prev.results.forEach((v,i)=>final.find(x=>x[1]==v).push(i))
        localStorage.setItem("prevResults",JSON.stringify({"date":Date.now(),"results":final.map(v=>v[1])}))
        const contentOneOff = final.map((v,i)=>`<tr><td>${i+1}</td><td style="background:#${v[2]};color:#${v[3]}">${v[language]}</td></tr>`).join('')
        const contentTwoOff = final.slice(0,12).map((v,i)=>`<tr><td>${i+1}</td><td style="background:#${v[2]};color:#${v[3]}">${v[language]}</td><td>${i+13}</td><td style="background:#${final[i+12][2]};color:#${final[i+12][3]}">${final[i+12][language]}</td></tr>`).join('')
        const contentOneOn = final.map((v,i)=>`<tr><td>${i+1}${prev?` <span style="font-size:0.75em;color:${v[6]-i>0?"red":v[6]-i<0?"blue":"grey"}">(${v[6]-i>0?"▲"+(v[6]-i):v[6]-i<0?"▼"+(i-v[6]):"-"})</span>`:''}</td><td style="background:#${v[2]};color:#${v[3]}">${v[language]}</td></tr>`).join('')
        const contentTwoOn = final.slice(0,12).map((v,i)=>`<tr><td>${i+1}${prev?` <span style="font-size:0.75em;color:${v[6]-i>0?"red":v[6]-i<0?"blue":"grey"}">(${v[6]-i>0?"▲"+(v[6]-i):v[6]-i<0?"▼"+(i-v[6]):"-"})</span>`:''}</td><td style="background:#${v[2]};color:#${v[3]}">${v[language]}</td><td>${i+13}${prev?` <span style="font-size:0.75em;color:${final[i+12][6]-i-12>0?"red":final[i+12][6]-i-12<0?"blue":"grey"}">(${final[i+12][6]-i-12>0?"▲"+(final[i+12][6]-i-12):final[i+12][6]-i-12<0?"▼"+(i+12-final[i+12][6]):"-"})</span>`:''}</td><td style="background:#${final[i+12][2]};color:#${final[i+12][3]}">${final[i+12][language]}</td></tr>`).join('')
        const tableOneOff = `<table><thead><tr><th>${language?'Rank':'순위'}</th><th>${language?'Name':'이름'}</th><tr></thead><tbody>${contentOneOff}</tbody></table>`
        const tableTwoOff = `<table><thead><tr><th>${language?'Rank':'순위'}</th><th>${language?'Name':'이름'}</th><th>${language?'Rank':'순위'}</th><th>${language?'Name':'이름'}</th><tr></thead><tbody>${contentTwoOff}</tbody></table>`
        const tableOneOn = `<table><thead><tr><th>${language?'Rank':'순위'}</th><th>${language?'Name':'이름'}</th><tr></thead><tbody>${contentOneOn}</tbody></table>`
        const tableTwoOn = `<table><thead><tr><th>${language?'Rank':'순위'}</th><th>${language?'Name':'이름'}</th><th>${language?'Rank':'순위'}</th><th>${language?'Name':'이름'}</th><tr></thead><tbody>${contentTwoOn}</tbody></table>`
        span_progress.remove()
        qs('footer').remove()
        const btn_save = ce('button')
        const btn_mode = ce('button')
        const btn_compare = ce('button')
        const btn_save_wrap = ce('div')
        const overflowArea = ce('div')
        btn_save.addEventListener('click',()=>{
            capture()
        })
        var twoColumn = false
        var compareOn = false
        const tablewrap = ce('table-wrap')
        tablewrap.style.display="inline-block";
        overflowArea.style.overflowX="auto";
        overflowArea.style.width="100%";
        btn_mode.addEventListener('click',()=>{
            if (twoColumn&&compareOn) {
                innerH(tablewrap,tableOneOn)
                innerH(btn_mode,language ? '2 columns' : '두 줄로')
                twoColumn=false
            }
            else if (twoColumn) {
                innerH(tablewrap,tableOneOff)
                innerH(btn_mode,language ? '2 columns' : '두 줄로')
                twoColumn=false
            }
            else if (compareOn) {
                innerH(tablewrap,tableTwoOn)
                innerH(btn_mode,language ? '1 column' : '한 줄로')
                twoColumn=true
            }
            else {
                innerH(tablewrap,tableTwoOff)
                innerH(btn_mode,language ? '1 column' : '한 줄로')
                twoColumn=true
            }
        })
        btn_compare.addEventListener('click',()=>{
            if (compareOn&&twoColumn) {
                innerH(tablewrap,tableTwoOff)
                compareOn=false
            }
            else if (compareOn) {
                innerH(tablewrap,tableOneOff)
                compareOn=false
            }
            else if (twoColumn) {
                innerH(tablewrap,tableTwoOn)
                compareOn=true
            }
            else {
                innerH(tablewrap,tableOneOn)
                compareOn=true
            }
        })
        innerH(btn_save,language ? 'Save' : '저장')
        btn_save.style.cssText = 'margin:10px !important'
        innerH(btn_mode,language ? '2 lines' : '두 줄로')
        btn_mode.style.cssText = 'margin:10px !important'
        innerH(btn_compare,language ? 'Compare' : '비교')
        btn_compare.style.cssText = 'margin:10px !important'
        append(btn_save_wrap,btn_save)
        append(btn_save_wrap,btn_mode)
        if (prev) append(btn_save_wrap,btn_compare)
        innerH(tablewrap,tableOneOff)
        append(qs('article'),btn_save_wrap)
        append(qs('article'),overflowArea)
        append(overflowArea,tablewrap)
        qs('article').style.height = ''
        return 0
    }
    
    async function capture() {
        const span1 = ce('p')
        innerT(span1,'https://sort.wav.haus/')
        span1.style.fontSize = '11px'
        const span2 = ce('p')
        innerT(span2,'tripleS Sort')
        span2.style.fontWeight = 'bold'
        span2.style.fontSize = '19px'
        append(qs('table-wrap'),span2)
        append(qs('table-wrap'),span1)
        const c = await html2canvas(qs('table-wrap'), {scale:2})
        span1.remove()
        span2.remove()
        c.toBlob(async blob=>{
            const downloadLink = ce("a");
            downloadLink.download = 'tripleS_sort_'+new Date()*1;
            downloadLink.href = URL.createObjectURL(blob);
            downloadLink.click();
        })
        return 0
    }

    function select0() {
        return select(0)
    }
    function select1() {
        return select(1)
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
        
        Math.random()<0.5 ? display(left,right,select0,select1) : display(right,left,select1,select0)

        innerT(span_progress,(progress*100/112).toFixed(1)+'%')
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

    append(qs('button-wrap'),btn_left)
    append(qs('button-wrap'),btn_right)
    append(qs('footer'),span_progress)

    return 0
}
