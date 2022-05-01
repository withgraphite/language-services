/*
 * A living list of file extensions mapped to languages
 * Languages that are not supported by highlightjs are resolved to txt.
 * List of languages supported by highlightjs: https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md
 */
const EXT_TO_LANGUAGE: Record<string, string> = {
    "1": "txt",
    "2": "txt",
    "3": "txt",
    "4": "txt",
    "5": "txt",
    "6": "txt",
    "7": "txt",
    "8": "txt",
    "9": "txt",
    abap: "ABAP",
    asc: "txt",
    ash: "txt",
    ampl: "txt",
    mod: "XML",
    g4: "txt",
    apib: "txt",
    apl: "txt",
    dyalog: "txt",
    asp: "txt",
    asax: "txt",
    ascx: "txt",
    ashx: "txt",
    asmx: "txt",
    aspx: "txt",
    axd: "txt",
    dats: "txt",
    hats: "txt",
    sats: "txt",
    as: "ActionScript",
    adb: "Ada",
    ada: "Ada",
    ads: "Ada",
    agda: "txt",
    als: "txt",
    apacheconf: "Apache",
    vhost: "Nginx",
    cls: "Basic",
    applescript: "AppleScript",
    scpt: "AppleScript",
    arc: "txt",
    ino: "Arduino",
    asciidoc: "AsciiDoc",
    adoc: "AsciiDoc",
    aj: "AspectJ",
    asm: "x86asm",
    a51: "x86asm",
    inc: "txt",
    nasm: "x86asm",
    aug: "txt",
    ahk: "AutoHotkey",
    ahkl: "AutoHotkey",
    au3: "AutoIt",
    awk: "Awk",
    auk: "Awk",
    gawk: "Awk",
    mawk: "Awk",
    nawk: "Awk",
    bat: "bat",
    cmd: "bat",
    befunge: "txt",
    bison: "txt",
    bb: "txt",
    decls: "txt",
    bmx: "txt",
    bsv: "txt",
    boo: "txt",
    b: "txt",
    bf: "txt",
    brs: "txt",
    bro: "txt",
    c: "C",
    cats: "C",
    h: "objectivec",
    idc: "C",
    w: "C",
    cs: "C#",
    cake: "CoffeeScript",
    cshtml: "C#",
    csx: "C#",
    cpp: "C++",
    "c++": "C++",
    cc: "C++",
    cp: "pascal",
    cxx: "C++",
    "h++": "C++",
    hh: "txt",
    hpp: "C++",
    hxx: "C++",
    inl: "C++",
    ipp: "C++",
    tcc: "C++",
    tpp: "C++",
    "c-objdump": "C-ObjDump",
    chs: "Haskell",
    clp: "txt",
    cmake: "CMake",
    "cmake.in": "CMake",
    cob: "txt",
    cbl: "txt",
    ccp: "txt",
    cobol: "txt",
    cpy: "txt",
    css: "CSS",
    csv: "txt",
    capnp: "capnproto",
    mss: "css",
    ceylon: "txt",
    chpl: "Chapel",
    ch: "txt",
    ck: "txt",
    cirru: "txt",
    clw: "txt",
    icl: "txt",
    dcl: "txt",
    click: "txt",
    clj: "Clojure",
    boot: "Clojure",
    cl2: "Clojure",
    cljc: "Clojure",
    cljs: "Clojure",
    "cljs.hl": "Clojure",
    cljscm: "Clojure",
    cljx: "Clojure",
    hic: "Clojure",
    coffee: "CoffeeScript",
    _coffee: "CoffeeScript",
    cjsx: "CoffeeScript",
    cson: "CoffeeScript",
    iced: "CoffeeScript",
    cfm: "txt",
    cfml: "txt",
    cfc: "txt",
    lisp: "list",
    asd: "lisp",
    cl: "txt",
    l: "lisp",
    lsp: "lisp",
    ny: "lisp",
    podsl: "lisp",
    sexp: "lisp",
    cps: "Pascal",
    coq: "Coq",
    v: "Verilog",
    cppobjdump: "cpp",
    "c++-objdump": "cpp",
    "c++objdump": "cpp",
    "cxx-objdump": "cpp",
    creole: "txt",
    cr: "Crystal",
    feature: "txt",
    cu: "txt",
    cuh: "txt",
    cy: "Python",
    pyx: "Python",
    pxd: "Python",
    pxi: "Python",
    d: "Makefile",
    di: "D",
    "d-objdump": "D",
    com: "txt",
    dm: "txt",
    zone: "dns",
    arpa: "dns",
    darcspatch: "txt",
    dpatch: "txt",
    dart: "Dart",
    diff: "Diff",
    patch: "Diff",
    dockerfile: "Dockerfile",
    djs: "txt",
    dylan: "Dylan",
    dyl: "Dylan",
    intr: "Dylan",
    lid: "Dylan",
    E: "txt",
    ecl: "txt",
    eclxml: "txt",
    sch: "txt",
    brd: "txt",
    epj: "txt",
    e: "txt",
    ex: "Elixir",
    exs: "Elixir",
    elm: "Elm",
    el: "lisp",
    emacs: "lisp",
    "emacs.desktop": "Emacs Lisp",
    em: "txt",
    emberscript: "txt",
    erl: "Erlang",
    es: "JavaScript",
    escript: "Erlang",
    hrl: "Erlang",
    xrl: "Erlang",
    yrl: "Erlang",
    fs: "glsl",
    fsi: "F#",
    fsx: "F#",
    fx: "hlsl",
    flux: "txt",
    f90: "f90",
    f: "txt",
    f03: "f90",
    f08: "f90",
    f77: "f90",
    f95: "f90",
    for: "txt",
    fpp: "f90",
    factor: "txt",
    fy: "txt",
    fancypack: "txt",
    fan: "txt",
    "eam.fs": "txt",
    fth: "txt",
    "4th": "txt",
    forth: "txt",
    fr: "txt",
    frt: "txt",
    ftl: "FreeMarker",
    g: "txt",
    gco: "gcode",
    gcode: "gcode",
    gms: "gams",
    gap: "txt",
    gd: "gdscript",
    gi: "txt",
    tst: "Scilab",
    s: "txt",
    ms: "txt",
    glsl: "glsl",
    fp: "glsl",
    frag: "JavaScript",
    frg: "glsl",
    fsh: "glsl",
    fshader: "glsl",
    geo: "glsl",
    geom: "glsl",
    glslv: "glsl",
    gshader: "glsl",
    shader: "glsl",
    vert: "glsl",
    vrx: "glsl",
    vsh: "glsl",
    vshader: "glsl",
    gml: "XML",
    kid: "txt",
    ebuild: "txt",
    eclass: "txt",
    po: "txt",
    pot: "txt",
    glf: "txt",
    gp: "txt",
    gnu: "txt",
    gnuplot: "txt",
    plot: "txt",
    plt: "txt",
    go: "Go",
    golo: "Golo",
    gs: "JavaScript",
    gst: "txt",
    gsx: "txt",
    vark: "txt",
    grace: "txt",
    gradle: "Gradle",
    gf: "gf",
    graphql: "txt",
    dot: "txt",
    gv: "txt",
    man: "txt",
    "1in": "txt",
    "1m": "txt",
    "1x": "txt",
    "3in": "txt",
    "3m": "txt",
    "3qt": "txt",
    "3x": "txt",
    me: "txt",
    n: "txt",
    rno: "txt",
    roff: "txt",
    groovy: "Groovy",
    grt: "Groovy",
    gtpl: "Groovy",
    gvy: "Groovy",
    gsp: "Groovy",
    hcl: "hcl",
    tf: "hcl",
    hlsl: "hlsl",
    fxh: "hlsl",
    hlsli: "hlsl",
    html: "HTML",
    htm: "HTML",
    "html.hl": "HTML",
    st: "Smalltalk",
    xht: "HTML",
    xhtml: "HTML",
    mustache: "HTML",
    jinja: "HTML",
    eex: "HTML",
    erb: "HTML",
    "erb.deface": "HTML",
    phtml: "HTML",
    http: "HTTP",
    php: "PHP",
    haml: "Haml",
    "haml.deface": "Haml",
    handlebars: "Handlebars",
    hbs: "Handlebars",
    hb: "txt",
    hs: "Haskell",
    hsc: "Haskell",
    hx: "Haxe",
    hxsl: "Haxe",
    hy: "Hy",
    pro: "txt",
    dlm: "txt",
    ipf: "txt",
    ini: "INI",
    cfg: "INI",
    prefs: "INI",
    properties: "INI",
    irclog: "txt",
    weechatlog: "txt",
    idr: "txt",
    lidr: "txt",
    ni: "inform7",
    i7x: "inform7",
    iss: "txt",
    io: "txt",
    ik: "txt",
    thy: "txt",
    ijs: "txt",
    flex: "txt",
    jflex: "txt",
    json: "JSON",
    geojson: "JSON",
    lock: "JSON",
    topojson: "JSON",
    json5: "JSON",
    jsonld: "JSON",
    jq: "JSON",
    jsx: "JSX",
    jade: "txt",
    j: "txt",
    java: "Java",
    jsp: "Java",
    js: "JavaScript",
    _js: "JavaScript",
    bones: "JavaScript",
    es6: "JavaScript",
    jake: "JavaScript",
    jsb: "JavaScript",
    jscad: "JavaScript",
    jsfl: "JavaScript",
    jsm: "JavaScript",
    jss: "JavaScript",
    njs: "JavaScript",
    pac: "JavaScript",
    sjs: "JavaScript",
    ssjs: "JavaScript",
    "sublime-build": "JavaScript",
    "sublime-commands": "JavaScript",
    "sublime-completions": "JavaScript",
    "sublime-keymap": "JavaScript",
    "sublime-macro": "JavaScript",
    "sublime-menu": "JavaScript",
    "sublime-mousemap": "JavaScript",
    "sublime-project": "JavaScript",
    "sublime-settings": "JavaScript",
    "sublime-theme": "JavaScript",
    "sublime-workspace": "JavaScript",
    sublime_metrics: "JavaScript",
    sublime_session: "JavaScript",
    xsjs: "JavaScript",
    xsjslib: "JavaScript",
    jl: "Julia",
    ipynb: "python",
    krl: "txt",
    kicad_pcb: "txt",
    kit: "txt",
    kt: "Kotlin",
    ktm: "Kotlin",
    kts: "Kotlin",
    lfe: "txt",
    ll: "txt",
    lol: "txt",
    lsl: "txt",
    lslp: "txt",
    lvproj: "txt",
    lasso: "Lasso",
    las: "Lasso",
    lasso8: "Lasso",
    lasso9: "Lasso",
    ldml: "Lasso",
    latte: "txt",
    lean: "Lean",
    hlean: "Lean",
    less: "Less",
    lex: "txt",
    ly: "txt",
    ily: "txt",
    m: "objectivec",
    ld: "txt",
    lds: "txt",
    liquid: "txt",
    lagda: "txt",
    litcoffee: "CoffeeScript",
    lhs: "Haskell",
    ls: "txt",
    _ls: "LiveScript",
    xm: "txt",
    x: "txt",
    xi: "txt",
    lgt: "txt",
    logtalk: "txt",
    lookml: "txt",
    lua: "Lua",
    fcgi: "Shell",
    nse: "Lua",
    pd_lua: "Lua",
    rbxs: "Lua",
    wlua: "Lua",
    mumps: "txt",
    m4: "txt",
    mcr: "txt",
    mtml: "txt",
    muf: "txt",
    mak: "Makefile",
    mk: "Makefile",
    mkfile: "Makefile",
    mako: "txt",
    mao: "txt",
    md: "Markdown",
    markdown: "Markdown",
    mkd: "Markdown",
    mkdn: "Markdown",
    mkdown: "Markdown",
    ron: "Markdown",
    mask: "txt",
    mathematica: "Mathematica",
    cdf: "Mathematica",
    ma: "Mathematica",
    mt: "Mathematica",
    nb: "txt",
    nbp: "Mathematica",
    wl: "Mathematica",
    wlt: "Mathematica",
    matlab: "Matlab",
    maxpat: "txt",
    maxhelp: "txt",
    maxproj: "txt",
    mxt: "txt",
    pat: "txt",
    mediawiki: "txt",
    wiki: "txt",
    moo: "txt",
    metal: "txt",
    minid: "txt",
    druby: "txt",
    duby: "txt",
    mir: "txt",
    mirah: "txt",
    mo: "txt",
    mms: "txt",
    mmk: "txt",
    monkey: "Monkey",
    moon: "MoonScript",
    myt: "txt",
    ncl: "txt",
    nl: "Lisp",
    nsi: "NSIS",
    nsh: "NSIS",
    axs: "txt",
    axi: "txt",
    "axs.erb": "txt",
    "axi.erb": "txt",
    nlogo: "txt",
    nginxconf: "Nginx",
    nim: "Nimrod",
    nimrod: "Nimrod",
    ninja: "txt",
    nit: "txt",
    nix: "Nix",
    nu: "txt",
    numpy: "python",
    numpyw: "python",
    numsc: "python",
    ml: "OCaml",
    eliom: "OCaml",
    eliomi: "OCaml",
    ml4: "OCaml",
    mli: "OCaml",
    mll: "OCaml",
    mly: "OCaml",
    objdump: "txt",
    mm: "objectivec",
    sj: "txt",
    omgrofl: "txt",
    opa: "txt",
    opal: "txt",
    opencl: "txt",
    p: "txt",
    scad: "OpenSCAD",
    org: "txt",
    ox: "txt",
    oxh: "txt",
    oxo: "txt",
    oxygene: "Oxygene",
    oz: "txt",
    pwn: "txt",
    aw: "PHP",
    ctp: "PHP",
    php3: "PHP",
    php4: "PHP",
    php5: "PHP",
    phps: "PHP",
    phpt: "PHP",
    pls: "SQL",
    pck: "SQL",
    pkb: "SQL",
    pks: "SQL",
    plb: "SQL",
    plsql: "SQL",
    sql: "SQL",
    pov: "txt",
    pan: "txt",
    psc: "Papyrus",
    parrot: "txt",
    pasm: "txt",
    pir: "txt",
    pas: "Pascal",
    dfm: "Pascal",
    dpr: "Pascal",
    lpr: "Pascal",
    pp: "Puppet",
    pl: "Prolog",
    al: "Perl",
    cgi: "Shell",
    perl: "Perl",
    ph: "Perl",
    plx: "Perl",
    pm: "perl",
    pod: "podspec",
    psgi: "Perl",
    t: "txt",
    "6pl": "perl",
    "6pm": "perl",
    nqp: "perl",
    p6: "perl",
    p6l: "perl",
    p6m: "perl",
    pl6: "perl",
    pm6: "perl",
    pkl: "txt",
    pig: "txt",
    pike: "txt",
    pmod: "txt",
    pogo: "txt",
    pony: "Pony",
    ps: "txt",
    eps: "txt",
    ps1: "PowerShell",
    psd1: "PowerShell",
    psm1: "PowerShell",
    pde: "Processing",
    prolog: "Prolog",
    yap: "Prolog",
    spin: "txt",
    proto: "protobuf",
    pub: "txt",
    pd: "txt",
    pb: "txt",
    pbi: "txt",
    purs: "txt",
    py: "Python",
    bzl: "Python",
    gyp: "Python",
    lmi: "Python",
    pyde: "Python",
    pyp: "Python",
    pyt: "Python",
    pyw: "Python",
    rpy: "Ren'Py",
    tac: "Python",
    wsgi: "Python",
    xpy: "Python",
    pytb: "Python",
    qml: "QML",
    qbs: "QML",
    pri: "txt",
    r: "Rebol",
    rd: "R",
    rsx: "R",
    raml: "txt",
    rdoc: "txt",
    rbbas: "txt",
    rbfrm: "txt",
    rbmnu: "txt",
    rbres: "txt",
    rbtbar: "txt",
    rbuistate: "txt",
    rhtml: "txt",
    rmd: "txt",
    rkt: "txt",
    rktd: "txt",
    rktl: "txt",
    scrbl: "txt",
    rl: "txt",
    raw: "txt",
    reb: "Rebol",
    r2: "Rebol",
    r3: "Rebol",
    rebol: "Rebol",
    red: "Red",
    reds: "Red",
    cw: "txt",
    rs: "Rust",
    rsh: "txt",
    robot: "txt",
    rg: "txt",
    rb: "Ruby",
    builder: "Ruby",
    gemspec: "Ruby",
    god: "Ruby",
    irbrc: "Ruby",
    jbuilder: "Ruby",
    mspec: "Ruby",
    pluginspec: "XML",
    podspec: "Ruby",
    rabl: "Ruby",
    rake: "Ruby",
    rbuild: "Ruby",
    rbw: "Ruby",
    rbx: "Ruby",
    ru: "Ruby",
    ruby: "Ruby",
    thor: "Ruby",
    watchr: "Ruby",
    "rs.in": "Rust",
    sas: "SAS",
    scss: "SCSS",
    smt2: "txt",
    smt: "txt",
    sparql: "txt",
    rq: "txt",
    sqf: "txt",
    hqf: "txt",
    cql: "SQL",
    ddl: "SQL",
    prc: "SQL",
    tab: "SQL",
    udf: "SQL",
    viw: "SQL",
    db2: "txt",
    ston: "txt",
    svg: "SVG",
    sage: "txt",
    sagews: "txt",
    sls: "Scheme",
    sass: "Sass",
    scala: "Scala",
    sbt: "Scala",
    sc: "SuperCollider",
    scaml: "txt",
    scm: "Scheme",
    sld: "Scheme",
    sps: "Scheme",
    ss: "Scheme",
    sci: "Scilab",
    sce: "Scilab",
    self: "txt",
    sh: "Shell",
    bash: "Shell",
    bats: "Shell",
    command: "Shell",
    ksh: "Shell",
    "sh.in": "Shell",
    tmux: "Shell",
    tool: "Shell",
    zsh: "Shell",
    "sh-session": "Shell",
    shen: "txt",
    sl: "txt",
    slim: "txt",
    smali: "Smali",
    tpl: "txt",
    sp: "txt",
    sma: "txt",
    nut: "txt",
    stan: "Stan",
    ML: "sml",
    fun: "sml",
    sig: "sml",
    sml: "sml",
    do: "Stata",
    ado: "Stata",
    doh: "Stata",
    ihlp: "Stata",
    mata: "Stata",
    matah: "Stata",
    sthlp: "Stata",
    styl: "Stylus",
    scd: "txt",
    swift: "Swift",
    sv: "txt",
    svh: "txt",
    vh: "txt",
    toml: "TOML",
    txl: "txt",
    tcl: "Tcl",
    adp: "Tcl",
    tm: "Tcl",
    tcsh: "txt",
    csh: "txt",
    tex: "TeX",
    aux: "TeX",
    bbx: "TeX",
    bib: "TeX",
    cbx: "TeX",
    dtx: "TeX",
    ins: "TeX",
    lbx: "TeX",
    ltx: "TeX",
    mkii: "TeX",
    mkiv: "TeX",
    mkvi: "TeX",
    sty: "TeX",
    toc: "TeX",
    tea: "Tea",
    txt: "txt",
    no: "txt",
    textile: "txt",
    thrift: "Thrift",
    tu: "txt",
    ttl: "txt",
    twig: "Twig",
    tsx: "typescript",
    ts: "typescript",
    upc: "txt",
    anim: "txt",
    asset: "txt",
    mat: "txt",
    meta: "txt",
    prefab: "txt",
    unity: "txt",
    uno: "txt",
    uc: "txt",
    ur: "txt",
    urs: "txt",
    vcl: "txt",
    vhdl: "VHDL",
    vhd: "VHDL",
    vhf: "VHDL",
    vhi: "VHDL",
    vho: "VHDL",
    vhs: "VHDL",
    vht: "VHDL",
    vhw: "VHDL",
    vala: "Vala",
    vapi: "Vala",
    veo: "Verilog",
    vim: "txt",
    vb: "basic",
    bas: "basic",
    frm: "basic",
    frx: "basic",
    vba: "basic",
    vbhtml: "basic",
    vbs: "basic",
    volt: "txt",
    vue: "txt",
    owl: "txt",
    webidl: "txt",
    x10: "txt",
    xc: "txt",
    xml: "XML",
    ant: "XML",
    axml: "XML",
    ccxml: "XML",
    clixml: "XML",
    cproject: "XML",
    csl: "XML",
    csproj: "XML",
    ct: "XML",
    dita: "XML",
    ditamap: "XML",
    ditaval: "XML",
    "dll.config": "XML",
    dotsettings: "XML",
    filters: "XML",
    fsproj: "XML",
    fxml: "XML",
    glade: "XML",
    grxml: "XML",
    iml: "XML",
    ivy: "XML",
    jelly: "XML",
    jsproj: "XML",
    kml: "XML",
    launch: "XML",
    mdpolicy: "XML",
    mxml: "XML",
    nproj: "XML",
    nuspec: "XML",
    odd: "XML",
    osm: "XML",
    plist: "XML",
    props: "XML",
    ps1xml: "XML",
    psc1: "XML",
    pt: "XML",
    rdf: "XML",
    rss: "XML",
    scxml: "XML",
    srdf: "XML",
    atom: "xml",
    storyboard: "XML",
    stTheme: "XML",
    "sublime-snippet": "XML",
    targets: "XML",
    tmCommand: "XML",
    tml: "XML",
    tmLanguage: "XML",
    tmPreferences: "XML",
    tmSnippet: "XML",
    tmTheme: "XML",
    ui: "XML",
    urdf: "XML",
    ux: "XML",
    vbproj: "XML",
    vcxproj: "XML",
    vssettings: "XML",
    vxml: "XML",
    wsdl: "XML",
    wsf: "XML",
    wxi: "XML",
    wxl: "XML",
    wxs: "XML",
    x3d: "XML",
    xacro: "XML",
    xaml: "XML",
    xib: "XML",
    xlf: "XML",
    xliff: "XML",
    xmi: "XML",
    "xml.dist": "XML",
    xproj: "XML",
    xsd: "XML",
    xul: "XML",
    zcml: "XML",
    "xsp-config": "txt",
    "xsp.metadata": "txt",
    xpl: "txt",
    xproc: "txt",
    xquery: "XQuery",
    xq: "XQuery",
    xql: "XQuery",
    xqm: "XQuery",
    xqy: "XQuery",
    xs: "XS",
    xslt: "txt",
    xsl: "xml",
    xojo_code: "txt",
    xojo_menu: "txt",
    xojo_report: "txt",
    xojo_script: "txt",
    xojo_toolbar: "txt",
    xojo_window: "txt",
    xtend: "txt",
    yml: "YAML",
    reek: "YAML",
    rviz: "YAML",
    "sublime-syntax": "YAML",
    syntax: "YAML",
    yaml: "YAML",
    "yaml-tmlanguage": "YAML",
    yang: "txt",
    y: "txt",
    yacc: "txt",
    yy: "txt",
    zep: "Zephir",
    zimpl: "txt",
    zmpl: "txt",
    zpl: "txt",
    desktop: "txt",
    "desktop.in": "txt",
    ec: "txt",
    eh: "txt",
    edn: "txt",
    fish: "txt",
    mu: "txt",
    nc: "txt",
    ooc: "txt",
    rst: "txt",
    rest: "txt",
    "rest.txt": "txt",
    "rst.txt": "txt",
    wisp: "txt",
    prg: "txt",
    prw: "txt",
  };

  export function languageFromExtension(extension: string) {
    return EXT_TO_LANGUAGE[extension];
  }
