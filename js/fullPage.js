$(function(){
    $("#fullpage").fullpage({
        verticalCentered:false,
        navigation:true,
        scrollingSpeed: 600,
        fitToSectionDelay:0,
        navigationPosition:"left",
        /*滚动前事件*/
        onLeave: function(){
            $(".title").css({
                transform:"scale(0.4)",
                opacity:0,
                transition:"all .6s linear"
            })
            $("strong").css({
                transform:"scale(0.4)",
                opacity:0,
                transition:"all .6s linear"
            })
            $("h3").css({
                transform:"scale(0.4)",
                opacity:0,
                transition:"all .6s linear"
            })
            $(".p11").css({
                opacity:0,
                transition: 'opacity .6s linear'
            })
            $(".bg13").css({
                transform:"translate(0,300px)",
                transition:"all .6s linear"
            })
            $(".bg12").css({
                transform:"translate(0,350px)",
                transition:"all .6s linear"
            })
            $(".bg21").css({
                transform:"translate(-350px,0)",
                transition:"all .6s linear"
            })
            $(".bg22").css({
                transform:"translate(350px,0)",
                transition:"all .6s linear"
            })
            $(".bg31txt").css({
                opacity:0,
                transition: 'opacity .6s linear'
            })

        },
        /*滚动到某一屏后事件*/
        afterLoad:function(anchorLink,index){
            $(".title").css({
                transform:"scale(1)",
                opacity:1,
                transition:"all .7s linear"
            })
            $("strong").css({
                transform:"scale(1)",
                opacity:1,
                transition:"all .7s linear"
            })
            $("h3").css({
                transform:"scale(1)",
                opacity:1,
                transition:"all .7s linear"
            })
            $(".p11").css({
                opacity:1,
                transition: 'opacity .7s linear .5s'
            })
            $(".bg13").css({
                transform:"translate(0,0px)",
                transition:"all .7s linear"
            })
            $(".bg12").css({
                transform:"translate(0,0px)",
                transition:"all .7s linear .3s"
            })
            $(".bg21").css({
                transform:"translate(0,0)",
                transition:"all .6s linear"
            })
            $(".bg22").css({
                transform:"translate(0,0)",
                transition:"all .6s linear"
            })
            $(".bg31txt").css({
                opacity:1,
                transition: 'opacity .6s linear .5s'
            })
        }
    });
})
