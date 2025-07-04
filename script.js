const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

const categories = {
  // Watched
  "now-playing": [
    {
      title: "Suka Suka",
      overview: "500 tahun manusia dikuasai oleh “Beast”. Ras yang masih bertahan hidup membuat rumah mereka mengapung dan menjadi pulau-pulau yang mengapung di langit, agar terhindar dari jangkauan Beast.",
      poster_path: "/source/sukasuka.jpg",
      vote_average: 7.9
    },
    {
      title: "Kuma Kuma Kuma Bear",
      overview: "Yuna, seorang gadis berumur 15-tahun, mencoba bermain permainan VRMMO yang pertama di dunia, selesai menjawab survei tentang pembaruan permainan yang terbaru, dia tiba-tiba muncul di hutan misterius.",
      poster_path: "/source/kuma.jpg",
      vote_average: 7.8
    },
    {
      title: "Wandering Witch",
      overview: "Wandering Witch: The Journey of Elaina ini Flanmenceritakan tentang sosok Elaina yang sejak kecil selalu terpesona dengan cerita-cerita yang ditulis dalam buku favoritnya.",
      poster_path: "/source/witch.jpg",
      vote_average: 8.5
    },
    {
      title: "Tada Never Falls in Love",
      overview: "Mitsuyoshi Tada adalah seorang pemuda yang tidak pernah mengenal cinta, ia bertemu dengan Teresa Wagner, seorang siswa pindahan. Tampaknya Teresa tersesat. Mitsuyoshi membantunya dan membawanya ke kedai kopi kakeknya.",
      poster_path: "/source/tada.jpg",
      vote_average: 6.8
    },
    {
      title: "The Saint’s Magic Power Is Omnipotent",
      overview: "Dinilai kurang cakep alias good looking, Sei Takanashi akhirnya diperlakukan kurang ajar oleh sang pangeran mahkota. Terpanggil bersama salah seorang gadis SMA berparas rupawan, Sei diperlakukan cukup berbeda di istana.",
      poster_path: "/source/saint.jpg",
      vote_average: 7.1
    },
    {
      title: "Lapis Re:LiGHTs",
      overview: "Tiara memulai kehidupan barunya apakah kakak perempuannya menginginkannya atau tidak. Mengambil pelatih dari Bristol, dia datang ke Flora Girls 'Academy dengan impian tidak hanya bergabung dengan teman lamanya Rosetta, tetapi juga memasuki sekolah penyihir bergengsi.",
      poster_path: "/source/lapis.jpg",
      vote_average: 8.2
    },
    {
      title: "Urara Meirochou",
      overview: "Inilah Meiro-machi, sebuah kota tempat gadis-gadis peramal tinggal. Banyak gadis dari penjuru negeri datang ke kota ini untuk menjadi peramal yang handal (Urara). Chiya, seorang gadis dari pegunungan yang baru saja datang ke kota ini dengan tujuan lain selain menjadi Urara",
      poster_path: "/source/urara.jpg",
      vote_average: 9.0
    },
    {
      title: "Rascal Does Not Dream of Bunny Girl",
      overview: "emaja bernama Mai Sakurajima. Ia berpakaian seperti gadis kelinci dan berkeliling di dalam perpustakaan tanpa disadari oleh siapa pun di sana. Mai merasa heran karena Sakuta hanya satu-satunya orang yang dapat melihatnya—sementara orang lain tidak.",
      poster_path: "/source/bunny.jpg",
      vote_average: 6.8
    },
    {
      title: "rent",
      overview: "Fire meets Water.",
      poster_path: "/source/rent.jpg",
      vote_average: 6.8
    },
    {
      title: "drstun",
      overview: "Fire meets Water.",
      poster_path: "/source/drstun.jpg",
      vote_average: 6.8
    },
    {
      title: "kiminonawa",
      overview: "Fire meets Water.",
      poster_path: "/source/kimino.jpg",
      vote_average: 6.8
    },
  ],



  popular: [],


// rekomended
  "top-rated": [
    {
      title: "The Shawshank Redemption",
      overview: "Hope can set you free.",
      poster_path: '/source/talentles-nana.jpg',
      vote_average: 9.8
    },
    {
      title: "The Shawshank Redemption",
      overview: "Hope can set you free.",
      poster_path: '/source/shikimori.jpg',
      vote_average: 9.8
    },
    {
      title: "The Shawshank Redemption",
      overview: "Hope can set you free.",
      poster_path: '/source/apotek.jpg',
      vote_average: 9.7
    },
    {
      title: "The Shawshank Redemption",
      overview: "Hope can set you free.",
      poster_path: '/source/16bit.jpg',
      vote_average: 9.7
    },
    {
      title: "The Shawshank Redemption",
      overview: "Hope can set you free.",
      poster_path: '/source/pasir.jpg',
      vote_average: 9.7
    },
    {
      title: "The Shawshank Redemption",
      overview: "Hope can set you free.",
      poster_path: '/source/selection.jpg',
      vote_average: 9.7
    }
  ],


  // watchlist
  trending: [
    {
      title: "Deadpool & Wolverine",
      overview: "Unexpected team-up.",
      poster_path: "/source/demon.jpg",
      vote_average: '#1'
    },
    {
      title: "Deadpool & Wolverine",
      overview: "Unexpected team-up.",
      poster_path: "/source/cels.jpg",
      vote_average: '#2'
    },
    {
      title: "Deadpool & Wolverine",
      overview: "Unexpected team-up.",
      poster_path: "/source/Spirited away.jpg",
      vote_average: '#3'
    },
    {
      title: "Deadpool & Wolverine",
      overview: "Unexpected team-up.",
      poster_path: "/source/anne",
      vote_average: '#4'
    },
    {
      title: "Deadpool & Wolverine",
      overview: "Unexpected team-up.",
      poster_path: "/source/haikyu.jpg",
      vote_average: '#5'
    }
  ]
};

function showMovies(movies) {
  main.innerHTML = '';
  movies.forEach(({ title, poster_path, vote_average, overview }) => {
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = `
      <img src="${poster_path}" alt="${title}">
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h4>Overview:</h4>
        ${overview}
      </div>
    `;
    main.appendChild(movieEl);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) return 'green';
  else if (vote >= 5) return 'orange';
  else return 'red';
}

function showHome() {
  main.innerHTML = `
    <div class="home-text">
      <h2>Welcome to Movie Web App 🎬</h2>
      <p>Lorem ipsum dolororem ipsum dolor sit amet consectetur adipisicing elit. In accusamus mollitia, recusandae nobis quos amet qui consectetur iure natus velit alias maxime a dicta eveniet enim at magni voluptatum. Ab. sit, amet consectetur adipisicing elit. Nostrum nisi magnam quia. Id at quo et molestiae possimus quaerat voluptates, dolorem exercitationem perferendis, repudiandae architecto fugiat reprehenderit necessitatibus nesciunt repellendus!</p>
    </div>
  `;
}

function setActive(element, category) {
  document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
  element.classList.add('active');

  if (category === 'home') {
    showHome();
  } else {
    showMovies(categories[category] || []);
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = search.value.toLowerCase();
  const currentCategory = document.querySelector('nav a.active').getAttribute('onclick').match(/'(.+)'/)[1];

  if (currentCategory === 'home') return;

  const filtered = categories[currentCategory].filter(movie =>
    movie.title.toLowerCase().includes(searchTerm)
  );
  showMovies(filtered);
});

showHome();
