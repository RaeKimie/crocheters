import { Injectable } from '@angular/core';
import { Stitch } from '../interfaces/stitch.interface'

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
  public langOptionsKr: object[] = [{id:'kr', name:'한국어'}, {id:'en', name:'영어(영국)'}, {id:'en-us', name:'영어(미국)'},]
  public langOptionsEg:  object[] = [{id:'kr', name:'Korean'}, {id:'en', name:'English(UK)'}, {id:'en-us', name:'English(US)'}]

  public stitchNames: {lang:string; stitchNames: Stitch[]}[] = [
    { lang:'kr',
      stitchNames:[
      {name: "사슬뜨기", id: "ch"}, {name: "빼뜨기", id: "sl st"}, {name: "짧은뜨기", id: "sc"}, {name: "긴뜨기", id: "hdc"}, {name: "늘려뜨기(코 늘리기)", id: "inc"}, {name: "모아뜨기(코 줄이기)", id: "dec"},
      {name: "한길긴뜨기", id: "dc"}, {name: "두길긴뜨기", id: "tr"}, {name: "세길긴뜨기", id: "dtr"}, {name: "구슬뜨기", id: "cl"}, {name: "팝콘뜨기", id: "pc"}, {name: "피코뜨기", id: "p"}, {name: "짧은뒤이랑뜨기(이랑뜨기)", id: "sc blo"}, {name: "짧은앞이랑뜨기", id: "sc flo"},
      {name: "앞걸어뜨기", id: "FP"},{name: "짧은앞걸어뜨기", id: "FPsc"}, {name: "한길 긴 앞걸어뜨기", id: "FPdc"}, {name: "뒤걸어뜨기", id: "BP"}, {name: "짧은 뒤걸어뜨기", id: "BPsc"},{name: "한길 긴 뒤걸어뜨기", id: "BPdc"}, {name: "되돌아 짧은뜨기", id: "reverse sc"}, {name: "단(평면뜨기)", id: "row"}, {name: "단(원형뜨기)", id: "rnd"}
      ]
    },
    {lang:'en-us', stitchNames:[{name: "Chain", id: "ch"}, {name: "Slilp stitch", id: "sl st"}, {name: "Single crochet", id: "sc"}, {name: "Half double crochet", id: "hdc"},{name: "Increase", id: "inc"}, {name: "Decrease", id: "dec"},
    {name: "Double crochet", id: "dc"}, {name: "Treble crochet", id: "tr"}, {name: "Double treble crochet", id: "dtr"}, {name: "Cluster", id: "cl"}, {name: "Popcorn", id: "pc"}, {name: "Picot", id: "p"}, {name: "Single crochet back loop only", id: "sc blo"}, {name: "Single crochet front loop only", id: "sc flo"},
    {name: "Front post", id: "FP"}, {name: "Front post single crochet", id: "FPsc"}, {name: "Front post double crochet", id: "FPdc"},{name: "Back post", id: "BP"},{name: "Back post single crochet", id: "BPsc"},{name: "Back post double crochet", id: "BPdc"}, {name: "Reverse single crochet", id: "reverse sc"}, {name: "Row", id: "row"}, {name: "Round", id: "rnd"}]
  },
    {lang:'en', stitchNames:[{name: "Slilp stitch / Single Crochet ", id: "sl st", abv:'sl st / sc'}, {name: "Double crochet", id: "sc", abv: 'dc'}, {name: "Half treble crochet", id: "hdc", abv: 'htr'},{name: "Increase", id: "inc", abv: "inc"}, {name: "Decrease", id: "dec", abv: "dec"},  {name: "Cluster", id: "cl", abv:"cl"}, {name: "Popcorn", id: "pc", abv:"pc"}, {name: "Picot", id: "p", abv:"p"}, {name: "Chain", id: "ch", abv:"ch"},
    {name: "Treble crochet", id: "dc", abv: "tr"}, {name: "Double treble crochet", id: "tr", abv: "dtr"}, {name: "Triple treble crochet", id: "dtr", abv:"ttr"}, {name: "Double crochet back loop only", id: "sc blo", abv:"dc blo"}, {name: "Double crochet front loop only", id: "sc flo", abv:"dc flo"},
    {name: "Front post", id: "FP"}, {name: "Front post double crochet", id: "FPsc", abv:"FPdc"}, {name: "Front post trebel crochet", id: "FPdc", abv:"FPtr"}, {name: "Back post", id: "BP"},{name: "Back post double crochet", id: "BPsc", abv: "BPdc"},{name: "Back post trebel crochet", id: "BPdc", abv:"BPtr"}, {name: "Reverse double crochet", id: "reverse sc", abv:"reverse dc"},{name: "Row", id: "row"}, {name: "Round", id: "rnd"}]
  }


  ]

  public englishTutorials: object[] = [
    {id: "ch", src : ["https://www.youtube.com/embed/7v-mssy5rKU", "https://www.youtube.com/embed/Zzyylyls6KE", "https://www.youtube.com/embed/aqExZ4xTG1A", "https://www.youtube.com/embed/hmrrnlMR2i0", "https://www.youtube.com/embed/GjoVWbYhWuc"]},
    {id: "sl st", src: ["https://www.youtube.com/embed/AFk-fdAowbY", "https://www.youtube.com/embed/fb5xzPS3nfc", "https://www.youtube.com/embed/t_d6C7uojm0", "https://www.youtube.com/embed/UmATL8BUVz8", "https://www.youtube.com/embed/WoWTRo6CTCI"]},
    {id: "sc", src: ["https://www.youtube.com/embed/wgVOkQcf5qw", "https://www.youtube.com/embed/Ik-GSXWoSak", "https://www.youtube.com/embed/SFySpwJKHIc", "https://www.youtube.com/embed/GcOzdAzmtNM", "https://www.youtube.com/embed/jUIfV-Qcq2c", "https://www.youtube.com/embed/aAxGTnVNJiE"]},
    {id: "hdc", src: ["https://www.youtube.com/embed/ajIZThzJ36Q", "https://www.youtube.com/embed/U5wK0HCOHEY", "https://www.youtube.com/embed/QnOYlwGN5cI", "https://www.youtube.com/embed/uCfJwyNISRg", "https://www.youtube.com/embed/7qdu1tYrOW0", "https://www.youtube.com/embed/xwrIkdz0KIo"]},
    {id: "inc", src: ["https://www.youtube.com/embed/4xXLzqr6_ew", "https://www.youtube.com/embed/ksJlElIpzM0", "https://www.youtube.com/embed/XmVpnNNZE5U", "https://www.youtube.com/embed/W6TgUzLzZMM", "https://www.youtube.com/embed/KKa2XAnZ418", "https://www.youtube.com/embed/njFsqVsRr4M"]},
    {id: "dec", src: ["https://www.youtube.com/embed/p0SmQD3tiss","https://www.youtube.com/embed/Fqeh12-yaMo","https://www.youtube.com/embed/eMYNfFDF9xI","https://www.youtube.com/embed/ejeL0nRC6Dw","https://www.youtube.com/embed/cXipGJ7Y5oU","https://www.youtube.com/embed/5S06d4UIl9Q"]},
    {id: "dc", src: ["https://www.youtube.com/embed/5xKssKskNzo", "https://www.youtube.com/embed/lPYCjwasbE8", "https://www.youtube.com/embed/y3okh5TB90c", "https://www.youtube.com/embed/GIO83ixyQ9o", "https://www.youtube.com/embed/SWZ1zajDOHE", "https://www.youtube.com/embed/SFySpwJKHIc"]},
    {id:"tr", src:["https://www.youtube.com/embed/gL8yUqybtyQ", "https://www.youtube.com/embed/Yi3MyRySIf0", "https://www.youtube.com/embed/rSUqMV_7GdU", "https://www.youtube.com/embed/RH3u-wIOuJg", "https://www.youtube.com/embed/IpK3vpBtCqI", "https://www.youtube.com/embed/CCe9Epq_Cpo"]},
    {id:"dtr", src:["https://www.youtube.com/embed/ILlwUihTiiA", "https://www.youtube.com/embed/MBFSSXEQJxk", "https://www.youtube.com/embed/GCHu8xkIbJE", "https://www.youtube.com/embed/naMO3FNYuSw", "https://www.youtube.com/embed/0MMpJo3Mbdo", "https://www.youtube.com/embed/J3XisvfPEHI"]},
    {id:"cl", src:["https://www.youtube.com/embed/aWJfZd_jc2k", "https://www.youtube.com/embed/344KvkB6SDI", "https://www.youtube.com/embed/UkTzcXfXktA", "https://www.youtube.com/embed/CLWt5Y29l7E", "https://www.youtube.com/embed/EuvYngd7F7o", "https://www.youtube.com/embed/WApcVyqwjLo"]},
    {id:"pc", src:["https://www.youtube.com/embed/QPl067cnrHU", "https://www.youtube.com/embed/7TyIsYr58Cs", "https://www.youtube.com/embed/Ct3TvXeHCkc", "https://www.youtube.com/embed/Va6Rn1Dlzj0", "https://www.youtube.com/embed/Y5sBdjut2SA", "https://www.youtube.com/embed/OD_i9A2XWiA"]},
    {id:"p", src:["https://www.youtube.com/embed/xzKt7ZW8668", "https://www.youtube.com/embed/MQmO74im2N0", "https://www.youtube.com/embed/t65iQKq8wE8", "https://www.youtube.com/embed/AVC7x1cVv0o", "https://www.youtube.com/embed/Z2E3vCy7zKk", "https://www.youtube.com/embed/jSSaqOCAY08"]},
    {id:"sc blo", src:["https://www.youtube.com/embed/macf66Jw3Dc", "https://www.youtube.com/embed/VdOgClt8rj4", "https://www.youtube.com/embed/phf7Nj0_LJg", "https://www.youtube.com/embed/1L1GZNAUUK4", "https://www.youtube.com/embed/p5GbAu41CZE", "https://www.youtube.com/embed/REXkL1xkNAI"]},
    {id:"sc flo", src:["https://www.youtube.com/embed/wiao-EeaHRE", "https://www.youtube.com/embed/591Sen0LImM", "https://www.youtube.com/embed/BW2oCX05_6U", "https://www.youtube.com/embed/QpjbF0-hGI4", "https://www.youtube.com/embed/14N5-WleS2w", "https://www.youtube.com/embed/gJW_30ydsb0"]},
    {id:"FP", src:["https://www.youtube.com/embed/mawHHZyaWpI", "https://www.youtube.com/embed/JziT0OpIFbI", "https://www.youtube.com/embed/S42_486HrEU", "https://www.youtube.com/embed/cpp4Q8kdCRY", "https://www.youtube.com/embed/0Ggj7-sB1-g", "https://www.youtube.com/embed/EwwCBNQRVvI"]},
    {id:"FPsc", src:["https://www.youtube.com/embed/cpp4Q8kdCRY", "https://www.youtube.com/embed/qdvCRtYlu64", "https://www.youtube.com/embed/UvdqqR2Kkho", "https://www.youtube.com/embed/8151SI2-O-4", "https://www.youtube.com/embed/aXhZYBs9MTM", "https://www.youtube.com/embed/Jfd-fHCIC9U"]},
    {id:"FPdc", src:["https://www.youtube.com/embed/mawHHZyaWpI", "https://www.youtube.com/embed/S42_486HrEU", "https://www.youtube.com/embed/JziT0OpIFbI", "https://www.youtube.com/embed/EwwCBNQRVvI", "https://www.youtube.com/embed/MsnuQpsp6oQ", "https://www.youtube.com/embed/lbCf2M4gua4"]},
    {id:"BP", src:["https://www.youtube.com/embed/aWdevHEtSk0", "https://www.youtube.com/embed/S42_486HrEU", "https://www.youtube.com/embed/JziT0OpIFbI", "https://www.youtube.com/embed/zSRhWpLWhAU", "https://www.youtube.com/embed/RcbTd4mQ5_k", "https://www.youtube.com/embed/RbsXa8--dzk"]},
    {id:"BPsc", src:["https://www.youtube.com/embed/RcbTd4mQ5_k", "https://www.youtube.com/embed/jPoaHQom9NQ", "https://www.youtube.com/embed/_RnzvHQvNpk", "https://www.youtube.com/embed/aAzidBuXOpE", "https://www.youtube.com/embed/RUBp7XC3Bts", "https://www.youtube.com/embed/zXXXNJP1LLc"]},
    {id:"BPdc", src:["https://www.youtube.com/embed/aWdevHEtSk0", "https://www.youtube.com/embed/S42_486HrEU", "https://www.youtube.com/embed/JziT0OpIFbI", "https://www.youtube.com/embed/zSRhWpLWhAU", "https://www.youtube.com/embed/77ea-wMCXoo", "https://www.youtube.com/embed/mawHHZyaWpI"]},
    {id:"reverse sc", src:["https://www.youtube.com/embed/179exZEyXqo", "https://www.youtube.com/embed/Tq6HrYKfDdw", "https://www.youtube.com/embed/d0oCer_7px0", "https://www.youtube.com/embed/9TW0dBKoFck", "https://www.youtube.com/embed/kgLq2BqXOEg", "https://www.youtube.com/embed/TmQ8kb0260U"]},
    {id:"row", src:["https://www.youtube.com/embed/uRiSWt-5rwg", "https://www.youtube.com/embed/PNAxaQ2aXJs", "https://www.youtube.com/embed/GcOzdAzmtNM", "https://www.youtube.com/embed/5xKssKskNzo", "https://www.youtube.com/embed/F1nukF6Nkr8", "https://www.youtube.com/embed/U6KXkrNv0VA"]},
    {id:"rnd", src:["https://www.youtube.com/embed/QFHexyNR1dY", "https://www.youtube.com/embed/Z7M133vWziI", "https://www.youtube.com/embed/w4VPJkIzvmk", "https://www.youtube.com/embed/q0frEvgfpdY", "https://www.youtube.com/embed/J7GHTfXaz2E", "https://www.youtube.com/embed/DnWTot_3YDo"]},
  ];

  public koreanTutorials: object[] = [
    {id:"ch", src:["https://www.youtube.com/embed/sy1_QzXzohE", "https://www.youtube.com/embed/kVBMHTC1178", "https://www.youtube.com/embed/C4x7GsBMqMU", "https://www.youtube.com/embed/71-Unm-8wKU", "https://www.youtube.com/embed/FzvDhrwMNoU", "https://www.youtube.com/embed/Iw1kTFOil4w"]},
    {id:"sl st", src:["https://www.youtube.com/embed/XeeRYCK1f4Q", "https://www.youtube.com/embed/H3wTcfKz_gc", "https://www.youtube.com/embed/ewHTeVqpEwQ", "https://www.youtube.com/embed/Tr5PxyQswBE", "https://www.youtube.com/embed/OO8q6kV5QRw", "https://www.youtube.com/embed/FZy6bm9zuls"]},
    {id:"sc", src:["https://www.youtube.com/embed/1WQWUz9CK7Q", "https://www.youtube.com/embed/rkUHEyYJaEU", "https://www.youtube.com/embed/nXt8mhmQmRk", "https://www.youtube.com/embed/C4x7GsBMqMU", "https://www.youtube.com/embed/soau_qqSBrE", "https://www.youtube.com/embed/ffNLzn_fQCc"]},
    {id:'hdc', src:["https://www.youtube.com/embed/-aEvy7sB_zs", "https://www.youtube.com/embed/q-GcoMLsJ1E", "https://www.youtube.com/embed/l9uOrLgrCs8", "https://www.youtube.com/embed/6kFxSdtubpY", "https://www.youtube.com/embed/_NClvgdHwd8", "https://www.youtube.com/embed/Ax9sL7_Wrwk"]},
    {id:"inc", src:["https://www.youtube.com/embed/osbx7hB3yTw", "https://www.youtube.com/embed/OaHrwhoguoo", "https://www.youtube.com/embed/6cThbkgv0XM", "https://www.youtube.com/embed/jUi1QDrfycs", "https://www.youtube.com/embed/J1cf_gBLNS0", "https://www.youtube.com/embed/ssgMnfCraRg"]},
    {id:"dec", src:["https://www.youtube.com/embed/PFJvko47EbA", "https://www.youtube.com/embed/742cHN4vR5c", "https://www.youtube.com/embed/4uuTjcS8MBE", "https://www.youtube.com/embed/DHSmqxP45VQ", "https://www.youtube.com/embed/pYXOPrF-ra0", "https://www.youtube.com/embed/T4f6lJNQNw0"]},
    {id:"dc", src:["https://www.youtube.com/embed/6kFxSdtubpY", "https://www.youtube.com/embed/FzvDhrwMNoU", "https://www.youtube.com/embed/GxZ2Ynf0yP8", "https://www.youtube.com/embed/Ax9sL7_Wrwk", "https://www.youtube.com/embed/d2dGihQMLMY", "https://www.youtube.com/embed/UXTZ2fnNcto"]},
    {id:"tr", src:["https://www.youtube.com/embed/W5C7_lVbFa0", "https://www.youtube.com/embed/Ax9sL7_Wrwk", "https://www.youtube.com/embed/AqXSYZnlNiA", "https://www.youtube.com/embed/iwxWJtwBGvU", "https://www.youtube.com/embed/TeMdpcIOrAs", "https://www.youtube.com/embed/RxbwIJWR7P8"]},
    {id:"dtr", src:["https://www.youtube.com/embed/MQ_EQfzeqGA", "https://www.youtube.com/embed/W5C7_lVbFa0", "https://www.youtube.com/embed/TNRuODd1Z3g", "https://www.youtube.com/embed/4GEwjvABOYE", "https://www.youtube.com/embed/iiEG7c29mwk", "https://www.youtube.com/embed/6kFxSdtubpY"]},
    {id:"cl", src:["https://www.youtube.com/embed/1gxlxNhlVCM", "https://www.youtube.com/embed/XtA-E7_oZyw", "https://www.youtube.com/embed/zIoR1DMZs1M", "https://www.youtube.com/embed/Cl129XolP94", "https://www.youtube.com/embed/IKea2F07LQI", "https://www.youtube.com/embed/_Rz34Nc-p44"]},
    {id:"pc", src:["https://www.youtube.com/embed/jBzOBRABzoI", "https://www.youtube.com/embed/htESQoP1Zgs", "https://www.youtube.com/embed/Hmf2KTfqlsE", "https://www.youtube.com/embed/jX75IzmA8Wg", "https://www.youtube.com/embed/M3FsI9NSDrE", "https://www.youtube.com/embed/n3eAM-MlGfw"]},
    {id:"p", src:["https://www.youtube.com/embed/X0Vn3IZtnYg", "https://www.youtube.com/embed/J73r-2XPYAE", "https://www.youtube.com/embed/DLvV1tgeGUs", "https://www.youtube.com/embed/DHUuMA3K2Fk", "https://www.youtube.com/embed/UHLyXDqaAJw", "https://www.youtube.com/embed/vSlHt57ZNBg"]},
    {id:"sc blo", src:["https://www.youtube.com/embed/kz3wv8zxamk", "https://www.youtube.com/embed/lvsfpxScuis", "https://www.youtube.com/embed/7TAQGjRhczM", "https://www.youtube.com/embed/AcoSBeVLXfM", "https://www.youtube.com/embed/qTHWmAdcfp4", "https://www.youtube.com/embed/h5ezPlEHNOU"]},
    {id:"sc flo", src:["https://www.youtube.com/embed/lvsfpxScuis", "https://www.youtube.com/embed/FRB-TVVrA7o", "https://www.youtube.com/embed/kz3wv8zxamk", "https://www.youtube.com/embed/7TAQGjRhczM", "https://www.youtube.com/embed/qTHWmAdcfp4", "https://www.youtube.com/embed/xwWc7N8mg2I"]},
    {id:"FP", src:["https://www.youtube.com/embed/CX5tV4eRtE4", "https://www.youtube.com/embed/abH7N79SE_0", "https://www.youtube.com/embed/OK0FmSAEJtE", "https://www.youtube.com/embed/QYQDG8WLd4c", "https://www.youtube.com/embed/cibvS5CJ7-8", "https://www.youtube.com/embed/kVrUrpBYAWE"]},
    {id:"FPsc", src:["https://www.youtube.com/embed/ScfmzH5KJr8", "https://www.youtube.com/embed/OK0FmSAEJtE", "https://www.youtube.com/embed/ZPcUhubVlW8", "https://www.youtube.com/embed/CX5tV4eRtE4", "https://www.youtube.com/embed/kVrUrpBYAWE", "https://www.youtube.com/embed/abH7N79SE_0"]},
    {id:"FPdc", src:["https://www.youtube.com/embed/QYQDG8WLd4c", "https://www.youtube.com/embed/abH7N79SE_0", "https://www.youtube.com/embed/vWaS1OCXNrc", "https://www.youtube.com/embed/cibvS5CJ7-8", "https://www.youtube.com/embed/kVrUrpBYAWE", "https://www.youtube.com/embed/_6N8voB_wTE"]},
    {id:"BP", src:["https://www.youtube.com/embed/CX5tV4eRtE4", "https://www.youtube.com/embed/z8CCeawOxNU", "https://www.youtube.com/embed/cibvS5CJ7-8", "https://www.youtube.com/embed/86s-YztT8iw", "https://www.youtube.com/embed/QYQDG8WLd4c", "https://www.youtube.com/embed/NSaafp9hXOo"]},
    {id:"BPsc", src:["https://www.youtube.com/embed/MVHpEjAwZpc", "https://www.youtube.com/embed/4pXRGmlbY6Y", "https://www.youtube.com/embed/ScfmzH5KJr8", "https://www.youtube.com/embed/NSaafp9hXOo", "https://www.youtube.com/embed/CX5tV4eRtE4", "https://www.youtube.com/embed/z8CCeawOxNU"]},
    {id:"BPdc", src:["https://www.youtube.com/embed/QYQDG8WLd4c", "https://www.youtube.com/embed/abH7N79SE_0", "https://www.youtube.com/embed/cibvS5CJ7-8", "https://www.youtube.com/embed/CX5tV4eRtE4", "https://www.youtube.com/embed/rmN9Hh95w9g", "https://www.youtube.com/embed/kVrUrpBYAWE"]},
    {id:"reverse sc", src:["https://www.youtube.com/embed/AGtvi0rJpxA", "https://www.youtube.com/embed/3cxrrpeKIws", "https://www.youtube.com/embed/cmQ5L_dvP2c", "https://www.youtube.com/embed/iLKF035lsBU", "https://www.youtube.com/embed/YmpMCC9fSOo", "https://www.youtube.com/embed/8b_o4mqTwRA"]},
    {id:"row", src:["https://www.youtube.com/embed/WwWW7MUybsc", "https://www.youtube.com/embed/x6ZtY-x_RB0", "https://www.youtube.com/embed/BZjsTKhIQ90", "https://www.youtube.com/embed/H81BW-uzJt4", "https://www.youtube.com/embed/zWDC9vmqTqg", "https://www.youtube.com/embed/PhxeqQyGguI"]},
    {id:"rnd", src:["https://www.youtube.com/embed/soau_qqSBrE", "https://www.youtube.com/embed/tjuE4h4li9w", "https://www.youtube.com/embed/GxZ2Ynf0yP8", "https://www.youtube.com/embed/u14xXaWhz_w", "https://www.youtube.com/embed/Tb25D6GK1NE", "https://www.youtube.com/embed/i3IMy5wRp3g"]},
  ]
  constructor() { }

  public getEnglishTutorials(id: string): object {
    return this.englishTutorials.find( video => video['id'] === id)
  }

  public getKoreanTutorials(id: string): object {
    return this.koreanTutorials.find( video => video['id'] === id)
  }
}
