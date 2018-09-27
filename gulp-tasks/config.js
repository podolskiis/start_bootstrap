var
  login             = 'admin',
  password          = 'admin',
  project           = '2018/01/start';
module.exports = {
  path: {
    app: {
      home:         'app/',
      sass: {
        src:        'app/sass/main.scss',
        dest:       'app/assets/css/',
        watch:      'app/sass/**/*.+(scss|sass)',
        rename:     'theme.min.css'
      },
      pug: {
        src:        'app/pug/**/*.pug',
        dest:       'app/',
        watch:      'app/pug/**/*.pug',
        json:       'app/pug/_base/_data.json'
      },
      bower: {
        src:        'app/pug/**/{_head,_script}.pug',
        dest:       'app/pug/',
        watch:      'bower.json'
      },
      js: {
        watch:      'app/assets/js/*.js'
      }
    }
  },
  dist: {
    home:           'www/',
    img: {
      src:          'app/assets/images/**',
      dest:         'www/assets/images/'
    },
    useref: {
      src:          'app/*.html',
      dest:         'www/'
    },
    css: {
      src:        'app/assets/css/theme.min.css',
      dest:       'www/assets/css/'
  	},
    import: {
      css: {
        src:        'app/assets/css/custom.css',
        dest:       'www/assets/css/'
    	},
      fonts: {
        src:        'app/assets/fonts/**',
        dest:       'www/assets/fonts/'
  	  },
      js: {
        src:        'app/assets/js/**',
        dest:       'www/assets/js'
  	  },
      video: {
        src:        'app/assets/video/**',
        dest:       'www/assets/video'
  	  },
      dop: {
        src: [
                    'app/*.ico',
                    'app/.htaccess'
        ],
        dest:       'www/'
  	  }
    },
    size:           'www/**'
  },
  ftp: {
    home:           'www/',
    url:            'sergeypodolsky.ru/public_html/work/'+project,
    conn: {
      host:         '92.53.96.109',
      user:         login,
      password:     password,
      parallel:     10
    },
    globs: [
                    'www/**',
                    'www/**/.*'
    ]
  },
  ssh: {
    src: [
                    'www/**',
                    'www/**/.*'
    ],
    host: {
      root:         'www/',
      hostname:     login+'@vh54.timeweb.ru',
      destination:  'sergeypodolsky.ru/public_html/work/'+project,
      archive:      true,
      silent:       false,
      compress:     true
    }
  }
};
