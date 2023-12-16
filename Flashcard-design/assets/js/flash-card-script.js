const flashcardsData = [
  { front: 'The "First Computer Programmer"', back: 'Ada Lovelace', flipped: false },
  { front: 'The "First Computer Programmer"', back: 'Ada Lovelace', flipped: false },
  { front: 'The "First Computer Programmer"', back: 'Ada Lovelace', flipped: false },
  { front: 'The "First Computer Programmer"', back: 'Ada Lovelace', flipped: false },
  { front: 'The "First Computer Programmer"', back: 'Ada Lovelace', flipped: false }
];

new Vue({
  el: '#custom-flashcard-app',
  data: {
    cards: flashcardsData,
    newFront: '',
    newBack: '',
    error: false,
  },
  methods: {
    toggleCard: function(card) {
      card.flipped = !card.flipped;
    },
    addNew: function() {
      if (!this.newFront || !this.newBack) {
        this.error = true;
      } else {
        this.cards.push({ front: this.newFront, back: this.newBack, flipped: false });
        this.newFront = '';
        this.newBack = '';
        this.error = false;
      }
    },
  },
});


  $(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script

    var typed = new Typed(".typing-3", {
        strings: ["Connect with me on :)"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });



    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});