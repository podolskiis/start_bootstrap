var
	password          = 'admin',
  login             = 'podolskiis',
  project           = '2018/11/start';
module.exports = {
  path: {
    app: {
      home:         'app/',
      sass: {
        src:        'app/sass/main.scss',
        dest:       'app/css/',
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
        watch:      'app/js/*.js'
      }
    }
  },
  dist: {
    home:           'www/',
    img: {
      src:          'app/images/**',
      dest:         'www/images/'
    },
    useref: {
      src:          'app/*.html',
      dest:         'www/'
    },
    css: {
      src:        'app/css/theme.min.css',
      dest:       'www/css/'
  	},
    import: {
      css: {
        src:        'app/css/custom.css',
        dest:       'www/css/'
    	},
      fonts: {
        src:        'app/fonts/**',
        dest:       'www/fonts/'
  	  },
      js: {
        src:        'app/js/**',
        dest:       'www/js'
  	  },
      video: {
        src:        'app/video/**',
        dest:       'www/video'
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
