export default {
    template: `
    <section class="home-page ">
    <div class="jumbotron ">
        <div class="container flex column  wrap justify-center align-center">
        <h1 class="title-home-page">AppSus - Take your productivity to the highest level </h1>
        <p>
        Make your life easier and much more productivity with AppSus' Email, Keep and Books services!
        </p>

<div class="controls-btn">
            <router-link to="/email/inbox" exact><button class="btn-home">Email</button></router-link>
            <router-link to="/keep" exact><button class="btn-home">Keep</button>
</router-link>
            <router-link to="/books" exact><button class="btn-home">Books</button>
</router-link>

</div>
</div>
</div>   
<!--Section Our features -->
<section class="our-features">
<div class="container features-container">
<h2 class="why-us-title">Our Features</h2>
<div class="why-us-container flex  align-center justify-center">
<div class="box-features flex column wrap justify-center align-center">
<i class="icon-box word-red fas fa-envelope"></i>
<h3 class="title-box">Mail-Box</h3>
<p class="text-box">AppSus Email-service' offers the most fast and qualified Email-Services these days, makes it easier for you to manage your emails.</p>
<router-link to="/email/inbox" exact><button class="btn-home">Learn More</button>
</router-link>
</div>
<div class="box-features flex column wrap justify-center align-center">
<i class="icon-box word-yellow fas fa-sticky-note"></i>
<h3 class="title-box ">Keep</h3>
<p class="text-box">Manage your thoughts, and lists with AppSus' Keep-Service, our service supports videos and pictures to be kept.</p>
<router-link to="/keep" exact><button class="btn-home">Learn More</button>
</router-link>
</div>
<div class="box-features flex column wrap justify-center align-center">
<i class="icon-box word-green fas fa-book"></i>
<h3 class="title-box">Books</h3>
<p class="text-box">Manage your books with AppSus' Books-Service!</p>
<router-link to="/book" exact><button class="btn-home">Learn More</button>
</router-link>
</div>
</div> 
</div>
</section>
<!-- Section info app -->
<section class="info-app">
<div class="box-info keep-info">
<div class="info-container container flex wrap">
<div class="info-content flex column justify-center align-center">
    <h2 class="title-box title-info">Save your thoughts, wherever you are</h2>
    <p class="text-box text-info">
Quickly store your notes, lists, favourite images and videos. Find what you're looking for even faster, and let Keep do the storaging for you.
</p>
<router-link to="/keep" exact><button class="btn-home">Learn More</button>
</router-link>
</div>
<img src="assets/imgs/mocupkeep.jpg" class="image-info"  alt="">
</div>
</div>

<div class="box-info mail-info">
<div class="info-container container flex wrap">
<img src="assets/imgs/mocupmail.jpg" class="image-info"  alt="">
<div class="info-content flex column justify-center align-center">
    <h2 class="title-box title-info">Send your mail, wherever you are</h2>
    <p class="text-box text-info">
The most qualified email-services these days to submit and receive e-mails. Appsus' email-services will make managing your e-mails much easier.
</p>
<router-link to="/email/inbox" exact><button class="btn-home">Learn More</button>
</router-link>
</div>
</div>
</div>

<div class="box-info book-info">
<div class="info-container container flex wrap">
<div class="info-content flex column justify-center align-center">
    <h2 class="title-box title-info">Shop your books, wherever you are</h2>
    <p class="text-box text-info">
AppSus' Books-shop offers a big variety of books to purchase in a comfortable place. You can also search for your books all around the world, and find the required details.</p>
<router-link to="/book" exact><button class="btn-home">Learn More</button>
</router-link>
</div>
<img src="assets/imgs/mocupbook.jpg" class="image-info"  alt="">

</div>
</div>
</section>
<h2 class="flex justify-center">Our Team</h2>
<section class="our-team container flex row justify-center align-center">
    <div class="box-team flex column justify-center align-center wrap">
<img src="assets/imgs/team/team-orel.jpg" class="image-team"  alt="">
    <h2 class="title-box title-team ml-5">Orel Vaizman</h2>
    <p class="text-box text-team  mb-5 ml5">22 years old from Kiryat-Gat, Israel. Tech-Lover ever since I was youth. I am very passionate about coding and especially web-development. Loves to achieve challenges.</p>
    <ul class="social-icons clean-list flex justify-center">
<li class="team-icon-social"><a href="https://www.facebook.com/OrelVaizman"><i class="item-social fab fa-facebook-f"></i></a></li>
<li class="team-icon-social"><a href="https://www.linkedin.com/in/orel-vaizman-723a94122/"><i class="item-social fab fa-linkedin-in"></i></a></li>
<li class="team-icon-social"><a href="https://github.com/OrelVaizman/"><i class="item-social fab fa-github"></i></a></li>
</ul>
    </div>
    <div class="box-team flex column justify-center align-center wrap">
<img src="assets/imgs/team/team-yuval.png" class="image-team"  alt="">
    <h2 class="title-box title-team ml-5">Yuval Beiton</h2>
    <p class="text-box text-team  mb-5 ml5">23 years old from Hefer Valley ,Israel,Passionate about coding and love to learn new things.studying web development in Coding-Academy.</p>
    <ul class="social-icons clean-list flex justify-center">
<li class="team-icon-social"><a href="https://m.facebook.com/yuval.beiton"><i class="item-social fab fa-facebook-f"></i></a></li>
<li class="team-icon-social"><a href="https://github.com/YuvalBeitOn"><i class="item-social fab fa-github"></i></a></li>
</ul>
    </div>
    <div class="box-team flex column justify-center align-center wrap">
<img src="assets/imgs/team/team-guy.png" class="image-team"  alt="">
    <h2 class="title-box title-team">Guy Indepurker</h2>
    <p class="text-box text-team mb-5 ml5">24 years old from Beer Sheva,Israel. Loving to design,create and build web-application. studying web development in Coding-Academy.</p>
    <ul class="social-icons clean-list flex justify-center">
<li class="team-icon-social"><a href="https://www.facebook.com/Guy.Indepurker"><i class="item-social fab fa-facebook-f"></i></a></li>
<li class="team-icon-social"><a href="https://www.linkedin.com/in/guy-indepurker-5778091a4/"><i class="item-social fab fa-linkedin-in"></i></a></li>
<li class="team-icon-social"><a href="https://github.com/guyindepurker"><i class="item-social fab fa-github"></i></a></li>
</ul>
    </div>
</section>

</section>
    `,
};