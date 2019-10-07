window.addEventListener('DOMContentLoaded', function () {
    // creating a candidate

    let btn = document.querySelector('.popup-btn.popup-btn'),
        popup = document.querySelector('.popup'),
        overlay = document.querySelector('.overlay'),
        main = document.querySelector('.main'),
        custom = document.querySelector('.custom'),
        cinfo = document.querySelector('.custom-info'),
        cchar = document.querySelector('.custom-char'),
        personSkin = document.querySelector('.custom-char .person-skin'),
        personClothes = document.querySelector('.custom-char .person-clothes'),
        personHair = document.querySelector('.custom-char .person-hair'),
        cstyle = document.querySelector('.custom-style');



    btn.addEventListener('click', function () {
        
        popup.style.display = 'none';
        overlay.style.display = 'none';
        main.style.display = 'none';
        custom.style.display = 'flex';
        cinfo.style.display = 'block';
        cchar.style.display = 'block';
        cstyle.style.display = 'block';


    })

    // customization
    let name = document.getElementById('name'),
        age = document.getElementById('age'),
        male = document.getElementById('male'),
        female = document.getElementById('female'),
        select = document.getElementById('select'),
        bio = document.getElementById('bio'),
        person = document.querySelector('.person', 'construct'),
        skinItem = document.querySelectorAll('.skin-color'),
        hairItem = document.querySelectorAll('.hair .hair-style'),
        clothesItem = document.querySelectorAll('.clothes-style'),
        radio = document.querySelector('.radio'),

        wrap = document.querySelector('.custom-style');
    
    // creat candidate
    let men = {
        skin: {
            skinItem: document.querySelectorAll('.skin-color'),
            skinBackground: ['url("../img/skin/skin1.png") center no-repeat', 'url("../img/skin/skin2.png") center no-repeat', 'url("../img/skin/skin3.png") center no-repeat'],

            next: document.querySelector('.skin .next'),
            prev: document.querySelector('.skin .prev'),
            indexitem: 1,


            show(n) {
                if (n > this.skinItem.length) {
                    this.indexitem = 1;
                }
                if (n < 1) {
                    this.indexitem = this.skinItem.length;
                }
                if (n > this.skinBackground.length) {
                    this.indexitem = 1;
                }
                if (n < 1) {
                    this.indexitem = this.skinBackground.length;
                }
                this.skinItem.forEach(function (item) {
                    item.style.display = 'none';
                });
                
                this.skinItem[this.indexitem - 1].style.display = 'flex';
                this.skinBackground.forEach(function (item) {
                    personSkin.style.background = 'none';
                    
                });
                personSkin.style.background = this.skinBackground[this.indexitem - 1];
                personSkin.style.backgroundSize = 'cover';


            },

            plus(n) {
                this.show(this.indexitem += n);
                

            },

            nextSlide() {
                this.next.addEventListener('click', () => {
                    this.plus(1);
                    this.show(this.indexitem);
                     



                });
            },
            prevSlide() {
                this.prev.addEventListener('click', () => {

                    this.show(this.indexitem);
                    this.plus(-1);

                });

            }
        },
        hair: {
            hairItem: document.querySelectorAll('.hair-style'),
            hairBackground: ['url("../img/hair/construct/hair1.png") center no-repeat', 'url("../img/hair/construct/hair2.png") center no-repeat', 'url("../img/hair/construct/hair3.png") center no-repeat', 'url("../img/hair/construct/hair4.png") center no-repeat', 'url("../img/hair/construct/hair5.png") center no-repeat', 'url("../img/hair/construct/hair6.png") center no-repeat'],

            next: document.querySelector('.hair .next'),
            prev: document.querySelector('.hair .prev'),
            indexitem: 1,
            show(n) {
                if (n > this.hairItem.length - 3) {
                    this.indexitem = 1;
                }
                if (n < 1) {
                    this.indexitem = this.hairItem.length - 3;
                }
                if (n > this.hairBackground.length - 3) {
                    this.indexitem = 1;
                }
                if (n < 1) {
                    this.indexitem = this.hairBackground.length - 3;
                }
                this.hairItem.forEach(function (item) {
                    item.style.display = 'none';

                });
                //console.log(this);
                this.hairItem[this.indexitem - 1].style.display = 'flex';
                this.hairBackground.forEach(function (item) {
                    personHair.style.background = 'none';
                    //console.log(item['this.indexitem - 1']);
                });
                personHair.style.background = this.hairBackground[this.indexitem - 1];
                personHair.style.backgroundSize = 'cover';

            },

            plus(n) {
                this.show(this.indexitem += n);
                //this.test(this.indexitem += n);

            },

            nextSlide() {
                this.next.addEventListener('click', () => {

                    this.show(this.indexitem);
                    //this.test(this.indexitem); 
                    this.plus(1);


                });
            },
            prevSlide() {
                this.prev.addEventListener('click', () => {

                    this.show(this.indexitem);
                    //this.test(this.indexitem); 
                    this.plus(-1);

                });
            }
        },
        сlothes: {
            clothesItem: document.querySelectorAll('.clothes-style'),
            clothesBackground: ['url("../img/clothes/construct/clothes1.png") center no-repeat', 'url("../img/clothes/construct/clothes2.png") center no-repeat', 'url("../img/clothes/construct/clothes3.png") center no-repeat', 'url("../img/clothes/construct/clothes4.png") center no-repeat', 'url("../img/clothes/construct/clothes5.png") center no-repeat', 'url("../img/clothes/construct/clothes6.png") center no-repeat'],

            next: document.querySelector('.clothes .next'),
            prev: document.querySelector('.clothes .prev'),
            indexitem: 1,
            show(n) {
                if (n > this.clothesItem.length - 3) {
                    this.indexitem = 1;
                }
                if (n < 1) {
                    this.indexitem = this.clothesItem.length - 3;
                }
                if (n > this.clothesBackground.length - 3) {
                    this.indexitem = 1;
                }
                if (n < 1) {
                    this.indexitem = this.clothesBackground.length - 3;
                }
                this.clothesItem.forEach(function (item) {
                    item.style.display = 'none';

                });
                //console.log(this);
                this.clothesItem[this.indexitem - 1].style.display = 'flex';
                this.clothesBackground.forEach(function (item) {
                    personClothes.style.background = 'none';
                    //console.log(item['this.indexitem - 1']);
                });
                personClothes.style.background = this.clothesBackground[this.indexitem - 1];
                personClothes.style.backgroundSize = 'cover';
            },

            plus(n) {
                this.show(this.indexitem += n);
                //this.test(this.indexitem += n);

            },

            nextSlide() {
                this.next.addEventListener('click', () => {

                    this.show(this.indexitem);
                    //this.test(this.indexitem); 
                    this.plus(1);


                });
            },
            prevSlide() {
                this.prev.addEventListener('click', () => {

                    this.show(this.indexitem);
                    //this.test(this.indexitem); 
                    this.plus(-1);

                });
            }
        },
    }
    let women = {
        skin: {
            skinItem: document.querySelectorAll('.skin-color'),
            skinBackground: ['url("../img/skin/skin4.png") center no-repeat', 'url("../img/skin/skin5.png") center no-repeat', 'url("../img/skin/skin6.png") center no-repeat'],

            next: document.querySelector('.skin .next'),
            prev: document.querySelector('.skin .prev'),
            indexitem: 1,


            show(n) {
                if (n > this.skinItem.length) {
                    this.indexitem = 1;
                }
                if (n < 1) {
                    this.indexitem = this.skinItem.length;
                }
                if (n > this.skinBackground.length) {
                    this.indexitem = 1;
                }
                if (n < 1) {
                    this.indexitem = this.skinBackground.length;
                }
                this.skinItem.forEach(function (item) {
                    item.style.display = 'none';
                });
               
                this.skinItem[this.indexitem - 1].style.display = 'flex';
                this.skinBackground.forEach(function (item) {
                    personSkin.style.background = 'none';
                   
                });
                personSkin.style.background = this.skinBackground[this.indexitem - 1];
                personSkin.style.backgroundSize = 'cover';


            },
            test(n) {

                if (n > this.skinBackground.length) {
                    this.indexitem = 1;
                }
                if (n < 1) {
                    this.indexitem = this.skinBackground.length;
                }
                this.skinBackground.forEach(function (item) {
                    personSkin.style.background = 'none';
                    //console.log(item['this.indexitem - 1']);
                });
                personSkin.style.background = this.skinBackground[this.indexitem - 1];
                personSkin.style.backgroundSize = 'cover';
              


            },
            plus(n) {
                this.show(this.indexitem += n);
                //this.test(this.indexitem += n);

            },

            nextSlide() {
                this.next.addEventListener('click', () => {
                    this.plus(1);
                    this.show(this.indexitem);
                    //this.test(this.indexitem); 



                });
            },
            prevSlide() {
                this.prev.addEventListener('click', () => {

                    this.show(this.indexitem);
                    // this.test(this.indexitem); 
                    this.plus(-1);

                });

            }
        },
        hair: {
            hairItem: document.querySelectorAll('.hair-style'),
            
            hairBackground: ['url("../img/hair/construct/hair1.png") center no-repeat', 'url("../img/hair/construct/hair2.png") center no-repeat', 'url("../img/hair/construct/hair3.png") center no-repeat', 'url("../img/hair/construct/hair4.png") center no-repeat', 'url("../img/hair/construct/hair5.png") center no-repeat', 'url("../img/hair/construct/hair6.png") center no-repeat'],
            
            next: document.querySelector('.hair .next'),
            prev: document.querySelector('.hair .prev'),
            indexitem: 4,
            show(n) {
                
                if (n > this.hairItem.length) {
                    this.indexitem = 4;
                }
                if (n < 4) {
                    this.indexitem = this.hairItem.length;
                }
                if (n > this.hairBackground.length) {
                    this.indexitem = 4;
                }
                if (n < 4) {
                    this.indexitem = this.hairBackground.length;
                }
                this.hairItem.forEach(function (item) {
                    item.style.display = 'none';

                });
                //console.log(this);
                this.hairItem[this.indexitem - 1].style.display = 'flex';
                this.hairBackground.forEach(function (item) {
                    personHair.style.background = 'none';
                    //console.log(item['this.indexitem - 1']);
                });
                personHair.style.background = this.hairBackground[this.indexitem - 1];
                personHair.style.backgroundSize = 'cover';

            },

            plus(n) {
                this.show(this.indexitem += n);
                //this.test(this.indexitem += n);

            },

            nextSlide() {
                this.next.addEventListener('click', () => {

                    this.show(this.indexitem);
                    //this.test(this.indexitem); 
                    this.plus(1);
                    console.log(this.indexitem);

                });
            },
            prevSlide() {
                this.prev.addEventListener('click', () => {

                    this.show(this.indexitem);
                    //this.test(this.indexitem); 
                    this.plus(-1);

                });
            }
        },
        сlothes: {
            clothesItem: document.querySelectorAll('.clothes-style'),
            clothesBackground: ['url("../img/clothes/construct/clothes1.png") center no-repeat', 'url("../img/clothes/construct/clothes2.png") center no-repeat', 'url("../img/clothes/construct/clothes3.png") center no-repeat', 'url("../img/clothes/construct/clothes4.png") center no-repeat', 'url("../img/clothes/construct/clothes5.png") center no-repeat', 'url("../img/clothes/construct/clothes6.png") center no-repeat'],

            next: document.querySelector('.clothes .next'),
            prev: document.querySelector('.clothes .prev'),
            indexitem: 4,
            show(n) {
                if (n > this.clothesItem.length) {
                    this.indexitem = 4;
                }
                if (n < 4) {
                    this.indexitem = this.clothesItem.length;
                }
                if (n > this.clothesBackground.length) {
                    this.indexitem = 4;
                }
                if (n < 4) {
                    this.indexitem = this.clothesBackground.length;
                }
                this.clothesItem.forEach(function (item) {
                    item.style.display = 'none';

                });
                //console.log(this);
                this.clothesItem[this.indexitem - 1].style.display = 'flex';
                this.clothesBackground.forEach(function (item) {
                    personClothes.style.background = 'none';
                    //console.log(item['this.indexitem - 1']);
                });
                personClothes.style.background = this.clothesBackground[this.indexitem - 1];
                personClothes.style.backgroundSize = 'cover';
            },

            plus(n) {
                this.show(this.indexitem += n);
                //this.test(this.indexitem += n);

            },

            nextSlide() {
                this.next.addEventListener('click', () => {

                    this.show(this.indexitem);
                    //this.test(this.indexitem); 
                    this.plus(1);


                });
            },
            prevSlide() {
                this.prev.addEventListener('click', () => {

                    this.show(this.indexitem);
                    //this.test(this.indexitem); 
                    this.plus(-1);

                });
            }
        },
    }

    // select sex candidate
    if (male.checked) {
        //slider skin
        skinItem.forEach(function (item) {
            item.style.display = 'none';

        })
        skinItem[0].style.display = 'flex';
        //slider hair
        hairItem.forEach(function (item) {
            item.style.display = 'none';

        })
        hairItem[0].style.display = 'flex';
        //slider clothes
        clothesItem.forEach(function (item) {
            item.style.display = 'none';

        })
        clothesItem[0].style.display = 'flex';


        personSkin.style.background = "url('../img/skin/skin1.png') center no-repeat";
        personSkin.style.backgroundSize = 'cover';
        personClothes.style.background = "url('../img/clothes/construct/clothes1.png') center no-repeat";
        personClothes.style.backgroundSize = 'cover';
        personHair.style.background = "url('../img/hair/construct/hair1.png') center no-repeat";
        personHair.style.backgroundSize = 'cover';
        men.skin.nextSlide();
        men.skin.prevSlide();
        men.hair.nextSlide();
        men.hair.prevSlide();
        men.сlothes.nextSlide();
        men.сlothes.prevSlide();
    }


    radio.addEventListener('change', function () {
        if (male.checked) {
            //slider skin
            skinItem.forEach(function (item) {
                item.style.display = 'none';

            })
            skinItem[0].style.display = 'flex';
            //slider hair
            hairItem.forEach(function (item) {
                item.style.display = 'none';

            })
            hairItem[0].style.display = 'flex';
            //slider clothes
            clothesItem.forEach(function (item) {
                item.style.display = 'none';

            })
            clothesItem[0].style.display = 'flex';


            personSkin.style.background = "url('../img/skin/skin1.png') center no-repeat";
            personSkin.style.backgroundSize = 'cover';
            personClothes.style.background = "url('../img/clothes/construct/clothes1.png') center no-repeat";
            personClothes.style.backgroundSize = 'cover';
            personHair.style.background = "url('../img/hair/construct/hair1.png') center no-repeat";
            personHair.style.backgroundSize = 'cover';
            men.skin.nextSlide();
            men.skin.prevSlide();
            men.hair.nextSlide();
            men.hair.prevSlide();
            men.сlothes.nextSlide();
            men.сlothes.prevSlide();
        } else if (female.checked) {
            //slider skin
            skinItem.forEach(function (item) {
                item.style.display = 'none';

            })
            skinItem[0].style.display = 'flex';
            //slider hair
            hairItem.forEach(function (item, i) {
                item.style.display = 'none';

            })
            hairItem[3].style.display = 'flex';
            //slider clothes
            clothesItem.forEach(function (item) {
                item.style.display = 'none';
            })
            clothesItem[3].style.display = 'flex';

            personSkin.style.background = "url('../img/skin/skin4.png') center no-repeat";
            personSkin.style.backgroundSize = 'cover';
            personClothes.style.background = "url('../img/clothes/construct/clothes4.png') center no-repeat";
            personClothes.style.backgroundSize = 'cover';
            personHair.style.background = "url('../img/hair/construct/hair4.png') center no-repeat";
            personHair.style.backgroundSize = 'cover';

            women.skin.nextSlide();
            women.skin.prevSlide();
            women.hair.nextSlide();
            women.hair.prevSlide();
            women.сlothes.nextSlide();
            women.сlothes.prevSlide();

        }
    })

    // new card clone

    let card = document.querySelector('.main-cards-item');
    card.classList.remove('main-cards-item-active');
    let wrapper = document.querySelector('.main-cards'),
        clone = card.cloneNode(true),
        ready = document.getElementById('ready'),
        nameC = clone.querySelector('.name'),
        ageC = clone.querySelector('.age'),
        personC = clone.querySelector('.photo'),
        viewsC = clone.querySelector('.views'),
        bioC = clone.querySelector('.bio'),

        sexC = clone.querySelector('.sex');
    wrapper.appendChild(clone);
    clone.style.display = 'none';
    let photoC = person.cloneNode(true);

    // progress
    let result_count = document.querySelectorAll('.result-count'),
        progress_bar = document.querySelectorAll('.progress-bar');



    ready.addEventListener('click', function () {
        clone.style.display = 'block';
        let photoC = person.cloneNode(true);
        nameC.textContent = name.value;
        ageC.textContent = `${age.value} лет`;
        if (female.checked) {
            sexC.textContent = `Женский`;
        } else if (male.checked) {
            sexC.textContent = `Мужской`;
        }
        viewsC.textContent = select.value;
        bioC.textContent = bio.value;
        personC.classList.remove('photo-1');
        personC.appendChild(photoC);

        //
        popup.style.display = 'none';
        overlay.style.display = 'none';
        custom.style.display = 'none';
        main.style.display = 'block';
        //
        result_count.forEach(function (item) {
            item.textContent = `0%`;
        })
        progress_bar.forEach(function (item) {
            item.style.height = 0 + '%';
        })

    })

    // 
    let voting = document.getElementById('voting'),
        crime = document.getElementById('crime');

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    // чесные выборы
    voting.addEventListener('click', function () {
        let cards = wrapper.querySelectorAll('.main-cards-item');
        cards.forEach(function (item) {

            item.classList.remove('main-cards-item-active');
        })
        let a = getRandomInt(0, 100);
        let b = getRandomInt(0, 100 - a);
        let c = 100 - a - b;
        progress_bar.forEach(function () {
            progress_bar[0].style.height = a + '%';
            progress_bar[1].style.height = b + '%';
            progress_bar[2].style.height = c + '%';
        })
        result_count.forEach(function () {
            result_count[0].textContent = `${a}%`;
            result_count[1].textContent = `${b}%`;
            result_count[2].textContent = `${c}%`;

        })

        if (a > b && a > c) {
            cards[0].classList.add('main-cards-item-active');
        } else if (b > a && b > c) {
            cards[1].classList.add('main-cards-item-active');
        } else {
            cards[2].classList.add('main-cards-item-active');
        }



    })
    // вмешаться в выборы
    crime.addEventListener('click', () => {
        let cards = wrapper.querySelectorAll('.main-cards-item');
        cards.forEach(function (item) {

            item.classList.remove('main-cards-item-active');
        })
        let a = getRandomInt(0, 100);
        console.log(a);
        if (a <= 75) {
            a += 25;
        }
        console.log(a);
        let b = getRandomInt(0, 100 - a);
        let c = 100 - a - b;
        progress_bar.forEach(function () {
            progress_bar[0].style.height = c + '%';
            progress_bar[1].style.height = b + '%';
            progress_bar[2].style.height = a + '%';
        })
        result_count.forEach(function () {
            result_count[0].textContent = `${c}%`;
            result_count[1].textContent = `${b}%`;
            result_count[2].textContent = `${a}%`;
        })

        if (a > b && a > c) {
            cards[2].classList.add('main-cards-item-active');
        } else if (b > a && b > c) {
            cards[1].classList.add('main-cards-item-active');
        } else {
            cards[0].classList.add('main-cards-item-active');
        }

    })


    // сбросить результаты
    let reset = document.getElementById('reset');

    reset.addEventListener('click', () => {

        main.style.display = 'none';
        custom.style.display = 'flex';
        let photoCandidate = clone.querySelector('.person', '.constructor');
        photoCandidate.remove();


    })






















});