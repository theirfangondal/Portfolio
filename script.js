
// GSAP Animations
var tl=gsap.timeline();

// Front Section
tl.from(".front img",{
    opacity:0,
    duration:0.6,
    delay:0.6,

})

tl.from(".front h1",{
    opacity:0,
    duration:0.5,
    delay:0.3,


})

tl.from(".front p",{
    y:10,
    opacity:0,
    duration:0.5,
    delay:0.3,


})


// About Section

tl.from([".aboutLeft > h3", ".aboutLeft > h1",".aboutLeft > p", ".aboutLeft > .aboutSkillsMain"], {
    x: -700,
    duration: 10,
    delay:0.5,
    stagger:1,
    scrollTrigger: {
        trigger: ".aboutLeft", 
        scroller: "body",
        start: "top 100%",
        end: "top 1%",
        scrub: 2
    }
});

tl.from(".aboutRight > img",{
    x:300,
    duration:1,
    scrollTrigger:{
        trigger:".aboutRight > img",
        scroller:"body",
        start: "top 80%",
        end: "top 30%",
        scrub:2
    }
})


// Skills Section

tl.from(".skills > h1",{
opacity:0,
duration:1,
scrollTrigger:{
    trigger:".skills > h1",
    scroller:"body",
    start:"top 80%",
    end:"top 60%",
    scrub:3
}
})

tl.from(".skills > h2",{
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".skills > h2",
        scroller:"body",
        start:"top 60%",
        end:"top 40%",
        scrub:3
    }
    })

    tl.from(".skills > .skills1",{
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:".skills > .skills1",
            scroller:"body",
            start:"top 45%",
            end:"top 30%",
            scrub:3
        }
        })


        //webMain section
 
tl.from([".webMain > h3",".webMain > h1",".webMain > h2",".webMain > svg",".webMain > p"],{
            opacity:0,
            scale:0.5,
            duration:1,
            stagger:1,
            scrollTrigger:{
                trigger:".webMain",
                scroller:"body",
                start:"top 50%",
                end:"top 0%",
                scrub:3
            }
            })


//web1
tl.from(".web1 > .webLeft > h1",{
    x:-500,
    scale:0.7,
    scrollTrigger:{
        trigger:".web1 > .webLeft > h1",
        scroller:"body",
        start:"top 90%",
        end:"top 60%",
        scrub:3,
    }

})

tl.from(".web1 > .webLeft > p",{
    x:-500,
    scale:0.7,
    scrollTrigger:{
        trigger:".web1 > .webLeft > p",
        scroller:"body",
        start:"top 80%",
        end:"top 50%",
        scrub:3,
    }

})

tl.from(".web1 > .webLeft > a",{
    y:50,
    opacity:0,
    scrollTrigger:{
        trigger:".web1 > .webLeft > a",
        scroller:"body",
        start:"top 80%",
        end:"top 60%",
        scrub:3,
    }

})

tl.from(".web1 > .webRight > img",{
    x:300,
    opacity:0,
    scale:0.9,
    scrollTrigger:{
        trigger:".web1 > .webRight > img",
        scroller:"body",
        start:"top 70%",
        end:"top 50%",
        scrub:3,
    }

})


// web2
tl.from(".web2 > .webRight > h1",{
    x:500,
    scale:0.7,
    scrollTrigger:{
        trigger:".web2 > .webRight > h1",
        scroller:"body",
        start:"top 90%",
        end:"top 60%",
        scrub:3,
    }

})

tl.from(".web2 > .webRight > p",{
    x:500,
    scale:0.7,
    scrollTrigger:{
        trigger:".web2 > .webRight > p",
        scroller:"body",
        start:"top 80%",
        end:"top 50%",
        scrub:3,
    }

})

tl.from(".web2 > .webRight > a",{
    y:50,
    opacity:0,
    scrollTrigger:{
        trigger:".web2 > .webRight > a",
        scroller:"body",
        start:"top 80%",
        end:"top 60%",
        scrub:3,
    }

})

tl.from(".web2 > .webLeft > img",{
    x:-300,
    opacity:0,
    scale:0.9,
    scrollTrigger:{
        trigger:".web2 > .webLeft > img",
        scroller:"body",
        start:"top 70%",
        end:"top 50%",
        scrub:3,
    }

})


//web3
tl.from(".web3 > .webLeft > h1",{
    x:-500,
    scale:0.7,
    scrollTrigger:{
        trigger:".web3 > .webLeft > h1",
        scroller:"body",
        start:"top 90%",
        end:"top 60%",
        scrub:3,
    }

})

tl.from(".web3 > .webLeft > p",{
    x:-500,
    scale:0.7,
    scrollTrigger:{
        trigger:".web3 > .webLeft > p",
        scroller:"body",
        start:"top 80%",
        end:"top 50%",
        scrub:3,
    }

})

tl.from(".web3 > .webLeft > a",{
    y:50,
    opacity:0,
    scrollTrigger:{
        trigger:".web3 > .webLeft > a",
        scroller:"body",
        start:"top 80%",
        end:"top 60%",
        scrub:3,
    }

})

