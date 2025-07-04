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
      overview: "Mai Sakurajima berpakaian seperti gadis kelinci dan berkeliling di dalam perpustakaan tanpa disadari oleh siapa pun di sana. Mai merasa heran karena Sakuta hanya satu-satunya orang yang dapat melihatnya—sementara orang lain tidak.",
      poster_path: "/source/bunny.jpg",
      vote_average: 8.8
    },
    {
      title: "Bocchi The Rock",
      overview: "Bocchi seorang gadis pemalu dan tertutup, masa smp dia terus mengasah kemampuan bermain gitarnya, ia mengunggah video dirinya yang bermain di internet sebagai Guitar Hero dan ingin tampil di festival sekolah",
      poster_path: "/source/bochi.jpg",
      vote_average: 8.6
    },
    {
      title: "Dr. Stone",
      overview: "Menceritakan usaha para tokoh dari Dunia yang mencoba untuk membangun kembali peradaban di Zaman batu. Senku dan Taiju bercita-cita untuk menata ulang peradaban manusia agar mampu hidup kembali di Zaman Batu ini.",
      poster_path: "/source/drstun.jpg",
      vote_average: 9.5
    },
    {
      title: "Your Name",
      overview: "Secara Misterius Taki berada di dalam tubuh Mitsuha dan sebaliknya, Mereka pun bingung dengan kejadian tersebut. Namun saat mereka kembali ke tubuh masing-masing, baik Taki maupun Mitsuha lupa mereka sebelumnya pernah bertukar tubuh.",
      poster_path: "/source/kimino.jpg",
      vote_average: 8.5
    },
  ],



  popular: [],


// rekomended
  "top-rated": [
    {
      title: "The Shawshank Redemption",
      overview: "Menceritakan kehidupan para idola cantik yang berjumlahkan 9 orang, mereka menghadapi banyak cobaaan dalam karir idolanya, ini saya rate bagus, karna ceritanya mirip fromis_9 idol kpop favorit saya!",
      poster_path: '/source/selection.jpg',
      vote_average: 10
    },
    {
      title: "Parallel World Pharmacy",
      overview: "ilmuan yang kehilangan adiknya. Adik Kanji meninggal akibat pengobatan yang tersedia saat itu tidak memadai. Sejak saat itu, Kanji mengabdikan dirinya kepada dunia kesehatan agar kasus yang menimpa adiknya tidak terjadi lagi.",
      poster_path: '/source/apotek.jpg',
      vote_average: 9.9
    },
    {
      title: " Shikimori's Not Just a Cutie",
      overview: "Izumi adalah karakter yang paling sial. Ia selalu pulang ke rumah dalam keadaan cedera. Izumi lantas berusaha untuk membuang sial yang telah lama menimpa dirinya itu. Salah satu caranya adalah berpacaran.",
      poster_path: '/source/shikimori.jpg',
      vote_average: 9.8
    },
    {
      title: "Talentless Nana",
      overview: "Suatu hari, seorang siswa baru bernama Nana Hiiragi. Pada kenyataannya, Nana adalah seorang pembunuh milik pemerintah yang tidak memiliki Bakat dan telah dikirim untuk membunuh para siswa, yang dianggap pemerintah sebagai Musuh Kemanusiaan yang sebenarnya.",
      poster_path: '/source/talentles-nana.jpg',
      vote_average: 9.7
    },
    {
      title: "16bit Sensation: Another Layer",
      overview: "Konoha Akisato adalah seorang ilustrator yang menyukai gadis-gadis cantik dan game bishoujo atau game yang banyak gadisnya. cita-citanya tidak berjalan seperti yang dia harapkan",
      poster_path: '/source/16bit.jpg',
      vote_average: 9.6
    },
    {
      title: "The Aquatope on White Sand",
      overview: "Menceritakan tentang kisah dua gadis. Kukuru Misakino mengejar mimpinya dengan bekerja di akuarium dan Fūka Miyazawa, seorang idola dari Tokyo, yang telah melepaskan posisinya dan melakukan perjalanan ke Okinawa untuk mencari sesuatu yang baru.",
      poster_path: '/source/pasir.jpg',
      vote_average: 9.6
    }
  ],


  // watchlist
  trending: [
    {
      title: "Demon Slayer: Kimetsu no Yaiba",
      overview: "Saya pengen nonton ini, karna banyak yang nonton dan katanya bagus, selain itu kakak saya juga suka sama anime ini, jadi saya kepo",
      poster_path: "/source/demon.jpg",
      vote_average: '#1'
    },
    {
      title: "Cell's at Work",
      overview: "Saya pengen nonton ini katanya mengedukasi, tapi baru nonton 3 episode udah bikin kepala aku pusing, kayanya otak aku kekecilan",
      poster_path: "/source/cels.jpg",
      vote_average: '#2'
    },
    {
      title: "Sprited Away",
      overview: "Saya mau nonton ini karna kepo, soalnya orang orang pada bahas ghibli ghibli ghibli...",
      poster_path: "/source/Spirited away.jpg",
      vote_average: '#3'
    },
    {
      title: "Anne Shirley",
      overview: "Saya mau nonton ini karna artstylenya aneh, jd pngen ngerasain sensasi beda",
      poster_path: "/source/anne",
      vote_average: '#4'
    },
    {
      title: "Haikyuu!",
      overview: "Saya pengen nonton anime ini soalnya dulu ramai, dan banyak yang nonton, teman saya bilang abis nonton ini jadi paham mapel pjok :>",
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
      <h2>Yōkoso! 🌸</h2>
      <p>Selamat dateng di website kecilku, tempat aku menyimpan semua anime yang sudah kutonton (Watched), rekomendasi pribadi (Recommended), dan anime yang masih ada di dalam Watchlist, menunggu waktu yang pas untuk ditonton. Kadang-kadang, ada juga anime yang menurutku chotto bimyou — sedikit kurang menarik, tapi siapa tahu, selera kita berbeda.
      <br>
      List ini bukan sekadar daftar, tapi jejak perjalanan nonton anime yang terus bertambah. Simple for now, but I’ll keep it growing, little by little. <br> Tanoshinde ne! 🎥✨</p>
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
