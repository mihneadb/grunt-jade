module.exports = {

  options: {
    extra_data: 'Welcome to my website!'
  },

  base_path_test: {
    files: {
      'tmp/new/jade-base_path': ['test/fixtures/helloworld.jade']
    },
    options: {
      basePath: 'test/'
    }
  },
  base_path: {
    files: {
      'example/output/base_path': ['example/templates/**/*.jade']
    },
    options: {
      basePath: 'example/templates'
    }
  },
  // NEW Tests and Examples
  no_options: {
    files: {
      'tmp/new/jade-no_options/': ['test/fixtures/helloworld.jade'],
      'example/output/no_options/': ['example/templates/**/*.jade']
    }
  },
  global: {
    files: {
      'tmp/new/jade-global/': ['test/fixtures/helloworld.jade'],
      'example/output/global/': ['example/templates/*.jade']
    },
    options: {
      wrap: 'global'
    }
  },
  node: {
    files: {
      'tmp/new/jade-node/': ['test/fixtures/helloworld.jade'],
      'example/output/node/': ['example/templates/*.jade']
    },
    options: {
      wrap: 'node'
    }
  },
  amd: {
    files: {
      'tmp/new/jade-amd/': ['test/fixtures/helloworld.jade'],
      'example/output/amd/': ['example/templates/*.jade']
    },
    options: {
      wrap: 'amd'
    }
  },
  amd_deps: {
    files: {
      'tmp/new/jade-amd_deps/': ['test/fixtures/helloworld.jade'],
      'example/output/amd_deps/': ['example/templates/*.jade']
    },
    options: {
      wrap: {
        amd: true,
        dependencies: 'jade'
      }
    }
  },
  amd_debug: {
    files: {
      'tmp/new/jade-amd_debug/': ['test/fixtures/helloworld.jade'],
      'example/output/amd_debug/': ['example/templates/*.jade']
    },
    options: {
      compileDebug: true,
      wrap: 'amd'
    }
  },
  debug: {
    files: {
      'tmp/new/jade-debug/': ['test/fixtures/helloworld.jade'],
      'example/output/debug/': ['example/templates/*.jade']
    },
    options: {
      compileDebug: true
    }
  },
  html: {
    files: {
      'tmp/new/jade-html/': ['test/fixtures/helloworld.jade'],
      'example/output/html/': ['example/templates/*.jade']
    },
    options: {
      client: false,
      title: 'Passed from the options object (no locals used)'
    }
  },
  html_options: {
    // TODO: write test
  },
  no_wrap: {
    files: {
      'tmp/new/jade-no_wrap/': ['test/fixtures/helloworld.jade'],
      'example/output/no_wrap_no_amd/': ['example/templates/*.jade']
    },
    options: {
      wrap: 'none'
    }
  },
  no_runtime: {
    files: {
      'tmp/new/jade-no_runtime/': ['test/fixtures/helloworld.jade'],
      'example/output/no_runtime/': ['example/templates/*.jade']
    },
    options: {
      runtime: false
    }
  },
  custom_extension: {
    files: {
      'tmp/new/jade-custom_extension/': ['test/fixtures/helloworld.jade'],
      'example/output/custom_extension/': ['example/templates/*.jade']
    },
    options: {
      client: false,
      extension: '.xml'
    }
  },
  locals: {
    files: {
      'tmp/new/jade-locals/': ['test/fixtures/variable.jade'],
      'example/output/locals/': ['example/templates/*.jade']
    },
    options: {
      client: false,
      locals: {
        title: 'Welcome to my website!'
      }
    }
  },
  locals_template: {
    files: {
      'tmp/new/jade-locals_template/': ['test/fixtures/variable.jade'],
      'example/output/locals_template/': ['example/templates/*.jade']
    },
    options: {
      client: false,
      locals: {
        title: '<%= jade.options.extra_data %>'
      }
    }
  },
  locals_function: {
    files: {
      'tmp/new/jade-locals_function/': ['test/fixtures/variable.jade'],
      'example/output/locals_function/': ['example/templates/*.jade']
    },
    options: {
      client: false,
      locals: function() {
        return {
          title: 'Generated by a function - needs to be static for test'
        };
      }
    }
  },
  // OLD Tests
  old_no_options: {
    src: ['test/fixtures/helloworld.jade'],
    dest: 'tmp/old/jade-no_options/'
  },
  old_global: {
    src: ['test/fixtures/helloworld.jade'],
    dest: 'tmp/old/jade-global/',
    options: {
      wrap: 'global'
    }
  },
  old_node: {
    src: ['test/fixtures/helloworld.jade'],
    dest: 'tmp/old/jade-node/',
    options: {
      wrap: 'node'
    }
  },
  old_amd: {
    src: ['test/fixtures/helloworld.jade'],
    dest: 'tmp/old/jade-amd/',
    options: {
      wrap: 'amd'
    }
  },
  old_amd_deps: {
    src: ['test/fixtures/helloworld.jade'],
    dest: 'tmp/old/jade-amd_deps/',
    options: {
      wrap: {
        amd: true,
        dependencies: 'jade'
      },
    }
  },
  old_amd_debug: {
    src: ['test/fixtures/helloworld.jade'],
    dest: 'tmp/old/jade-amd_debug/',
    options: {
      compileDebug: true,
      wrap: 'amd'
    }
  },
  old_debug: {
    src: ['test/fixtures/helloworld.jade'],
    dest: 'tmp/old/jade-debug/',
    options: {
      compileDebug: true
    }
  },
  old_html: {
    src: ['test/fixtures/helloworld.jade'],
    dest: 'tmp/old/jade-html/',
    options: {
      client: false
    }
  },
  old_no_wrap: {
    src: ['test/fixtures/helloworld.jade'],
    dest: 'tmp/old/jade-no_wrap/',
    options: {
      wrap: 'none'
    }
  },
  old_no_runtime: {
    src: ['test/fixtures/helloworld.jade'],
    dest: 'tmp/old/jade-no_runtime/',
    options: {
      runtime: false
    }
  },
  old_custom_extension: {
    src: ['test/fixtures/helloworld.jade'],
    dest: 'tmp/old/jade-custom_extension/',
    options: {
      client: false,
      extension: '.xml'
    }
  },
  old_locals: {
    src: ['test/fixtures/variable.jade'],
    dest: 'tmp/old/jade-locals/',
    options: {
      client: false,
      locals: {
        title: 'Welcome to my website!'
      }
    }
  },
  old_locals_template: {
    src: ['test/fixtures/variable.jade'],
    dest: 'tmp/old/jade-locals_template/',
    options: {
      client: false,
      locals: {
        title: '<%= jade.options.extra_data %>'
      }
    }
  },
  old_locals_function: {
    src: ['test/fixtures/variable.jade'],
    dest: 'tmp/old/jade-locals_function/',
    options: {
      client: false,
      locals: function() {
        return {
          title: 'Generated by a function - needs to be static for test'
        };
      }
    }
  }
};