tl.from(".web3 > .webRight > img",{
    x:300,
    opacity:0,
    scale:0.9,
    scrollTrigger:{
        trigger:".web3 > .webRight > img",
        scroller:"body",
        start:"top 70%",
        end:"top 50%",
        scrub:3,
    }

})



// Games Section
tl.from(".gamesHeading>h1",{
    y:50,
    opacity:0,
    scrollTrigger:{
      trigger:".gamesHeading>h1",
      scroller:"body",
      start:"top 80%",
      end:"top 50%",
      scrub:3,
    }

})


tl.from([".games1"],{
    scale:0,
    scrollTrigger:{
        trigger:".games1",
        scroller:"body",
        start:"top 80%",
        end:"top 50%",
        scrub:3,
      }

})



tl.from([".games2"],{
    scale:0,
    scrollTrigger:{
        trigger:".games2",
        scroller:"body",
        start:"top 100%",
        end:"top 80%",
        scrub:3,
      }

})


tl.from(".games1>img",{
    x:-200,
    opacity:0,
    scale:0,
    scrollTrigger:{
      trigger:".games1>img",
      scroller:"body",
      start:"top 80%",
      end:"top 50%",
      scrub:3,
    }

})

tl.from([".gameInfo1>h2",".gameInfo1>p"],{
    opacity:0,
    scale:0,
    stagger:true,
    scrollTrigger:{
      trigger:".gameInfo1",
      scroller:"body",
      start:"top 80%",
      end:"top 50%",
      scrub:3,
    }

})

    tl.from(".gameInfo1 > a", {
        x: 200,
        opacity: 0, // Include opacity property here
        stagger: true,
        scrollTrigger: {
            trigger: ".gameInfo1",
            scroller: "body",
            start: "top 60%",
            end: "top 30%",
            scrub: 3,
        }
    });

    
tl.from(".games2>img",{
    x:-200,
    opacity:0,
    scale:0,
    scrollTrigger:{
      trigger:".games2>img",
      scroller:"body",
      start:"top 90%",
      end:"top 80%",
      scrub:3,
    }

})

tl.from([".gameInfo12h2",".gameInfo2>p"],{
    opacity:0,
    scale:0,
    stagger:true,
    scrollTrigger:{
      trigger:".gameInfo2",
      scroller:"body",
      start:"top 90%",
      end:"top 80%",
      scrub:3,
    }

})

    tl.from(".gameInfo2 > a", {
        x: 200,
        opacity: 0, // Include opacity property here
        stagger: true,
        scrollTrigger: {
            trigger: ".gameInfo2",
            scroller: "body",
            // markers: true,
            start: "top 90%",
            end: "top 80%",
            scrub: 3,
        }
    });


// contact section

tl.from(".contactMain>h1",{
 y:50,
 opacity:0,
 scrollTrigger:{
    trigger: ".contactMain>h1",
            scroller: "body",
            start: "top 80%",
            end: "top 60%",
            scrub: 3,
 }   

})


tl.from(".contactMain>p",{
    scale:0.5,
    opacity:0,
    scrollTrigger:{
       trigger: ".contactMain>p",
               scroller: "body",
               start: "top 70%",
               end: "top 50%",
               scrub: 3,
    }   
   
   })

   
tl.from(".contact",{
    scale:0.5,
    opacity:0,
    stagger:true,
    scrollTrigger:{
       trigger: ".contact",
               scroller: "body",
               start: "top 80%",
               end: "top 60%",
               scrub: 3,
    }   
   
   })


   // Contact Form Section
   tl.from(".formMain>h1",{
    y:50,
    opacity:0,
    scrollTrigger:{
       trigger: ".formMain>h1",
               scroller: "body",
               start: "top 80%",
               end: "top 60%",
               scrub: 3,
    }   
   
   })
   
   
   tl.from(".formMain>h3",{
       scale:0.5,
       opacity:0,
       scrollTrigger:{
          trigger: ".formMain>h3",
                  scroller: "body",
                  start: "top 70%",
                  end: "top 50%",
                  scrub: 3,
       }   
      
      })
   
      tl.from(".formLeft",{
        x:-100,
        opacity:0,
        scrollTrigger:{
           trigger: ".formLeft",
                   scroller: "body",
                   start: "top 60%",
                   end: "top 40%",
                   scrub: 3,
        }   
       
       })

       tl.from(".formRight",{
        x:100,
        opacity:0,
        scrollTrigger:{
           trigger: ".formRight",
                   scroller: "body",
                   start: "top 80%",
                   end: "top 70%",
                   scrub: 3,
        }   
       
       })
   
       //Footer
       tl.from([".footerTop",".footerBottom"],{
        opacity:0,
        scale:0.9,
        scrollTrigger:{
            trigger: ".footer",
            scroller: "body",
            start:"top 90%",
            end:"top 70%",  
            scrub:3,
        }

       })
