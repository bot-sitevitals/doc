/*!
 * @quasar/quasar-ui-qmarkdown v1.4.4
 * (c) 2022 Jeff Galbraith <jeff@quasar.dev>
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue'), require('quasar')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue', 'quasar'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.QMarkdown = {}, global.Vue, global.Quasar));
})(this, (function (exports, Vue, quasar) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Vue__default = /*#__PURE__*/_interopDefaultLegacy(Vue);

  var version = "1.4.4";

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function getAugmentedNamespace(n) {
  	if (n.__esModule) return n;
  	var a = Object.defineProperty({}, '__esModule', {value: true});
  	Object.keys(n).forEach(function (k) {
  		var d = Object.getOwnPropertyDescriptor(n, k);
  		Object.defineProperty(a, k, d.get ? d : {
  			enumerable: true,
  			get: function () {
  				return n[k];
  			}
  		});
  	});
  	return a;
  }

  var utils$1 = {};

  var Aacute = "Á";
  var aacute = "á";
  var Abreve = "Ă";
  var abreve = "ă";
  var ac = "∾";
  var acd = "∿";
  var acE = "∾̳";
  var Acirc = "Â";
  var acirc = "â";
  var acute = "´";
  var Acy = "А";
  var acy = "а";
  var AElig = "Æ";
  var aelig = "æ";
  var af = "⁡";
  var Afr = "𝔄";
  var afr = "𝔞";
  var Agrave = "À";
  var agrave = "à";
  var alefsym = "ℵ";
  var aleph = "ℵ";
  var Alpha = "Α";
  var alpha = "α";
  var Amacr = "Ā";
  var amacr = "ā";
  var amalg = "⨿";
  var amp = "&";
  var AMP = "&";
  var andand = "⩕";
  var And = "⩓";
  var and = "∧";
  var andd = "⩜";
  var andslope = "⩘";
  var andv = "⩚";
  var ang = "∠";
  var ange = "⦤";
  var angle = "∠";
  var angmsdaa = "⦨";
  var angmsdab = "⦩";
  var angmsdac = "⦪";
  var angmsdad = "⦫";
  var angmsdae = "⦬";
  var angmsdaf = "⦭";
  var angmsdag = "⦮";
  var angmsdah = "⦯";
  var angmsd = "∡";
  var angrt = "∟";
  var angrtvb = "⊾";
  var angrtvbd = "⦝";
  var angsph = "∢";
  var angst = "Å";
  var angzarr = "⍼";
  var Aogon = "Ą";
  var aogon = "ą";
  var Aopf = "𝔸";
  var aopf = "𝕒";
  var apacir = "⩯";
  var ap = "≈";
  var apE = "⩰";
  var ape = "≊";
  var apid = "≋";
  var apos = "'";
  var ApplyFunction = "⁡";
  var approx = "≈";
  var approxeq = "≊";
  var Aring = "Å";
  var aring = "å";
  var Ascr = "𝒜";
  var ascr = "𝒶";
  var Assign = "≔";
  var ast = "*";
  var asymp = "≈";
  var asympeq = "≍";
  var Atilde = "Ã";
  var atilde = "ã";
  var Auml = "Ä";
  var auml = "ä";
  var awconint = "∳";
  var awint = "⨑";
  var backcong = "≌";
  var backepsilon = "϶";
  var backprime = "‵";
  var backsim = "∽";
  var backsimeq = "⋍";
  var Backslash = "∖";
  var Barv = "⫧";
  var barvee = "⊽";
  var barwed = "⌅";
  var Barwed = "⌆";
  var barwedge = "⌅";
  var bbrk = "⎵";
  var bbrktbrk = "⎶";
  var bcong = "≌";
  var Bcy = "Б";
  var bcy = "б";
  var bdquo = "„";
  var becaus = "∵";
  var because = "∵";
  var Because = "∵";
  var bemptyv = "⦰";
  var bepsi = "϶";
  var bernou = "ℬ";
  var Bernoullis = "ℬ";
  var Beta = "Β";
  var beta = "β";
  var beth = "ℶ";
  var between = "≬";
  var Bfr = "𝔅";
  var bfr = "𝔟";
  var bigcap = "⋂";
  var bigcirc = "◯";
  var bigcup = "⋃";
  var bigodot = "⨀";
  var bigoplus = "⨁";
  var bigotimes = "⨂";
  var bigsqcup = "⨆";
  var bigstar = "★";
  var bigtriangledown = "▽";
  var bigtriangleup = "△";
  var biguplus = "⨄";
  var bigvee = "⋁";
  var bigwedge = "⋀";
  var bkarow = "⤍";
  var blacklozenge = "⧫";
  var blacksquare = "▪";
  var blacktriangle = "▴";
  var blacktriangledown = "▾";
  var blacktriangleleft = "◂";
  var blacktriangleright = "▸";
  var blank = "␣";
  var blk12 = "▒";
  var blk14 = "░";
  var blk34 = "▓";
  var block$1 = "█";
  var bne = "=⃥";
  var bnequiv = "≡⃥";
  var bNot = "⫭";
  var bnot = "⌐";
  var Bopf = "𝔹";
  var bopf = "𝕓";
  var bot = "⊥";
  var bottom = "⊥";
  var bowtie = "⋈";
  var boxbox = "⧉";
  var boxdl = "┐";
  var boxdL = "╕";
  var boxDl = "╖";
  var boxDL = "╗";
  var boxdr = "┌";
  var boxdR = "╒";
  var boxDr = "╓";
  var boxDR = "╔";
  var boxh = "─";
  var boxH = "═";
  var boxhd = "┬";
  var boxHd = "╤";
  var boxhD = "╥";
  var boxHD = "╦";
  var boxhu = "┴";
  var boxHu = "╧";
  var boxhU = "╨";
  var boxHU = "╩";
  var boxminus = "⊟";
  var boxplus = "⊞";
  var boxtimes = "⊠";
  var boxul = "┘";
  var boxuL = "╛";
  var boxUl = "╜";
  var boxUL = "╝";
  var boxur = "└";
  var boxuR = "╘";
  var boxUr = "╙";
  var boxUR = "╚";
  var boxv = "│";
  var boxV = "║";
  var boxvh = "┼";
  var boxvH = "╪";
  var boxVh = "╫";
  var boxVH = "╬";
  var boxvl = "┤";
  var boxvL = "╡";
  var boxVl = "╢";
  var boxVL = "╣";
  var boxvr = "├";
  var boxvR = "╞";
  var boxVr = "╟";
  var boxVR = "╠";
  var bprime = "‵";
  var breve = "˘";
  var Breve = "˘";
  var brvbar = "¦";
  var bscr = "𝒷";
  var Bscr = "ℬ";
  var bsemi = "⁏";
  var bsim = "∽";
  var bsime = "⋍";
  var bsolb = "⧅";
  var bsol = "\\";
  var bsolhsub = "⟈";
  var bull = "•";
  var bullet = "•";
  var bump = "≎";
  var bumpE = "⪮";
  var bumpe = "≏";
  var Bumpeq = "≎";
  var bumpeq = "≏";
  var Cacute = "Ć";
  var cacute = "ć";
  var capand = "⩄";
  var capbrcup = "⩉";
  var capcap = "⩋";
  var cap = "∩";
  var Cap = "⋒";
  var capcup = "⩇";
  var capdot = "⩀";
  var CapitalDifferentialD = "ⅅ";
  var caps = "∩︀";
  var caret = "⁁";
  var caron = "ˇ";
  var Cayleys = "ℭ";
  var ccaps = "⩍";
  var Ccaron = "Č";
  var ccaron = "č";
  var Ccedil = "Ç";
  var ccedil = "ç";
  var Ccirc = "Ĉ";
  var ccirc = "ĉ";
  var Cconint = "∰";
  var ccups = "⩌";
  var ccupssm = "⩐";
  var Cdot = "Ċ";
  var cdot = "ċ";
  var cedil = "¸";
  var Cedilla = "¸";
  var cemptyv = "⦲";
  var cent = "¢";
  var centerdot = "·";
  var CenterDot = "·";
  var cfr = "𝔠";
  var Cfr = "ℭ";
  var CHcy = "Ч";
  var chcy = "ч";
  var check = "✓";
  var checkmark = "✓";
  var Chi = "Χ";
  var chi = "χ";
  var circ = "ˆ";
  var circeq = "≗";
  var circlearrowleft = "↺";
  var circlearrowright = "↻";
  var circledast = "⊛";
  var circledcirc = "⊚";
  var circleddash = "⊝";
  var CircleDot = "⊙";
  var circledR = "®";
  var circledS = "Ⓢ";
  var CircleMinus = "⊖";
  var CirclePlus = "⊕";
  var CircleTimes = "⊗";
  var cir = "○";
  var cirE = "⧃";
  var cire = "≗";
  var cirfnint = "⨐";
  var cirmid = "⫯";
  var cirscir = "⧂";
  var ClockwiseContourIntegral = "∲";
  var CloseCurlyDoubleQuote = "”";
  var CloseCurlyQuote = "’";
  var clubs$1 = "♣";
  var clubsuit = "♣";
  var colon = ":";
  var Colon = "∷";
  var Colone = "⩴";
  var colone = "≔";
  var coloneq = "≔";
  var comma = ",";
  var commat = "@";
  var comp = "∁";
  var compfn = "∘";
  var complement = "∁";
  var complexes = "ℂ";
  var cong = "≅";
  var congdot = "⩭";
  var Congruent = "≡";
  var conint = "∮";
  var Conint = "∯";
  var ContourIntegral = "∮";
  var copf = "𝕔";
  var Copf = "ℂ";
  var coprod = "∐";
  var Coproduct = "∐";
  var copy = "©";
  var COPY = "©";
  var copysr = "℗";
  var CounterClockwiseContourIntegral = "∳";
  var crarr = "↵";
  var cross = "✗";
  var Cross = "⨯";
  var Cscr = "𝒞";
  var cscr = "𝒸";
  var csub = "⫏";
  var csube = "⫑";
  var csup = "⫐";
  var csupe = "⫒";
  var ctdot = "⋯";
  var cudarrl = "⤸";
  var cudarrr = "⤵";
  var cuepr = "⋞";
  var cuesc = "⋟";
  var cularr = "↶";
  var cularrp = "⤽";
  var cupbrcap = "⩈";
  var cupcap = "⩆";
  var CupCap = "≍";
  var cup = "∪";
  var Cup = "⋓";
  var cupcup = "⩊";
  var cupdot = "⊍";
  var cupor = "⩅";
  var cups = "∪︀";
  var curarr = "↷";
  var curarrm = "⤼";
  var curlyeqprec = "⋞";
  var curlyeqsucc = "⋟";
  var curlyvee = "⋎";
  var curlywedge = "⋏";
  var curren = "¤";
  var curvearrowleft = "↶";
  var curvearrowright = "↷";
  var cuvee = "⋎";
  var cuwed = "⋏";
  var cwconint = "∲";
  var cwint = "∱";
  var cylcty = "⌭";
  var dagger$1 = "†";
  var Dagger = "‡";
  var daleth = "ℸ";
  var darr = "↓";
  var Darr = "↡";
  var dArr = "⇓";
  var dash$1 = "‐";
  var Dashv = "⫤";
  var dashv = "⊣";
  var dbkarow = "⤏";
  var dblac = "˝";
  var Dcaron = "Ď";
  var dcaron = "ď";
  var Dcy = "Д";
  var dcy = "д";
  var ddagger = "‡";
  var ddarr = "⇊";
  var DD = "ⅅ";
  var dd = "ⅆ";
  var DDotrahd = "⤑";
  var ddotseq = "⩷";
  var deg = "°";
  var Del = "∇";
  var Delta = "Δ";
  var delta = "δ";
  var demptyv = "⦱";
  var dfisht = "⥿";
  var Dfr = "𝔇";
  var dfr = "𝔡";
  var dHar = "⥥";
  var dharl = "⇃";
  var dharr = "⇂";
  var DiacriticalAcute = "´";
  var DiacriticalDot = "˙";
  var DiacriticalDoubleAcute = "˝";
  var DiacriticalGrave = "`";
  var DiacriticalTilde = "˜";
  var diam = "⋄";
  var diamond = "⋄";
  var Diamond = "⋄";
  var diamondsuit = "♦";
  var diams = "♦";
  var die = "¨";
  var DifferentialD = "ⅆ";
  var digamma = "ϝ";
  var disin = "⋲";
  var div = "÷";
  var divide = "÷";
  var divideontimes = "⋇";
  var divonx = "⋇";
  var DJcy = "Ђ";
  var djcy = "ђ";
  var dlcorn = "⌞";
  var dlcrop = "⌍";
  var dollar$1 = "$";
  var Dopf = "𝔻";
  var dopf = "𝕕";
  var Dot = "¨";
  var dot = "˙";
  var DotDot = "⃜";
  var doteq = "≐";
  var doteqdot = "≑";
  var DotEqual = "≐";
  var dotminus = "∸";
  var dotplus = "∔";
  var dotsquare = "⊡";
  var doublebarwedge = "⌆";
  var DoubleContourIntegral = "∯";
  var DoubleDot = "¨";
  var DoubleDownArrow = "⇓";
  var DoubleLeftArrow = "⇐";
  var DoubleLeftRightArrow = "⇔";
  var DoubleLeftTee = "⫤";
  var DoubleLongLeftArrow = "⟸";
  var DoubleLongLeftRightArrow = "⟺";
  var DoubleLongRightArrow = "⟹";
  var DoubleRightArrow = "⇒";
  var DoubleRightTee = "⊨";
  var DoubleUpArrow = "⇑";
  var DoubleUpDownArrow = "⇕";
  var DoubleVerticalBar = "∥";
  var DownArrowBar = "⤓";
  var downarrow = "↓";
  var DownArrow = "↓";
  var Downarrow = "⇓";
  var DownArrowUpArrow = "⇵";
  var DownBreve = "̑";
  var downdownarrows = "⇊";
  var downharpoonleft = "⇃";
  var downharpoonright = "⇂";
  var DownLeftRightVector = "⥐";
  var DownLeftTeeVector = "⥞";
  var DownLeftVectorBar = "⥖";
  var DownLeftVector = "↽";
  var DownRightTeeVector = "⥟";
  var DownRightVectorBar = "⥗";
  var DownRightVector = "⇁";
  var DownTeeArrow = "↧";
  var DownTee = "⊤";
  var drbkarow = "⤐";
  var drcorn = "⌟";
  var drcrop = "⌌";
  var Dscr = "𝒟";
  var dscr = "𝒹";
  var DScy = "Ѕ";
  var dscy = "ѕ";
  var dsol = "⧶";
  var Dstrok = "Đ";
  var dstrok = "đ";
  var dtdot = "⋱";
  var dtri = "▿";
  var dtrif = "▾";
  var duarr = "⇵";
  var duhar = "⥯";
  var dwangle = "⦦";
  var DZcy = "Џ";
  var dzcy = "џ";
  var dzigrarr = "⟿";
  var Eacute = "É";
  var eacute = "é";
  var easter = "⩮";
  var Ecaron = "Ě";
  var ecaron = "ě";
  var Ecirc = "Ê";
  var ecirc = "ê";
  var ecir = "≖";
  var ecolon = "≕";
  var Ecy = "Э";
  var ecy = "э";
  var eDDot = "⩷";
  var Edot = "Ė";
  var edot = "ė";
  var eDot = "≑";
  var ee = "ⅇ";
  var efDot = "≒";
  var Efr = "𝔈";
  var efr = "𝔢";
  var eg = "⪚";
  var Egrave = "È";
  var egrave = "è";
  var egs = "⪖";
  var egsdot = "⪘";
  var el = "⪙";
  var Element$1 = "∈";
  var elinters = "⏧";
  var ell = "ℓ";
  var els = "⪕";
  var elsdot = "⪗";
  var Emacr = "Ē";
  var emacr = "ē";
  var empty = "∅";
  var emptyset = "∅";
  var EmptySmallSquare = "◻";
  var emptyv = "∅";
  var EmptyVerySmallSquare = "▫";
  var emsp13 = " ";
  var emsp14 = " ";
  var emsp = " ";
  var ENG = "Ŋ";
  var eng = "ŋ";
  var ensp = " ";
  var Eogon = "Ę";
  var eogon = "ę";
  var Eopf = "𝔼";
  var eopf = "𝕖";
  var epar = "⋕";
  var eparsl = "⧣";
  var eplus = "⩱";
  var epsi = "ε";
  var Epsilon = "Ε";
  var epsilon = "ε";
  var epsiv = "ϵ";
  var eqcirc = "≖";
  var eqcolon = "≕";
  var eqsim = "≂";
  var eqslantgtr = "⪖";
  var eqslantless = "⪕";
  var Equal = "⩵";
  var equals = "=";
  var EqualTilde = "≂";
  var equest = "≟";
  var Equilibrium = "⇌";
  var equiv = "≡";
  var equivDD = "⩸";
  var eqvparsl = "⧥";
  var erarr = "⥱";
  var erDot = "≓";
  var escr = "ℯ";
  var Escr = "ℰ";
  var esdot = "≐";
  var Esim = "⩳";
  var esim = "≂";
  var Eta = "Η";
  var eta = "η";
  var ETH = "Ð";
  var eth = "ð";
  var Euml = "Ë";
  var euml = "ë";
  var euro$1 = "€";
  var excl = "!";
  var exist = "∃";
  var Exists = "∃";
  var expectation = "ℰ";
  var exponentiale = "ⅇ";
  var ExponentialE = "ⅇ";
  var fallingdotseq = "≒";
  var Fcy = "Ф";
  var fcy = "ф";
  var female = "♀";
  var ffilig = "ﬃ";
  var fflig = "ﬀ";
  var ffllig = "ﬄ";
  var Ffr = "𝔉";
  var ffr = "𝔣";
  var filig = "ﬁ";
  var FilledSmallSquare = "◼";
  var FilledVerySmallSquare = "▪";
  var fjlig = "fj";
  var flat = "♭";
  var fllig = "ﬂ";
  var fltns = "▱";
  var fnof = "ƒ";
  var Fopf = "𝔽";
  var fopf = "𝕗";
  var forall = "∀";
  var ForAll = "∀";
  var fork = "⋔";
  var forkv = "⫙";
  var Fouriertrf = "ℱ";
  var fpartint = "⨍";
  var frac12 = "½";
  var frac13 = "⅓";
  var frac14 = "¼";
  var frac15 = "⅕";
  var frac16 = "⅙";
  var frac18 = "⅛";
  var frac23 = "⅔";
  var frac25 = "⅖";
  var frac34 = "¾";
  var frac35 = "⅗";
  var frac38 = "⅜";
  var frac45 = "⅘";
  var frac56 = "⅚";
  var frac58 = "⅝";
  var frac78 = "⅞";
  var frasl = "⁄";
  var frown = "⌢";
  var fscr = "𝒻";
  var Fscr = "ℱ";
  var gacute = "ǵ";
  var Gamma = "Γ";
  var gamma = "γ";
  var Gammad = "Ϝ";
  var gammad = "ϝ";
  var gap = "⪆";
  var Gbreve = "Ğ";
  var gbreve = "ğ";
  var Gcedil = "Ģ";
  var Gcirc = "Ĝ";
  var gcirc = "ĝ";
  var Gcy = "Г";
  var gcy = "г";
  var Gdot = "Ġ";
  var gdot = "ġ";
  var ge = "≥";
  var gE = "≧";
  var gEl = "⪌";
  var gel = "⋛";
  var geq = "≥";
  var geqq = "≧";
  var geqslant = "⩾";
  var gescc = "⪩";
  var ges = "⩾";
  var gesdot = "⪀";
  var gesdoto = "⪂";
  var gesdotol = "⪄";
  var gesl = "⋛︀";
  var gesles = "⪔";
  var Gfr = "𝔊";
  var gfr = "𝔤";
  var gg = "≫";
  var Gg = "⋙";
  var ggg = "⋙";
  var gimel = "ℷ";
  var GJcy = "Ѓ";
  var gjcy = "ѓ";
  var gla = "⪥";
  var gl = "≷";
  var glE = "⪒";
  var glj = "⪤";
  var gnap = "⪊";
  var gnapprox = "⪊";
  var gne = "⪈";
  var gnE = "≩";
  var gneq = "⪈";
  var gneqq = "≩";
  var gnsim = "⋧";
  var Gopf = "𝔾";
  var gopf = "𝕘";
  var grave = "`";
  var GreaterEqual = "≥";
  var GreaterEqualLess = "⋛";
  var GreaterFullEqual = "≧";
  var GreaterGreater = "⪢";
  var GreaterLess = "≷";
  var GreaterSlantEqual = "⩾";
  var GreaterTilde = "≳";
  var Gscr = "𝒢";
  var gscr = "ℊ";
  var gsim = "≳";
  var gsime = "⪎";
  var gsiml = "⪐";
  var gtcc = "⪧";
  var gtcir = "⩺";
  var gt = ">";
  var GT = ">";
  var Gt = "≫";
  var gtdot = "⋗";
  var gtlPar = "⦕";
  var gtquest = "⩼";
  var gtrapprox = "⪆";
  var gtrarr = "⥸";
  var gtrdot = "⋗";
  var gtreqless = "⋛";
  var gtreqqless = "⪌";
  var gtrless = "≷";
  var gtrsim = "≳";
  var gvertneqq = "≩︀";
  var gvnE = "≩︀";
  var Hacek = "ˇ";
  var hairsp = " ";
  var half = "½";
  var hamilt = "ℋ";
  var HARDcy = "Ъ";
  var hardcy = "ъ";
  var harrcir = "⥈";
  var harr = "↔";
  var hArr = "⇔";
  var harrw = "↭";
  var Hat = "^";
  var hbar = "ℏ";
  var Hcirc = "Ĥ";
  var hcirc = "ĥ";
  var hearts$1 = "♥";
  var heartsuit = "♥";
  var hellip = "…";
  var hercon = "⊹";
  var hfr = "𝔥";
  var Hfr = "ℌ";
  var HilbertSpace = "ℋ";
  var hksearow = "⤥";
  var hkswarow = "⤦";
  var hoarr = "⇿";
  var homtht = "∻";
  var hookleftarrow = "↩";
  var hookrightarrow = "↪";
  var hopf = "𝕙";
  var Hopf = "ℍ";
  var horbar = "―";
  var HorizontalLine = "─";
  var hscr = "𝒽";
  var Hscr = "ℋ";
  var hslash = "ℏ";
  var Hstrok = "Ħ";
  var hstrok = "ħ";
  var HumpDownHump = "≎";
  var HumpEqual = "≏";
  var hybull = "⁃";
  var hyphen = "‐";
  var Iacute = "Í";
  var iacute = "í";
  var ic = "⁣";
  var Icirc = "Î";
  var icirc = "î";
  var Icy = "И";
  var icy = "и";
  var Idot = "İ";
  var IEcy = "Е";
  var iecy = "е";
  var iexcl = "¡";
  var iff = "⇔";
  var ifr = "𝔦";
  var Ifr = "ℑ";
  var Igrave = "Ì";
  var igrave = "ì";
  var ii = "ⅈ";
  var iiiint = "⨌";
  var iiint = "∭";
  var iinfin = "⧜";
  var iiota = "℩";
  var IJlig = "Ĳ";
  var ijlig = "ĳ";
  var Imacr = "Ī";
  var imacr = "ī";
  var image$1 = "ℑ";
  var ImaginaryI = "ⅈ";
  var imagline = "ℐ";
  var imagpart = "ℑ";
  var imath = "ı";
  var Im = "ℑ";
  var imof = "⊷";
  var imped = "Ƶ";
  var Implies = "⇒";
  var incare = "℅";
  var infin = "∞";
  var infintie = "⧝";
  var inodot = "ı";
  var intcal = "⊺";
  var int = "∫";
  var Int = "∬";
  var integers = "ℤ";
  var Integral = "∫";
  var intercal = "⊺";
  var Intersection = "⋂";
  var intlarhk = "⨗";
  var intprod = "⨼";
  var InvisibleComma = "⁣";
  var InvisibleTimes = "⁢";
  var IOcy = "Ё";
  var iocy = "ё";
  var Iogon = "Į";
  var iogon = "į";
  var Iopf = "𝕀";
  var iopf = "𝕚";
  var Iota = "Ι";
  var iota = "ι";
  var iprod = "⨼";
  var iquest = "¿";
  var iscr = "𝒾";
  var Iscr = "ℐ";
  var isin = "∈";
  var isindot = "⋵";
  var isinE = "⋹";
  var isins = "⋴";
  var isinsv = "⋳";
  var isinv = "∈";
  var it$1 = "⁢";
  var Itilde = "Ĩ";
  var itilde = "ĩ";
  var Iukcy = "І";
  var iukcy = "і";
  var Iuml = "Ï";
  var iuml = "ï";
  var Jcirc = "Ĵ";
  var jcirc = "ĵ";
  var Jcy = "Й";
  var jcy = "й";
  var Jfr = "𝔍";
  var jfr = "𝔧";
  var jmath = "ȷ";
  var Jopf = "𝕁";
  var jopf = "𝕛";
  var Jscr = "𝒥";
  var jscr = "𝒿";
  var Jsercy = "Ј";
  var jsercy = "ј";
  var Jukcy = "Є";
  var jukcy = "є";
  var Kappa = "Κ";
  var kappa = "κ";
  var kappav = "ϰ";
  var Kcedil = "Ķ";
  var kcedil = "ķ";
  var Kcy = "К";
  var kcy = "к";
  var Kfr = "𝔎";
  var kfr = "𝔨";
  var kgreen = "ĸ";
  var KHcy = "Х";
  var khcy = "х";
  var KJcy = "Ќ";
  var kjcy = "ќ";
  var Kopf = "𝕂";
  var kopf = "𝕜";
  var Kscr = "𝒦";
  var kscr = "𝓀";
  var lAarr = "⇚";
  var Lacute = "Ĺ";
  var lacute = "ĺ";
  var laemptyv = "⦴";
  var lagran = "ℒ";
  var Lambda = "Λ";
  var lambda = "λ";
  var lang = "⟨";
  var Lang = "⟪";
  var langd = "⦑";
  var langle = "⟨";
  var lap = "⪅";
  var Laplacetrf = "ℒ";
  var laquo = "«";
  var larrb = "⇤";
  var larrbfs = "⤟";
  var larr = "←";
  var Larr = "↞";
  var lArr = "⇐";
  var larrfs = "⤝";
  var larrhk = "↩";
  var larrlp = "↫";
  var larrpl = "⤹";
  var larrsim = "⥳";
  var larrtl = "↢";
  var latail = "⤙";
  var lAtail = "⤛";
  var lat = "⪫";
  var late = "⪭";
  var lates = "⪭︀";
  var lbarr = "⤌";
  var lBarr = "⤎";
  var lbbrk = "❲";
  var lbrace = "{";
  var lbrack = "[";
  var lbrke = "⦋";
  var lbrksld = "⦏";
  var lbrkslu = "⦍";
  var Lcaron = "Ľ";
  var lcaron = "ľ";
  var Lcedil = "Ļ";
  var lcedil = "ļ";
  var lceil = "⌈";
  var lcub = "{";
  var Lcy = "Л";
  var lcy = "л";
  var ldca = "⤶";
  var ldquo = "“";
  var ldquor = "„";
  var ldrdhar = "⥧";
  var ldrushar = "⥋";
  var ldsh = "↲";
  var le = "≤";
  var lE = "≦";
  var LeftAngleBracket = "⟨";
  var LeftArrowBar = "⇤";
  var leftarrow = "←";
  var LeftArrow = "←";
  var Leftarrow = "⇐";
  var LeftArrowRightArrow = "⇆";
  var leftarrowtail = "↢";
  var LeftCeiling = "⌈";
  var LeftDoubleBracket = "⟦";
  var LeftDownTeeVector = "⥡";
  var LeftDownVectorBar = "⥙";
  var LeftDownVector = "⇃";
  var LeftFloor = "⌊";
  var leftharpoondown = "↽";
  var leftharpoonup = "↼";
  var leftleftarrows = "⇇";
  var leftrightarrow = "↔";
  var LeftRightArrow = "↔";
  var Leftrightarrow = "⇔";
  var leftrightarrows = "⇆";
  var leftrightharpoons = "⇋";
  var leftrightsquigarrow = "↭";
  var LeftRightVector = "⥎";
  var LeftTeeArrow = "↤";
  var LeftTee = "⊣";
  var LeftTeeVector = "⥚";
  var leftthreetimes = "⋋";
  var LeftTriangleBar = "⧏";
  var LeftTriangle = "⊲";
  var LeftTriangleEqual = "⊴";
  var LeftUpDownVector = "⥑";
  var LeftUpTeeVector = "⥠";
  var LeftUpVectorBar = "⥘";
  var LeftUpVector = "↿";
  var LeftVectorBar = "⥒";
  var LeftVector = "↼";
  var lEg = "⪋";
  var leg$1 = "⋚";
  var leq = "≤";
  var leqq = "≦";
  var leqslant = "⩽";
  var lescc = "⪨";
  var les = "⩽";
  var lesdot = "⩿";
  var lesdoto = "⪁";
  var lesdotor = "⪃";
  var lesg = "⋚︀";
  var lesges = "⪓";
  var lessapprox = "⪅";
  var lessdot = "⋖";
  var lesseqgtr = "⋚";
  var lesseqqgtr = "⪋";
  var LessEqualGreater = "⋚";
  var LessFullEqual = "≦";
  var LessGreater = "≶";
  var lessgtr = "≶";
  var LessLess = "⪡";
  var lesssim = "≲";
  var LessSlantEqual = "⩽";
  var LessTilde = "≲";
  var lfisht = "⥼";
  var lfloor = "⌊";
  var Lfr = "𝔏";
  var lfr = "𝔩";
  var lg = "≶";
  var lgE = "⪑";
  var lHar = "⥢";
  var lhard = "↽";
  var lharu = "↼";
  var lharul = "⥪";
  var lhblk = "▄";
  var LJcy = "Љ";
  var ljcy = "љ";
  var llarr = "⇇";
  var ll = "≪";
  var Ll = "⋘";
  var llcorner = "⌞";
  var Lleftarrow = "⇚";
  var llhard = "⥫";
  var lltri = "◺";
  var Lmidot = "Ŀ";
  var lmidot = "ŀ";
  var lmoustache = "⎰";
  var lmoust = "⎰";
  var lnap = "⪉";
  var lnapprox = "⪉";
  var lne = "⪇";
  var lnE = "≨";
  var lneq = "⪇";
  var lneqq = "≨";
  var lnsim = "⋦";
  var loang = "⟬";
  var loarr = "⇽";
  var lobrk = "⟦";
  var longleftarrow = "⟵";
  var LongLeftArrow = "⟵";
  var Longleftarrow = "⟸";
  var longleftrightarrow = "⟷";
  var LongLeftRightArrow = "⟷";
  var Longleftrightarrow = "⟺";
  var longmapsto = "⟼";
  var longrightarrow = "⟶";
  var LongRightArrow = "⟶";
  var Longrightarrow = "⟹";
  var looparrowleft = "↫";
  var looparrowright = "↬";
  var lopar = "⦅";
  var Lopf = "𝕃";
  var lopf = "𝕝";
  var loplus = "⨭";
  var lotimes = "⨴";
  var lowast = "∗";
  var lowbar = "_";
  var LowerLeftArrow = "↙";
  var LowerRightArrow = "↘";
  var loz = "◊";
  var lozenge = "◊";
  var lozf = "⧫";
  var lpar = "(";
  var lparlt = "⦓";
  var lrarr = "⇆";
  var lrcorner = "⌟";
  var lrhar = "⇋";
  var lrhard = "⥭";
  var lrm = "‎";
  var lrtri = "⊿";
  var lsaquo = "‹";
  var lscr = "𝓁";
  var Lscr = "ℒ";
  var lsh = "↰";
  var Lsh = "↰";
  var lsim = "≲";
  var lsime = "⪍";
  var lsimg = "⪏";
  var lsqb = "[";
  var lsquo = "‘";
  var lsquor = "‚";
  var Lstrok = "Ł";
  var lstrok = "ł";
  var ltcc = "⪦";
  var ltcir = "⩹";
  var lt = "<";
  var LT = "<";
  var Lt = "≪";
  var ltdot = "⋖";
  var lthree = "⋋";
  var ltimes = "⋉";
  var ltlarr = "⥶";
  var ltquest = "⩻";
  var ltri = "◃";
  var ltrie = "⊴";
  var ltrif = "◂";
  var ltrPar = "⦖";
  var lurdshar = "⥊";
  var luruhar = "⥦";
  var lvertneqq = "≨︀";
  var lvnE = "≨︀";
  var macr = "¯";
  var male = "♂";
  var malt = "✠";
  var maltese = "✠";
  var map$1 = "↦";
  var mapsto = "↦";
  var mapstodown = "↧";
  var mapstoleft = "↤";
  var mapstoup = "↥";
  var marker = "▮";
  var mcomma = "⨩";
  var Mcy = "М";
  var mcy = "м";
  var mdash = "—";
  var mDDot = "∺";
  var measuredangle = "∡";
  var MediumSpace = " ";
  var Mellintrf = "ℳ";
  var Mfr = "𝔐";
  var mfr = "𝔪";
  var mho = "℧";
  var micro = "µ";
  var midast = "*";
  var midcir = "⫰";
  var mid = "∣";
  var middot = "·";
  var minusb = "⊟";
  var minus = "−";
  var minusd = "∸";
  var minusdu = "⨪";
  var MinusPlus = "∓";
  var mlcp = "⫛";
  var mldr = "…";
  var mnplus = "∓";
  var models = "⊧";
  var Mopf = "𝕄";
  var mopf = "𝕞";
  var mp = "∓";
  var mscr = "𝓂";
  var Mscr = "ℳ";
  var mstpos = "∾";
  var Mu = "Μ";
  var mu = "μ";
  var multimap = "⊸";
  var mumap = "⊸";
  var nabla = "∇";
  var Nacute = "Ń";
  var nacute = "ń";
  var nang = "∠⃒";
  var nap = "≉";
  var napE = "⩰̸";
  var napid = "≋̸";
  var napos = "ŉ";
  var napprox = "≉";
  var natural = "♮";
  var naturals = "ℕ";
  var natur = "♮";
  var nbsp = " ";
  var nbump = "≎̸";
  var nbumpe = "≏̸";
  var ncap = "⩃";
  var Ncaron = "Ň";
  var ncaron = "ň";
  var Ncedil = "Ņ";
  var ncedil = "ņ";
  var ncong = "≇";
  var ncongdot = "⩭̸";
  var ncup = "⩂";
  var Ncy = "Н";
  var ncy = "н";
  var ndash = "–";
  var nearhk = "⤤";
  var nearr = "↗";
  var neArr = "⇗";
  var nearrow = "↗";
  var ne = "≠";
  var nedot = "≐̸";
  var NegativeMediumSpace = "​";
  var NegativeThickSpace = "​";
  var NegativeThinSpace = "​";
  var NegativeVeryThinSpace = "​";
  var nequiv = "≢";
  var nesear = "⤨";
  var nesim = "≂̸";
  var NestedGreaterGreater = "≫";
  var NestedLessLess = "≪";
  var NewLine = "\n";
  var nexist = "∄";
  var nexists = "∄";
  var Nfr = "𝔑";
  var nfr = "𝔫";
  var ngE = "≧̸";
  var nge = "≱";
  var ngeq = "≱";
  var ngeqq = "≧̸";
  var ngeqslant = "⩾̸";
  var nges = "⩾̸";
  var nGg = "⋙̸";
  var ngsim = "≵";
  var nGt = "≫⃒";
  var ngt = "≯";
  var ngtr = "≯";
  var nGtv = "≫̸";
  var nharr = "↮";
  var nhArr = "⇎";
  var nhpar = "⫲";
  var ni = "∋";
  var nis = "⋼";
  var nisd = "⋺";
  var niv = "∋";
  var NJcy = "Њ";
  var njcy = "њ";
  var nlarr = "↚";
  var nlArr = "⇍";
  var nldr = "‥";
  var nlE = "≦̸";
  var nle = "≰";
  var nleftarrow = "↚";
  var nLeftarrow = "⇍";
  var nleftrightarrow = "↮";
  var nLeftrightarrow = "⇎";
  var nleq = "≰";
  var nleqq = "≦̸";
  var nleqslant = "⩽̸";
  var nles = "⩽̸";
  var nless = "≮";
  var nLl = "⋘̸";
  var nlsim = "≴";
  var nLt = "≪⃒";
  var nlt = "≮";
  var nltri = "⋪";
  var nltrie = "⋬";
  var nLtv = "≪̸";
  var nmid = "∤";
  var NoBreak = "⁠";
  var NonBreakingSpace = " ";
  var nopf = "𝕟";
  var Nopf = "ℕ";
  var Not = "⫬";
  var not = "¬";
  var NotCongruent = "≢";
  var NotCupCap = "≭";
  var NotDoubleVerticalBar = "∦";
  var NotElement = "∉";
  var NotEqual = "≠";
  var NotEqualTilde = "≂̸";
  var NotExists = "∄";
  var NotGreater = "≯";
  var NotGreaterEqual = "≱";
  var NotGreaterFullEqual = "≧̸";
  var NotGreaterGreater = "≫̸";
  var NotGreaterLess = "≹";
  var NotGreaterSlantEqual = "⩾̸";
  var NotGreaterTilde = "≵";
  var NotHumpDownHump = "≎̸";
  var NotHumpEqual = "≏̸";
  var notin = "∉";
  var notindot = "⋵̸";
  var notinE = "⋹̸";
  var notinva = "∉";
  var notinvb = "⋷";
  var notinvc = "⋶";
  var NotLeftTriangleBar = "⧏̸";
  var NotLeftTriangle = "⋪";
  var NotLeftTriangleEqual = "⋬";
  var NotLess = "≮";
  var NotLessEqual = "≰";
  var NotLessGreater = "≸";
  var NotLessLess = "≪̸";
  var NotLessSlantEqual = "⩽̸";
  var NotLessTilde = "≴";
  var NotNestedGreaterGreater = "⪢̸";
  var NotNestedLessLess = "⪡̸";
  var notni = "∌";
  var notniva = "∌";
  var notnivb = "⋾";
  var notnivc = "⋽";
  var NotPrecedes = "⊀";
  var NotPrecedesEqual = "⪯̸";
  var NotPrecedesSlantEqual = "⋠";
  var NotReverseElement = "∌";
  var NotRightTriangleBar = "⧐̸";
  var NotRightTriangle = "⋫";
  var NotRightTriangleEqual = "⋭";
  var NotSquareSubset = "⊏̸";
  var NotSquareSubsetEqual = "⋢";
  var NotSquareSuperset = "⊐̸";
  var NotSquareSupersetEqual = "⋣";
  var NotSubset = "⊂⃒";
  var NotSubsetEqual = "⊈";
  var NotSucceeds = "⊁";
  var NotSucceedsEqual = "⪰̸";
  var NotSucceedsSlantEqual = "⋡";
  var NotSucceedsTilde = "≿̸";
  var NotSuperset = "⊃⃒";
  var NotSupersetEqual = "⊉";
  var NotTilde = "≁";
  var NotTildeEqual = "≄";
  var NotTildeFullEqual = "≇";
  var NotTildeTilde = "≉";
  var NotVerticalBar = "∤";
  var nparallel = "∦";
  var npar = "∦";
  var nparsl = "⫽⃥";
  var npart = "∂̸";
  var npolint = "⨔";
  var npr = "⊀";
  var nprcue = "⋠";
  var nprec = "⊀";
  var npreceq = "⪯̸";
  var npre = "⪯̸";
  var nrarrc = "⤳̸";
  var nrarr = "↛";
  var nrArr = "⇏";
  var nrarrw = "↝̸";
  var nrightarrow = "↛";
  var nRightarrow = "⇏";
  var nrtri = "⋫";
  var nrtrie = "⋭";
  var nsc = "⊁";
  var nsccue = "⋡";
  var nsce = "⪰̸";
  var Nscr = "𝒩";
  var nscr = "𝓃";
  var nshortmid = "∤";
  var nshortparallel = "∦";
  var nsim = "≁";
  var nsime = "≄";
  var nsimeq = "≄";
  var nsmid = "∤";
  var nspar = "∦";
  var nsqsube = "⋢";
  var nsqsupe = "⋣";
  var nsub = "⊄";
  var nsubE = "⫅̸";
  var nsube = "⊈";
  var nsubset = "⊂⃒";
  var nsubseteq = "⊈";
  var nsubseteqq = "⫅̸";
  var nsucc = "⊁";
  var nsucceq = "⪰̸";
  var nsup = "⊅";
  var nsupE = "⫆̸";
  var nsupe = "⊉";
  var nsupset = "⊃⃒";
  var nsupseteq = "⊉";
  var nsupseteqq = "⫆̸";
  var ntgl = "≹";
  var Ntilde = "Ñ";
  var ntilde = "ñ";
  var ntlg = "≸";
  var ntriangleleft = "⋪";
  var ntrianglelefteq = "⋬";
  var ntriangleright = "⋫";
  var ntrianglerighteq = "⋭";
  var Nu = "Ν";
  var nu = "ν";
  var num = "#";
  var numero = "№";
  var numsp = " ";
  var nvap = "≍⃒";
  var nvdash = "⊬";
  var nvDash = "⊭";
  var nVdash = "⊮";
  var nVDash = "⊯";
  var nvge = "≥⃒";
  var nvgt = ">⃒";
  var nvHarr = "⤄";
  var nvinfin = "⧞";
  var nvlArr = "⤂";
  var nvle = "≤⃒";
  var nvlt = "<⃒";
  var nvltrie = "⊴⃒";
  var nvrArr = "⤃";
  var nvrtrie = "⊵⃒";
  var nvsim = "∼⃒";
  var nwarhk = "⤣";
  var nwarr = "↖";
  var nwArr = "⇖";
  var nwarrow = "↖";
  var nwnear = "⤧";
  var Oacute = "Ó";
  var oacute = "ó";
  var oast = "⊛";
  var Ocirc = "Ô";
  var ocirc = "ô";
  var ocir = "⊚";
  var Ocy = "О";
  var ocy = "о";
  var odash = "⊝";
  var Odblac = "Ő";
  var odblac = "ő";
  var odiv = "⨸";
  var odot = "⊙";
  var odsold = "⦼";
  var OElig = "Œ";
  var oelig = "œ";
  var ofcir = "⦿";
  var Ofr = "𝔒";
  var ofr = "𝔬";
  var ogon = "˛";
  var Ograve = "Ò";
  var ograve = "ò";
  var ogt = "⧁";
  var ohbar = "⦵";
  var ohm = "Ω";
  var oint = "∮";
  var olarr = "↺";
  var olcir = "⦾";
  var olcross = "⦻";
  var oline = "‾";
  var olt = "⧀";
  var Omacr = "Ō";
  var omacr = "ō";
  var Omega = "Ω";
  var omega = "ω";
  var Omicron = "Ο";
  var omicron = "ο";
  var omid = "⦶";
  var ominus = "⊖";
  var Oopf = "𝕆";
  var oopf = "𝕠";
  var opar = "⦷";
  var OpenCurlyDoubleQuote = "“";
  var OpenCurlyQuote = "‘";
  var operp = "⦹";
  var oplus = "⊕";
  var orarr = "↻";
  var Or = "⩔";
  var or = "∨";
  var ord = "⩝";
  var order = "ℴ";
  var orderof = "ℴ";
  var ordf = "ª";
  var ordm = "º";
  var origof = "⊶";
  var oror = "⩖";
  var orslope = "⩗";
  var orv = "⩛";
  var oS = "Ⓢ";
  var Oscr = "𝒪";
  var oscr = "ℴ";
  var Oslash = "Ø";
  var oslash = "ø";
  var osol = "⊘";
  var Otilde = "Õ";
  var otilde = "õ";
  var otimesas = "⨶";
  var Otimes = "⨷";
  var otimes = "⊗";
  var Ouml = "Ö";
  var ouml = "ö";
  var ovbar = "⌽";
  var OverBar = "‾";
  var OverBrace = "⏞";
  var OverBracket = "⎴";
  var OverParenthesis = "⏜";
  var para = "¶";
  var parallel = "∥";
  var par = "∥";
  var parsim = "⫳";
  var parsl = "⫽";
  var part = "∂";
  var PartialD = "∂";
  var Pcy = "П";
  var pcy = "п";
  var percnt = "%";
  var period = ".";
  var permil = "‰";
  var perp = "⊥";
  var pertenk = "‱";
  var Pfr = "𝔓";
  var pfr = "𝔭";
  var Phi = "Φ";
  var phi = "φ";
  var phiv = "ϕ";
  var phmmat = "ℳ";
  var phone$1 = "☎";
  var Pi = "Π";
  var pi = "π";
  var pitchfork = "⋔";
  var piv = "ϖ";
  var planck = "ℏ";
  var planckh = "ℎ";
  var plankv = "ℏ";
  var plusacir = "⨣";
  var plusb = "⊞";
  var pluscir = "⨢";
  var plus = "+";
  var plusdo = "∔";
  var plusdu = "⨥";
  var pluse = "⩲";
  var PlusMinus = "±";
  var plusmn = "±";
  var plussim = "⨦";
  var plustwo = "⨧";
  var pm = "±";
  var Poincareplane = "ℌ";
  var pointint = "⨕";
  var popf = "𝕡";
  var Popf = "ℙ";
  var pound$1 = "£";
  var prap = "⪷";
  var Pr = "⪻";
  var pr = "≺";
  var prcue = "≼";
  var precapprox = "⪷";
  var prec = "≺";
  var preccurlyeq = "≼";
  var Precedes = "≺";
  var PrecedesEqual = "⪯";
  var PrecedesSlantEqual = "≼";
  var PrecedesTilde = "≾";
  var preceq = "⪯";
  var precnapprox = "⪹";
  var precneqq = "⪵";
  var precnsim = "⋨";
  var pre = "⪯";
  var prE = "⪳";
  var precsim = "≾";
  var prime = "′";
  var Prime = "″";
  var primes = "ℙ";
  var prnap = "⪹";
  var prnE = "⪵";
  var prnsim = "⋨";
  var prod = "∏";
  var Product = "∏";
  var profalar = "⌮";
  var profline = "⌒";
  var profsurf = "⌓";
  var prop = "∝";
  var Proportional = "∝";
  var Proportion = "∷";
  var propto = "∝";
  var prsim = "≾";
  var prurel = "⊰";
  var Pscr = "𝒫";
  var pscr = "𝓅";
  var Psi = "Ψ";
  var psi = "ψ";
  var puncsp = " ";
  var Qfr = "𝔔";
  var qfr = "𝔮";
  var qint = "⨌";
  var qopf = "𝕢";
  var Qopf = "ℚ";
  var qprime = "⁗";
  var Qscr = "𝒬";
  var qscr = "𝓆";
  var quaternions = "ℍ";
  var quatint = "⨖";
  var quest = "?";
  var questeq = "≟";
  var quot = "\"";
  var QUOT = "\"";
  var rAarr = "⇛";
  var race = "∽̱";
  var Racute = "Ŕ";
  var racute = "ŕ";
  var radic = "√";
  var raemptyv = "⦳";
  var rang = "⟩";
  var Rang = "⟫";
  var rangd = "⦒";
  var range = "⦥";
  var rangle = "⟩";
  var raquo = "»";
  var rarrap = "⥵";
  var rarrb = "⇥";
  var rarrbfs = "⤠";
  var rarrc = "⤳";
  var rarr = "→";
  var Rarr = "↠";
  var rArr = "⇒";
  var rarrfs = "⤞";
  var rarrhk = "↪";
  var rarrlp = "↬";
  var rarrpl = "⥅";
  var rarrsim = "⥴";
  var Rarrtl = "⤖";
  var rarrtl = "↣";
  var rarrw = "↝";
  var ratail = "⤚";
  var rAtail = "⤜";
  var ratio = "∶";
  var rationals = "ℚ";
  var rbarr = "⤍";
  var rBarr = "⤏";
  var RBarr = "⤐";
  var rbbrk = "❳";
  var rbrace = "}";
  var rbrack = "]";
  var rbrke = "⦌";
  var rbrksld = "⦎";
  var rbrkslu = "⦐";
  var Rcaron = "Ř";
  var rcaron = "ř";
  var Rcedil = "Ŗ";
  var rcedil = "ŗ";
  var rceil = "⌉";
  var rcub = "}";
  var Rcy = "Р";
  var rcy = "р";
  var rdca = "⤷";
  var rdldhar = "⥩";
  var rdquo = "”";
  var rdquor = "”";
  var rdsh = "↳";
  var real = "ℜ";
  var realine = "ℛ";
  var realpart = "ℜ";
  var reals = "ℝ";
  var Re = "ℜ";
  var rect = "▭";
  var reg = "®";
  var REG = "®";
  var ReverseElement = "∋";
  var ReverseEquilibrium = "⇋";
  var ReverseUpEquilibrium = "⥯";
  var rfisht = "⥽";
  var rfloor = "⌋";
  var rfr = "𝔯";
  var Rfr = "ℜ";
  var rHar = "⥤";
  var rhard = "⇁";
  var rharu = "⇀";
  var rharul = "⥬";
  var Rho = "Ρ";
  var rho = "ρ";
  var rhov = "ϱ";
  var RightAngleBracket = "⟩";
  var RightArrowBar = "⇥";
  var rightarrow = "→";
  var RightArrow = "→";
  var Rightarrow = "⇒";
  var RightArrowLeftArrow = "⇄";
  var rightarrowtail = "↣";
  var RightCeiling = "⌉";
  var RightDoubleBracket = "⟧";
  var RightDownTeeVector = "⥝";
  var RightDownVectorBar = "⥕";
  var RightDownVector = "⇂";
  var RightFloor = "⌋";
  var rightharpoondown = "⇁";
  var rightharpoonup = "⇀";
  var rightleftarrows = "⇄";
  var rightleftharpoons = "⇌";
  var rightrightarrows = "⇉";
  var rightsquigarrow = "↝";
  var RightTeeArrow = "↦";
  var RightTee = "⊢";
  var RightTeeVector = "⥛";
  var rightthreetimes = "⋌";
  var RightTriangleBar = "⧐";
  var RightTriangle = "⊳";
  var RightTriangleEqual = "⊵";
  var RightUpDownVector = "⥏";
  var RightUpTeeVector = "⥜";
  var RightUpVectorBar = "⥔";
  var RightUpVector = "↾";
  var RightVectorBar = "⥓";
  var RightVector = "⇀";
  var ring$1 = "˚";
  var risingdotseq = "≓";
  var rlarr = "⇄";
  var rlhar = "⇌";
  var rlm = "‏";
  var rmoustache = "⎱";
  var rmoust = "⎱";
  var rnmid = "⫮";
  var roang = "⟭";
  var roarr = "⇾";
  var robrk = "⟧";
  var ropar = "⦆";
  var ropf = "𝕣";
  var Ropf = "ℝ";
  var roplus = "⨮";
  var rotimes = "⨵";
  var RoundImplies = "⥰";
  var rpar = ")";
  var rpargt = "⦔";
  var rppolint = "⨒";
  var rrarr = "⇉";
  var Rrightarrow = "⇛";
  var rsaquo = "›";
  var rscr = "𝓇";
  var Rscr = "ℛ";
  var rsh = "↱";
  var Rsh = "↱";
  var rsqb = "]";
  var rsquo = "’";
  var rsquor = "’";
  var rthree = "⋌";
  var rtimes = "⋊";
  var rtri = "▹";
  var rtrie = "⊵";
  var rtrif = "▸";
  var rtriltri = "⧎";
  var RuleDelayed = "⧴";
  var ruluhar = "⥨";
  var rx = "℞";
  var Sacute = "Ś";
  var sacute = "ś";
  var sbquo = "‚";
  var scap = "⪸";
  var Scaron = "Š";
  var scaron = "š";
  var Sc = "⪼";
  var sc = "≻";
  var sccue = "≽";
  var sce = "⪰";
  var scE = "⪴";
  var Scedil = "Ş";
  var scedil = "ş";
  var Scirc = "Ŝ";
  var scirc = "ŝ";
  var scnap = "⪺";
  var scnE = "⪶";
  var scnsim = "⋩";
  var scpolint = "⨓";
  var scsim = "≿";
  var Scy = "С";
  var scy = "с";
  var sdotb = "⊡";
  var sdot = "⋅";
  var sdote = "⩦";
  var searhk = "⤥";
  var searr = "↘";
  var seArr = "⇘";
  var searrow = "↘";
  var sect = "§";
  var semi = ";";
  var seswar = "⤩";
  var setminus = "∖";
  var setmn = "∖";
  var sext = "✶";
  var Sfr = "𝔖";
  var sfr = "𝔰";
  var sfrown = "⌢";
  var sharp = "♯";
  var SHCHcy = "Щ";
  var shchcy = "щ";
  var SHcy = "Ш";
  var shcy = "ш";
  var ShortDownArrow = "↓";
  var ShortLeftArrow = "←";
  var shortmid = "∣";
  var shortparallel = "∥";
  var ShortRightArrow = "→";
  var ShortUpArrow = "↑";
  var shy = "­";
  var Sigma = "Σ";
  var sigma = "σ";
  var sigmaf = "ς";
  var sigmav = "ς";
  var sim = "∼";
  var simdot = "⩪";
  var sime = "≃";
  var simeq = "≃";
  var simg = "⪞";
  var simgE = "⪠";
  var siml = "⪝";
  var simlE = "⪟";
  var simne = "≆";
  var simplus = "⨤";
  var simrarr = "⥲";
  var slarr = "←";
  var SmallCircle = "∘";
  var smallsetminus = "∖";
  var smashp = "⨳";
  var smeparsl = "⧤";
  var smid = "∣";
  var smile$1 = "⌣";
  var smt = "⪪";
  var smte = "⪬";
  var smtes = "⪬︀";
  var SOFTcy = "Ь";
  var softcy = "ь";
  var solbar = "⌿";
  var solb = "⧄";
  var sol = "/";
  var Sopf = "𝕊";
  var sopf = "𝕤";
  var spades$1 = "♠";
  var spadesuit = "♠";
  var spar = "∥";
  var sqcap = "⊓";
  var sqcaps = "⊓︀";
  var sqcup = "⊔";
  var sqcups = "⊔︀";
  var Sqrt = "√";
  var sqsub = "⊏";
  var sqsube = "⊑";
  var sqsubset = "⊏";
  var sqsubseteq = "⊑";
  var sqsup = "⊐";
  var sqsupe = "⊒";
  var sqsupset = "⊐";
  var sqsupseteq = "⊒";
  var square = "□";
  var Square = "□";
  var SquareIntersection = "⊓";
  var SquareSubset = "⊏";
  var SquareSubsetEqual = "⊑";
  var SquareSuperset = "⊐";
  var SquareSupersetEqual = "⊒";
  var SquareUnion = "⊔";
  var squarf = "▪";
  var squ = "□";
  var squf = "▪";
  var srarr = "→";
  var Sscr = "𝒮";
  var sscr = "𝓈";
  var ssetmn = "∖";
  var ssmile = "⌣";
  var sstarf = "⋆";
  var Star = "⋆";
  var star$1 = "☆";
  var starf = "★";
  var straightepsilon = "ϵ";
  var straightphi = "ϕ";
  var strns = "¯";
  var sub = "⊂";
  var Sub = "⋐";
  var subdot = "⪽";
  var subE = "⫅";
  var sube = "⊆";
  var subedot = "⫃";
  var submult = "⫁";
  var subnE = "⫋";
  var subne = "⊊";
  var subplus = "⪿";
  var subrarr = "⥹";
  var subset = "⊂";
  var Subset = "⋐";
  var subseteq = "⊆";
  var subseteqq = "⫅";
  var SubsetEqual = "⊆";
  var subsetneq = "⊊";
  var subsetneqq = "⫋";
  var subsim = "⫇";
  var subsub = "⫕";
  var subsup = "⫓";
  var succapprox = "⪸";
  var succ = "≻";
  var succcurlyeq = "≽";
  var Succeeds = "≻";
  var SucceedsEqual = "⪰";
  var SucceedsSlantEqual = "≽";
  var SucceedsTilde = "≿";
  var succeq = "⪰";
  var succnapprox = "⪺";
  var succneqq = "⪶";
  var succnsim = "⋩";
  var succsim = "≿";
  var SuchThat = "∋";
  var sum = "∑";
  var Sum = "∑";
  var sung = "♪";
  var sup1 = "¹";
  var sup2 = "²";
  var sup3 = "³";
  var sup = "⊃";
  var Sup = "⋑";
  var supdot = "⪾";
  var supdsub = "⫘";
  var supE = "⫆";
  var supe = "⊇";
  var supedot = "⫄";
  var Superset = "⊃";
  var SupersetEqual = "⊇";
  var suphsol = "⟉";
  var suphsub = "⫗";
  var suplarr = "⥻";
  var supmult = "⫂";
  var supnE = "⫌";
  var supne = "⊋";
  var supplus = "⫀";
  var supset = "⊃";
  var Supset = "⋑";
  var supseteq = "⊇";
  var supseteqq = "⫆";
  var supsetneq = "⊋";
  var supsetneqq = "⫌";
  var supsim = "⫈";
  var supsub = "⫔";
  var supsup = "⫖";
  var swarhk = "⤦";
  var swarr = "↙";
  var swArr = "⇙";
  var swarrow = "↙";
  var swnwar = "⤪";
  var szlig = "ß";
  var Tab = "\t";
  var target = "⌖";
  var Tau = "Τ";
  var tau = "τ";
  var tbrk = "⎴";
  var Tcaron = "Ť";
  var tcaron = "ť";
  var Tcedil = "Ţ";
  var tcedil = "ţ";
  var Tcy = "Т";
  var tcy = "т";
  var tdot = "⃛";
  var telrec = "⌕";
  var Tfr = "𝔗";
  var tfr = "𝔱";
  var there4 = "∴";
  var therefore = "∴";
  var Therefore = "∴";
  var Theta = "Θ";
  var theta = "θ";
  var thetasym = "ϑ";
  var thetav = "ϑ";
  var thickapprox = "≈";
  var thicksim = "∼";
  var ThickSpace = "  ";
  var ThinSpace = " ";
  var thinsp = " ";
  var thkap = "≈";
  var thksim = "∼";
  var THORN = "Þ";
  var thorn = "þ";
  var tilde = "˜";
  var Tilde = "∼";
  var TildeEqual = "≃";
  var TildeFullEqual = "≅";
  var TildeTilde = "≈";
  var timesbar = "⨱";
  var timesb = "⊠";
  var times = "×";
  var timesd = "⨰";
  var tint = "∭";
  var toea = "⤨";
  var topbot = "⌶";
  var topcir = "⫱";
  var top$1 = "⊤";
  var Topf = "𝕋";
  var topf = "𝕥";
  var topfork = "⫚";
  var tosa = "⤩";
  var tprime = "‴";
  var trade = "™";
  var TRADE = "™";
  var triangle = "▵";
  var triangledown = "▿";
  var triangleleft = "◃";
  var trianglelefteq = "⊴";
  var triangleq = "≜";
  var triangleright = "▹";
  var trianglerighteq = "⊵";
  var tridot = "◬";
  var trie = "≜";
  var triminus = "⨺";
  var TripleDot = "⃛";
  var triplus = "⨹";
  var trisb = "⧍";
  var tritime = "⨻";
  var trpezium = "⏢";
  var Tscr = "𝒯";
  var tscr = "𝓉";
  var TScy = "Ц";
  var tscy = "ц";
  var TSHcy = "Ћ";
  var tshcy = "ћ";
  var Tstrok = "Ŧ";
  var tstrok = "ŧ";
  var twixt = "≬";
  var twoheadleftarrow = "↞";
  var twoheadrightarrow = "↠";
  var Uacute = "Ú";
  var uacute = "ú";
  var uarr = "↑";
  var Uarr = "↟";
  var uArr = "⇑";
  var Uarrocir = "⥉";
  var Ubrcy = "Ў";
  var ubrcy = "ў";
  var Ubreve = "Ŭ";
  var ubreve = "ŭ";
  var Ucirc = "Û";
  var ucirc = "û";
  var Ucy = "У";
  var ucy = "у";
  var udarr = "⇅";
  var Udblac = "Ű";
  var udblac = "ű";
  var udhar = "⥮";
  var ufisht = "⥾";
  var Ufr = "𝔘";
  var ufr = "𝔲";
  var Ugrave = "Ù";
  var ugrave = "ù";
  var uHar = "⥣";
  var uharl = "↿";
  var uharr = "↾";
  var uhblk = "▀";
  var ulcorn = "⌜";
  var ulcorner = "⌜";
  var ulcrop = "⌏";
  var ultri = "◸";
  var Umacr = "Ū";
  var umacr = "ū";
  var uml = "¨";
  var UnderBar = "_";
  var UnderBrace = "⏟";
  var UnderBracket = "⎵";
  var UnderParenthesis = "⏝";
  var Union = "⋃";
  var UnionPlus = "⊎";
  var Uogon = "Ų";
  var uogon = "ų";
  var Uopf = "𝕌";
  var uopf = "𝕦";
  var UpArrowBar = "⤒";
  var uparrow = "↑";
  var UpArrow = "↑";
  var Uparrow = "⇑";
  var UpArrowDownArrow = "⇅";
  var updownarrow = "↕";
  var UpDownArrow = "↕";
  var Updownarrow = "⇕";
  var UpEquilibrium = "⥮";
  var upharpoonleft = "↿";
  var upharpoonright = "↾";
  var uplus = "⊎";
  var UpperLeftArrow = "↖";
  var UpperRightArrow = "↗";
  var upsi = "υ";
  var Upsi = "ϒ";
  var upsih = "ϒ";
  var Upsilon = "Υ";
  var upsilon = "υ";
  var UpTeeArrow = "↥";
  var UpTee = "⊥";
  var upuparrows = "⇈";
  var urcorn = "⌝";
  var urcorner = "⌝";
  var urcrop = "⌎";
  var Uring = "Ů";
  var uring = "ů";
  var urtri = "◹";
  var Uscr = "𝒰";
  var uscr = "𝓊";
  var utdot = "⋰";
  var Utilde = "Ũ";
  var utilde = "ũ";
  var utri = "▵";
  var utrif = "▴";
  var uuarr = "⇈";
  var Uuml = "Ü";
  var uuml = "ü";
  var uwangle = "⦧";
  var vangrt = "⦜";
  var varepsilon = "ϵ";
  var varkappa = "ϰ";
  var varnothing = "∅";
  var varphi = "ϕ";
  var varpi = "ϖ";
  var varpropto = "∝";
  var varr = "↕";
  var vArr = "⇕";
  var varrho = "ϱ";
  var varsigma = "ς";
  var varsubsetneq = "⊊︀";
  var varsubsetneqq = "⫋︀";
  var varsupsetneq = "⊋︀";
  var varsupsetneqq = "⫌︀";
  var vartheta = "ϑ";
  var vartriangleleft = "⊲";
  var vartriangleright = "⊳";
  var vBar = "⫨";
  var Vbar = "⫫";
  var vBarv = "⫩";
  var Vcy = "В";
  var vcy = "в";
  var vdash = "⊢";
  var vDash = "⊨";
  var Vdash = "⊩";
  var VDash = "⊫";
  var Vdashl = "⫦";
  var veebar = "⊻";
  var vee = "∨";
  var Vee = "⋁";
  var veeeq = "≚";
  var vellip = "⋮";
  var verbar = "|";
  var Verbar = "‖";
  var vert = "|";
  var Vert = "‖";
  var VerticalBar = "∣";
  var VerticalLine = "|";
  var VerticalSeparator = "❘";
  var VerticalTilde = "≀";
  var VeryThinSpace = " ";
  var Vfr = "𝔙";
  var vfr = "𝔳";
  var vltri = "⊲";
  var vnsub = "⊂⃒";
  var vnsup = "⊃⃒";
  var Vopf = "𝕍";
  var vopf = "𝕧";
  var vprop = "∝";
  var vrtri = "⊳";
  var Vscr = "𝒱";
  var vscr = "𝓋";
  var vsubnE = "⫋︀";
  var vsubne = "⊊︀";
  var vsupnE = "⫌︀";
  var vsupne = "⊋︀";
  var Vvdash = "⊪";
  var vzigzag = "⦚";
  var Wcirc = "Ŵ";
  var wcirc = "ŵ";
  var wedbar = "⩟";
  var wedge = "∧";
  var Wedge = "⋀";
  var wedgeq = "≙";
  var weierp = "℘";
  var Wfr = "𝔚";
  var wfr = "𝔴";
  var Wopf = "𝕎";
  var wopf = "𝕨";
  var wp = "℘";
  var wr = "≀";
  var wreath = "≀";
  var Wscr = "𝒲";
  var wscr = "𝓌";
  var xcap = "⋂";
  var xcirc = "◯";
  var xcup = "⋃";
  var xdtri = "▽";
  var Xfr = "𝔛";
  var xfr = "𝔵";
  var xharr = "⟷";
  var xhArr = "⟺";
  var Xi = "Ξ";
  var xi = "ξ";
  var xlarr = "⟵";
  var xlArr = "⟸";
  var xmap = "⟼";
  var xnis = "⋻";
  var xodot = "⨀";
  var Xopf = "𝕏";
  var xopf = "𝕩";
  var xoplus = "⨁";
  var xotime = "⨂";
  var xrarr = "⟶";
  var xrArr = "⟹";
  var Xscr = "𝒳";
  var xscr = "𝓍";
  var xsqcup = "⨆";
  var xuplus = "⨄";
  var xutri = "△";
  var xvee = "⋁";
  var xwedge = "⋀";
  var Yacute = "Ý";
  var yacute = "ý";
  var YAcy = "Я";
  var yacy = "я";
  var Ycirc = "Ŷ";
  var ycirc = "ŷ";
  var Ycy = "Ы";
  var ycy = "ы";
  var yen$1 = "¥";
  var Yfr = "𝔜";
  var yfr = "𝔶";
  var YIcy = "Ї";
  var yicy = "ї";
  var Yopf = "𝕐";
  var yopf = "𝕪";
  var Yscr = "𝒴";
  var yscr = "𝓎";
  var YUcy = "Ю";
  var yucy = "ю";
  var yuml = "ÿ";
  var Yuml = "Ÿ";
  var Zacute = "Ź";
  var zacute = "ź";
  var Zcaron = "Ž";
  var zcaron = "ž";
  var Zcy = "З";
  var zcy = "з";
  var Zdot = "Ż";
  var zdot = "ż";
  var zeetrf = "ℨ";
  var ZeroWidthSpace = "​";
  var Zeta = "Ζ";
  var zeta = "ζ";
  var zfr = "𝔷";
  var Zfr = "ℨ";
  var ZHcy = "Ж";
  var zhcy = "ж";
  var zigrarr = "⇝";
  var zopf = "𝕫";
  var Zopf = "ℤ";
  var Zscr = "𝒵";
  var zscr = "𝓏";
  var zwj = "‍";
  var zwnj = "‌";
  var require$$0$1 = {
  	Aacute: Aacute,
  	aacute: aacute,
  	Abreve: Abreve,
  	abreve: abreve,
  	ac: ac,
  	acd: acd,
  	acE: acE,
  	Acirc: Acirc,
  	acirc: acirc,
  	acute: acute,
  	Acy: Acy,
  	acy: acy,
  	AElig: AElig,
  	aelig: aelig,
  	af: af,
  	Afr: Afr,
  	afr: afr,
  	Agrave: Agrave,
  	agrave: agrave,
  	alefsym: alefsym,
  	aleph: aleph,
  	Alpha: Alpha,
  	alpha: alpha,
  	Amacr: Amacr,
  	amacr: amacr,
  	amalg: amalg,
  	amp: amp,
  	AMP: AMP,
  	andand: andand,
  	And: And,
  	and: and,
  	andd: andd,
  	andslope: andslope,
  	andv: andv,
  	ang: ang,
  	ange: ange,
  	angle: angle,
  	angmsdaa: angmsdaa,
  	angmsdab: angmsdab,
  	angmsdac: angmsdac,
  	angmsdad: angmsdad,
  	angmsdae: angmsdae,
  	angmsdaf: angmsdaf,
  	angmsdag: angmsdag,
  	angmsdah: angmsdah,
  	angmsd: angmsd,
  	angrt: angrt,
  	angrtvb: angrtvb,
  	angrtvbd: angrtvbd,
  	angsph: angsph,
  	angst: angst,
  	angzarr: angzarr,
  	Aogon: Aogon,
  	aogon: aogon,
  	Aopf: Aopf,
  	aopf: aopf,
  	apacir: apacir,
  	ap: ap,
  	apE: apE,
  	ape: ape,
  	apid: apid,
  	apos: apos,
  	ApplyFunction: ApplyFunction,
  	approx: approx,
  	approxeq: approxeq,
  	Aring: Aring,
  	aring: aring,
  	Ascr: Ascr,
  	ascr: ascr,
  	Assign: Assign,
  	ast: ast,
  	asymp: asymp,
  	asympeq: asympeq,
  	Atilde: Atilde,
  	atilde: atilde,
  	Auml: Auml,
  	auml: auml,
  	awconint: awconint,
  	awint: awint,
  	backcong: backcong,
  	backepsilon: backepsilon,
  	backprime: backprime,
  	backsim: backsim,
  	backsimeq: backsimeq,
  	Backslash: Backslash,
  	Barv: Barv,
  	barvee: barvee,
  	barwed: barwed,
  	Barwed: Barwed,
  	barwedge: barwedge,
  	bbrk: bbrk,
  	bbrktbrk: bbrktbrk,
  	bcong: bcong,
  	Bcy: Bcy,
  	bcy: bcy,
  	bdquo: bdquo,
  	becaus: becaus,
  	because: because,
  	Because: Because,
  	bemptyv: bemptyv,
  	bepsi: bepsi,
  	bernou: bernou,
  	Bernoullis: Bernoullis,
  	Beta: Beta,
  	beta: beta,
  	beth: beth,
  	between: between,
  	Bfr: Bfr,
  	bfr: bfr,
  	bigcap: bigcap,
  	bigcirc: bigcirc,
  	bigcup: bigcup,
  	bigodot: bigodot,
  	bigoplus: bigoplus,
  	bigotimes: bigotimes,
  	bigsqcup: bigsqcup,
  	bigstar: bigstar,
  	bigtriangledown: bigtriangledown,
  	bigtriangleup: bigtriangleup,
  	biguplus: biguplus,
  	bigvee: bigvee,
  	bigwedge: bigwedge,
  	bkarow: bkarow,
  	blacklozenge: blacklozenge,
  	blacksquare: blacksquare,
  	blacktriangle: blacktriangle,
  	blacktriangledown: blacktriangledown,
  	blacktriangleleft: blacktriangleleft,
  	blacktriangleright: blacktriangleright,
  	blank: blank,
  	blk12: blk12,
  	blk14: blk14,
  	blk34: blk34,
  	block: block$1,
  	bne: bne,
  	bnequiv: bnequiv,
  	bNot: bNot,
  	bnot: bnot,
  	Bopf: Bopf,
  	bopf: bopf,
  	bot: bot,
  	bottom: bottom,
  	bowtie: bowtie,
  	boxbox: boxbox,
  	boxdl: boxdl,
  	boxdL: boxdL,
  	boxDl: boxDl,
  	boxDL: boxDL,
  	boxdr: boxdr,
  	boxdR: boxdR,
  	boxDr: boxDr,
  	boxDR: boxDR,
  	boxh: boxh,
  	boxH: boxH,
  	boxhd: boxhd,
  	boxHd: boxHd,
  	boxhD: boxhD,
  	boxHD: boxHD,
  	boxhu: boxhu,
  	boxHu: boxHu,
  	boxhU: boxhU,
  	boxHU: boxHU,
  	boxminus: boxminus,
  	boxplus: boxplus,
  	boxtimes: boxtimes,
  	boxul: boxul,
  	boxuL: boxuL,
  	boxUl: boxUl,
  	boxUL: boxUL,
  	boxur: boxur,
  	boxuR: boxuR,
  	boxUr: boxUr,
  	boxUR: boxUR,
  	boxv: boxv,
  	boxV: boxV,
  	boxvh: boxvh,
  	boxvH: boxvH,
  	boxVh: boxVh,
  	boxVH: boxVH,
  	boxvl: boxvl,
  	boxvL: boxvL,
  	boxVl: boxVl,
  	boxVL: boxVL,
  	boxvr: boxvr,
  	boxvR: boxvR,
  	boxVr: boxVr,
  	boxVR: boxVR,
  	bprime: bprime,
  	breve: breve,
  	Breve: Breve,
  	brvbar: brvbar,
  	bscr: bscr,
  	Bscr: Bscr,
  	bsemi: bsemi,
  	bsim: bsim,
  	bsime: bsime,
  	bsolb: bsolb,
  	bsol: bsol,
  	bsolhsub: bsolhsub,
  	bull: bull,
  	bullet: bullet,
  	bump: bump,
  	bumpE: bumpE,
  	bumpe: bumpe,
  	Bumpeq: Bumpeq,
  	bumpeq: bumpeq,
  	Cacute: Cacute,
  	cacute: cacute,
  	capand: capand,
  	capbrcup: capbrcup,
  	capcap: capcap,
  	cap: cap,
  	Cap: Cap,
  	capcup: capcup,
  	capdot: capdot,
  	CapitalDifferentialD: CapitalDifferentialD,
  	caps: caps,
  	caret: caret,
  	caron: caron,
  	Cayleys: Cayleys,
  	ccaps: ccaps,
  	Ccaron: Ccaron,
  	ccaron: ccaron,
  	Ccedil: Ccedil,
  	ccedil: ccedil,
  	Ccirc: Ccirc,
  	ccirc: ccirc,
  	Cconint: Cconint,
  	ccups: ccups,
  	ccupssm: ccupssm,
  	Cdot: Cdot,
  	cdot: cdot,
  	cedil: cedil,
  	Cedilla: Cedilla,
  	cemptyv: cemptyv,
  	cent: cent,
  	centerdot: centerdot,
  	CenterDot: CenterDot,
  	cfr: cfr,
  	Cfr: Cfr,
  	CHcy: CHcy,
  	chcy: chcy,
  	check: check,
  	checkmark: checkmark,
  	Chi: Chi,
  	chi: chi,
  	circ: circ,
  	circeq: circeq,
  	circlearrowleft: circlearrowleft,
  	circlearrowright: circlearrowright,
  	circledast: circledast,
  	circledcirc: circledcirc,
  	circleddash: circleddash,
  	CircleDot: CircleDot,
  	circledR: circledR,
  	circledS: circledS,
  	CircleMinus: CircleMinus,
  	CirclePlus: CirclePlus,
  	CircleTimes: CircleTimes,
  	cir: cir,
  	cirE: cirE,
  	cire: cire,
  	cirfnint: cirfnint,
  	cirmid: cirmid,
  	cirscir: cirscir,
  	ClockwiseContourIntegral: ClockwiseContourIntegral,
  	CloseCurlyDoubleQuote: CloseCurlyDoubleQuote,
  	CloseCurlyQuote: CloseCurlyQuote,
  	clubs: clubs$1,
  	clubsuit: clubsuit,
  	colon: colon,
  	Colon: Colon,
  	Colone: Colone,
  	colone: colone,
  	coloneq: coloneq,
  	comma: comma,
  	commat: commat,
  	comp: comp,
  	compfn: compfn,
  	complement: complement,
  	complexes: complexes,
  	cong: cong,
  	congdot: congdot,
  	Congruent: Congruent,
  	conint: conint,
  	Conint: Conint,
  	ContourIntegral: ContourIntegral,
  	copf: copf,
  	Copf: Copf,
  	coprod: coprod,
  	Coproduct: Coproduct,
  	copy: copy,
  	COPY: COPY,
  	copysr: copysr,
  	CounterClockwiseContourIntegral: CounterClockwiseContourIntegral,
  	crarr: crarr,
  	cross: cross,
  	Cross: Cross,
  	Cscr: Cscr,
  	cscr: cscr,
  	csub: csub,
  	csube: csube,
  	csup: csup,
  	csupe: csupe,
  	ctdot: ctdot,
  	cudarrl: cudarrl,
  	cudarrr: cudarrr,
  	cuepr: cuepr,
  	cuesc: cuesc,
  	cularr: cularr,
  	cularrp: cularrp,
  	cupbrcap: cupbrcap,
  	cupcap: cupcap,
  	CupCap: CupCap,
  	cup: cup,
  	Cup: Cup,
  	cupcup: cupcup,
  	cupdot: cupdot,
  	cupor: cupor,
  	cups: cups,
  	curarr: curarr,
  	curarrm: curarrm,
  	curlyeqprec: curlyeqprec,
  	curlyeqsucc: curlyeqsucc,
  	curlyvee: curlyvee,
  	curlywedge: curlywedge,
  	curren: curren,
  	curvearrowleft: curvearrowleft,
  	curvearrowright: curvearrowright,
  	cuvee: cuvee,
  	cuwed: cuwed,
  	cwconint: cwconint,
  	cwint: cwint,
  	cylcty: cylcty,
  	dagger: dagger$1,
  	Dagger: Dagger,
  	daleth: daleth,
  	darr: darr,
  	Darr: Darr,
  	dArr: dArr,
  	dash: dash$1,
  	Dashv: Dashv,
  	dashv: dashv,
  	dbkarow: dbkarow,
  	dblac: dblac,
  	Dcaron: Dcaron,
  	dcaron: dcaron,
  	Dcy: Dcy,
  	dcy: dcy,
  	ddagger: ddagger,
  	ddarr: ddarr,
  	DD: DD,
  	dd: dd,
  	DDotrahd: DDotrahd,
  	ddotseq: ddotseq,
  	deg: deg,
  	Del: Del,
  	Delta: Delta,
  	delta: delta,
  	demptyv: demptyv,
  	dfisht: dfisht,
  	Dfr: Dfr,
  	dfr: dfr,
  	dHar: dHar,
  	dharl: dharl,
  	dharr: dharr,
  	DiacriticalAcute: DiacriticalAcute,
  	DiacriticalDot: DiacriticalDot,
  	DiacriticalDoubleAcute: DiacriticalDoubleAcute,
  	DiacriticalGrave: DiacriticalGrave,
  	DiacriticalTilde: DiacriticalTilde,
  	diam: diam,
  	diamond: diamond,
  	Diamond: Diamond,
  	diamondsuit: diamondsuit,
  	diams: diams,
  	die: die,
  	DifferentialD: DifferentialD,
  	digamma: digamma,
  	disin: disin,
  	div: div,
  	divide: divide,
  	divideontimes: divideontimes,
  	divonx: divonx,
  	DJcy: DJcy,
  	djcy: djcy,
  	dlcorn: dlcorn,
  	dlcrop: dlcrop,
  	dollar: dollar$1,
  	Dopf: Dopf,
  	dopf: dopf,
  	Dot: Dot,
  	dot: dot,
  	DotDot: DotDot,
  	doteq: doteq,
  	doteqdot: doteqdot,
  	DotEqual: DotEqual,
  	dotminus: dotminus,
  	dotplus: dotplus,
  	dotsquare: dotsquare,
  	doublebarwedge: doublebarwedge,
  	DoubleContourIntegral: DoubleContourIntegral,
  	DoubleDot: DoubleDot,
  	DoubleDownArrow: DoubleDownArrow,
  	DoubleLeftArrow: DoubleLeftArrow,
  	DoubleLeftRightArrow: DoubleLeftRightArrow,
  	DoubleLeftTee: DoubleLeftTee,
  	DoubleLongLeftArrow: DoubleLongLeftArrow,
  	DoubleLongLeftRightArrow: DoubleLongLeftRightArrow,
  	DoubleLongRightArrow: DoubleLongRightArrow,
  	DoubleRightArrow: DoubleRightArrow,
  	DoubleRightTee: DoubleRightTee,
  	DoubleUpArrow: DoubleUpArrow,
  	DoubleUpDownArrow: DoubleUpDownArrow,
  	DoubleVerticalBar: DoubleVerticalBar,
  	DownArrowBar: DownArrowBar,
  	downarrow: downarrow,
  	DownArrow: DownArrow,
  	Downarrow: Downarrow,
  	DownArrowUpArrow: DownArrowUpArrow,
  	DownBreve: DownBreve,
  	downdownarrows: downdownarrows,
  	downharpoonleft: downharpoonleft,
  	downharpoonright: downharpoonright,
  	DownLeftRightVector: DownLeftRightVector,
  	DownLeftTeeVector: DownLeftTeeVector,
  	DownLeftVectorBar: DownLeftVectorBar,
  	DownLeftVector: DownLeftVector,
  	DownRightTeeVector: DownRightTeeVector,
  	DownRightVectorBar: DownRightVectorBar,
  	DownRightVector: DownRightVector,
  	DownTeeArrow: DownTeeArrow,
  	DownTee: DownTee,
  	drbkarow: drbkarow,
  	drcorn: drcorn,
  	drcrop: drcrop,
  	Dscr: Dscr,
  	dscr: dscr,
  	DScy: DScy,
  	dscy: dscy,
  	dsol: dsol,
  	Dstrok: Dstrok,
  	dstrok: dstrok,
  	dtdot: dtdot,
  	dtri: dtri,
  	dtrif: dtrif,
  	duarr: duarr,
  	duhar: duhar,
  	dwangle: dwangle,
  	DZcy: DZcy,
  	dzcy: dzcy,
  	dzigrarr: dzigrarr,
  	Eacute: Eacute,
  	eacute: eacute,
  	easter: easter,
  	Ecaron: Ecaron,
  	ecaron: ecaron,
  	Ecirc: Ecirc,
  	ecirc: ecirc,
  	ecir: ecir,
  	ecolon: ecolon,
  	Ecy: Ecy,
  	ecy: ecy,
  	eDDot: eDDot,
  	Edot: Edot,
  	edot: edot,
  	eDot: eDot,
  	ee: ee,
  	efDot: efDot,
  	Efr: Efr,
  	efr: efr,
  	eg: eg,
  	Egrave: Egrave,
  	egrave: egrave,
  	egs: egs,
  	egsdot: egsdot,
  	el: el,
  	Element: Element$1,
  	elinters: elinters,
  	ell: ell,
  	els: els,
  	elsdot: elsdot,
  	Emacr: Emacr,
  	emacr: emacr,
  	empty: empty,
  	emptyset: emptyset,
  	EmptySmallSquare: EmptySmallSquare,
  	emptyv: emptyv,
  	EmptyVerySmallSquare: EmptyVerySmallSquare,
  	emsp13: emsp13,
  	emsp14: emsp14,
  	emsp: emsp,
  	ENG: ENG,
  	eng: eng,
  	ensp: ensp,
  	Eogon: Eogon,
  	eogon: eogon,
  	Eopf: Eopf,
  	eopf: eopf,
  	epar: epar,
  	eparsl: eparsl,
  	eplus: eplus,
  	epsi: epsi,
  	Epsilon: Epsilon,
  	epsilon: epsilon,
  	epsiv: epsiv,
  	eqcirc: eqcirc,
  	eqcolon: eqcolon,
  	eqsim: eqsim,
  	eqslantgtr: eqslantgtr,
  	eqslantless: eqslantless,
  	Equal: Equal,
  	equals: equals,
  	EqualTilde: EqualTilde,
  	equest: equest,
  	Equilibrium: Equilibrium,
  	equiv: equiv,
  	equivDD: equivDD,
  	eqvparsl: eqvparsl,
  	erarr: erarr,
  	erDot: erDot,
  	escr: escr,
  	Escr: Escr,
  	esdot: esdot,
  	Esim: Esim,
  	esim: esim,
  	Eta: Eta,
  	eta: eta,
  	ETH: ETH,
  	eth: eth,
  	Euml: Euml,
  	euml: euml,
  	euro: euro$1,
  	excl: excl,
  	exist: exist,
  	Exists: Exists,
  	expectation: expectation,
  	exponentiale: exponentiale,
  	ExponentialE: ExponentialE,
  	fallingdotseq: fallingdotseq,
  	Fcy: Fcy,
  	fcy: fcy,
  	female: female,
  	ffilig: ffilig,
  	fflig: fflig,
  	ffllig: ffllig,
  	Ffr: Ffr,
  	ffr: ffr,
  	filig: filig,
  	FilledSmallSquare: FilledSmallSquare,
  	FilledVerySmallSquare: FilledVerySmallSquare,
  	fjlig: fjlig,
  	flat: flat,
  	fllig: fllig,
  	fltns: fltns,
  	fnof: fnof,
  	Fopf: Fopf,
  	fopf: fopf,
  	forall: forall,
  	ForAll: ForAll,
  	fork: fork,
  	forkv: forkv,
  	Fouriertrf: Fouriertrf,
  	fpartint: fpartint,
  	frac12: frac12,
  	frac13: frac13,
  	frac14: frac14,
  	frac15: frac15,
  	frac16: frac16,
  	frac18: frac18,
  	frac23: frac23,
  	frac25: frac25,
  	frac34: frac34,
  	frac35: frac35,
  	frac38: frac38,
  	frac45: frac45,
  	frac56: frac56,
  	frac58: frac58,
  	frac78: frac78,
  	frasl: frasl,
  	frown: frown,
  	fscr: fscr,
  	Fscr: Fscr,
  	gacute: gacute,
  	Gamma: Gamma,
  	gamma: gamma,
  	Gammad: Gammad,
  	gammad: gammad,
  	gap: gap,
  	Gbreve: Gbreve,
  	gbreve: gbreve,
  	Gcedil: Gcedil,
  	Gcirc: Gcirc,
  	gcirc: gcirc,
  	Gcy: Gcy,
  	gcy: gcy,
  	Gdot: Gdot,
  	gdot: gdot,
  	ge: ge,
  	gE: gE,
  	gEl: gEl,
  	gel: gel,
  	geq: geq,
  	geqq: geqq,
  	geqslant: geqslant,
  	gescc: gescc,
  	ges: ges,
  	gesdot: gesdot,
  	gesdoto: gesdoto,
  	gesdotol: gesdotol,
  	gesl: gesl,
  	gesles: gesles,
  	Gfr: Gfr,
  	gfr: gfr,
  	gg: gg,
  	Gg: Gg,
  	ggg: ggg,
  	gimel: gimel,
  	GJcy: GJcy,
  	gjcy: gjcy,
  	gla: gla,
  	gl: gl,
  	glE: glE,
  	glj: glj,
  	gnap: gnap,
  	gnapprox: gnapprox,
  	gne: gne,
  	gnE: gnE,
  	gneq: gneq,
  	gneqq: gneqq,
  	gnsim: gnsim,
  	Gopf: Gopf,
  	gopf: gopf,
  	grave: grave,
  	GreaterEqual: GreaterEqual,
  	GreaterEqualLess: GreaterEqualLess,
  	GreaterFullEqual: GreaterFullEqual,
  	GreaterGreater: GreaterGreater,
  	GreaterLess: GreaterLess,
  	GreaterSlantEqual: GreaterSlantEqual,
  	GreaterTilde: GreaterTilde,
  	Gscr: Gscr,
  	gscr: gscr,
  	gsim: gsim,
  	gsime: gsime,
  	gsiml: gsiml,
  	gtcc: gtcc,
  	gtcir: gtcir,
  	gt: gt,
  	GT: GT,
  	Gt: Gt,
  	gtdot: gtdot,
  	gtlPar: gtlPar,
  	gtquest: gtquest,
  	gtrapprox: gtrapprox,
  	gtrarr: gtrarr,
  	gtrdot: gtrdot,
  	gtreqless: gtreqless,
  	gtreqqless: gtreqqless,
  	gtrless: gtrless,
  	gtrsim: gtrsim,
  	gvertneqq: gvertneqq,
  	gvnE: gvnE,
  	Hacek: Hacek,
  	hairsp: hairsp,
  	half: half,
  	hamilt: hamilt,
  	HARDcy: HARDcy,
  	hardcy: hardcy,
  	harrcir: harrcir,
  	harr: harr,
  	hArr: hArr,
  	harrw: harrw,
  	Hat: Hat,
  	hbar: hbar,
  	Hcirc: Hcirc,
  	hcirc: hcirc,
  	hearts: hearts$1,
  	heartsuit: heartsuit,
  	hellip: hellip,
  	hercon: hercon,
  	hfr: hfr,
  	Hfr: Hfr,
  	HilbertSpace: HilbertSpace,
  	hksearow: hksearow,
  	hkswarow: hkswarow,
  	hoarr: hoarr,
  	homtht: homtht,
  	hookleftarrow: hookleftarrow,
  	hookrightarrow: hookrightarrow,
  	hopf: hopf,
  	Hopf: Hopf,
  	horbar: horbar,
  	HorizontalLine: HorizontalLine,
  	hscr: hscr,
  	Hscr: Hscr,
  	hslash: hslash,
  	Hstrok: Hstrok,
  	hstrok: hstrok,
  	HumpDownHump: HumpDownHump,
  	HumpEqual: HumpEqual,
  	hybull: hybull,
  	hyphen: hyphen,
  	Iacute: Iacute,
  	iacute: iacute,
  	ic: ic,
  	Icirc: Icirc,
  	icirc: icirc,
  	Icy: Icy,
  	icy: icy,
  	Idot: Idot,
  	IEcy: IEcy,
  	iecy: iecy,
  	iexcl: iexcl,
  	iff: iff,
  	ifr: ifr,
  	Ifr: Ifr,
  	Igrave: Igrave,
  	igrave: igrave,
  	ii: ii,
  	iiiint: iiiint,
  	iiint: iiint,
  	iinfin: iinfin,
  	iiota: iiota,
  	IJlig: IJlig,
  	ijlig: ijlig,
  	Imacr: Imacr,
  	imacr: imacr,
  	image: image$1,
  	ImaginaryI: ImaginaryI,
  	imagline: imagline,
  	imagpart: imagpart,
  	imath: imath,
  	Im: Im,
  	imof: imof,
  	imped: imped,
  	Implies: Implies,
  	incare: incare,
  	"in": "∈",
  	infin: infin,
  	infintie: infintie,
  	inodot: inodot,
  	intcal: intcal,
  	int: int,
  	Int: Int,
  	integers: integers,
  	Integral: Integral,
  	intercal: intercal,
  	Intersection: Intersection,
  	intlarhk: intlarhk,
  	intprod: intprod,
  	InvisibleComma: InvisibleComma,
  	InvisibleTimes: InvisibleTimes,
  	IOcy: IOcy,
  	iocy: iocy,
  	Iogon: Iogon,
  	iogon: iogon,
  	Iopf: Iopf,
  	iopf: iopf,
  	Iota: Iota,
  	iota: iota,
  	iprod: iprod,
  	iquest: iquest,
  	iscr: iscr,
  	Iscr: Iscr,
  	isin: isin,
  	isindot: isindot,
  	isinE: isinE,
  	isins: isins,
  	isinsv: isinsv,
  	isinv: isinv,
  	it: it$1,
  	Itilde: Itilde,
  	itilde: itilde,
  	Iukcy: Iukcy,
  	iukcy: iukcy,
  	Iuml: Iuml,
  	iuml: iuml,
  	Jcirc: Jcirc,
  	jcirc: jcirc,
  	Jcy: Jcy,
  	jcy: jcy,
  	Jfr: Jfr,
  	jfr: jfr,
  	jmath: jmath,
  	Jopf: Jopf,
  	jopf: jopf,
  	Jscr: Jscr,
  	jscr: jscr,
  	Jsercy: Jsercy,
  	jsercy: jsercy,
  	Jukcy: Jukcy,
  	jukcy: jukcy,
  	Kappa: Kappa,
  	kappa: kappa,
  	kappav: kappav,
  	Kcedil: Kcedil,
  	kcedil: kcedil,
  	Kcy: Kcy,
  	kcy: kcy,
  	Kfr: Kfr,
  	kfr: kfr,
  	kgreen: kgreen,
  	KHcy: KHcy,
  	khcy: khcy,
  	KJcy: KJcy,
  	kjcy: kjcy,
  	Kopf: Kopf,
  	kopf: kopf,
  	Kscr: Kscr,
  	kscr: kscr,
  	lAarr: lAarr,
  	Lacute: Lacute,
  	lacute: lacute,
  	laemptyv: laemptyv,
  	lagran: lagran,
  	Lambda: Lambda,
  	lambda: lambda,
  	lang: lang,
  	Lang: Lang,
  	langd: langd,
  	langle: langle,
  	lap: lap,
  	Laplacetrf: Laplacetrf,
  	laquo: laquo,
  	larrb: larrb,
  	larrbfs: larrbfs,
  	larr: larr,
  	Larr: Larr,
  	lArr: lArr,
  	larrfs: larrfs,
  	larrhk: larrhk,
  	larrlp: larrlp,
  	larrpl: larrpl,
  	larrsim: larrsim,
  	larrtl: larrtl,
  	latail: latail,
  	lAtail: lAtail,
  	lat: lat,
  	late: late,
  	lates: lates,
  	lbarr: lbarr,
  	lBarr: lBarr,
  	lbbrk: lbbrk,
  	lbrace: lbrace,
  	lbrack: lbrack,
  	lbrke: lbrke,
  	lbrksld: lbrksld,
  	lbrkslu: lbrkslu,
  	Lcaron: Lcaron,
  	lcaron: lcaron,
  	Lcedil: Lcedil,
  	lcedil: lcedil,
  	lceil: lceil,
  	lcub: lcub,
  	Lcy: Lcy,
  	lcy: lcy,
  	ldca: ldca,
  	ldquo: ldquo,
  	ldquor: ldquor,
  	ldrdhar: ldrdhar,
  	ldrushar: ldrushar,
  	ldsh: ldsh,
  	le: le,
  	lE: lE,
  	LeftAngleBracket: LeftAngleBracket,
  	LeftArrowBar: LeftArrowBar,
  	leftarrow: leftarrow,
  	LeftArrow: LeftArrow,
  	Leftarrow: Leftarrow,
  	LeftArrowRightArrow: LeftArrowRightArrow,
  	leftarrowtail: leftarrowtail,
  	LeftCeiling: LeftCeiling,
  	LeftDoubleBracket: LeftDoubleBracket,
  	LeftDownTeeVector: LeftDownTeeVector,
  	LeftDownVectorBar: LeftDownVectorBar,
  	LeftDownVector: LeftDownVector,
  	LeftFloor: LeftFloor,
  	leftharpoondown: leftharpoondown,
  	leftharpoonup: leftharpoonup,
  	leftleftarrows: leftleftarrows,
  	leftrightarrow: leftrightarrow,
  	LeftRightArrow: LeftRightArrow,
  	Leftrightarrow: Leftrightarrow,
  	leftrightarrows: leftrightarrows,
  	leftrightharpoons: leftrightharpoons,
  	leftrightsquigarrow: leftrightsquigarrow,
  	LeftRightVector: LeftRightVector,
  	LeftTeeArrow: LeftTeeArrow,
  	LeftTee: LeftTee,
  	LeftTeeVector: LeftTeeVector,
  	leftthreetimes: leftthreetimes,
  	LeftTriangleBar: LeftTriangleBar,
  	LeftTriangle: LeftTriangle,
  	LeftTriangleEqual: LeftTriangleEqual,
  	LeftUpDownVector: LeftUpDownVector,
  	LeftUpTeeVector: LeftUpTeeVector,
  	LeftUpVectorBar: LeftUpVectorBar,
  	LeftUpVector: LeftUpVector,
  	LeftVectorBar: LeftVectorBar,
  	LeftVector: LeftVector,
  	lEg: lEg,
  	leg: leg$1,
  	leq: leq,
  	leqq: leqq,
  	leqslant: leqslant,
  	lescc: lescc,
  	les: les,
  	lesdot: lesdot,
  	lesdoto: lesdoto,
  	lesdotor: lesdotor,
  	lesg: lesg,
  	lesges: lesges,
  	lessapprox: lessapprox,
  	lessdot: lessdot,
  	lesseqgtr: lesseqgtr,
  	lesseqqgtr: lesseqqgtr,
  	LessEqualGreater: LessEqualGreater,
  	LessFullEqual: LessFullEqual,
  	LessGreater: LessGreater,
  	lessgtr: lessgtr,
  	LessLess: LessLess,
  	lesssim: lesssim,
  	LessSlantEqual: LessSlantEqual,
  	LessTilde: LessTilde,
  	lfisht: lfisht,
  	lfloor: lfloor,
  	Lfr: Lfr,
  	lfr: lfr,
  	lg: lg,
  	lgE: lgE,
  	lHar: lHar,
  	lhard: lhard,
  	lharu: lharu,
  	lharul: lharul,
  	lhblk: lhblk,
  	LJcy: LJcy,
  	ljcy: ljcy,
  	llarr: llarr,
  	ll: ll,
  	Ll: Ll,
  	llcorner: llcorner,
  	Lleftarrow: Lleftarrow,
  	llhard: llhard,
  	lltri: lltri,
  	Lmidot: Lmidot,
  	lmidot: lmidot,
  	lmoustache: lmoustache,
  	lmoust: lmoust,
  	lnap: lnap,
  	lnapprox: lnapprox,
  	lne: lne,
  	lnE: lnE,
  	lneq: lneq,
  	lneqq: lneqq,
  	lnsim: lnsim,
  	loang: loang,
  	loarr: loarr,
  	lobrk: lobrk,
  	longleftarrow: longleftarrow,
  	LongLeftArrow: LongLeftArrow,
  	Longleftarrow: Longleftarrow,
  	longleftrightarrow: longleftrightarrow,
  	LongLeftRightArrow: LongLeftRightArrow,
  	Longleftrightarrow: Longleftrightarrow,
  	longmapsto: longmapsto,
  	longrightarrow: longrightarrow,
  	LongRightArrow: LongRightArrow,
  	Longrightarrow: Longrightarrow,
  	looparrowleft: looparrowleft,
  	looparrowright: looparrowright,
  	lopar: lopar,
  	Lopf: Lopf,
  	lopf: lopf,
  	loplus: loplus,
  	lotimes: lotimes,
  	lowast: lowast,
  	lowbar: lowbar,
  	LowerLeftArrow: LowerLeftArrow,
  	LowerRightArrow: LowerRightArrow,
  	loz: loz,
  	lozenge: lozenge,
  	lozf: lozf,
  	lpar: lpar,
  	lparlt: lparlt,
  	lrarr: lrarr,
  	lrcorner: lrcorner,
  	lrhar: lrhar,
  	lrhard: lrhard,
  	lrm: lrm,
  	lrtri: lrtri,
  	lsaquo: lsaquo,
  	lscr: lscr,
  	Lscr: Lscr,
  	lsh: lsh,
  	Lsh: Lsh,
  	lsim: lsim,
  	lsime: lsime,
  	lsimg: lsimg,
  	lsqb: lsqb,
  	lsquo: lsquo,
  	lsquor: lsquor,
  	Lstrok: Lstrok,
  	lstrok: lstrok,
  	ltcc: ltcc,
  	ltcir: ltcir,
  	lt: lt,
  	LT: LT,
  	Lt: Lt,
  	ltdot: ltdot,
  	lthree: lthree,
  	ltimes: ltimes,
  	ltlarr: ltlarr,
  	ltquest: ltquest,
  	ltri: ltri,
  	ltrie: ltrie,
  	ltrif: ltrif,
  	ltrPar: ltrPar,
  	lurdshar: lurdshar,
  	luruhar: luruhar,
  	lvertneqq: lvertneqq,
  	lvnE: lvnE,
  	macr: macr,
  	male: male,
  	malt: malt,
  	maltese: maltese,
  	"Map": "⤅",
  	map: map$1,
  	mapsto: mapsto,
  	mapstodown: mapstodown,
  	mapstoleft: mapstoleft,
  	mapstoup: mapstoup,
  	marker: marker,
  	mcomma: mcomma,
  	Mcy: Mcy,
  	mcy: mcy,
  	mdash: mdash,
  	mDDot: mDDot,
  	measuredangle: measuredangle,
  	MediumSpace: MediumSpace,
  	Mellintrf: Mellintrf,
  	Mfr: Mfr,
  	mfr: mfr,
  	mho: mho,
  	micro: micro,
  	midast: midast,
  	midcir: midcir,
  	mid: mid,
  	middot: middot,
  	minusb: minusb,
  	minus: minus,
  	minusd: minusd,
  	minusdu: minusdu,
  	MinusPlus: MinusPlus,
  	mlcp: mlcp,
  	mldr: mldr,
  	mnplus: mnplus,
  	models: models,
  	Mopf: Mopf,
  	mopf: mopf,
  	mp: mp,
  	mscr: mscr,
  	Mscr: Mscr,
  	mstpos: mstpos,
  	Mu: Mu,
  	mu: mu,
  	multimap: multimap,
  	mumap: mumap,
  	nabla: nabla,
  	Nacute: Nacute,
  	nacute: nacute,
  	nang: nang,
  	nap: nap,
  	napE: napE,
  	napid: napid,
  	napos: napos,
  	napprox: napprox,
  	natural: natural,
  	naturals: naturals,
  	natur: natur,
  	nbsp: nbsp,
  	nbump: nbump,
  	nbumpe: nbumpe,
  	ncap: ncap,
  	Ncaron: Ncaron,
  	ncaron: ncaron,
  	Ncedil: Ncedil,
  	ncedil: ncedil,
  	ncong: ncong,
  	ncongdot: ncongdot,
  	ncup: ncup,
  	Ncy: Ncy,
  	ncy: ncy,
  	ndash: ndash,
  	nearhk: nearhk,
  	nearr: nearr,
  	neArr: neArr,
  	nearrow: nearrow,
  	ne: ne,
  	nedot: nedot,
  	NegativeMediumSpace: NegativeMediumSpace,
  	NegativeThickSpace: NegativeThickSpace,
  	NegativeThinSpace: NegativeThinSpace,
  	NegativeVeryThinSpace: NegativeVeryThinSpace,
  	nequiv: nequiv,
  	nesear: nesear,
  	nesim: nesim,
  	NestedGreaterGreater: NestedGreaterGreater,
  	NestedLessLess: NestedLessLess,
  	NewLine: NewLine,
  	nexist: nexist,
  	nexists: nexists,
  	Nfr: Nfr,
  	nfr: nfr,
  	ngE: ngE,
  	nge: nge,
  	ngeq: ngeq,
  	ngeqq: ngeqq,
  	ngeqslant: ngeqslant,
  	nges: nges,
  	nGg: nGg,
  	ngsim: ngsim,
  	nGt: nGt,
  	ngt: ngt,
  	ngtr: ngtr,
  	nGtv: nGtv,
  	nharr: nharr,
  	nhArr: nhArr,
  	nhpar: nhpar,
  	ni: ni,
  	nis: nis,
  	nisd: nisd,
  	niv: niv,
  	NJcy: NJcy,
  	njcy: njcy,
  	nlarr: nlarr,
  	nlArr: nlArr,
  	nldr: nldr,
  	nlE: nlE,
  	nle: nle,
  	nleftarrow: nleftarrow,
  	nLeftarrow: nLeftarrow,
  	nleftrightarrow: nleftrightarrow,
  	nLeftrightarrow: nLeftrightarrow,
  	nleq: nleq,
  	nleqq: nleqq,
  	nleqslant: nleqslant,
  	nles: nles,
  	nless: nless,
  	nLl: nLl,
  	nlsim: nlsim,
  	nLt: nLt,
  	nlt: nlt,
  	nltri: nltri,
  	nltrie: nltrie,
  	nLtv: nLtv,
  	nmid: nmid,
  	NoBreak: NoBreak,
  	NonBreakingSpace: NonBreakingSpace,
  	nopf: nopf,
  	Nopf: Nopf,
  	Not: Not,
  	not: not,
  	NotCongruent: NotCongruent,
  	NotCupCap: NotCupCap,
  	NotDoubleVerticalBar: NotDoubleVerticalBar,
  	NotElement: NotElement,
  	NotEqual: NotEqual,
  	NotEqualTilde: NotEqualTilde,
  	NotExists: NotExists,
  	NotGreater: NotGreater,
  	NotGreaterEqual: NotGreaterEqual,
  	NotGreaterFullEqual: NotGreaterFullEqual,
  	NotGreaterGreater: NotGreaterGreater,
  	NotGreaterLess: NotGreaterLess,
  	NotGreaterSlantEqual: NotGreaterSlantEqual,
  	NotGreaterTilde: NotGreaterTilde,
  	NotHumpDownHump: NotHumpDownHump,
  	NotHumpEqual: NotHumpEqual,
  	notin: notin,
  	notindot: notindot,
  	notinE: notinE,
  	notinva: notinva,
  	notinvb: notinvb,
  	notinvc: notinvc,
  	NotLeftTriangleBar: NotLeftTriangleBar,
  	NotLeftTriangle: NotLeftTriangle,
  	NotLeftTriangleEqual: NotLeftTriangleEqual,
  	NotLess: NotLess,
  	NotLessEqual: NotLessEqual,
  	NotLessGreater: NotLessGreater,
  	NotLessLess: NotLessLess,
  	NotLessSlantEqual: NotLessSlantEqual,
  	NotLessTilde: NotLessTilde,
  	NotNestedGreaterGreater: NotNestedGreaterGreater,
  	NotNestedLessLess: NotNestedLessLess,
  	notni: notni,
  	notniva: notniva,
  	notnivb: notnivb,
  	notnivc: notnivc,
  	NotPrecedes: NotPrecedes,
  	NotPrecedesEqual: NotPrecedesEqual,
  	NotPrecedesSlantEqual: NotPrecedesSlantEqual,
  	NotReverseElement: NotReverseElement,
  	NotRightTriangleBar: NotRightTriangleBar,
  	NotRightTriangle: NotRightTriangle,
  	NotRightTriangleEqual: NotRightTriangleEqual,
  	NotSquareSubset: NotSquareSubset,
  	NotSquareSubsetEqual: NotSquareSubsetEqual,
  	NotSquareSuperset: NotSquareSuperset,
  	NotSquareSupersetEqual: NotSquareSupersetEqual,
  	NotSubset: NotSubset,
  	NotSubsetEqual: NotSubsetEqual,
  	NotSucceeds: NotSucceeds,
  	NotSucceedsEqual: NotSucceedsEqual,
  	NotSucceedsSlantEqual: NotSucceedsSlantEqual,
  	NotSucceedsTilde: NotSucceedsTilde,
  	NotSuperset: NotSuperset,
  	NotSupersetEqual: NotSupersetEqual,
  	NotTilde: NotTilde,
  	NotTildeEqual: NotTildeEqual,
  	NotTildeFullEqual: NotTildeFullEqual,
  	NotTildeTilde: NotTildeTilde,
  	NotVerticalBar: NotVerticalBar,
  	nparallel: nparallel,
  	npar: npar,
  	nparsl: nparsl,
  	npart: npart,
  	npolint: npolint,
  	npr: npr,
  	nprcue: nprcue,
  	nprec: nprec,
  	npreceq: npreceq,
  	npre: npre,
  	nrarrc: nrarrc,
  	nrarr: nrarr,
  	nrArr: nrArr,
  	nrarrw: nrarrw,
  	nrightarrow: nrightarrow,
  	nRightarrow: nRightarrow,
  	nrtri: nrtri,
  	nrtrie: nrtrie,
  	nsc: nsc,
  	nsccue: nsccue,
  	nsce: nsce,
  	Nscr: Nscr,
  	nscr: nscr,
  	nshortmid: nshortmid,
  	nshortparallel: nshortparallel,
  	nsim: nsim,
  	nsime: nsime,
  	nsimeq: nsimeq,
  	nsmid: nsmid,
  	nspar: nspar,
  	nsqsube: nsqsube,
  	nsqsupe: nsqsupe,
  	nsub: nsub,
  	nsubE: nsubE,
  	nsube: nsube,
  	nsubset: nsubset,
  	nsubseteq: nsubseteq,
  	nsubseteqq: nsubseteqq,
  	nsucc: nsucc,
  	nsucceq: nsucceq,
  	nsup: nsup,
  	nsupE: nsupE,
  	nsupe: nsupe,
  	nsupset: nsupset,
  	nsupseteq: nsupseteq,
  	nsupseteqq: nsupseteqq,
  	ntgl: ntgl,
  	Ntilde: Ntilde,
  	ntilde: ntilde,
  	ntlg: ntlg,
  	ntriangleleft: ntriangleleft,
  	ntrianglelefteq: ntrianglelefteq,
  	ntriangleright: ntriangleright,
  	ntrianglerighteq: ntrianglerighteq,
  	Nu: Nu,
  	nu: nu,
  	num: num,
  	numero: numero,
  	numsp: numsp,
  	nvap: nvap,
  	nvdash: nvdash,
  	nvDash: nvDash,
  	nVdash: nVdash,
  	nVDash: nVDash,
  	nvge: nvge,
  	nvgt: nvgt,
  	nvHarr: nvHarr,
  	nvinfin: nvinfin,
  	nvlArr: nvlArr,
  	nvle: nvle,
  	nvlt: nvlt,
  	nvltrie: nvltrie,
  	nvrArr: nvrArr,
  	nvrtrie: nvrtrie,
  	nvsim: nvsim,
  	nwarhk: nwarhk,
  	nwarr: nwarr,
  	nwArr: nwArr,
  	nwarrow: nwarrow,
  	nwnear: nwnear,
  	Oacute: Oacute,
  	oacute: oacute,
  	oast: oast,
  	Ocirc: Ocirc,
  	ocirc: ocirc,
  	ocir: ocir,
  	Ocy: Ocy,
  	ocy: ocy,
  	odash: odash,
  	Odblac: Odblac,
  	odblac: odblac,
  	odiv: odiv,
  	odot: odot,
  	odsold: odsold,
  	OElig: OElig,
  	oelig: oelig,
  	ofcir: ofcir,
  	Ofr: Ofr,
  	ofr: ofr,
  	ogon: ogon,
  	Ograve: Ograve,
  	ograve: ograve,
  	ogt: ogt,
  	ohbar: ohbar,
  	ohm: ohm,
  	oint: oint,
  	olarr: olarr,
  	olcir: olcir,
  	olcross: olcross,
  	oline: oline,
  	olt: olt,
  	Omacr: Omacr,
  	omacr: omacr,
  	Omega: Omega,
  	omega: omega,
  	Omicron: Omicron,
  	omicron: omicron,
  	omid: omid,
  	ominus: ominus,
  	Oopf: Oopf,
  	oopf: oopf,
  	opar: opar,
  	OpenCurlyDoubleQuote: OpenCurlyDoubleQuote,
  	OpenCurlyQuote: OpenCurlyQuote,
  	operp: operp,
  	oplus: oplus,
  	orarr: orarr,
  	Or: Or,
  	or: or,
  	ord: ord,
  	order: order,
  	orderof: orderof,
  	ordf: ordf,
  	ordm: ordm,
  	origof: origof,
  	oror: oror,
  	orslope: orslope,
  	orv: orv,
  	oS: oS,
  	Oscr: Oscr,
  	oscr: oscr,
  	Oslash: Oslash,
  	oslash: oslash,
  	osol: osol,
  	Otilde: Otilde,
  	otilde: otilde,
  	otimesas: otimesas,
  	Otimes: Otimes,
  	otimes: otimes,
  	Ouml: Ouml,
  	ouml: ouml,
  	ovbar: ovbar,
  	OverBar: OverBar,
  	OverBrace: OverBrace,
  	OverBracket: OverBracket,
  	OverParenthesis: OverParenthesis,
  	para: para,
  	parallel: parallel,
  	par: par,
  	parsim: parsim,
  	parsl: parsl,
  	part: part,
  	PartialD: PartialD,
  	Pcy: Pcy,
  	pcy: pcy,
  	percnt: percnt,
  	period: period,
  	permil: permil,
  	perp: perp,
  	pertenk: pertenk,
  	Pfr: Pfr,
  	pfr: pfr,
  	Phi: Phi,
  	phi: phi,
  	phiv: phiv,
  	phmmat: phmmat,
  	phone: phone$1,
  	Pi: Pi,
  	pi: pi,
  	pitchfork: pitchfork,
  	piv: piv,
  	planck: planck,
  	planckh: planckh,
  	plankv: plankv,
  	plusacir: plusacir,
  	plusb: plusb,
  	pluscir: pluscir,
  	plus: plus,
  	plusdo: plusdo,
  	plusdu: plusdu,
  	pluse: pluse,
  	PlusMinus: PlusMinus,
  	plusmn: plusmn,
  	plussim: plussim,
  	plustwo: plustwo,
  	pm: pm,
  	Poincareplane: Poincareplane,
  	pointint: pointint,
  	popf: popf,
  	Popf: Popf,
  	pound: pound$1,
  	prap: prap,
  	Pr: Pr,
  	pr: pr,
  	prcue: prcue,
  	precapprox: precapprox,
  	prec: prec,
  	preccurlyeq: preccurlyeq,
  	Precedes: Precedes,
  	PrecedesEqual: PrecedesEqual,
  	PrecedesSlantEqual: PrecedesSlantEqual,
  	PrecedesTilde: PrecedesTilde,
  	preceq: preceq,
  	precnapprox: precnapprox,
  	precneqq: precneqq,
  	precnsim: precnsim,
  	pre: pre,
  	prE: prE,
  	precsim: precsim,
  	prime: prime,
  	Prime: Prime,
  	primes: primes,
  	prnap: prnap,
  	prnE: prnE,
  	prnsim: prnsim,
  	prod: prod,
  	Product: Product,
  	profalar: profalar,
  	profline: profline,
  	profsurf: profsurf,
  	prop: prop,
  	Proportional: Proportional,
  	Proportion: Proportion,
  	propto: propto,
  	prsim: prsim,
  	prurel: prurel,
  	Pscr: Pscr,
  	pscr: pscr,
  	Psi: Psi,
  	psi: psi,
  	puncsp: puncsp,
  	Qfr: Qfr,
  	qfr: qfr,
  	qint: qint,
  	qopf: qopf,
  	Qopf: Qopf,
  	qprime: qprime,
  	Qscr: Qscr,
  	qscr: qscr,
  	quaternions: quaternions,
  	quatint: quatint,
  	quest: quest,
  	questeq: questeq,
  	quot: quot,
  	QUOT: QUOT,
  	rAarr: rAarr,
  	race: race,
  	Racute: Racute,
  	racute: racute,
  	radic: radic,
  	raemptyv: raemptyv,
  	rang: rang,
  	Rang: Rang,
  	rangd: rangd,
  	range: range,
  	rangle: rangle,
  	raquo: raquo,
  	rarrap: rarrap,
  	rarrb: rarrb,
  	rarrbfs: rarrbfs,
  	rarrc: rarrc,
  	rarr: rarr,
  	Rarr: Rarr,
  	rArr: rArr,
  	rarrfs: rarrfs,
  	rarrhk: rarrhk,
  	rarrlp: rarrlp,
  	rarrpl: rarrpl,
  	rarrsim: rarrsim,
  	Rarrtl: Rarrtl,
  	rarrtl: rarrtl,
  	rarrw: rarrw,
  	ratail: ratail,
  	rAtail: rAtail,
  	ratio: ratio,
  	rationals: rationals,
  	rbarr: rbarr,
  	rBarr: rBarr,
  	RBarr: RBarr,
  	rbbrk: rbbrk,
  	rbrace: rbrace,
  	rbrack: rbrack,
  	rbrke: rbrke,
  	rbrksld: rbrksld,
  	rbrkslu: rbrkslu,
  	Rcaron: Rcaron,
  	rcaron: rcaron,
  	Rcedil: Rcedil,
  	rcedil: rcedil,
  	rceil: rceil,
  	rcub: rcub,
  	Rcy: Rcy,
  	rcy: rcy,
  	rdca: rdca,
  	rdldhar: rdldhar,
  	rdquo: rdquo,
  	rdquor: rdquor,
  	rdsh: rdsh,
  	real: real,
  	realine: realine,
  	realpart: realpart,
  	reals: reals,
  	Re: Re,
  	rect: rect,
  	reg: reg,
  	REG: REG,
  	ReverseElement: ReverseElement,
  	ReverseEquilibrium: ReverseEquilibrium,
  	ReverseUpEquilibrium: ReverseUpEquilibrium,
  	rfisht: rfisht,
  	rfloor: rfloor,
  	rfr: rfr,
  	Rfr: Rfr,
  	rHar: rHar,
  	rhard: rhard,
  	rharu: rharu,
  	rharul: rharul,
  	Rho: Rho,
  	rho: rho,
  	rhov: rhov,
  	RightAngleBracket: RightAngleBracket,
  	RightArrowBar: RightArrowBar,
  	rightarrow: rightarrow,
  	RightArrow: RightArrow,
  	Rightarrow: Rightarrow,
  	RightArrowLeftArrow: RightArrowLeftArrow,
  	rightarrowtail: rightarrowtail,
  	RightCeiling: RightCeiling,
  	RightDoubleBracket: RightDoubleBracket,
  	RightDownTeeVector: RightDownTeeVector,
  	RightDownVectorBar: RightDownVectorBar,
  	RightDownVector: RightDownVector,
  	RightFloor: RightFloor,
  	rightharpoondown: rightharpoondown,
  	rightharpoonup: rightharpoonup,
  	rightleftarrows: rightleftarrows,
  	rightleftharpoons: rightleftharpoons,
  	rightrightarrows: rightrightarrows,
  	rightsquigarrow: rightsquigarrow,
  	RightTeeArrow: RightTeeArrow,
  	RightTee: RightTee,
  	RightTeeVector: RightTeeVector,
  	rightthreetimes: rightthreetimes,
  	RightTriangleBar: RightTriangleBar,
  	RightTriangle: RightTriangle,
  	RightTriangleEqual: RightTriangleEqual,
  	RightUpDownVector: RightUpDownVector,
  	RightUpTeeVector: RightUpTeeVector,
  	RightUpVectorBar: RightUpVectorBar,
  	RightUpVector: RightUpVector,
  	RightVectorBar: RightVectorBar,
  	RightVector: RightVector,
  	ring: ring$1,
  	risingdotseq: risingdotseq,
  	rlarr: rlarr,
  	rlhar: rlhar,
  	rlm: rlm,
  	rmoustache: rmoustache,
  	rmoust: rmoust,
  	rnmid: rnmid,
  	roang: roang,
  	roarr: roarr,
  	robrk: robrk,
  	ropar: ropar,
  	ropf: ropf,
  	Ropf: Ropf,
  	roplus: roplus,
  	rotimes: rotimes,
  	RoundImplies: RoundImplies,
  	rpar: rpar,
  	rpargt: rpargt,
  	rppolint: rppolint,
  	rrarr: rrarr,
  	Rrightarrow: Rrightarrow,
  	rsaquo: rsaquo,
  	rscr: rscr,
  	Rscr: Rscr,
  	rsh: rsh,
  	Rsh: Rsh,
  	rsqb: rsqb,
  	rsquo: rsquo,
  	rsquor: rsquor,
  	rthree: rthree,
  	rtimes: rtimes,
  	rtri: rtri,
  	rtrie: rtrie,
  	rtrif: rtrif,
  	rtriltri: rtriltri,
  	RuleDelayed: RuleDelayed,
  	ruluhar: ruluhar,
  	rx: rx,
  	Sacute: Sacute,
  	sacute: sacute,
  	sbquo: sbquo,
  	scap: scap,
  	Scaron: Scaron,
  	scaron: scaron,
  	Sc: Sc,
  	sc: sc,
  	sccue: sccue,
  	sce: sce,
  	scE: scE,
  	Scedil: Scedil,
  	scedil: scedil,
  	Scirc: Scirc,
  	scirc: scirc,
  	scnap: scnap,
  	scnE: scnE,
  	scnsim: scnsim,
  	scpolint: scpolint,
  	scsim: scsim,
  	Scy: Scy,
  	scy: scy,
  	sdotb: sdotb,
  	sdot: sdot,
  	sdote: sdote,
  	searhk: searhk,
  	searr: searr,
  	seArr: seArr,
  	searrow: searrow,
  	sect: sect,
  	semi: semi,
  	seswar: seswar,
  	setminus: setminus,
  	setmn: setmn,
  	sext: sext,
  	Sfr: Sfr,
  	sfr: sfr,
  	sfrown: sfrown,
  	sharp: sharp,
  	SHCHcy: SHCHcy,
  	shchcy: shchcy,
  	SHcy: SHcy,
  	shcy: shcy,
  	ShortDownArrow: ShortDownArrow,
  	ShortLeftArrow: ShortLeftArrow,
  	shortmid: shortmid,
  	shortparallel: shortparallel,
  	ShortRightArrow: ShortRightArrow,
  	ShortUpArrow: ShortUpArrow,
  	shy: shy,
  	Sigma: Sigma,
  	sigma: sigma,
  	sigmaf: sigmaf,
  	sigmav: sigmav,
  	sim: sim,
  	simdot: simdot,
  	sime: sime,
  	simeq: simeq,
  	simg: simg,
  	simgE: simgE,
  	siml: siml,
  	simlE: simlE,
  	simne: simne,
  	simplus: simplus,
  	simrarr: simrarr,
  	slarr: slarr,
  	SmallCircle: SmallCircle,
  	smallsetminus: smallsetminus,
  	smashp: smashp,
  	smeparsl: smeparsl,
  	smid: smid,
  	smile: smile$1,
  	smt: smt,
  	smte: smte,
  	smtes: smtes,
  	SOFTcy: SOFTcy,
  	softcy: softcy,
  	solbar: solbar,
  	solb: solb,
  	sol: sol,
  	Sopf: Sopf,
  	sopf: sopf,
  	spades: spades$1,
  	spadesuit: spadesuit,
  	spar: spar,
  	sqcap: sqcap,
  	sqcaps: sqcaps,
  	sqcup: sqcup,
  	sqcups: sqcups,
  	Sqrt: Sqrt,
  	sqsub: sqsub,
  	sqsube: sqsube,
  	sqsubset: sqsubset,
  	sqsubseteq: sqsubseteq,
  	sqsup: sqsup,
  	sqsupe: sqsupe,
  	sqsupset: sqsupset,
  	sqsupseteq: sqsupseteq,
  	square: square,
  	Square: Square,
  	SquareIntersection: SquareIntersection,
  	SquareSubset: SquareSubset,
  	SquareSubsetEqual: SquareSubsetEqual,
  	SquareSuperset: SquareSuperset,
  	SquareSupersetEqual: SquareSupersetEqual,
  	SquareUnion: SquareUnion,
  	squarf: squarf,
  	squ: squ,
  	squf: squf,
  	srarr: srarr,
  	Sscr: Sscr,
  	sscr: sscr,
  	ssetmn: ssetmn,
  	ssmile: ssmile,
  	sstarf: sstarf,
  	Star: Star,
  	star: star$1,
  	starf: starf,
  	straightepsilon: straightepsilon,
  	straightphi: straightphi,
  	strns: strns,
  	sub: sub,
  	Sub: Sub,
  	subdot: subdot,
  	subE: subE,
  	sube: sube,
  	subedot: subedot,
  	submult: submult,
  	subnE: subnE,
  	subne: subne,
  	subplus: subplus,
  	subrarr: subrarr,
  	subset: subset,
  	Subset: Subset,
  	subseteq: subseteq,
  	subseteqq: subseteqq,
  	SubsetEqual: SubsetEqual,
  	subsetneq: subsetneq,
  	subsetneqq: subsetneqq,
  	subsim: subsim,
  	subsub: subsub,
  	subsup: subsup,
  	succapprox: succapprox,
  	succ: succ,
  	succcurlyeq: succcurlyeq,
  	Succeeds: Succeeds,
  	SucceedsEqual: SucceedsEqual,
  	SucceedsSlantEqual: SucceedsSlantEqual,
  	SucceedsTilde: SucceedsTilde,
  	succeq: succeq,
  	succnapprox: succnapprox,
  	succneqq: succneqq,
  	succnsim: succnsim,
  	succsim: succsim,
  	SuchThat: SuchThat,
  	sum: sum,
  	Sum: Sum,
  	sung: sung,
  	sup1: sup1,
  	sup2: sup2,
  	sup3: sup3,
  	sup: sup,
  	Sup: Sup,
  	supdot: supdot,
  	supdsub: supdsub,
  	supE: supE,
  	supe: supe,
  	supedot: supedot,
  	Superset: Superset,
  	SupersetEqual: SupersetEqual,
  	suphsol: suphsol,
  	suphsub: suphsub,
  	suplarr: suplarr,
  	supmult: supmult,
  	supnE: supnE,
  	supne: supne,
  	supplus: supplus,
  	supset: supset,
  	Supset: Supset,
  	supseteq: supseteq,
  	supseteqq: supseteqq,
  	supsetneq: supsetneq,
  	supsetneqq: supsetneqq,
  	supsim: supsim,
  	supsub: supsub,
  	supsup: supsup,
  	swarhk: swarhk,
  	swarr: swarr,
  	swArr: swArr,
  	swarrow: swarrow,
  	swnwar: swnwar,
  	szlig: szlig,
  	Tab: Tab,
  	target: target,
  	Tau: Tau,
  	tau: tau,
  	tbrk: tbrk,
  	Tcaron: Tcaron,
  	tcaron: tcaron,
  	Tcedil: Tcedil,
  	tcedil: tcedil,
  	Tcy: Tcy,
  	tcy: tcy,
  	tdot: tdot,
  	telrec: telrec,
  	Tfr: Tfr,
  	tfr: tfr,
  	there4: there4,
  	therefore: therefore,
  	Therefore: Therefore,
  	Theta: Theta,
  	theta: theta,
  	thetasym: thetasym,
  	thetav: thetav,
  	thickapprox: thickapprox,
  	thicksim: thicksim,
  	ThickSpace: ThickSpace,
  	ThinSpace: ThinSpace,
  	thinsp: thinsp,
  	thkap: thkap,
  	thksim: thksim,
  	THORN: THORN,
  	thorn: thorn,
  	tilde: tilde,
  	Tilde: Tilde,
  	TildeEqual: TildeEqual,
  	TildeFullEqual: TildeFullEqual,
  	TildeTilde: TildeTilde,
  	timesbar: timesbar,
  	timesb: timesb,
  	times: times,
  	timesd: timesd,
  	tint: tint,
  	toea: toea,
  	topbot: topbot,
  	topcir: topcir,
  	top: top$1,
  	Topf: Topf,
  	topf: topf,
  	topfork: topfork,
  	tosa: tosa,
  	tprime: tprime,
  	trade: trade,
  	TRADE: TRADE,
  	triangle: triangle,
  	triangledown: triangledown,
  	triangleleft: triangleleft,
  	trianglelefteq: trianglelefteq,
  	triangleq: triangleq,
  	triangleright: triangleright,
  	trianglerighteq: trianglerighteq,
  	tridot: tridot,
  	trie: trie,
  	triminus: triminus,
  	TripleDot: TripleDot,
  	triplus: triplus,
  	trisb: trisb,
  	tritime: tritime,
  	trpezium: trpezium,
  	Tscr: Tscr,
  	tscr: tscr,
  	TScy: TScy,
  	tscy: tscy,
  	TSHcy: TSHcy,
  	tshcy: tshcy,
  	Tstrok: Tstrok,
  	tstrok: tstrok,
  	twixt: twixt,
  	twoheadleftarrow: twoheadleftarrow,
  	twoheadrightarrow: twoheadrightarrow,
  	Uacute: Uacute,
  	uacute: uacute,
  	uarr: uarr,
  	Uarr: Uarr,
  	uArr: uArr,
  	Uarrocir: Uarrocir,
  	Ubrcy: Ubrcy,
  	ubrcy: ubrcy,
  	Ubreve: Ubreve,
  	ubreve: ubreve,
  	Ucirc: Ucirc,
  	ucirc: ucirc,
  	Ucy: Ucy,
  	ucy: ucy,
  	udarr: udarr,
  	Udblac: Udblac,
  	udblac: udblac,
  	udhar: udhar,
  	ufisht: ufisht,
  	Ufr: Ufr,
  	ufr: ufr,
  	Ugrave: Ugrave,
  	ugrave: ugrave,
  	uHar: uHar,
  	uharl: uharl,
  	uharr: uharr,
  	uhblk: uhblk,
  	ulcorn: ulcorn,
  	ulcorner: ulcorner,
  	ulcrop: ulcrop,
  	ultri: ultri,
  	Umacr: Umacr,
  	umacr: umacr,
  	uml: uml,
  	UnderBar: UnderBar,
  	UnderBrace: UnderBrace,
  	UnderBracket: UnderBracket,
  	UnderParenthesis: UnderParenthesis,
  	Union: Union,
  	UnionPlus: UnionPlus,
  	Uogon: Uogon,
  	uogon: uogon,
  	Uopf: Uopf,
  	uopf: uopf,
  	UpArrowBar: UpArrowBar,
  	uparrow: uparrow,
  	UpArrow: UpArrow,
  	Uparrow: Uparrow,
  	UpArrowDownArrow: UpArrowDownArrow,
  	updownarrow: updownarrow,
  	UpDownArrow: UpDownArrow,
  	Updownarrow: Updownarrow,
  	UpEquilibrium: UpEquilibrium,
  	upharpoonleft: upharpoonleft,
  	upharpoonright: upharpoonright,
  	uplus: uplus,
  	UpperLeftArrow: UpperLeftArrow,
  	UpperRightArrow: UpperRightArrow,
  	upsi: upsi,
  	Upsi: Upsi,
  	upsih: upsih,
  	Upsilon: Upsilon,
  	upsilon: upsilon,
  	UpTeeArrow: UpTeeArrow,
  	UpTee: UpTee,
  	upuparrows: upuparrows,
  	urcorn: urcorn,
  	urcorner: urcorner,
  	urcrop: urcrop,
  	Uring: Uring,
  	uring: uring,
  	urtri: urtri,
  	Uscr: Uscr,
  	uscr: uscr,
  	utdot: utdot,
  	Utilde: Utilde,
  	utilde: utilde,
  	utri: utri,
  	utrif: utrif,
  	uuarr: uuarr,
  	Uuml: Uuml,
  	uuml: uuml,
  	uwangle: uwangle,
  	vangrt: vangrt,
  	varepsilon: varepsilon,
  	varkappa: varkappa,
  	varnothing: varnothing,
  	varphi: varphi,
  	varpi: varpi,
  	varpropto: varpropto,
  	varr: varr,
  	vArr: vArr,
  	varrho: varrho,
  	varsigma: varsigma,
  	varsubsetneq: varsubsetneq,
  	varsubsetneqq: varsubsetneqq,
  	varsupsetneq: varsupsetneq,
  	varsupsetneqq: varsupsetneqq,
  	vartheta: vartheta,
  	vartriangleleft: vartriangleleft,
  	vartriangleright: vartriangleright,
  	vBar: vBar,
  	Vbar: Vbar,
  	vBarv: vBarv,
  	Vcy: Vcy,
  	vcy: vcy,
  	vdash: vdash,
  	vDash: vDash,
  	Vdash: Vdash,
  	VDash: VDash,
  	Vdashl: Vdashl,
  	veebar: veebar,
  	vee: vee,
  	Vee: Vee,
  	veeeq: veeeq,
  	vellip: vellip,
  	verbar: verbar,
  	Verbar: Verbar,
  	vert: vert,
  	Vert: Vert,
  	VerticalBar: VerticalBar,
  	VerticalLine: VerticalLine,
  	VerticalSeparator: VerticalSeparator,
  	VerticalTilde: VerticalTilde,
  	VeryThinSpace: VeryThinSpace,
  	Vfr: Vfr,
  	vfr: vfr,
  	vltri: vltri,
  	vnsub: vnsub,
  	vnsup: vnsup,
  	Vopf: Vopf,
  	vopf: vopf,
  	vprop: vprop,
  	vrtri: vrtri,
  	Vscr: Vscr,
  	vscr: vscr,
  	vsubnE: vsubnE,
  	vsubne: vsubne,
  	vsupnE: vsupnE,
  	vsupne: vsupne,
  	Vvdash: Vvdash,
  	vzigzag: vzigzag,
  	Wcirc: Wcirc,
  	wcirc: wcirc,
  	wedbar: wedbar,
  	wedge: wedge,
  	Wedge: Wedge,
  	wedgeq: wedgeq,
  	weierp: weierp,
  	Wfr: Wfr,
  	wfr: wfr,
  	Wopf: Wopf,
  	wopf: wopf,
  	wp: wp,
  	wr: wr,
  	wreath: wreath,
  	Wscr: Wscr,
  	wscr: wscr,
  	xcap: xcap,
  	xcirc: xcirc,
  	xcup: xcup,
  	xdtri: xdtri,
  	Xfr: Xfr,
  	xfr: xfr,
  	xharr: xharr,
  	xhArr: xhArr,
  	Xi: Xi,
  	xi: xi,
  	xlarr: xlarr,
  	xlArr: xlArr,
  	xmap: xmap,
  	xnis: xnis,
  	xodot: xodot,
  	Xopf: Xopf,
  	xopf: xopf,
  	xoplus: xoplus,
  	xotime: xotime,
  	xrarr: xrarr,
  	xrArr: xrArr,
  	Xscr: Xscr,
  	xscr: xscr,
  	xsqcup: xsqcup,
  	xuplus: xuplus,
  	xutri: xutri,
  	xvee: xvee,
  	xwedge: xwedge,
  	Yacute: Yacute,
  	yacute: yacute,
  	YAcy: YAcy,
  	yacy: yacy,
  	Ycirc: Ycirc,
  	ycirc: ycirc,
  	Ycy: Ycy,
  	ycy: ycy,
  	yen: yen$1,
  	Yfr: Yfr,
  	yfr: yfr,
  	YIcy: YIcy,
  	yicy: yicy,
  	Yopf: Yopf,
  	yopf: yopf,
  	Yscr: Yscr,
  	yscr: yscr,
  	YUcy: YUcy,
  	yucy: yucy,
  	yuml: yuml,
  	Yuml: Yuml,
  	Zacute: Zacute,
  	zacute: zacute,
  	Zcaron: Zcaron,
  	zcaron: zcaron,
  	Zcy: Zcy,
  	zcy: zcy,
  	Zdot: Zdot,
  	zdot: zdot,
  	zeetrf: zeetrf,
  	ZeroWidthSpace: ZeroWidthSpace,
  	Zeta: Zeta,
  	zeta: zeta,
  	zfr: zfr,
  	Zfr: Zfr,
  	ZHcy: ZHcy,
  	zhcy: zhcy,
  	zigrarr: zigrarr,
  	zopf: zopf,
  	Zopf: Zopf,
  	Zscr: Zscr,
  	zscr: zscr,
  	zwj: zwj,
  	zwnj: zwnj
  };

  /*eslint quotes:0*/
  var entities$1 = require$$0$1;

  var regex$4=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;

  var mdurl$1 = {};

  var encodeCache = {};


  // Create a lookup array where anything but characters in `chars` string
  // and alphanumeric chars is percent-encoded.
  //
  function getEncodeCache(exclude) {
    var i, ch, cache = encodeCache[exclude];
    if (cache) { return cache; }

    cache = encodeCache[exclude] = [];

    for (i = 0; i < 128; i++) {
      ch = String.fromCharCode(i);

      if (/^[0-9a-z]$/i.test(ch)) {
        // always allow unencoded alphanumeric characters
        cache.push(ch);
      } else {
        cache.push('%' + ('0' + i.toString(16).toUpperCase()).slice(-2));
      }
    }

    for (i = 0; i < exclude.length; i++) {
      cache[exclude.charCodeAt(i)] = exclude[i];
    }

    return cache;
  }


  // Encode unsafe characters with percent-encoding, skipping already
  // encoded sequences.
  //
  //  - string       - string to encode
  //  - exclude      - list of characters to ignore (in addition to a-zA-Z0-9)
  //  - keepEscaped  - don't encode '%' in a correct escape sequence (default: true)
  //
  function encode$1(string, exclude, keepEscaped) {
    var i, l, code, nextCode, cache,
        result = '';

    if (typeof exclude !== 'string') {
      // encode(string, keepEscaped)
      keepEscaped  = exclude;
      exclude = encode$1.defaultChars;
    }

    if (typeof keepEscaped === 'undefined') {
      keepEscaped = true;
    }

    cache = getEncodeCache(exclude);

    for (i = 0, l = string.length; i < l; i++) {
      code = string.charCodeAt(i);

      if (keepEscaped && code === 0x25 /* % */ && i + 2 < l) {
        if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
          result += string.slice(i, i + 3);
          i += 2;
          continue;
        }
      }

      if (code < 128) {
        result += cache[code];
        continue;
      }

      if (code >= 0xD800 && code <= 0xDFFF) {
        if (code >= 0xD800 && code <= 0xDBFF && i + 1 < l) {
          nextCode = string.charCodeAt(i + 1);
          if (nextCode >= 0xDC00 && nextCode <= 0xDFFF) {
            result += encodeURIComponent(string[i] + string[i + 1]);
            i++;
            continue;
          }
        }
        result += '%EF%BF%BD';
        continue;
      }

      result += encodeURIComponent(string[i]);
    }

    return result;
  }

  encode$1.defaultChars   = ";/?:@&=+$,-_.!~*'()#";
  encode$1.componentChars = "-_.!~*'()";


  var encode_1 = encode$1;

  /* eslint-disable no-bitwise */

  var decodeCache = {};

  function getDecodeCache(exclude) {
    var i, ch, cache = decodeCache[exclude];
    if (cache) { return cache; }

    cache = decodeCache[exclude] = [];

    for (i = 0; i < 128; i++) {
      ch = String.fromCharCode(i);
      cache.push(ch);
    }

    for (i = 0; i < exclude.length; i++) {
      ch = exclude.charCodeAt(i);
      cache[ch] = '%' + ('0' + ch.toString(16).toUpperCase()).slice(-2);
    }

    return cache;
  }


  // Decode percent-encoded string.
  //
  function decode$1(string, exclude) {
    var cache;

    if (typeof exclude !== 'string') {
      exclude = decode$1.defaultChars;
    }

    cache = getDecodeCache(exclude);

    return string.replace(/(%[a-f0-9]{2})+/gi, function(seq) {
      var i, l, b1, b2, b3, b4, chr,
          result = '';

      for (i = 0, l = seq.length; i < l; i += 3) {
        b1 = parseInt(seq.slice(i + 1, i + 3), 16);

        if (b1 < 0x80) {
          result += cache[b1];
          continue;
        }

        if ((b1 & 0xE0) === 0xC0 && (i + 3 < l)) {
          // 110xxxxx 10xxxxxx
          b2 = parseInt(seq.slice(i + 4, i + 6), 16);

          if ((b2 & 0xC0) === 0x80) {
            chr = ((b1 << 6) & 0x7C0) | (b2 & 0x3F);

            if (chr < 0x80) {
              result += '\ufffd\ufffd';
            } else {
              result += String.fromCharCode(chr);
            }

            i += 3;
            continue;
          }
        }

        if ((b1 & 0xF0) === 0xE0 && (i + 6 < l)) {
          // 1110xxxx 10xxxxxx 10xxxxxx
          b2 = parseInt(seq.slice(i + 4, i + 6), 16);
          b3 = parseInt(seq.slice(i + 7, i + 9), 16);

          if ((b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80) {
            chr = ((b1 << 12) & 0xF000) | ((b2 << 6) & 0xFC0) | (b3 & 0x3F);

            if (chr < 0x800 || (chr >= 0xD800 && chr <= 0xDFFF)) {
              result += '\ufffd\ufffd\ufffd';
            } else {
              result += String.fromCharCode(chr);
            }

            i += 6;
            continue;
          }
        }

        if ((b1 & 0xF8) === 0xF0 && (i + 9 < l)) {
          // 111110xx 10xxxxxx 10xxxxxx 10xxxxxx
          b2 = parseInt(seq.slice(i + 4, i + 6), 16);
          b3 = parseInt(seq.slice(i + 7, i + 9), 16);
          b4 = parseInt(seq.slice(i + 10, i + 12), 16);

          if ((b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80 && (b4 & 0xC0) === 0x80) {
            chr = ((b1 << 18) & 0x1C0000) | ((b2 << 12) & 0x3F000) | ((b3 << 6) & 0xFC0) | (b4 & 0x3F);

            if (chr < 0x10000 || chr > 0x10FFFF) {
              result += '\ufffd\ufffd\ufffd\ufffd';
            } else {
              chr -= 0x10000;
              result += String.fromCharCode(0xD800 + (chr >> 10), 0xDC00 + (chr & 0x3FF));
            }

            i += 9;
            continue;
          }
        }

        result += '\ufffd';
      }

      return result;
    });
  }


  decode$1.defaultChars   = ';/?:@&=+$,#';
  decode$1.componentChars = '';


  var decode_1 = decode$1;

  var format = function format(url) {
    var result = '';

    result += url.protocol || '';
    result += url.slashes ? '//' : '';
    result += url.auth ? url.auth + '@' : '';

    if (url.hostname && url.hostname.indexOf(':') !== -1) {
      // ipv6 address
      result += '[' + url.hostname + ']';
    } else {
      result += url.hostname || '';
    }

    result += url.port ? ':' + url.port : '';
    result += url.pathname || '';
    result += url.search || '';
    result += url.hash || '';

    return result;
  };

  //
  // Changes from joyent/node:
  //
  // 1. No leading slash in paths,
  //    e.g. in `url.parse('http://foo?bar')` pathname is ``, not `/`
  //
  // 2. Backslashes are not replaced with slashes,
  //    so `http:\\example.org\` is treated like a relative path
  //
  // 3. Trailing colon is treated like a part of the path,
  //    i.e. in `http://example.org:foo` pathname is `:foo`
  //
  // 4. Nothing is URL-encoded in the resulting object,
  //    (in joyent/node some chars in auth and paths are encoded)
  //
  // 5. `url.parse()` does not have `parseQueryString` argument
  //
  // 6. Removed extraneous result properties: `host`, `path`, `query`, etc.,
  //    which can be constructed using other parts of the url.
  //


  function Url() {
    this.protocol = null;
    this.slashes = null;
    this.auth = null;
    this.port = null;
    this.hostname = null;
    this.hash = null;
    this.search = null;
    this.pathname = null;
  }

  // Reference: RFC 3986, RFC 1808, RFC 2396

  // define these here so at least they only have to be
  // compiled once on the first module load.
  var protocolPattern = /^([a-z0-9.+-]+:)/i,
      portPattern = /:[0-9]*$/,

      // Special case for a simple path URL
      simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

      // RFC 2396: characters reserved for delimiting URLs.
      // We actually just auto-escape these.
      delims = [ '<', '>', '"', '`', ' ', '\r', '\n', '\t' ],

      // RFC 2396: characters not allowed for various reasons.
      unwise = [ '{', '}', '|', '\\', '^', '`' ].concat(delims),

      // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
      autoEscape = [ '\'' ].concat(unwise),
      // Characters that are never ever allowed in a hostname.
      // Note that any invalid chars are also handled, but these
      // are the ones that are *expected* to be seen, so we fast-path
      // them.
      nonHostChars = [ '%', '/', '?', ';', '#' ].concat(autoEscape),
      hostEndingChars = [ '/', '?', '#' ],
      hostnameMaxLen = 255,
      hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
      hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
      // protocols that can allow "unsafe" and "unwise" chars.
      /* eslint-disable no-script-url */
      // protocols that never have a hostname.
      hostlessProtocol = {
        'javascript': true,
        'javascript:': true
      },
      // protocols that always contain a // bit.
      slashedProtocol = {
        'http': true,
        'https': true,
        'ftp': true,
        'gopher': true,
        'file': true,
        'http:': true,
        'https:': true,
        'ftp:': true,
        'gopher:': true,
        'file:': true
      };
      /* eslint-enable no-script-url */

  function urlParse(url, slashesDenoteHost) {
    if (url && url instanceof Url) { return url; }

    var u = new Url();
    u.parse(url, slashesDenoteHost);
    return u;
  }

  Url.prototype.parse = function(url, slashesDenoteHost) {
    var i, l, lowerProto, hec, slashes,
        rest = url;

    // trim before proceeding.
    // This is to support parse stuff like "  http://foo.com  \n"
    rest = rest.trim();

    if (!slashesDenoteHost && url.split('#').length === 1) {
      // Try fast path regexp
      var simplePath = simplePathPattern.exec(rest);
      if (simplePath) {
        this.pathname = simplePath[1];
        if (simplePath[2]) {
          this.search = simplePath[2];
        }
        return this;
      }
    }

    var proto = protocolPattern.exec(rest);
    if (proto) {
      proto = proto[0];
      lowerProto = proto.toLowerCase();
      this.protocol = proto;
      rest = rest.substr(proto.length);
    }

    // figure out if it's got a host
    // user@server is *always* interpreted as a hostname, and url
    // resolution will treat //foo/bar as host=foo,path=bar because that's
    // how the browser resolves relative URLs.
    if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
      slashes = rest.substr(0, 2) === '//';
      if (slashes && !(proto && hostlessProtocol[proto])) {
        rest = rest.substr(2);
        this.slashes = true;
      }
    }

    if (!hostlessProtocol[proto] &&
        (slashes || (proto && !slashedProtocol[proto]))) {

      // there's a hostname.
      // the first instance of /, ?, ;, or # ends the host.
      //
      // If there is an @ in the hostname, then non-host chars *are* allowed
      // to the left of the last @ sign, unless some host-ending character
      // comes *before* the @-sign.
      // URLs are obnoxious.
      //
      // ex:
      // http://a@b@c/ => user:a@b host:c
      // http://a@b?@c => user:a host:c path:/?@c

      // v0.12 TODO(isaacs): This is not quite how Chrome does things.
      // Review our test case against browsers more comprehensively.

      // find the first instance of any hostEndingChars
      var hostEnd = -1;
      for (i = 0; i < hostEndingChars.length; i++) {
        hec = rest.indexOf(hostEndingChars[i]);
        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
          hostEnd = hec;
        }
      }

      // at this point, either we have an explicit point where the
      // auth portion cannot go past, or the last @ char is the decider.
      var auth, atSign;
      if (hostEnd === -1) {
        // atSign can be anywhere.
        atSign = rest.lastIndexOf('@');
      } else {
        // atSign must be in auth portion.
        // http://a@b/c@d => host:b auth:a path:/c@d
        atSign = rest.lastIndexOf('@', hostEnd);
      }

      // Now we have a portion which is definitely the auth.
      // Pull that off.
      if (atSign !== -1) {
        auth = rest.slice(0, atSign);
        rest = rest.slice(atSign + 1);
        this.auth = auth;
      }

      // the host is the remaining to the left of the first non-host char
      hostEnd = -1;
      for (i = 0; i < nonHostChars.length; i++) {
        hec = rest.indexOf(nonHostChars[i]);
        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
          hostEnd = hec;
        }
      }
      // if we still have not hit it, then the entire thing is a host.
      if (hostEnd === -1) {
        hostEnd = rest.length;
      }

      if (rest[hostEnd - 1] === ':') { hostEnd--; }
      var host = rest.slice(0, hostEnd);
      rest = rest.slice(hostEnd);

      // pull out port.
      this.parseHost(host);

      // we've indicated that there is a hostname,
      // so even if it's empty, it has to be present.
      this.hostname = this.hostname || '';

      // if hostname begins with [ and ends with ]
      // assume that it's an IPv6 address.
      var ipv6Hostname = this.hostname[0] === '[' &&
          this.hostname[this.hostname.length - 1] === ']';

      // validate a little.
      if (!ipv6Hostname) {
        var hostparts = this.hostname.split(/\./);
        for (i = 0, l = hostparts.length; i < l; i++) {
          var part = hostparts[i];
          if (!part) { continue; }
          if (!part.match(hostnamePartPattern)) {
            var newpart = '';
            for (var j = 0, k = part.length; j < k; j++) {
              if (part.charCodeAt(j) > 127) {
                // we replace non-ASCII char with a temporary placeholder
                // we need this to make sure size of hostname is not
                // broken by replacing non-ASCII by nothing
                newpart += 'x';
              } else {
                newpart += part[j];
              }
            }
            // we test again with ASCII char only
            if (!newpart.match(hostnamePartPattern)) {
              var validParts = hostparts.slice(0, i);
              var notHost = hostparts.slice(i + 1);
              var bit = part.match(hostnamePartStart);
              if (bit) {
                validParts.push(bit[1]);
                notHost.unshift(bit[2]);
              }
              if (notHost.length) {
                rest = notHost.join('.') + rest;
              }
              this.hostname = validParts.join('.');
              break;
            }
          }
        }
      }

      if (this.hostname.length > hostnameMaxLen) {
        this.hostname = '';
      }

      // strip [ and ] from the hostname
      // the host field still retains them, though
      if (ipv6Hostname) {
        this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      }
    }

    // chop off from the tail first.
    var hash = rest.indexOf('#');
    if (hash !== -1) {
      // got a fragment string.
      this.hash = rest.substr(hash);
      rest = rest.slice(0, hash);
    }
    var qm = rest.indexOf('?');
    if (qm !== -1) {
      this.search = rest.substr(qm);
      rest = rest.slice(0, qm);
    }
    if (rest) { this.pathname = rest; }
    if (slashedProtocol[lowerProto] &&
        this.hostname && !this.pathname) {
      this.pathname = '';
    }

    return this;
  };

  Url.prototype.parseHost = function(host) {
    var port = portPattern.exec(host);
    if (port) {
      port = port[0];
      if (port !== ':') {
        this.port = port.substr(1);
      }
      host = host.substr(0, host.length - port.length);
    }
    if (host) { this.hostname = host; }
  };

  var parse = urlParse;

  mdurl$1.encode = encode_1;
  mdurl$1.decode = decode_1;
  mdurl$1.format = format;
  mdurl$1.parse  = parse;

  var uc_micro = {};

  var regex$3=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;

  var regex$2=/[\0-\x1F\x7F-\x9F]/;

  var regex$1=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;

  var regex=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;

  uc_micro.Any = regex$3;
  uc_micro.Cc  = regex$2;
  uc_micro.Cf  = regex$1;
  uc_micro.P   = regex$4;
  uc_micro.Z   = regex;

  (function (exports) {


  function _class(obj) { return Object.prototype.toString.call(obj); }

  function isString(obj) { return _class(obj) === '[object String]'; }

  var _hasOwnProperty = Object.prototype.hasOwnProperty;

  function has(object, key) {
    return _hasOwnProperty.call(object, key);
  }

  // Merge objects
  //
  function assign(obj /*from1, from2, from3, ...*/) {
    var sources = Array.prototype.slice.call(arguments, 1);

    sources.forEach(function (source) {
      if (!source) { return; }

      if (typeof source !== 'object') {
        throw new TypeError(source + 'must be object');
      }

      Object.keys(source).forEach(function (key) {
        obj[key] = source[key];
      });
    });

    return obj;
  }

  // Remove element from array and put another array at those position.
  // Useful for some operations with tokens
  function arrayReplaceAt(src, pos, newElements) {
    return [].concat(src.slice(0, pos), newElements, src.slice(pos + 1));
  }

  ////////////////////////////////////////////////////////////////////////////////

  function isValidEntityCode(c) {
    /*eslint no-bitwise:0*/
    // broken sequence
    if (c >= 0xD800 && c <= 0xDFFF) { return false; }
    // never used
    if (c >= 0xFDD0 && c <= 0xFDEF) { return false; }
    if ((c & 0xFFFF) === 0xFFFF || (c & 0xFFFF) === 0xFFFE) { return false; }
    // control codes
    if (c >= 0x00 && c <= 0x08) { return false; }
    if (c === 0x0B) { return false; }
    if (c >= 0x0E && c <= 0x1F) { return false; }
    if (c >= 0x7F && c <= 0x9F) { return false; }
    // out of range
    if (c > 0x10FFFF) { return false; }
    return true;
  }

  function fromCodePoint(c) {
    /*eslint no-bitwise:0*/
    if (c > 0xffff) {
      c -= 0x10000;
      var surrogate1 = 0xd800 + (c >> 10),
          surrogate2 = 0xdc00 + (c & 0x3ff);

      return String.fromCharCode(surrogate1, surrogate2);
    }
    return String.fromCharCode(c);
  }


  var UNESCAPE_MD_RE  = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g;
  var ENTITY_RE       = /&([a-z#][a-z0-9]{1,31});/gi;
  var UNESCAPE_ALL_RE = new RegExp(UNESCAPE_MD_RE.source + '|' + ENTITY_RE.source, 'gi');

  var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;

  var entities = entities$1;

  function replaceEntityPattern(match, name) {
    var code = 0;

    if (has(entities, name)) {
      return entities[name];
    }

    if (name.charCodeAt(0) === 0x23/* # */ && DIGITAL_ENTITY_TEST_RE.test(name)) {
      code = name[1].toLowerCase() === 'x' ?
        parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10);

      if (isValidEntityCode(code)) {
        return fromCodePoint(code);
      }
    }

    return match;
  }

  /*function replaceEntities(str) {
    if (str.indexOf('&') < 0) { return str; }

    return str.replace(ENTITY_RE, replaceEntityPattern);
  }*/

  function unescapeMd(str) {
    if (str.indexOf('\\') < 0) { return str; }
    return str.replace(UNESCAPE_MD_RE, '$1');
  }

  function unescapeAll(str) {
    if (str.indexOf('\\') < 0 && str.indexOf('&') < 0) { return str; }

    return str.replace(UNESCAPE_ALL_RE, function (match, escaped, entity) {
      if (escaped) { return escaped; }
      return replaceEntityPattern(match, entity);
    });
  }

  ////////////////////////////////////////////////////////////////////////////////

  var HTML_ESCAPE_TEST_RE = /[&<>"]/;
  var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
  var HTML_REPLACEMENTS = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;'
  };

  function replaceUnsafeChar(ch) {
    return HTML_REPLACEMENTS[ch];
  }

  function escapeHtml(str) {
    if (HTML_ESCAPE_TEST_RE.test(str)) {
      return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
    }
    return str;
  }

  ////////////////////////////////////////////////////////////////////////////////

  var REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;

  function escapeRE(str) {
    return str.replace(REGEXP_ESCAPE_RE, '\\$&');
  }

  ////////////////////////////////////////////////////////////////////////////////

  function isSpace(code) {
    switch (code) {
      case 0x09:
      case 0x20:
        return true;
    }
    return false;
  }

  // Zs (unicode class) || [\t\f\v\r\n]
  function isWhiteSpace(code) {
    if (code >= 0x2000 && code <= 0x200A) { return true; }
    switch (code) {
      case 0x09: // \t
      case 0x0A: // \n
      case 0x0B: // \v
      case 0x0C: // \f
      case 0x0D: // \r
      case 0x20:
      case 0xA0:
      case 0x1680:
      case 0x202F:
      case 0x205F:
      case 0x3000:
        return true;
    }
    return false;
  }

  ////////////////////////////////////////////////////////////////////////////////

  /*eslint-disable max-len*/
  var UNICODE_PUNCT_RE = regex$4;

  // Currently without astral characters support.
  function isPunctChar(ch) {
    return UNICODE_PUNCT_RE.test(ch);
  }


  // Markdown ASCII punctuation characters.
  //
  // !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, or ~
  // http://spec.commonmark.org/0.15/#ascii-punctuation-character
  //
  // Don't confuse with unicode punctuation !!! It lacks some chars in ascii range.
  //
  function isMdAsciiPunct(ch) {
    switch (ch) {
      case 0x21/* ! */:
      case 0x22/* " */:
      case 0x23/* # */:
      case 0x24/* $ */:
      case 0x25/* % */:
      case 0x26/* & */:
      case 0x27/* ' */:
      case 0x28/* ( */:
      case 0x29/* ) */:
      case 0x2A/* * */:
      case 0x2B/* + */:
      case 0x2C/* , */:
      case 0x2D/* - */:
      case 0x2E/* . */:
      case 0x2F/* / */:
      case 0x3A/* : */:
      case 0x3B/* ; */:
      case 0x3C/* < */:
      case 0x3D/* = */:
      case 0x3E/* > */:
      case 0x3F/* ? */:
      case 0x40/* @ */:
      case 0x5B/* [ */:
      case 0x5C/* \ */:
      case 0x5D/* ] */:
      case 0x5E/* ^ */:
      case 0x5F/* _ */:
      case 0x60/* ` */:
      case 0x7B/* { */:
      case 0x7C/* | */:
      case 0x7D/* } */:
      case 0x7E/* ~ */:
        return true;
      default:
        return false;
    }
  }

  // Hepler to unify [reference labels].
  //
  function normalizeReference(str) {
    // Trim and collapse whitespace
    //
    str = str.trim().replace(/\s+/g, ' ');

    // In node v10 'ẞ'.toLowerCase() === 'Ṿ', which is presumed to be a bug
    // fixed in v12 (couldn't find any details).
    //
    // So treat this one as a special case
    // (remove this when node v10 is no longer supported).
    //
    if ('ẞ'.toLowerCase() === 'Ṿ') {
      str = str.replace(/ẞ/g, 'ß');
    }

    // .toLowerCase().toUpperCase() should get rid of all differences
    // between letter variants.
    //
    // Simple .toLowerCase() doesn't normalize 125 code points correctly,
    // and .toUpperCase doesn't normalize 6 of them (list of exceptions:
    // İ, ϴ, ẞ, Ω, K, Å - those are already uppercased, but have differently
    // uppercased versions).
    //
    // Here's an example showing how it happens. Lets take greek letter omega:
    // uppercase U+0398 (Θ), U+03f4 (ϴ) and lowercase U+03b8 (θ), U+03d1 (ϑ)
    //
    // Unicode entries:
    // 0398;GREEK CAPITAL LETTER THETA;Lu;0;L;;;;;N;;;;03B8;
    // 03B8;GREEK SMALL LETTER THETA;Ll;0;L;;;;;N;;;0398;;0398
    // 03D1;GREEK THETA SYMBOL;Ll;0;L;<compat> 03B8;;;;N;GREEK SMALL LETTER SCRIPT THETA;;0398;;0398
    // 03F4;GREEK CAPITAL THETA SYMBOL;Lu;0;L;<compat> 0398;;;;N;;;;03B8;
    //
    // Case-insensitive comparison should treat all of them as equivalent.
    //
    // But .toLowerCase() doesn't change ϑ (it's already lowercase),
    // and .toUpperCase() doesn't change ϴ (already uppercase).
    //
    // Applying first lower then upper case normalizes any character:
    // '\u0398\u03f4\u03b8\u03d1'.toLowerCase().toUpperCase() === '\u0398\u0398\u0398\u0398'
    //
    // Note: this is equivalent to unicode case folding; unicode normalization
    // is a different step that is not required here.
    //
    // Final result should be uppercased, because it's later stored in an object
    // (this avoid a conflict with Object.prototype members,
    // most notably, `__proto__`)
    //
    return str.toLowerCase().toUpperCase();
  }

  ////////////////////////////////////////////////////////////////////////////////

  // Re-export libraries commonly used in both markdown-it and its plugins,
  // so plugins won't have to depend on them explicitly, which reduces their
  // bundled size (e.g. a browser build).
  //
  exports.lib                 = {};
  exports.lib.mdurl           = mdurl$1;
  exports.lib.ucmicro         = uc_micro;

  exports.assign              = assign;
  exports.isString            = isString;
  exports.has                 = has;
  exports.unescapeMd          = unescapeMd;
  exports.unescapeAll         = unescapeAll;
  exports.isValidEntityCode   = isValidEntityCode;
  exports.fromCodePoint       = fromCodePoint;
  // exports.replaceEntities     = replaceEntities;
  exports.escapeHtml          = escapeHtml;
  exports.arrayReplaceAt      = arrayReplaceAt;
  exports.isSpace             = isSpace;
  exports.isWhiteSpace        = isWhiteSpace;
  exports.isMdAsciiPunct      = isMdAsciiPunct;
  exports.isPunctChar         = isPunctChar;
  exports.escapeRE            = escapeRE;
  exports.normalizeReference  = normalizeReference;
  }(utils$1));

  var helpers$1 = {};

  var parse_link_label = function parseLinkLabel(state, start, disableNested) {
    var level, found, marker, prevPos,
        labelEnd = -1,
        max = state.posMax,
        oldPos = state.pos;

    state.pos = start + 1;
    level = 1;

    while (state.pos < max) {
      marker = state.src.charCodeAt(state.pos);
      if (marker === 0x5D /* ] */) {
        level--;
        if (level === 0) {
          found = true;
          break;
        }
      }

      prevPos = state.pos;
      state.md.inline.skipToken(state);
      if (marker === 0x5B /* [ */) {
        if (prevPos === state.pos - 1) {
          // increase level if we find text `[`, which is not a part of any token
          level++;
        } else if (disableNested) {
          state.pos = oldPos;
          return -1;
        }
      }
    }

    if (found) {
      labelEnd = state.pos;
    }

    // restore old state
    state.pos = oldPos;

    return labelEnd;
  };

  var unescapeAll$2 = utils$1.unescapeAll;


  var parse_link_destination = function parseLinkDestination(str, pos, max) {
    var code, level,
        lines = 0,
        start = pos,
        result = {
          ok: false,
          pos: 0,
          lines: 0,
          str: ''
        };

    if (str.charCodeAt(pos) === 0x3C /* < */) {
      pos++;
      while (pos < max) {
        code = str.charCodeAt(pos);
        if (code === 0x0A /* \n */) { return result; }
        if (code === 0x3C /* < */) { return result; }
        if (code === 0x3E /* > */) {
          result.pos = pos + 1;
          result.str = unescapeAll$2(str.slice(start + 1, pos));
          result.ok = true;
          return result;
        }
        if (code === 0x5C /* \ */ && pos + 1 < max) {
          pos += 2;
          continue;
        }

        pos++;
      }

      // no closing '>'
      return result;
    }

    // this should be ... } else { ... branch

    level = 0;
    while (pos < max) {
      code = str.charCodeAt(pos);

      if (code === 0x20) { break; }

      // ascii control characters
      if (code < 0x20 || code === 0x7F) { break; }

      if (code === 0x5C /* \ */ && pos + 1 < max) {
        if (str.charCodeAt(pos + 1) === 0x20) { break; }
        pos += 2;
        continue;
      }

      if (code === 0x28 /* ( */) {
        level++;
        if (level > 32) { return result; }
      }

      if (code === 0x29 /* ) */) {
        if (level === 0) { break; }
        level--;
      }

      pos++;
    }

    if (start === pos) { return result; }
    if (level !== 0) { return result; }

    result.str = unescapeAll$2(str.slice(start, pos));
    result.lines = lines;
    result.pos = pos;
    result.ok = true;
    return result;
  };

  var unescapeAll$1 = utils$1.unescapeAll;


  var parse_link_title = function parseLinkTitle(str, pos, max) {
    var code,
        marker,
        lines = 0,
        start = pos,
        result = {
          ok: false,
          pos: 0,
          lines: 0,
          str: ''
        };

    if (pos >= max) { return result; }

    marker = str.charCodeAt(pos);

    if (marker !== 0x22 /* " */ && marker !== 0x27 /* ' */ && marker !== 0x28 /* ( */) { return result; }

    pos++;

    // if opening marker is "(", switch it to closing marker ")"
    if (marker === 0x28) { marker = 0x29; }

    while (pos < max) {
      code = str.charCodeAt(pos);
      if (code === marker) {
        result.pos = pos + 1;
        result.lines = lines;
        result.str = unescapeAll$1(str.slice(start + 1, pos));
        result.ok = true;
        return result;
      } else if (code === 0x28 /* ( */ && marker === 0x29 /* ) */) {
        return result;
      } else if (code === 0x0A) {
        lines++;
      } else if (code === 0x5C /* \ */ && pos + 1 < max) {
        pos++;
        if (str.charCodeAt(pos) === 0x0A) {
          lines++;
        }
      }

      pos++;
    }

    return result;
  };

  helpers$1.parseLinkLabel       = parse_link_label;
  helpers$1.parseLinkDestination = parse_link_destination;
  helpers$1.parseLinkTitle       = parse_link_title;

  /**
   * class Renderer
   *
   * Generates HTML from parsed token stream. Each instance has independent
   * copy of rules. Those can be rewritten with ease. Also, you can add new
   * rules if you create plugin and adds new token types.
   **/


  var assign$1          = utils$1.assign;
  var unescapeAll     = utils$1.unescapeAll;
  var escapeHtml      = utils$1.escapeHtml;


  ////////////////////////////////////////////////////////////////////////////////

  var default_rules = {};


  default_rules.code_inline = function (tokens, idx, options, env, slf) {
    var token = tokens[idx];

    return  '<code' + slf.renderAttrs(token) + '>' +
            escapeHtml(tokens[idx].content) +
            '</code>';
  };


  default_rules.code_block = function (tokens, idx, options, env, slf) {
    var token = tokens[idx];

    return  '<pre' + slf.renderAttrs(token) + '><code>' +
            escapeHtml(tokens[idx].content) +
            '</code></pre>\n';
  };


  default_rules.fence = function (tokens, idx, options, env, slf) {
    var token = tokens[idx],
        info = token.info ? unescapeAll(token.info).trim() : '',
        langName = '',
        langAttrs = '',
        highlighted, i, arr, tmpAttrs, tmpToken;

    if (info) {
      arr = info.split(/(\s+)/g);
      langName = arr[0];
      langAttrs = arr.slice(2).join('');
    }

    if (options.highlight) {
      highlighted = options.highlight(token.content, langName, langAttrs) || escapeHtml(token.content);
    } else {
      highlighted = escapeHtml(token.content);
    }

    if (highlighted.indexOf('<pre') === 0) {
      return highlighted + '\n';
    }

    // If language exists, inject class gently, without modifying original token.
    // May be, one day we will add .deepClone() for token and simplify this part, but
    // now we prefer to keep things local.
    if (info) {
      i        = token.attrIndex('class');
      tmpAttrs = token.attrs ? token.attrs.slice() : [];

      if (i < 0) {
        tmpAttrs.push([ 'class', options.langPrefix + langName ]);
      } else {
        tmpAttrs[i] = tmpAttrs[i].slice();
        tmpAttrs[i][1] += ' ' + options.langPrefix + langName;
      }

      // Fake token just to render attributes
      tmpToken = {
        attrs: tmpAttrs
      };

      return  '<pre><code' + slf.renderAttrs(tmpToken) + '>'
            + highlighted
            + '</code></pre>\n';
    }


    return  '<pre><code' + slf.renderAttrs(token) + '>'
          + highlighted
          + '</code></pre>\n';
  };


  default_rules.image = function (tokens, idx, options, env, slf) {
    var token = tokens[idx];

    // "alt" attr MUST be set, even if empty. Because it's mandatory and
    // should be placed on proper position for tests.
    //
    // Replace content with actual value

    token.attrs[token.attrIndex('alt')][1] =
      slf.renderInlineAsText(token.children, options, env);

    return slf.renderToken(tokens, idx, options);
  };


  default_rules.hardbreak = function (tokens, idx, options /*, env */) {
    return options.xhtmlOut ? '<br />\n' : '<br>\n';
  };
  default_rules.softbreak = function (tokens, idx, options /*, env */) {
    return options.breaks ? (options.xhtmlOut ? '<br />\n' : '<br>\n') : '\n';
  };


  default_rules.text = function (tokens, idx /*, options, env */) {
    return escapeHtml(tokens[idx].content);
  };


  default_rules.html_block = function (tokens, idx /*, options, env */) {
    return tokens[idx].content;
  };
  default_rules.html_inline = function (tokens, idx /*, options, env */) {
    return tokens[idx].content;
  };


  /**
   * new Renderer()
   *
   * Creates new [[Renderer]] instance and fill [[Renderer#rules]] with defaults.
   **/
  function Renderer$1() {

    /**
     * Renderer#rules -> Object
     *
     * Contains render rules for tokens. Can be updated and extended.
     *
     * ##### Example
     *
     * ```javascript
     * var md = require('markdown-it')();
     *
     * md.renderer.rules.strong_open  = function () { return '<b>'; };
     * md.renderer.rules.strong_close = function () { return '</b>'; };
     *
     * var result = md.renderInline(...);
     * ```
     *
     * Each rule is called as independent static function with fixed signature:
     *
     * ```javascript
     * function my_token_render(tokens, idx, options, env, renderer) {
     *   // ...
     *   return renderedHTML;
     * }
     * ```
     *
     * See [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js)
     * for more details and examples.
     **/
    this.rules = assign$1({}, default_rules);
  }


  /**
   * Renderer.renderAttrs(token) -> String
   *
   * Render token attributes to string.
   **/
  Renderer$1.prototype.renderAttrs = function renderAttrs(token) {
    var i, l, result;

    if (!token.attrs) { return ''; }

    result = '';

    for (i = 0, l = token.attrs.length; i < l; i++) {
      result += ' ' + escapeHtml(token.attrs[i][0]) + '="' + escapeHtml(token.attrs[i][1]) + '"';
    }

    return result;
  };


  /**
   * Renderer.renderToken(tokens, idx, options) -> String
   * - tokens (Array): list of tokens
   * - idx (Numbed): token index to render
   * - options (Object): params of parser instance
   *
   * Default token renderer. Can be overriden by custom function
   * in [[Renderer#rules]].
   **/
  Renderer$1.prototype.renderToken = function renderToken(tokens, idx, options) {
    var nextToken,
        result = '',
        needLf = false,
        token = tokens[idx];

    // Tight list paragraphs
    if (token.hidden) {
      return '';
    }

    // Insert a newline between hidden paragraph and subsequent opening
    // block-level tag.
    //
    // For example, here we should insert a newline before blockquote:
    //  - a
    //    >
    //
    if (token.block && token.nesting !== -1 && idx && tokens[idx - 1].hidden) {
      result += '\n';
    }

    // Add token name, e.g. `<img`
    result += (token.nesting === -1 ? '</' : '<') + token.tag;

    // Encode attributes, e.g. `<img src="foo"`
    result += this.renderAttrs(token);

    // Add a slash for self-closing tags, e.g. `<img src="foo" /`
    if (token.nesting === 0 && options.xhtmlOut) {
      result += ' /';
    }

    // Check if we need to add a newline after this tag
    if (token.block) {
      needLf = true;

      if (token.nesting === 1) {
        if (idx + 1 < tokens.length) {
          nextToken = tokens[idx + 1];

          if (nextToken.type === 'inline' || nextToken.hidden) {
            // Block-level tag containing an inline tag.
            //
            needLf = false;

          } else if (nextToken.nesting === -1 && nextToken.tag === token.tag) {
            // Opening tag + closing tag of the same type. E.g. `<li></li>`.
            //
            needLf = false;
          }
        }
      }
    }

    result += needLf ? '>\n' : '>';

    return result;
  };


  /**
   * Renderer.renderInline(tokens, options, env) -> String
   * - tokens (Array): list on block tokens to render
   * - options (Object): params of parser instance
   * - env (Object): additional data from parsed input (references, for example)
   *
   * The same as [[Renderer.render]], but for single token of `inline` type.
   **/
  Renderer$1.prototype.renderInline = function (tokens, options, env) {
    var type,
        result = '',
        rules = this.rules;

    for (var i = 0, len = tokens.length; i < len; i++) {
      type = tokens[i].type;

      if (typeof rules[type] !== 'undefined') {
        result += rules[type](tokens, i, options, env, this);
      } else {
        result += this.renderToken(tokens, i, options);
      }
    }

    return result;
  };


  /** internal
   * Renderer.renderInlineAsText(tokens, options, env) -> String
   * - tokens (Array): list on block tokens to render
   * - options (Object): params of parser instance
   * - env (Object): additional data from parsed input (references, for example)
   *
   * Special kludge for image `alt` attributes to conform CommonMark spec.
   * Don't try to use it! Spec requires to show `alt` content with stripped markup,
   * instead of simple escaping.
   **/
  Renderer$1.prototype.renderInlineAsText = function (tokens, options, env) {
    var result = '';

    for (var i = 0, len = tokens.length; i < len; i++) {
      if (tokens[i].type === 'text') {
        result += tokens[i].content;
      } else if (tokens[i].type === 'image') {
        result += this.renderInlineAsText(tokens[i].children, options, env);
      } else if (tokens[i].type === 'softbreak') {
        result += '\n';
      }
    }

    return result;
  };


  /**
   * Renderer.render(tokens, options, env) -> String
   * - tokens (Array): list on block tokens to render
   * - options (Object): params of parser instance
   * - env (Object): additional data from parsed input (references, for example)
   *
   * Takes token stream and generates HTML. Probably, you will never need to call
   * this method directly.
   **/
  Renderer$1.prototype.render = function (tokens, options, env) {
    var i, len, type,
        result = '',
        rules = this.rules;

    for (i = 0, len = tokens.length; i < len; i++) {
      type = tokens[i].type;

      if (type === 'inline') {
        result += this.renderInline(tokens[i].children, options, env);
      } else if (typeof rules[type] !== 'undefined') {
        result += rules[tokens[i].type](tokens, i, options, env, this);
      } else {
        result += this.renderToken(tokens, i, options, env);
      }
    }

    return result;
  };

  var renderer = Renderer$1;

  /**
   * class Ruler
   *
   * Helper class, used by [[MarkdownIt#core]], [[MarkdownIt#block]] and
   * [[MarkdownIt#inline]] to manage sequences of functions (rules):
   *
   * - keep rules in defined order
   * - assign the name to each rule
   * - enable/disable rules
   * - add/replace rules
   * - allow assign rules to additional named chains (in the same)
   * - cacheing lists of active rules
   *
   * You will not need use this class directly until write plugins. For simple
   * rules control use [[MarkdownIt.disable]], [[MarkdownIt.enable]] and
   * [[MarkdownIt.use]].
   **/


  /**
   * new Ruler()
   **/
  function Ruler$3() {
    // List of added rules. Each element is:
    //
    // {
    //   name: XXX,
    //   enabled: Boolean,
    //   fn: Function(),
    //   alt: [ name2, name3 ]
    // }
    //
    this.__rules__ = [];

    // Cached rule chains.
    //
    // First level - chain name, '' for default.
    // Second level - diginal anchor for fast filtering by charcodes.
    //
    this.__cache__ = null;
  }

  ////////////////////////////////////////////////////////////////////////////////
  // Helper methods, should not be used directly


  // Find rule index by name
  //
  Ruler$3.prototype.__find__ = function (name) {
    for (var i = 0; i < this.__rules__.length; i++) {
      if (this.__rules__[i].name === name) {
        return i;
      }
    }
    return -1;
  };


  // Build rules lookup cache
  //
  Ruler$3.prototype.__compile__ = function () {
    var self = this;
    var chains = [ '' ];

    // collect unique names
    self.__rules__.forEach(function (rule) {
      if (!rule.enabled) { return; }

      rule.alt.forEach(function (altName) {
        if (chains.indexOf(altName) < 0) {
          chains.push(altName);
        }
      });
    });

    self.__cache__ = {};

    chains.forEach(function (chain) {
      self.__cache__[chain] = [];
      self.__rules__.forEach(function (rule) {
        if (!rule.enabled) { return; }

        if (chain && rule.alt.indexOf(chain) < 0) { return; }

        self.__cache__[chain].push(rule.fn);
      });
    });
  };


  /**
   * Ruler.at(name, fn [, options])
   * - name (String): rule name to replace.
   * - fn (Function): new rule function.
   * - options (Object): new rule options (not mandatory).
   *
   * Replace rule by name with new function & options. Throws error if name not
   * found.
   *
   * ##### Options:
   *
   * - __alt__ - array with names of "alternate" chains.
   *
   * ##### Example
   *
   * Replace existing typographer replacement rule with new one:
   *
   * ```javascript
   * var md = require('markdown-it')();
   *
   * md.core.ruler.at('replacements', function replace(state) {
   *   //...
   * });
   * ```
   **/
  Ruler$3.prototype.at = function (name, fn, options) {
    var index = this.__find__(name);
    var opt = options || {};

    if (index === -1) { throw new Error('Parser rule not found: ' + name); }

    this.__rules__[index].fn = fn;
    this.__rules__[index].alt = opt.alt || [];
    this.__cache__ = null;
  };


  /**
   * Ruler.before(beforeName, ruleName, fn [, options])
   * - beforeName (String): new rule will be added before this one.
   * - ruleName (String): name of added rule.
   * - fn (Function): rule function.
   * - options (Object): rule options (not mandatory).
   *
   * Add new rule to chain before one with given name. See also
   * [[Ruler.after]], [[Ruler.push]].
   *
   * ##### Options:
   *
   * - __alt__ - array with names of "alternate" chains.
   *
   * ##### Example
   *
   * ```javascript
   * var md = require('markdown-it')();
   *
   * md.block.ruler.before('paragraph', 'my_rule', function replace(state) {
   *   //...
   * });
   * ```
   **/
  Ruler$3.prototype.before = function (beforeName, ruleName, fn, options) {
    var index = this.__find__(beforeName);
    var opt = options || {};

    if (index === -1) { throw new Error('Parser rule not found: ' + beforeName); }

    this.__rules__.splice(index, 0, {
      name: ruleName,
      enabled: true,
      fn: fn,
      alt: opt.alt || []
    });

    this.__cache__ = null;
  };


  /**
   * Ruler.after(afterName, ruleName, fn [, options])
   * - afterName (String): new rule will be added after this one.
   * - ruleName (String): name of added rule.
   * - fn (Function): rule function.
   * - options (Object): rule options (not mandatory).
   *
   * Add new rule to chain after one with given name. See also
   * [[Ruler.before]], [[Ruler.push]].
   *
   * ##### Options:
   *
   * - __alt__ - array with names of "alternate" chains.
   *
   * ##### Example
   *
   * ```javascript
   * var md = require('markdown-it')();
   *
   * md.inline.ruler.after('text', 'my_rule', function replace(state) {
   *   //...
   * });
   * ```
   **/
  Ruler$3.prototype.after = function (afterName, ruleName, fn, options) {
    var index = this.__find__(afterName);
    var opt = options || {};

    if (index === -1) { throw new Error('Parser rule not found: ' + afterName); }

    this.__rules__.splice(index + 1, 0, {
      name: ruleName,
      enabled: true,
      fn: fn,
      alt: opt.alt || []
    });

    this.__cache__ = null;
  };

  /**
   * Ruler.push(ruleName, fn [, options])
   * - ruleName (String): name of added rule.
   * - fn (Function): rule function.
   * - options (Object): rule options (not mandatory).
   *
   * Push new rule to the end of chain. See also
   * [[Ruler.before]], [[Ruler.after]].
   *
   * ##### Options:
   *
   * - __alt__ - array with names of "alternate" chains.
   *
   * ##### Example
   *
   * ```javascript
   * var md = require('markdown-it')();
   *
   * md.core.ruler.push('my_rule', function replace(state) {
   *   //...
   * });
   * ```
   **/
  Ruler$3.prototype.push = function (ruleName, fn, options) {
    var opt = options || {};

    this.__rules__.push({
      name: ruleName,
      enabled: true,
      fn: fn,
      alt: opt.alt || []
    });

    this.__cache__ = null;
  };


  /**
   * Ruler.enable(list [, ignoreInvalid]) -> Array
   * - list (String|Array): list of rule names to enable.
   * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
   *
   * Enable rules with given names. If any rule name not found - throw Error.
   * Errors can be disabled by second param.
   *
   * Returns list of found rule names (if no exception happened).
   *
   * See also [[Ruler.disable]], [[Ruler.enableOnly]].
   **/
  Ruler$3.prototype.enable = function (list, ignoreInvalid) {
    if (!Array.isArray(list)) { list = [ list ]; }

    var result = [];

    // Search by name and enable
    list.forEach(function (name) {
      var idx = this.__find__(name);

      if (idx < 0) {
        if (ignoreInvalid) { return; }
        throw new Error('Rules manager: invalid rule name ' + name);
      }
      this.__rules__[idx].enabled = true;
      result.push(name);
    }, this);

    this.__cache__ = null;
    return result;
  };


  /**
   * Ruler.enableOnly(list [, ignoreInvalid])
   * - list (String|Array): list of rule names to enable (whitelist).
   * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
   *
   * Enable rules with given names, and disable everything else. If any rule name
   * not found - throw Error. Errors can be disabled by second param.
   *
   * See also [[Ruler.disable]], [[Ruler.enable]].
   **/
  Ruler$3.prototype.enableOnly = function (list, ignoreInvalid) {
    if (!Array.isArray(list)) { list = [ list ]; }

    this.__rules__.forEach(function (rule) { rule.enabled = false; });

    this.enable(list, ignoreInvalid);
  };


  /**
   * Ruler.disable(list [, ignoreInvalid]) -> Array
   * - list (String|Array): list of rule names to disable.
   * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
   *
   * Disable rules with given names. If any rule name not found - throw Error.
   * Errors can be disabled by second param.
   *
   * Returns list of found rule names (if no exception happened).
   *
   * See also [[Ruler.enable]], [[Ruler.enableOnly]].
   **/
  Ruler$3.prototype.disable = function (list, ignoreInvalid) {
    if (!Array.isArray(list)) { list = [ list ]; }

    var result = [];

    // Search by name and disable
    list.forEach(function (name) {
      var idx = this.__find__(name);

      if (idx < 0) {
        if (ignoreInvalid) { return; }
        throw new Error('Rules manager: invalid rule name ' + name);
      }
      this.__rules__[idx].enabled = false;
      result.push(name);
    }, this);

    this.__cache__ = null;
    return result;
  };


  /**
   * Ruler.getRules(chainName) -> Array
   *
   * Return array of active functions (rules) for given chain name. It analyzes
   * rules configuration, compiles caches if not exists and returns result.
   *
   * Default chain name is `''` (empty string). It can't be skipped. That's
   * done intentionally, to keep signature monomorphic for high speed.
   **/
  Ruler$3.prototype.getRules = function (chainName) {
    if (this.__cache__ === null) {
      this.__compile__();
    }

    // Chain can be empty, if rules disabled. But we still have to return Array.
    return this.__cache__[chainName] || [];
  };

  var ruler = Ruler$3;

  // https://spec.commonmark.org/0.29/#line-ending
  var NEWLINES_RE  = /\r\n?|\n/g;
  var NULL_RE      = /\0/g;


  var normalize = function normalize(state) {
    var str;

    // Normalize newlines
    str = state.src.replace(NEWLINES_RE, '\n');

    // Replace NULL characters
    str = str.replace(NULL_RE, '\uFFFD');

    state.src = str;
  };

  var block = function block(state) {
    var token;

    if (state.inlineMode) {
      token          = new state.Token('inline', '', 0);
      token.content  = state.src;
      token.map      = [ 0, 1 ];
      token.children = [];
      state.tokens.push(token);
    } else {
      state.md.block.parse(state.src, state.md, state.env, state.tokens);
    }
  };

  var inline = function inline(state) {
    var tokens = state.tokens, tok, i, l;

    // Parse inlines
    for (i = 0, l = tokens.length; i < l; i++) {
      tok = tokens[i];
      if (tok.type === 'inline') {
        state.md.inline.parse(tok.content, state.md, state.env, tok.children);
      }
    }
  };

  var arrayReplaceAt = utils$1.arrayReplaceAt;


  function isLinkOpen(str) {
    return /^<a[>\s]/i.test(str);
  }
  function isLinkClose(str) {
    return /^<\/a\s*>/i.test(str);
  }


  var linkify = function linkify(state) {
    var i, j, l, tokens, token, currentToken, nodes, ln, text, pos, lastPos,
        level, htmlLinkLevel, url, fullUrl, urlText,
        blockTokens = state.tokens,
        links;

    if (!state.md.options.linkify) { return; }

    for (j = 0, l = blockTokens.length; j < l; j++) {
      if (blockTokens[j].type !== 'inline' ||
          !state.md.linkify.pretest(blockTokens[j].content)) {
        continue;
      }

      tokens = blockTokens[j].children;

      htmlLinkLevel = 0;

      // We scan from the end, to keep position when new tags added.
      // Use reversed logic in links start/end match
      for (i = tokens.length - 1; i >= 0; i--) {
        currentToken = tokens[i];

        // Skip content of markdown links
        if (currentToken.type === 'link_close') {
          i--;
          while (tokens[i].level !== currentToken.level && tokens[i].type !== 'link_open') {
            i--;
          }
          continue;
        }

        // Skip content of html tag links
        if (currentToken.type === 'html_inline') {
          if (isLinkOpen(currentToken.content) && htmlLinkLevel > 0) {
            htmlLinkLevel--;
          }
          if (isLinkClose(currentToken.content)) {
            htmlLinkLevel++;
          }
        }
        if (htmlLinkLevel > 0) { continue; }

        if (currentToken.type === 'text' && state.md.linkify.test(currentToken.content)) {

          text = currentToken.content;
          links = state.md.linkify.match(text);

          // Now split string to nodes
          nodes = [];
          level = currentToken.level;
          lastPos = 0;

          for (ln = 0; ln < links.length; ln++) {

            url = links[ln].url;
            fullUrl = state.md.normalizeLink(url);
            if (!state.md.validateLink(fullUrl)) { continue; }

            urlText = links[ln].text;

            // Linkifier might send raw hostnames like "example.com", where url
            // starts with domain name. So we prepend http:// in those cases,
            // and remove it afterwards.
            //
            if (!links[ln].schema) {
              urlText = state.md.normalizeLinkText('http://' + urlText).replace(/^http:\/\//, '');
            } else if (links[ln].schema === 'mailto:' && !/^mailto:/i.test(urlText)) {
              urlText = state.md.normalizeLinkText('mailto:' + urlText).replace(/^mailto:/, '');
            } else {
              urlText = state.md.normalizeLinkText(urlText);
            }

            pos = links[ln].index;

            if (pos > lastPos) {
              token         = new state.Token('text', '', 0);
              token.content = text.slice(lastPos, pos);
              token.level   = level;
              nodes.push(token);
            }

            token         = new state.Token('link_open', 'a', 1);
            token.attrs   = [ [ 'href', fullUrl ] ];
            token.level   = level++;
            token.markup  = 'linkify';
            token.info    = 'auto';
            nodes.push(token);

            token         = new state.Token('text', '', 0);
            token.content = urlText;
            token.level   = level;
            nodes.push(token);

            token         = new state.Token('link_close', 'a', -1);
            token.level   = --level;
            token.markup  = 'linkify';
            token.info    = 'auto';
            nodes.push(token);

            lastPos = links[ln].lastIndex;
          }
          if (lastPos < text.length) {
            token         = new state.Token('text', '', 0);
            token.content = text.slice(lastPos);
            token.level   = level;
            nodes.push(token);
          }

          // replace current node
          blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes);
        }
      }
    }
  };

  // TODO:
  // - fractionals 1/2, 1/4, 3/4 -> ½, ¼, ¾
  // - miltiplication 2 x 4 -> 2 × 4

  var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;

  // Workaround for phantomjs - need regex without /g flag,
  // or root check will fail every second time
  var SCOPED_ABBR_TEST_RE = /\((c|tm|r|p)\)/i;

  var SCOPED_ABBR_RE = /\((c|tm|r|p)\)/ig;
  var SCOPED_ABBR = {
    c: '©',
    r: '®',
    p: '§',
    tm: '™'
  };

  function replaceFn(match, name) {
    return SCOPED_ABBR[name.toLowerCase()];
  }

  function replace_scoped(inlineTokens) {
    var i, token, inside_autolink = 0;

    for (i = inlineTokens.length - 1; i >= 0; i--) {
      token = inlineTokens[i];

      if (token.type === 'text' && !inside_autolink) {
        token.content = token.content.replace(SCOPED_ABBR_RE, replaceFn);
      }

      if (token.type === 'link_open' && token.info === 'auto') {
        inside_autolink--;
      }

      if (token.type === 'link_close' && token.info === 'auto') {
        inside_autolink++;
      }
    }
  }

  function replace_rare(inlineTokens) {
    var i, token, inside_autolink = 0;

    for (i = inlineTokens.length - 1; i >= 0; i--) {
      token = inlineTokens[i];

      if (token.type === 'text' && !inside_autolink) {
        if (RARE_RE.test(token.content)) {
          token.content = token.content
            .replace(/\+-/g, '±')
            // .., ..., ....... -> …
            // but ?..... & !..... -> ?.. & !..
            .replace(/\.{2,}/g, '…').replace(/([?!])…/g, '$1..')
            .replace(/([?!]){4,}/g, '$1$1$1').replace(/,{2,}/g, ',')
            // em-dash
            .replace(/(^|[^-])---(?=[^-]|$)/mg, '$1\u2014')
            // en-dash
            .replace(/(^|\s)--(?=\s|$)/mg, '$1\u2013')
            .replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, '$1\u2013');
        }
      }

      if (token.type === 'link_open' && token.info === 'auto') {
        inside_autolink--;
      }

      if (token.type === 'link_close' && token.info === 'auto') {
        inside_autolink++;
      }
    }
  }


  var replacements = function replace(state) {
    var blkIdx;

    if (!state.md.options.typographer) { return; }

    for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {

      if (state.tokens[blkIdx].type !== 'inline') { continue; }

      if (SCOPED_ABBR_TEST_RE.test(state.tokens[blkIdx].content)) {
        replace_scoped(state.tokens[blkIdx].children);
      }

      if (RARE_RE.test(state.tokens[blkIdx].content)) {
        replace_rare(state.tokens[blkIdx].children);
      }

    }
  };

  var isWhiteSpace$1   = utils$1.isWhiteSpace;
  var isPunctChar$1    = utils$1.isPunctChar;
  var isMdAsciiPunct$1 = utils$1.isMdAsciiPunct;

  var QUOTE_TEST_RE = /['"]/;
  var QUOTE_RE = /['"]/g;
  var APOSTROPHE = '\u2019'; /* ’ */


  function replaceAt(str, index, ch) {
    return str.substr(0, index) + ch + str.substr(index + 1);
  }

  function process_inlines(tokens, state) {
    var i, token, text, t, pos, max, thisLevel, item, lastChar, nextChar,
        isLastPunctChar, isNextPunctChar, isLastWhiteSpace, isNextWhiteSpace,
        canOpen, canClose, j, isSingle, stack, openQuote, closeQuote;

    stack = [];

    for (i = 0; i < tokens.length; i++) {
      token = tokens[i];

      thisLevel = tokens[i].level;

      for (j = stack.length - 1; j >= 0; j--) {
        if (stack[j].level <= thisLevel) { break; }
      }
      stack.length = j + 1;

      if (token.type !== 'text') { continue; }

      text = token.content;
      pos = 0;
      max = text.length;

      /*eslint no-labels:0,block-scoped-var:0*/
      OUTER:
      while (pos < max) {
        QUOTE_RE.lastIndex = pos;
        t = QUOTE_RE.exec(text);
        if (!t) { break; }

        canOpen = canClose = true;
        pos = t.index + 1;
        isSingle = (t[0] === "'");

        // Find previous character,
        // default to space if it's the beginning of the line
        //
        lastChar = 0x20;

        if (t.index - 1 >= 0) {
          lastChar = text.charCodeAt(t.index - 1);
        } else {
          for (j = i - 1; j >= 0; j--) {
            if (tokens[j].type === 'softbreak' || tokens[j].type === 'hardbreak') break; // lastChar defaults to 0x20
            if (!tokens[j].content) continue; // should skip all tokens except 'text', 'html_inline' or 'code_inline'

            lastChar = tokens[j].content.charCodeAt(tokens[j].content.length - 1);
            break;
          }
        }

        // Find next character,
        // default to space if it's the end of the line
        //
        nextChar = 0x20;

        if (pos < max) {
          nextChar = text.charCodeAt(pos);
        } else {
          for (j = i + 1; j < tokens.length; j++) {
            if (tokens[j].type === 'softbreak' || tokens[j].type === 'hardbreak') break; // nextChar defaults to 0x20
            if (!tokens[j].content) continue; // should skip all tokens except 'text', 'html_inline' or 'code_inline'

            nextChar = tokens[j].content.charCodeAt(0);
            break;
          }
        }

        isLastPunctChar = isMdAsciiPunct$1(lastChar) || isPunctChar$1(String.fromCharCode(lastChar));
        isNextPunctChar = isMdAsciiPunct$1(nextChar) || isPunctChar$1(String.fromCharCode(nextChar));

        isLastWhiteSpace = isWhiteSpace$1(lastChar);
        isNextWhiteSpace = isWhiteSpace$1(nextChar);

        if (isNextWhiteSpace) {
          canOpen = false;
        } else if (isNextPunctChar) {
          if (!(isLastWhiteSpace || isLastPunctChar)) {
            canOpen = false;
          }
        }

        if (isLastWhiteSpace) {
          canClose = false;
        } else if (isLastPunctChar) {
          if (!(isNextWhiteSpace || isNextPunctChar)) {
            canClose = false;
          }
        }

        if (nextChar === 0x22 /* " */ && t[0] === '"') {
          if (lastChar >= 0x30 /* 0 */ && lastChar <= 0x39 /* 9 */) {
            // special case: 1"" - count first quote as an inch
            canClose = canOpen = false;
          }
        }

        if (canOpen && canClose) {
          // Replace quotes in the middle of punctuation sequence, but not
          // in the middle of the words, i.e.:
          //
          // 1. foo " bar " baz - not replaced
          // 2. foo-"-bar-"-baz - replaced
          // 3. foo"bar"baz     - not replaced
          //
          canOpen = isLastPunctChar;
          canClose = isNextPunctChar;
        }

        if (!canOpen && !canClose) {
          // middle of word
          if (isSingle) {
            token.content = replaceAt(token.content, t.index, APOSTROPHE);
          }
          continue;
        }

        if (canClose) {
          // this could be a closing quote, rewind the stack to get a match
          for (j = stack.length - 1; j >= 0; j--) {
            item = stack[j];
            if (stack[j].level < thisLevel) { break; }
            if (item.single === isSingle && stack[j].level === thisLevel) {
              item = stack[j];

              if (isSingle) {
                openQuote = state.md.options.quotes[2];
                closeQuote = state.md.options.quotes[3];
              } else {
                openQuote = state.md.options.quotes[0];
                closeQuote = state.md.options.quotes[1];
              }

              // replace token.content *before* tokens[item.token].content,
              // because, if they are pointing at the same token, replaceAt
              // could mess up indices when quote length != 1
              token.content = replaceAt(token.content, t.index, closeQuote);
              tokens[item.token].content = replaceAt(
                tokens[item.token].content, item.pos, openQuote);

              pos += closeQuote.length - 1;
              if (item.token === i) { pos += openQuote.length - 1; }

              text = token.content;
              max = text.length;

              stack.length = j;
              continue OUTER;
            }
          }
        }

        if (canOpen) {
          stack.push({
            token: i,
            pos: t.index,
            single: isSingle,
            level: thisLevel
          });
        } else if (canClose && isSingle) {
          token.content = replaceAt(token.content, t.index, APOSTROPHE);
        }
      }
    }
  }


  var smartquotes = function smartquotes(state) {
    /*eslint max-depth:0*/
    var blkIdx;

    if (!state.md.options.typographer) { return; }

    for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {

      if (state.tokens[blkIdx].type !== 'inline' ||
          !QUOTE_TEST_RE.test(state.tokens[blkIdx].content)) {
        continue;
      }

      process_inlines(state.tokens[blkIdx].children, state);
    }
  };

  /**
   * class Token
   **/

  /**
   * new Token(type, tag, nesting)
   *
   * Create new token and fill passed properties.
   **/
  function Token$3(type, tag, nesting) {
    /**
     * Token#type -> String
     *
     * Type of the token (string, e.g. "paragraph_open")
     **/
    this.type     = type;

    /**
     * Token#tag -> String
     *
     * html tag name, e.g. "p"
     **/
    this.tag      = tag;

    /**
     * Token#attrs -> Array
     *
     * Html attributes. Format: `[ [ name1, value1 ], [ name2, value2 ] ]`
     **/
    this.attrs    = null;

    /**
     * Token#map -> Array
     *
     * Source map info. Format: `[ line_begin, line_end ]`
     **/
    this.map      = null;

    /**
     * Token#nesting -> Number
     *
     * Level change (number in {-1, 0, 1} set), where:
     *
     * -  `1` means the tag is opening
     * -  `0` means the tag is self-closing
     * - `-1` means the tag is closing
     **/
    this.nesting  = nesting;

    /**
     * Token#level -> Number
     *
     * nesting level, the same as `state.level`
     **/
    this.level    = 0;

    /**
     * Token#children -> Array
     *
     * An array of child nodes (inline and img tokens)
     **/
    this.children = null;

    /**
     * Token#content -> String
     *
     * In a case of self-closing tag (code, html, fence, etc.),
     * it has contents of this tag.
     **/
    this.content  = '';

    /**
     * Token#markup -> String
     *
     * '*' or '_' for emphasis, fence string for fence, etc.
     **/
    this.markup   = '';

    /**
     * Token#info -> String
     *
     * Additional information:
     *
     * - Info string for "fence" tokens
     * - The value "auto" for autolink "link_open" and "link_close" tokens
     * - The string value of the item marker for ordered-list "list_item_open" tokens
     **/
    this.info     = '';

    /**
     * Token#meta -> Object
     *
     * A place for plugins to store an arbitrary data
     **/
    this.meta     = null;

    /**
     * Token#block -> Boolean
     *
     * True for block-level tokens, false for inline tokens.
     * Used in renderer to calculate line breaks
     **/
    this.block    = false;

    /**
     * Token#hidden -> Boolean
     *
     * If it's true, ignore this element when rendering. Used for tight lists
     * to hide paragraphs.
     **/
    this.hidden   = false;
  }


  /**
   * Token.attrIndex(name) -> Number
   *
   * Search attribute index by name.
   **/
  Token$3.prototype.attrIndex = function attrIndex(name) {
    var attrs, i, len;

    if (!this.attrs) { return -1; }

    attrs = this.attrs;

    for (i = 0, len = attrs.length; i < len; i++) {
      if (attrs[i][0] === name) { return i; }
    }
    return -1;
  };


  /**
   * Token.attrPush(attrData)
   *
   * Add `[ name, value ]` attribute to list. Init attrs if necessary
   **/
  Token$3.prototype.attrPush = function attrPush(attrData) {
    if (this.attrs) {
      this.attrs.push(attrData);
    } else {
      this.attrs = [ attrData ];
    }
  };


  /**
   * Token.attrSet(name, value)
   *
   * Set `name` attribute to `value`. Override old value if exists.
   **/
  Token$3.prototype.attrSet = function attrSet(name, value) {
    var idx = this.attrIndex(name),
        attrData = [ name, value ];

    if (idx < 0) {
      this.attrPush(attrData);
    } else {
      this.attrs[idx] = attrData;
    }
  };


  /**
   * Token.attrGet(name)
   *
   * Get the value of attribute `name`, or null if it does not exist.
   **/
  Token$3.prototype.attrGet = function attrGet(name) {
    var idx = this.attrIndex(name), value = null;
    if (idx >= 0) {
      value = this.attrs[idx][1];
    }
    return value;
  };


  /**
   * Token.attrJoin(name, value)
   *
   * Join value to existing attribute via space. Or create new attribute if not
   * exists. Useful to operate with token classes.
   **/
  Token$3.prototype.attrJoin = function attrJoin(name, value) {
    var idx = this.attrIndex(name);

    if (idx < 0) {
      this.attrPush([ name, value ]);
    } else {
      this.attrs[idx][1] = this.attrs[idx][1] + ' ' + value;
    }
  };


  var token = Token$3;

  var Token$2 = token;


  function StateCore(src, md, env) {
    this.src = src;
    this.env = env;
    this.tokens = [];
    this.inlineMode = false;
    this.md = md; // link to parser instance
  }

  // re-export Token class to use in core rules
  StateCore.prototype.Token = Token$2;


  var state_core = StateCore;

  /** internal
   * class Core
   *
   * Top-level rules executor. Glues block/inline parsers and does intermediate
   * transformations.
   **/


  var Ruler$2  = ruler;


  var _rules$2 = [
    [ 'normalize',      normalize      ],
    [ 'block',          block          ],
    [ 'inline',         inline         ],
    [ 'linkify',        linkify        ],
    [ 'replacements',   replacements   ],
    [ 'smartquotes',    smartquotes    ]
  ];


  /**
   * new Core()
   **/
  function Core() {
    /**
     * Core#ruler -> Ruler
     *
     * [[Ruler]] instance. Keep configuration of core rules.
     **/
    this.ruler = new Ruler$2();

    for (var i = 0; i < _rules$2.length; i++) {
      this.ruler.push(_rules$2[i][0], _rules$2[i][1]);
    }
  }


  /**
   * Core.process(state)
   *
   * Executes core chain rules.
   **/
  Core.prototype.process = function (state) {
    var i, l, rules;

    rules = this.ruler.getRules('');

    for (i = 0, l = rules.length; i < l; i++) {
      rules[i](state);
    }
  };

  Core.prototype.State = state_core;


  var parser_core = Core;

  var isSpace$a = utils$1.isSpace;


  function getLine(state, line) {
    var pos = state.bMarks[line] + state.tShift[line],
        max = state.eMarks[line];

    return state.src.substr(pos, max - pos);
  }

  function escapedSplit(str) {
    var result = [],
        pos = 0,
        max = str.length,
        ch,
        isEscaped = false,
        lastPos = 0,
        current = '';

    ch  = str.charCodeAt(pos);

    while (pos < max) {
      if (ch === 0x7c/* | */) {
        if (!isEscaped) {
          // pipe separating cells, '|'
          result.push(current + str.substring(lastPos, pos));
          current = '';
          lastPos = pos + 1;
        } else {
          // escaped pipe, '\|'
          current += str.substring(lastPos, pos - 1);
          lastPos = pos;
        }
      }

      isEscaped = (ch === 0x5c/* \ */);
      pos++;

      ch = str.charCodeAt(pos);
    }

    result.push(current + str.substring(lastPos));

    return result;
  }


  var table = function table(state, startLine, endLine, silent) {
    var ch, lineText, pos, i, l, nextLine, columns, columnCount, token,
        aligns, t, tableLines, tbodyLines, oldParentType, terminate,
        terminatorRules, firstCh, secondCh;

    // should have at least two lines
    if (startLine + 2 > endLine) { return false; }

    nextLine = startLine + 1;

    if (state.sCount[nextLine] < state.blkIndent) { return false; }

    // if it's indented more than 3 spaces, it should be a code block
    if (state.sCount[nextLine] - state.blkIndent >= 4) { return false; }

    // first character of the second line should be '|', '-', ':',
    // and no other characters are allowed but spaces;
    // basically, this is the equivalent of /^[-:|][-:|\s]*$/ regexp

    pos = state.bMarks[nextLine] + state.tShift[nextLine];
    if (pos >= state.eMarks[nextLine]) { return false; }

    firstCh = state.src.charCodeAt(pos++);
    if (firstCh !== 0x7C/* | */ && firstCh !== 0x2D/* - */ && firstCh !== 0x3A/* : */) { return false; }

    if (pos >= state.eMarks[nextLine]) { return false; }

    secondCh = state.src.charCodeAt(pos++);
    if (secondCh !== 0x7C/* | */ && secondCh !== 0x2D/* - */ && secondCh !== 0x3A/* : */ && !isSpace$a(secondCh)) {
      return false;
    }

    // if first character is '-', then second character must not be a space
    // (due to parsing ambiguity with list)
    if (firstCh === 0x2D/* - */ && isSpace$a(secondCh)) { return false; }

    while (pos < state.eMarks[nextLine]) {
      ch = state.src.charCodeAt(pos);

      if (ch !== 0x7C/* | */ && ch !== 0x2D/* - */ && ch !== 0x3A/* : */ && !isSpace$a(ch)) { return false; }

      pos++;
    }

    lineText = getLine(state, startLine + 1);

    columns = lineText.split('|');
    aligns = [];
    for (i = 0; i < columns.length; i++) {
      t = columns[i].trim();
      if (!t) {
        // allow empty columns before and after table, but not in between columns;
        // e.g. allow ` |---| `, disallow ` ---||--- `
        if (i === 0 || i === columns.length - 1) {
          continue;
        } else {
          return false;
        }
      }

      if (!/^:?-+:?$/.test(t)) { return false; }
      if (t.charCodeAt(t.length - 1) === 0x3A/* : */) {
        aligns.push(t.charCodeAt(0) === 0x3A/* : */ ? 'center' : 'right');
      } else if (t.charCodeAt(0) === 0x3A/* : */) {
        aligns.push('left');
      } else {
        aligns.push('');
      }
    }

    lineText = getLine(state, startLine).trim();
    if (lineText.indexOf('|') === -1) { return false; }
    if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }
    columns = escapedSplit(lineText);
    if (columns.length && columns[0] === '') columns.shift();
    if (columns.length && columns[columns.length - 1] === '') columns.pop();

    // header row will define an amount of columns in the entire table,
    // and align row should be exactly the same (the rest of the rows can differ)
    columnCount = columns.length;
    if (columnCount === 0 || columnCount !== aligns.length) { return false; }

    if (silent) { return true; }

    oldParentType = state.parentType;
    state.parentType = 'table';

    // use 'blockquote' lists for termination because it's
    // the most similar to tables
    terminatorRules = state.md.block.ruler.getRules('blockquote');

    token     = state.push('table_open', 'table', 1);
    token.map = tableLines = [ startLine, 0 ];

    token     = state.push('thead_open', 'thead', 1);
    token.map = [ startLine, startLine + 1 ];

    token     = state.push('tr_open', 'tr', 1);
    token.map = [ startLine, startLine + 1 ];

    for (i = 0; i < columns.length; i++) {
      token          = state.push('th_open', 'th', 1);
      if (aligns[i]) {
        token.attrs  = [ [ 'style', 'text-align:' + aligns[i] ] ];
      }

      token          = state.push('inline', '', 0);
      token.content  = columns[i].trim();
      token.children = [];

      token          = state.push('th_close', 'th', -1);
    }

    token     = state.push('tr_close', 'tr', -1);
    token     = state.push('thead_close', 'thead', -1);

    for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
      if (state.sCount[nextLine] < state.blkIndent) { break; }

      terminate = false;
      for (i = 0, l = terminatorRules.length; i < l; i++) {
        if (terminatorRules[i](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }

      if (terminate) { break; }
      lineText = getLine(state, nextLine).trim();
      if (!lineText) { break; }
      if (state.sCount[nextLine] - state.blkIndent >= 4) { break; }
      columns = escapedSplit(lineText);
      if (columns.length && columns[0] === '') columns.shift();
      if (columns.length && columns[columns.length - 1] === '') columns.pop();

      if (nextLine === startLine + 2) {
        token     = state.push('tbody_open', 'tbody', 1);
        token.map = tbodyLines = [ startLine + 2, 0 ];
      }

      token     = state.push('tr_open', 'tr', 1);
      token.map = [ nextLine, nextLine + 1 ];

      for (i = 0; i < columnCount; i++) {
        token          = state.push('td_open', 'td', 1);
        if (aligns[i]) {
          token.attrs  = [ [ 'style', 'text-align:' + aligns[i] ] ];
        }

        token          = state.push('inline', '', 0);
        token.content  = columns[i] ? columns[i].trim() : '';
        token.children = [];

        token          = state.push('td_close', 'td', -1);
      }
      token = state.push('tr_close', 'tr', -1);
    }

    if (tbodyLines) {
      token = state.push('tbody_close', 'tbody', -1);
      tbodyLines[1] = nextLine;
    }

    token = state.push('table_close', 'table', -1);
    tableLines[1] = nextLine;

    state.parentType = oldParentType;
    state.line = nextLine;
    return true;
  };

  var code = function code(state, startLine, endLine/*, silent*/) {
    var nextLine, last, token;

    if (state.sCount[startLine] - state.blkIndent < 4) { return false; }

    last = nextLine = startLine + 1;

    while (nextLine < endLine) {
      if (state.isEmpty(nextLine)) {
        nextLine++;
        continue;
      }

      if (state.sCount[nextLine] - state.blkIndent >= 4) {
        nextLine++;
        last = nextLine;
        continue;
      }
      break;
    }

    state.line = last;

    token         = state.push('code_block', 'code', 0);
    token.content = state.getLines(startLine, last, 4 + state.blkIndent, false) + '\n';
    token.map     = [ startLine, state.line ];

    return true;
  };

  var fence = function fence(state, startLine, endLine, silent) {
    var marker, len, params, nextLine, mem, token, markup,
        haveEndMarker = false,
        pos = state.bMarks[startLine] + state.tShift[startLine],
        max = state.eMarks[startLine];

    // if it's indented more than 3 spaces, it should be a code block
    if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

    if (pos + 3 > max) { return false; }

    marker = state.src.charCodeAt(pos);

    if (marker !== 0x7E/* ~ */ && marker !== 0x60 /* ` */) {
      return false;
    }

    // scan marker length
    mem = pos;
    pos = state.skipChars(pos, marker);

    len = pos - mem;

    if (len < 3) { return false; }

    markup = state.src.slice(mem, pos);
    params = state.src.slice(pos, max);

    if (marker === 0x60 /* ` */) {
      if (params.indexOf(String.fromCharCode(marker)) >= 0) {
        return false;
      }
    }

    // Since start is found, we can report success here in validation mode
    if (silent) { return true; }

    // search end of block
    nextLine = startLine;

    for (;;) {
      nextLine++;
      if (nextLine >= endLine) {
        // unclosed block should be autoclosed by end of document.
        // also block seems to be autoclosed by end of parent
        break;
      }

      pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];

      if (pos < max && state.sCount[nextLine] < state.blkIndent) {
        // non-empty line with negative indent should stop the list:
        // - ```
        //  test
        break;
      }

      if (state.src.charCodeAt(pos) !== marker) { continue; }

      if (state.sCount[nextLine] - state.blkIndent >= 4) {
        // closing fence should be indented less than 4 spaces
        continue;
      }

      pos = state.skipChars(pos, marker);

      // closing code fence must be at least as long as the opening one
      if (pos - mem < len) { continue; }

      // make sure tail has spaces only
      pos = state.skipSpaces(pos);

      if (pos < max) { continue; }

      haveEndMarker = true;
      // found!
      break;
    }

    // If a fence has heading spaces, they should be removed from its inner block
    len = state.sCount[startLine];

    state.line = nextLine + (haveEndMarker ? 1 : 0);

    token         = state.push('fence', 'code', 0);
    token.info    = params;
    token.content = state.getLines(startLine + 1, nextLine, len, true);
    token.markup  = markup;
    token.map     = [ startLine, state.line ];

    return true;
  };

  var isSpace$9 = utils$1.isSpace;


  var blockquote = function blockquote(state, startLine, endLine, silent) {
    var adjustTab,
        ch,
        i,
        initial,
        l,
        lastLineEmpty,
        lines,
        nextLine,
        offset,
        oldBMarks,
        oldBSCount,
        oldIndent,
        oldParentType,
        oldSCount,
        oldTShift,
        spaceAfterMarker,
        terminate,
        terminatorRules,
        token,
        isOutdented,
        oldLineMax = state.lineMax,
        pos = state.bMarks[startLine] + state.tShift[startLine],
        max = state.eMarks[startLine];

    // if it's indented more than 3 spaces, it should be a code block
    if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

    // check the block quote marker
    if (state.src.charCodeAt(pos++) !== 0x3E/* > */) { return false; }

    // we know that it's going to be a valid blockquote,
    // so no point trying to find the end of it in silent mode
    if (silent) { return true; }

    // set offset past spaces and ">"
    initial = offset = state.sCount[startLine] + 1;

    // skip one optional space after '>'
    if (state.src.charCodeAt(pos) === 0x20 /* space */) {
      // ' >   test '
      //     ^ -- position start of line here:
      pos++;
      initial++;
      offset++;
      adjustTab = false;
      spaceAfterMarker = true;
    } else if (state.src.charCodeAt(pos) === 0x09 /* tab */) {
      spaceAfterMarker = true;

      if ((state.bsCount[startLine] + offset) % 4 === 3) {
        // '  >\t  test '
        //       ^ -- position start of line here (tab has width===1)
        pos++;
        initial++;
        offset++;
        adjustTab = false;
      } else {
        // ' >\t  test '
        //    ^ -- position start of line here + shift bsCount slightly
        //         to make extra space appear
        adjustTab = true;
      }
    } else {
      spaceAfterMarker = false;
    }

    oldBMarks = [ state.bMarks[startLine] ];
    state.bMarks[startLine] = pos;

    while (pos < max) {
      ch = state.src.charCodeAt(pos);

      if (isSpace$9(ch)) {
        if (ch === 0x09) {
          offset += 4 - (offset + state.bsCount[startLine] + (adjustTab ? 1 : 0)) % 4;
        } else {
          offset++;
        }
      } else {
        break;
      }

      pos++;
    }

    oldBSCount = [ state.bsCount[startLine] ];
    state.bsCount[startLine] = state.sCount[startLine] + 1 + (spaceAfterMarker ? 1 : 0);

    lastLineEmpty = pos >= max;

    oldSCount = [ state.sCount[startLine] ];
    state.sCount[startLine] = offset - initial;

    oldTShift = [ state.tShift[startLine] ];
    state.tShift[startLine] = pos - state.bMarks[startLine];

    terminatorRules = state.md.block.ruler.getRules('blockquote');

    oldParentType = state.parentType;
    state.parentType = 'blockquote';

    // Search the end of the block
    //
    // Block ends with either:
    //  1. an empty line outside:
    //     ```
    //     > test
    //
    //     ```
    //  2. an empty line inside:
    //     ```
    //     >
    //     test
    //     ```
    //  3. another tag:
    //     ```
    //     > test
    //      - - -
    //     ```
    for (nextLine = startLine + 1; nextLine < endLine; nextLine++) {
      // check if it's outdented, i.e. it's inside list item and indented
      // less than said list item:
      //
      // ```
      // 1. anything
      //    > current blockquote
      // 2. checking this line
      // ```
      isOutdented = state.sCount[nextLine] < state.blkIndent;

      pos = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];

      if (pos >= max) {
        // Case 1: line is not inside the blockquote, and this line is empty.
        break;
      }

      if (state.src.charCodeAt(pos++) === 0x3E/* > */ && !isOutdented) {
        // This line is inside the blockquote.

        // set offset past spaces and ">"
        initial = offset = state.sCount[nextLine] + 1;

        // skip one optional space after '>'
        if (state.src.charCodeAt(pos) === 0x20 /* space */) {
          // ' >   test '
          //     ^ -- position start of line here:
          pos++;
          initial++;
          offset++;
          adjustTab = false;
          spaceAfterMarker = true;
        } else if (state.src.charCodeAt(pos) === 0x09 /* tab */) {
          spaceAfterMarker = true;

          if ((state.bsCount[nextLine] + offset) % 4 === 3) {
            // '  >\t  test '
            //       ^ -- position start of line here (tab has width===1)
            pos++;
            initial++;
            offset++;
            adjustTab = false;
          } else {
            // ' >\t  test '
            //    ^ -- position start of line here + shift bsCount slightly
            //         to make extra space appear
            adjustTab = true;
          }
        } else {
          spaceAfterMarker = false;
        }

        oldBMarks.push(state.bMarks[nextLine]);
        state.bMarks[nextLine] = pos;

        while (pos < max) {
          ch = state.src.charCodeAt(pos);

          if (isSpace$9(ch)) {
            if (ch === 0x09) {
              offset += 4 - (offset + state.bsCount[nextLine] + (adjustTab ? 1 : 0)) % 4;
            } else {
              offset++;
            }
          } else {
            break;
          }

          pos++;
        }

        lastLineEmpty = pos >= max;

        oldBSCount.push(state.bsCount[nextLine]);
        state.bsCount[nextLine] = state.sCount[nextLine] + 1 + (spaceAfterMarker ? 1 : 0);

        oldSCount.push(state.sCount[nextLine]);
        state.sCount[nextLine] = offset - initial;

        oldTShift.push(state.tShift[nextLine]);
        state.tShift[nextLine] = pos - state.bMarks[nextLine];
        continue;
      }

      // Case 2: line is not inside the blockquote, and the last line was empty.
      if (lastLineEmpty) { break; }

      // Case 3: another tag found.
      terminate = false;
      for (i = 0, l = terminatorRules.length; i < l; i++) {
        if (terminatorRules[i](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }

      if (terminate) {
        // Quirk to enforce "hard termination mode" for paragraphs;
        // normally if you call `tokenize(state, startLine, nextLine)`,
        // paragraphs will look below nextLine for paragraph continuation,
        // but if blockquote is terminated by another tag, they shouldn't
        state.lineMax = nextLine;

        if (state.blkIndent !== 0) {
          // state.blkIndent was non-zero, we now set it to zero,
          // so we need to re-calculate all offsets to appear as
          // if indent wasn't changed
          oldBMarks.push(state.bMarks[nextLine]);
          oldBSCount.push(state.bsCount[nextLine]);
          oldTShift.push(state.tShift[nextLine]);
          oldSCount.push(state.sCount[nextLine]);
          state.sCount[nextLine] -= state.blkIndent;
        }

        break;
      }

      oldBMarks.push(state.bMarks[nextLine]);
      oldBSCount.push(state.bsCount[nextLine]);
      oldTShift.push(state.tShift[nextLine]);
      oldSCount.push(state.sCount[nextLine]);

      // A negative indentation means that this is a paragraph continuation
      //
      state.sCount[nextLine] = -1;
    }

    oldIndent = state.blkIndent;
    state.blkIndent = 0;

    token        = state.push('blockquote_open', 'blockquote', 1);
    token.markup = '>';
    token.map    = lines = [ startLine, 0 ];

    state.md.block.tokenize(state, startLine, nextLine);

    token        = state.push('blockquote_close', 'blockquote', -1);
    token.markup = '>';

    state.lineMax = oldLineMax;
    state.parentType = oldParentType;
    lines[1] = state.line;

    // Restore original tShift; this might not be necessary since the parser
    // has already been here, but just to make sure we can do that.
    for (i = 0; i < oldTShift.length; i++) {
      state.bMarks[i + startLine] = oldBMarks[i];
      state.tShift[i + startLine] = oldTShift[i];
      state.sCount[i + startLine] = oldSCount[i];
      state.bsCount[i + startLine] = oldBSCount[i];
    }
    state.blkIndent = oldIndent;

    return true;
  };

  var isSpace$8 = utils$1.isSpace;


  var hr = function hr(state, startLine, endLine, silent) {
    var marker, cnt, ch, token,
        pos = state.bMarks[startLine] + state.tShift[startLine],
        max = state.eMarks[startLine];

    // if it's indented more than 3 spaces, it should be a code block
    if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

    marker = state.src.charCodeAt(pos++);

    // Check hr marker
    if (marker !== 0x2A/* * */ &&
        marker !== 0x2D/* - */ &&
        marker !== 0x5F/* _ */) {
      return false;
    }

    // markers can be mixed with spaces, but there should be at least 3 of them

    cnt = 1;
    while (pos < max) {
      ch = state.src.charCodeAt(pos++);
      if (ch !== marker && !isSpace$8(ch)) { return false; }
      if (ch === marker) { cnt++; }
    }

    if (cnt < 3) { return false; }

    if (silent) { return true; }

    state.line = startLine + 1;

    token        = state.push('hr', 'hr', 0);
    token.map    = [ startLine, state.line ];
    token.markup = Array(cnt + 1).join(String.fromCharCode(marker));

    return true;
  };

  var isSpace$7 = utils$1.isSpace;


  // Search `[-+*][\n ]`, returns next pos after marker on success
  // or -1 on fail.
  function skipBulletListMarker(state, startLine) {
    var marker, pos, max, ch;

    pos = state.bMarks[startLine] + state.tShift[startLine];
    max = state.eMarks[startLine];

    marker = state.src.charCodeAt(pos++);
    // Check bullet
    if (marker !== 0x2A/* * */ &&
        marker !== 0x2D/* - */ &&
        marker !== 0x2B/* + */) {
      return -1;
    }

    if (pos < max) {
      ch = state.src.charCodeAt(pos);

      if (!isSpace$7(ch)) {
        // " -test " - is not a list item
        return -1;
      }
    }

    return pos;
  }

  // Search `\d+[.)][\n ]`, returns next pos after marker on success
  // or -1 on fail.
  function skipOrderedListMarker(state, startLine) {
    var ch,
        start = state.bMarks[startLine] + state.tShift[startLine],
        pos = start,
        max = state.eMarks[startLine];

    // List marker should have at least 2 chars (digit + dot)
    if (pos + 1 >= max) { return -1; }

    ch = state.src.charCodeAt(pos++);

    if (ch < 0x30/* 0 */ || ch > 0x39/* 9 */) { return -1; }

    for (;;) {
      // EOL -> fail
      if (pos >= max) { return -1; }

      ch = state.src.charCodeAt(pos++);

      if (ch >= 0x30/* 0 */ && ch <= 0x39/* 9 */) {

        // List marker should have no more than 9 digits
        // (prevents integer overflow in browsers)
        if (pos - start >= 10) { return -1; }

        continue;
      }

      // found valid marker
      if (ch === 0x29/* ) */ || ch === 0x2e/* . */) {
        break;
      }

      return -1;
    }


    if (pos < max) {
      ch = state.src.charCodeAt(pos);

      if (!isSpace$7(ch)) {
        // " 1.test " - is not a list item
        return -1;
      }
    }
    return pos;
  }

  function markTightParagraphs(state, idx) {
    var i, l,
        level = state.level + 2;

    for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
      if (state.tokens[i].level === level && state.tokens[i].type === 'paragraph_open') {
        state.tokens[i + 2].hidden = true;
        state.tokens[i].hidden = true;
        i += 2;
      }
    }
  }


  var list = function list(state, startLine, endLine, silent) {
    var ch,
        contentStart,
        i,
        indent,
        indentAfterMarker,
        initial,
        isOrdered,
        itemLines,
        l,
        listLines,
        listTokIdx,
        markerCharCode,
        markerValue,
        max,
        nextLine,
        offset,
        oldListIndent,
        oldParentType,
        oldSCount,
        oldTShift,
        oldTight,
        pos,
        posAfterMarker,
        prevEmptyEnd,
        start,
        terminate,
        terminatorRules,
        token,
        isTerminatingParagraph = false,
        tight = true;

    // if it's indented more than 3 spaces, it should be a code block
    if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

    // Special case:
    //  - item 1
    //   - item 2
    //    - item 3
    //     - item 4
    //      - this one is a paragraph continuation
    if (state.listIndent >= 0 &&
        state.sCount[startLine] - state.listIndent >= 4 &&
        state.sCount[startLine] < state.blkIndent) {
      return false;
    }

    // limit conditions when list can interrupt
    // a paragraph (validation mode only)
    if (silent && state.parentType === 'paragraph') {
      // Next list item should still terminate previous list item;
      //
      // This code can fail if plugins use blkIndent as well as lists,
      // but I hope the spec gets fixed long before that happens.
      //
      if (state.sCount[startLine] >= state.blkIndent) {
        isTerminatingParagraph = true;
      }
    }

    // Detect list type and position after marker
    if ((posAfterMarker = skipOrderedListMarker(state, startLine)) >= 0) {
      isOrdered = true;
      start = state.bMarks[startLine] + state.tShift[startLine];
      markerValue = Number(state.src.slice(start, posAfterMarker - 1));

      // If we're starting a new ordered list right after
      // a paragraph, it should start with 1.
      if (isTerminatingParagraph && markerValue !== 1) return false;

    } else if ((posAfterMarker = skipBulletListMarker(state, startLine)) >= 0) {
      isOrdered = false;

    } else {
      return false;
    }

    // If we're starting a new unordered list right after
    // a paragraph, first line should not be empty.
    if (isTerminatingParagraph) {
      if (state.skipSpaces(posAfterMarker) >= state.eMarks[startLine]) return false;
    }

    // We should terminate list on style change. Remember first one to compare.
    markerCharCode = state.src.charCodeAt(posAfterMarker - 1);

    // For validation mode we can terminate immediately
    if (silent) { return true; }

    // Start list
    listTokIdx = state.tokens.length;

    if (isOrdered) {
      token       = state.push('ordered_list_open', 'ol', 1);
      if (markerValue !== 1) {
        token.attrs = [ [ 'start', markerValue ] ];
      }

    } else {
      token       = state.push('bullet_list_open', 'ul', 1);
    }

    token.map    = listLines = [ startLine, 0 ];
    token.markup = String.fromCharCode(markerCharCode);

    //
    // Iterate list items
    //

    nextLine = startLine;
    prevEmptyEnd = false;
    terminatorRules = state.md.block.ruler.getRules('list');

    oldParentType = state.parentType;
    state.parentType = 'list';

    while (nextLine < endLine) {
      pos = posAfterMarker;
      max = state.eMarks[nextLine];

      initial = offset = state.sCount[nextLine] + posAfterMarker - (state.bMarks[startLine] + state.tShift[startLine]);

      while (pos < max) {
        ch = state.src.charCodeAt(pos);

        if (ch === 0x09) {
          offset += 4 - (offset + state.bsCount[nextLine]) % 4;
        } else if (ch === 0x20) {
          offset++;
        } else {
          break;
        }

        pos++;
      }

      contentStart = pos;

      if (contentStart >= max) {
        // trimming space in "-    \n  3" case, indent is 1 here
        indentAfterMarker = 1;
      } else {
        indentAfterMarker = offset - initial;
      }

      // If we have more than 4 spaces, the indent is 1
      // (the rest is just indented code block)
      if (indentAfterMarker > 4) { indentAfterMarker = 1; }

      // "  -  test"
      //  ^^^^^ - calculating total length of this thing
      indent = initial + indentAfterMarker;

      // Run subparser & write tokens
      token        = state.push('list_item_open', 'li', 1);
      token.markup = String.fromCharCode(markerCharCode);
      token.map    = itemLines = [ startLine, 0 ];
      if (isOrdered) {
        token.info = state.src.slice(start, posAfterMarker - 1);
      }

      // change current state, then restore it after parser subcall
      oldTight = state.tight;
      oldTShift = state.tShift[startLine];
      oldSCount = state.sCount[startLine];

      //  - example list
      // ^ listIndent position will be here
      //   ^ blkIndent position will be here
      //
      oldListIndent = state.listIndent;
      state.listIndent = state.blkIndent;
      state.blkIndent = indent;

      state.tight = true;
      state.tShift[startLine] = contentStart - state.bMarks[startLine];
      state.sCount[startLine] = offset;

      if (contentStart >= max && state.isEmpty(startLine + 1)) {
        // workaround for this case
        // (list item is empty, list terminates before "foo"):
        // ~~~~~~~~
        //   -
        //
        //     foo
        // ~~~~~~~~
        state.line = Math.min(state.line + 2, endLine);
      } else {
        state.md.block.tokenize(state, startLine, endLine, true);
      }

      // If any of list item is tight, mark list as tight
      if (!state.tight || prevEmptyEnd) {
        tight = false;
      }
      // Item become loose if finish with empty line,
      // but we should filter last element, because it means list finish
      prevEmptyEnd = (state.line - startLine) > 1 && state.isEmpty(state.line - 1);

      state.blkIndent = state.listIndent;
      state.listIndent = oldListIndent;
      state.tShift[startLine] = oldTShift;
      state.sCount[startLine] = oldSCount;
      state.tight = oldTight;

      token        = state.push('list_item_close', 'li', -1);
      token.markup = String.fromCharCode(markerCharCode);

      nextLine = startLine = state.line;
      itemLines[1] = nextLine;
      contentStart = state.bMarks[startLine];

      if (nextLine >= endLine) { break; }

      //
      // Try to check if list is terminated or continued.
      //
      if (state.sCount[nextLine] < state.blkIndent) { break; }

      // if it's indented more than 3 spaces, it should be a code block
      if (state.sCount[startLine] - state.blkIndent >= 4) { break; }

      // fail if terminating block found
      terminate = false;
      for (i = 0, l = terminatorRules.length; i < l; i++) {
        if (terminatorRules[i](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }
      if (terminate) { break; }

      // fail if list has another type
      if (isOrdered) {
        posAfterMarker = skipOrderedListMarker(state, nextLine);
        if (posAfterMarker < 0) { break; }
        start = state.bMarks[nextLine] + state.tShift[nextLine];
      } else {
        posAfterMarker = skipBulletListMarker(state, nextLine);
        if (posAfterMarker < 0) { break; }
      }

      if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) { break; }
    }

    // Finalize list
    if (isOrdered) {
      token = state.push('ordered_list_close', 'ol', -1);
    } else {
      token = state.push('bullet_list_close', 'ul', -1);
    }
    token.markup = String.fromCharCode(markerCharCode);

    listLines[1] = nextLine;
    state.line = nextLine;

    state.parentType = oldParentType;

    // mark paragraphs tight if needed
    if (tight) {
      markTightParagraphs(state, listTokIdx);
    }

    return true;
  };

  var normalizeReference$2   = utils$1.normalizeReference;
  var isSpace$6              = utils$1.isSpace;


  var reference = function reference(state, startLine, _endLine, silent) {
    var ch,
        destEndPos,
        destEndLineNo,
        endLine,
        href,
        i,
        l,
        label,
        labelEnd,
        oldParentType,
        res,
        start,
        str,
        terminate,
        terminatorRules,
        title,
        lines = 0,
        pos = state.bMarks[startLine] + state.tShift[startLine],
        max = state.eMarks[startLine],
        nextLine = startLine + 1;

    // if it's indented more than 3 spaces, it should be a code block
    if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

    if (state.src.charCodeAt(pos) !== 0x5B/* [ */) { return false; }

    // Simple check to quickly interrupt scan on [link](url) at the start of line.
    // Can be useful on practice: https://github.com/markdown-it/markdown-it/issues/54
    while (++pos < max) {
      if (state.src.charCodeAt(pos) === 0x5D /* ] */ &&
          state.src.charCodeAt(pos - 1) !== 0x5C/* \ */) {
        if (pos + 1 === max) { return false; }
        if (state.src.charCodeAt(pos + 1) !== 0x3A/* : */) { return false; }
        break;
      }
    }

    endLine = state.lineMax;

    // jump line-by-line until empty one or EOF
    terminatorRules = state.md.block.ruler.getRules('reference');

    oldParentType = state.parentType;
    state.parentType = 'reference';

    for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
      // this would be a code block normally, but after paragraph
      // it's considered a lazy continuation regardless of what's there
      if (state.sCount[nextLine] - state.blkIndent > 3) { continue; }

      // quirk for blockquotes, this line should already be checked by that rule
      if (state.sCount[nextLine] < 0) { continue; }

      // Some tags can terminate paragraph without empty line.
      terminate = false;
      for (i = 0, l = terminatorRules.length; i < l; i++) {
        if (terminatorRules[i](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }
      if (terminate) { break; }
    }

    str = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
    max = str.length;

    for (pos = 1; pos < max; pos++) {
      ch = str.charCodeAt(pos);
      if (ch === 0x5B /* [ */) {
        return false;
      } else if (ch === 0x5D /* ] */) {
        labelEnd = pos;
        break;
      } else if (ch === 0x0A /* \n */) {
        lines++;
      } else if (ch === 0x5C /* \ */) {
        pos++;
        if (pos < max && str.charCodeAt(pos) === 0x0A) {
          lines++;
        }
      }
    }

    if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 0x3A/* : */) { return false; }

    // [label]:   destination   'title'
    //         ^^^ skip optional whitespace here
    for (pos = labelEnd + 2; pos < max; pos++) {
      ch = str.charCodeAt(pos);
      if (ch === 0x0A) {
        lines++;
      } else if (isSpace$6(ch)) ; else {
        break;
      }
    }

    // [label]:   destination   'title'
    //            ^^^^^^^^^^^ parse this
    res = state.md.helpers.parseLinkDestination(str, pos, max);
    if (!res.ok) { return false; }

    href = state.md.normalizeLink(res.str);
    if (!state.md.validateLink(href)) { return false; }

    pos = res.pos;
    lines += res.lines;

    // save cursor state, we could require to rollback later
    destEndPos = pos;
    destEndLineNo = lines;

    // [label]:   destination   'title'
    //                       ^^^ skipping those spaces
    start = pos;
    for (; pos < max; pos++) {
      ch = str.charCodeAt(pos);
      if (ch === 0x0A) {
        lines++;
      } else if (isSpace$6(ch)) ; else {
        break;
      }
    }

    // [label]:   destination   'title'
    //                          ^^^^^^^ parse this
    res = state.md.helpers.parseLinkTitle(str, pos, max);
    if (pos < max && start !== pos && res.ok) {
      title = res.str;
      pos = res.pos;
      lines += res.lines;
    } else {
      title = '';
      pos = destEndPos;
      lines = destEndLineNo;
    }

    // skip trailing spaces until the rest of the line
    while (pos < max) {
      ch = str.charCodeAt(pos);
      if (!isSpace$6(ch)) { break; }
      pos++;
    }

    if (pos < max && str.charCodeAt(pos) !== 0x0A) {
      if (title) {
        // garbage at the end of the line after title,
        // but it could still be a valid reference if we roll back
        title = '';
        pos = destEndPos;
        lines = destEndLineNo;
        while (pos < max) {
          ch = str.charCodeAt(pos);
          if (!isSpace$6(ch)) { break; }
          pos++;
        }
      }
    }

    if (pos < max && str.charCodeAt(pos) !== 0x0A) {
      // garbage at the end of the line
      return false;
    }

    label = normalizeReference$2(str.slice(1, labelEnd));
    if (!label) {
      // CommonMark 0.20 disallows empty labels
      return false;
    }

    // Reference can not terminate anything. This check is for safety only.
    /*istanbul ignore if*/
    if (silent) { return true; }

    if (typeof state.env.references === 'undefined') {
      state.env.references = {};
    }
    if (typeof state.env.references[label] === 'undefined') {
      state.env.references[label] = { title: title, href: href };
    }

    state.parentType = oldParentType;

    state.line = startLine + lines + 1;
    return true;
  };

  var html_blocks = [
    'address',
    'article',
    'aside',
    'base',
    'basefont',
    'blockquote',
    'body',
    'caption',
    'center',
    'col',
    'colgroup',
    'dd',
    'details',
    'dialog',
    'dir',
    'div',
    'dl',
    'dt',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'frame',
    'frameset',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hr',
    'html',
    'iframe',
    'legend',
    'li',
    'link',
    'main',
    'menu',
    'menuitem',
    'nav',
    'noframes',
    'ol',
    'optgroup',
    'option',
    'p',
    'param',
    'section',
    'source',
    'summary',
    'table',
    'tbody',
    'td',
    'tfoot',
    'th',
    'thead',
    'title',
    'tr',
    'track',
    'ul'
  ];

  var html_re = {};

  var attr_name     = '[a-zA-Z_:][a-zA-Z0-9:._-]*';

  var unquoted      = '[^"\'=<>`\\x00-\\x20]+';
  var single_quoted = "'[^']*'";
  var double_quoted = '"[^"]*"';

  var attr_value  = '(?:' + unquoted + '|' + single_quoted + '|' + double_quoted + ')';

  var attribute   = '(?:\\s+' + attr_name + '(?:\\s*=\\s*' + attr_value + ')?)';

  var open_tag    = '<[A-Za-z][A-Za-z0-9\\-]*' + attribute + '*\\s*\\/?>';

  var close_tag   = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>';
  var comment     = '<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->';
  var processing  = '<[?][\\s\\S]*?[?]>';
  var declaration = '<![A-Z]+\\s+[^>]*>';
  var cdata       = '<!\\[CDATA\\[[\\s\\S]*?\\]\\]>';

  var HTML_TAG_RE$1 = new RegExp('^(?:' + open_tag + '|' + close_tag + '|' + comment +
                          '|' + processing + '|' + declaration + '|' + cdata + ')');
  var HTML_OPEN_CLOSE_TAG_RE$1 = new RegExp('^(?:' + open_tag + '|' + close_tag + ')');

  html_re.HTML_TAG_RE = HTML_TAG_RE$1;
  html_re.HTML_OPEN_CLOSE_TAG_RE = HTML_OPEN_CLOSE_TAG_RE$1;

  var block_names = html_blocks;
  var HTML_OPEN_CLOSE_TAG_RE = html_re.HTML_OPEN_CLOSE_TAG_RE;

  // An array of opening and corresponding closing sequences for html tags,
  // last argument defines whether it can terminate a paragraph or not
  //
  var HTML_SEQUENCES = [
    [ /^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, true ],
    [ /^<!--/,        /-->/,   true ],
    [ /^<\?/,         /\?>/,   true ],
    [ /^<![A-Z]/,     />/,     true ],
    [ /^<!\[CDATA\[/, /\]\]>/, true ],
    [ new RegExp('^</?(' + block_names.join('|') + ')(?=(\\s|/?>|$))', 'i'), /^$/, true ],
    [ new RegExp(HTML_OPEN_CLOSE_TAG_RE.source + '\\s*$'),  /^$/, false ]
  ];


  var html_block = function html_block(state, startLine, endLine, silent) {
    var i, nextLine, token, lineText,
        pos = state.bMarks[startLine] + state.tShift[startLine],
        max = state.eMarks[startLine];

    // if it's indented more than 3 spaces, it should be a code block
    if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

    if (!state.md.options.html) { return false; }

    if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false; }

    lineText = state.src.slice(pos, max);

    for (i = 0; i < HTML_SEQUENCES.length; i++) {
      if (HTML_SEQUENCES[i][0].test(lineText)) { break; }
    }

    if (i === HTML_SEQUENCES.length) { return false; }

    if (silent) {
      // true if this sequence can be a terminator, false otherwise
      return HTML_SEQUENCES[i][2];
    }

    nextLine = startLine + 1;

    // If we are here - we detected HTML block.
    // Let's roll down till block end.
    if (!HTML_SEQUENCES[i][1].test(lineText)) {
      for (; nextLine < endLine; nextLine++) {
        if (state.sCount[nextLine] < state.blkIndent) { break; }

        pos = state.bMarks[nextLine] + state.tShift[nextLine];
        max = state.eMarks[nextLine];
        lineText = state.src.slice(pos, max);

        if (HTML_SEQUENCES[i][1].test(lineText)) {
          if (lineText.length !== 0) { nextLine++; }
          break;
        }
      }
    }

    state.line = nextLine;

    token         = state.push('html_block', '', 0);
    token.map     = [ startLine, nextLine ];
    token.content = state.getLines(startLine, nextLine, state.blkIndent, true);

    return true;
  };

  var isSpace$5 = utils$1.isSpace;


  var heading = function heading(state, startLine, endLine, silent) {
    var ch, level, tmp, token,
        pos = state.bMarks[startLine] + state.tShift[startLine],
        max = state.eMarks[startLine];

    // if it's indented more than 3 spaces, it should be a code block
    if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

    ch  = state.src.charCodeAt(pos);

    if (ch !== 0x23/* # */ || pos >= max) { return false; }

    // count heading level
    level = 1;
    ch = state.src.charCodeAt(++pos);
    while (ch === 0x23/* # */ && pos < max && level <= 6) {
      level++;
      ch = state.src.charCodeAt(++pos);
    }

    if (level > 6 || (pos < max && !isSpace$5(ch))) { return false; }

    if (silent) { return true; }

    // Let's cut tails like '    ###  ' from the end of string

    max = state.skipSpacesBack(max, pos);
    tmp = state.skipCharsBack(max, 0x23, pos); // #
    if (tmp > pos && isSpace$5(state.src.charCodeAt(tmp - 1))) {
      max = tmp;
    }

    state.line = startLine + 1;

    token        = state.push('heading_open', 'h' + String(level), 1);
    token.markup = '########'.slice(0, level);
    token.map    = [ startLine, state.line ];

    token          = state.push('inline', '', 0);
    token.content  = state.src.slice(pos, max).trim();
    token.map      = [ startLine, state.line ];
    token.children = [];

    token        = state.push('heading_close', 'h' + String(level), -1);
    token.markup = '########'.slice(0, level);

    return true;
  };

  var lheading = function lheading(state, startLine, endLine/*, silent*/) {
    var content, terminate, i, l, token, pos, max, level, marker,
        nextLine = startLine + 1, oldParentType,
        terminatorRules = state.md.block.ruler.getRules('paragraph');

    // if it's indented more than 3 spaces, it should be a code block
    if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

    oldParentType = state.parentType;
    state.parentType = 'paragraph'; // use paragraph to match terminatorRules

    // jump line-by-line until empty one or EOF
    for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
      // this would be a code block normally, but after paragraph
      // it's considered a lazy continuation regardless of what's there
      if (state.sCount[nextLine] - state.blkIndent > 3) { continue; }

      //
      // Check for underline in setext header
      //
      if (state.sCount[nextLine] >= state.blkIndent) {
        pos = state.bMarks[nextLine] + state.tShift[nextLine];
        max = state.eMarks[nextLine];

        if (pos < max) {
          marker = state.src.charCodeAt(pos);

          if (marker === 0x2D/* - */ || marker === 0x3D/* = */) {
            pos = state.skipChars(pos, marker);
            pos = state.skipSpaces(pos);

            if (pos >= max) {
              level = (marker === 0x3D/* = */ ? 1 : 2);
              break;
            }
          }
        }
      }

      // quirk for blockquotes, this line should already be checked by that rule
      if (state.sCount[nextLine] < 0) { continue; }

      // Some tags can terminate paragraph without empty line.
      terminate = false;
      for (i = 0, l = terminatorRules.length; i < l; i++) {
        if (terminatorRules[i](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }
      if (terminate) { break; }
    }

    if (!level) {
      // Didn't find valid underline
      return false;
    }

    content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();

    state.line = nextLine + 1;

    token          = state.push('heading_open', 'h' + String(level), 1);
    token.markup   = String.fromCharCode(marker);
    token.map      = [ startLine, state.line ];

    token          = state.push('inline', '', 0);
    token.content  = content;
    token.map      = [ startLine, state.line - 1 ];
    token.children = [];

    token          = state.push('heading_close', 'h' + String(level), -1);
    token.markup   = String.fromCharCode(marker);

    state.parentType = oldParentType;

    return true;
  };

  var paragraph = function paragraph(state, startLine/*, endLine*/) {
    var content, terminate, i, l, token, oldParentType,
        nextLine = startLine + 1,
        terminatorRules = state.md.block.ruler.getRules('paragraph'),
        endLine = state.lineMax;

    oldParentType = state.parentType;
    state.parentType = 'paragraph';

    // jump line-by-line until empty one or EOF
    for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
      // this would be a code block normally, but after paragraph
      // it's considered a lazy continuation regardless of what's there
      if (state.sCount[nextLine] - state.blkIndent > 3) { continue; }

      // quirk for blockquotes, this line should already be checked by that rule
      if (state.sCount[nextLine] < 0) { continue; }

      // Some tags can terminate paragraph without empty line.
      terminate = false;
      for (i = 0, l = terminatorRules.length; i < l; i++) {
        if (terminatorRules[i](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }
      if (terminate) { break; }
    }

    content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();

    state.line = nextLine;

    token          = state.push('paragraph_open', 'p', 1);
    token.map      = [ startLine, state.line ];

    token          = state.push('inline', '', 0);
    token.content  = content;
    token.map      = [ startLine, state.line ];
    token.children = [];

    token          = state.push('paragraph_close', 'p', -1);

    state.parentType = oldParentType;

    return true;
  };

  var Token$1 = token;
  var isSpace$4 = utils$1.isSpace;


  function StateBlock(src, md, env, tokens) {
    var ch, s, start, pos, len, indent, offset, indent_found;

    this.src = src;

    // link to parser instance
    this.md     = md;

    this.env = env;

    //
    // Internal state vartiables
    //

    this.tokens = tokens;

    this.bMarks = [];  // line begin offsets for fast jumps
    this.eMarks = [];  // line end offsets for fast jumps
    this.tShift = [];  // offsets of the first non-space characters (tabs not expanded)
    this.sCount = [];  // indents for each line (tabs expanded)

    // An amount of virtual spaces (tabs expanded) between beginning
    // of each line (bMarks) and real beginning of that line.
    //
    // It exists only as a hack because blockquotes override bMarks
    // losing information in the process.
    //
    // It's used only when expanding tabs, you can think about it as
    // an initial tab length, e.g. bsCount=21 applied to string `\t123`
    // means first tab should be expanded to 4-21%4 === 3 spaces.
    //
    this.bsCount = [];

    // block parser variables
    this.blkIndent  = 0; // required block content indent (for example, if we are
                         // inside a list, it would be positioned after list marker)
    this.line       = 0; // line index in src
    this.lineMax    = 0; // lines count
    this.tight      = false;  // loose/tight mode for lists
    this.ddIndent   = -1; // indent of the current dd block (-1 if there isn't any)
    this.listIndent = -1; // indent of the current list block (-1 if there isn't any)

    // can be 'blockquote', 'list', 'root', 'paragraph' or 'reference'
    // used in lists to determine if they interrupt a paragraph
    this.parentType = 'root';

    this.level = 0;

    // renderer
    this.result = '';

    // Create caches
    // Generate markers.
    s = this.src;
    indent_found = false;

    for (start = pos = indent = offset = 0, len = s.length; pos < len; pos++) {
      ch = s.charCodeAt(pos);

      if (!indent_found) {
        if (isSpace$4(ch)) {
          indent++;

          if (ch === 0x09) {
            offset += 4 - offset % 4;
          } else {
            offset++;
          }
          continue;
        } else {
          indent_found = true;
        }
      }

      if (ch === 0x0A || pos === len - 1) {
        if (ch !== 0x0A) { pos++; }
        this.bMarks.push(start);
        this.eMarks.push(pos);
        this.tShift.push(indent);
        this.sCount.push(offset);
        this.bsCount.push(0);

        indent_found = false;
        indent = 0;
        offset = 0;
        start = pos + 1;
      }
    }

    // Push fake entry to simplify cache bounds checks
    this.bMarks.push(s.length);
    this.eMarks.push(s.length);
    this.tShift.push(0);
    this.sCount.push(0);
    this.bsCount.push(0);

    this.lineMax = this.bMarks.length - 1; // don't count last fake line
  }

  // Push new token to "stream".
  //
  StateBlock.prototype.push = function (type, tag, nesting) {
    var token = new Token$1(type, tag, nesting);
    token.block = true;

    if (nesting < 0) this.level--; // closing tag
    token.level = this.level;
    if (nesting > 0) this.level++; // opening tag

    this.tokens.push(token);
    return token;
  };

  StateBlock.prototype.isEmpty = function isEmpty(line) {
    return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
  };

  StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
    for (var max = this.lineMax; from < max; from++) {
      if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
        break;
      }
    }
    return from;
  };

  // Skip spaces from given position.
  StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
    var ch;

    for (var max = this.src.length; pos < max; pos++) {
      ch = this.src.charCodeAt(pos);
      if (!isSpace$4(ch)) { break; }
    }
    return pos;
  };

  // Skip spaces from given position in reverse.
  StateBlock.prototype.skipSpacesBack = function skipSpacesBack(pos, min) {
    if (pos <= min) { return pos; }

    while (pos > min) {
      if (!isSpace$4(this.src.charCodeAt(--pos))) { return pos + 1; }
    }
    return pos;
  };

  // Skip char codes from given position
  StateBlock.prototype.skipChars = function skipChars(pos, code) {
    for (var max = this.src.length; pos < max; pos++) {
      if (this.src.charCodeAt(pos) !== code) { break; }
    }
    return pos;
  };

  // Skip char codes reverse from given position - 1
  StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code, min) {
    if (pos <= min) { return pos; }

    while (pos > min) {
      if (code !== this.src.charCodeAt(--pos)) { return pos + 1; }
    }
    return pos;
  };

  // cut lines range from source.
  StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
    var i, lineIndent, ch, first, last, queue, lineStart,
        line = begin;

    if (begin >= end) {
      return '';
    }

    queue = new Array(end - begin);

    for (i = 0; line < end; line++, i++) {
      lineIndent = 0;
      lineStart = first = this.bMarks[line];

      if (line + 1 < end || keepLastLF) {
        // No need for bounds check because we have fake entry on tail.
        last = this.eMarks[line] + 1;
      } else {
        last = this.eMarks[line];
      }

      while (first < last && lineIndent < indent) {
        ch = this.src.charCodeAt(first);

        if (isSpace$4(ch)) {
          if (ch === 0x09) {
            lineIndent += 4 - (lineIndent + this.bsCount[line]) % 4;
          } else {
            lineIndent++;
          }
        } else if (first - lineStart < this.tShift[line]) {
          // patched tShift masked characters to look like spaces (blockquotes, list markers)
          lineIndent++;
        } else {
          break;
        }

        first++;
      }

      if (lineIndent > indent) {
        // partially expanding tabs in code blocks, e.g '\t\tfoobar'
        // with indent=2 becomes '  \tfoobar'
        queue[i] = new Array(lineIndent - indent + 1).join(' ') + this.src.slice(first, last);
      } else {
        queue[i] = this.src.slice(first, last);
      }
    }

    return queue.join('');
  };

  // re-export Token class to use in block rules
  StateBlock.prototype.Token = Token$1;


  var state_block = StateBlock;

  /** internal
   * class ParserBlock
   *
   * Block-level tokenizer.
   **/


  var Ruler$1           = ruler;


  var _rules$1 = [
    // First 2 params - rule name & source. Secondary array - list of rules,
    // which can be terminated by this one.
    [ 'table',      table,      [ 'paragraph', 'reference' ] ],
    [ 'code',       code ],
    [ 'fence',      fence,      [ 'paragraph', 'reference', 'blockquote', 'list' ] ],
    [ 'blockquote', blockquote, [ 'paragraph', 'reference', 'blockquote', 'list' ] ],
    [ 'hr',         hr,         [ 'paragraph', 'reference', 'blockquote', 'list' ] ],
    [ 'list',       list,       [ 'paragraph', 'reference', 'blockquote' ] ],
    [ 'reference',  reference ],
    [ 'html_block', html_block, [ 'paragraph', 'reference', 'blockquote' ] ],
    [ 'heading',    heading,    [ 'paragraph', 'reference', 'blockquote' ] ],
    [ 'lheading',   lheading ],
    [ 'paragraph',  paragraph ]
  ];


  /**
   * new ParserBlock()
   **/
  function ParserBlock$1() {
    /**
     * ParserBlock#ruler -> Ruler
     *
     * [[Ruler]] instance. Keep configuration of block rules.
     **/
    this.ruler = new Ruler$1();

    for (var i = 0; i < _rules$1.length; i++) {
      this.ruler.push(_rules$1[i][0], _rules$1[i][1], { alt: (_rules$1[i][2] || []).slice() });
    }
  }


  // Generate tokens for input range
  //
  ParserBlock$1.prototype.tokenize = function (state, startLine, endLine) {
    var ok, i,
        rules = this.ruler.getRules(''),
        len = rules.length,
        line = startLine,
        hasEmptyLines = false,
        maxNesting = state.md.options.maxNesting;

    while (line < endLine) {
      state.line = line = state.skipEmptyLines(line);
      if (line >= endLine) { break; }

      // Termination condition for nested calls.
      // Nested calls currently used for blockquotes & lists
      if (state.sCount[line] < state.blkIndent) { break; }

      // If nesting level exceeded - skip tail to the end. That's not ordinary
      // situation and we should not care about content.
      if (state.level >= maxNesting) {
        state.line = endLine;
        break;
      }

      // Try all possible rules.
      // On success, rule should:
      //
      // - update `state.line`
      // - update `state.tokens`
      // - return true

      for (i = 0; i < len; i++) {
        ok = rules[i](state, line, endLine, false);
        if (ok) { break; }
      }

      // set state.tight if we had an empty line before current tag
      // i.e. latest empty line should not count
      state.tight = !hasEmptyLines;

      // paragraph might "eat" one newline after it in nested lists
      if (state.isEmpty(state.line - 1)) {
        hasEmptyLines = true;
      }

      line = state.line;

      if (line < endLine && state.isEmpty(line)) {
        hasEmptyLines = true;
        line++;
        state.line = line;
      }
    }
  };


  /**
   * ParserBlock.parse(str, md, env, outTokens)
   *
   * Process input string and push block tokens into `outTokens`
   **/
  ParserBlock$1.prototype.parse = function (src, md, env, outTokens) {
    var state;

    if (!src) { return; }

    state = new this.State(src, md, env, outTokens);

    this.tokenize(state, state.line, state.lineMax);
  };


  ParserBlock$1.prototype.State = state_block;


  var parser_block = ParserBlock$1;

  // Rule to skip pure text
  // '{}$%@~+=:' reserved for extentions

  // !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, or ~

  // !!!! Don't confuse with "Markdown ASCII Punctuation" chars
  // http://spec.commonmark.org/0.15/#ascii-punctuation-character
  function isTerminatorChar(ch) {
    switch (ch) {
      case 0x0A/* \n */:
      case 0x21/* ! */:
      case 0x23/* # */:
      case 0x24/* $ */:
      case 0x25/* % */:
      case 0x26/* & */:
      case 0x2A/* * */:
      case 0x2B/* + */:
      case 0x2D/* - */:
      case 0x3A/* : */:
      case 0x3C/* < */:
      case 0x3D/* = */:
      case 0x3E/* > */:
      case 0x40/* @ */:
      case 0x5B/* [ */:
      case 0x5C/* \ */:
      case 0x5D/* ] */:
      case 0x5E/* ^ */:
      case 0x5F/* _ */:
      case 0x60/* ` */:
      case 0x7B/* { */:
      case 0x7D/* } */:
      case 0x7E/* ~ */:
        return true;
      default:
        return false;
    }
  }

  var text = function text(state, silent) {
    var pos = state.pos;

    while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
      pos++;
    }

    if (pos === state.pos) { return false; }

    if (!silent) { state.pending += state.src.slice(state.pos, pos); }

    state.pos = pos;

    return true;
  };

  var isSpace$3 = utils$1.isSpace;


  var newline = function newline(state, silent) {
    var pmax, max, ws, pos = state.pos;

    if (state.src.charCodeAt(pos) !== 0x0A/* \n */) { return false; }

    pmax = state.pending.length - 1;
    max = state.posMax;

    // '  \n' -> hardbreak
    // Lookup in pending chars is bad practice! Don't copy to other rules!
    // Pending string is stored in concat mode, indexed lookups will cause
    // convertion to flat mode.
    if (!silent) {
      if (pmax >= 0 && state.pending.charCodeAt(pmax) === 0x20) {
        if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 0x20) {
          // Find whitespaces tail of pending chars.
          ws = pmax - 1;
          while (ws >= 1 && state.pending.charCodeAt(ws - 1) === 0x20) ws--;

          state.pending = state.pending.slice(0, ws);
          state.push('hardbreak', 'br', 0);
        } else {
          state.pending = state.pending.slice(0, -1);
          state.push('softbreak', 'br', 0);
        }

      } else {
        state.push('softbreak', 'br', 0);
      }
    }

    pos++;

    // skip heading spaces for next line
    while (pos < max && isSpace$3(state.src.charCodeAt(pos))) { pos++; }

    state.pos = pos;
    return true;
  };

  var isSpace$2 = utils$1.isSpace;

  var ESCAPED = [];

  for (var i = 0; i < 256; i++) { ESCAPED.push(0); }

  '\\!"#$%&\'()*+,./:;<=>?@[]^_`{|}~-'
    .split('').forEach(function (ch) { ESCAPED[ch.charCodeAt(0)] = 1; });


  var _escape = function escape(state, silent) {
    var ch, pos = state.pos, max = state.posMax;

    if (state.src.charCodeAt(pos) !== 0x5C/* \ */) { return false; }

    pos++;

    if (pos < max) {
      ch = state.src.charCodeAt(pos);

      if (ch < 256 && ESCAPED[ch] !== 0) {
        if (!silent) { state.pending += state.src[pos]; }
        state.pos += 2;
        return true;
      }

      if (ch === 0x0A) {
        if (!silent) {
          state.push('hardbreak', 'br', 0);
        }

        pos++;
        // skip leading whitespaces from next line
        while (pos < max) {
          ch = state.src.charCodeAt(pos);
          if (!isSpace$2(ch)) { break; }
          pos++;
        }

        state.pos = pos;
        return true;
      }
    }

    if (!silent) { state.pending += '\\'; }
    state.pos++;
    return true;
  };

  var backticks = function backtick(state, silent) {
    var start, max, marker, token, matchStart, matchEnd, openerLength, closerLength,
        pos = state.pos,
        ch = state.src.charCodeAt(pos);

    if (ch !== 0x60/* ` */) { return false; }

    start = pos;
    pos++;
    max = state.posMax;

    // scan marker length
    while (pos < max && state.src.charCodeAt(pos) === 0x60/* ` */) { pos++; }

    marker = state.src.slice(start, pos);
    openerLength = marker.length;

    if (state.backticksScanned && (state.backticks[openerLength] || 0) <= start) {
      if (!silent) state.pending += marker;
      state.pos += openerLength;
      return true;
    }

    matchStart = matchEnd = pos;

    // Nothing found in the cache, scan until the end of the line (or until marker is found)
    while ((matchStart = state.src.indexOf('`', matchEnd)) !== -1) {
      matchEnd = matchStart + 1;

      // scan marker length
      while (matchEnd < max && state.src.charCodeAt(matchEnd) === 0x60/* ` */) { matchEnd++; }

      closerLength = matchEnd - matchStart;

      if (closerLength === openerLength) {
        // Found matching closer length.
        if (!silent) {
          token     = state.push('code_inline', 'code', 0);
          token.markup  = marker;
          token.content = state.src.slice(pos, matchStart)
            .replace(/\n/g, ' ')
            .replace(/^ (.+) $/, '$1');
        }
        state.pos = matchEnd;
        return true;
      }

      // Some different length found, put it in cache as upper limit of where closer can be found
      state.backticks[closerLength] = matchStart;
    }

    // Scanned through the end, didn't find anything
    state.backticksScanned = true;

    if (!silent) state.pending += marker;
    state.pos += openerLength;
    return true;
  };

  var strikethrough = {};

  // Insert each marker as a separate text token, and add it to delimiter list
  //
  strikethrough.tokenize = function strikethrough(state, silent) {
    var i, scanned, token, len, ch,
        start = state.pos,
        marker = state.src.charCodeAt(start);

    if (silent) { return false; }

    if (marker !== 0x7E/* ~ */) { return false; }

    scanned = state.scanDelims(state.pos, true);
    len = scanned.length;
    ch = String.fromCharCode(marker);

    if (len < 2) { return false; }

    if (len % 2) {
      token         = state.push('text', '', 0);
      token.content = ch;
      len--;
    }

    for (i = 0; i < len; i += 2) {
      token         = state.push('text', '', 0);
      token.content = ch + ch;

      state.delimiters.push({
        marker: marker,
        length: 0,     // disable "rule of 3" length checks meant for emphasis
        token:  state.tokens.length - 1,
        end:    -1,
        open:   scanned.can_open,
        close:  scanned.can_close
      });
    }

    state.pos += scanned.length;

    return true;
  };


  function postProcess$1(state, delimiters) {
    var i, j,
        startDelim,
        endDelim,
        token,
        loneMarkers = [],
        max = delimiters.length;

    for (i = 0; i < max; i++) {
      startDelim = delimiters[i];

      if (startDelim.marker !== 0x7E/* ~ */) {
        continue;
      }

      if (startDelim.end === -1) {
        continue;
      }

      endDelim = delimiters[startDelim.end];

      token         = state.tokens[startDelim.token];
      token.type    = 's_open';
      token.tag     = 's';
      token.nesting = 1;
      token.markup  = '~~';
      token.content = '';

      token         = state.tokens[endDelim.token];
      token.type    = 's_close';
      token.tag     = 's';
      token.nesting = -1;
      token.markup  = '~~';
      token.content = '';

      if (state.tokens[endDelim.token - 1].type === 'text' &&
          state.tokens[endDelim.token - 1].content === '~') {

        loneMarkers.push(endDelim.token - 1);
      }
    }

    // If a marker sequence has an odd number of characters, it's splitted
    // like this: `~~~~~` -> `~` + `~~` + `~~`, leaving one marker at the
    // start of the sequence.
    //
    // So, we have to move all those markers after subsequent s_close tags.
    //
    while (loneMarkers.length) {
      i = loneMarkers.pop();
      j = i + 1;

      while (j < state.tokens.length && state.tokens[j].type === 's_close') {
        j++;
      }

      j--;

      if (i !== j) {
        token = state.tokens[j];
        state.tokens[j] = state.tokens[i];
        state.tokens[i] = token;
      }
    }
  }


  // Walk through delimiter list and replace text tokens with tags
  //
  strikethrough.postProcess = function strikethrough(state) {
    var curr,
        tokens_meta = state.tokens_meta,
        max = state.tokens_meta.length;

    postProcess$1(state, state.delimiters);

    for (curr = 0; curr < max; curr++) {
      if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
        postProcess$1(state, tokens_meta[curr].delimiters);
      }
    }
  };

  var emphasis = {};

  // Insert each marker as a separate text token, and add it to delimiter list
  //
  emphasis.tokenize = function emphasis(state, silent) {
    var i, scanned, token,
        start = state.pos,
        marker = state.src.charCodeAt(start);

    if (silent) { return false; }

    if (marker !== 0x5F /* _ */ && marker !== 0x2A /* * */) { return false; }

    scanned = state.scanDelims(state.pos, marker === 0x2A);

    for (i = 0; i < scanned.length; i++) {
      token         = state.push('text', '', 0);
      token.content = String.fromCharCode(marker);

      state.delimiters.push({
        // Char code of the starting marker (number).
        //
        marker: marker,

        // Total length of these series of delimiters.
        //
        length: scanned.length,

        // A position of the token this delimiter corresponds to.
        //
        token:  state.tokens.length - 1,

        // If this delimiter is matched as a valid opener, `end` will be
        // equal to its position, otherwise it's `-1`.
        //
        end:    -1,

        // Boolean flags that determine if this delimiter could open or close
        // an emphasis.
        //
        open:   scanned.can_open,
        close:  scanned.can_close
      });
    }

    state.pos += scanned.length;

    return true;
  };


  function postProcess(state, delimiters) {
    var i,
        startDelim,
        endDelim,
        token,
        ch,
        isStrong,
        max = delimiters.length;

    for (i = max - 1; i >= 0; i--) {
      startDelim = delimiters[i];

      if (startDelim.marker !== 0x5F/* _ */ && startDelim.marker !== 0x2A/* * */) {
        continue;
      }

      // Process only opening markers
      if (startDelim.end === -1) {
        continue;
      }

      endDelim = delimiters[startDelim.end];

      // If the previous delimiter has the same marker and is adjacent to this one,
      // merge those into one strong delimiter.
      //
      // `<em><em>whatever</em></em>` -> `<strong>whatever</strong>`
      //
      isStrong = i > 0 &&
                 delimiters[i - 1].end === startDelim.end + 1 &&
                 // check that first two markers match and adjacent
                 delimiters[i - 1].marker === startDelim.marker &&
                 delimiters[i - 1].token === startDelim.token - 1 &&
                 // check that last two markers are adjacent (we can safely assume they match)
                 delimiters[startDelim.end + 1].token === endDelim.token + 1;

      ch = String.fromCharCode(startDelim.marker);

      token         = state.tokens[startDelim.token];
      token.type    = isStrong ? 'strong_open' : 'em_open';
      token.tag     = isStrong ? 'strong' : 'em';
      token.nesting = 1;
      token.markup  = isStrong ? ch + ch : ch;
      token.content = '';

      token         = state.tokens[endDelim.token];
      token.type    = isStrong ? 'strong_close' : 'em_close';
      token.tag     = isStrong ? 'strong' : 'em';
      token.nesting = -1;
      token.markup  = isStrong ? ch + ch : ch;
      token.content = '';

      if (isStrong) {
        state.tokens[delimiters[i - 1].token].content = '';
        state.tokens[delimiters[startDelim.end + 1].token].content = '';
        i--;
      }
    }
  }


  // Walk through delimiter list and replace text tokens with tags
  //
  emphasis.postProcess = function emphasis(state) {
    var curr,
        tokens_meta = state.tokens_meta,
        max = state.tokens_meta.length;

    postProcess(state, state.delimiters);

    for (curr = 0; curr < max; curr++) {
      if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
        postProcess(state, tokens_meta[curr].delimiters);
      }
    }
  };

  var normalizeReference$1   = utils$1.normalizeReference;
  var isSpace$1              = utils$1.isSpace;


  var link$1 = function link(state, silent) {
    var attrs,
        code,
        label,
        labelEnd,
        labelStart,
        pos,
        res,
        ref,
        token,
        href = '',
        title = '',
        oldPos = state.pos,
        max = state.posMax,
        start = state.pos,
        parseReference = true;

    if (state.src.charCodeAt(state.pos) !== 0x5B/* [ */) { return false; }

    labelStart = state.pos + 1;
    labelEnd = state.md.helpers.parseLinkLabel(state, state.pos, true);

    // parser failed to find ']', so it's not a valid link
    if (labelEnd < 0) { return false; }

    pos = labelEnd + 1;
    if (pos < max && state.src.charCodeAt(pos) === 0x28/* ( */) {
      //
      // Inline link
      //

      // might have found a valid shortcut link, disable reference parsing
      parseReference = false;

      // [link](  <href>  "title"  )
      //        ^^ skipping these spaces
      pos++;
      for (; pos < max; pos++) {
        code = state.src.charCodeAt(pos);
        if (!isSpace$1(code) && code !== 0x0A) { break; }
      }
      if (pos >= max) { return false; }

      // [link](  <href>  "title"  )
      //          ^^^^^^ parsing link destination
      start = pos;
      res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
      if (res.ok) {
        href = state.md.normalizeLink(res.str);
        if (state.md.validateLink(href)) {
          pos = res.pos;
        } else {
          href = '';
        }

        // [link](  <href>  "title"  )
        //                ^^ skipping these spaces
        start = pos;
        for (; pos < max; pos++) {
          code = state.src.charCodeAt(pos);
          if (!isSpace$1(code) && code !== 0x0A) { break; }
        }

        // [link](  <href>  "title"  )
        //                  ^^^^^^^ parsing link title
        res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
        if (pos < max && start !== pos && res.ok) {
          title = res.str;
          pos = res.pos;

          // [link](  <href>  "title"  )
          //                         ^^ skipping these spaces
          for (; pos < max; pos++) {
            code = state.src.charCodeAt(pos);
            if (!isSpace$1(code) && code !== 0x0A) { break; }
          }
        }
      }

      if (pos >= max || state.src.charCodeAt(pos) !== 0x29/* ) */) {
        // parsing a valid shortcut link failed, fallback to reference
        parseReference = true;
      }
      pos++;
    }

    if (parseReference) {
      //
      // Link reference
      //
      if (typeof state.env.references === 'undefined') { return false; }

      if (pos < max && state.src.charCodeAt(pos) === 0x5B/* [ */) {
        start = pos + 1;
        pos = state.md.helpers.parseLinkLabel(state, pos);
        if (pos >= 0) {
          label = state.src.slice(start, pos++);
        } else {
          pos = labelEnd + 1;
        }
      } else {
        pos = labelEnd + 1;
      }

      // covers label === '' and label === undefined
      // (collapsed reference link and shortcut reference link respectively)
      if (!label) { label = state.src.slice(labelStart, labelEnd); }

      ref = state.env.references[normalizeReference$1(label)];
      if (!ref) {
        state.pos = oldPos;
        return false;
      }
      href = ref.href;
      title = ref.title;
    }

    //
    // We found the end of the link, and know for a fact it's a valid link;
    // so all that's left to do is to call tokenizer.
    //
    if (!silent) {
      state.pos = labelStart;
      state.posMax = labelEnd;

      token        = state.push('link_open', 'a', 1);
      token.attrs  = attrs = [ [ 'href', href ] ];
      if (title) {
        attrs.push([ 'title', title ]);
      }

      state.md.inline.tokenize(state);

      token        = state.push('link_close', 'a', -1);
    }

    state.pos = pos;
    state.posMax = max;
    return true;
  };

  var normalizeReference   = utils$1.normalizeReference;
  var isSpace              = utils$1.isSpace;


  var image = function image(state, silent) {
    var attrs,
        code,
        content,
        label,
        labelEnd,
        labelStart,
        pos,
        ref,
        res,
        title,
        token,
        tokens,
        start,
        href = '',
        oldPos = state.pos,
        max = state.posMax;

    if (state.src.charCodeAt(state.pos) !== 0x21/* ! */) { return false; }
    if (state.src.charCodeAt(state.pos + 1) !== 0x5B/* [ */) { return false; }

    labelStart = state.pos + 2;
    labelEnd = state.md.helpers.parseLinkLabel(state, state.pos + 1, false);

    // parser failed to find ']', so it's not a valid link
    if (labelEnd < 0) { return false; }

    pos = labelEnd + 1;
    if (pos < max && state.src.charCodeAt(pos) === 0x28/* ( */) {
      //
      // Inline link
      //

      // [link](  <href>  "title"  )
      //        ^^ skipping these spaces
      pos++;
      for (; pos < max; pos++) {
        code = state.src.charCodeAt(pos);
        if (!isSpace(code) && code !== 0x0A) { break; }
      }
      if (pos >= max) { return false; }

      // [link](  <href>  "title"  )
      //          ^^^^^^ parsing link destination
      start = pos;
      res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
      if (res.ok) {
        href = state.md.normalizeLink(res.str);
        if (state.md.validateLink(href)) {
          pos = res.pos;
        } else {
          href = '';
        }
      }

      // [link](  <href>  "title"  )
      //                ^^ skipping these spaces
      start = pos;
      for (; pos < max; pos++) {
        code = state.src.charCodeAt(pos);
        if (!isSpace(code) && code !== 0x0A) { break; }
      }

      // [link](  <href>  "title"  )
      //                  ^^^^^^^ parsing link title
      res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
      if (pos < max && start !== pos && res.ok) {
        title = res.str;
        pos = res.pos;

        // [link](  <href>  "title"  )
        //                         ^^ skipping these spaces
        for (; pos < max; pos++) {
          code = state.src.charCodeAt(pos);
          if (!isSpace(code) && code !== 0x0A) { break; }
        }
      } else {
        title = '';
      }

      if (pos >= max || state.src.charCodeAt(pos) !== 0x29/* ) */) {
        state.pos = oldPos;
        return false;
      }
      pos++;
    } else {
      //
      // Link reference
      //
      if (typeof state.env.references === 'undefined') { return false; }

      if (pos < max && state.src.charCodeAt(pos) === 0x5B/* [ */) {
        start = pos + 1;
        pos = state.md.helpers.parseLinkLabel(state, pos);
        if (pos >= 0) {
          label = state.src.slice(start, pos++);
        } else {
          pos = labelEnd + 1;
        }
      } else {
        pos = labelEnd + 1;
      }

      // covers label === '' and label === undefined
      // (collapsed reference link and shortcut reference link respectively)
      if (!label) { label = state.src.slice(labelStart, labelEnd); }

      ref = state.env.references[normalizeReference(label)];
      if (!ref) {
        state.pos = oldPos;
        return false;
      }
      href = ref.href;
      title = ref.title;
    }

    //
    // We found the end of the link, and know for a fact it's a valid link;
    // so all that's left to do is to call tokenizer.
    //
    if (!silent) {
      content = state.src.slice(labelStart, labelEnd);

      state.md.inline.parse(
        content,
        state.md,
        state.env,
        tokens = []
      );

      token          = state.push('image', 'img', 0);
      token.attrs    = attrs = [ [ 'src', href ], [ 'alt', '' ] ];
      token.children = tokens;
      token.content  = content;

      if (title) {
        attrs.push([ 'title', title ]);
      }
    }

    state.pos = pos;
    state.posMax = max;
    return true;
  };

  /*eslint max-len:0*/
  var EMAIL_RE    = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/;
  var AUTOLINK_RE = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;


  var autolink = function autolink(state, silent) {
    var url, fullUrl, token, ch, start, max,
        pos = state.pos;

    if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false; }

    start = state.pos;
    max = state.posMax;

    for (;;) {
      if (++pos >= max) return false;

      ch = state.src.charCodeAt(pos);

      if (ch === 0x3C /* < */) return false;
      if (ch === 0x3E /* > */) break;
    }

    url = state.src.slice(start + 1, pos);

    if (AUTOLINK_RE.test(url)) {
      fullUrl = state.md.normalizeLink(url);
      if (!state.md.validateLink(fullUrl)) { return false; }

      if (!silent) {
        token         = state.push('link_open', 'a', 1);
        token.attrs   = [ [ 'href', fullUrl ] ];
        token.markup  = 'autolink';
        token.info    = 'auto';

        token         = state.push('text', '', 0);
        token.content = state.md.normalizeLinkText(url);

        token         = state.push('link_close', 'a', -1);
        token.markup  = 'autolink';
        token.info    = 'auto';
      }

      state.pos += url.length + 2;
      return true;
    }

    if (EMAIL_RE.test(url)) {
      fullUrl = state.md.normalizeLink('mailto:' + url);
      if (!state.md.validateLink(fullUrl)) { return false; }

      if (!silent) {
        token         = state.push('link_open', 'a', 1);
        token.attrs   = [ [ 'href', fullUrl ] ];
        token.markup  = 'autolink';
        token.info    = 'auto';

        token         = state.push('text', '', 0);
        token.content = state.md.normalizeLinkText(url);

        token         = state.push('link_close', 'a', -1);
        token.markup  = 'autolink';
        token.info    = 'auto';
      }

      state.pos += url.length + 2;
      return true;
    }

    return false;
  };

  var HTML_TAG_RE = html_re.HTML_TAG_RE;


  function isLetter(ch) {
    /*eslint no-bitwise:0*/
    var lc = ch | 0x20; // to lower case
    return (lc >= 0x61/* a */) && (lc <= 0x7a/* z */);
  }


  var html_inline = function html_inline(state, silent) {
    var ch, match, max, token,
        pos = state.pos;

    if (!state.md.options.html) { return false; }

    // Check start
    max = state.posMax;
    if (state.src.charCodeAt(pos) !== 0x3C/* < */ ||
        pos + 2 >= max) {
      return false;
    }

    // Quick fail on second char
    ch = state.src.charCodeAt(pos + 1);
    if (ch !== 0x21/* ! */ &&
        ch !== 0x3F/* ? */ &&
        ch !== 0x2F/* / */ &&
        !isLetter(ch)) {
      return false;
    }

    match = state.src.slice(pos).match(HTML_TAG_RE);
    if (!match) { return false; }

    if (!silent) {
      token         = state.push('html_inline', '', 0);
      token.content = state.src.slice(pos, pos + match[0].length);
    }
    state.pos += match[0].length;
    return true;
  };

  var entities          = entities$1;
  var has               = utils$1.has;
  var isValidEntityCode = utils$1.isValidEntityCode;
  var fromCodePoint     = utils$1.fromCodePoint;


  var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i;
  var NAMED_RE   = /^&([a-z][a-z0-9]{1,31});/i;


  var entity = function entity(state, silent) {
    var ch, code, match, pos = state.pos, max = state.posMax;

    if (state.src.charCodeAt(pos) !== 0x26/* & */) { return false; }

    if (pos + 1 < max) {
      ch = state.src.charCodeAt(pos + 1);

      if (ch === 0x23 /* # */) {
        match = state.src.slice(pos).match(DIGITAL_RE);
        if (match) {
          if (!silent) {
            code = match[1][0].toLowerCase() === 'x' ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);
            state.pending += isValidEntityCode(code) ? fromCodePoint(code) : fromCodePoint(0xFFFD);
          }
          state.pos += match[0].length;
          return true;
        }
      } else {
        match = state.src.slice(pos).match(NAMED_RE);
        if (match) {
          if (has(entities, match[1])) {
            if (!silent) { state.pending += entities[match[1]]; }
            state.pos += match[0].length;
            return true;
          }
        }
      }
    }

    if (!silent) { state.pending += '&'; }
    state.pos++;
    return true;
  };

  function processDelimiters(state, delimiters) {
    var closerIdx, openerIdx, closer, opener, minOpenerIdx, newMinOpenerIdx,
        isOddMatch, lastJump,
        openersBottom = {},
        max = delimiters.length;

    if (!max) return;

    // headerIdx is the first delimiter of the current (where closer is) delimiter run
    var headerIdx = 0;
    var lastTokenIdx = -2; // needs any value lower than -1
    var jumps = [];

    for (closerIdx = 0; closerIdx < max; closerIdx++) {
      closer = delimiters[closerIdx];

      jumps.push(0);

      // markers belong to same delimiter run if:
      //  - they have adjacent tokens
      //  - AND markers are the same
      //
      if (delimiters[headerIdx].marker !== closer.marker || lastTokenIdx !== closer.token - 1) {
        headerIdx = closerIdx;
      }

      lastTokenIdx = closer.token;

      // Length is only used for emphasis-specific "rule of 3",
      // if it's not defined (in strikethrough or 3rd party plugins),
      // we can default it to 0 to disable those checks.
      //
      closer.length = closer.length || 0;

      if (!closer.close) continue;

      // Previously calculated lower bounds (previous fails)
      // for each marker, each delimiter length modulo 3,
      // and for whether this closer can be an opener;
      // https://github.com/commonmark/cmark/commit/34250e12ccebdc6372b8b49c44fab57c72443460
      if (!openersBottom.hasOwnProperty(closer.marker)) {
        openersBottom[closer.marker] = [ -1, -1, -1, -1, -1, -1 ];
      }

      minOpenerIdx = openersBottom[closer.marker][(closer.open ? 3 : 0) + (closer.length % 3)];

      openerIdx = headerIdx - jumps[headerIdx] - 1;

      newMinOpenerIdx = openerIdx;

      for (; openerIdx > minOpenerIdx; openerIdx -= jumps[openerIdx] + 1) {
        opener = delimiters[openerIdx];

        if (opener.marker !== closer.marker) continue;

        if (opener.open && opener.end < 0) {

          isOddMatch = false;

          // from spec:
          //
          // If one of the delimiters can both open and close emphasis, then the
          // sum of the lengths of the delimiter runs containing the opening and
          // closing delimiters must not be a multiple of 3 unless both lengths
          // are multiples of 3.
          //
          if (opener.close || closer.open) {
            if ((opener.length + closer.length) % 3 === 0) {
              if (opener.length % 3 !== 0 || closer.length % 3 !== 0) {
                isOddMatch = true;
              }
            }
          }

          if (!isOddMatch) {
            // If previous delimiter cannot be an opener, we can safely skip
            // the entire sequence in future checks. This is required to make
            // sure algorithm has linear complexity (see *_*_*_*_*_... case).
            //
            lastJump = openerIdx > 0 && !delimiters[openerIdx - 1].open ?
              jumps[openerIdx - 1] + 1 :
              0;

            jumps[closerIdx] = closerIdx - openerIdx + lastJump;
            jumps[openerIdx] = lastJump;

            closer.open  = false;
            opener.end   = closerIdx;
            opener.close = false;
            newMinOpenerIdx = -1;
            // treat next token as start of run,
            // it optimizes skips in **<...>**a**<...>** pathological case
            lastTokenIdx = -2;
            break;
          }
        }
      }

      if (newMinOpenerIdx !== -1) {
        // If match for this delimiter run failed, we want to set lower bound for
        // future lookups. This is required to make sure algorithm has linear
        // complexity.
        //
        // See details here:
        // https://github.com/commonmark/cmark/issues/178#issuecomment-270417442
        //
        openersBottom[closer.marker][(closer.open ? 3 : 0) + ((closer.length || 0) % 3)] = newMinOpenerIdx;
      }
    }
  }


  var balance_pairs = function link_pairs(state) {
    var curr,
        tokens_meta = state.tokens_meta,
        max = state.tokens_meta.length;

    processDelimiters(state, state.delimiters);

    for (curr = 0; curr < max; curr++) {
      if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
        processDelimiters(state, tokens_meta[curr].delimiters);
      }
    }
  };

  var text_collapse = function text_collapse(state) {
    var curr, last,
        level = 0,
        tokens = state.tokens,
        max = state.tokens.length;

    for (curr = last = 0; curr < max; curr++) {
      // re-calculate levels after emphasis/strikethrough turns some text nodes
      // into opening/closing tags
      if (tokens[curr].nesting < 0) level--; // closing tag
      tokens[curr].level = level;
      if (tokens[curr].nesting > 0) level++; // opening tag

      if (tokens[curr].type === 'text' &&
          curr + 1 < max &&
          tokens[curr + 1].type === 'text') {

        // collapse two adjacent text nodes
        tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
      } else {
        if (curr !== last) { tokens[last] = tokens[curr]; }

        last++;
      }
    }

    if (curr !== last) {
      tokens.length = last;
    }
  };

  var Token          = token;
  var isWhiteSpace   = utils$1.isWhiteSpace;
  var isPunctChar    = utils$1.isPunctChar;
  var isMdAsciiPunct = utils$1.isMdAsciiPunct;


  function StateInline(src, md, env, outTokens) {
    this.src = src;
    this.env = env;
    this.md = md;
    this.tokens = outTokens;
    this.tokens_meta = Array(outTokens.length);

    this.pos = 0;
    this.posMax = this.src.length;
    this.level = 0;
    this.pending = '';
    this.pendingLevel = 0;

    // Stores { start: end } pairs. Useful for backtrack
    // optimization of pairs parse (emphasis, strikes).
    this.cache = {};

    // List of emphasis-like delimiters for current tag
    this.delimiters = [];

    // Stack of delimiter lists for upper level tags
    this._prev_delimiters = [];

    // backtick length => last seen position
    this.backticks = {};
    this.backticksScanned = false;
  }


  // Flush pending text
  //
  StateInline.prototype.pushPending = function () {
    var token = new Token('text', '', 0);
    token.content = this.pending;
    token.level = this.pendingLevel;
    this.tokens.push(token);
    this.pending = '';
    return token;
  };


  // Push new token to "stream".
  // If pending text exists - flush it as text token
  //
  StateInline.prototype.push = function (type, tag, nesting) {
    if (this.pending) {
      this.pushPending();
    }

    var token = new Token(type, tag, nesting);
    var token_meta = null;

    if (nesting < 0) {
      // closing tag
      this.level--;
      this.delimiters = this._prev_delimiters.pop();
    }

    token.level = this.level;

    if (nesting > 0) {
      // opening tag
      this.level++;
      this._prev_delimiters.push(this.delimiters);
      this.delimiters = [];
      token_meta = { delimiters: this.delimiters };
    }

    this.pendingLevel = this.level;
    this.tokens.push(token);
    this.tokens_meta.push(token_meta);
    return token;
  };


  // Scan a sequence of emphasis-like markers, and determine whether
  // it can start an emphasis sequence or end an emphasis sequence.
  //
  //  - start - position to scan from (it should point at a valid marker);
  //  - canSplitWord - determine if these markers can be found inside a word
  //
  StateInline.prototype.scanDelims = function (start, canSplitWord) {
    var pos = start, lastChar, nextChar, count, can_open, can_close,
        isLastWhiteSpace, isLastPunctChar,
        isNextWhiteSpace, isNextPunctChar,
        left_flanking = true,
        right_flanking = true,
        max = this.posMax,
        marker = this.src.charCodeAt(start);

    // treat beginning of the line as a whitespace
    lastChar = start > 0 ? this.src.charCodeAt(start - 1) : 0x20;

    while (pos < max && this.src.charCodeAt(pos) === marker) { pos++; }

    count = pos - start;

    // treat end of the line as a whitespace
    nextChar = pos < max ? this.src.charCodeAt(pos) : 0x20;

    isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
    isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));

    isLastWhiteSpace = isWhiteSpace(lastChar);
    isNextWhiteSpace = isWhiteSpace(nextChar);

    if (isNextWhiteSpace) {
      left_flanking = false;
    } else if (isNextPunctChar) {
      if (!(isLastWhiteSpace || isLastPunctChar)) {
        left_flanking = false;
      }
    }

    if (isLastWhiteSpace) {
      right_flanking = false;
    } else if (isLastPunctChar) {
      if (!(isNextWhiteSpace || isNextPunctChar)) {
        right_flanking = false;
      }
    }

    if (!canSplitWord) {
      can_open  = left_flanking  && (!right_flanking || isLastPunctChar);
      can_close = right_flanking && (!left_flanking  || isNextPunctChar);
    } else {
      can_open  = left_flanking;
      can_close = right_flanking;
    }

    return {
      can_open:  can_open,
      can_close: can_close,
      length:    count
    };
  };


  // re-export Token class to use in block rules
  StateInline.prototype.Token = Token;


  var state_inline = StateInline;

  /** internal
   * class ParserInline
   *
   * Tokenizes paragraph content.
   **/


  var Ruler           = ruler;


  ////////////////////////////////////////////////////////////////////////////////
  // Parser rules

  var _rules = [
    [ 'text',            text ],
    [ 'newline',         newline ],
    [ 'escape',          _escape ],
    [ 'backticks',       backticks ],
    [ 'strikethrough',   strikethrough.tokenize ],
    [ 'emphasis',        emphasis.tokenize ],
    [ 'link',            link$1 ],
    [ 'image',           image ],
    [ 'autolink',        autolink ],
    [ 'html_inline',     html_inline ],
    [ 'entity',          entity ]
  ];

  var _rules2 = [
    [ 'balance_pairs',   balance_pairs ],
    [ 'strikethrough',   strikethrough.postProcess ],
    [ 'emphasis',        emphasis.postProcess ],
    [ 'text_collapse',   text_collapse ]
  ];


  /**
   * new ParserInline()
   **/
  function ParserInline$1() {
    var i;

    /**
     * ParserInline#ruler -> Ruler
     *
     * [[Ruler]] instance. Keep configuration of inline rules.
     **/
    this.ruler = new Ruler();

    for (i = 0; i < _rules.length; i++) {
      this.ruler.push(_rules[i][0], _rules[i][1]);
    }

    /**
     * ParserInline#ruler2 -> Ruler
     *
     * [[Ruler]] instance. Second ruler used for post-processing
     * (e.g. in emphasis-like rules).
     **/
    this.ruler2 = new Ruler();

    for (i = 0; i < _rules2.length; i++) {
      this.ruler2.push(_rules2[i][0], _rules2[i][1]);
    }
  }


  // Skip single token by running all rules in validation mode;
  // returns `true` if any rule reported success
  //
  ParserInline$1.prototype.skipToken = function (state) {
    var ok, i, pos = state.pos,
        rules = this.ruler.getRules(''),
        len = rules.length,
        maxNesting = state.md.options.maxNesting,
        cache = state.cache;


    if (typeof cache[pos] !== 'undefined') {
      state.pos = cache[pos];
      return;
    }

    if (state.level < maxNesting) {
      for (i = 0; i < len; i++) {
        // Increment state.level and decrement it later to limit recursion.
        // It's harmless to do here, because no tokens are created. But ideally,
        // we'd need a separate private state variable for this purpose.
        //
        state.level++;
        ok = rules[i](state, true);
        state.level--;

        if (ok) { break; }
      }
    } else {
      // Too much nesting, just skip until the end of the paragraph.
      //
      // NOTE: this will cause links to behave incorrectly in the following case,
      //       when an amount of `[` is exactly equal to `maxNesting + 1`:
      //
      //       [[[[[[[[[[[[[[[[[[[[[foo]()
      //
      // TODO: remove this workaround when CM standard will allow nested links
      //       (we can replace it by preventing links from being parsed in
      //       validation mode)
      //
      state.pos = state.posMax;
    }

    if (!ok) { state.pos++; }
    cache[pos] = state.pos;
  };


  // Generate tokens for input range
  //
  ParserInline$1.prototype.tokenize = function (state) {
    var ok, i,
        rules = this.ruler.getRules(''),
        len = rules.length,
        end = state.posMax,
        maxNesting = state.md.options.maxNesting;

    while (state.pos < end) {
      // Try all possible rules.
      // On success, rule should:
      //
      // - update `state.pos`
      // - update `state.tokens`
      // - return true

      if (state.level < maxNesting) {
        for (i = 0; i < len; i++) {
          ok = rules[i](state, false);
          if (ok) { break; }
        }
      }

      if (ok) {
        if (state.pos >= end) { break; }
        continue;
      }

      state.pending += state.src[state.pos++];
    }

    if (state.pending) {
      state.pushPending();
    }
  };


  /**
   * ParserInline.parse(str, md, env, outTokens)
   *
   * Process input string and push inline tokens into `outTokens`
   **/
  ParserInline$1.prototype.parse = function (str, md, env, outTokens) {
    var i, rules, len;
    var state = new this.State(str, md, env, outTokens);

    this.tokenize(state);

    rules = this.ruler2.getRules('');
    len = rules.length;

    for (i = 0; i < len; i++) {
      rules[i](state);
    }
  };


  ParserInline$1.prototype.State = state_inline;


  var parser_inline = ParserInline$1;

  var re = function (opts) {
    var re = {};

    // Use direct extract instead of `regenerate` to reduse browserified size
    re.src_Any = regex$3.source;
    re.src_Cc  = regex$2.source;
    re.src_Z   = regex.source;
    re.src_P   = regex$4.source;

    // \p{\Z\P\Cc\CF} (white spaces + control + format + punctuation)
    re.src_ZPCc = [ re.src_Z, re.src_P, re.src_Cc ].join('|');

    // \p{\Z\Cc} (white spaces + control)
    re.src_ZCc = [ re.src_Z, re.src_Cc ].join('|');

    // Experimental. List of chars, completely prohibited in links
    // because can separate it from other part of text
    var text_separators = '[><\uff5c]';

    // All possible word characters (everything without punctuation, spaces & controls)
    // Defined via punctuation & spaces to save space
    // Should be something like \p{\L\N\S\M} (\w but without `_`)
    re.src_pseudo_letter       = '(?:(?!' + text_separators + '|' + re.src_ZPCc + ')' + re.src_Any + ')';
    // The same as abothe but without [0-9]
    // var src_pseudo_letter_non_d = '(?:(?![0-9]|' + src_ZPCc + ')' + src_Any + ')';

    ////////////////////////////////////////////////////////////////////////////////

    re.src_ip4 =

      '(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)';

    // Prohibit any of "@/[]()" in user/pass to avoid wrong domain fetch.
    re.src_auth    = '(?:(?:(?!' + re.src_ZCc + '|[@/\\[\\]()]).)+@)?';

    re.src_port =

      '(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?';

    re.src_host_terminator =

      '(?=$|' + text_separators + '|' + re.src_ZPCc + ')(?!-|_|:\\d|\\.-|\\.(?!$|' + re.src_ZPCc + '))';

    re.src_path =

      '(?:' +
        '[/?#]' +
          '(?:' +
            '(?!' + re.src_ZCc + '|' + text_separators + '|[()[\\]{}.,"\'?!\\-;]).|' +
            '\\[(?:(?!' + re.src_ZCc + '|\\]).)*\\]|' +
            '\\((?:(?!' + re.src_ZCc + '|[)]).)*\\)|' +
            '\\{(?:(?!' + re.src_ZCc + '|[}]).)*\\}|' +
            '\\"(?:(?!' + re.src_ZCc + '|["]).)+\\"|' +
            "\\'(?:(?!" + re.src_ZCc + "|[']).)+\\'|" +
            "\\'(?=" + re.src_pseudo_letter + '|[-]).|' +  // allow `I'm_king` if no pair found
            '\\.{2,}[a-zA-Z0-9%/&]|' + // google has many dots in "google search" links (#66, #81).
                                       // github has ... in commit range links,
                                       // Restrict to
                                       // - english
                                       // - percent-encoded
                                       // - parts of file path
                                       // - params separator
                                       // until more examples found.
            '\\.(?!' + re.src_ZCc + '|[.]).|' +
            (opts && opts['---'] ?
              '\\-(?!--(?:[^-]|$))(?:-*)|' // `---` => long dash, terminate
              :
              '\\-+|'
            ) +
            ',(?!' + re.src_ZCc + ').|' +       // allow `,,,` in paths
            ';(?!' + re.src_ZCc + ').|' +       // allow `;` if not followed by space-like char
            '\\!+(?!' + re.src_ZCc + '|[!]).|' +  // allow `!!!` in paths, but not at the end
            '\\?(?!' + re.src_ZCc + '|[?]).' +
          ')+' +
        '|\\/' +
      ')?';

    // Allow anything in markdown spec, forbid quote (") at the first position
    // because emails enclosed in quotes are far more common
    re.src_email_name =

      '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*';

    re.src_xn =

      'xn--[a-z0-9\\-]{1,59}';

    // More to read about domain names
    // http://serverfault.com/questions/638260/

    re.src_domain_root =

      // Allow letters & digits (http://test1)
      '(?:' +
        re.src_xn +
        '|' +
        re.src_pseudo_letter + '{1,63}' +
      ')';

    re.src_domain =

      '(?:' +
        re.src_xn +
        '|' +
        '(?:' + re.src_pseudo_letter + ')' +
        '|' +
        '(?:' + re.src_pseudo_letter + '(?:-|' + re.src_pseudo_letter + '){0,61}' + re.src_pseudo_letter + ')' +
      ')';

    re.src_host =

      '(?:' +
      // Don't need IP check, because digits are already allowed in normal domain names
      //   src_ip4 +
      // '|' +
        '(?:(?:(?:' + re.src_domain + ')\\.)*' + re.src_domain/*_root*/ + ')' +
      ')';

    re.tpl_host_fuzzy =

      '(?:' +
        re.src_ip4 +
      '|' +
        '(?:(?:(?:' + re.src_domain + ')\\.)+(?:%TLDS%))' +
      ')';

    re.tpl_host_no_ip_fuzzy =

      '(?:(?:(?:' + re.src_domain + ')\\.)+(?:%TLDS%))';

    re.src_host_strict =

      re.src_host + re.src_host_terminator;

    re.tpl_host_fuzzy_strict =

      re.tpl_host_fuzzy + re.src_host_terminator;

    re.src_host_port_strict =

      re.src_host + re.src_port + re.src_host_terminator;

    re.tpl_host_port_fuzzy_strict =

      re.tpl_host_fuzzy + re.src_port + re.src_host_terminator;

    re.tpl_host_port_no_ip_fuzzy_strict =

      re.tpl_host_no_ip_fuzzy + re.src_port + re.src_host_terminator;


    ////////////////////////////////////////////////////////////////////////////////
    // Main rules

    // Rude test fuzzy links by host, for quick deny
    re.tpl_host_fuzzy_test =

      'localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:' + re.src_ZPCc + '|>|$))';

    re.tpl_email_fuzzy =

        '(^|' + text_separators + '|"|\\(|' + re.src_ZCc + ')' +
        '(' + re.src_email_name + '@' + re.tpl_host_fuzzy_strict + ')';

    re.tpl_link_fuzzy =
        // Fuzzy link can't be prepended with .:/\- and non punctuation.
        // but can start with > (markdown blockquote)
        '(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|' + re.src_ZPCc + '))' +
        '((?![$+<=>^`|\uff5c])' + re.tpl_host_port_fuzzy_strict + re.src_path + ')';

    re.tpl_link_no_ip_fuzzy =
        // Fuzzy link can't be prepended with .:/\- and non punctuation.
        // but can start with > (markdown blockquote)
        '(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|' + re.src_ZPCc + '))' +
        '((?![$+<=>^`|\uff5c])' + re.tpl_host_port_no_ip_fuzzy_strict + re.src_path + ')';

    return re;
  };

  ////////////////////////////////////////////////////////////////////////////////
  // Helpers

  // Merge objects
  //
  function assign(obj /*from1, from2, from3, ...*/) {
    var sources = Array.prototype.slice.call(arguments, 1);

    sources.forEach(function (source) {
      if (!source) { return; }

      Object.keys(source).forEach(function (key) {
        obj[key] = source[key];
      });
    });

    return obj;
  }

  function _class(obj) { return Object.prototype.toString.call(obj); }
  function isString(obj) { return _class(obj) === '[object String]'; }
  function isObject(obj) { return _class(obj) === '[object Object]'; }
  function isRegExp(obj) { return _class(obj) === '[object RegExp]'; }
  function isFunction(obj) { return _class(obj) === '[object Function]'; }


  function escapeRE(str) { return str.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&'); }

  ////////////////////////////////////////////////////////////////////////////////


  var defaultOptions = {
    fuzzyLink: true,
    fuzzyEmail: true,
    fuzzyIP: false
  };


  function isOptionsObj(obj) {
    return Object.keys(obj || {}).reduce(function (acc, k) {
      return acc || defaultOptions.hasOwnProperty(k);
    }, false);
  }


  var defaultSchemas = {
    'http:': {
      validate: function (text, pos, self) {
        var tail = text.slice(pos);

        if (!self.re.http) {
          // compile lazily, because "host"-containing variables can change on tlds update.
          self.re.http =  new RegExp(
            '^\\/\\/' + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path, 'i'
          );
        }
        if (self.re.http.test(tail)) {
          return tail.match(self.re.http)[0].length;
        }
        return 0;
      }
    },
    'https:':  'http:',
    'ftp:':    'http:',
    '//':      {
      validate: function (text, pos, self) {
        var tail = text.slice(pos);

        if (!self.re.no_http) {
        // compile lazily, because "host"-containing variables can change on tlds update.
          self.re.no_http =  new RegExp(
            '^' +
            self.re.src_auth +
            // Don't allow single-level domains, because of false positives like '//test'
            // with code comments
            '(?:localhost|(?:(?:' + self.re.src_domain + ')\\.)+' + self.re.src_domain_root + ')' +
            self.re.src_port +
            self.re.src_host_terminator +
            self.re.src_path,

            'i'
          );
        }

        if (self.re.no_http.test(tail)) {
          // should not be `://` & `///`, that protects from errors in protocol name
          if (pos >= 3 && text[pos - 3] === ':') { return 0; }
          if (pos >= 3 && text[pos - 3] === '/') { return 0; }
          return tail.match(self.re.no_http)[0].length;
        }
        return 0;
      }
    },
    'mailto:': {
      validate: function (text, pos, self) {
        var tail = text.slice(pos);

        if (!self.re.mailto) {
          self.re.mailto =  new RegExp(
            '^' + self.re.src_email_name + '@' + self.re.src_host_strict, 'i'
          );
        }
        if (self.re.mailto.test(tail)) {
          return tail.match(self.re.mailto)[0].length;
        }
        return 0;
      }
    }
  };

  /*eslint-disable max-len*/

  // RE pattern for 2-character tlds (autogenerated by ./support/tlds_2char_gen.js)
  var tlds_2ch_src_re = 'a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]';

  // DON'T try to make PRs with changes. Extend TLDs with LinkifyIt.tlds() instead
  var tlds_default = 'biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф'.split('|');

  /*eslint-enable max-len*/

  ////////////////////////////////////////////////////////////////////////////////

  function resetScanCache(self) {
    self.__index__ = -1;
    self.__text_cache__   = '';
  }

  function createValidator(re) {
    return function (text, pos) {
      var tail = text.slice(pos);

      if (re.test(tail)) {
        return tail.match(re)[0].length;
      }
      return 0;
    };
  }

  function createNormalizer() {
    return function (match, self) {
      self.normalize(match);
    };
  }

  // Schemas compiler. Build regexps.
  //
  function compile(self) {

    // Load & clone RE patterns.
    var re$1 = self.re = re(self.__opts__);

    // Define dynamic patterns
    var tlds = self.__tlds__.slice();

    self.onCompile();

    if (!self.__tlds_replaced__) {
      tlds.push(tlds_2ch_src_re);
    }
    tlds.push(re$1.src_xn);

    re$1.src_tlds = tlds.join('|');

    function untpl(tpl) { return tpl.replace('%TLDS%', re$1.src_tlds); }

    re$1.email_fuzzy      = RegExp(untpl(re$1.tpl_email_fuzzy), 'i');
    re$1.link_fuzzy       = RegExp(untpl(re$1.tpl_link_fuzzy), 'i');
    re$1.link_no_ip_fuzzy = RegExp(untpl(re$1.tpl_link_no_ip_fuzzy), 'i');
    re$1.host_fuzzy_test  = RegExp(untpl(re$1.tpl_host_fuzzy_test), 'i');

    //
    // Compile each schema
    //

    var aliases = [];

    self.__compiled__ = {}; // Reset compiled data

    function schemaError(name, val) {
      throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
    }

    Object.keys(self.__schemas__).forEach(function (name) {
      var val = self.__schemas__[name];

      // skip disabled methods
      if (val === null) { return; }

      var compiled = { validate: null, link: null };

      self.__compiled__[name] = compiled;

      if (isObject(val)) {
        if (isRegExp(val.validate)) {
          compiled.validate = createValidator(val.validate);
        } else if (isFunction(val.validate)) {
          compiled.validate = val.validate;
        } else {
          schemaError(name, val);
        }

        if (isFunction(val.normalize)) {
          compiled.normalize = val.normalize;
        } else if (!val.normalize) {
          compiled.normalize = createNormalizer();
        } else {
          schemaError(name, val);
        }

        return;
      }

      if (isString(val)) {
        aliases.push(name);
        return;
      }

      schemaError(name, val);
    });

    //
    // Compile postponed aliases
    //

    aliases.forEach(function (alias) {
      if (!self.__compiled__[self.__schemas__[alias]]) {
        // Silently fail on missed schemas to avoid errons on disable.
        // schemaError(alias, self.__schemas__[alias]);
        return;
      }

      self.__compiled__[alias].validate =
        self.__compiled__[self.__schemas__[alias]].validate;
      self.__compiled__[alias].normalize =
        self.__compiled__[self.__schemas__[alias]].normalize;
    });

    //
    // Fake record for guessed links
    //
    self.__compiled__[''] = { validate: null, normalize: createNormalizer() };

    //
    // Build schema condition
    //
    var slist = Object.keys(self.__compiled__)
                        .filter(function (name) {
                          // Filter disabled & fake schemas
                          return name.length > 0 && self.__compiled__[name];
                        })
                        .map(escapeRE)
                        .join('|');
    // (?!_) cause 1.5x slowdown
    self.re.schema_test   = RegExp('(^|(?!_)(?:[><\uff5c]|' + re$1.src_ZPCc + '))(' + slist + ')', 'i');
    self.re.schema_search = RegExp('(^|(?!_)(?:[><\uff5c]|' + re$1.src_ZPCc + '))(' + slist + ')', 'ig');

    self.re.pretest = RegExp(
      '(' + self.re.schema_test.source + ')|(' + self.re.host_fuzzy_test.source + ')|@',
      'i'
    );

    //
    // Cleanup
    //

    resetScanCache(self);
  }

  /**
   * class Match
   *
   * Match result. Single element of array, returned by [[LinkifyIt#match]]
   **/
  function Match(self, shift) {
    var start = self.__index__,
        end   = self.__last_index__,
        text  = self.__text_cache__.slice(start, end);

    /**
     * Match#schema -> String
     *
     * Prefix (protocol) for matched string.
     **/
    this.schema    = self.__schema__.toLowerCase();
    /**
     * Match#index -> Number
     *
     * First position of matched string.
     **/
    this.index     = start + shift;
    /**
     * Match#lastIndex -> Number
     *
     * Next position after matched string.
     **/
    this.lastIndex = end + shift;
    /**
     * Match#raw -> String
     *
     * Matched string.
     **/
    this.raw       = text;
    /**
     * Match#text -> String
     *
     * Notmalized text of matched string.
     **/
    this.text      = text;
    /**
     * Match#url -> String
     *
     * Normalized url of matched string.
     **/
    this.url       = text;
  }

  function createMatch(self, shift) {
    var match = new Match(self, shift);

    self.__compiled__[match.schema].normalize(match, self);

    return match;
  }


  /**
   * class LinkifyIt
   **/

  /**
   * new LinkifyIt(schemas, options)
   * - schemas (Object): Optional. Additional schemas to validate (prefix/validator)
   * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
   *
   * Creates new linkifier instance with optional additional schemas.
   * Can be called without `new` keyword for convenience.
   *
   * By default understands:
   *
   * - `http(s)://...` , `ftp://...`, `mailto:...` & `//...` links
   * - "fuzzy" links and emails (example.com, foo@bar.com).
   *
   * `schemas` is an object, where each key/value describes protocol/rule:
   *
   * - __key__ - link prefix (usually, protocol name with `:` at the end, `skype:`
   *   for example). `linkify-it` makes shure that prefix is not preceeded with
   *   alphanumeric char and symbols. Only whitespaces and punctuation allowed.
   * - __value__ - rule to check tail after link prefix
   *   - _String_ - just alias to existing rule
   *   - _Object_
   *     - _validate_ - validator function (should return matched length on success),
   *       or `RegExp`.
   *     - _normalize_ - optional function to normalize text & url of matched result
   *       (for example, for @twitter mentions).
   *
   * `options`:
   *
   * - __fuzzyLink__ - recognige URL-s without `http(s):` prefix. Default `true`.
   * - __fuzzyIP__ - allow IPs in fuzzy links above. Can conflict with some texts
   *   like version numbers. Default `false`.
   * - __fuzzyEmail__ - recognize emails without `mailto:` prefix.
   *
   **/
  function LinkifyIt$1(schemas, options) {
    if (!(this instanceof LinkifyIt$1)) {
      return new LinkifyIt$1(schemas, options);
    }

    if (!options) {
      if (isOptionsObj(schemas)) {
        options = schemas;
        schemas = {};
      }
    }

    this.__opts__           = assign({}, defaultOptions, options);

    // Cache last tested result. Used to skip repeating steps on next `match` call.
    this.__index__          = -1;
    this.__last_index__     = -1; // Next scan position
    this.__schema__         = '';
    this.__text_cache__     = '';

    this.__schemas__        = assign({}, defaultSchemas, schemas);
    this.__compiled__       = {};

    this.__tlds__           = tlds_default;
    this.__tlds_replaced__  = false;

    this.re = {};

    compile(this);
  }


  /** chainable
   * LinkifyIt#add(schema, definition)
   * - schema (String): rule name (fixed pattern prefix)
   * - definition (String|RegExp|Object): schema definition
   *
   * Add new rule definition. See constructor description for details.
   **/
  LinkifyIt$1.prototype.add = function add(schema, definition) {
    this.__schemas__[schema] = definition;
    compile(this);
    return this;
  };


  /** chainable
   * LinkifyIt#set(options)
   * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
   *
   * Set recognition options for links without schema.
   **/
  LinkifyIt$1.prototype.set = function set(options) {
    this.__opts__ = assign(this.__opts__, options);
    return this;
  };


  /**
   * LinkifyIt#test(text) -> Boolean
   *
   * Searches linkifiable pattern and returns `true` on success or `false` on fail.
   **/
  LinkifyIt$1.prototype.test = function test(text) {
    // Reset scan cache
    this.__text_cache__ = text;
    this.__index__      = -1;

    if (!text.length) { return false; }

    var m, ml, me, len, shift, next, re, tld_pos, at_pos;

    // try to scan for link with schema - that's the most simple rule
    if (this.re.schema_test.test(text)) {
      re = this.re.schema_search;
      re.lastIndex = 0;
      while ((m = re.exec(text)) !== null) {
        len = this.testSchemaAt(text, m[2], re.lastIndex);
        if (len) {
          this.__schema__     = m[2];
          this.__index__      = m.index + m[1].length;
          this.__last_index__ = m.index + m[0].length + len;
          break;
        }
      }
    }

    if (this.__opts__.fuzzyLink && this.__compiled__['http:']) {
      // guess schemaless links
      tld_pos = text.search(this.re.host_fuzzy_test);
      if (tld_pos >= 0) {
        // if tld is located after found link - no need to check fuzzy pattern
        if (this.__index__ < 0 || tld_pos < this.__index__) {
          if ((ml = text.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {

            shift = ml.index + ml[1].length;

            if (this.__index__ < 0 || shift < this.__index__) {
              this.__schema__     = '';
              this.__index__      = shift;
              this.__last_index__ = ml.index + ml[0].length;
            }
          }
        }
      }
    }

    if (this.__opts__.fuzzyEmail && this.__compiled__['mailto:']) {
      // guess schemaless emails
      at_pos = text.indexOf('@');
      if (at_pos >= 0) {
        // We can't skip this check, because this cases are possible:
        // 192.168.1.1@gmail.com, my.in@example.com
        if ((me = text.match(this.re.email_fuzzy)) !== null) {

          shift = me.index + me[1].length;
          next  = me.index + me[0].length;

          if (this.__index__ < 0 || shift < this.__index__ ||
              (shift === this.__index__ && next > this.__last_index__)) {
            this.__schema__     = 'mailto:';
            this.__index__      = shift;
            this.__last_index__ = next;
          }
        }
      }
    }

    return this.__index__ >= 0;
  };


  /**
   * LinkifyIt#pretest(text) -> Boolean
   *
   * Very quick check, that can give false positives. Returns true if link MAY BE
   * can exists. Can be used for speed optimization, when you need to check that
   * link NOT exists.
   **/
  LinkifyIt$1.prototype.pretest = function pretest(text) {
    return this.re.pretest.test(text);
  };


  /**
   * LinkifyIt#testSchemaAt(text, name, position) -> Number
   * - text (String): text to scan
   * - name (String): rule (schema) name
   * - position (Number): text offset to check from
   *
   * Similar to [[LinkifyIt#test]] but checks only specific protocol tail exactly
   * at given position. Returns length of found pattern (0 on fail).
   **/
  LinkifyIt$1.prototype.testSchemaAt = function testSchemaAt(text, schema, pos) {
    // If not supported schema check requested - terminate
    if (!this.__compiled__[schema.toLowerCase()]) {
      return 0;
    }
    return this.__compiled__[schema.toLowerCase()].validate(text, pos, this);
  };


  /**
   * LinkifyIt#match(text) -> Array|null
   *
   * Returns array of found link descriptions or `null` on fail. We strongly
   * recommend to use [[LinkifyIt#test]] first, for best speed.
   *
   * ##### Result match description
   *
   * - __schema__ - link schema, can be empty for fuzzy links, or `//` for
   *   protocol-neutral  links.
   * - __index__ - offset of matched text
   * - __lastIndex__ - index of next char after mathch end
   * - __raw__ - matched text
   * - __text__ - normalized text
   * - __url__ - link, generated from matched text
   **/
  LinkifyIt$1.prototype.match = function match(text) {
    var shift = 0, result = [];

    // Try to take previous element from cache, if .test() called before
    if (this.__index__ >= 0 && this.__text_cache__ === text) {
      result.push(createMatch(this, shift));
      shift = this.__last_index__;
    }

    // Cut head if cache was used
    var tail = shift ? text.slice(shift) : text;

    // Scan string until end reached
    while (this.test(tail)) {
      result.push(createMatch(this, shift));

      tail = tail.slice(this.__last_index__);
      shift += this.__last_index__;
    }

    if (result.length) {
      return result;
    }

    return null;
  };


  /** chainable
   * LinkifyIt#tlds(list [, keepOld]) -> this
   * - list (Array): list of tlds
   * - keepOld (Boolean): merge with current list if `true` (`false` by default)
   *
   * Load (or merge) new tlds list. Those are user for fuzzy links (without prefix)
   * to avoid false positives. By default this algorythm used:
   *
   * - hostname with any 2-letter root zones are ok.
   * - biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф
   *   are ok.
   * - encoded (`xn--...`) root zones are ok.
   *
   * If list is replaced, then exact match for 2-chars root zones will be checked.
   **/
  LinkifyIt$1.prototype.tlds = function tlds(list, keepOld) {
    list = Array.isArray(list) ? list : [ list ];

    if (!keepOld) {
      this.__tlds__ = list.slice();
      this.__tlds_replaced__ = true;
      compile(this);
      return this;
    }

    this.__tlds__ = this.__tlds__.concat(list)
                                    .sort()
                                    .filter(function (el, idx, arr) {
                                      return el !== arr[idx - 1];
                                    })
                                    .reverse();

    compile(this);
    return this;
  };

  /**
   * LinkifyIt#normalize(match)
   *
   * Default normalizer (if schema does not define it's own).
   **/
  LinkifyIt$1.prototype.normalize = function normalize(match) {

    // Do minimal possible changes by default. Need to collect feedback prior
    // to move forward https://github.com/markdown-it/linkify-it/issues/1

    if (!match.schema) { match.url = 'http://' + match.url; }

    if (match.schema === 'mailto:' && !/^mailto:/i.test(match.url)) {
      match.url = 'mailto:' + match.url;
    }
  };


  /**
   * LinkifyIt#onCompile()
   *
   * Override to modify basic RegExp-s.
   **/
  LinkifyIt$1.prototype.onCompile = function onCompile() {
  };


  var linkifyIt = LinkifyIt$1;

  /** Highest positive signed 32-bit float value */
  const maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1

  /** Bootstring parameters */
  const base = 36;
  const tMin = 1;
  const tMax = 26;
  const skew = 38;
  const damp = 700;
  const initialBias = 72;
  const initialN = 128; // 0x80
  const delimiter = '-'; // '\x2D'

  /** Regular expressions */
  const regexPunycode = /^xn--/;
  const regexNonASCII = /[^\0-\x7E]/; // non-ASCII chars
  const regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g; // RFC 3490 separators

  /** Error messages */
  const errors = {
  	'overflow': 'Overflow: input needs wider integers to process',
  	'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
  	'invalid-input': 'Invalid input'
  };

  /** Convenience shortcuts */
  const baseMinusTMin = base - tMin;
  const floor = Math.floor;
  const stringFromCharCode = String.fromCharCode;

  /*--------------------------------------------------------------------------*/

  /**
   * A generic error utility function.
   * @private
   * @param {String} type The error type.
   * @returns {Error} Throws a `RangeError` with the applicable error message.
   */
  function error(type) {
  	throw new RangeError(errors[type]);
  }

  /**
   * A generic `Array#map` utility function.
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} callback The function that gets called for every array
   * item.
   * @returns {Array} A new array of values returned by the callback function.
   */
  function map(array, fn) {
  	const result = [];
  	let length = array.length;
  	while (length--) {
  		result[length] = fn(array[length]);
  	}
  	return result;
  }

  /**
   * A simple `Array#map`-like wrapper to work with domain name strings or email
   * addresses.
   * @private
   * @param {String} domain The domain name or email address.
   * @param {Function} callback The function that gets called for every
   * character.
   * @returns {Array} A new string of characters returned by the callback
   * function.
   */
  function mapDomain(string, fn) {
  	const parts = string.split('@');
  	let result = '';
  	if (parts.length > 1) {
  		// In email addresses, only the domain name should be punycoded. Leave
  		// the local part (i.e. everything up to `@`) intact.
  		result = parts[0] + '@';
  		string = parts[1];
  	}
  	// Avoid `split(regex)` for IE8 compatibility. See #17.
  	string = string.replace(regexSeparators, '\x2E');
  	const labels = string.split('.');
  	const encoded = map(labels, fn).join('.');
  	return result + encoded;
  }

  /**
   * Creates an array containing the numeric code points of each Unicode
   * character in the string. While JavaScript uses UCS-2 internally,
   * this function will convert a pair of surrogate halves (each of which
   * UCS-2 exposes as separate characters) into a single code point,
   * matching UTF-16.
   * @see `punycode.ucs2.encode`
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode.ucs2
   * @name decode
   * @param {String} string The Unicode input string (UCS-2).
   * @returns {Array} The new array of code points.
   */
  function ucs2decode(string) {
  	const output = [];
  	let counter = 0;
  	const length = string.length;
  	while (counter < length) {
  		const value = string.charCodeAt(counter++);
  		if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
  			// It's a high surrogate, and there is a next character.
  			const extra = string.charCodeAt(counter++);
  			if ((extra & 0xFC00) == 0xDC00) { // Low surrogate.
  				output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
  			} else {
  				// It's an unmatched surrogate; only append this code unit, in case the
  				// next code unit is the high surrogate of a surrogate pair.
  				output.push(value);
  				counter--;
  			}
  		} else {
  			output.push(value);
  		}
  	}
  	return output;
  }

  /**
   * Creates a string based on an array of numeric code points.
   * @see `punycode.ucs2.decode`
   * @memberOf punycode.ucs2
   * @name encode
   * @param {Array} codePoints The array of numeric code points.
   * @returns {String} The new Unicode string (UCS-2).
   */
  const ucs2encode = array => String.fromCodePoint(...array);

  /**
   * Converts a basic code point into a digit/integer.
   * @see `digitToBasic()`
   * @private
   * @param {Number} codePoint The basic numeric code point value.
   * @returns {Number} The numeric value of a basic code point (for use in
   * representing integers) in the range `0` to `base - 1`, or `base` if
   * the code point does not represent a value.
   */
  const basicToDigit = function(codePoint) {
  	if (codePoint - 0x30 < 0x0A) {
  		return codePoint - 0x16;
  	}
  	if (codePoint - 0x41 < 0x1A) {
  		return codePoint - 0x41;
  	}
  	if (codePoint - 0x61 < 0x1A) {
  		return codePoint - 0x61;
  	}
  	return base;
  };

  /**
   * Converts a digit/integer into a basic code point.
   * @see `basicToDigit()`
   * @private
   * @param {Number} digit The numeric value of a basic code point.
   * @returns {Number} The basic code point whose value (when used for
   * representing integers) is `digit`, which needs to be in the range
   * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
   * used; else, the lowercase form is used. The behavior is undefined
   * if `flag` is non-zero and `digit` has no uppercase form.
   */
  const digitToBasic = function(digit, flag) {
  	//  0..25 map to ASCII a..z or A..Z
  	// 26..35 map to ASCII 0..9
  	return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
  };

  /**
   * Bias adaptation function as per section 3.4 of RFC 3492.
   * https://tools.ietf.org/html/rfc3492#section-3.4
   * @private
   */
  const adapt = function(delta, numPoints, firstTime) {
  	let k = 0;
  	delta = firstTime ? floor(delta / damp) : delta >> 1;
  	delta += floor(delta / numPoints);
  	for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
  		delta = floor(delta / baseMinusTMin);
  	}
  	return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
  };

  /**
   * Converts a Punycode string of ASCII-only symbols to a string of Unicode
   * symbols.
   * @memberOf punycode
   * @param {String} input The Punycode string of ASCII-only symbols.
   * @returns {String} The resulting string of Unicode symbols.
   */
  const decode = function(input) {
  	// Don't use UCS-2.
  	const output = [];
  	const inputLength = input.length;
  	let i = 0;
  	let n = initialN;
  	let bias = initialBias;

  	// Handle the basic code points: let `basic` be the number of input code
  	// points before the last delimiter, or `0` if there is none, then copy
  	// the first basic code points to the output.

  	let basic = input.lastIndexOf(delimiter);
  	if (basic < 0) {
  		basic = 0;
  	}

  	for (let j = 0; j < basic; ++j) {
  		// if it's not a basic code point
  		if (input.charCodeAt(j) >= 0x80) {
  			error('not-basic');
  		}
  		output.push(input.charCodeAt(j));
  	}

  	// Main decoding loop: start just after the last delimiter if any basic code
  	// points were copied; start at the beginning otherwise.

  	for (let index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

  		// `index` is the index of the next character to be consumed.
  		// Decode a generalized variable-length integer into `delta`,
  		// which gets added to `i`. The overflow checking is easier
  		// if we increase `i` as we go, then subtract off its starting
  		// value at the end to obtain `delta`.
  		let oldi = i;
  		for (let w = 1, k = base; /* no condition */; k += base) {

  			if (index >= inputLength) {
  				error('invalid-input');
  			}

  			const digit = basicToDigit(input.charCodeAt(index++));

  			if (digit >= base || digit > floor((maxInt - i) / w)) {
  				error('overflow');
  			}

  			i += digit * w;
  			const t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

  			if (digit < t) {
  				break;
  			}

  			const baseMinusT = base - t;
  			if (w > floor(maxInt / baseMinusT)) {
  				error('overflow');
  			}

  			w *= baseMinusT;

  		}

  		const out = output.length + 1;
  		bias = adapt(i - oldi, out, oldi == 0);

  		// `i` was supposed to wrap around from `out` to `0`,
  		// incrementing `n` each time, so we'll fix that now:
  		if (floor(i / out) > maxInt - n) {
  			error('overflow');
  		}

  		n += floor(i / out);
  		i %= out;

  		// Insert `n` at position `i` of the output.
  		output.splice(i++, 0, n);

  	}

  	return String.fromCodePoint(...output);
  };

  /**
   * Converts a string of Unicode symbols (e.g. a domain name label) to a
   * Punycode string of ASCII-only symbols.
   * @memberOf punycode
   * @param {String} input The string of Unicode symbols.
   * @returns {String} The resulting Punycode string of ASCII-only symbols.
   */
  const encode = function(input) {
  	const output = [];

  	// Convert the input in UCS-2 to an array of Unicode code points.
  	input = ucs2decode(input);

  	// Cache the length.
  	let inputLength = input.length;

  	// Initialize the state.
  	let n = initialN;
  	let delta = 0;
  	let bias = initialBias;

  	// Handle the basic code points.
  	for (const currentValue of input) {
  		if (currentValue < 0x80) {
  			output.push(stringFromCharCode(currentValue));
  		}
  	}

  	let basicLength = output.length;
  	let handledCPCount = basicLength;

  	// `handledCPCount` is the number of code points that have been handled;
  	// `basicLength` is the number of basic code points.

  	// Finish the basic string with a delimiter unless it's empty.
  	if (basicLength) {
  		output.push(delimiter);
  	}

  	// Main encoding loop:
  	while (handledCPCount < inputLength) {

  		// All non-basic code points < n have been handled already. Find the next
  		// larger one:
  		let m = maxInt;
  		for (const currentValue of input) {
  			if (currentValue >= n && currentValue < m) {
  				m = currentValue;
  			}
  		}

  		// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
  		// but guard against overflow.
  		const handledCPCountPlusOne = handledCPCount + 1;
  		if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
  			error('overflow');
  		}

  		delta += (m - n) * handledCPCountPlusOne;
  		n = m;

  		for (const currentValue of input) {
  			if (currentValue < n && ++delta > maxInt) {
  				error('overflow');
  			}
  			if (currentValue == n) {
  				// Represent delta as a generalized variable-length integer.
  				let q = delta;
  				for (let k = base; /* no condition */; k += base) {
  					const t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
  					if (q < t) {
  						break;
  					}
  					const qMinusT = q - t;
  					const baseMinusT = base - t;
  					output.push(
  						stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
  					);
  					q = floor(qMinusT / baseMinusT);
  				}

  				output.push(stringFromCharCode(digitToBasic(q, 0)));
  				bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
  				delta = 0;
  				++handledCPCount;
  			}
  		}

  		++delta;
  		++n;

  	}
  	return output.join('');
  };

  /**
   * Converts a Punycode string representing a domain name or an email address
   * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
   * it doesn't matter if you call it on a string that has already been
   * converted to Unicode.
   * @memberOf punycode
   * @param {String} input The Punycoded domain name or email address to
   * convert to Unicode.
   * @returns {String} The Unicode representation of the given Punycode
   * string.
   */
  const toUnicode = function(input) {
  	return mapDomain(input, function(string) {
  		return regexPunycode.test(string)
  			? decode(string.slice(4).toLowerCase())
  			: string;
  	});
  };

  /**
   * Converts a Unicode string representing a domain name or an email address to
   * Punycode. Only the non-ASCII parts of the domain name will be converted,
   * i.e. it doesn't matter if you call it with a domain that's already in
   * ASCII.
   * @memberOf punycode
   * @param {String} input The domain name or email address to convert, as a
   * Unicode string.
   * @returns {String} The Punycode representation of the given domain name or
   * email address.
   */
  const toASCII = function(input) {
  	return mapDomain(input, function(string) {
  		return regexNonASCII.test(string)
  			? 'xn--' + encode(string)
  			: string;
  	});
  };

  /*--------------------------------------------------------------------------*/

  /** Define the public API */
  const punycode$1 = {
  	/**
  	 * A string representing the current Punycode.js version number.
  	 * @memberOf punycode
  	 * @type String
  	 */
  	'version': '2.1.0',
  	/**
  	 * An object of methods to convert from JavaScript's internal character
  	 * representation (UCS-2) to Unicode code points, and back.
  	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
  	 * @memberOf punycode
  	 * @type Object
  	 */
  	'ucs2': {
  		'decode': ucs2decode,
  		'encode': ucs2encode
  	},
  	'decode': decode,
  	'encode': encode,
  	'toASCII': toASCII,
  	'toUnicode': toUnicode
  };

  var punycode_es6 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ucs2decode: ucs2decode,
    ucs2encode: ucs2encode,
    decode: decode,
    encode: encode,
    toASCII: toASCII,
    toUnicode: toUnicode,
    'default': punycode$1
  });

  var require$$8 = /*@__PURE__*/getAugmentedNamespace(punycode_es6);

  var _default = {
    options: {
      html:         false,        // Enable HTML tags in source
      xhtmlOut:     false,        // Use '/' to close single tags (<br />)
      breaks:       false,        // Convert '\n' in paragraphs into <br>
      langPrefix:   'language-',  // CSS language prefix for fenced blocks
      linkify:      false,        // autoconvert URL-like texts to links

      // Enable some language-neutral replacements + quotes beautification
      typographer:  false,

      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Could be either a String or an Array.
      //
      // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
      // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
      quotes: '\u201c\u201d\u2018\u2019', /* “”‘’ */

      // Highlighter function. Should return escaped HTML,
      // or '' if the source string is not changed and should be escaped externaly.
      // If result starts with <pre... internal wrapper is skipped.
      //
      // function (/*str, lang*/) { return ''; }
      //
      highlight: null,

      maxNesting:   100            // Internal protection, recursion limit
    },

    components: {

      core: {},
      block: {},
      inline: {}
    }
  };

  var zero$1 = {
    options: {
      html:         false,        // Enable HTML tags in source
      xhtmlOut:     false,        // Use '/' to close single tags (<br />)
      breaks:       false,        // Convert '\n' in paragraphs into <br>
      langPrefix:   'language-',  // CSS language prefix for fenced blocks
      linkify:      false,        // autoconvert URL-like texts to links

      // Enable some language-neutral replacements + quotes beautification
      typographer:  false,

      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Could be either a String or an Array.
      //
      // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
      // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
      quotes: '\u201c\u201d\u2018\u2019', /* “”‘’ */

      // Highlighter function. Should return escaped HTML,
      // or '' if the source string is not changed and should be escaped externaly.
      // If result starts with <pre... internal wrapper is skipped.
      //
      // function (/*str, lang*/) { return ''; }
      //
      highlight: null,

      maxNesting:   20            // Internal protection, recursion limit
    },

    components: {

      core: {
        rules: [
          'normalize',
          'block',
          'inline'
        ]
      },

      block: {
        rules: [
          'paragraph'
        ]
      },

      inline: {
        rules: [
          'text'
        ],
        rules2: [
          'balance_pairs',
          'text_collapse'
        ]
      }
    }
  };

  var commonmark = {
    options: {
      html:         true,         // Enable HTML tags in source
      xhtmlOut:     true,         // Use '/' to close single tags (<br />)
      breaks:       false,        // Convert '\n' in paragraphs into <br>
      langPrefix:   'language-',  // CSS language prefix for fenced blocks
      linkify:      false,        // autoconvert URL-like texts to links

      // Enable some language-neutral replacements + quotes beautification
      typographer:  false,

      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Could be either a String or an Array.
      //
      // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
      // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
      quotes: '\u201c\u201d\u2018\u2019', /* “”‘’ */

      // Highlighter function. Should return escaped HTML,
      // or '' if the source string is not changed and should be escaped externaly.
      // If result starts with <pre... internal wrapper is skipped.
      //
      // function (/*str, lang*/) { return ''; }
      //
      highlight: null,

      maxNesting:   20            // Internal protection, recursion limit
    },

    components: {

      core: {
        rules: [
          'normalize',
          'block',
          'inline'
        ]
      },

      block: {
        rules: [
          'blockquote',
          'code',
          'fence',
          'heading',
          'hr',
          'html_block',
          'lheading',
          'list',
          'reference',
          'paragraph'
        ]
      },

      inline: {
        rules: [
          'autolink',
          'backticks',
          'emphasis',
          'entity',
          'escape',
          'html_inline',
          'image',
          'link',
          'newline',
          'text'
        ],
        rules2: [
          'balance_pairs',
          'emphasis',
          'text_collapse'
        ]
      }
    }
  };

  var utils        = utils$1;
  var helpers      = helpers$1;
  var Renderer     = renderer;
  var ParserCore   = parser_core;
  var ParserBlock  = parser_block;
  var ParserInline = parser_inline;
  var LinkifyIt    = linkifyIt;
  var mdurl        = mdurl$1;
  var punycode     = require$$8;


  var config = {
    default: _default,
    zero: zero$1,
    commonmark: commonmark
  };

  ////////////////////////////////////////////////////////////////////////////////
  //
  // This validator can prohibit more than really needed to prevent XSS. It's a
  // tradeoff to keep code simple and to be secure by default.
  //
  // If you need different setup - override validator method as you wish. Or
  // replace it with dummy function and use external sanitizer.
  //

  var BAD_PROTO_RE = /^(vbscript|javascript|file|data):/;
  var GOOD_DATA_RE = /^data:image\/(gif|png|jpeg|webp);/;

  function validateLink(url) {
    // url should be normalized at this point, and existing entities are decoded
    var str = url.trim().toLowerCase();

    return BAD_PROTO_RE.test(str) ? (GOOD_DATA_RE.test(str) ? true : false) : true;
  }

  ////////////////////////////////////////////////////////////////////////////////


  var RECODE_HOSTNAME_FOR = [ 'http:', 'https:', 'mailto:' ];

  function normalizeLink(url) {
    var parsed = mdurl.parse(url, true);

    if (parsed.hostname) {
      // Encode hostnames in urls like:
      // `http://host/`, `https://host/`, `mailto:user@host`, `//host/`
      //
      // We don't encode unknown schemas, because it's likely that we encode
      // something we shouldn't (e.g. `skype:name` treated as `skype:host`)
      //
      if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
        try {
          parsed.hostname = punycode.toASCII(parsed.hostname);
        } catch (er) { /**/ }
      }
    }

    return mdurl.encode(mdurl.format(parsed));
  }

  function normalizeLinkText(url) {
    var parsed = mdurl.parse(url, true);

    if (parsed.hostname) {
      // Encode hostnames in urls like:
      // `http://host/`, `https://host/`, `mailto:user@host`, `//host/`
      //
      // We don't encode unknown schemas, because it's likely that we encode
      // something we shouldn't (e.g. `skype:name` treated as `skype:host`)
      //
      if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
        try {
          parsed.hostname = punycode.toUnicode(parsed.hostname);
        } catch (er) { /**/ }
      }
    }

    // add '%' to exclude list because of https://github.com/markdown-it/markdown-it/issues/720
    return mdurl.decode(mdurl.format(parsed), mdurl.decode.defaultChars + '%');
  }


  /**
   * class MarkdownIt
   *
   * Main parser/renderer class.
   *
   * ##### Usage
   *
   * ```javascript
   * // node.js, "classic" way:
   * var MarkdownIt = require('markdown-it'),
   *     md = new MarkdownIt();
   * var result = md.render('# markdown-it rulezz!');
   *
   * // node.js, the same, but with sugar:
   * var md = require('markdown-it')();
   * var result = md.render('# markdown-it rulezz!');
   *
   * // browser without AMD, added to "window" on script load
   * // Note, there are no dash.
   * var md = window.markdownit();
   * var result = md.render('# markdown-it rulezz!');
   * ```
   *
   * Single line rendering, without paragraph wrap:
   *
   * ```javascript
   * var md = require('markdown-it')();
   * var result = md.renderInline('__markdown-it__ rulezz!');
   * ```
   **/

  /**
   * new MarkdownIt([presetName, options])
   * - presetName (String): optional, `commonmark` / `zero`
   * - options (Object)
   *
   * Creates parser instanse with given config. Can be called without `new`.
   *
   * ##### presetName
   *
   * MarkdownIt provides named presets as a convenience to quickly
   * enable/disable active syntax rules and options for common use cases.
   *
   * - ["commonmark"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/commonmark.js) -
   *   configures parser to strict [CommonMark](http://commonmark.org/) mode.
   * - [default](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/default.js) -
   *   similar to GFM, used when no preset name given. Enables all available rules,
   *   but still without html, typographer & autolinker.
   * - ["zero"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/zero.js) -
   *   all rules disabled. Useful to quickly setup your config via `.enable()`.
   *   For example, when you need only `bold` and `italic` markup and nothing else.
   *
   * ##### options:
   *
   * - __html__ - `false`. Set `true` to enable HTML tags in source. Be careful!
   *   That's not safe! You may need external sanitizer to protect output from XSS.
   *   It's better to extend features via plugins, instead of enabling HTML.
   * - __xhtmlOut__ - `false`. Set `true` to add '/' when closing single tags
   *   (`<br />`). This is needed only for full CommonMark compatibility. In real
   *   world you will need HTML output.
   * - __breaks__ - `false`. Set `true` to convert `\n` in paragraphs into `<br>`.
   * - __langPrefix__ - `language-`. CSS language class prefix for fenced blocks.
   *   Can be useful for external highlighters.
   * - __linkify__ - `false`. Set `true` to autoconvert URL-like text to links.
   * - __typographer__  - `false`. Set `true` to enable [some language-neutral
   *   replacement](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.js) +
   *   quotes beautification (smartquotes).
   * - __quotes__ - `“”‘’`, String or Array. Double + single quotes replacement
   *   pairs, when typographer enabled and smartquotes on. For example, you can
   *   use `'«»„“'` for Russian, `'„“‚‘'` for German, and
   *   `['«\xA0', '\xA0»', '‹\xA0', '\xA0›']` for French (including nbsp).
   * - __highlight__ - `null`. Highlighter function for fenced code blocks.
   *   Highlighter `function (str, lang)` should return escaped HTML. It can also
   *   return empty string if the source was not changed and should be escaped
   *   externaly. If result starts with <pre... internal wrapper is skipped.
   *
   * ##### Example
   *
   * ```javascript
   * // commonmark mode
   * var md = require('markdown-it')('commonmark');
   *
   * // default mode
   * var md = require('markdown-it')();
   *
   * // enable everything
   * var md = require('markdown-it')({
   *   html: true,
   *   linkify: true,
   *   typographer: true
   * });
   * ```
   *
   * ##### Syntax highlighting
   *
   * ```js
   * var hljs = require('highlight.js') // https://highlightjs.org/
   *
   * var md = require('markdown-it')({
   *   highlight: function (str, lang) {
   *     if (lang && hljs.getLanguage(lang)) {
   *       try {
   *         return hljs.highlight(str, { language: lang, ignoreIllegals: true }).value;
   *       } catch (__) {}
   *     }
   *
   *     return ''; // use external default escaping
   *   }
   * });
   * ```
   *
   * Or with full wrapper override (if you need assign class to `<pre>`):
   *
   * ```javascript
   * var hljs = require('highlight.js') // https://highlightjs.org/
   *
   * // Actual default values
   * var md = require('markdown-it')({
   *   highlight: function (str, lang) {
   *     if (lang && hljs.getLanguage(lang)) {
   *       try {
   *         return '<pre class="hljs"><code>' +
   *                hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
   *                '</code></pre>';
   *       } catch (__) {}
   *     }
   *
   *     return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
   *   }
   * });
   * ```
   *
   **/
  function MarkdownIt(presetName, options) {
    if (!(this instanceof MarkdownIt)) {
      return new MarkdownIt(presetName, options);
    }

    if (!options) {
      if (!utils.isString(presetName)) {
        options = presetName || {};
        presetName = 'default';
      }
    }

    /**
     * MarkdownIt#inline -> ParserInline
     *
     * Instance of [[ParserInline]]. You may need it to add new rules when
     * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
     * [[MarkdownIt.enable]].
     **/
    this.inline = new ParserInline();

    /**
     * MarkdownIt#block -> ParserBlock
     *
     * Instance of [[ParserBlock]]. You may need it to add new rules when
     * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
     * [[MarkdownIt.enable]].
     **/
    this.block = new ParserBlock();

    /**
     * MarkdownIt#core -> Core
     *
     * Instance of [[Core]] chain executor. You may need it to add new rules when
     * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
     * [[MarkdownIt.enable]].
     **/
    this.core = new ParserCore();

    /**
     * MarkdownIt#renderer -> Renderer
     *
     * Instance of [[Renderer]]. Use it to modify output look. Or to add rendering
     * rules for new token types, generated by plugins.
     *
     * ##### Example
     *
     * ```javascript
     * var md = require('markdown-it')();
     *
     * function myToken(tokens, idx, options, env, self) {
     *   //...
     *   return result;
     * };
     *
     * md.renderer.rules['my_token'] = myToken
     * ```
     *
     * See [[Renderer]] docs and [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js).
     **/
    this.renderer = new Renderer();

    /**
     * MarkdownIt#linkify -> LinkifyIt
     *
     * [linkify-it](https://github.com/markdown-it/linkify-it) instance.
     * Used by [linkify](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/linkify.js)
     * rule.
     **/
    this.linkify = new LinkifyIt();

    /**
     * MarkdownIt#validateLink(url) -> Boolean
     *
     * Link validation function. CommonMark allows too much in links. By default
     * we disable `javascript:`, `vbscript:`, `file:` schemas, and almost all `data:...` schemas
     * except some embedded image types.
     *
     * You can change this behaviour:
     *
     * ```javascript
     * var md = require('markdown-it')();
     * // enable everything
     * md.validateLink = function () { return true; }
     * ```
     **/
    this.validateLink = validateLink;

    /**
     * MarkdownIt#normalizeLink(url) -> String
     *
     * Function used to encode link url to a machine-readable format,
     * which includes url-encoding, punycode, etc.
     **/
    this.normalizeLink = normalizeLink;

    /**
     * MarkdownIt#normalizeLinkText(url) -> String
     *
     * Function used to decode link url to a human-readable format`
     **/
    this.normalizeLinkText = normalizeLinkText;


    // Expose utils & helpers for easy acces from plugins

    /**
     * MarkdownIt#utils -> utils
     *
     * Assorted utility functions, useful to write plugins. See details
     * [here](https://github.com/markdown-it/markdown-it/blob/master/lib/common/utils.js).
     **/
    this.utils = utils;

    /**
     * MarkdownIt#helpers -> helpers
     *
     * Link components parser functions, useful to write plugins. See details
     * [here](https://github.com/markdown-it/markdown-it/blob/master/lib/helpers).
     **/
    this.helpers = utils.assign({}, helpers);


    this.options = {};
    this.configure(presetName);

    if (options) { this.set(options); }
  }


  /** chainable
   * MarkdownIt.set(options)
   *
   * Set parser options (in the same format as in constructor). Probably, you
   * will never need it, but you can change options after constructor call.
   *
   * ##### Example
   *
   * ```javascript
   * var md = require('markdown-it')()
   *             .set({ html: true, breaks: true })
   *             .set({ typographer, true });
   * ```
   *
   * __Note:__ To achieve the best possible performance, don't modify a
   * `markdown-it` instance options on the fly. If you need multiple configurations
   * it's best to create multiple instances and initialize each with separate
   * config.
   **/
  MarkdownIt.prototype.set = function (options) {
    utils.assign(this.options, options);
    return this;
  };


  /** chainable, internal
   * MarkdownIt.configure(presets)
   *
   * Batch load of all options and compenent settings. This is internal method,
   * and you probably will not need it. But if you will - see available presets
   * and data structure [here](https://github.com/markdown-it/markdown-it/tree/master/lib/presets)
   *
   * We strongly recommend to use presets instead of direct config loads. That
   * will give better compatibility with next versions.
   **/
  MarkdownIt.prototype.configure = function (presets) {
    var self = this, presetName;

    if (utils.isString(presets)) {
      presetName = presets;
      presets = config[presetName];
      if (!presets) { throw new Error('Wrong `markdown-it` preset "' + presetName + '", check name'); }
    }

    if (!presets) { throw new Error('Wrong `markdown-it` preset, can\'t be empty'); }

    if (presets.options) { self.set(presets.options); }

    if (presets.components) {
      Object.keys(presets.components).forEach(function (name) {
        if (presets.components[name].rules) {
          self[name].ruler.enableOnly(presets.components[name].rules);
        }
        if (presets.components[name].rules2) {
          self[name].ruler2.enableOnly(presets.components[name].rules2);
        }
      });
    }
    return this;
  };


  /** chainable
   * MarkdownIt.enable(list, ignoreInvalid)
   * - list (String|Array): rule name or list of rule names to enable
   * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
   *
   * Enable list or rules. It will automatically find appropriate components,
   * containing rules with given names. If rule not found, and `ignoreInvalid`
   * not set - throws exception.
   *
   * ##### Example
   *
   * ```javascript
   * var md = require('markdown-it')()
   *             .enable(['sub', 'sup'])
   *             .disable('smartquotes');
   * ```
   **/
  MarkdownIt.prototype.enable = function (list, ignoreInvalid) {
    var result = [];

    if (!Array.isArray(list)) { list = [ list ]; }

    [ 'core', 'block', 'inline' ].forEach(function (chain) {
      result = result.concat(this[chain].ruler.enable(list, true));
    }, this);

    result = result.concat(this.inline.ruler2.enable(list, true));

    var missed = list.filter(function (name) { return result.indexOf(name) < 0; });

    if (missed.length && !ignoreInvalid) {
      throw new Error('MarkdownIt. Failed to enable unknown rule(s): ' + missed);
    }

    return this;
  };


  /** chainable
   * MarkdownIt.disable(list, ignoreInvalid)
   * - list (String|Array): rule name or list of rule names to disable.
   * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
   *
   * The same as [[MarkdownIt.enable]], but turn specified rules off.
   **/
  MarkdownIt.prototype.disable = function (list, ignoreInvalid) {
    var result = [];

    if (!Array.isArray(list)) { list = [ list ]; }

    [ 'core', 'block', 'inline' ].forEach(function (chain) {
      result = result.concat(this[chain].ruler.disable(list, true));
    }, this);

    result = result.concat(this.inline.ruler2.disable(list, true));

    var missed = list.filter(function (name) { return result.indexOf(name) < 0; });

    if (missed.length && !ignoreInvalid) {
      throw new Error('MarkdownIt. Failed to disable unknown rule(s): ' + missed);
    }
    return this;
  };


  /** chainable
   * MarkdownIt.use(plugin, params)
   *
   * Load specified plugin with given params into current parser instance.
   * It's just a sugar to call `plugin(md, params)` with curring.
   *
   * ##### Example
   *
   * ```javascript
   * var iterator = require('markdown-it-for-inline');
   * var md = require('markdown-it')()
   *             .use(iterator, 'foo_replace', 'text', function (tokens, idx) {
   *               tokens[idx].content = tokens[idx].content.replace(/foo/g, 'bar');
   *             });
   * ```
   **/
  MarkdownIt.prototype.use = function (plugin /*, params, ... */) {
    var args = [ this ].concat(Array.prototype.slice.call(arguments, 1));
    plugin.apply(plugin, args);
    return this;
  };


  /** internal
   * MarkdownIt.parse(src, env) -> Array
   * - src (String): source string
   * - env (Object): environment sandbox
   *
   * Parse input string and return list of block tokens (special token type
   * "inline" will contain list of inline tokens). You should not call this
   * method directly, until you write custom renderer (for example, to produce
   * AST).
   *
   * `env` is used to pass data between "distributed" rules and return additional
   * metadata like reference info, needed for the renderer. It also can be used to
   * inject data in specific cases. Usually, you will be ok to pass `{}`,
   * and then pass updated object to renderer.
   **/
  MarkdownIt.prototype.parse = function (src, env) {
    if (typeof src !== 'string') {
      throw new Error('Input data should be a String');
    }

    var state = new this.core.State(src, this, env);

    this.core.process(state);

    return state.tokens;
  };


  /**
   * MarkdownIt.render(src [, env]) -> String
   * - src (String): source string
   * - env (Object): environment sandbox
   *
   * Render markdown string into html. It does all magic for you :).
   *
   * `env` can be used to inject additional metadata (`{}` by default).
   * But you will not need it with high probability. See also comment
   * in [[MarkdownIt.parse]].
   **/
  MarkdownIt.prototype.render = function (src, env) {
    env = env || {};

    return this.renderer.render(this.parse(src, env), this.options, env);
  };


  /** internal
   * MarkdownIt.parseInline(src, env) -> Array
   * - src (String): source string
   * - env (Object): environment sandbox
   *
   * The same as [[MarkdownIt.parse]] but skip all block rules. It returns the
   * block tokens list with the single `inline` element, containing parsed inline
   * tokens in `children` property. Also updates `env` object.
   **/
  MarkdownIt.prototype.parseInline = function (src, env) {
    var state = new this.core.State(src, this, env);

    state.inlineMode = true;
    this.core.process(state);

    return state.tokens;
  };


  /**
   * MarkdownIt.renderInline(src [, env]) -> String
   * - src (String): source string
   * - env (Object): environment sandbox
   *
   * Similar to [[MarkdownIt.render]] but for single paragraph content. Result
   * will NOT be wrapped into `<p>` tags.
   **/
  MarkdownIt.prototype.renderInline = function (src, env) {
    env = env || {};

    return this.renderer.render(this.parseInline(src, env), this.options, env);
  };


  var lib = MarkdownIt;

  var markdownIt = lib;

  var grinning = "😀";
  var smiley = "😃";
  var smile = "😄";
  var grin = "😁";
  var laughing = "😆";
  var satisfied = "😆";
  var sweat_smile = "😅";
  var rofl = "🤣";
  var joy = "😂";
  var slightly_smiling_face = "🙂";
  var upside_down_face = "🙃";
  var wink = "😉";
  var blush = "😊";
  var innocent = "😇";
  var smiling_face_with_three_hearts = "🥰";
  var heart_eyes = "😍";
  var star_struck = "🤩";
  var kissing_heart = "😘";
  var kissing = "😗";
  var relaxed = "☺️";
  var kissing_closed_eyes = "😚";
  var kissing_smiling_eyes = "😙";
  var smiling_face_with_tear = "🥲";
  var yum = "😋";
  var stuck_out_tongue = "😛";
  var stuck_out_tongue_winking_eye = "😜";
  var zany_face = "🤪";
  var stuck_out_tongue_closed_eyes = "😝";
  var money_mouth_face = "🤑";
  var hugs = "🤗";
  var hand_over_mouth = "🤭";
  var shushing_face = "🤫";
  var thinking = "🤔";
  var zipper_mouth_face = "🤐";
  var raised_eyebrow = "🤨";
  var neutral_face = "😐";
  var expressionless = "😑";
  var no_mouth = "😶";
  var smirk = "😏";
  var unamused = "😒";
  var roll_eyes = "🙄";
  var grimacing = "😬";
  var lying_face = "🤥";
  var relieved = "😌";
  var pensive = "😔";
  var sleepy = "😪";
  var drooling_face = "🤤";
  var sleeping = "😴";
  var mask = "😷";
  var face_with_thermometer = "🤒";
  var face_with_head_bandage = "🤕";
  var nauseated_face = "🤢";
  var vomiting_face = "🤮";
  var sneezing_face = "🤧";
  var hot_face = "🥵";
  var cold_face = "🥶";
  var woozy_face = "🥴";
  var dizzy_face = "😵";
  var exploding_head = "🤯";
  var cowboy_hat_face = "🤠";
  var partying_face = "🥳";
  var disguised_face = "🥸";
  var sunglasses = "😎";
  var nerd_face = "🤓";
  var monocle_face = "🧐";
  var confused = "😕";
  var worried = "😟";
  var slightly_frowning_face = "🙁";
  var frowning_face = "☹️";
  var open_mouth = "😮";
  var hushed = "😯";
  var astonished = "😲";
  var flushed = "😳";
  var pleading_face = "🥺";
  var frowning = "😦";
  var anguished = "😧";
  var fearful = "😨";
  var cold_sweat = "😰";
  var disappointed_relieved = "😥";
  var cry = "😢";
  var sob = "😭";
  var scream = "😱";
  var confounded = "😖";
  var persevere = "😣";
  var disappointed = "😞";
  var sweat = "😓";
  var weary = "😩";
  var tired_face = "😫";
  var yawning_face = "🥱";
  var triumph = "😤";
  var rage = "😡";
  var pout = "😡";
  var angry = "😠";
  var cursing_face = "🤬";
  var smiling_imp = "😈";
  var imp = "👿";
  var skull = "💀";
  var skull_and_crossbones = "☠️";
  var hankey = "💩";
  var poop = "💩";
  var shit = "💩";
  var clown_face = "🤡";
  var japanese_ogre = "👹";
  var japanese_goblin = "👺";
  var ghost = "👻";
  var alien = "👽";
  var space_invader = "👾";
  var robot = "🤖";
  var smiley_cat = "😺";
  var smile_cat = "😸";
  var joy_cat = "😹";
  var heart_eyes_cat = "😻";
  var smirk_cat = "😼";
  var kissing_cat = "😽";
  var scream_cat = "🙀";
  var crying_cat_face = "😿";
  var pouting_cat = "😾";
  var see_no_evil = "🙈";
  var hear_no_evil = "🙉";
  var speak_no_evil = "🙊";
  var kiss = "💋";
  var love_letter = "💌";
  var cupid = "💘";
  var gift_heart = "💝";
  var sparkling_heart = "💖";
  var heartpulse = "💗";
  var heartbeat = "💓";
  var revolving_hearts = "💞";
  var two_hearts = "💕";
  var heart_decoration = "💟";
  var heavy_heart_exclamation = "❣️";
  var broken_heart = "💔";
  var heart = "❤️";
  var orange_heart = "🧡";
  var yellow_heart = "💛";
  var green_heart = "💚";
  var blue_heart = "💙";
  var purple_heart = "💜";
  var brown_heart = "🤎";
  var black_heart = "🖤";
  var white_heart = "🤍";
  var anger = "💢";
  var boom = "💥";
  var collision = "💥";
  var dizzy = "💫";
  var sweat_drops = "💦";
  var dash = "💨";
  var hole = "🕳️";
  var bomb = "💣";
  var speech_balloon = "💬";
  var eye_speech_bubble = "👁️‍🗨️";
  var left_speech_bubble = "🗨️";
  var right_anger_bubble = "🗯️";
  var thought_balloon = "💭";
  var zzz = "💤";
  var wave = "👋";
  var raised_back_of_hand = "🤚";
  var raised_hand_with_fingers_splayed = "🖐️";
  var hand = "✋";
  var raised_hand = "✋";
  var vulcan_salute = "🖖";
  var ok_hand = "👌";
  var pinched_fingers = "🤌";
  var pinching_hand = "🤏";
  var v = "✌️";
  var crossed_fingers = "🤞";
  var love_you_gesture = "🤟";
  var metal = "🤘";
  var call_me_hand = "🤙";
  var point_left = "👈";
  var point_right = "👉";
  var point_up_2 = "👆";
  var middle_finger = "🖕";
  var fu = "🖕";
  var point_down = "👇";
  var point_up = "☝️";
  var thumbsup = "👍";
  var thumbsdown = "👎";
  var fist_raised = "✊";
  var fist = "✊";
  var fist_oncoming = "👊";
  var facepunch = "👊";
  var punch = "👊";
  var fist_left = "🤛";
  var fist_right = "🤜";
  var clap = "👏";
  var raised_hands = "🙌";
  var open_hands = "👐";
  var palms_up_together = "🤲";
  var handshake = "🤝";
  var pray = "🙏";
  var writing_hand = "✍️";
  var nail_care = "💅";
  var selfie = "🤳";
  var muscle = "💪";
  var mechanical_arm = "🦾";
  var mechanical_leg = "🦿";
  var leg = "🦵";
  var foot = "🦶";
  var ear = "👂";
  var ear_with_hearing_aid = "🦻";
  var nose = "👃";
  var brain = "🧠";
  var anatomical_heart = "🫀";
  var lungs = "🫁";
  var tooth = "🦷";
  var bone = "🦴";
  var eyes = "👀";
  var eye = "👁️";
  var tongue = "👅";
  var lips = "👄";
  var baby = "👶";
  var child = "🧒";
  var boy = "👦";
  var girl = "👧";
  var adult = "🧑";
  var blond_haired_person = "👱";
  var man = "👨";
  var bearded_person = "🧔";
  var red_haired_man = "👨‍🦰";
  var curly_haired_man = "👨‍🦱";
  var white_haired_man = "👨‍🦳";
  var bald_man = "👨‍🦲";
  var woman = "👩";
  var red_haired_woman = "👩‍🦰";
  var person_red_hair = "🧑‍🦰";
  var curly_haired_woman = "👩‍🦱";
  var person_curly_hair = "🧑‍🦱";
  var white_haired_woman = "👩‍🦳";
  var person_white_hair = "🧑‍🦳";
  var bald_woman = "👩‍🦲";
  var person_bald = "🧑‍🦲";
  var blond_haired_woman = "👱‍♀️";
  var blonde_woman = "👱‍♀️";
  var blond_haired_man = "👱‍♂️";
  var older_adult = "🧓";
  var older_man = "👴";
  var older_woman = "👵";
  var frowning_person = "🙍";
  var frowning_man = "🙍‍♂️";
  var frowning_woman = "🙍‍♀️";
  var pouting_face = "🙎";
  var pouting_man = "🙎‍♂️";
  var pouting_woman = "🙎‍♀️";
  var no_good = "🙅";
  var no_good_man = "🙅‍♂️";
  var ng_man = "🙅‍♂️";
  var no_good_woman = "🙅‍♀️";
  var ng_woman = "🙅‍♀️";
  var ok_person = "🙆";
  var ok_man = "🙆‍♂️";
  var ok_woman = "🙆‍♀️";
  var tipping_hand_person = "💁";
  var information_desk_person = "💁";
  var tipping_hand_man = "💁‍♂️";
  var sassy_man = "💁‍♂️";
  var tipping_hand_woman = "💁‍♀️";
  var sassy_woman = "💁‍♀️";
  var raising_hand = "🙋";
  var raising_hand_man = "🙋‍♂️";
  var raising_hand_woman = "🙋‍♀️";
  var deaf_person = "🧏";
  var deaf_man = "🧏‍♂️";
  var deaf_woman = "🧏‍♀️";
  var bow = "🙇";
  var bowing_man = "🙇‍♂️";
  var bowing_woman = "🙇‍♀️";
  var facepalm = "🤦";
  var man_facepalming = "🤦‍♂️";
  var woman_facepalming = "🤦‍♀️";
  var shrug = "🤷";
  var man_shrugging = "🤷‍♂️";
  var woman_shrugging = "🤷‍♀️";
  var health_worker = "🧑‍⚕️";
  var man_health_worker = "👨‍⚕️";
  var woman_health_worker = "👩‍⚕️";
  var student = "🧑‍🎓";
  var man_student = "👨‍🎓";
  var woman_student = "👩‍🎓";
  var teacher = "🧑‍🏫";
  var man_teacher = "👨‍🏫";
  var woman_teacher = "👩‍🏫";
  var judge = "🧑‍⚖️";
  var man_judge = "👨‍⚖️";
  var woman_judge = "👩‍⚖️";
  var farmer = "🧑‍🌾";
  var man_farmer = "👨‍🌾";
  var woman_farmer = "👩‍🌾";
  var cook = "🧑‍🍳";
  var man_cook = "👨‍🍳";
  var woman_cook = "👩‍🍳";
  var mechanic = "🧑‍🔧";
  var man_mechanic = "👨‍🔧";
  var woman_mechanic = "👩‍🔧";
  var factory_worker = "🧑‍🏭";
  var man_factory_worker = "👨‍🏭";
  var woman_factory_worker = "👩‍🏭";
  var office_worker = "🧑‍💼";
  var man_office_worker = "👨‍💼";
  var woman_office_worker = "👩‍💼";
  var scientist = "🧑‍🔬";
  var man_scientist = "👨‍🔬";
  var woman_scientist = "👩‍🔬";
  var technologist = "🧑‍💻";
  var man_technologist = "👨‍💻";
  var woman_technologist = "👩‍💻";
  var singer = "🧑‍🎤";
  var man_singer = "👨‍🎤";
  var woman_singer = "👩‍🎤";
  var artist = "🧑‍🎨";
  var man_artist = "👨‍🎨";
  var woman_artist = "👩‍🎨";
  var pilot = "🧑‍✈️";
  var man_pilot = "👨‍✈️";
  var woman_pilot = "👩‍✈️";
  var astronaut = "🧑‍🚀";
  var man_astronaut = "👨‍🚀";
  var woman_astronaut = "👩‍🚀";
  var firefighter = "🧑‍🚒";
  var man_firefighter = "👨‍🚒";
  var woman_firefighter = "👩‍🚒";
  var police_officer = "👮";
  var cop = "👮";
  var policeman = "👮‍♂️";
  var policewoman = "👮‍♀️";
  var detective = "🕵️";
  var male_detective = "🕵️‍♂️";
  var female_detective = "🕵️‍♀️";
  var guard = "💂";
  var guardsman = "💂‍♂️";
  var guardswoman = "💂‍♀️";
  var ninja = "🥷";
  var construction_worker = "👷";
  var construction_worker_man = "👷‍♂️";
  var construction_worker_woman = "👷‍♀️";
  var prince = "🤴";
  var princess = "👸";
  var person_with_turban = "👳";
  var man_with_turban = "👳‍♂️";
  var woman_with_turban = "👳‍♀️";
  var man_with_gua_pi_mao = "👲";
  var woman_with_headscarf = "🧕";
  var person_in_tuxedo = "🤵";
  var man_in_tuxedo = "🤵‍♂️";
  var woman_in_tuxedo = "🤵‍♀️";
  var person_with_veil = "👰";
  var man_with_veil = "👰‍♂️";
  var woman_with_veil = "👰‍♀️";
  var bride_with_veil = "👰‍♀️";
  var pregnant_woman = "🤰";
  var breast_feeding = "🤱";
  var woman_feeding_baby = "👩‍🍼";
  var man_feeding_baby = "👨‍🍼";
  var person_feeding_baby = "🧑‍🍼";
  var angel = "👼";
  var santa = "🎅";
  var mrs_claus = "🤶";
  var mx_claus = "🧑‍🎄";
  var superhero = "🦸";
  var superhero_man = "🦸‍♂️";
  var superhero_woman = "🦸‍♀️";
  var supervillain = "🦹";
  var supervillain_man = "🦹‍♂️";
  var supervillain_woman = "🦹‍♀️";
  var mage = "🧙";
  var mage_man = "🧙‍♂️";
  var mage_woman = "🧙‍♀️";
  var fairy = "🧚";
  var fairy_man = "🧚‍♂️";
  var fairy_woman = "🧚‍♀️";
  var vampire = "🧛";
  var vampire_man = "🧛‍♂️";
  var vampire_woman = "🧛‍♀️";
  var merperson = "🧜";
  var merman = "🧜‍♂️";
  var mermaid = "🧜‍♀️";
  var elf = "🧝";
  var elf_man = "🧝‍♂️";
  var elf_woman = "🧝‍♀️";
  var genie = "🧞";
  var genie_man = "🧞‍♂️";
  var genie_woman = "🧞‍♀️";
  var zombie = "🧟";
  var zombie_man = "🧟‍♂️";
  var zombie_woman = "🧟‍♀️";
  var massage = "💆";
  var massage_man = "💆‍♂️";
  var massage_woman = "💆‍♀️";
  var haircut = "💇";
  var haircut_man = "💇‍♂️";
  var haircut_woman = "💇‍♀️";
  var walking = "🚶";
  var walking_man = "🚶‍♂️";
  var walking_woman = "🚶‍♀️";
  var standing_person = "🧍";
  var standing_man = "🧍‍♂️";
  var standing_woman = "🧍‍♀️";
  var kneeling_person = "🧎";
  var kneeling_man = "🧎‍♂️";
  var kneeling_woman = "🧎‍♀️";
  var person_with_probing_cane = "🧑‍🦯";
  var man_with_probing_cane = "👨‍🦯";
  var woman_with_probing_cane = "👩‍🦯";
  var person_in_motorized_wheelchair = "🧑‍🦼";
  var man_in_motorized_wheelchair = "👨‍🦼";
  var woman_in_motorized_wheelchair = "👩‍🦼";
  var person_in_manual_wheelchair = "🧑‍🦽";
  var man_in_manual_wheelchair = "👨‍🦽";
  var woman_in_manual_wheelchair = "👩‍🦽";
  var runner = "🏃";
  var running = "🏃";
  var running_man = "🏃‍♂️";
  var running_woman = "🏃‍♀️";
  var woman_dancing = "💃";
  var dancer = "💃";
  var man_dancing = "🕺";
  var business_suit_levitating = "🕴️";
  var dancers = "👯";
  var dancing_men = "👯‍♂️";
  var dancing_women = "👯‍♀️";
  var sauna_person = "🧖";
  var sauna_man = "🧖‍♂️";
  var sauna_woman = "🧖‍♀️";
  var climbing = "🧗";
  var climbing_man = "🧗‍♂️";
  var climbing_woman = "🧗‍♀️";
  var person_fencing = "🤺";
  var horse_racing = "🏇";
  var skier = "⛷️";
  var snowboarder = "🏂";
  var golfing = "🏌️";
  var golfing_man = "🏌️‍♂️";
  var golfing_woman = "🏌️‍♀️";
  var surfer = "🏄";
  var surfing_man = "🏄‍♂️";
  var surfing_woman = "🏄‍♀️";
  var rowboat = "🚣";
  var rowing_man = "🚣‍♂️";
  var rowing_woman = "🚣‍♀️";
  var swimmer = "🏊";
  var swimming_man = "🏊‍♂️";
  var swimming_woman = "🏊‍♀️";
  var bouncing_ball_person = "⛹️";
  var bouncing_ball_man = "⛹️‍♂️";
  var basketball_man = "⛹️‍♂️";
  var bouncing_ball_woman = "⛹️‍♀️";
  var basketball_woman = "⛹️‍♀️";
  var weight_lifting = "🏋️";
  var weight_lifting_man = "🏋️‍♂️";
  var weight_lifting_woman = "🏋️‍♀️";
  var bicyclist = "🚴";
  var biking_man = "🚴‍♂️";
  var biking_woman = "🚴‍♀️";
  var mountain_bicyclist = "🚵";
  var mountain_biking_man = "🚵‍♂️";
  var mountain_biking_woman = "🚵‍♀️";
  var cartwheeling = "🤸";
  var man_cartwheeling = "🤸‍♂️";
  var woman_cartwheeling = "🤸‍♀️";
  var wrestling = "🤼";
  var men_wrestling = "🤼‍♂️";
  var women_wrestling = "🤼‍♀️";
  var water_polo = "🤽";
  var man_playing_water_polo = "🤽‍♂️";
  var woman_playing_water_polo = "🤽‍♀️";
  var handball_person = "🤾";
  var man_playing_handball = "🤾‍♂️";
  var woman_playing_handball = "🤾‍♀️";
  var juggling_person = "🤹";
  var man_juggling = "🤹‍♂️";
  var woman_juggling = "🤹‍♀️";
  var lotus_position = "🧘";
  var lotus_position_man = "🧘‍♂️";
  var lotus_position_woman = "🧘‍♀️";
  var bath = "🛀";
  var sleeping_bed = "🛌";
  var people_holding_hands = "🧑‍🤝‍🧑";
  var two_women_holding_hands = "👭";
  var couple = "👫";
  var two_men_holding_hands = "👬";
  var couplekiss = "💏";
  var couplekiss_man_woman = "👩‍❤️‍💋‍👨";
  var couplekiss_man_man = "👨‍❤️‍💋‍👨";
  var couplekiss_woman_woman = "👩‍❤️‍💋‍👩";
  var couple_with_heart = "💑";
  var couple_with_heart_woman_man = "👩‍❤️‍👨";
  var couple_with_heart_man_man = "👨‍❤️‍👨";
  var couple_with_heart_woman_woman = "👩‍❤️‍👩";
  var family = "👪";
  var family_man_woman_boy = "👨‍👩‍👦";
  var family_man_woman_girl = "👨‍👩‍👧";
  var family_man_woman_girl_boy = "👨‍👩‍👧‍👦";
  var family_man_woman_boy_boy = "👨‍👩‍👦‍👦";
  var family_man_woman_girl_girl = "👨‍👩‍👧‍👧";
  var family_man_man_boy = "👨‍👨‍👦";
  var family_man_man_girl = "👨‍👨‍👧";
  var family_man_man_girl_boy = "👨‍👨‍👧‍👦";
  var family_man_man_boy_boy = "👨‍👨‍👦‍👦";
  var family_man_man_girl_girl = "👨‍👨‍👧‍👧";
  var family_woman_woman_boy = "👩‍👩‍👦";
  var family_woman_woman_girl = "👩‍👩‍👧";
  var family_woman_woman_girl_boy = "👩‍👩‍👧‍👦";
  var family_woman_woman_boy_boy = "👩‍👩‍👦‍👦";
  var family_woman_woman_girl_girl = "👩‍👩‍👧‍👧";
  var family_man_boy = "👨‍👦";
  var family_man_boy_boy = "👨‍👦‍👦";
  var family_man_girl = "👨‍👧";
  var family_man_girl_boy = "👨‍👧‍👦";
  var family_man_girl_girl = "👨‍👧‍👧";
  var family_woman_boy = "👩‍👦";
  var family_woman_boy_boy = "👩‍👦‍👦";
  var family_woman_girl = "👩‍👧";
  var family_woman_girl_boy = "👩‍👧‍👦";
  var family_woman_girl_girl = "👩‍👧‍👧";
  var speaking_head = "🗣️";
  var bust_in_silhouette = "👤";
  var busts_in_silhouette = "👥";
  var people_hugging = "🫂";
  var footprints = "👣";
  var monkey_face = "🐵";
  var monkey = "🐒";
  var gorilla = "🦍";
  var orangutan = "🦧";
  var dog = "🐶";
  var dog2 = "🐕";
  var guide_dog = "🦮";
  var service_dog = "🐕‍🦺";
  var poodle = "🐩";
  var wolf = "🐺";
  var fox_face = "🦊";
  var raccoon = "🦝";
  var cat = "🐱";
  var cat2 = "🐈";
  var black_cat = "🐈‍⬛";
  var lion = "🦁";
  var tiger = "🐯";
  var tiger2 = "🐅";
  var leopard = "🐆";
  var horse = "🐴";
  var racehorse = "🐎";
  var unicorn = "🦄";
  var zebra = "🦓";
  var deer = "🦌";
  var bison = "🦬";
  var cow = "🐮";
  var ox = "🐂";
  var water_buffalo = "🐃";
  var cow2 = "🐄";
  var pig = "🐷";
  var pig2 = "🐖";
  var boar = "🐗";
  var pig_nose = "🐽";
  var ram = "🐏";
  var sheep = "🐑";
  var goat = "🐐";
  var dromedary_camel = "🐪";
  var camel = "🐫";
  var llama = "🦙";
  var giraffe = "🦒";
  var elephant = "🐘";
  var mammoth = "🦣";
  var rhinoceros = "🦏";
  var hippopotamus = "🦛";
  var mouse = "🐭";
  var mouse2 = "🐁";
  var rat = "🐀";
  var hamster = "🐹";
  var rabbit = "🐰";
  var rabbit2 = "🐇";
  var chipmunk = "🐿️";
  var beaver = "🦫";
  var hedgehog = "🦔";
  var bat = "🦇";
  var bear = "🐻";
  var polar_bear = "🐻‍❄️";
  var koala = "🐨";
  var panda_face = "🐼";
  var sloth = "🦥";
  var otter = "🦦";
  var skunk = "🦨";
  var kangaroo = "🦘";
  var badger = "🦡";
  var feet = "🐾";
  var paw_prints = "🐾";
  var turkey = "🦃";
  var chicken = "🐔";
  var rooster = "🐓";
  var hatching_chick = "🐣";
  var baby_chick = "🐤";
  var hatched_chick = "🐥";
  var bird = "🐦";
  var penguin = "🐧";
  var dove = "🕊️";
  var eagle = "🦅";
  var duck = "🦆";
  var swan = "🦢";
  var owl = "🦉";
  var dodo = "🦤";
  var feather = "🪶";
  var flamingo = "🦩";
  var peacock = "🦚";
  var parrot = "🦜";
  var frog = "🐸";
  var crocodile = "🐊";
  var turtle = "🐢";
  var lizard = "🦎";
  var snake = "🐍";
  var dragon_face = "🐲";
  var dragon = "🐉";
  var sauropod = "🦕";
  var whale = "🐳";
  var whale2 = "🐋";
  var dolphin = "🐬";
  var flipper = "🐬";
  var seal = "🦭";
  var fish = "🐟";
  var tropical_fish = "🐠";
  var blowfish = "🐡";
  var shark = "🦈";
  var octopus = "🐙";
  var shell = "🐚";
  var snail = "🐌";
  var butterfly = "🦋";
  var bug = "🐛";
  var ant = "🐜";
  var bee = "🐝";
  var honeybee = "🐝";
  var beetle = "🪲";
  var lady_beetle = "🐞";
  var cricket = "🦗";
  var cockroach = "🪳";
  var spider = "🕷️";
  var spider_web = "🕸️";
  var scorpion = "🦂";
  var mosquito = "🦟";
  var fly = "🪰";
  var worm = "🪱";
  var microbe = "🦠";
  var bouquet = "💐";
  var cherry_blossom = "🌸";
  var white_flower = "💮";
  var rosette = "🏵️";
  var rose = "🌹";
  var wilted_flower = "🥀";
  var hibiscus = "🌺";
  var sunflower = "🌻";
  var blossom = "🌼";
  var tulip = "🌷";
  var seedling = "🌱";
  var potted_plant = "🪴";
  var evergreen_tree = "🌲";
  var deciduous_tree = "🌳";
  var palm_tree = "🌴";
  var cactus = "🌵";
  var ear_of_rice = "🌾";
  var herb = "🌿";
  var shamrock = "☘️";
  var four_leaf_clover = "🍀";
  var maple_leaf = "🍁";
  var fallen_leaf = "🍂";
  var leaves = "🍃";
  var grapes = "🍇";
  var melon = "🍈";
  var watermelon = "🍉";
  var tangerine = "🍊";
  var orange = "🍊";
  var mandarin = "🍊";
  var lemon = "🍋";
  var banana = "🍌";
  var pineapple = "🍍";
  var mango = "🥭";
  var apple = "🍎";
  var green_apple = "🍏";
  var pear = "🍐";
  var peach = "🍑";
  var cherries = "🍒";
  var strawberry = "🍓";
  var blueberries = "🫐";
  var kiwi_fruit = "🥝";
  var tomato = "🍅";
  var olive = "🫒";
  var coconut = "🥥";
  var avocado = "🥑";
  var eggplant = "🍆";
  var potato = "🥔";
  var carrot = "🥕";
  var corn = "🌽";
  var hot_pepper = "🌶️";
  var bell_pepper = "🫑";
  var cucumber = "🥒";
  var leafy_green = "🥬";
  var broccoli = "🥦";
  var garlic = "🧄";
  var onion = "🧅";
  var mushroom = "🍄";
  var peanuts = "🥜";
  var chestnut = "🌰";
  var bread = "🍞";
  var croissant = "🥐";
  var baguette_bread = "🥖";
  var flatbread = "🫓";
  var pretzel = "🥨";
  var bagel = "🥯";
  var pancakes = "🥞";
  var waffle = "🧇";
  var cheese = "🧀";
  var meat_on_bone = "🍖";
  var poultry_leg = "🍗";
  var cut_of_meat = "🥩";
  var bacon = "🥓";
  var hamburger = "🍔";
  var fries = "🍟";
  var pizza = "🍕";
  var hotdog = "🌭";
  var sandwich = "🥪";
  var taco = "🌮";
  var burrito = "🌯";
  var tamale = "🫔";
  var stuffed_flatbread = "🥙";
  var falafel = "🧆";
  var egg = "🥚";
  var fried_egg = "🍳";
  var shallow_pan_of_food = "🥘";
  var stew = "🍲";
  var fondue = "🫕";
  var bowl_with_spoon = "🥣";
  var green_salad = "🥗";
  var popcorn = "🍿";
  var butter = "🧈";
  var salt = "🧂";
  var canned_food = "🥫";
  var bento = "🍱";
  var rice_cracker = "🍘";
  var rice_ball = "🍙";
  var rice = "🍚";
  var curry = "🍛";
  var ramen = "🍜";
  var spaghetti = "🍝";
  var sweet_potato = "🍠";
  var oden = "🍢";
  var sushi = "🍣";
  var fried_shrimp = "🍤";
  var fish_cake = "🍥";
  var moon_cake = "🥮";
  var dango = "🍡";
  var dumpling = "🥟";
  var fortune_cookie = "🥠";
  var takeout_box = "🥡";
  var crab = "🦀";
  var lobster = "🦞";
  var shrimp = "🦐";
  var squid = "🦑";
  var oyster = "🦪";
  var icecream = "🍦";
  var shaved_ice = "🍧";
  var ice_cream = "🍨";
  var doughnut = "🍩";
  var cookie = "🍪";
  var birthday = "🎂";
  var cake = "🍰";
  var cupcake = "🧁";
  var pie = "🥧";
  var chocolate_bar = "🍫";
  var candy = "🍬";
  var lollipop = "🍭";
  var custard = "🍮";
  var honey_pot = "🍯";
  var baby_bottle = "🍼";
  var milk_glass = "🥛";
  var coffee = "☕";
  var teapot = "🫖";
  var tea = "🍵";
  var sake = "🍶";
  var champagne = "🍾";
  var wine_glass = "🍷";
  var cocktail = "🍸";
  var tropical_drink = "🍹";
  var beer = "🍺";
  var beers = "🍻";
  var clinking_glasses = "🥂";
  var tumbler_glass = "🥃";
  var cup_with_straw = "🥤";
  var bubble_tea = "🧋";
  var beverage_box = "🧃";
  var mate = "🧉";
  var ice_cube = "🧊";
  var chopsticks = "🥢";
  var plate_with_cutlery = "🍽️";
  var fork_and_knife = "🍴";
  var spoon = "🥄";
  var hocho = "🔪";
  var knife = "🔪";
  var amphora = "🏺";
  var earth_africa = "🌍";
  var earth_americas = "🌎";
  var earth_asia = "🌏";
  var globe_with_meridians = "🌐";
  var world_map = "🗺️";
  var japan = "🗾";
  var compass = "🧭";
  var mountain_snow = "🏔️";
  var mountain = "⛰️";
  var volcano = "🌋";
  var mount_fuji = "🗻";
  var camping = "🏕️";
  var beach_umbrella = "🏖️";
  var desert = "🏜️";
  var desert_island = "🏝️";
  var national_park = "🏞️";
  var stadium = "🏟️";
  var classical_building = "🏛️";
  var building_construction = "🏗️";
  var bricks = "🧱";
  var rock = "🪨";
  var wood = "🪵";
  var hut = "🛖";
  var houses = "🏘️";
  var derelict_house = "🏚️";
  var house = "🏠";
  var house_with_garden = "🏡";
  var office = "🏢";
  var post_office = "🏣";
  var european_post_office = "🏤";
  var hospital = "🏥";
  var bank = "🏦";
  var hotel = "🏨";
  var love_hotel = "🏩";
  var convenience_store = "🏪";
  var school = "🏫";
  var department_store = "🏬";
  var factory = "🏭";
  var japanese_castle = "🏯";
  var european_castle = "🏰";
  var wedding = "💒";
  var tokyo_tower = "🗼";
  var statue_of_liberty = "🗽";
  var church = "⛪";
  var mosque = "🕌";
  var hindu_temple = "🛕";
  var synagogue = "🕍";
  var shinto_shrine = "⛩️";
  var kaaba = "🕋";
  var fountain = "⛲";
  var tent = "⛺";
  var foggy = "🌁";
  var night_with_stars = "🌃";
  var cityscape = "🏙️";
  var sunrise_over_mountains = "🌄";
  var sunrise = "🌅";
  var city_sunset = "🌆";
  var city_sunrise = "🌇";
  var bridge_at_night = "🌉";
  var hotsprings = "♨️";
  var carousel_horse = "🎠";
  var ferris_wheel = "🎡";
  var roller_coaster = "🎢";
  var barber = "💈";
  var circus_tent = "🎪";
  var steam_locomotive = "🚂";
  var railway_car = "🚃";
  var bullettrain_side = "🚄";
  var bullettrain_front = "🚅";
  var train2 = "🚆";
  var metro = "🚇";
  var light_rail = "🚈";
  var station = "🚉";
  var tram = "🚊";
  var monorail = "🚝";
  var mountain_railway = "🚞";
  var train = "🚋";
  var bus = "🚌";
  var oncoming_bus = "🚍";
  var trolleybus = "🚎";
  var minibus = "🚐";
  var ambulance = "🚑";
  var fire_engine = "🚒";
  var police_car = "🚓";
  var oncoming_police_car = "🚔";
  var taxi = "🚕";
  var oncoming_taxi = "🚖";
  var car = "🚗";
  var red_car = "🚗";
  var oncoming_automobile = "🚘";
  var blue_car = "🚙";
  var pickup_truck = "🛻";
  var truck = "🚚";
  var articulated_lorry = "🚛";
  var tractor = "🚜";
  var racing_car = "🏎️";
  var motorcycle = "🏍️";
  var motor_scooter = "🛵";
  var manual_wheelchair = "🦽";
  var motorized_wheelchair = "🦼";
  var auto_rickshaw = "🛺";
  var bike = "🚲";
  var kick_scooter = "🛴";
  var skateboard = "🛹";
  var roller_skate = "🛼";
  var busstop = "🚏";
  var motorway = "🛣️";
  var railway_track = "🛤️";
  var oil_drum = "🛢️";
  var fuelpump = "⛽";
  var rotating_light = "🚨";
  var traffic_light = "🚥";
  var vertical_traffic_light = "🚦";
  var stop_sign = "🛑";
  var construction = "🚧";
  var anchor = "⚓";
  var boat = "⛵";
  var sailboat = "⛵";
  var canoe = "🛶";
  var speedboat = "🚤";
  var passenger_ship = "🛳️";
  var ferry = "⛴️";
  var motor_boat = "🛥️";
  var ship = "🚢";
  var airplane = "✈️";
  var small_airplane = "🛩️";
  var flight_departure = "🛫";
  var flight_arrival = "🛬";
  var parachute = "🪂";
  var seat = "💺";
  var helicopter = "🚁";
  var suspension_railway = "🚟";
  var mountain_cableway = "🚠";
  var aerial_tramway = "🚡";
  var artificial_satellite = "🛰️";
  var rocket = "🚀";
  var flying_saucer = "🛸";
  var bellhop_bell = "🛎️";
  var luggage = "🧳";
  var hourglass = "⌛";
  var hourglass_flowing_sand = "⏳";
  var watch = "⌚";
  var alarm_clock = "⏰";
  var stopwatch = "⏱️";
  var timer_clock = "⏲️";
  var mantelpiece_clock = "🕰️";
  var clock12 = "🕛";
  var clock1230 = "🕧";
  var clock1 = "🕐";
  var clock130 = "🕜";
  var clock2 = "🕑";
  var clock230 = "🕝";
  var clock3 = "🕒";
  var clock330 = "🕞";
  var clock4 = "🕓";
  var clock430 = "🕟";
  var clock5 = "🕔";
  var clock530 = "🕠";
  var clock6 = "🕕";
  var clock630 = "🕡";
  var clock7 = "🕖";
  var clock730 = "🕢";
  var clock8 = "🕗";
  var clock830 = "🕣";
  var clock9 = "🕘";
  var clock930 = "🕤";
  var clock10 = "🕙";
  var clock1030 = "🕥";
  var clock11 = "🕚";
  var clock1130 = "🕦";
  var new_moon = "🌑";
  var waxing_crescent_moon = "🌒";
  var first_quarter_moon = "🌓";
  var moon = "🌔";
  var waxing_gibbous_moon = "🌔";
  var full_moon = "🌕";
  var waning_gibbous_moon = "🌖";
  var last_quarter_moon = "🌗";
  var waning_crescent_moon = "🌘";
  var crescent_moon = "🌙";
  var new_moon_with_face = "🌚";
  var first_quarter_moon_with_face = "🌛";
  var last_quarter_moon_with_face = "🌜";
  var thermometer = "🌡️";
  var sunny = "☀️";
  var full_moon_with_face = "🌝";
  var sun_with_face = "🌞";
  var ringed_planet = "🪐";
  var star = "⭐";
  var star2 = "🌟";
  var stars = "🌠";
  var milky_way = "🌌";
  var cloud = "☁️";
  var partly_sunny = "⛅";
  var cloud_with_lightning_and_rain = "⛈️";
  var sun_behind_small_cloud = "🌤️";
  var sun_behind_large_cloud = "🌥️";
  var sun_behind_rain_cloud = "🌦️";
  var cloud_with_rain = "🌧️";
  var cloud_with_snow = "🌨️";
  var cloud_with_lightning = "🌩️";
  var tornado = "🌪️";
  var fog = "🌫️";
  var wind_face = "🌬️";
  var cyclone = "🌀";
  var rainbow = "🌈";
  var closed_umbrella = "🌂";
  var open_umbrella = "☂️";
  var umbrella = "☔";
  var parasol_on_ground = "⛱️";
  var zap = "⚡";
  var snowflake = "❄️";
  var snowman_with_snow = "☃️";
  var snowman = "⛄";
  var comet = "☄️";
  var fire = "🔥";
  var droplet = "💧";
  var ocean = "🌊";
  var jack_o_lantern = "🎃";
  var christmas_tree = "🎄";
  var fireworks = "🎆";
  var sparkler = "🎇";
  var firecracker = "🧨";
  var sparkles = "✨";
  var balloon = "🎈";
  var tada = "🎉";
  var confetti_ball = "🎊";
  var tanabata_tree = "🎋";
  var bamboo = "🎍";
  var dolls = "🎎";
  var flags = "🎏";
  var wind_chime = "🎐";
  var rice_scene = "🎑";
  var red_envelope = "🧧";
  var ribbon = "🎀";
  var gift = "🎁";
  var reminder_ribbon = "🎗️";
  var tickets = "🎟️";
  var ticket = "🎫";
  var medal_military = "🎖️";
  var trophy = "🏆";
  var medal_sports = "🏅";
  var soccer = "⚽";
  var baseball = "⚾";
  var softball = "🥎";
  var basketball = "🏀";
  var volleyball = "🏐";
  var football = "🏈";
  var rugby_football = "🏉";
  var tennis = "🎾";
  var flying_disc = "🥏";
  var bowling = "🎳";
  var cricket_game = "🏏";
  var field_hockey = "🏑";
  var ice_hockey = "🏒";
  var lacrosse = "🥍";
  var ping_pong = "🏓";
  var badminton = "🏸";
  var boxing_glove = "🥊";
  var martial_arts_uniform = "🥋";
  var goal_net = "🥅";
  var golf = "⛳";
  var ice_skate = "⛸️";
  var fishing_pole_and_fish = "🎣";
  var diving_mask = "🤿";
  var running_shirt_with_sash = "🎽";
  var ski = "🎿";
  var sled = "🛷";
  var curling_stone = "🥌";
  var dart = "🎯";
  var yo_yo = "🪀";
  var kite = "🪁";
  var crystal_ball = "🔮";
  var magic_wand = "🪄";
  var nazar_amulet = "🧿";
  var video_game = "🎮";
  var joystick = "🕹️";
  var slot_machine = "🎰";
  var game_die = "🎲";
  var jigsaw = "🧩";
  var teddy_bear = "🧸";
  var pinata = "🪅";
  var nesting_dolls = "🪆";
  var spades = "♠️";
  var hearts = "♥️";
  var diamonds = "♦️";
  var clubs = "♣️";
  var chess_pawn = "♟️";
  var black_joker = "🃏";
  var mahjong = "🀄";
  var flower_playing_cards = "🎴";
  var performing_arts = "🎭";
  var framed_picture = "🖼️";
  var art = "🎨";
  var thread = "🧵";
  var sewing_needle = "🪡";
  var yarn = "🧶";
  var knot = "🪢";
  var eyeglasses = "👓";
  var dark_sunglasses = "🕶️";
  var goggles = "🥽";
  var lab_coat = "🥼";
  var safety_vest = "🦺";
  var necktie = "👔";
  var shirt = "👕";
  var tshirt = "👕";
  var jeans = "👖";
  var scarf = "🧣";
  var gloves = "🧤";
  var coat = "🧥";
  var socks = "🧦";
  var dress = "👗";
  var kimono = "👘";
  var sari = "🥻";
  var one_piece_swimsuit = "🩱";
  var swim_brief = "🩲";
  var shorts = "🩳";
  var bikini = "👙";
  var womans_clothes = "👚";
  var purse = "👛";
  var handbag = "👜";
  var pouch = "👝";
  var shopping = "🛍️";
  var school_satchel = "🎒";
  var thong_sandal = "🩴";
  var mans_shoe = "👞";
  var shoe = "👞";
  var athletic_shoe = "👟";
  var hiking_boot = "🥾";
  var flat_shoe = "🥿";
  var high_heel = "👠";
  var sandal = "👡";
  var ballet_shoes = "🩰";
  var boot = "👢";
  var crown = "👑";
  var womans_hat = "👒";
  var tophat = "🎩";
  var mortar_board = "🎓";
  var billed_cap = "🧢";
  var military_helmet = "🪖";
  var rescue_worker_helmet = "⛑️";
  var prayer_beads = "📿";
  var lipstick = "💄";
  var ring = "💍";
  var gem = "💎";
  var mute = "🔇";
  var speaker = "🔈";
  var sound = "🔉";
  var loud_sound = "🔊";
  var loudspeaker = "📢";
  var mega = "📣";
  var postal_horn = "📯";
  var bell = "🔔";
  var no_bell = "🔕";
  var musical_score = "🎼";
  var musical_note = "🎵";
  var notes = "🎶";
  var studio_microphone = "🎙️";
  var level_slider = "🎚️";
  var control_knobs = "🎛️";
  var microphone = "🎤";
  var headphones = "🎧";
  var radio = "📻";
  var saxophone = "🎷";
  var accordion = "🪗";
  var guitar = "🎸";
  var musical_keyboard = "🎹";
  var trumpet = "🎺";
  var violin = "🎻";
  var banjo = "🪕";
  var drum = "🥁";
  var long_drum = "🪘";
  var iphone = "📱";
  var calling = "📲";
  var phone = "☎️";
  var telephone = "☎️";
  var telephone_receiver = "📞";
  var pager = "📟";
  var fax = "📠";
  var battery = "🔋";
  var electric_plug = "🔌";
  var computer = "💻";
  var desktop_computer = "🖥️";
  var printer = "🖨️";
  var keyboard = "⌨️";
  var computer_mouse = "🖱️";
  var trackball = "🖲️";
  var minidisc = "💽";
  var floppy_disk = "💾";
  var cd = "💿";
  var dvd = "📀";
  var abacus = "🧮";
  var movie_camera = "🎥";
  var film_strip = "🎞️";
  var film_projector = "📽️";
  var clapper = "🎬";
  var tv = "📺";
  var camera = "📷";
  var camera_flash = "📸";
  var video_camera = "📹";
  var vhs = "📼";
  var mag = "🔍";
  var mag_right = "🔎";
  var candle = "🕯️";
  var bulb = "💡";
  var flashlight = "🔦";
  var izakaya_lantern = "🏮";
  var lantern = "🏮";
  var diya_lamp = "🪔";
  var notebook_with_decorative_cover = "📔";
  var closed_book = "📕";
  var book = "📖";
  var open_book = "📖";
  var green_book = "📗";
  var blue_book = "📘";
  var orange_book = "📙";
  var books = "📚";
  var notebook = "📓";
  var ledger = "📒";
  var page_with_curl = "📃";
  var scroll = "📜";
  var page_facing_up = "📄";
  var newspaper = "📰";
  var newspaper_roll = "🗞️";
  var bookmark_tabs = "📑";
  var bookmark = "🔖";
  var label = "🏷️";
  var moneybag = "💰";
  var coin = "🪙";
  var yen = "💴";
  var dollar = "💵";
  var euro = "💶";
  var pound = "💷";
  var money_with_wings = "💸";
  var credit_card = "💳";
  var receipt = "🧾";
  var chart = "💹";
  var envelope = "✉️";
  var email = "📧";
  var incoming_envelope = "📨";
  var envelope_with_arrow = "📩";
  var outbox_tray = "📤";
  var inbox_tray = "📥";
  var mailbox = "📫";
  var mailbox_closed = "📪";
  var mailbox_with_mail = "📬";
  var mailbox_with_no_mail = "📭";
  var postbox = "📮";
  var ballot_box = "🗳️";
  var pencil2 = "✏️";
  var black_nib = "✒️";
  var fountain_pen = "🖋️";
  var pen = "🖊️";
  var paintbrush = "🖌️";
  var crayon = "🖍️";
  var memo = "📝";
  var pencil = "📝";
  var briefcase = "💼";
  var file_folder = "📁";
  var open_file_folder = "📂";
  var card_index_dividers = "🗂️";
  var date = "📅";
  var calendar = "📆";
  var spiral_notepad = "🗒️";
  var spiral_calendar = "🗓️";
  var card_index = "📇";
  var chart_with_upwards_trend = "📈";
  var chart_with_downwards_trend = "📉";
  var bar_chart = "📊";
  var clipboard = "📋";
  var pushpin = "📌";
  var round_pushpin = "📍";
  var paperclip = "📎";
  var paperclips = "🖇️";
  var straight_ruler = "📏";
  var triangular_ruler = "📐";
  var scissors = "✂️";
  var card_file_box = "🗃️";
  var file_cabinet = "🗄️";
  var wastebasket = "🗑️";
  var lock = "🔒";
  var unlock = "🔓";
  var lock_with_ink_pen = "🔏";
  var closed_lock_with_key = "🔐";
  var key = "🔑";
  var old_key = "🗝️";
  var hammer = "🔨";
  var axe = "🪓";
  var pick = "⛏️";
  var hammer_and_pick = "⚒️";
  var hammer_and_wrench = "🛠️";
  var dagger = "🗡️";
  var crossed_swords = "⚔️";
  var gun = "🔫";
  var boomerang = "🪃";
  var bow_and_arrow = "🏹";
  var shield = "🛡️";
  var carpentry_saw = "🪚";
  var wrench = "🔧";
  var screwdriver = "🪛";
  var nut_and_bolt = "🔩";
  var gear = "⚙️";
  var clamp = "🗜️";
  var balance_scale = "⚖️";
  var probing_cane = "🦯";
  var link = "🔗";
  var chains = "⛓️";
  var hook = "🪝";
  var toolbox = "🧰";
  var magnet = "🧲";
  var ladder = "🪜";
  var alembic = "⚗️";
  var test_tube = "🧪";
  var petri_dish = "🧫";
  var dna = "🧬";
  var microscope = "🔬";
  var telescope = "🔭";
  var satellite = "📡";
  var syringe = "💉";
  var drop_of_blood = "🩸";
  var pill = "💊";
  var adhesive_bandage = "🩹";
  var stethoscope = "🩺";
  var door = "🚪";
  var elevator = "🛗";
  var mirror = "🪞";
  var window$1 = "🪟";
  var bed = "🛏️";
  var couch_and_lamp = "🛋️";
  var chair = "🪑";
  var toilet = "🚽";
  var plunger = "🪠";
  var shower = "🚿";
  var bathtub = "🛁";
  var mouse_trap = "🪤";
  var razor = "🪒";
  var lotion_bottle = "🧴";
  var safety_pin = "🧷";
  var broom = "🧹";
  var basket = "🧺";
  var roll_of_paper = "🧻";
  var bucket = "🪣";
  var soap = "🧼";
  var toothbrush = "🪥";
  var sponge = "🧽";
  var fire_extinguisher = "🧯";
  var shopping_cart = "🛒";
  var smoking = "🚬";
  var coffin = "⚰️";
  var headstone = "🪦";
  var funeral_urn = "⚱️";
  var moyai = "🗿";
  var placard = "🪧";
  var atm = "🏧";
  var put_litter_in_its_place = "🚮";
  var potable_water = "🚰";
  var wheelchair = "♿";
  var mens = "🚹";
  var womens = "🚺";
  var restroom = "🚻";
  var baby_symbol = "🚼";
  var wc = "🚾";
  var passport_control = "🛂";
  var customs = "🛃";
  var baggage_claim = "🛄";
  var left_luggage = "🛅";
  var warning = "⚠️";
  var children_crossing = "🚸";
  var no_entry = "⛔";
  var no_entry_sign = "🚫";
  var no_bicycles = "🚳";
  var no_smoking = "🚭";
  var do_not_litter = "🚯";
  var no_pedestrians = "🚷";
  var no_mobile_phones = "📵";
  var underage = "🔞";
  var radioactive = "☢️";
  var biohazard = "☣️";
  var arrow_up = "⬆️";
  var arrow_upper_right = "↗️";
  var arrow_right = "➡️";
  var arrow_lower_right = "↘️";
  var arrow_down = "⬇️";
  var arrow_lower_left = "↙️";
  var arrow_left = "⬅️";
  var arrow_upper_left = "↖️";
  var arrow_up_down = "↕️";
  var left_right_arrow = "↔️";
  var leftwards_arrow_with_hook = "↩️";
  var arrow_right_hook = "↪️";
  var arrow_heading_up = "⤴️";
  var arrow_heading_down = "⤵️";
  var arrows_clockwise = "🔃";
  var arrows_counterclockwise = "🔄";
  var back = "🔙";
  var end = "🔚";
  var on = "🔛";
  var soon = "🔜";
  var top = "🔝";
  var place_of_worship = "🛐";
  var atom_symbol = "⚛️";
  var om = "🕉️";
  var star_of_david = "✡️";
  var wheel_of_dharma = "☸️";
  var yin_yang = "☯️";
  var latin_cross = "✝️";
  var orthodox_cross = "☦️";
  var star_and_crescent = "☪️";
  var peace_symbol = "☮️";
  var menorah = "🕎";
  var six_pointed_star = "🔯";
  var aries = "♈";
  var taurus = "♉";
  var gemini = "♊";
  var cancer = "♋";
  var leo = "♌";
  var virgo = "♍";
  var libra = "♎";
  var scorpius = "♏";
  var sagittarius = "♐";
  var capricorn = "♑";
  var aquarius = "♒";
  var pisces = "♓";
  var ophiuchus = "⛎";
  var twisted_rightwards_arrows = "🔀";
  var repeat = "🔁";
  var repeat_one = "🔂";
  var arrow_forward = "▶️";
  var fast_forward = "⏩";
  var next_track_button = "⏭️";
  var play_or_pause_button = "⏯️";
  var arrow_backward = "◀️";
  var rewind = "⏪";
  var previous_track_button = "⏮️";
  var arrow_up_small = "🔼";
  var arrow_double_up = "⏫";
  var arrow_down_small = "🔽";
  var arrow_double_down = "⏬";
  var pause_button = "⏸️";
  var stop_button = "⏹️";
  var record_button = "⏺️";
  var eject_button = "⏏️";
  var cinema = "🎦";
  var low_brightness = "🔅";
  var high_brightness = "🔆";
  var signal_strength = "📶";
  var vibration_mode = "📳";
  var mobile_phone_off = "📴";
  var female_sign = "♀️";
  var male_sign = "♂️";
  var transgender_symbol = "⚧️";
  var heavy_multiplication_x = "✖️";
  var heavy_plus_sign = "➕";
  var heavy_minus_sign = "➖";
  var heavy_division_sign = "➗";
  var infinity = "♾️";
  var bangbang = "‼️";
  var interrobang = "⁉️";
  var question = "❓";
  var grey_question = "❔";
  var grey_exclamation = "❕";
  var exclamation = "❗";
  var heavy_exclamation_mark = "❗";
  var wavy_dash = "〰️";
  var currency_exchange = "💱";
  var heavy_dollar_sign = "💲";
  var medical_symbol = "⚕️";
  var recycle = "♻️";
  var fleur_de_lis = "⚜️";
  var trident = "🔱";
  var name_badge = "📛";
  var beginner = "🔰";
  var o = "⭕";
  var white_check_mark = "✅";
  var ballot_box_with_check = "☑️";
  var heavy_check_mark = "✔️";
  var x = "❌";
  var negative_squared_cross_mark = "❎";
  var curly_loop = "➰";
  var loop = "➿";
  var part_alternation_mark = "〽️";
  var eight_spoked_asterisk = "✳️";
  var eight_pointed_black_star = "✴️";
  var sparkle = "❇️";
  var copyright = "©️";
  var registered = "®️";
  var tm = "™️";
  var hash = "#️⃣";
  var asterisk = "*️⃣";
  var zero = "0️⃣";
  var one = "1️⃣";
  var two = "2️⃣";
  var three = "3️⃣";
  var four = "4️⃣";
  var five = "5️⃣";
  var six = "6️⃣";
  var seven = "7️⃣";
  var eight = "8️⃣";
  var nine = "9️⃣";
  var keycap_ten = "🔟";
  var capital_abcd = "🔠";
  var abcd = "🔡";
  var symbols = "🔣";
  var abc = "🔤";
  var a = "🅰️";
  var ab = "🆎";
  var b = "🅱️";
  var cl = "🆑";
  var cool = "🆒";
  var free = "🆓";
  var information_source = "ℹ️";
  var id = "🆔";
  var m = "Ⓜ️";
  var ng = "🆖";
  var o2 = "🅾️";
  var ok = "🆗";
  var parking = "🅿️";
  var sos = "🆘";
  var up = "🆙";
  var vs = "🆚";
  var koko = "🈁";
  var sa = "🈂️";
  var ideograph_advantage = "🉐";
  var accept = "🉑";
  var congratulations = "㊗️";
  var secret = "㊙️";
  var u6e80 = "🈵";
  var red_circle = "🔴";
  var orange_circle = "🟠";
  var yellow_circle = "🟡";
  var green_circle = "🟢";
  var large_blue_circle = "🔵";
  var purple_circle = "🟣";
  var brown_circle = "🟤";
  var black_circle = "⚫";
  var white_circle = "⚪";
  var red_square = "🟥";
  var orange_square = "🟧";
  var yellow_square = "🟨";
  var green_square = "🟩";
  var blue_square = "🟦";
  var purple_square = "🟪";
  var brown_square = "🟫";
  var black_large_square = "⬛";
  var white_large_square = "⬜";
  var black_medium_square = "◼️";
  var white_medium_square = "◻️";
  var black_medium_small_square = "◾";
  var white_medium_small_square = "◽";
  var black_small_square = "▪️";
  var white_small_square = "▫️";
  var large_orange_diamond = "🔶";
  var large_blue_diamond = "🔷";
  var small_orange_diamond = "🔸";
  var small_blue_diamond = "🔹";
  var small_red_triangle = "🔺";
  var small_red_triangle_down = "🔻";
  var diamond_shape_with_a_dot_inside = "💠";
  var radio_button = "🔘";
  var white_square_button = "🔳";
  var black_square_button = "🔲";
  var checkered_flag = "🏁";
  var triangular_flag_on_post = "🚩";
  var crossed_flags = "🎌";
  var black_flag = "🏴";
  var white_flag = "🏳️";
  var rainbow_flag = "🏳️‍🌈";
  var transgender_flag = "🏳️‍⚧️";
  var pirate_flag = "🏴‍☠️";
  var ascension_island = "🇦🇨";
  var andorra = "🇦🇩";
  var united_arab_emirates = "🇦🇪";
  var afghanistan = "🇦🇫";
  var antigua_barbuda = "🇦🇬";
  var anguilla = "🇦🇮";
  var albania = "🇦🇱";
  var armenia = "🇦🇲";
  var angola = "🇦🇴";
  var antarctica = "🇦🇶";
  var argentina = "🇦🇷";
  var american_samoa = "🇦🇸";
  var austria = "🇦🇹";
  var australia = "🇦🇺";
  var aruba = "🇦🇼";
  var aland_islands = "🇦🇽";
  var azerbaijan = "🇦🇿";
  var bosnia_herzegovina = "🇧🇦";
  var barbados = "🇧🇧";
  var bangladesh = "🇧🇩";
  var belgium = "🇧🇪";
  var burkina_faso = "🇧🇫";
  var bulgaria = "🇧🇬";
  var bahrain = "🇧🇭";
  var burundi = "🇧🇮";
  var benin = "🇧🇯";
  var st_barthelemy = "🇧🇱";
  var bermuda = "🇧🇲";
  var brunei = "🇧🇳";
  var bolivia = "🇧🇴";
  var caribbean_netherlands = "🇧🇶";
  var brazil = "🇧🇷";
  var bahamas = "🇧🇸";
  var bhutan = "🇧🇹";
  var bouvet_island = "🇧🇻";
  var botswana = "🇧🇼";
  var belarus = "🇧🇾";
  var belize = "🇧🇿";
  var canada = "🇨🇦";
  var cocos_islands = "🇨🇨";
  var congo_kinshasa = "🇨🇩";
  var central_african_republic = "🇨🇫";
  var congo_brazzaville = "🇨🇬";
  var switzerland = "🇨🇭";
  var cote_divoire = "🇨🇮";
  var cook_islands = "🇨🇰";
  var chile = "🇨🇱";
  var cameroon = "🇨🇲";
  var cn = "🇨🇳";
  var colombia = "🇨🇴";
  var clipperton_island = "🇨🇵";
  var costa_rica = "🇨🇷";
  var cuba = "🇨🇺";
  var cape_verde = "🇨🇻";
  var curacao = "🇨🇼";
  var christmas_island = "🇨🇽";
  var cyprus = "🇨🇾";
  var czech_republic = "🇨🇿";
  var de = "🇩🇪";
  var diego_garcia = "🇩🇬";
  var djibouti = "🇩🇯";
  var denmark = "🇩🇰";
  var dominica = "🇩🇲";
  var dominican_republic = "🇩🇴";
  var algeria = "🇩🇿";
  var ceuta_melilla = "🇪🇦";
  var ecuador = "🇪🇨";
  var estonia = "🇪🇪";
  var egypt = "🇪🇬";
  var western_sahara = "🇪🇭";
  var eritrea = "🇪🇷";
  var es = "🇪🇸";
  var ethiopia = "🇪🇹";
  var eu = "🇪🇺";
  var european_union = "🇪🇺";
  var finland = "🇫🇮";
  var fiji = "🇫🇯";
  var falkland_islands = "🇫🇰";
  var micronesia = "🇫🇲";
  var faroe_islands = "🇫🇴";
  var fr = "🇫🇷";
  var gabon = "🇬🇦";
  var gb = "🇬🇧";
  var uk = "🇬🇧";
  var grenada = "🇬🇩";
  var georgia = "🇬🇪";
  var french_guiana = "🇬🇫";
  var guernsey = "🇬🇬";
  var ghana = "🇬🇭";
  var gibraltar = "🇬🇮";
  var greenland = "🇬🇱";
  var gambia = "🇬🇲";
  var guinea = "🇬🇳";
  var guadeloupe = "🇬🇵";
  var equatorial_guinea = "🇬🇶";
  var greece = "🇬🇷";
  var south_georgia_south_sandwich_islands = "🇬🇸";
  var guatemala = "🇬🇹";
  var guam = "🇬🇺";
  var guinea_bissau = "🇬🇼";
  var guyana = "🇬🇾";
  var hong_kong = "🇭🇰";
  var heard_mcdonald_islands = "🇭🇲";
  var honduras = "🇭🇳";
  var croatia = "🇭🇷";
  var haiti = "🇭🇹";
  var hungary = "🇭🇺";
  var canary_islands = "🇮🇨";
  var indonesia = "🇮🇩";
  var ireland = "🇮🇪";
  var israel = "🇮🇱";
  var isle_of_man = "🇮🇲";
  var india = "🇮🇳";
  var british_indian_ocean_territory = "🇮🇴";
  var iraq = "🇮🇶";
  var iran = "🇮🇷";
  var iceland = "🇮🇸";
  var it = "🇮🇹";
  var jersey = "🇯🇪";
  var jamaica = "🇯🇲";
  var jordan = "🇯🇴";
  var jp = "🇯🇵";
  var kenya = "🇰🇪";
  var kyrgyzstan = "🇰🇬";
  var cambodia = "🇰🇭";
  var kiribati = "🇰🇮";
  var comoros = "🇰🇲";
  var st_kitts_nevis = "🇰🇳";
  var north_korea = "🇰🇵";
  var kr = "🇰🇷";
  var kuwait = "🇰🇼";
  var cayman_islands = "🇰🇾";
  var kazakhstan = "🇰🇿";
  var laos = "🇱🇦";
  var lebanon = "🇱🇧";
  var st_lucia = "🇱🇨";
  var liechtenstein = "🇱🇮";
  var sri_lanka = "🇱🇰";
  var liberia = "🇱🇷";
  var lesotho = "🇱🇸";
  var lithuania = "🇱🇹";
  var luxembourg = "🇱🇺";
  var latvia = "🇱🇻";
  var libya = "🇱🇾";
  var morocco = "🇲🇦";
  var monaco = "🇲🇨";
  var moldova = "🇲🇩";
  var montenegro = "🇲🇪";
  var st_martin = "🇲🇫";
  var madagascar = "🇲🇬";
  var marshall_islands = "🇲🇭";
  var macedonia = "🇲🇰";
  var mali = "🇲🇱";
  var myanmar = "🇲🇲";
  var mongolia = "🇲🇳";
  var macau = "🇲🇴";
  var northern_mariana_islands = "🇲🇵";
  var martinique = "🇲🇶";
  var mauritania = "🇲🇷";
  var montserrat = "🇲🇸";
  var malta = "🇲🇹";
  var mauritius = "🇲🇺";
  var maldives = "🇲🇻";
  var malawi = "🇲🇼";
  var mexico = "🇲🇽";
  var malaysia = "🇲🇾";
  var mozambique = "🇲🇿";
  var namibia = "🇳🇦";
  var new_caledonia = "🇳🇨";
  var niger = "🇳🇪";
  var norfolk_island = "🇳🇫";
  var nigeria = "🇳🇬";
  var nicaragua = "🇳🇮";
  var netherlands = "🇳🇱";
  var norway = "🇳🇴";
  var nepal = "🇳🇵";
  var nauru = "🇳🇷";
  var niue = "🇳🇺";
  var new_zealand = "🇳🇿";
  var oman = "🇴🇲";
  var panama = "🇵🇦";
  var peru = "🇵🇪";
  var french_polynesia = "🇵🇫";
  var papua_new_guinea = "🇵🇬";
  var philippines = "🇵🇭";
  var pakistan = "🇵🇰";
  var poland = "🇵🇱";
  var st_pierre_miquelon = "🇵🇲";
  var pitcairn_islands = "🇵🇳";
  var puerto_rico = "🇵🇷";
  var palestinian_territories = "🇵🇸";
  var portugal = "🇵🇹";
  var palau = "🇵🇼";
  var paraguay = "🇵🇾";
  var qatar = "🇶🇦";
  var reunion = "🇷🇪";
  var romania = "🇷🇴";
  var serbia = "🇷🇸";
  var ru = "🇷🇺";
  var rwanda = "🇷🇼";
  var saudi_arabia = "🇸🇦";
  var solomon_islands = "🇸🇧";
  var seychelles = "🇸🇨";
  var sudan = "🇸🇩";
  var sweden = "🇸🇪";
  var singapore = "🇸🇬";
  var st_helena = "🇸🇭";
  var slovenia = "🇸🇮";
  var svalbard_jan_mayen = "🇸🇯";
  var slovakia = "🇸🇰";
  var sierra_leone = "🇸🇱";
  var san_marino = "🇸🇲";
  var senegal = "🇸🇳";
  var somalia = "🇸🇴";
  var suriname = "🇸🇷";
  var south_sudan = "🇸🇸";
  var sao_tome_principe = "🇸🇹";
  var el_salvador = "🇸🇻";
  var sint_maarten = "🇸🇽";
  var syria = "🇸🇾";
  var swaziland = "🇸🇿";
  var tristan_da_cunha = "🇹🇦";
  var turks_caicos_islands = "🇹🇨";
  var chad = "🇹🇩";
  var french_southern_territories = "🇹🇫";
  var togo = "🇹🇬";
  var thailand = "🇹🇭";
  var tajikistan = "🇹🇯";
  var tokelau = "🇹🇰";
  var timor_leste = "🇹🇱";
  var turkmenistan = "🇹🇲";
  var tunisia = "🇹🇳";
  var tonga = "🇹🇴";
  var tr = "🇹🇷";
  var trinidad_tobago = "🇹🇹";
  var tuvalu = "🇹🇻";
  var taiwan = "🇹🇼";
  var tanzania = "🇹🇿";
  var ukraine = "🇺🇦";
  var uganda = "🇺🇬";
  var us_outlying_islands = "🇺🇲";
  var united_nations = "🇺🇳";
  var us = "🇺🇸";
  var uruguay = "🇺🇾";
  var uzbekistan = "🇺🇿";
  var vatican_city = "🇻🇦";
  var st_vincent_grenadines = "🇻🇨";
  var venezuela = "🇻🇪";
  var british_virgin_islands = "🇻🇬";
  var us_virgin_islands = "🇻🇮";
  var vietnam = "🇻🇳";
  var vanuatu = "🇻🇺";
  var wallis_futuna = "🇼🇫";
  var samoa = "🇼🇸";
  var kosovo = "🇽🇰";
  var yemen = "🇾🇪";
  var mayotte = "🇾🇹";
  var south_africa = "🇿🇦";
  var zambia = "🇿🇲";
  var zimbabwe = "🇿🇼";
  var england = "🏴󠁧󠁢󠁥󠁮󠁧󠁿";
  var scotland = "🏴󠁧󠁢󠁳󠁣󠁴󠁿";
  var wales = "🏴󠁧󠁢󠁷󠁬󠁳󠁿";
  var require$$0 = {
  	"100": "💯",
  	"1234": "🔢",
  	grinning: grinning,
  	smiley: smiley,
  	smile: smile,
  	grin: grin,
  	laughing: laughing,
  	satisfied: satisfied,
  	sweat_smile: sweat_smile,
  	rofl: rofl,
  	joy: joy,
  	slightly_smiling_face: slightly_smiling_face,
  	upside_down_face: upside_down_face,
  	wink: wink,
  	blush: blush,
  	innocent: innocent,
  	smiling_face_with_three_hearts: smiling_face_with_three_hearts,
  	heart_eyes: heart_eyes,
  	star_struck: star_struck,
  	kissing_heart: kissing_heart,
  	kissing: kissing,
  	relaxed: relaxed,
  	kissing_closed_eyes: kissing_closed_eyes,
  	kissing_smiling_eyes: kissing_smiling_eyes,
  	smiling_face_with_tear: smiling_face_with_tear,
  	yum: yum,
  	stuck_out_tongue: stuck_out_tongue,
  	stuck_out_tongue_winking_eye: stuck_out_tongue_winking_eye,
  	zany_face: zany_face,
  	stuck_out_tongue_closed_eyes: stuck_out_tongue_closed_eyes,
  	money_mouth_face: money_mouth_face,
  	hugs: hugs,
  	hand_over_mouth: hand_over_mouth,
  	shushing_face: shushing_face,
  	thinking: thinking,
  	zipper_mouth_face: zipper_mouth_face,
  	raised_eyebrow: raised_eyebrow,
  	neutral_face: neutral_face,
  	expressionless: expressionless,
  	no_mouth: no_mouth,
  	smirk: smirk,
  	unamused: unamused,
  	roll_eyes: roll_eyes,
  	grimacing: grimacing,
  	lying_face: lying_face,
  	relieved: relieved,
  	pensive: pensive,
  	sleepy: sleepy,
  	drooling_face: drooling_face,
  	sleeping: sleeping,
  	mask: mask,
  	face_with_thermometer: face_with_thermometer,
  	face_with_head_bandage: face_with_head_bandage,
  	nauseated_face: nauseated_face,
  	vomiting_face: vomiting_face,
  	sneezing_face: sneezing_face,
  	hot_face: hot_face,
  	cold_face: cold_face,
  	woozy_face: woozy_face,
  	dizzy_face: dizzy_face,
  	exploding_head: exploding_head,
  	cowboy_hat_face: cowboy_hat_face,
  	partying_face: partying_face,
  	disguised_face: disguised_face,
  	sunglasses: sunglasses,
  	nerd_face: nerd_face,
  	monocle_face: monocle_face,
  	confused: confused,
  	worried: worried,
  	slightly_frowning_face: slightly_frowning_face,
  	frowning_face: frowning_face,
  	open_mouth: open_mouth,
  	hushed: hushed,
  	astonished: astonished,
  	flushed: flushed,
  	pleading_face: pleading_face,
  	frowning: frowning,
  	anguished: anguished,
  	fearful: fearful,
  	cold_sweat: cold_sweat,
  	disappointed_relieved: disappointed_relieved,
  	cry: cry,
  	sob: sob,
  	scream: scream,
  	confounded: confounded,
  	persevere: persevere,
  	disappointed: disappointed,
  	sweat: sweat,
  	weary: weary,
  	tired_face: tired_face,
  	yawning_face: yawning_face,
  	triumph: triumph,
  	rage: rage,
  	pout: pout,
  	angry: angry,
  	cursing_face: cursing_face,
  	smiling_imp: smiling_imp,
  	imp: imp,
  	skull: skull,
  	skull_and_crossbones: skull_and_crossbones,
  	hankey: hankey,
  	poop: poop,
  	shit: shit,
  	clown_face: clown_face,
  	japanese_ogre: japanese_ogre,
  	japanese_goblin: japanese_goblin,
  	ghost: ghost,
  	alien: alien,
  	space_invader: space_invader,
  	robot: robot,
  	smiley_cat: smiley_cat,
  	smile_cat: smile_cat,
  	joy_cat: joy_cat,
  	heart_eyes_cat: heart_eyes_cat,
  	smirk_cat: smirk_cat,
  	kissing_cat: kissing_cat,
  	scream_cat: scream_cat,
  	crying_cat_face: crying_cat_face,
  	pouting_cat: pouting_cat,
  	see_no_evil: see_no_evil,
  	hear_no_evil: hear_no_evil,
  	speak_no_evil: speak_no_evil,
  	kiss: kiss,
  	love_letter: love_letter,
  	cupid: cupid,
  	gift_heart: gift_heart,
  	sparkling_heart: sparkling_heart,
  	heartpulse: heartpulse,
  	heartbeat: heartbeat,
  	revolving_hearts: revolving_hearts,
  	two_hearts: two_hearts,
  	heart_decoration: heart_decoration,
  	heavy_heart_exclamation: heavy_heart_exclamation,
  	broken_heart: broken_heart,
  	heart: heart,
  	orange_heart: orange_heart,
  	yellow_heart: yellow_heart,
  	green_heart: green_heart,
  	blue_heart: blue_heart,
  	purple_heart: purple_heart,
  	brown_heart: brown_heart,
  	black_heart: black_heart,
  	white_heart: white_heart,
  	anger: anger,
  	boom: boom,
  	collision: collision,
  	dizzy: dizzy,
  	sweat_drops: sweat_drops,
  	dash: dash,
  	hole: hole,
  	bomb: bomb,
  	speech_balloon: speech_balloon,
  	eye_speech_bubble: eye_speech_bubble,
  	left_speech_bubble: left_speech_bubble,
  	right_anger_bubble: right_anger_bubble,
  	thought_balloon: thought_balloon,
  	zzz: zzz,
  	wave: wave,
  	raised_back_of_hand: raised_back_of_hand,
  	raised_hand_with_fingers_splayed: raised_hand_with_fingers_splayed,
  	hand: hand,
  	raised_hand: raised_hand,
  	vulcan_salute: vulcan_salute,
  	ok_hand: ok_hand,
  	pinched_fingers: pinched_fingers,
  	pinching_hand: pinching_hand,
  	v: v,
  	crossed_fingers: crossed_fingers,
  	love_you_gesture: love_you_gesture,
  	metal: metal,
  	call_me_hand: call_me_hand,
  	point_left: point_left,
  	point_right: point_right,
  	point_up_2: point_up_2,
  	middle_finger: middle_finger,
  	fu: fu,
  	point_down: point_down,
  	point_up: point_up,
  	"+1": "👍",
  	thumbsup: thumbsup,
  	"-1": "👎",
  	thumbsdown: thumbsdown,
  	fist_raised: fist_raised,
  	fist: fist,
  	fist_oncoming: fist_oncoming,
  	facepunch: facepunch,
  	punch: punch,
  	fist_left: fist_left,
  	fist_right: fist_right,
  	clap: clap,
  	raised_hands: raised_hands,
  	open_hands: open_hands,
  	palms_up_together: palms_up_together,
  	handshake: handshake,
  	pray: pray,
  	writing_hand: writing_hand,
  	nail_care: nail_care,
  	selfie: selfie,
  	muscle: muscle,
  	mechanical_arm: mechanical_arm,
  	mechanical_leg: mechanical_leg,
  	leg: leg,
  	foot: foot,
  	ear: ear,
  	ear_with_hearing_aid: ear_with_hearing_aid,
  	nose: nose,
  	brain: brain,
  	anatomical_heart: anatomical_heart,
  	lungs: lungs,
  	tooth: tooth,
  	bone: bone,
  	eyes: eyes,
  	eye: eye,
  	tongue: tongue,
  	lips: lips,
  	baby: baby,
  	child: child,
  	boy: boy,
  	girl: girl,
  	adult: adult,
  	blond_haired_person: blond_haired_person,
  	man: man,
  	bearded_person: bearded_person,
  	red_haired_man: red_haired_man,
  	curly_haired_man: curly_haired_man,
  	white_haired_man: white_haired_man,
  	bald_man: bald_man,
  	woman: woman,
  	red_haired_woman: red_haired_woman,
  	person_red_hair: person_red_hair,
  	curly_haired_woman: curly_haired_woman,
  	person_curly_hair: person_curly_hair,
  	white_haired_woman: white_haired_woman,
  	person_white_hair: person_white_hair,
  	bald_woman: bald_woman,
  	person_bald: person_bald,
  	blond_haired_woman: blond_haired_woman,
  	blonde_woman: blonde_woman,
  	blond_haired_man: blond_haired_man,
  	older_adult: older_adult,
  	older_man: older_man,
  	older_woman: older_woman,
  	frowning_person: frowning_person,
  	frowning_man: frowning_man,
  	frowning_woman: frowning_woman,
  	pouting_face: pouting_face,
  	pouting_man: pouting_man,
  	pouting_woman: pouting_woman,
  	no_good: no_good,
  	no_good_man: no_good_man,
  	ng_man: ng_man,
  	no_good_woman: no_good_woman,
  	ng_woman: ng_woman,
  	ok_person: ok_person,
  	ok_man: ok_man,
  	ok_woman: ok_woman,
  	tipping_hand_person: tipping_hand_person,
  	information_desk_person: information_desk_person,
  	tipping_hand_man: tipping_hand_man,
  	sassy_man: sassy_man,
  	tipping_hand_woman: tipping_hand_woman,
  	sassy_woman: sassy_woman,
  	raising_hand: raising_hand,
  	raising_hand_man: raising_hand_man,
  	raising_hand_woman: raising_hand_woman,
  	deaf_person: deaf_person,
  	deaf_man: deaf_man,
  	deaf_woman: deaf_woman,
  	bow: bow,
  	bowing_man: bowing_man,
  	bowing_woman: bowing_woman,
  	facepalm: facepalm,
  	man_facepalming: man_facepalming,
  	woman_facepalming: woman_facepalming,
  	shrug: shrug,
  	man_shrugging: man_shrugging,
  	woman_shrugging: woman_shrugging,
  	health_worker: health_worker,
  	man_health_worker: man_health_worker,
  	woman_health_worker: woman_health_worker,
  	student: student,
  	man_student: man_student,
  	woman_student: woman_student,
  	teacher: teacher,
  	man_teacher: man_teacher,
  	woman_teacher: woman_teacher,
  	judge: judge,
  	man_judge: man_judge,
  	woman_judge: woman_judge,
  	farmer: farmer,
  	man_farmer: man_farmer,
  	woman_farmer: woman_farmer,
  	cook: cook,
  	man_cook: man_cook,
  	woman_cook: woman_cook,
  	mechanic: mechanic,
  	man_mechanic: man_mechanic,
  	woman_mechanic: woman_mechanic,
  	factory_worker: factory_worker,
  	man_factory_worker: man_factory_worker,
  	woman_factory_worker: woman_factory_worker,
  	office_worker: office_worker,
  	man_office_worker: man_office_worker,
  	woman_office_worker: woman_office_worker,
  	scientist: scientist,
  	man_scientist: man_scientist,
  	woman_scientist: woman_scientist,
  	technologist: technologist,
  	man_technologist: man_technologist,
  	woman_technologist: woman_technologist,
  	singer: singer,
  	man_singer: man_singer,
  	woman_singer: woman_singer,
  	artist: artist,
  	man_artist: man_artist,
  	woman_artist: woman_artist,
  	pilot: pilot,
  	man_pilot: man_pilot,
  	woman_pilot: woman_pilot,
  	astronaut: astronaut,
  	man_astronaut: man_astronaut,
  	woman_astronaut: woman_astronaut,
  	firefighter: firefighter,
  	man_firefighter: man_firefighter,
  	woman_firefighter: woman_firefighter,
  	police_officer: police_officer,
  	cop: cop,
  	policeman: policeman,
  	policewoman: policewoman,
  	detective: detective,
  	male_detective: male_detective,
  	female_detective: female_detective,
  	guard: guard,
  	guardsman: guardsman,
  	guardswoman: guardswoman,
  	ninja: ninja,
  	construction_worker: construction_worker,
  	construction_worker_man: construction_worker_man,
  	construction_worker_woman: construction_worker_woman,
  	prince: prince,
  	princess: princess,
  	person_with_turban: person_with_turban,
  	man_with_turban: man_with_turban,
  	woman_with_turban: woman_with_turban,
  	man_with_gua_pi_mao: man_with_gua_pi_mao,
  	woman_with_headscarf: woman_with_headscarf,
  	person_in_tuxedo: person_in_tuxedo,
  	man_in_tuxedo: man_in_tuxedo,
  	woman_in_tuxedo: woman_in_tuxedo,
  	person_with_veil: person_with_veil,
  	man_with_veil: man_with_veil,
  	woman_with_veil: woman_with_veil,
  	bride_with_veil: bride_with_veil,
  	pregnant_woman: pregnant_woman,
  	breast_feeding: breast_feeding,
  	woman_feeding_baby: woman_feeding_baby,
  	man_feeding_baby: man_feeding_baby,
  	person_feeding_baby: person_feeding_baby,
  	angel: angel,
  	santa: santa,
  	mrs_claus: mrs_claus,
  	mx_claus: mx_claus,
  	superhero: superhero,
  	superhero_man: superhero_man,
  	superhero_woman: superhero_woman,
  	supervillain: supervillain,
  	supervillain_man: supervillain_man,
  	supervillain_woman: supervillain_woman,
  	mage: mage,
  	mage_man: mage_man,
  	mage_woman: mage_woman,
  	fairy: fairy,
  	fairy_man: fairy_man,
  	fairy_woman: fairy_woman,
  	vampire: vampire,
  	vampire_man: vampire_man,
  	vampire_woman: vampire_woman,
  	merperson: merperson,
  	merman: merman,
  	mermaid: mermaid,
  	elf: elf,
  	elf_man: elf_man,
  	elf_woman: elf_woman,
  	genie: genie,
  	genie_man: genie_man,
  	genie_woman: genie_woman,
  	zombie: zombie,
  	zombie_man: zombie_man,
  	zombie_woman: zombie_woman,
  	massage: massage,
  	massage_man: massage_man,
  	massage_woman: massage_woman,
  	haircut: haircut,
  	haircut_man: haircut_man,
  	haircut_woman: haircut_woman,
  	walking: walking,
  	walking_man: walking_man,
  	walking_woman: walking_woman,
  	standing_person: standing_person,
  	standing_man: standing_man,
  	standing_woman: standing_woman,
  	kneeling_person: kneeling_person,
  	kneeling_man: kneeling_man,
  	kneeling_woman: kneeling_woman,
  	person_with_probing_cane: person_with_probing_cane,
  	man_with_probing_cane: man_with_probing_cane,
  	woman_with_probing_cane: woman_with_probing_cane,
  	person_in_motorized_wheelchair: person_in_motorized_wheelchair,
  	man_in_motorized_wheelchair: man_in_motorized_wheelchair,
  	woman_in_motorized_wheelchair: woman_in_motorized_wheelchair,
  	person_in_manual_wheelchair: person_in_manual_wheelchair,
  	man_in_manual_wheelchair: man_in_manual_wheelchair,
  	woman_in_manual_wheelchair: woman_in_manual_wheelchair,
  	runner: runner,
  	running: running,
  	running_man: running_man,
  	running_woman: running_woman,
  	woman_dancing: woman_dancing,
  	dancer: dancer,
  	man_dancing: man_dancing,
  	business_suit_levitating: business_suit_levitating,
  	dancers: dancers,
  	dancing_men: dancing_men,
  	dancing_women: dancing_women,
  	sauna_person: sauna_person,
  	sauna_man: sauna_man,
  	sauna_woman: sauna_woman,
  	climbing: climbing,
  	climbing_man: climbing_man,
  	climbing_woman: climbing_woman,
  	person_fencing: person_fencing,
  	horse_racing: horse_racing,
  	skier: skier,
  	snowboarder: snowboarder,
  	golfing: golfing,
  	golfing_man: golfing_man,
  	golfing_woman: golfing_woman,
  	surfer: surfer,
  	surfing_man: surfing_man,
  	surfing_woman: surfing_woman,
  	rowboat: rowboat,
  	rowing_man: rowing_man,
  	rowing_woman: rowing_woman,
  	swimmer: swimmer,
  	swimming_man: swimming_man,
  	swimming_woman: swimming_woman,
  	bouncing_ball_person: bouncing_ball_person,
  	bouncing_ball_man: bouncing_ball_man,
  	basketball_man: basketball_man,
  	bouncing_ball_woman: bouncing_ball_woman,
  	basketball_woman: basketball_woman,
  	weight_lifting: weight_lifting,
  	weight_lifting_man: weight_lifting_man,
  	weight_lifting_woman: weight_lifting_woman,
  	bicyclist: bicyclist,
  	biking_man: biking_man,
  	biking_woman: biking_woman,
  	mountain_bicyclist: mountain_bicyclist,
  	mountain_biking_man: mountain_biking_man,
  	mountain_biking_woman: mountain_biking_woman,
  	cartwheeling: cartwheeling,
  	man_cartwheeling: man_cartwheeling,
  	woman_cartwheeling: woman_cartwheeling,
  	wrestling: wrestling,
  	men_wrestling: men_wrestling,
  	women_wrestling: women_wrestling,
  	water_polo: water_polo,
  	man_playing_water_polo: man_playing_water_polo,
  	woman_playing_water_polo: woman_playing_water_polo,
  	handball_person: handball_person,
  	man_playing_handball: man_playing_handball,
  	woman_playing_handball: woman_playing_handball,
  	juggling_person: juggling_person,
  	man_juggling: man_juggling,
  	woman_juggling: woman_juggling,
  	lotus_position: lotus_position,
  	lotus_position_man: lotus_position_man,
  	lotus_position_woman: lotus_position_woman,
  	bath: bath,
  	sleeping_bed: sleeping_bed,
  	people_holding_hands: people_holding_hands,
  	two_women_holding_hands: two_women_holding_hands,
  	couple: couple,
  	two_men_holding_hands: two_men_holding_hands,
  	couplekiss: couplekiss,
  	couplekiss_man_woman: couplekiss_man_woman,
  	couplekiss_man_man: couplekiss_man_man,
  	couplekiss_woman_woman: couplekiss_woman_woman,
  	couple_with_heart: couple_with_heart,
  	couple_with_heart_woman_man: couple_with_heart_woman_man,
  	couple_with_heart_man_man: couple_with_heart_man_man,
  	couple_with_heart_woman_woman: couple_with_heart_woman_woman,
  	family: family,
  	family_man_woman_boy: family_man_woman_boy,
  	family_man_woman_girl: family_man_woman_girl,
  	family_man_woman_girl_boy: family_man_woman_girl_boy,
  	family_man_woman_boy_boy: family_man_woman_boy_boy,
  	family_man_woman_girl_girl: family_man_woman_girl_girl,
  	family_man_man_boy: family_man_man_boy,
  	family_man_man_girl: family_man_man_girl,
  	family_man_man_girl_boy: family_man_man_girl_boy,
  	family_man_man_boy_boy: family_man_man_boy_boy,
  	family_man_man_girl_girl: family_man_man_girl_girl,
  	family_woman_woman_boy: family_woman_woman_boy,
  	family_woman_woman_girl: family_woman_woman_girl,
  	family_woman_woman_girl_boy: family_woman_woman_girl_boy,
  	family_woman_woman_boy_boy: family_woman_woman_boy_boy,
  	family_woman_woman_girl_girl: family_woman_woman_girl_girl,
  	family_man_boy: family_man_boy,
  	family_man_boy_boy: family_man_boy_boy,
  	family_man_girl: family_man_girl,
  	family_man_girl_boy: family_man_girl_boy,
  	family_man_girl_girl: family_man_girl_girl,
  	family_woman_boy: family_woman_boy,
  	family_woman_boy_boy: family_woman_boy_boy,
  	family_woman_girl: family_woman_girl,
  	family_woman_girl_boy: family_woman_girl_boy,
  	family_woman_girl_girl: family_woman_girl_girl,
  	speaking_head: speaking_head,
  	bust_in_silhouette: bust_in_silhouette,
  	busts_in_silhouette: busts_in_silhouette,
  	people_hugging: people_hugging,
  	footprints: footprints,
  	monkey_face: monkey_face,
  	monkey: monkey,
  	gorilla: gorilla,
  	orangutan: orangutan,
  	dog: dog,
  	dog2: dog2,
  	guide_dog: guide_dog,
  	service_dog: service_dog,
  	poodle: poodle,
  	wolf: wolf,
  	fox_face: fox_face,
  	raccoon: raccoon,
  	cat: cat,
  	cat2: cat2,
  	black_cat: black_cat,
  	lion: lion,
  	tiger: tiger,
  	tiger2: tiger2,
  	leopard: leopard,
  	horse: horse,
  	racehorse: racehorse,
  	unicorn: unicorn,
  	zebra: zebra,
  	deer: deer,
  	bison: bison,
  	cow: cow,
  	ox: ox,
  	water_buffalo: water_buffalo,
  	cow2: cow2,
  	pig: pig,
  	pig2: pig2,
  	boar: boar,
  	pig_nose: pig_nose,
  	ram: ram,
  	sheep: sheep,
  	goat: goat,
  	dromedary_camel: dromedary_camel,
  	camel: camel,
  	llama: llama,
  	giraffe: giraffe,
  	elephant: elephant,
  	mammoth: mammoth,
  	rhinoceros: rhinoceros,
  	hippopotamus: hippopotamus,
  	mouse: mouse,
  	mouse2: mouse2,
  	rat: rat,
  	hamster: hamster,
  	rabbit: rabbit,
  	rabbit2: rabbit2,
  	chipmunk: chipmunk,
  	beaver: beaver,
  	hedgehog: hedgehog,
  	bat: bat,
  	bear: bear,
  	polar_bear: polar_bear,
  	koala: koala,
  	panda_face: panda_face,
  	sloth: sloth,
  	otter: otter,
  	skunk: skunk,
  	kangaroo: kangaroo,
  	badger: badger,
  	feet: feet,
  	paw_prints: paw_prints,
  	turkey: turkey,
  	chicken: chicken,
  	rooster: rooster,
  	hatching_chick: hatching_chick,
  	baby_chick: baby_chick,
  	hatched_chick: hatched_chick,
  	bird: bird,
  	penguin: penguin,
  	dove: dove,
  	eagle: eagle,
  	duck: duck,
  	swan: swan,
  	owl: owl,
  	dodo: dodo,
  	feather: feather,
  	flamingo: flamingo,
  	peacock: peacock,
  	parrot: parrot,
  	frog: frog,
  	crocodile: crocodile,
  	turtle: turtle,
  	lizard: lizard,
  	snake: snake,
  	dragon_face: dragon_face,
  	dragon: dragon,
  	sauropod: sauropod,
  	"t-rex": "🦖",
  	whale: whale,
  	whale2: whale2,
  	dolphin: dolphin,
  	flipper: flipper,
  	seal: seal,
  	fish: fish,
  	tropical_fish: tropical_fish,
  	blowfish: blowfish,
  	shark: shark,
  	octopus: octopus,
  	shell: shell,
  	snail: snail,
  	butterfly: butterfly,
  	bug: bug,
  	ant: ant,
  	bee: bee,
  	honeybee: honeybee,
  	beetle: beetle,
  	lady_beetle: lady_beetle,
  	cricket: cricket,
  	cockroach: cockroach,
  	spider: spider,
  	spider_web: spider_web,
  	scorpion: scorpion,
  	mosquito: mosquito,
  	fly: fly,
  	worm: worm,
  	microbe: microbe,
  	bouquet: bouquet,
  	cherry_blossom: cherry_blossom,
  	white_flower: white_flower,
  	rosette: rosette,
  	rose: rose,
  	wilted_flower: wilted_flower,
  	hibiscus: hibiscus,
  	sunflower: sunflower,
  	blossom: blossom,
  	tulip: tulip,
  	seedling: seedling,
  	potted_plant: potted_plant,
  	evergreen_tree: evergreen_tree,
  	deciduous_tree: deciduous_tree,
  	palm_tree: palm_tree,
  	cactus: cactus,
  	ear_of_rice: ear_of_rice,
  	herb: herb,
  	shamrock: shamrock,
  	four_leaf_clover: four_leaf_clover,
  	maple_leaf: maple_leaf,
  	fallen_leaf: fallen_leaf,
  	leaves: leaves,
  	grapes: grapes,
  	melon: melon,
  	watermelon: watermelon,
  	tangerine: tangerine,
  	orange: orange,
  	mandarin: mandarin,
  	lemon: lemon,
  	banana: banana,
  	pineapple: pineapple,
  	mango: mango,
  	apple: apple,
  	green_apple: green_apple,
  	pear: pear,
  	peach: peach,
  	cherries: cherries,
  	strawberry: strawberry,
  	blueberries: blueberries,
  	kiwi_fruit: kiwi_fruit,
  	tomato: tomato,
  	olive: olive,
  	coconut: coconut,
  	avocado: avocado,
  	eggplant: eggplant,
  	potato: potato,
  	carrot: carrot,
  	corn: corn,
  	hot_pepper: hot_pepper,
  	bell_pepper: bell_pepper,
  	cucumber: cucumber,
  	leafy_green: leafy_green,
  	broccoli: broccoli,
  	garlic: garlic,
  	onion: onion,
  	mushroom: mushroom,
  	peanuts: peanuts,
  	chestnut: chestnut,
  	bread: bread,
  	croissant: croissant,
  	baguette_bread: baguette_bread,
  	flatbread: flatbread,
  	pretzel: pretzel,
  	bagel: bagel,
  	pancakes: pancakes,
  	waffle: waffle,
  	cheese: cheese,
  	meat_on_bone: meat_on_bone,
  	poultry_leg: poultry_leg,
  	cut_of_meat: cut_of_meat,
  	bacon: bacon,
  	hamburger: hamburger,
  	fries: fries,
  	pizza: pizza,
  	hotdog: hotdog,
  	sandwich: sandwich,
  	taco: taco,
  	burrito: burrito,
  	tamale: tamale,
  	stuffed_flatbread: stuffed_flatbread,
  	falafel: falafel,
  	egg: egg,
  	fried_egg: fried_egg,
  	shallow_pan_of_food: shallow_pan_of_food,
  	stew: stew,
  	fondue: fondue,
  	bowl_with_spoon: bowl_with_spoon,
  	green_salad: green_salad,
  	popcorn: popcorn,
  	butter: butter,
  	salt: salt,
  	canned_food: canned_food,
  	bento: bento,
  	rice_cracker: rice_cracker,
  	rice_ball: rice_ball,
  	rice: rice,
  	curry: curry,
  	ramen: ramen,
  	spaghetti: spaghetti,
  	sweet_potato: sweet_potato,
  	oden: oden,
  	sushi: sushi,
  	fried_shrimp: fried_shrimp,
  	fish_cake: fish_cake,
  	moon_cake: moon_cake,
  	dango: dango,
  	dumpling: dumpling,
  	fortune_cookie: fortune_cookie,
  	takeout_box: takeout_box,
  	crab: crab,
  	lobster: lobster,
  	shrimp: shrimp,
  	squid: squid,
  	oyster: oyster,
  	icecream: icecream,
  	shaved_ice: shaved_ice,
  	ice_cream: ice_cream,
  	doughnut: doughnut,
  	cookie: cookie,
  	birthday: birthday,
  	cake: cake,
  	cupcake: cupcake,
  	pie: pie,
  	chocolate_bar: chocolate_bar,
  	candy: candy,
  	lollipop: lollipop,
  	custard: custard,
  	honey_pot: honey_pot,
  	baby_bottle: baby_bottle,
  	milk_glass: milk_glass,
  	coffee: coffee,
  	teapot: teapot,
  	tea: tea,
  	sake: sake,
  	champagne: champagne,
  	wine_glass: wine_glass,
  	cocktail: cocktail,
  	tropical_drink: tropical_drink,
  	beer: beer,
  	beers: beers,
  	clinking_glasses: clinking_glasses,
  	tumbler_glass: tumbler_glass,
  	cup_with_straw: cup_with_straw,
  	bubble_tea: bubble_tea,
  	beverage_box: beverage_box,
  	mate: mate,
  	ice_cube: ice_cube,
  	chopsticks: chopsticks,
  	plate_with_cutlery: plate_with_cutlery,
  	fork_and_knife: fork_and_knife,
  	spoon: spoon,
  	hocho: hocho,
  	knife: knife,
  	amphora: amphora,
  	earth_africa: earth_africa,
  	earth_americas: earth_americas,
  	earth_asia: earth_asia,
  	globe_with_meridians: globe_with_meridians,
  	world_map: world_map,
  	japan: japan,
  	compass: compass,
  	mountain_snow: mountain_snow,
  	mountain: mountain,
  	volcano: volcano,
  	mount_fuji: mount_fuji,
  	camping: camping,
  	beach_umbrella: beach_umbrella,
  	desert: desert,
  	desert_island: desert_island,
  	national_park: national_park,
  	stadium: stadium,
  	classical_building: classical_building,
  	building_construction: building_construction,
  	bricks: bricks,
  	rock: rock,
  	wood: wood,
  	hut: hut,
  	houses: houses,
  	derelict_house: derelict_house,
  	house: house,
  	house_with_garden: house_with_garden,
  	office: office,
  	post_office: post_office,
  	european_post_office: european_post_office,
  	hospital: hospital,
  	bank: bank,
  	hotel: hotel,
  	love_hotel: love_hotel,
  	convenience_store: convenience_store,
  	school: school,
  	department_store: department_store,
  	factory: factory,
  	japanese_castle: japanese_castle,
  	european_castle: european_castle,
  	wedding: wedding,
  	tokyo_tower: tokyo_tower,
  	statue_of_liberty: statue_of_liberty,
  	church: church,
  	mosque: mosque,
  	hindu_temple: hindu_temple,
  	synagogue: synagogue,
  	shinto_shrine: shinto_shrine,
  	kaaba: kaaba,
  	fountain: fountain,
  	tent: tent,
  	foggy: foggy,
  	night_with_stars: night_with_stars,
  	cityscape: cityscape,
  	sunrise_over_mountains: sunrise_over_mountains,
  	sunrise: sunrise,
  	city_sunset: city_sunset,
  	city_sunrise: city_sunrise,
  	bridge_at_night: bridge_at_night,
  	hotsprings: hotsprings,
  	carousel_horse: carousel_horse,
  	ferris_wheel: ferris_wheel,
  	roller_coaster: roller_coaster,
  	barber: barber,
  	circus_tent: circus_tent,
  	steam_locomotive: steam_locomotive,
  	railway_car: railway_car,
  	bullettrain_side: bullettrain_side,
  	bullettrain_front: bullettrain_front,
  	train2: train2,
  	metro: metro,
  	light_rail: light_rail,
  	station: station,
  	tram: tram,
  	monorail: monorail,
  	mountain_railway: mountain_railway,
  	train: train,
  	bus: bus,
  	oncoming_bus: oncoming_bus,
  	trolleybus: trolleybus,
  	minibus: minibus,
  	ambulance: ambulance,
  	fire_engine: fire_engine,
  	police_car: police_car,
  	oncoming_police_car: oncoming_police_car,
  	taxi: taxi,
  	oncoming_taxi: oncoming_taxi,
  	car: car,
  	red_car: red_car,
  	oncoming_automobile: oncoming_automobile,
  	blue_car: blue_car,
  	pickup_truck: pickup_truck,
  	truck: truck,
  	articulated_lorry: articulated_lorry,
  	tractor: tractor,
  	racing_car: racing_car,
  	motorcycle: motorcycle,
  	motor_scooter: motor_scooter,
  	manual_wheelchair: manual_wheelchair,
  	motorized_wheelchair: motorized_wheelchair,
  	auto_rickshaw: auto_rickshaw,
  	bike: bike,
  	kick_scooter: kick_scooter,
  	skateboard: skateboard,
  	roller_skate: roller_skate,
  	busstop: busstop,
  	motorway: motorway,
  	railway_track: railway_track,
  	oil_drum: oil_drum,
  	fuelpump: fuelpump,
  	rotating_light: rotating_light,
  	traffic_light: traffic_light,
  	vertical_traffic_light: vertical_traffic_light,
  	stop_sign: stop_sign,
  	construction: construction,
  	anchor: anchor,
  	boat: boat,
  	sailboat: sailboat,
  	canoe: canoe,
  	speedboat: speedboat,
  	passenger_ship: passenger_ship,
  	ferry: ferry,
  	motor_boat: motor_boat,
  	ship: ship,
  	airplane: airplane,
  	small_airplane: small_airplane,
  	flight_departure: flight_departure,
  	flight_arrival: flight_arrival,
  	parachute: parachute,
  	seat: seat,
  	helicopter: helicopter,
  	suspension_railway: suspension_railway,
  	mountain_cableway: mountain_cableway,
  	aerial_tramway: aerial_tramway,
  	artificial_satellite: artificial_satellite,
  	rocket: rocket,
  	flying_saucer: flying_saucer,
  	bellhop_bell: bellhop_bell,
  	luggage: luggage,
  	hourglass: hourglass,
  	hourglass_flowing_sand: hourglass_flowing_sand,
  	watch: watch,
  	alarm_clock: alarm_clock,
  	stopwatch: stopwatch,
  	timer_clock: timer_clock,
  	mantelpiece_clock: mantelpiece_clock,
  	clock12: clock12,
  	clock1230: clock1230,
  	clock1: clock1,
  	clock130: clock130,
  	clock2: clock2,
  	clock230: clock230,
  	clock3: clock3,
  	clock330: clock330,
  	clock4: clock4,
  	clock430: clock430,
  	clock5: clock5,
  	clock530: clock530,
  	clock6: clock6,
  	clock630: clock630,
  	clock7: clock7,
  	clock730: clock730,
  	clock8: clock8,
  	clock830: clock830,
  	clock9: clock9,
  	clock930: clock930,
  	clock10: clock10,
  	clock1030: clock1030,
  	clock11: clock11,
  	clock1130: clock1130,
  	new_moon: new_moon,
  	waxing_crescent_moon: waxing_crescent_moon,
  	first_quarter_moon: first_quarter_moon,
  	moon: moon,
  	waxing_gibbous_moon: waxing_gibbous_moon,
  	full_moon: full_moon,
  	waning_gibbous_moon: waning_gibbous_moon,
  	last_quarter_moon: last_quarter_moon,
  	waning_crescent_moon: waning_crescent_moon,
  	crescent_moon: crescent_moon,
  	new_moon_with_face: new_moon_with_face,
  	first_quarter_moon_with_face: first_quarter_moon_with_face,
  	last_quarter_moon_with_face: last_quarter_moon_with_face,
  	thermometer: thermometer,
  	sunny: sunny,
  	full_moon_with_face: full_moon_with_face,
  	sun_with_face: sun_with_face,
  	ringed_planet: ringed_planet,
  	star: star,
  	star2: star2,
  	stars: stars,
  	milky_way: milky_way,
  	cloud: cloud,
  	partly_sunny: partly_sunny,
  	cloud_with_lightning_and_rain: cloud_with_lightning_and_rain,
  	sun_behind_small_cloud: sun_behind_small_cloud,
  	sun_behind_large_cloud: sun_behind_large_cloud,
  	sun_behind_rain_cloud: sun_behind_rain_cloud,
  	cloud_with_rain: cloud_with_rain,
  	cloud_with_snow: cloud_with_snow,
  	cloud_with_lightning: cloud_with_lightning,
  	tornado: tornado,
  	fog: fog,
  	wind_face: wind_face,
  	cyclone: cyclone,
  	rainbow: rainbow,
  	closed_umbrella: closed_umbrella,
  	open_umbrella: open_umbrella,
  	umbrella: umbrella,
  	parasol_on_ground: parasol_on_ground,
  	zap: zap,
  	snowflake: snowflake,
  	snowman_with_snow: snowman_with_snow,
  	snowman: snowman,
  	comet: comet,
  	fire: fire,
  	droplet: droplet,
  	ocean: ocean,
  	jack_o_lantern: jack_o_lantern,
  	christmas_tree: christmas_tree,
  	fireworks: fireworks,
  	sparkler: sparkler,
  	firecracker: firecracker,
  	sparkles: sparkles,
  	balloon: balloon,
  	tada: tada,
  	confetti_ball: confetti_ball,
  	tanabata_tree: tanabata_tree,
  	bamboo: bamboo,
  	dolls: dolls,
  	flags: flags,
  	wind_chime: wind_chime,
  	rice_scene: rice_scene,
  	red_envelope: red_envelope,
  	ribbon: ribbon,
  	gift: gift,
  	reminder_ribbon: reminder_ribbon,
  	tickets: tickets,
  	ticket: ticket,
  	medal_military: medal_military,
  	trophy: trophy,
  	medal_sports: medal_sports,
  	"1st_place_medal": "🥇",
  	"2nd_place_medal": "🥈",
  	"3rd_place_medal": "🥉",
  	soccer: soccer,
  	baseball: baseball,
  	softball: softball,
  	basketball: basketball,
  	volleyball: volleyball,
  	football: football,
  	rugby_football: rugby_football,
  	tennis: tennis,
  	flying_disc: flying_disc,
  	bowling: bowling,
  	cricket_game: cricket_game,
  	field_hockey: field_hockey,
  	ice_hockey: ice_hockey,
  	lacrosse: lacrosse,
  	ping_pong: ping_pong,
  	badminton: badminton,
  	boxing_glove: boxing_glove,
  	martial_arts_uniform: martial_arts_uniform,
  	goal_net: goal_net,
  	golf: golf,
  	ice_skate: ice_skate,
  	fishing_pole_and_fish: fishing_pole_and_fish,
  	diving_mask: diving_mask,
  	running_shirt_with_sash: running_shirt_with_sash,
  	ski: ski,
  	sled: sled,
  	curling_stone: curling_stone,
  	dart: dart,
  	yo_yo: yo_yo,
  	kite: kite,
  	"8ball": "🎱",
  	crystal_ball: crystal_ball,
  	magic_wand: magic_wand,
  	nazar_amulet: nazar_amulet,
  	video_game: video_game,
  	joystick: joystick,
  	slot_machine: slot_machine,
  	game_die: game_die,
  	jigsaw: jigsaw,
  	teddy_bear: teddy_bear,
  	pinata: pinata,
  	nesting_dolls: nesting_dolls,
  	spades: spades,
  	hearts: hearts,
  	diamonds: diamonds,
  	clubs: clubs,
  	chess_pawn: chess_pawn,
  	black_joker: black_joker,
  	mahjong: mahjong,
  	flower_playing_cards: flower_playing_cards,
  	performing_arts: performing_arts,
  	framed_picture: framed_picture,
  	art: art,
  	thread: thread,
  	sewing_needle: sewing_needle,
  	yarn: yarn,
  	knot: knot,
  	eyeglasses: eyeglasses,
  	dark_sunglasses: dark_sunglasses,
  	goggles: goggles,
  	lab_coat: lab_coat,
  	safety_vest: safety_vest,
  	necktie: necktie,
  	shirt: shirt,
  	tshirt: tshirt,
  	jeans: jeans,
  	scarf: scarf,
  	gloves: gloves,
  	coat: coat,
  	socks: socks,
  	dress: dress,
  	kimono: kimono,
  	sari: sari,
  	one_piece_swimsuit: one_piece_swimsuit,
  	swim_brief: swim_brief,
  	shorts: shorts,
  	bikini: bikini,
  	womans_clothes: womans_clothes,
  	purse: purse,
  	handbag: handbag,
  	pouch: pouch,
  	shopping: shopping,
  	school_satchel: school_satchel,
  	thong_sandal: thong_sandal,
  	mans_shoe: mans_shoe,
  	shoe: shoe,
  	athletic_shoe: athletic_shoe,
  	hiking_boot: hiking_boot,
  	flat_shoe: flat_shoe,
  	high_heel: high_heel,
  	sandal: sandal,
  	ballet_shoes: ballet_shoes,
  	boot: boot,
  	crown: crown,
  	womans_hat: womans_hat,
  	tophat: tophat,
  	mortar_board: mortar_board,
  	billed_cap: billed_cap,
  	military_helmet: military_helmet,
  	rescue_worker_helmet: rescue_worker_helmet,
  	prayer_beads: prayer_beads,
  	lipstick: lipstick,
  	ring: ring,
  	gem: gem,
  	mute: mute,
  	speaker: speaker,
  	sound: sound,
  	loud_sound: loud_sound,
  	loudspeaker: loudspeaker,
  	mega: mega,
  	postal_horn: postal_horn,
  	bell: bell,
  	no_bell: no_bell,
  	musical_score: musical_score,
  	musical_note: musical_note,
  	notes: notes,
  	studio_microphone: studio_microphone,
  	level_slider: level_slider,
  	control_knobs: control_knobs,
  	microphone: microphone,
  	headphones: headphones,
  	radio: radio,
  	saxophone: saxophone,
  	accordion: accordion,
  	guitar: guitar,
  	musical_keyboard: musical_keyboard,
  	trumpet: trumpet,
  	violin: violin,
  	banjo: banjo,
  	drum: drum,
  	long_drum: long_drum,
  	iphone: iphone,
  	calling: calling,
  	phone: phone,
  	telephone: telephone,
  	telephone_receiver: telephone_receiver,
  	pager: pager,
  	fax: fax,
  	battery: battery,
  	electric_plug: electric_plug,
  	computer: computer,
  	desktop_computer: desktop_computer,
  	printer: printer,
  	keyboard: keyboard,
  	computer_mouse: computer_mouse,
  	trackball: trackball,
  	minidisc: minidisc,
  	floppy_disk: floppy_disk,
  	cd: cd,
  	dvd: dvd,
  	abacus: abacus,
  	movie_camera: movie_camera,
  	film_strip: film_strip,
  	film_projector: film_projector,
  	clapper: clapper,
  	tv: tv,
  	camera: camera,
  	camera_flash: camera_flash,
  	video_camera: video_camera,
  	vhs: vhs,
  	mag: mag,
  	mag_right: mag_right,
  	candle: candle,
  	bulb: bulb,
  	flashlight: flashlight,
  	izakaya_lantern: izakaya_lantern,
  	lantern: lantern,
  	diya_lamp: diya_lamp,
  	notebook_with_decorative_cover: notebook_with_decorative_cover,
  	closed_book: closed_book,
  	book: book,
  	open_book: open_book,
  	green_book: green_book,
  	blue_book: blue_book,
  	orange_book: orange_book,
  	books: books,
  	notebook: notebook,
  	ledger: ledger,
  	page_with_curl: page_with_curl,
  	scroll: scroll,
  	page_facing_up: page_facing_up,
  	newspaper: newspaper,
  	newspaper_roll: newspaper_roll,
  	bookmark_tabs: bookmark_tabs,
  	bookmark: bookmark,
  	label: label,
  	moneybag: moneybag,
  	coin: coin,
  	yen: yen,
  	dollar: dollar,
  	euro: euro,
  	pound: pound,
  	money_with_wings: money_with_wings,
  	credit_card: credit_card,
  	receipt: receipt,
  	chart: chart,
  	envelope: envelope,
  	email: email,
  	"e-mail": "📧",
  	incoming_envelope: incoming_envelope,
  	envelope_with_arrow: envelope_with_arrow,
  	outbox_tray: outbox_tray,
  	inbox_tray: inbox_tray,
  	"package": "📦",
  	mailbox: mailbox,
  	mailbox_closed: mailbox_closed,
  	mailbox_with_mail: mailbox_with_mail,
  	mailbox_with_no_mail: mailbox_with_no_mail,
  	postbox: postbox,
  	ballot_box: ballot_box,
  	pencil2: pencil2,
  	black_nib: black_nib,
  	fountain_pen: fountain_pen,
  	pen: pen,
  	paintbrush: paintbrush,
  	crayon: crayon,
  	memo: memo,
  	pencil: pencil,
  	briefcase: briefcase,
  	file_folder: file_folder,
  	open_file_folder: open_file_folder,
  	card_index_dividers: card_index_dividers,
  	date: date,
  	calendar: calendar,
  	spiral_notepad: spiral_notepad,
  	spiral_calendar: spiral_calendar,
  	card_index: card_index,
  	chart_with_upwards_trend: chart_with_upwards_trend,
  	chart_with_downwards_trend: chart_with_downwards_trend,
  	bar_chart: bar_chart,
  	clipboard: clipboard,
  	pushpin: pushpin,
  	round_pushpin: round_pushpin,
  	paperclip: paperclip,
  	paperclips: paperclips,
  	straight_ruler: straight_ruler,
  	triangular_ruler: triangular_ruler,
  	scissors: scissors,
  	card_file_box: card_file_box,
  	file_cabinet: file_cabinet,
  	wastebasket: wastebasket,
  	lock: lock,
  	unlock: unlock,
  	lock_with_ink_pen: lock_with_ink_pen,
  	closed_lock_with_key: closed_lock_with_key,
  	key: key,
  	old_key: old_key,
  	hammer: hammer,
  	axe: axe,
  	pick: pick,
  	hammer_and_pick: hammer_and_pick,
  	hammer_and_wrench: hammer_and_wrench,
  	dagger: dagger,
  	crossed_swords: crossed_swords,
  	gun: gun,
  	boomerang: boomerang,
  	bow_and_arrow: bow_and_arrow,
  	shield: shield,
  	carpentry_saw: carpentry_saw,
  	wrench: wrench,
  	screwdriver: screwdriver,
  	nut_and_bolt: nut_and_bolt,
  	gear: gear,
  	clamp: clamp,
  	balance_scale: balance_scale,
  	probing_cane: probing_cane,
  	link: link,
  	chains: chains,
  	hook: hook,
  	toolbox: toolbox,
  	magnet: magnet,
  	ladder: ladder,
  	alembic: alembic,
  	test_tube: test_tube,
  	petri_dish: petri_dish,
  	dna: dna,
  	microscope: microscope,
  	telescope: telescope,
  	satellite: satellite,
  	syringe: syringe,
  	drop_of_blood: drop_of_blood,
  	pill: pill,
  	adhesive_bandage: adhesive_bandage,
  	stethoscope: stethoscope,
  	door: door,
  	elevator: elevator,
  	mirror: mirror,
  	window: window$1,
  	bed: bed,
  	couch_and_lamp: couch_and_lamp,
  	chair: chair,
  	toilet: toilet,
  	plunger: plunger,
  	shower: shower,
  	bathtub: bathtub,
  	mouse_trap: mouse_trap,
  	razor: razor,
  	lotion_bottle: lotion_bottle,
  	safety_pin: safety_pin,
  	broom: broom,
  	basket: basket,
  	roll_of_paper: roll_of_paper,
  	bucket: bucket,
  	soap: soap,
  	toothbrush: toothbrush,
  	sponge: sponge,
  	fire_extinguisher: fire_extinguisher,
  	shopping_cart: shopping_cart,
  	smoking: smoking,
  	coffin: coffin,
  	headstone: headstone,
  	funeral_urn: funeral_urn,
  	moyai: moyai,
  	placard: placard,
  	atm: atm,
  	put_litter_in_its_place: put_litter_in_its_place,
  	potable_water: potable_water,
  	wheelchair: wheelchair,
  	mens: mens,
  	womens: womens,
  	restroom: restroom,
  	baby_symbol: baby_symbol,
  	wc: wc,
  	passport_control: passport_control,
  	customs: customs,
  	baggage_claim: baggage_claim,
  	left_luggage: left_luggage,
  	warning: warning,
  	children_crossing: children_crossing,
  	no_entry: no_entry,
  	no_entry_sign: no_entry_sign,
  	no_bicycles: no_bicycles,
  	no_smoking: no_smoking,
  	do_not_litter: do_not_litter,
  	"non-potable_water": "🚱",
  	no_pedestrians: no_pedestrians,
  	no_mobile_phones: no_mobile_phones,
  	underage: underage,
  	radioactive: radioactive,
  	biohazard: biohazard,
  	arrow_up: arrow_up,
  	arrow_upper_right: arrow_upper_right,
  	arrow_right: arrow_right,
  	arrow_lower_right: arrow_lower_right,
  	arrow_down: arrow_down,
  	arrow_lower_left: arrow_lower_left,
  	arrow_left: arrow_left,
  	arrow_upper_left: arrow_upper_left,
  	arrow_up_down: arrow_up_down,
  	left_right_arrow: left_right_arrow,
  	leftwards_arrow_with_hook: leftwards_arrow_with_hook,
  	arrow_right_hook: arrow_right_hook,
  	arrow_heading_up: arrow_heading_up,
  	arrow_heading_down: arrow_heading_down,
  	arrows_clockwise: arrows_clockwise,
  	arrows_counterclockwise: arrows_counterclockwise,
  	back: back,
  	end: end,
  	on: on,
  	soon: soon,
  	top: top,
  	place_of_worship: place_of_worship,
  	atom_symbol: atom_symbol,
  	om: om,
  	star_of_david: star_of_david,
  	wheel_of_dharma: wheel_of_dharma,
  	yin_yang: yin_yang,
  	latin_cross: latin_cross,
  	orthodox_cross: orthodox_cross,
  	star_and_crescent: star_and_crescent,
  	peace_symbol: peace_symbol,
  	menorah: menorah,
  	six_pointed_star: six_pointed_star,
  	aries: aries,
  	taurus: taurus,
  	gemini: gemini,
  	cancer: cancer,
  	leo: leo,
  	virgo: virgo,
  	libra: libra,
  	scorpius: scorpius,
  	sagittarius: sagittarius,
  	capricorn: capricorn,
  	aquarius: aquarius,
  	pisces: pisces,
  	ophiuchus: ophiuchus,
  	twisted_rightwards_arrows: twisted_rightwards_arrows,
  	repeat: repeat,
  	repeat_one: repeat_one,
  	arrow_forward: arrow_forward,
  	fast_forward: fast_forward,
  	next_track_button: next_track_button,
  	play_or_pause_button: play_or_pause_button,
  	arrow_backward: arrow_backward,
  	rewind: rewind,
  	previous_track_button: previous_track_button,
  	arrow_up_small: arrow_up_small,
  	arrow_double_up: arrow_double_up,
  	arrow_down_small: arrow_down_small,
  	arrow_double_down: arrow_double_down,
  	pause_button: pause_button,
  	stop_button: stop_button,
  	record_button: record_button,
  	eject_button: eject_button,
  	cinema: cinema,
  	low_brightness: low_brightness,
  	high_brightness: high_brightness,
  	signal_strength: signal_strength,
  	vibration_mode: vibration_mode,
  	mobile_phone_off: mobile_phone_off,
  	female_sign: female_sign,
  	male_sign: male_sign,
  	transgender_symbol: transgender_symbol,
  	heavy_multiplication_x: heavy_multiplication_x,
  	heavy_plus_sign: heavy_plus_sign,
  	heavy_minus_sign: heavy_minus_sign,
  	heavy_division_sign: heavy_division_sign,
  	infinity: infinity,
  	bangbang: bangbang,
  	interrobang: interrobang,
  	question: question,
  	grey_question: grey_question,
  	grey_exclamation: grey_exclamation,
  	exclamation: exclamation,
  	heavy_exclamation_mark: heavy_exclamation_mark,
  	wavy_dash: wavy_dash,
  	currency_exchange: currency_exchange,
  	heavy_dollar_sign: heavy_dollar_sign,
  	medical_symbol: medical_symbol,
  	recycle: recycle,
  	fleur_de_lis: fleur_de_lis,
  	trident: trident,
  	name_badge: name_badge,
  	beginner: beginner,
  	o: o,
  	white_check_mark: white_check_mark,
  	ballot_box_with_check: ballot_box_with_check,
  	heavy_check_mark: heavy_check_mark,
  	x: x,
  	negative_squared_cross_mark: negative_squared_cross_mark,
  	curly_loop: curly_loop,
  	loop: loop,
  	part_alternation_mark: part_alternation_mark,
  	eight_spoked_asterisk: eight_spoked_asterisk,
  	eight_pointed_black_star: eight_pointed_black_star,
  	sparkle: sparkle,
  	copyright: copyright,
  	registered: registered,
  	tm: tm,
  	hash: hash,
  	asterisk: asterisk,
  	zero: zero,
  	one: one,
  	two: two,
  	three: three,
  	four: four,
  	five: five,
  	six: six,
  	seven: seven,
  	eight: eight,
  	nine: nine,
  	keycap_ten: keycap_ten,
  	capital_abcd: capital_abcd,
  	abcd: abcd,
  	symbols: symbols,
  	abc: abc,
  	a: a,
  	ab: ab,
  	b: b,
  	cl: cl,
  	cool: cool,
  	free: free,
  	information_source: information_source,
  	id: id,
  	m: m,
  	"new": "🆕",
  	ng: ng,
  	o2: o2,
  	ok: ok,
  	parking: parking,
  	sos: sos,
  	up: up,
  	vs: vs,
  	koko: koko,
  	sa: sa,
  	ideograph_advantage: ideograph_advantage,
  	accept: accept,
  	congratulations: congratulations,
  	secret: secret,
  	u6e80: u6e80,
  	red_circle: red_circle,
  	orange_circle: orange_circle,
  	yellow_circle: yellow_circle,
  	green_circle: green_circle,
  	large_blue_circle: large_blue_circle,
  	purple_circle: purple_circle,
  	brown_circle: brown_circle,
  	black_circle: black_circle,
  	white_circle: white_circle,
  	red_square: red_square,
  	orange_square: orange_square,
  	yellow_square: yellow_square,
  	green_square: green_square,
  	blue_square: blue_square,
  	purple_square: purple_square,
  	brown_square: brown_square,
  	black_large_square: black_large_square,
  	white_large_square: white_large_square,
  	black_medium_square: black_medium_square,
  	white_medium_square: white_medium_square,
  	black_medium_small_square: black_medium_small_square,
  	white_medium_small_square: white_medium_small_square,
  	black_small_square: black_small_square,
  	white_small_square: white_small_square,
  	large_orange_diamond: large_orange_diamond,
  	large_blue_diamond: large_blue_diamond,
  	small_orange_diamond: small_orange_diamond,
  	small_blue_diamond: small_blue_diamond,
  	small_red_triangle: small_red_triangle,
  	small_red_triangle_down: small_red_triangle_down,
  	diamond_shape_with_a_dot_inside: diamond_shape_with_a_dot_inside,
  	radio_button: radio_button,
  	white_square_button: white_square_button,
  	black_square_button: black_square_button,
  	checkered_flag: checkered_flag,
  	triangular_flag_on_post: triangular_flag_on_post,
  	crossed_flags: crossed_flags,
  	black_flag: black_flag,
  	white_flag: white_flag,
  	rainbow_flag: rainbow_flag,
  	transgender_flag: transgender_flag,
  	pirate_flag: pirate_flag,
  	ascension_island: ascension_island,
  	andorra: andorra,
  	united_arab_emirates: united_arab_emirates,
  	afghanistan: afghanistan,
  	antigua_barbuda: antigua_barbuda,
  	anguilla: anguilla,
  	albania: albania,
  	armenia: armenia,
  	angola: angola,
  	antarctica: antarctica,
  	argentina: argentina,
  	american_samoa: american_samoa,
  	austria: austria,
  	australia: australia,
  	aruba: aruba,
  	aland_islands: aland_islands,
  	azerbaijan: azerbaijan,
  	bosnia_herzegovina: bosnia_herzegovina,
  	barbados: barbados,
  	bangladesh: bangladesh,
  	belgium: belgium,
  	burkina_faso: burkina_faso,
  	bulgaria: bulgaria,
  	bahrain: bahrain,
  	burundi: burundi,
  	benin: benin,
  	st_barthelemy: st_barthelemy,
  	bermuda: bermuda,
  	brunei: brunei,
  	bolivia: bolivia,
  	caribbean_netherlands: caribbean_netherlands,
  	brazil: brazil,
  	bahamas: bahamas,
  	bhutan: bhutan,
  	bouvet_island: bouvet_island,
  	botswana: botswana,
  	belarus: belarus,
  	belize: belize,
  	canada: canada,
  	cocos_islands: cocos_islands,
  	congo_kinshasa: congo_kinshasa,
  	central_african_republic: central_african_republic,
  	congo_brazzaville: congo_brazzaville,
  	switzerland: switzerland,
  	cote_divoire: cote_divoire,
  	cook_islands: cook_islands,
  	chile: chile,
  	cameroon: cameroon,
  	cn: cn,
  	colombia: colombia,
  	clipperton_island: clipperton_island,
  	costa_rica: costa_rica,
  	cuba: cuba,
  	cape_verde: cape_verde,
  	curacao: curacao,
  	christmas_island: christmas_island,
  	cyprus: cyprus,
  	czech_republic: czech_republic,
  	de: de,
  	diego_garcia: diego_garcia,
  	djibouti: djibouti,
  	denmark: denmark,
  	dominica: dominica,
  	dominican_republic: dominican_republic,
  	algeria: algeria,
  	ceuta_melilla: ceuta_melilla,
  	ecuador: ecuador,
  	estonia: estonia,
  	egypt: egypt,
  	western_sahara: western_sahara,
  	eritrea: eritrea,
  	es: es,
  	ethiopia: ethiopia,
  	eu: eu,
  	european_union: european_union,
  	finland: finland,
  	fiji: fiji,
  	falkland_islands: falkland_islands,
  	micronesia: micronesia,
  	faroe_islands: faroe_islands,
  	fr: fr,
  	gabon: gabon,
  	gb: gb,
  	uk: uk,
  	grenada: grenada,
  	georgia: georgia,
  	french_guiana: french_guiana,
  	guernsey: guernsey,
  	ghana: ghana,
  	gibraltar: gibraltar,
  	greenland: greenland,
  	gambia: gambia,
  	guinea: guinea,
  	guadeloupe: guadeloupe,
  	equatorial_guinea: equatorial_guinea,
  	greece: greece,
  	south_georgia_south_sandwich_islands: south_georgia_south_sandwich_islands,
  	guatemala: guatemala,
  	guam: guam,
  	guinea_bissau: guinea_bissau,
  	guyana: guyana,
  	hong_kong: hong_kong,
  	heard_mcdonald_islands: heard_mcdonald_islands,
  	honduras: honduras,
  	croatia: croatia,
  	haiti: haiti,
  	hungary: hungary,
  	canary_islands: canary_islands,
  	indonesia: indonesia,
  	ireland: ireland,
  	israel: israel,
  	isle_of_man: isle_of_man,
  	india: india,
  	british_indian_ocean_territory: british_indian_ocean_territory,
  	iraq: iraq,
  	iran: iran,
  	iceland: iceland,
  	it: it,
  	jersey: jersey,
  	jamaica: jamaica,
  	jordan: jordan,
  	jp: jp,
  	kenya: kenya,
  	kyrgyzstan: kyrgyzstan,
  	cambodia: cambodia,
  	kiribati: kiribati,
  	comoros: comoros,
  	st_kitts_nevis: st_kitts_nevis,
  	north_korea: north_korea,
  	kr: kr,
  	kuwait: kuwait,
  	cayman_islands: cayman_islands,
  	kazakhstan: kazakhstan,
  	laos: laos,
  	lebanon: lebanon,
  	st_lucia: st_lucia,
  	liechtenstein: liechtenstein,
  	sri_lanka: sri_lanka,
  	liberia: liberia,
  	lesotho: lesotho,
  	lithuania: lithuania,
  	luxembourg: luxembourg,
  	latvia: latvia,
  	libya: libya,
  	morocco: morocco,
  	monaco: monaco,
  	moldova: moldova,
  	montenegro: montenegro,
  	st_martin: st_martin,
  	madagascar: madagascar,
  	marshall_islands: marshall_islands,
  	macedonia: macedonia,
  	mali: mali,
  	myanmar: myanmar,
  	mongolia: mongolia,
  	macau: macau,
  	northern_mariana_islands: northern_mariana_islands,
  	martinique: martinique,
  	mauritania: mauritania,
  	montserrat: montserrat,
  	malta: malta,
  	mauritius: mauritius,
  	maldives: maldives,
  	malawi: malawi,
  	mexico: mexico,
  	malaysia: malaysia,
  	mozambique: mozambique,
  	namibia: namibia,
  	new_caledonia: new_caledonia,
  	niger: niger,
  	norfolk_island: norfolk_island,
  	nigeria: nigeria,
  	nicaragua: nicaragua,
  	netherlands: netherlands,
  	norway: norway,
  	nepal: nepal,
  	nauru: nauru,
  	niue: niue,
  	new_zealand: new_zealand,
  	oman: oman,
  	panama: panama,
  	peru: peru,
  	french_polynesia: french_polynesia,
  	papua_new_guinea: papua_new_guinea,
  	philippines: philippines,
  	pakistan: pakistan,
  	poland: poland,
  	st_pierre_miquelon: st_pierre_miquelon,
  	pitcairn_islands: pitcairn_islands,
  	puerto_rico: puerto_rico,
  	palestinian_territories: palestinian_territories,
  	portugal: portugal,
  	palau: palau,
  	paraguay: paraguay,
  	qatar: qatar,
  	reunion: reunion,
  	romania: romania,
  	serbia: serbia,
  	ru: ru,
  	rwanda: rwanda,
  	saudi_arabia: saudi_arabia,
  	solomon_islands: solomon_islands,
  	seychelles: seychelles,
  	sudan: sudan,
  	sweden: sweden,
  	singapore: singapore,
  	st_helena: st_helena,
  	slovenia: slovenia,
  	svalbard_jan_mayen: svalbard_jan_mayen,
  	slovakia: slovakia,
  	sierra_leone: sierra_leone,
  	san_marino: san_marino,
  	senegal: senegal,
  	somalia: somalia,
  	suriname: suriname,
  	south_sudan: south_sudan,
  	sao_tome_principe: sao_tome_principe,
  	el_salvador: el_salvador,
  	sint_maarten: sint_maarten,
  	syria: syria,
  	swaziland: swaziland,
  	tristan_da_cunha: tristan_da_cunha,
  	turks_caicos_islands: turks_caicos_islands,
  	chad: chad,
  	french_southern_territories: french_southern_territories,
  	togo: togo,
  	thailand: thailand,
  	tajikistan: tajikistan,
  	tokelau: tokelau,
  	timor_leste: timor_leste,
  	turkmenistan: turkmenistan,
  	tunisia: tunisia,
  	tonga: tonga,
  	tr: tr,
  	trinidad_tobago: trinidad_tobago,
  	tuvalu: tuvalu,
  	taiwan: taiwan,
  	tanzania: tanzania,
  	ukraine: ukraine,
  	uganda: uganda,
  	us_outlying_islands: us_outlying_islands,
  	united_nations: united_nations,
  	us: us,
  	uruguay: uruguay,
  	uzbekistan: uzbekistan,
  	vatican_city: vatican_city,
  	st_vincent_grenadines: st_vincent_grenadines,
  	venezuela: venezuela,
  	british_virgin_islands: british_virgin_islands,
  	us_virgin_islands: us_virgin_islands,
  	vietnam: vietnam,
  	vanuatu: vanuatu,
  	wallis_futuna: wallis_futuna,
  	samoa: samoa,
  	kosovo: kosovo,
  	yemen: yemen,
  	mayotte: mayotte,
  	south_africa: south_africa,
  	zambia: zambia,
  	zimbabwe: zimbabwe,
  	england: england,
  	scotland: scotland,
  	wales: wales
  };

  var shortcuts = {
    angry:            [ '>:(', '>:-(' ],
    blush:            [ ':")', ':-")' ],
    broken_heart:     [ '</3', '<\\3' ],
    // :\ and :-\ not used because of conflict with markdown escaping
    confused:         [ ':/', ':-/' ], // twemoji shows question
    cry:              [ ":'(", ":'-(", ':,(', ':,-(' ],
    frowning:         [ ':(', ':-(' ],
    heart:            [ '<3' ],
    imp:              [ ']:(', ']:-(' ],
    innocent:         [ 'o:)', 'O:)', 'o:-)', 'O:-)', '0:)', '0:-)' ],
    joy:              [ ":')", ":'-)", ':,)', ':,-)', ":'D", ":'-D", ':,D', ':,-D' ],
    kissing:          [ ':*', ':-*' ],
    laughing:         [ 'x-)', 'X-)' ],
    neutral_face:     [ ':|', ':-|' ],
    open_mouth:       [ ':o', ':-o', ':O', ':-O' ],
    rage:             [ ':@', ':-@' ],
    smile:            [ ':D', ':-D' ],
    smiley:           [ ':)', ':-)' ],
    smiling_imp:      [ ']:)', ']:-)' ],
    sob:              [ ":,'(", ":,'-(", ';(', ';-(' ],
    stuck_out_tongue: [ ':P', ':-P' ],
    sunglasses:       [ '8-)', 'B-)' ],
    sweat:            [ ',:(', ',:-(' ],
    sweat_smile:      [ ',:)', ',:-)' ],
    unamused:         [ ':s', ':-S', ':z', ':-Z', ':$', ':-$' ],
    wink:             [ ';)', ';-)' ]
  };

  var render = function emoji_html(tokens, idx /*, options, env */) {
    return tokens[idx].content;
  };

  var replace = function create_rule(md, emojies, shortcuts, scanRE, replaceRE) {
    var arrayReplaceAt = md.utils.arrayReplaceAt,
        ucm = md.utils.lib.ucmicro,
        ZPCc = new RegExp([ ucm.Z.source, ucm.P.source, ucm.Cc.source ].join('|'));

    function splitTextToken(text, level, Token) {
      var token, last_pos = 0, nodes = [];

      text.replace(replaceRE, function (match, offset, src) {
        var emoji_name;
        // Validate emoji name
        if (shortcuts.hasOwnProperty(match)) {
          // replace shortcut with full name
          emoji_name = shortcuts[match];

          // Don't allow letters before any shortcut (as in no ":/" in http://)
          if (offset > 0 && !ZPCc.test(src[offset - 1])) {
            return;
          }

          // Don't allow letters after any shortcut
          if (offset + match.length < src.length && !ZPCc.test(src[offset + match.length])) {
            return;
          }
        } else {
          emoji_name = match.slice(1, -1);
        }

        // Add new tokens to pending list
        if (offset > last_pos) {
          token         = new Token('text', '', 0);
          token.content = text.slice(last_pos, offset);
          nodes.push(token);
        }

        token         = new Token('emoji', '', 0);
        token.markup  = emoji_name;
        token.content = emojies[emoji_name];
        nodes.push(token);

        last_pos = offset + match.length;
      });

      if (last_pos < text.length) {
        token         = new Token('text', '', 0);
        token.content = text.slice(last_pos);
        nodes.push(token);
      }

      return nodes;
    }

    return function emoji_replace(state) {
      var i, j, l, tokens, token,
          blockTokens = state.tokens,
          autolinkLevel = 0;

      for (j = 0, l = blockTokens.length; j < l; j++) {
        if (blockTokens[j].type !== 'inline') { continue; }
        tokens = blockTokens[j].children;

        // We scan from the end, to keep position when new tags added.
        // Use reversed logic in links start/end match
        for (i = tokens.length - 1; i >= 0; i--) {
          token = tokens[i];

          if (token.type === 'link_open' || token.type === 'link_close') {
            if (token.info === 'auto') { autolinkLevel -= token.nesting; }
          }

          if (token.type === 'text' && autolinkLevel === 0 && scanRE.test(token.content)) {
            // replace current node
            blockTokens[j].children = tokens = arrayReplaceAt(
              tokens, i, splitTextToken(token.content, token.level, state.Token)
            );
          }
        }
      }
    };
  };

  function quoteRE(str) {
    return str.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&');
  }


  var normalize_opts$1 = function normalize_opts(options) {
    var emojies = options.defs,
        shortcuts;

    // Filter emojies by whitelist, if needed
    if (options.enabled.length) {
      emojies = Object.keys(emojies).reduce(function (acc, key) {
        if (options.enabled.indexOf(key) >= 0) {
          acc[key] = emojies[key];
        }
        return acc;
      }, {});
    }

    // Flatten shortcuts to simple object: { alias: emoji_name }
    shortcuts = Object.keys(options.shortcuts).reduce(function (acc, key) {
      // Skip aliases for filtered emojies, to reduce regexp
      if (!emojies[key]) { return acc; }

      if (Array.isArray(options.shortcuts[key])) {
        options.shortcuts[key].forEach(function (alias) {
          acc[alias] = key;
        });
        return acc;
      }

      acc[options.shortcuts[key]] = key;
      return acc;
    }, {});

    var keys = Object.keys(emojies),
        names;

    // If no definitions are given, return empty regex to avoid replacements with 'undefined'.
    if (keys.length === 0) {
      names = '^$';
    } else {
      // Compile regexp
      names = keys
        .map(function (name) { return ':' + name + ':'; })
        .concat(Object.keys(shortcuts))
        .sort()
        .reverse()
        .map(function (name) { return quoteRE(name); })
        .join('|');
    }
    var scanRE = RegExp(names);
    var replaceRE = RegExp(names, 'g');

    return {
      defs: emojies,
      shortcuts: shortcuts,
      scanRE: scanRE,
      replaceRE: replaceRE
    };
  };

  var emoji_html        = render;
  var emoji_replace     = replace;
  var normalize_opts    = normalize_opts$1;


  var bare = function emoji_plugin(md, options) {
    var defaults = {
      defs: {},
      shortcuts: {},
      enabled: []
    };

    var opts = normalize_opts(md.utils.assign({}, defaults, options || {}));

    md.renderer.rules.emoji = emoji_html;

    md.core.ruler.push('emoji', emoji_replace(md, opts.defs, opts.shortcuts, opts.scanRE, opts.replaceRE));
  };

  var emojies_defs      = require$$0;
  var emojies_shortcuts = shortcuts;
  var bare_emoji_plugin = bare;


  var markdownItEmoji = function emoji_plugin(md, options) {
    var defaults = {
      defs: emojies_defs,
      shortcuts: emojies_shortcuts,
      enabled: []
    };

    var opts = md.utils.assign({}, defaults, options || {});

    bare_emoji_plugin(md, opts);
  };

  // same as UNESCAPE_MD_RE plus a space
  var UNESCAPE_RE$1 = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;


  function subscript(state, silent) {
    var found,
        content,
        token,
        max = state.posMax,
        start = state.pos;

    if (state.src.charCodeAt(start) !== 0x7E/* ~ */) { return false; }
    if (silent) { return false; } // don't run any pairs in validation mode
    if (start + 2 >= max) { return false; }

    state.pos = start + 1;

    while (state.pos < max) {
      if (state.src.charCodeAt(state.pos) === 0x7E/* ~ */) {
        found = true;
        break;
      }

      state.md.inline.skipToken(state);
    }

    if (!found || start + 1 === state.pos) {
      state.pos = start;
      return false;
    }

    content = state.src.slice(start + 1, state.pos);

    // don't allow unescaped spaces/newlines inside
    if (content.match(/(^|[^\\])(\\\\)*\s/)) {
      state.pos = start;
      return false;
    }

    // found!
    state.posMax = state.pos;
    state.pos = start + 1;

    // Earlier we checked !silent, but this implementation does not need it
    token         = state.push('sub_open', 'sub', 1);
    token.markup  = '~';

    token         = state.push('text', '', 0);
    token.content = content.replace(UNESCAPE_RE$1, '$1');

    token         = state.push('sub_close', 'sub', -1);
    token.markup  = '~';

    state.pos = state.posMax + 1;
    state.posMax = max;
    return true;
  }


  var markdownItSub = function sub_plugin(md) {
    md.inline.ruler.after('emphasis', 'sub', subscript);
  };

  // same as UNESCAPE_MD_RE plus a space
  var UNESCAPE_RE = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;

  function superscript(state, silent) {
    var found,
        content,
        token,
        max = state.posMax,
        start = state.pos;

    if (state.src.charCodeAt(start) !== 0x5E/* ^ */) { return false; }
    if (silent) { return false; } // don't run any pairs in validation mode
    if (start + 2 >= max) { return false; }

    state.pos = start + 1;

    while (state.pos < max) {
      if (state.src.charCodeAt(state.pos) === 0x5E/* ^ */) {
        found = true;
        break;
      }

      state.md.inline.skipToken(state);
    }

    if (!found || start + 1 === state.pos) {
      state.pos = start;
      return false;
    }

    content = state.src.slice(start + 1, state.pos);

    // don't allow unescaped spaces/newlines inside
    if (content.match(/(^|[^\\])(\\\\)*\s/)) {
      state.pos = start;
      return false;
    }

    // found!
    state.posMax = state.pos;
    state.pos = start + 1;

    // Earlier we checked !silent, but this implementation does not need it
    token         = state.push('sup_open', 'sup', 1);
    token.markup  = '^';

    token         = state.push('text', '', 0);
    token.content = content.replace(UNESCAPE_RE, '$1');

    token         = state.push('sup_close', 'sup', -1);
    token.markup  = '^';

    state.pos = state.posMax + 1;
    state.posMax = max;
    return true;
  }


  var markdownItSup = function sup_plugin(md) {
    md.inline.ruler.after('emphasis', 'sup', superscript);
  };

  ////////////////////////////////////////////////////////////////////////////////
  // Renderer partials

  function render_footnote_anchor_name(tokens, idx, options, env/*, slf*/) {
    var n = Number(tokens[idx].meta.id + 1).toString();
    var prefix = '';

    if (typeof env.docId === 'string') {
      prefix = '-' + env.docId + '-';
    }

    return prefix + n;
  }

  function render_footnote_caption(tokens, idx/*, options, env, slf*/) {
    var n = Number(tokens[idx].meta.id + 1).toString();

    if (tokens[idx].meta.subId > 0) {
      n += ':' + tokens[idx].meta.subId;
    }

    return '[' + n + ']';
  }

  function render_footnote_ref(tokens, idx, options, env, slf) {
    var id      = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);
    var caption = slf.rules.footnote_caption(tokens, idx, options, env, slf);
    var refid   = id;

    if (tokens[idx].meta.subId > 0) {
      refid += ':' + tokens[idx].meta.subId;
    }

    return '<sup class="footnote-ref"><a href="#fn' + id + '" id="fnref' + refid + '">' + caption + '</a></sup>';
  }

  function render_footnote_block_open(tokens, idx, options) {
    return (options.xhtmlOut ? '<hr class="footnotes-sep" />\n' : '<hr class="footnotes-sep">\n') +
           '<section class="footnotes">\n' +
           '<ol class="footnotes-list">\n';
  }

  function render_footnote_block_close() {
    return '</ol>\n</section>\n';
  }

  function render_footnote_open(tokens, idx, options, env, slf) {
    var id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);

    if (tokens[idx].meta.subId > 0) {
      id += ':' + tokens[idx].meta.subId;
    }

    return '<li id="fn' + id + '" class="footnote-item">';
  }

  function render_footnote_close() {
    return '</li>\n';
  }

  function render_footnote_anchor(tokens, idx, options, env, slf) {
    var id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);

    if (tokens[idx].meta.subId > 0) {
      id += ':' + tokens[idx].meta.subId;
    }

    /* ↩ with escape code to prevent display as Apple Emoji on iOS */
    return ' <a href="#fnref' + id + '" class="footnote-backref">\u21a9\uFE0E</a>';
  }


  var markdownItFootnote = function footnote_plugin(md) {
    var parseLinkLabel = md.helpers.parseLinkLabel,
        isSpace = md.utils.isSpace;

    md.renderer.rules.footnote_ref          = render_footnote_ref;
    md.renderer.rules.footnote_block_open   = render_footnote_block_open;
    md.renderer.rules.footnote_block_close  = render_footnote_block_close;
    md.renderer.rules.footnote_open         = render_footnote_open;
    md.renderer.rules.footnote_close        = render_footnote_close;
    md.renderer.rules.footnote_anchor       = render_footnote_anchor;

    // helpers (only used in other rules, no tokens are attached to those)
    md.renderer.rules.footnote_caption      = render_footnote_caption;
    md.renderer.rules.footnote_anchor_name  = render_footnote_anchor_name;

    // Process footnote block definition
    function footnote_def(state, startLine, endLine, silent) {
      var oldBMark, oldTShift, oldSCount, oldParentType, pos, label, token,
          initial, offset, ch, posAfterColon,
          start = state.bMarks[startLine] + state.tShift[startLine],
          max = state.eMarks[startLine];

      // line should be at least 5 chars - "[^x]:"
      if (start + 4 > max) { return false; }

      if (state.src.charCodeAt(start) !== 0x5B/* [ */) { return false; }
      if (state.src.charCodeAt(start + 1) !== 0x5E/* ^ */) { return false; }

      for (pos = start + 2; pos < max; pos++) {
        if (state.src.charCodeAt(pos) === 0x20) { return false; }
        if (state.src.charCodeAt(pos) === 0x5D /* ] */) {
          break;
        }
      }

      if (pos === start + 2) { return false; } // no empty footnote labels
      if (pos + 1 >= max || state.src.charCodeAt(++pos) !== 0x3A /* : */) { return false; }
      if (silent) { return true; }
      pos++;

      if (!state.env.footnotes) { state.env.footnotes = {}; }
      if (!state.env.footnotes.refs) { state.env.footnotes.refs = {}; }
      label = state.src.slice(start + 2, pos - 2);
      state.env.footnotes.refs[':' + label] = -1;

      token       = new state.Token('footnote_reference_open', '', 1);
      token.meta  = { label: label };
      token.level = state.level++;
      state.tokens.push(token);

      oldBMark = state.bMarks[startLine];
      oldTShift = state.tShift[startLine];
      oldSCount = state.sCount[startLine];
      oldParentType = state.parentType;

      posAfterColon = pos;
      initial = offset = state.sCount[startLine] + pos - (state.bMarks[startLine] + state.tShift[startLine]);

      while (pos < max) {
        ch = state.src.charCodeAt(pos);

        if (isSpace(ch)) {
          if (ch === 0x09) {
            offset += 4 - offset % 4;
          } else {
            offset++;
          }
        } else {
          break;
        }

        pos++;
      }

      state.tShift[startLine] = pos - posAfterColon;
      state.sCount[startLine] = offset - initial;

      state.bMarks[startLine] = posAfterColon;
      state.blkIndent += 4;
      state.parentType = 'footnote';

      if (state.sCount[startLine] < state.blkIndent) {
        state.sCount[startLine] += state.blkIndent;
      }

      state.md.block.tokenize(state, startLine, endLine, true);

      state.parentType = oldParentType;
      state.blkIndent -= 4;
      state.tShift[startLine] = oldTShift;
      state.sCount[startLine] = oldSCount;
      state.bMarks[startLine] = oldBMark;

      token       = new state.Token('footnote_reference_close', '', -1);
      token.level = --state.level;
      state.tokens.push(token);

      return true;
    }

    // Process inline footnotes (^[...])
    function footnote_inline(state, silent) {
      var labelStart,
          labelEnd,
          footnoteId,
          token,
          tokens,
          max = state.posMax,
          start = state.pos;

      if (start + 2 >= max) { return false; }
      if (state.src.charCodeAt(start) !== 0x5E/* ^ */) { return false; }
      if (state.src.charCodeAt(start + 1) !== 0x5B/* [ */) { return false; }

      labelStart = start + 2;
      labelEnd = parseLinkLabel(state, start + 1);

      // parser failed to find ']', so it's not a valid note
      if (labelEnd < 0) { return false; }

      // We found the end of the link, and know for a fact it's a valid link;
      // so all that's left to do is to call tokenizer.
      //
      if (!silent) {
        if (!state.env.footnotes) { state.env.footnotes = {}; }
        if (!state.env.footnotes.list) { state.env.footnotes.list = []; }
        footnoteId = state.env.footnotes.list.length;

        state.md.inline.parse(
          state.src.slice(labelStart, labelEnd),
          state.md,
          state.env,
          tokens = []
        );

        token      = state.push('footnote_ref', '', 0);
        token.meta = { id: footnoteId };

        state.env.footnotes.list[footnoteId] = {
          content: state.src.slice(labelStart, labelEnd),
          tokens: tokens
        };
      }

      state.pos = labelEnd + 1;
      state.posMax = max;
      return true;
    }

    // Process footnote references ([^...])
    function footnote_ref(state, silent) {
      var label,
          pos,
          footnoteId,
          footnoteSubId,
          token,
          max = state.posMax,
          start = state.pos;

      // should be at least 4 chars - "[^x]"
      if (start + 3 > max) { return false; }

      if (!state.env.footnotes || !state.env.footnotes.refs) { return false; }
      if (state.src.charCodeAt(start) !== 0x5B/* [ */) { return false; }
      if (state.src.charCodeAt(start + 1) !== 0x5E/* ^ */) { return false; }

      for (pos = start + 2; pos < max; pos++) {
        if (state.src.charCodeAt(pos) === 0x20) { return false; }
        if (state.src.charCodeAt(pos) === 0x0A) { return false; }
        if (state.src.charCodeAt(pos) === 0x5D /* ] */) {
          break;
        }
      }

      if (pos === start + 2) { return false; } // no empty footnote labels
      if (pos >= max) { return false; }
      pos++;

      label = state.src.slice(start + 2, pos - 1);
      if (typeof state.env.footnotes.refs[':' + label] === 'undefined') { return false; }

      if (!silent) {
        if (!state.env.footnotes.list) { state.env.footnotes.list = []; }

        if (state.env.footnotes.refs[':' + label] < 0) {
          footnoteId = state.env.footnotes.list.length;
          state.env.footnotes.list[footnoteId] = { label: label, count: 0 };
          state.env.footnotes.refs[':' + label] = footnoteId;
        } else {
          footnoteId = state.env.footnotes.refs[':' + label];
        }

        footnoteSubId = state.env.footnotes.list[footnoteId].count;
        state.env.footnotes.list[footnoteId].count++;

        token      = state.push('footnote_ref', '', 0);
        token.meta = { id: footnoteId, subId: footnoteSubId, label: label };
      }

      state.pos = pos;
      state.posMax = max;
      return true;
    }

    // Glue footnote tokens to end of token stream
    function footnote_tail(state) {
      var i, l, j, t, lastParagraph, list, token, tokens, current, currentLabel,
          insideRef = false,
          refTokens = {};

      if (!state.env.footnotes) { return; }

      state.tokens = state.tokens.filter(function (tok) {
        if (tok.type === 'footnote_reference_open') {
          insideRef = true;
          current = [];
          currentLabel = tok.meta.label;
          return false;
        }
        if (tok.type === 'footnote_reference_close') {
          insideRef = false;
          // prepend ':' to avoid conflict with Object.prototype members
          refTokens[':' + currentLabel] = current;
          return false;
        }
        if (insideRef) { current.push(tok); }
        return !insideRef;
      });

      if (!state.env.footnotes.list) { return; }
      list = state.env.footnotes.list;

      token = new state.Token('footnote_block_open', '', 1);
      state.tokens.push(token);

      for (i = 0, l = list.length; i < l; i++) {
        token      = new state.Token('footnote_open', '', 1);
        token.meta = { id: i, label: list[i].label };
        state.tokens.push(token);

        if (list[i].tokens) {
          tokens = [];

          token          = new state.Token('paragraph_open', 'p', 1);
          token.block    = true;
          tokens.push(token);

          token          = new state.Token('inline', '', 0);
          token.children = list[i].tokens;
          token.content  = list[i].content;
          tokens.push(token);

          token          = new state.Token('paragraph_close', 'p', -1);
          token.block    = true;
          tokens.push(token);

        } else if (list[i].label) {
          tokens = refTokens[':' + list[i].label];
        }

        if (tokens) state.tokens = state.tokens.concat(tokens);
        if (state.tokens[state.tokens.length - 1].type === 'paragraph_close') {
          lastParagraph = state.tokens.pop();
        } else {
          lastParagraph = null;
        }

        t = list[i].count > 0 ? list[i].count : 1;
        for (j = 0; j < t; j++) {
          token      = new state.Token('footnote_anchor', '', 0);
          token.meta = { id: i, subId: j, label: list[i].label };
          state.tokens.push(token);
        }

        if (lastParagraph) {
          state.tokens.push(lastParagraph);
        }

        token = new state.Token('footnote_close', '', -1);
        state.tokens.push(token);
      }

      token = new state.Token('footnote_block_close', '', -1);
      state.tokens.push(token);
    }

    md.block.ruler.before('reference', 'footnote_def', footnote_def, { alt: [ 'paragraph', 'reference' ] });
    md.inline.ruler.after('image', 'footnote_inline', footnote_inline);
    md.inline.ruler.after('footnote_inline', 'footnote_ref', footnote_ref);
    md.core.ruler.after('inline', 'footnote_tail', footnote_tail);
  };

  var markdownItDeflist = function deflist_plugin(md) {
    var isSpace = md.utils.isSpace;

    // Search `[:~][\n ]`, returns next pos after marker on success
    // or -1 on fail.
    function skipMarker(state, line) {
      var pos, marker,
          start = state.bMarks[line] + state.tShift[line],
          max = state.eMarks[line];

      if (start >= max) { return -1; }

      // Check bullet
      marker = state.src.charCodeAt(start++);
      if (marker !== 0x7E/* ~ */ && marker !== 0x3A/* : */) { return -1; }

      pos = state.skipSpaces(start);

      // require space after ":"
      if (start === pos) { return -1; }

      // no empty definitions, e.g. "  : "
      if (pos >= max) { return -1; }

      return start;
    }

    function markTightParagraphs(state, idx) {
      var i, l,
          level = state.level + 2;

      for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
        if (state.tokens[i].level === level && state.tokens[i].type === 'paragraph_open') {
          state.tokens[i + 2].hidden = true;
          state.tokens[i].hidden = true;
          i += 2;
        }
      }
    }

    function deflist(state, startLine, endLine, silent) {
      var ch,
          contentStart,
          ddLine,
          dtLine,
          itemLines,
          listLines,
          listTokIdx,
          max,
          nextLine,
          offset,
          oldDDIndent,
          oldIndent,
          oldParentType,
          oldSCount,
          oldTShift,
          oldTight,
          pos,
          prevEmptyEnd,
          tight,
          token;

      if (silent) {
        // quirk: validation mode validates a dd block only, not a whole deflist
        if (state.ddIndent < 0) { return false; }
        return skipMarker(state, startLine) >= 0;
      }

      nextLine = startLine + 1;
      if (nextLine >= endLine) { return false; }

      if (state.isEmpty(nextLine)) {
        nextLine++;
        if (nextLine >= endLine) { return false; }
      }

      if (state.sCount[nextLine] < state.blkIndent) { return false; }
      contentStart = skipMarker(state, nextLine);
      if (contentStart < 0) { return false; }

      // Start list
      listTokIdx = state.tokens.length;
      tight = true;

      token     = state.push('dl_open', 'dl', 1);
      token.map = listLines = [ startLine, 0 ];

      //
      // Iterate list items
      //

      dtLine = startLine;
      ddLine = nextLine;

      // One definition list can contain multiple DTs,
      // and one DT can be followed by multiple DDs.
      //
      // Thus, there is two loops here, and label is
      // needed to break out of the second one
      //
      /*eslint no-labels:0,block-scoped-var:0*/
      OUTER:
      for (;;) {
        prevEmptyEnd = false;

        token          = state.push('dt_open', 'dt', 1);
        token.map      = [ dtLine, dtLine ];

        token          = state.push('inline', '', 0);
        token.map      = [ dtLine, dtLine ];
        token.content  = state.getLines(dtLine, dtLine + 1, state.blkIndent, false).trim();
        token.children = [];

        token          = state.push('dt_close', 'dt', -1);

        for (;;) {
          token     = state.push('dd_open', 'dd', 1);
          token.map = itemLines = [ nextLine, 0 ];

          pos = contentStart;
          max = state.eMarks[ddLine];
          offset = state.sCount[ddLine] + contentStart - (state.bMarks[ddLine] + state.tShift[ddLine]);

          while (pos < max) {
            ch = state.src.charCodeAt(pos);

            if (isSpace(ch)) {
              if (ch === 0x09) {
                offset += 4 - offset % 4;
              } else {
                offset++;
              }
            } else {
              break;
            }

            pos++;
          }

          contentStart = pos;

          oldTight = state.tight;
          oldDDIndent = state.ddIndent;
          oldIndent = state.blkIndent;
          oldTShift = state.tShift[ddLine];
          oldSCount = state.sCount[ddLine];
          oldParentType = state.parentType;
          state.blkIndent = state.ddIndent = state.sCount[ddLine] + 2;
          state.tShift[ddLine] = contentStart - state.bMarks[ddLine];
          state.sCount[ddLine] = offset;
          state.tight = true;
          state.parentType = 'deflist';

          state.md.block.tokenize(state, ddLine, endLine, true);

          // If any of list item is tight, mark list as tight
          if (!state.tight || prevEmptyEnd) {
            tight = false;
          }
          // Item become loose if finish with empty line,
          // but we should filter last element, because it means list finish
          prevEmptyEnd = (state.line - ddLine) > 1 && state.isEmpty(state.line - 1);

          state.tShift[ddLine] = oldTShift;
          state.sCount[ddLine] = oldSCount;
          state.tight = oldTight;
          state.parentType = oldParentType;
          state.blkIndent = oldIndent;
          state.ddIndent = oldDDIndent;

          token = state.push('dd_close', 'dd', -1);

          itemLines[1] = nextLine = state.line;

          if (nextLine >= endLine) { break OUTER; }

          if (state.sCount[nextLine] < state.blkIndent) { break OUTER; }
          contentStart = skipMarker(state, nextLine);
          if (contentStart < 0) { break; }

          ddLine = nextLine;

          // go to the next loop iteration:
          // insert DD tag and repeat checking
        }

        if (nextLine >= endLine) { break; }
        dtLine = nextLine;

        if (state.isEmpty(dtLine)) { break; }
        if (state.sCount[dtLine] < state.blkIndent) { break; }

        ddLine = dtLine + 1;
        if (ddLine >= endLine) { break; }
        if (state.isEmpty(ddLine)) { ddLine++; }
        if (ddLine >= endLine) { break; }

        if (state.sCount[ddLine] < state.blkIndent) { break; }
        contentStart = skipMarker(state, ddLine);
        if (contentStart < 0) { break; }

        // go to the next loop iteration:
        // insert DT and DD tags and repeat checking
      }

      // Finilize list
      token = state.push('dl_close', 'dl', -1);

      listLines[1] = nextLine;

      state.line = nextLine;

      // mark paragraphs tight if needed
      if (tight) {
        markTightParagraphs(state, listTokIdx);
      }

      return true;
    }


    md.block.ruler.before('paragraph', 'deflist', deflist, { alt: [ 'paragraph', 'reference', 'blockquote' ] });
  };

  var markdownItAbbr = function sub_plugin(md) {
    var escapeRE        = md.utils.escapeRE,
        arrayReplaceAt  = md.utils.arrayReplaceAt;

    // ASCII characters in Cc, Sc, Sm, Sk categories we should terminate on;
    // you can check character classes here:
    // http://www.unicode.org/Public/UNIDATA/UnicodeData.txt
    var OTHER_CHARS      = ' \r\n$+<=>^`|~';

    var UNICODE_PUNCT_RE = md.utils.lib.ucmicro.P.source;
    var UNICODE_SPACE_RE = md.utils.lib.ucmicro.Z.source;


    function abbr_def(state, startLine, endLine, silent) {
      var label, title, ch, labelStart, labelEnd,
          pos = state.bMarks[startLine] + state.tShift[startLine],
          max = state.eMarks[startLine];

      if (pos + 2 >= max) { return false; }

      if (state.src.charCodeAt(pos++) !== 0x2A/* * */) { return false; }
      if (state.src.charCodeAt(pos++) !== 0x5B/* [ */) { return false; }

      labelStart = pos;

      for (; pos < max; pos++) {
        ch = state.src.charCodeAt(pos);
        if (ch === 0x5B /* [ */) {
          return false;
        } else if (ch === 0x5D /* ] */) {
          labelEnd = pos;
          break;
        } else if (ch === 0x5C /* \ */) {
          pos++;
        }
      }

      if (labelEnd < 0 || state.src.charCodeAt(labelEnd + 1) !== 0x3A/* : */) {
        return false;
      }

      if (silent) { return true; }

      label = state.src.slice(labelStart, labelEnd).replace(/\\(.)/g, '$1');
      title = state.src.slice(labelEnd + 2, max).trim();
      if (label.length === 0) { return false; }
      if (title.length === 0) { return false; }
      if (!state.env.abbreviations) { state.env.abbreviations = {}; }
      // prepend ':' to avoid conflict with Object.prototype members
      if (typeof state.env.abbreviations[':' + label] === 'undefined') {
        state.env.abbreviations[':' + label] = title;
      }

      state.line = startLine + 1;
      return true;
    }


    function abbr_replace(state) {
      var i, j, l, tokens, token, text, nodes, pos, reg, m, regText, regSimple,
          currentToken,
          blockTokens = state.tokens;

      if (!state.env.abbreviations) { return; }

      regSimple = new RegExp('(?:' +
        Object.keys(state.env.abbreviations).map(function (x) {
          return x.substr(1);
        }).sort(function (a, b) {
          return b.length - a.length;
        }).map(escapeRE).join('|') +
      ')');

      regText = '(^|' + UNICODE_PUNCT_RE + '|' + UNICODE_SPACE_RE +
                      '|[' + OTHER_CHARS.split('').map(escapeRE).join('') + '])'
              + '(' + Object.keys(state.env.abbreviations).map(function (x) {
                        return x.substr(1);
                      }).sort(function (a, b) {
                        return b.length - a.length;
                      }).map(escapeRE).join('|') + ')'
              + '($|' + UNICODE_PUNCT_RE + '|' + UNICODE_SPACE_RE +
                      '|[' + OTHER_CHARS.split('').map(escapeRE).join('') + '])';

      reg = new RegExp(regText, 'g');

      for (j = 0, l = blockTokens.length; j < l; j++) {
        if (blockTokens[j].type !== 'inline') { continue; }
        tokens = blockTokens[j].children;

        // We scan from the end, to keep position when new tags added.
        for (i = tokens.length - 1; i >= 0; i--) {
          currentToken = tokens[i];
          if (currentToken.type !== 'text') { continue; }

          pos = 0;
          text = currentToken.content;
          reg.lastIndex = 0;
          nodes = [];

          // fast regexp run to determine whether there are any abbreviated words
          // in the current token
          if (!regSimple.test(text)) { continue; }

          while ((m = reg.exec(text))) {
            if (m.index > 0 || m[1].length > 0) {
              token         = new state.Token('text', '', 0);
              token.content = text.slice(pos, m.index + m[1].length);
              nodes.push(token);
            }

            token         = new state.Token('abbr_open', 'abbr', 1);
            token.attrs   = [ [ 'title', state.env.abbreviations[':' + m[2]] ] ];
            nodes.push(token);

            token         = new state.Token('text', '', 0);
            token.content = m[2];
            nodes.push(token);

            token         = new state.Token('abbr_close', 'abbr', -1);
            nodes.push(token);

            reg.lastIndex -= m[3].length;
            pos = reg.lastIndex;
          }

          if (!nodes.length) { continue; }

          if (pos < text.length) {
            token         = new state.Token('text', '', 0);
            token.content = text.slice(pos);
            nodes.push(token);
          }

          // replace current node
          blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes);
        }
      }
    }

    md.block.ruler.before('reference', 'abbr_def', abbr_def, { alt: [ 'paragraph', 'reference' ] });

    md.core.ruler.after('linkify', 'abbr_replace', abbr_replace);
  };

  var markdownItIns = function ins_plugin(md) {
    // Insert each marker as a separate text token, and add it to delimiter list
    //
    function tokenize(state, silent) {
      var i, scanned, token, len, ch,
          start = state.pos,
          marker = state.src.charCodeAt(start);

      if (silent) { return false; }

      if (marker !== 0x2B/* + */) { return false; }

      scanned = state.scanDelims(state.pos, true);
      len = scanned.length;
      ch = String.fromCharCode(marker);

      if (len < 2) { return false; }

      if (len % 2) {
        token         = state.push('text', '', 0);
        token.content = ch;
        len--;
      }

      for (i = 0; i < len; i += 2) {
        token         = state.push('text', '', 0);
        token.content = ch + ch;

        if (!scanned.can_open && !scanned.can_close) { continue; }

        state.delimiters.push({
          marker: marker,
          length: 0,     // disable "rule of 3" length checks meant for emphasis
          jump:   i / 2, // 1 delimiter = 2 characters
          token:  state.tokens.length - 1,
          end:    -1,
          open:   scanned.can_open,
          close:  scanned.can_close
        });
      }

      state.pos += scanned.length;

      return true;
    }


    // Walk through delimiter list and replace text tokens with tags
    //
    function postProcess(state, delimiters) {
      var i, j,
          startDelim,
          endDelim,
          token,
          loneMarkers = [],
          max = delimiters.length;

      for (i = 0; i < max; i++) {
        startDelim = delimiters[i];

        if (startDelim.marker !== 0x2B/* + */) {
          continue;
        }

        if (startDelim.end === -1) {
          continue;
        }

        endDelim = delimiters[startDelim.end];

        token         = state.tokens[startDelim.token];
        token.type    = 'ins_open';
        token.tag     = 'ins';
        token.nesting = 1;
        token.markup  = '++';
        token.content = '';

        token         = state.tokens[endDelim.token];
        token.type    = 'ins_close';
        token.tag     = 'ins';
        token.nesting = -1;
        token.markup  = '++';
        token.content = '';

        if (state.tokens[endDelim.token - 1].type === 'text' &&
            state.tokens[endDelim.token - 1].content === '+') {

          loneMarkers.push(endDelim.token - 1);
        }
      }

      // If a marker sequence has an odd number of characters, it's splitted
      // like this: `~~~~~` -> `~` + `~~` + `~~`, leaving one marker at the
      // start of the sequence.
      //
      // So, we have to move all those markers after subsequent s_close tags.
      //
      while (loneMarkers.length) {
        i = loneMarkers.pop();
        j = i + 1;

        while (j < state.tokens.length && state.tokens[j].type === 'ins_close') {
          j++;
        }

        j--;

        if (i !== j) {
          token = state.tokens[j];
          state.tokens[j] = state.tokens[i];
          state.tokens[i] = token;
        }
      }
    }

    md.inline.ruler.before('emphasis', 'ins', tokenize);
    md.inline.ruler2.before('emphasis', 'ins', function (state) {
      var curr,
          tokens_meta = state.tokens_meta,
          max = (state.tokens_meta || []).length;

      postProcess(state, state.delimiters);

      for (curr = 0; curr < max; curr++) {
        if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
          postProcess(state, tokens_meta[curr].delimiters);
        }
      }
    });
  };

  var markdownItMark = function ins_plugin(md) {
    // Insert each marker as a separate text token, and add it to delimiter list
    //
    function tokenize(state, silent) {
      var i, scanned, token, len, ch,
          start = state.pos,
          marker = state.src.charCodeAt(start);

      if (silent) { return false; }

      if (marker !== 0x3D/* = */) { return false; }

      scanned = state.scanDelims(state.pos, true);
      len = scanned.length;
      ch = String.fromCharCode(marker);

      if (len < 2) { return false; }

      if (len % 2) {
        token         = state.push('text', '', 0);
        token.content = ch;
        len--;
      }

      for (i = 0; i < len; i += 2) {
        token         = state.push('text', '', 0);
        token.content = ch + ch;

        if (!scanned.can_open && !scanned.can_close) { continue; }

        state.delimiters.push({
          marker: marker,
          length: 0,     // disable "rule of 3" length checks meant for emphasis
          jump:   i / 2, // 1 delimiter = 2 characters
          token:  state.tokens.length - 1,
          end:    -1,
          open:   scanned.can_open,
          close:  scanned.can_close
        });
      }

      state.pos += scanned.length;

      return true;
    }


    // Walk through delimiter list and replace text tokens with tags
    //
    function postProcess(state, delimiters) {
      var i, j,
          startDelim,
          endDelim,
          token,
          loneMarkers = [],
          max = delimiters.length;

      for (i = 0; i < max; i++) {
        startDelim = delimiters[i];

        if (startDelim.marker !== 0x3D/* = */) {
          continue;
        }

        if (startDelim.end === -1) {
          continue;
        }

        endDelim = delimiters[startDelim.end];

        token         = state.tokens[startDelim.token];
        token.type    = 'mark_open';
        token.tag     = 'mark';
        token.nesting = 1;
        token.markup  = '==';
        token.content = '';

        token         = state.tokens[endDelim.token];
        token.type    = 'mark_close';
        token.tag     = 'mark';
        token.nesting = -1;
        token.markup  = '==';
        token.content = '';

        if (state.tokens[endDelim.token - 1].type === 'text' &&
            state.tokens[endDelim.token - 1].content === '=') {

          loneMarkers.push(endDelim.token - 1);
        }
      }

      // If a marker sequence has an odd number of characters, it's splitted
      // like this: `~~~~~` -> `~` + `~~` + `~~`, leaving one marker at the
      // start of the sequence.
      //
      // So, we have to move all those markers after subsequent s_close tags.
      //
      while (loneMarkers.length) {
        i = loneMarkers.pop();
        j = i + 1;

        while (j < state.tokens.length && state.tokens[j].type === 'mark_close') {
          j++;
        }

        j--;

        if (i !== j) {
          token = state.tokens[j];
          state.tokens[j] = state.tokens[i];
          state.tokens[i] = token;
        }
      }
    }

    md.inline.ruler.before('emphasis', 'mark', tokenize);
    md.inline.ruler2.before('emphasis', 'mark', function (state) {
      var curr,
          tokens_meta = state.tokens_meta,
          max = (state.tokens_meta || []).length;

      postProcess(state, state.delimiters);

      for (curr = 0; curr < max; curr++) {
        if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
          postProcess(state, tokens_meta[curr].delimiters);
        }
      }
    });
  };

  // Markdown-it plugin to render GitHub-style task lists; see
  //
  // https://github.com/blog/1375-task-lists-in-gfm-issues-pulls-comments
  // https://github.com/blog/1825-task-lists-in-all-markdown-documents

  var disableCheckboxes = true;
  var useLabelWrapper = false;
  var useLabelAfter = false;

  var markdownItTaskLists = function(md, options) {
  	if (options) {
  		disableCheckboxes = !options.enabled;
  		useLabelWrapper = !!options.label;
  		useLabelAfter = !!options.labelAfter;
  	}

  	md.core.ruler.after('inline', 'github-task-lists', function(state) {
  		var tokens = state.tokens;
  		for (var i = 2; i < tokens.length; i++) {
  			if (isTodoItem(tokens, i)) {
  				todoify(tokens[i], state.Token);
  				attrSet(tokens[i-2], 'class', 'task-list-item' + (!disableCheckboxes ? ' enabled' : ''));
  				attrSet(tokens[parentToken(tokens, i-2)], 'class', 'contains-task-list');
  			}
  		}
  	});
  };

  function attrSet(token, name, value) {
  	var index = token.attrIndex(name);
  	var attr = [name, value];

  	if (index < 0) {
  		token.attrPush(attr);
  	} else {
  		token.attrs[index] = attr;
  	}
  }

  function parentToken(tokens, index) {
  	var targetLevel = tokens[index].level - 1;
  	for (var i = index - 1; i >= 0; i--) {
  		if (tokens[i].level === targetLevel) {
  			return i;
  		}
  	}
  	return -1;
  }

  function isTodoItem(tokens, index) {
  	return isInline(tokens[index]) &&
  	       isParagraph(tokens[index - 1]) &&
  	       isListItem(tokens[index - 2]) &&
  	       startsWithTodoMarkdown(tokens[index]);
  }

  function todoify(token, TokenConstructor) {
  	token.children.unshift(makeCheckbox(token, TokenConstructor));
  	token.children[1].content = token.children[1].content.slice(3);
  	token.content = token.content.slice(3);

  	if (useLabelWrapper) {
  		if (useLabelAfter) {
  			token.children.pop();

  			// Use large random number as id property of the checkbox.
  			var id = 'task-item-' + Math.ceil(Math.random() * (10000 * 1000) - 1000);
  			token.children[0].content = token.children[0].content.slice(0, -1) + ' id="' + id + '">';
  			token.children.push(afterLabel(token.content, id, TokenConstructor));
  		} else {
  			token.children.unshift(beginLabel(TokenConstructor));
  			token.children.push(endLabel(TokenConstructor));
  		}
  	}
  }

  function makeCheckbox(token, TokenConstructor) {
  	var checkbox = new TokenConstructor('html_inline', '', 0);
  	var disabledAttr = disableCheckboxes ? ' disabled="" ' : '';
  	if (token.content.indexOf('[ ] ') === 0) {
  		checkbox.content = '<input class="task-list-item-checkbox"' + disabledAttr + 'type="checkbox">';
  	} else if (token.content.indexOf('[x] ') === 0 || token.content.indexOf('[X] ') === 0) {
  		checkbox.content = '<input class="task-list-item-checkbox" checked=""' + disabledAttr + 'type="checkbox">';
  	}
  	return checkbox;
  }

  // these next two functions are kind of hacky; probably should really be a
  // true block-level token with .tag=='label'
  function beginLabel(TokenConstructor) {
  	var token = new TokenConstructor('html_inline', '', 0);
  	token.content = '<label>';
  	return token;
  }

  function endLabel(TokenConstructor) {
  	var token = new TokenConstructor('html_inline', '', 0);
  	token.content = '</label>';
  	return token;
  }

  function afterLabel(content, id, TokenConstructor) {
  	var token = new TokenConstructor('html_inline', '', 0);
  	token.content = '<label class="task-list-item-label" for="' + id + '">' + content + '</label>';
  	token.attrs = [{for: id}];
  	return token;
  }

  function isInline(token) { return token.type === 'inline'; }
  function isParagraph(token) { return token.type === 'paragraph_open'; }
  function isListItem(token) { return token.type === 'list_item_open'; }

  function startsWithTodoMarkdown(token) {
  	// leading whitespace in a list item is already trimmed off by markdown-it
  	return token.content.indexOf('[ ] ') === 0 || token.content.indexOf('[x] ') === 0 || token.content.indexOf('[X] ') === 0;
  }

  var markdownItImsize = {exports: {}};

  (function (module, exports) {
  (function webpackUniversalModuleDefinition(root, factory) {
  	module.exports = factory();
  })(commonjsGlobal, function() {
  return /******/ (function(modules) { // webpackBootstrap
  /******/ 	// The module cache
  /******/ 	var installedModules = {};

  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {

  /******/ 		// Check if module is in cache
  /******/ 		if(installedModules[moduleId])
  /******/ 			return installedModules[moduleId].exports;

  /******/ 		// Create a new module (and put it into the cache)
  /******/ 		var module = installedModules[moduleId] = {
  /******/ 			exports: {},
  /******/ 			id: moduleId,
  /******/ 			loaded: false
  /******/ 		};

  /******/ 		// Execute the module function
  /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

  /******/ 		// Flag the module as loaded
  /******/ 		module.loaded = true;

  /******/ 		// Return the exports of the module
  /******/ 		return module.exports;
  /******/ 	}


  /******/ 	// expose the modules object (__webpack_modules__)
  /******/ 	__webpack_require__.m = modules;

  /******/ 	// expose the module cache
  /******/ 	__webpack_require__.c = installedModules;

  /******/ 	// __webpack_public_path__
  /******/ 	__webpack_require__.p = "";

  /******/ 	// Load entry module and return exports
  /******/ 	return __webpack_require__(0);
  /******/ })
  /************************************************************************/
  /******/ ([
  /* 0 */
  /***/ function(module, exports, __webpack_require__) {

  	var sizeOf = __webpack_require__(2);

  	var parseImageSize = __webpack_require__(1);

  	function image_with_size(md, options) {
  	  return function(state, silent) {
  	    var attrs,
  	        code,
  	        label,
  	        labelEnd,
  	        labelStart,
  	        pos,
  	        ref,
  	        res,
  	        title,
  	        width = '',
  	        height = '',
  	        token,
  	        tokens,
  	        start,
  	        href = '',
  	        oldPos = state.pos,
  	        max = state.posMax;

  	    if (state.src.charCodeAt(state.pos) !== 0x21/* ! */) { return false; }
  	    if (state.src.charCodeAt(state.pos + 1) !== 0x5B/* [ */) { return false; }

  	    labelStart = state.pos + 2;
  	    labelEnd = md.helpers.parseLinkLabel(state, state.pos + 1, false);

  	    // parser failed to find ']', so it's not a valid link
  	    if (labelEnd < 0) { return false; }

  	    pos = labelEnd + 1;
  	    if (pos < max && state.src.charCodeAt(pos) === 0x28/* ( */) {

  	      //
  	      // Inline link
  	      //

  	      // [link](  <href>  "title"  )
  	      //        ^^ skipping these spaces
  	      pos++;
  	      for (; pos < max; pos++) {
  	        code = state.src.charCodeAt(pos);
  	        if (code !== 0x20 && code !== 0x0A) { break; }
  	      }
  	      if (pos >= max) { return false; }

  	      // [link](  <href>  "title"  )
  	      //          ^^^^^^ parsing link destination
  	      start = pos;
  	      res = md.helpers.parseLinkDestination(state.src, pos, state.posMax);
  	      if (res.ok) {
  	        href = state.md.normalizeLink(res.str);
  	        if (state.md.validateLink(href)) {
  	          pos = res.pos;
  	        } else {
  	          href = '';
  	        }
  	      }

  	      // [link](  <href>  "title"  )
  	      //                ^^ skipping these spaces
  	      start = pos;
  	      for (; pos < max; pos++) {
  	        code = state.src.charCodeAt(pos);
  	        if (code !== 0x20 && code !== 0x0A) { break; }
  	      }

  	      // [link](  <href>  "title"  )
  	      //                  ^^^^^^^ parsing link title
  	      res = md.helpers.parseLinkTitle(state.src, pos, state.posMax);
  	      if (pos < max && start !== pos && res.ok) {
  	        title = res.str;
  	        pos = res.pos;

  	        // [link](  <href>  "title"  )
  	        //                         ^^ skipping these spaces
  	        for (; pos < max; pos++) {
  	          code = state.src.charCodeAt(pos);
  	          if (code !== 0x20 && code !== 0x0A) { break; }
  	        }
  	      } else {
  	        title = '';
  	      }

  	      // [link](  <href>  "title" =WxH  )
  	      //                          ^^^^ parsing image size
  	      if (pos - 1 >= 0) {
  	        code = state.src.charCodeAt(pos - 1);

  	        // there must be at least one white spaces
  	        // between previous field and the size
  	        if (code === 0x20) {
  	          res = parseImageSize(state.src, pos, state.posMax);
  	          if (res.ok) {
  	            width = res.width;
  	            height = res.height;
  	            pos = res.pos;

  	            // [link](  <href>  "title" =WxH  )
  	            //                              ^^ skipping these spaces
  	            for (; pos < max; pos++) {
  	              code = state.src.charCodeAt(pos);
  	              if (code !== 0x20 && code !== 0x0A) { break; }
  	            }
  	          }
  	        }
  	      }

  	      if (pos >= max || state.src.charCodeAt(pos) !== 0x29/* ) */) {
  	        state.pos = oldPos;
  	        return false;
  	      }
  	      pos++;

  	    } else {
  	      //
  	      // Link reference
  	      //
  	      if (typeof state.env.references === 'undefined') { return false; }

  	      // [foo]  [bar]
  	      //      ^^ optional whitespace (can include newlines)
  	      for (; pos < max; pos++) {
  	        code = state.src.charCodeAt(pos);
  	        if (code !== 0x20 && code !== 0x0A) { break; }
  	      }

  	      if (pos < max && state.src.charCodeAt(pos) === 0x5B/* [ */) {
  	        start = pos + 1;
  	        pos = md.helpers.parseLinkLabel(state, pos);
  	        if (pos >= 0) {
  	          label = state.src.slice(start, pos++);
  	        } else {
  	          pos = labelEnd + 1;
  	        }
  	      } else {
  	        pos = labelEnd + 1;
  	      }

  	      // covers label === '' and label === undefined
  	      // (collapsed reference link and shortcut reference link respectively)
  	      if (!label) { label = state.src.slice(labelStart, labelEnd); }

  	      ref = state.env.references[md.utils.normalizeReference(label)];
  	      if (!ref) {
  	        state.pos = oldPos;
  	        return false;
  	      }
  	      href = ref.href;
  	      title = ref.title;
  	    }

  	    //
  	    // We found the end of the link, and know for a fact it's a valid link;
  	    // so all that's left to do is to call tokenizer.
  	    //
  	    if (!silent) {
  	      state.pos = labelStart;
  	      state.posMax = labelEnd;

  	      var newState = new state.md.inline.State(
  	        state.src.slice(labelStart, labelEnd),
  	        state.md,
  	        state.env,
  	        tokens = []
  	      );
  	      newState.md.inline.tokenize(newState);

  	      // if 'autofill' option is specified
  	      // and width/height are both blank,
  	      // they are filled automatically
  	      if (options) {
  	        if (options.autofill && width === '' && height === '') {
  	          try {
  	            var dimensions = sizeOf(href);
  	            width = dimensions.width;
  	            height = dimensions.height;
  	          } catch (e) { }
  	        }
  	      }

  	      token          = state.push('image', 'img', 0);
  	      token.attrs    = attrs = [ [ 'src', href ],
  	                                 [ 'alt', '' ] ];
  	      token.children = tokens;
  	      if (title) {
  	        attrs.push([ 'title', title ]);
  	      }

  	      if (width !== '') {
  	        attrs.push([ 'width', width ]);
  	      }

  	      if (height !== '') {
  	        attrs.push([ 'height', height ]);
  	      }
  	    }

  	    state.pos = pos;
  	    state.posMax = max;
  	    return true;
  	  };
  	}

  	module.exports = function imsize_plugin(md, options) {
  	  md.inline.ruler.before('emphasis', 'image', image_with_size(md, options));
  	};


  /***/ },
  /* 1 */
  /***/ function(module, exports, __webpack_require__) {

  	function parseNextNumber(str, pos, max) {
  	  var code,
  	  start = pos,
  	  result = {
  	    ok: false,
  	    pos: pos,
  	    value: ''
  	  };

  	  code = str.charCodeAt(pos);

  	  while (pos < max && (code >= 0x30 /* 0 */ && code <= 0x39 /* 9 */) || code === 0x25 /* % */) {
  	    code = str.charCodeAt(++pos);
  	  }

  	  result.ok = true;
  	  result.pos = pos;
  	  result.value = str.slice(start, pos);

  	  return result;
  	}

  	module.exports = function parseImageSize(str, pos, max) {
  	  var code,
  	  result = {
  	    ok: false,
  	    pos: 0,
  	    width: '',
  	    height: ''
  	  };

  	  if (pos >= max) { return result; }

  	  code = str.charCodeAt(pos);

  	  if (code !== 0x3d /* = */) { return result; }

  	  pos++;

  	  // size must follow = without any white spaces as follows
  	  // (1) =300x200
  	  // (2) =300x
  	  // (3) =x200
  	  code = str.charCodeAt(pos);
  	  if (code !== 0x78 /* x */ && (code < 0x30 || code  > 0x39) /* [0-9] */) {
  	    return result;
  	  }

  	  // parse width
  	  var resultW = parseNextNumber(str, pos, max);
  	  pos = resultW.pos;

  	  // next charactor must be 'x'
  	  code = str.charCodeAt(pos);
  	  if (code !== 0x78 /* x */) { return result; }

  	  pos++;

  	  // parse height
  	  var resultH = parseNextNumber(str, pos, max);
  	  pos = resultH.pos;

  	  result.width = resultW.value;
  	  result.height = resultH.value;
  	  result.pos = pos;
  	  result.ok = true;
  	  return result;
  	};


  /***/ },
  /* 2 */
  /***/ function(module, exports, __webpack_require__) {

  	/* WEBPACK VAR INJECTION */(function(Buffer) {
  	var fs   = __webpack_require__(16);
  	var path = __webpack_require__(6);

  	var detector = __webpack_require__(3);
  	var handlers = {};
  	var types = __webpack_require__(5);

  	types.forEach(function(type) {
  	  handlers[type] = __webpack_require__(4)("./" + type);
  	});

  	var MaxBufferSize = 128 * 1024;

  	function lookup(buffer, filepath) {
  	  var type = detector(buffer, filepath);

  	  if (type in handlers) {
  	    var size = handlers[type].calculate(buffer, filepath);
  	    if (size !== false) {
  	      size.type = type;
  	      return size;
  	    }
  	  }

  	  throw new TypeError('Unsupported file type');
  	}

  	function asyncFileToBuffer(filepath, callback) {
  	  fs.open(filepath, 'r', function(err0, descriptor) {
  	    if (err0) {
  	      return callback(err0);
  	    }

  	    var size = fs.fstatSync(descriptor).size;
  	    var bufferSize = Math.min(size, MaxBufferSize);
  	    var buffer = new Buffer(bufferSize);
  	    fs.read(descriptor, buffer, 0, bufferSize, 0, function(err1) {
  	      if (err1) {
  	        return callback(err1);
  	      }

  	      fs.close(descriptor, function(err2) {
  	        callback(err2, buffer);
  	      });
  	    });
  	  });
  	}

  	function syncFileToBuffer(filepath) {
  	  var descriptor = fs.openSync(filepath, 'r');
  	  var size = fs.fstatSync(descriptor).size;
  	  var bufferSize = Math.min(size, MaxBufferSize);
  	  var buffer = new Buffer(bufferSize);
  	  fs.readSync(descriptor, buffer, 0, bufferSize, 0);
  	  fs.closeSync(descriptor);
  	  return buffer;
  	}

  	/**
  	 * Returns the dimensions of the image file
  	 * @param[in] input: input image path
  	 * @param[in] callback(option): if specified, gets size async.
  	 */
  	module.exports = function(input, callback) {
  	  if (typeof input !== 'string') {
  	    throw new TypeError('Input must be file name');
  	  }

  	  var filepath = path.resolve(input);

  	  if (typeof callback === 'function') {
  	    asyncFileToBuffer(filepath, function(err, buffer) {
  	      if (err) {
  	        return callback(err);
  	      }

  	      var dimensions;
  	      try {
  	        dimensions = lookup(buffer, filepath);
  	      } catch (e) {
  	        err = e;
  	      }
  	      callback(err, dimensions);
  	    });
  	  } else {
  	    var buffer = syncFileToBuffer(filepath);
  	    return lookup(buffer, filepath);
  	  }
  	};

  	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7).Buffer));

  /***/ },
  /* 3 */
  /***/ function(module, exports, __webpack_require__) {

  	var typeMap = {};
  	var types = __webpack_require__(5);

  	types.forEach(function(type) {
  	  typeMap[type] = __webpack_require__(4)("./" + type).detect;
  	});

  	module.exports = function(buffer, filepath) {
  	  var type, result;
  	  for (type in typeMap) {
  	    if (type in typeMap) {
  	      result = typeMap[type](buffer, filepath);
  	      if (result) {
  	        return type;
  	      }
  	    }
  	  }
  	  throw new TypeError('Unsupported type');
  	};


  /***/ },
  /* 4 */
  /***/ function(module, exports, __webpack_require__) {

  	var map = {
  		"./bmp": 8,
  		"./bmp.js": 8,
  		"./gif": 9,
  		"./gif.js": 9,
  		"./jpg": 10,
  		"./jpg.js": 10,
  		"./png": 11,
  		"./png.js": 11,
  		"./psd": 12,
  		"./psd.js": 12,
  		"./svg": 13,
  		"./svg.js": 13,
  		"./tiff": 14,
  		"./tiff.js": 14,
  		"./webp": 15,
  		"./webp.js": 15
  	};
  	function webpackContext(req) {
  		return __webpack_require__(webpackContextResolve(req));
  	}	function webpackContextResolve(req) {
  		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
  	}	webpackContext.keys = function webpackContextKeys() {
  		return Object.keys(map);
  	};
  	webpackContext.resolve = webpackContextResolve;
  	module.exports = webpackContext;
  	webpackContext.id = 4;


  /***/ },
  /* 5 */
  /***/ function(module, exports, __webpack_require__) {

  	module.exports = [
  	  'bmp',
  	  'gif',
  	  'jpg',
  	  'png',
  	  'tiff',
  	];


  /***/ },
  /* 6 */
  /***/ function(module, exports, __webpack_require__) {

  	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
  	//
  	// Permission is hereby granted, free of charge, to any person obtaining a
  	// copy of this software and associated documentation files (the
  	// "Software"), to deal in the Software without restriction, including
  	// without limitation the rights to use, copy, modify, merge, publish,
  	// distribute, sublicense, and/or sell copies of the Software, and to permit
  	// persons to whom the Software is furnished to do so, subject to the
  	// following conditions:
  	//
  	// The above copyright notice and this permission notice shall be included
  	// in all copies or substantial portions of the Software.
  	//
  	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  	// USE OR OTHER DEALINGS IN THE SOFTWARE.

  	// resolves . and .. elements in a path array with directory names there
  	// must be no slashes, empty elements, or device names (c:\) in the array
  	// (so also no leading and trailing slashes - it does not distinguish
  	// relative and absolute paths)
  	function normalizeArray(parts, allowAboveRoot) {
  	  // if the path tries to go above the root, `up` ends up > 0
  	  var up = 0;
  	  for (var i = parts.length - 1; i >= 0; i--) {
  	    var last = parts[i];
  	    if (last === '.') {
  	      parts.splice(i, 1);
  	    } else if (last === '..') {
  	      parts.splice(i, 1);
  	      up++;
  	    } else if (up) {
  	      parts.splice(i, 1);
  	      up--;
  	    }
  	  }

  	  // if the path is allowed to go above the root, restore leading ..s
  	  if (allowAboveRoot) {
  	    for (; up--; up) {
  	      parts.unshift('..');
  	    }
  	  }

  	  return parts;
  	}

  	// Split a filename into [root, dir, basename, ext], unix version
  	// 'root' is just a slash, or nothing.
  	var splitPathRe =
  	    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
  	var splitPath = function(filename) {
  	  return splitPathRe.exec(filename).slice(1);
  	};

  	// path.resolve([from ...], to)
  	// posix version
  	exports.resolve = function() {
  	  var resolvedPath = '',
  	      resolvedAbsolute = false;

  	  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
  	    var path = (i >= 0) ? arguments[i] : process.cwd();

  	    // Skip empty and invalid entries
  	    if (typeof path !== 'string') {
  	      throw new TypeError('Arguments to path.resolve must be strings');
  	    } else if (!path) {
  	      continue;
  	    }

  	    resolvedPath = path + '/' + resolvedPath;
  	    resolvedAbsolute = path.charAt(0) === '/';
  	  }

  	  // At this point the path should be resolved to a full absolute path, but
  	  // handle relative paths to be safe (might happen when process.cwd() fails)

  	  // Normalize the path
  	  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
  	    return !!p;
  	  }), !resolvedAbsolute).join('/');

  	  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
  	};

  	// path.normalize(path)
  	// posix version
  	exports.normalize = function(path) {
  	  var isAbsolute = exports.isAbsolute(path),
  	      trailingSlash = substr(path, -1) === '/';

  	  // Normalize the path
  	  path = normalizeArray(filter(path.split('/'), function(p) {
  	    return !!p;
  	  }), !isAbsolute).join('/');

  	  if (!path && !isAbsolute) {
  	    path = '.';
  	  }
  	  if (path && trailingSlash) {
  	    path += '/';
  	  }

  	  return (isAbsolute ? '/' : '') + path;
  	};

  	// posix version
  	exports.isAbsolute = function(path) {
  	  return path.charAt(0) === '/';
  	};

  	// posix version
  	exports.join = function() {
  	  var paths = Array.prototype.slice.call(arguments, 0);
  	  return exports.normalize(filter(paths, function(p, index) {
  	    if (typeof p !== 'string') {
  	      throw new TypeError('Arguments to path.join must be strings');
  	    }
  	    return p;
  	  }).join('/'));
  	};


  	// path.relative(from, to)
  	// posix version
  	exports.relative = function(from, to) {
  	  from = exports.resolve(from).substr(1);
  	  to = exports.resolve(to).substr(1);

  	  function trim(arr) {
  	    var start = 0;
  	    for (; start < arr.length; start++) {
  	      if (arr[start] !== '') break;
  	    }

  	    var end = arr.length - 1;
  	    for (; end >= 0; end--) {
  	      if (arr[end] !== '') break;
  	    }

  	    if (start > end) return [];
  	    return arr.slice(start, end - start + 1);
  	  }

  	  var fromParts = trim(from.split('/'));
  	  var toParts = trim(to.split('/'));

  	  var length = Math.min(fromParts.length, toParts.length);
  	  var samePartsLength = length;
  	  for (var i = 0; i < length; i++) {
  	    if (fromParts[i] !== toParts[i]) {
  	      samePartsLength = i;
  	      break;
  	    }
  	  }

  	  var outputParts = [];
  	  for (var i = samePartsLength; i < fromParts.length; i++) {
  	    outputParts.push('..');
  	  }

  	  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  	  return outputParts.join('/');
  	};

  	exports.sep = '/';
  	exports.delimiter = ':';

  	exports.dirname = function(path) {
  	  var result = splitPath(path),
  	      root = result[0],
  	      dir = result[1];

  	  if (!root && !dir) {
  	    // No dirname whatsoever
  	    return '.';
  	  }

  	  if (dir) {
  	    // It has a dirname, strip trailing slash
  	    dir = dir.substr(0, dir.length - 1);
  	  }

  	  return root + dir;
  	};


  	exports.basename = function(path, ext) {
  	  var f = splitPath(path)[2];
  	  // TODO: make this comparison case-insensitive on windows?
  	  if (ext && f.substr(-1 * ext.length) === ext) {
  	    f = f.substr(0, f.length - ext.length);
  	  }
  	  return f;
  	};


  	exports.extname = function(path) {
  	  return splitPath(path)[3];
  	};

  	function filter (xs, f) {
  	    if (xs.filter) return xs.filter(f);
  	    var res = [];
  	    for (var i = 0; i < xs.length; i++) {
  	        if (f(xs[i], i, xs)) res.push(xs[i]);
  	    }
  	    return res;
  	}

  	// String.prototype.substr - negative index don't work in IE8
  	var substr = 'ab'.substr(-1) === 'b'
  	    ? function (str, start, len) { return str.substr(start, len) }
  	    : function (str, start, len) {
  	        if (start < 0) start = str.length + start;
  	        return str.substr(start, len);
  	    }
  	;

  	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)));

  /***/ },
  /* 7 */
  /***/ function(module, exports, __webpack_require__) {

  	/* WEBPACK VAR INJECTION */(function(Buffer) {/*!
  	 * The buffer module from node.js, for the browser.
  	 *
  	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
  	 * @license  MIT
  	 */

  	var base64 = __webpack_require__(21);
  	var ieee754 = __webpack_require__(19);
  	var isArray = __webpack_require__(20);

  	exports.Buffer = Buffer;
  	exports.SlowBuffer = SlowBuffer;
  	exports.INSPECT_MAX_BYTES = 50;
  	Buffer.poolSize = 8192; // not used by this implementation

  	var kMaxLength = 0x3fffffff;
  	var rootParent = {};

  	/**
  	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
  	 *   === true    Use Uint8Array implementation (fastest)
  	 *   === false   Use Object implementation (most compatible, even IE6)
  	 *
  	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
  	 * Opera 11.6+, iOS 4.2+.
  	 *
  	 * Note:
  	 *
  	 * - Implementation must support adding new properties to `Uint8Array` instances.
  	 *   Firefox 4-29 lacked support, fixed in Firefox 30+.
  	 *   See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
  	 *
  	 *  - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
  	 *
  	 *  - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
  	 *    incorrect length in some situations.
  	 *
  	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they will
  	 * get the Object implementation, which is slower but will work correctly.
  	 */
  	Buffer.TYPED_ARRAY_SUPPORT = (function () {
  	  try {
  	    var buf = new ArrayBuffer(0);
  	    var arr = new Uint8Array(buf);
  	    arr.foo = function () { return 42 };
  	    return arr.foo() === 42 && // typed array instances can be augmented
  	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
  	        new Uint8Array(1).subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  	  } catch (e) {
  	    return false
  	  }
  	})();

  	/**
  	 * Class: Buffer
  	 * =============
  	 *
  	 * The Buffer constructor returns instances of `Uint8Array` that are augmented
  	 * with function properties for all the node `Buffer` API functions. We use
  	 * `Uint8Array` so that square bracket notation works as expected -- it returns
  	 * a single octet.
  	 *
  	 * By augmenting the instances, we can avoid modifying the `Uint8Array`
  	 * prototype.
  	 */
  	function Buffer (subject, encoding) {
  	  var self = this;
  	  if (!(self instanceof Buffer)) return new Buffer(subject, encoding)

  	  var type = typeof subject;
  	  var length;

  	  if (type === 'number') {
  	    length = +subject;
  	  } else if (type === 'string') {
  	    length = Buffer.byteLength(subject, encoding);
  	  } else if (type === 'object' && subject !== null) {
  	    // assume object is array-like
  	    if (subject.type === 'Buffer' && isArray(subject.data)) subject = subject.data;
  	    length = +subject.length;
  	  } else {
  	    throw new TypeError('must start with number, buffer, array or string')
  	  }

  	  if (length > kMaxLength) {
  	    throw new RangeError('Attempt to allocate Buffer larger than maximum size: 0x' +
  	      kMaxLength.toString(16) + ' bytes')
  	  }

  	  if (length < 0) length = 0;
  	  else length >>>= 0; // coerce to uint32

  	  if (Buffer.TYPED_ARRAY_SUPPORT) {
  	    // Preferred: Return an augmented `Uint8Array` instance for best performance
  	    self = Buffer._augment(new Uint8Array(length)); // eslint-disable-line consistent-this
  	  } else {
  	    // Fallback: Return THIS instance of Buffer (created by `new`)
  	    self.length = length;
  	    self._isBuffer = true;
  	  }

  	  var i;
  	  if (Buffer.TYPED_ARRAY_SUPPORT && typeof subject.byteLength === 'number') {
  	    // Speed optimization -- use set if we're copying from a typed array
  	    self._set(subject);
  	  } else if (isArrayish(subject)) {
  	    // Treat array-ish objects as a byte array
  	    if (Buffer.isBuffer(subject)) {
  	      for (i = 0; i < length; i++) {
  	        self[i] = subject.readUInt8(i);
  	      }
  	    } else {
  	      for (i = 0; i < length; i++) {
  	        self[i] = ((subject[i] % 256) + 256) % 256;
  	      }
  	    }
  	  } else if (type === 'string') {
  	    self.write(subject, 0, encoding);
  	  } else if (type === 'number' && !Buffer.TYPED_ARRAY_SUPPORT) {
  	    for (i = 0; i < length; i++) {
  	      self[i] = 0;
  	    }
  	  }

  	  if (length > 0 && length <= Buffer.poolSize) self.parent = rootParent;

  	  return self
  	}

  	function SlowBuffer (subject, encoding) {
  	  if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding)

  	  var buf = new Buffer(subject, encoding);
  	  delete buf.parent;
  	  return buf
  	}

  	Buffer.isBuffer = function isBuffer (b) {
  	  return !!(b != null && b._isBuffer)
  	};

  	Buffer.compare = function compare (a, b) {
  	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
  	    throw new TypeError('Arguments must be Buffers')
  	  }

  	  if (a === b) return 0

  	  var x = a.length;
  	  var y = b.length;
  	  for (var i = 0, len = Math.min(x, y); i < len && a[i] === b[i]; i++) {}
  	  if (i !== len) {
  	    x = a[i];
  	    y = b[i];
  	  }
  	  if (x < y) return -1
  	  if (y < x) return 1
  	  return 0
  	};

  	Buffer.isEncoding = function isEncoding (encoding) {
  	  switch (String(encoding).toLowerCase()) {
  	    case 'hex':
  	    case 'utf8':
  	    case 'utf-8':
  	    case 'ascii':
  	    case 'binary':
  	    case 'base64':
  	    case 'raw':
  	    case 'ucs2':
  	    case 'ucs-2':
  	    case 'utf16le':
  	    case 'utf-16le':
  	      return true
  	    default:
  	      return false
  	  }
  	};

  	Buffer.concat = function concat (list, totalLength) {
  	  if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.')

  	  if (list.length === 0) {
  	    return new Buffer(0)
  	  } else if (list.length === 1) {
  	    return list[0]
  	  }

  	  var i;
  	  if (totalLength === undefined) {
  	    totalLength = 0;
  	    for (i = 0; i < list.length; i++) {
  	      totalLength += list[i].length;
  	    }
  	  }

  	  var buf = new Buffer(totalLength);
  	  var pos = 0;
  	  for (i = 0; i < list.length; i++) {
  	    var item = list[i];
  	    item.copy(buf, pos);
  	    pos += item.length;
  	  }
  	  return buf
  	};

  	Buffer.byteLength = function byteLength (str, encoding) {
  	  var ret;
  	  str = str + '';
  	  switch (encoding || 'utf8') {
  	    case 'ascii':
  	    case 'binary':
  	    case 'raw':
  	      ret = str.length;
  	      break
  	    case 'ucs2':
  	    case 'ucs-2':
  	    case 'utf16le':
  	    case 'utf-16le':
  	      ret = str.length * 2;
  	      break
  	    case 'hex':
  	      ret = str.length >>> 1;
  	      break
  	    case 'utf8':
  	    case 'utf-8':
  	      ret = utf8ToBytes(str).length;
  	      break
  	    case 'base64':
  	      ret = base64ToBytes(str).length;
  	      break
  	    default:
  	      ret = str.length;
  	  }
  	  return ret
  	};

  	// pre-set for values that may exist in the future
  	Buffer.prototype.length = undefined;
  	Buffer.prototype.parent = undefined;

  	// toString(encoding, start=0, end=buffer.length)
  	Buffer.prototype.toString = function toString (encoding, start, end) {
  	  var loweredCase = false;

  	  start = start >>> 0;
  	  end = end === undefined || end === Infinity ? this.length : end >>> 0;

  	  if (!encoding) encoding = 'utf8';
  	  if (start < 0) start = 0;
  	  if (end > this.length) end = this.length;
  	  if (end <= start) return ''

  	  while (true) {
  	    switch (encoding) {
  	      case 'hex':
  	        return hexSlice(this, start, end)

  	      case 'utf8':
  	      case 'utf-8':
  	        return utf8Slice(this, start, end)

  	      case 'ascii':
  	        return asciiSlice(this, start, end)

  	      case 'binary':
  	        return binarySlice(this, start, end)

  	      case 'base64':
  	        return base64Slice(this, start, end)

  	      case 'ucs2':
  	      case 'ucs-2':
  	      case 'utf16le':
  	      case 'utf-16le':
  	        return utf16leSlice(this, start, end)

  	      default:
  	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
  	        encoding = (encoding + '').toLowerCase();
  	        loweredCase = true;
  	    }
  	  }
  	};

  	Buffer.prototype.equals = function equals (b) {
  	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  	  if (this === b) return true
  	  return Buffer.compare(this, b) === 0
  	};

  	Buffer.prototype.inspect = function inspect () {
  	  var str = '';
  	  var max = exports.INSPECT_MAX_BYTES;
  	  if (this.length > 0) {
  	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
  	    if (this.length > max) str += ' ... ';
  	  }
  	  return '<Buffer ' + str + '>'
  	};

  	Buffer.prototype.compare = function compare (b) {
  	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  	  if (this === b) return 0
  	  return Buffer.compare(this, b)
  	};

  	Buffer.prototype.indexOf = function indexOf (val, byteOffset) {
  	  if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
  	  else if (byteOffset < -0x80000000) byteOffset = -0x80000000;
  	  byteOffset >>= 0;

  	  if (this.length === 0) return -1
  	  if (byteOffset >= this.length) return -1

  	  // Negative offsets start from the end of the buffer
  	  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0);

  	  if (typeof val === 'string') {
  	    if (val.length === 0) return -1 // special case: looking for empty string always fails
  	    return String.prototype.indexOf.call(this, val, byteOffset)
  	  }
  	  if (Buffer.isBuffer(val)) {
  	    return arrayIndexOf(this, val, byteOffset)
  	  }
  	  if (typeof val === 'number') {
  	    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
  	      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
  	    }
  	    return arrayIndexOf(this, [ val ], byteOffset)
  	  }

  	  function arrayIndexOf (arr, val, byteOffset) {
  	    var foundIndex = -1;
  	    for (var i = 0; byteOffset + i < arr.length; i++) {
  	      if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
  	        if (foundIndex === -1) foundIndex = i;
  	        if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex
  	      } else {
  	        foundIndex = -1;
  	      }
  	    }
  	    return -1
  	  }

  	  throw new TypeError('val must be string, number or Buffer')
  	};

  	// `get` will be removed in Node 0.13+
  	Buffer.prototype.get = function get (offset) {
  	  console.log('.get() is deprecated. Access using array indexes instead.');
  	  return this.readUInt8(offset)
  	};

  	// `set` will be removed in Node 0.13+
  	Buffer.prototype.set = function set (v, offset) {
  	  console.log('.set() is deprecated. Access using array indexes instead.');
  	  return this.writeUInt8(v, offset)
  	};

  	function hexWrite (buf, string, offset, length) {
  	  offset = Number(offset) || 0;
  	  var remaining = buf.length - offset;
  	  if (!length) {
  	    length = remaining;
  	  } else {
  	    length = Number(length);
  	    if (length > remaining) {
  	      length = remaining;
  	    }
  	  }

  	  // must be an even number of digits
  	  var strLen = string.length;
  	  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

  	  if (length > strLen / 2) {
  	    length = strLen / 2;
  	  }
  	  for (var i = 0; i < length; i++) {
  	    var parsed = parseInt(string.substr(i * 2, 2), 16);
  	    if (isNaN(parsed)) throw new Error('Invalid hex string')
  	    buf[offset + i] = parsed;
  	  }
  	  return i
  	}

  	function utf8Write (buf, string, offset, length) {
  	  var charsWritten = blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
  	  return charsWritten
  	}

  	function asciiWrite (buf, string, offset, length) {
  	  var charsWritten = blitBuffer(asciiToBytes(string), buf, offset, length);
  	  return charsWritten
  	}

  	function binaryWrite (buf, string, offset, length) {
  	  return asciiWrite(buf, string, offset, length)
  	}

  	function base64Write (buf, string, offset, length) {
  	  var charsWritten = blitBuffer(base64ToBytes(string), buf, offset, length);
  	  return charsWritten
  	}

  	function utf16leWrite (buf, string, offset, length) {
  	  var charsWritten = blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
  	  return charsWritten
  	}

  	Buffer.prototype.write = function write (string, offset, length, encoding) {
  	  // Support both (string, offset, length, encoding)
  	  // and the legacy (string, encoding, offset, length)
  	  if (isFinite(offset)) {
  	    if (!isFinite(length)) {
  	      encoding = length;
  	      length = undefined;
  	    }
  	  } else {  // legacy
  	    var swap = encoding;
  	    encoding = offset;
  	    offset = length;
  	    length = swap;
  	  }

  	  offset = Number(offset) || 0;

  	  if (length < 0 || offset < 0 || offset > this.length) {
  	    throw new RangeError('attempt to write outside buffer bounds')
  	  }

  	  var remaining = this.length - offset;
  	  if (!length) {
  	    length = remaining;
  	  } else {
  	    length = Number(length);
  	    if (length > remaining) {
  	      length = remaining;
  	    }
  	  }
  	  encoding = String(encoding || 'utf8').toLowerCase();

  	  var ret;
  	  switch (encoding) {
  	    case 'hex':
  	      ret = hexWrite(this, string, offset, length);
  	      break
  	    case 'utf8':
  	    case 'utf-8':
  	      ret = utf8Write(this, string, offset, length);
  	      break
  	    case 'ascii':
  	      ret = asciiWrite(this, string, offset, length);
  	      break
  	    case 'binary':
  	      ret = binaryWrite(this, string, offset, length);
  	      break
  	    case 'base64':
  	      ret = base64Write(this, string, offset, length);
  	      break
  	    case 'ucs2':
  	    case 'ucs-2':
  	    case 'utf16le':
  	    case 'utf-16le':
  	      ret = utf16leWrite(this, string, offset, length);
  	      break
  	    default:
  	      throw new TypeError('Unknown encoding: ' + encoding)
  	  }
  	  return ret
  	};

  	Buffer.prototype.toJSON = function toJSON () {
  	  return {
  	    type: 'Buffer',
  	    data: Array.prototype.slice.call(this._arr || this, 0)
  	  }
  	};

  	function base64Slice (buf, start, end) {
  	  if (start === 0 && end === buf.length) {
  	    return base64.fromByteArray(buf)
  	  } else {
  	    return base64.fromByteArray(buf.slice(start, end))
  	  }
  	}

  	function utf8Slice (buf, start, end) {
  	  var res = '';
  	  var tmp = '';
  	  end = Math.min(buf.length, end);

  	  for (var i = start; i < end; i++) {
  	    if (buf[i] <= 0x7F) {
  	      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i]);
  	      tmp = '';
  	    } else {
  	      tmp += '%' + buf[i].toString(16);
  	    }
  	  }

  	  return res + decodeUtf8Char(tmp)
  	}

  	function asciiSlice (buf, start, end) {
  	  var ret = '';
  	  end = Math.min(buf.length, end);

  	  for (var i = start; i < end; i++) {
  	    ret += String.fromCharCode(buf[i] & 0x7F);
  	  }
  	  return ret
  	}

  	function binarySlice (buf, start, end) {
  	  var ret = '';
  	  end = Math.min(buf.length, end);

  	  for (var i = start; i < end; i++) {
  	    ret += String.fromCharCode(buf[i]);
  	  }
  	  return ret
  	}

  	function hexSlice (buf, start, end) {
  	  var len = buf.length;

  	  if (!start || start < 0) start = 0;
  	  if (!end || end < 0 || end > len) end = len;

  	  var out = '';
  	  for (var i = start; i < end; i++) {
  	    out += toHex(buf[i]);
  	  }
  	  return out
  	}

  	function utf16leSlice (buf, start, end) {
  	  var bytes = buf.slice(start, end);
  	  var res = '';
  	  for (var i = 0; i < bytes.length; i += 2) {
  	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  	  }
  	  return res
  	}

  	Buffer.prototype.slice = function slice (start, end) {
  	  var len = this.length;
  	  start = ~~start;
  	  end = end === undefined ? len : ~~end;

  	  if (start < 0) {
  	    start += len;
  	    if (start < 0) start = 0;
  	  } else if (start > len) {
  	    start = len;
  	  }

  	  if (end < 0) {
  	    end += len;
  	    if (end < 0) end = 0;
  	  } else if (end > len) {
  	    end = len;
  	  }

  	  if (end < start) end = start;

  	  var newBuf;
  	  if (Buffer.TYPED_ARRAY_SUPPORT) {
  	    newBuf = Buffer._augment(this.subarray(start, end));
  	  } else {
  	    var sliceLen = end - start;
  	    newBuf = new Buffer(sliceLen, undefined);
  	    for (var i = 0; i < sliceLen; i++) {
  	      newBuf[i] = this[i + start];
  	    }
  	  }

  	  if (newBuf.length) newBuf.parent = this.parent || this;

  	  return newBuf
  	};

  	/*
  	 * Need to make sure that buffer isn't trying to write out of bounds.
  	 */
  	function checkOffset (offset, ext, length) {
  	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
  	}

  	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  	  offset = offset >>> 0;
  	  byteLength = byteLength >>> 0;
  	  if (!noAssert) checkOffset(offset, byteLength, this.length);

  	  var val = this[offset];
  	  var mul = 1;
  	  var i = 0;
  	  while (++i < byteLength && (mul *= 0x100)) {
  	    val += this[offset + i] * mul;
  	  }

  	  return val
  	};

  	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  	  offset = offset >>> 0;
  	  byteLength = byteLength >>> 0;
  	  if (!noAssert) {
  	    checkOffset(offset, byteLength, this.length);
  	  }

  	  var val = this[offset + --byteLength];
  	  var mul = 1;
  	  while (byteLength > 0 && (mul *= 0x100)) {
  	    val += this[offset + --byteLength] * mul;
  	  }

  	  return val
  	};

  	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  	  if (!noAssert) checkOffset(offset, 1, this.length);
  	  return this[offset]
  	};

  	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  	  if (!noAssert) checkOffset(offset, 2, this.length);
  	  return this[offset] | (this[offset + 1] << 8)
  	};

  	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  	  if (!noAssert) checkOffset(offset, 2, this.length);
  	  return (this[offset] << 8) | this[offset + 1]
  	};

  	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  	  if (!noAssert) checkOffset(offset, 4, this.length);

  	  return ((this[offset]) |
  	      (this[offset + 1] << 8) |
  	      (this[offset + 2] << 16)) +
  	      (this[offset + 3] * 0x1000000)
  	};

  	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  	  if (!noAssert) checkOffset(offset, 4, this.length);

  	  return (this[offset] * 0x1000000) +
  	    ((this[offset + 1] << 16) |
  	    (this[offset + 2] << 8) |
  	    this[offset + 3])
  	};

  	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  	  offset = offset >>> 0;
  	  byteLength = byteLength >>> 0;
  	  if (!noAssert) checkOffset(offset, byteLength, this.length);

  	  var val = this[offset];
  	  var mul = 1;
  	  var i = 0;
  	  while (++i < byteLength && (mul *= 0x100)) {
  	    val += this[offset + i] * mul;
  	  }
  	  mul *= 0x80;

  	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  	  return val
  	};

  	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  	  offset = offset >>> 0;
  	  byteLength = byteLength >>> 0;
  	  if (!noAssert) checkOffset(offset, byteLength, this.length);

  	  var i = byteLength;
  	  var mul = 1;
  	  var val = this[offset + --i];
  	  while (i > 0 && (mul *= 0x100)) {
  	    val += this[offset + --i] * mul;
  	  }
  	  mul *= 0x80;

  	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  	  return val
  	};

  	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  	  if (!noAssert) checkOffset(offset, 1, this.length);
  	  if (!(this[offset] & 0x80)) return (this[offset])
  	  return ((0xff - this[offset] + 1) * -1)
  	};

  	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  	  if (!noAssert) checkOffset(offset, 2, this.length);
  	  var val = this[offset] | (this[offset + 1] << 8);
  	  return (val & 0x8000) ? val | 0xFFFF0000 : val
  	};

  	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  	  if (!noAssert) checkOffset(offset, 2, this.length);
  	  var val = this[offset + 1] | (this[offset] << 8);
  	  return (val & 0x8000) ? val | 0xFFFF0000 : val
  	};

  	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  	  if (!noAssert) checkOffset(offset, 4, this.length);

  	  return (this[offset]) |
  	    (this[offset + 1] << 8) |
  	    (this[offset + 2] << 16) |
  	    (this[offset + 3] << 24)
  	};

  	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  	  if (!noAssert) checkOffset(offset, 4, this.length);

  	  return (this[offset] << 24) |
  	    (this[offset + 1] << 16) |
  	    (this[offset + 2] << 8) |
  	    (this[offset + 3])
  	};

  	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  	  if (!noAssert) checkOffset(offset, 4, this.length);
  	  return ieee754.read(this, offset, true, 23, 4)
  	};

  	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  	  if (!noAssert) checkOffset(offset, 4, this.length);
  	  return ieee754.read(this, offset, false, 23, 4)
  	};

  	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  	  if (!noAssert) checkOffset(offset, 8, this.length);
  	  return ieee754.read(this, offset, true, 52, 8)
  	};

  	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  	  if (!noAssert) checkOffset(offset, 8, this.length);
  	  return ieee754.read(this, offset, false, 52, 8)
  	};

  	function checkInt (buf, value, offset, ext, max, min) {
  	  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
  	  if (value > max || value < min) throw new RangeError('value is out of bounds')
  	  if (offset + ext > buf.length) throw new RangeError('index out of range')
  	}

  	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  	  value = +value;
  	  offset = offset >>> 0;
  	  byteLength = byteLength >>> 0;
  	  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0);

  	  var mul = 1;
  	  var i = 0;
  	  this[offset] = value & 0xFF;
  	  while (++i < byteLength && (mul *= 0x100)) {
  	    this[offset + i] = (value / mul) >>> 0 & 0xFF;
  	  }

  	  return offset + byteLength
  	};

  	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  	  value = +value;
  	  offset = offset >>> 0;
  	  byteLength = byteLength >>> 0;
  	  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0);

  	  var i = byteLength - 1;
  	  var mul = 1;
  	  this[offset + i] = value & 0xFF;
  	  while (--i >= 0 && (mul *= 0x100)) {
  	    this[offset + i] = (value / mul) >>> 0 & 0xFF;
  	  }

  	  return offset + byteLength
  	};

  	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  	  value = +value;
  	  offset = offset >>> 0;
  	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  	  this[offset] = value;
  	  return offset + 1
  	};

  	function objectWriteUInt16 (buf, value, offset, littleEndian) {
  	  if (value < 0) value = 0xffff + value + 1;
  	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
  	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
  	      (littleEndian ? i : 1 - i) * 8;
  	  }
  	}

  	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  	  value = +value;
  	  offset = offset >>> 0;
  	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  	  if (Buffer.TYPED_ARRAY_SUPPORT) {
  	    this[offset] = value;
  	    this[offset + 1] = (value >>> 8);
  	  } else {
  	    objectWriteUInt16(this, value, offset, true);
  	  }
  	  return offset + 2
  	};

  	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  	  value = +value;
  	  offset = offset >>> 0;
  	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  	  if (Buffer.TYPED_ARRAY_SUPPORT) {
  	    this[offset] = (value >>> 8);
  	    this[offset + 1] = value;
  	  } else {
  	    objectWriteUInt16(this, value, offset, false);
  	  }
  	  return offset + 2
  	};

  	function objectWriteUInt32 (buf, value, offset, littleEndian) {
  	  if (value < 0) value = 0xffffffff + value + 1;
  	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
  	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
  	  }
  	}

  	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  	  value = +value;
  	  offset = offset >>> 0;
  	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  	  if (Buffer.TYPED_ARRAY_SUPPORT) {
  	    this[offset + 3] = (value >>> 24);
  	    this[offset + 2] = (value >>> 16);
  	    this[offset + 1] = (value >>> 8);
  	    this[offset] = value;
  	  } else {
  	    objectWriteUInt32(this, value, offset, true);
  	  }
  	  return offset + 4
  	};

  	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  	  value = +value;
  	  offset = offset >>> 0;
  	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  	  if (Buffer.TYPED_ARRAY_SUPPORT) {
  	    this[offset] = (value >>> 24);
  	    this[offset + 1] = (value >>> 16);
  	    this[offset + 2] = (value >>> 8);
  	    this[offset + 3] = value;
  	  } else {
  	    objectWriteUInt32(this, value, offset, false);
  	  }
  	  return offset + 4
  	};

  	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  	  value = +value;
  	  offset = offset >>> 0;
  	  if (!noAssert) {
  	    checkInt(
  	      this, value, offset, byteLength,
  	      Math.pow(2, 8 * byteLength - 1) - 1,
  	      -Math.pow(2, 8 * byteLength - 1)
  	    );
  	  }

  	  var i = 0;
  	  var mul = 1;
  	  var sub = value < 0 ? 1 : 0;
  	  this[offset] = value & 0xFF;
  	  while (++i < byteLength && (mul *= 0x100)) {
  	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
  	  }

  	  return offset + byteLength
  	};

  	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  	  value = +value;
  	  offset = offset >>> 0;
  	  if (!noAssert) {
  	    checkInt(
  	      this, value, offset, byteLength,
  	      Math.pow(2, 8 * byteLength - 1) - 1,
  	      -Math.pow(2, 8 * byteLength - 1)
  	    );
  	  }

  	  var i = byteLength - 1;
  	  var mul = 1;
  	  var sub = value < 0 ? 1 : 0;
  	  this[offset + i] = value & 0xFF;
  	  while (--i >= 0 && (mul *= 0x100)) {
  	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
  	  }

  	  return offset + byteLength
  	};

  	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  	  value = +value;
  	  offset = offset >>> 0;
  	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  	  if (value < 0) value = 0xff + value + 1;
  	  this[offset] = value;
  	  return offset + 1
  	};

  	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  	  value = +value;
  	  offset = offset >>> 0;
  	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  	  if (Buffer.TYPED_ARRAY_SUPPORT) {
  	    this[offset] = value;
  	    this[offset + 1] = (value >>> 8);
  	  } else {
  	    objectWriteUInt16(this, value, offset, true);
  	  }
  	  return offset + 2
  	};

  	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  	  value = +value;
  	  offset = offset >>> 0;
  	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  	  if (Buffer.TYPED_ARRAY_SUPPORT) {
  	    this[offset] = (value >>> 8);
  	    this[offset + 1] = value;
  	  } else {
  	    objectWriteUInt16(this, value, offset, false);
  	  }
  	  return offset + 2
  	};

  	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  	  value = +value;
  	  offset = offset >>> 0;
  	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  	  if (Buffer.TYPED_ARRAY_SUPPORT) {
  	    this[offset] = value;
  	    this[offset + 1] = (value >>> 8);
  	    this[offset + 2] = (value >>> 16);
  	    this[offset + 3] = (value >>> 24);
  	  } else {
  	    objectWriteUInt32(this, value, offset, true);
  	  }
  	  return offset + 4
  	};

  	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  	  value = +value;
  	  offset = offset >>> 0;
  	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  	  if (value < 0) value = 0xffffffff + value + 1;
  	  if (Buffer.TYPED_ARRAY_SUPPORT) {
  	    this[offset] = (value >>> 24);
  	    this[offset + 1] = (value >>> 16);
  	    this[offset + 2] = (value >>> 8);
  	    this[offset + 3] = value;
  	  } else {
  	    objectWriteUInt32(this, value, offset, false);
  	  }
  	  return offset + 4
  	};

  	function checkIEEE754 (buf, value, offset, ext, max, min) {
  	  if (value > max || value < min) throw new RangeError('value is out of bounds')
  	  if (offset + ext > buf.length) throw new RangeError('index out of range')
  	  if (offset < 0) throw new RangeError('index out of range')
  	}

  	function writeFloat (buf, value, offset, littleEndian, noAssert) {
  	  if (!noAssert) {
  	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  	  }
  	  ieee754.write(buf, value, offset, littleEndian, 23, 4);
  	  return offset + 4
  	}

  	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  	  return writeFloat(this, value, offset, true, noAssert)
  	};

  	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  	  return writeFloat(this, value, offset, false, noAssert)
  	};

  	function writeDouble (buf, value, offset, littleEndian, noAssert) {
  	  if (!noAssert) {
  	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  	  }
  	  ieee754.write(buf, value, offset, littleEndian, 52, 8);
  	  return offset + 8
  	}

  	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  	  return writeDouble(this, value, offset, true, noAssert)
  	};

  	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  	  return writeDouble(this, value, offset, false, noAssert)
  	};

  	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
  	Buffer.prototype.copy = function copy (target, target_start, start, end) {
  	  if (!start) start = 0;
  	  if (!end && end !== 0) end = this.length;
  	  if (target_start >= target.length) target_start = target.length;
  	  if (!target_start) target_start = 0;
  	  if (end > 0 && end < start) end = start;

  	  // Copy 0 bytes; we're done
  	  if (end === start) return 0
  	  if (target.length === 0 || this.length === 0) return 0

  	  // Fatal error conditions
  	  if (target_start < 0) {
  	    throw new RangeError('targetStart out of bounds')
  	  }
  	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  	  // Are we oob?
  	  if (end > this.length) end = this.length;
  	  if (target.length - target_start < end - start) {
  	    end = target.length - target_start + start;
  	  }

  	  var len = end - start;

  	  if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
  	    for (var i = 0; i < len; i++) {
  	      target[i + target_start] = this[i + start];
  	    }
  	  } else {
  	    target._set(this.subarray(start, start + len), target_start);
  	  }

  	  return len
  	};

  	// fill(value, start=0, end=buffer.length)
  	Buffer.prototype.fill = function fill (value, start, end) {
  	  if (!value) value = 0;
  	  if (!start) start = 0;
  	  if (!end) end = this.length;

  	  if (end < start) throw new RangeError('end < start')

  	  // Fill 0 bytes; we're done
  	  if (end === start) return
  	  if (this.length === 0) return

  	  if (start < 0 || start >= this.length) throw new RangeError('start out of bounds')
  	  if (end < 0 || end > this.length) throw new RangeError('end out of bounds')

  	  var i;
  	  if (typeof value === 'number') {
  	    for (i = start; i < end; i++) {
  	      this[i] = value;
  	    }
  	  } else {
  	    var bytes = utf8ToBytes(value.toString());
  	    var len = bytes.length;
  	    for (i = start; i < end; i++) {
  	      this[i] = bytes[i % len];
  	    }
  	  }

  	  return this
  	};

  	/**
  	 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
  	 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
  	 */
  	Buffer.prototype.toArrayBuffer = function toArrayBuffer () {
  	  if (typeof Uint8Array !== 'undefined') {
  	    if (Buffer.TYPED_ARRAY_SUPPORT) {
  	      return (new Buffer(this)).buffer
  	    } else {
  	      var buf = new Uint8Array(this.length);
  	      for (var i = 0, len = buf.length; i < len; i += 1) {
  	        buf[i] = this[i];
  	      }
  	      return buf.buffer
  	    }
  	  } else {
  	    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
  	  }
  	};

  	// HELPER FUNCTIONS
  	// ================

  	var BP = Buffer.prototype;

  	/**
  	 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
  	 */
  	Buffer._augment = function _augment (arr) {
  	  arr.constructor = Buffer;
  	  arr._isBuffer = true;

  	  // save reference to original Uint8Array set method before overwriting
  	  arr._set = arr.set;

  	  // deprecated, will be removed in node 0.13+
  	  arr.get = BP.get;
  	  arr.set = BP.set;

  	  arr.write = BP.write;
  	  arr.toString = BP.toString;
  	  arr.toLocaleString = BP.toString;
  	  arr.toJSON = BP.toJSON;
  	  arr.equals = BP.equals;
  	  arr.compare = BP.compare;
  	  arr.indexOf = BP.indexOf;
  	  arr.copy = BP.copy;
  	  arr.slice = BP.slice;
  	  arr.readUIntLE = BP.readUIntLE;
  	  arr.readUIntBE = BP.readUIntBE;
  	  arr.readUInt8 = BP.readUInt8;
  	  arr.readUInt16LE = BP.readUInt16LE;
  	  arr.readUInt16BE = BP.readUInt16BE;
  	  arr.readUInt32LE = BP.readUInt32LE;
  	  arr.readUInt32BE = BP.readUInt32BE;
  	  arr.readIntLE = BP.readIntLE;
  	  arr.readIntBE = BP.readIntBE;
  	  arr.readInt8 = BP.readInt8;
  	  arr.readInt16LE = BP.readInt16LE;
  	  arr.readInt16BE = BP.readInt16BE;
  	  arr.readInt32LE = BP.readInt32LE;
  	  arr.readInt32BE = BP.readInt32BE;
  	  arr.readFloatLE = BP.readFloatLE;
  	  arr.readFloatBE = BP.readFloatBE;
  	  arr.readDoubleLE = BP.readDoubleLE;
  	  arr.readDoubleBE = BP.readDoubleBE;
  	  arr.writeUInt8 = BP.writeUInt8;
  	  arr.writeUIntLE = BP.writeUIntLE;
  	  arr.writeUIntBE = BP.writeUIntBE;
  	  arr.writeUInt16LE = BP.writeUInt16LE;
  	  arr.writeUInt16BE = BP.writeUInt16BE;
  	  arr.writeUInt32LE = BP.writeUInt32LE;
  	  arr.writeUInt32BE = BP.writeUInt32BE;
  	  arr.writeIntLE = BP.writeIntLE;
  	  arr.writeIntBE = BP.writeIntBE;
  	  arr.writeInt8 = BP.writeInt8;
  	  arr.writeInt16LE = BP.writeInt16LE;
  	  arr.writeInt16BE = BP.writeInt16BE;
  	  arr.writeInt32LE = BP.writeInt32LE;
  	  arr.writeInt32BE = BP.writeInt32BE;
  	  arr.writeFloatLE = BP.writeFloatLE;
  	  arr.writeFloatBE = BP.writeFloatBE;
  	  arr.writeDoubleLE = BP.writeDoubleLE;
  	  arr.writeDoubleBE = BP.writeDoubleBE;
  	  arr.fill = BP.fill;
  	  arr.inspect = BP.inspect;
  	  arr.toArrayBuffer = BP.toArrayBuffer;

  	  return arr
  	};

  	var INVALID_BASE64_RE = /[^+\/0-9A-z\-]/g;

  	function base64clean (str) {
  	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  	  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
  	  // Node converts strings with length < 2 to ''
  	  if (str.length < 2) return ''
  	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  	  while (str.length % 4 !== 0) {
  	    str = str + '=';
  	  }
  	  return str
  	}

  	function stringtrim (str) {
  	  if (str.trim) return str.trim()
  	  return str.replace(/^\s+|\s+$/g, '')
  	}

  	function isArrayish (subject) {
  	  return isArray(subject) || Buffer.isBuffer(subject) ||
  	      subject && typeof subject === 'object' &&
  	      typeof subject.length === 'number'
  	}

  	function toHex (n) {
  	  if (n < 16) return '0' + n.toString(16)
  	  return n.toString(16)
  	}

  	function utf8ToBytes (string, units) {
  	  units = units || Infinity;
  	  var codePoint;
  	  var length = string.length;
  	  var leadSurrogate = null;
  	  var bytes = [];
  	  var i = 0;

  	  for (; i < length; i++) {
  	    codePoint = string.charCodeAt(i);

  	    // is surrogate component
  	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
  	      // last char was a lead
  	      if (leadSurrogate) {
  	        // 2 leads in a row
  	        if (codePoint < 0xDC00) {
  	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
  	          leadSurrogate = codePoint;
  	          continue
  	        } else {
  	          // valid surrogate pair
  	          codePoint = leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00 | 0x10000;
  	          leadSurrogate = null;
  	        }
  	      } else {
  	        // no lead yet

  	        if (codePoint > 0xDBFF) {
  	          // unexpected trail
  	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
  	          continue
  	        } else if (i + 1 === length) {
  	          // unpaired lead
  	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
  	          continue
  	        } else {
  	          // valid lead
  	          leadSurrogate = codePoint;
  	          continue
  	        }
  	      }
  	    } else if (leadSurrogate) {
  	      // valid bmp char, but last char was a lead
  	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
  	      leadSurrogate = null;
  	    }

  	    // encode utf8
  	    if (codePoint < 0x80) {
  	      if ((units -= 1) < 0) break
  	      bytes.push(codePoint);
  	    } else if (codePoint < 0x800) {
  	      if ((units -= 2) < 0) break
  	      bytes.push(
  	        codePoint >> 0x6 | 0xC0,
  	        codePoint & 0x3F | 0x80
  	      );
  	    } else if (codePoint < 0x10000) {
  	      if ((units -= 3) < 0) break
  	      bytes.push(
  	        codePoint >> 0xC | 0xE0,
  	        codePoint >> 0x6 & 0x3F | 0x80,
  	        codePoint & 0x3F | 0x80
  	      );
  	    } else if (codePoint < 0x200000) {
  	      if ((units -= 4) < 0) break
  	      bytes.push(
  	        codePoint >> 0x12 | 0xF0,
  	        codePoint >> 0xC & 0x3F | 0x80,
  	        codePoint >> 0x6 & 0x3F | 0x80,
  	        codePoint & 0x3F | 0x80
  	      );
  	    } else {
  	      throw new Error('Invalid code point')
  	    }
  	  }

  	  return bytes
  	}

  	function asciiToBytes (str) {
  	  var byteArray = [];
  	  for (var i = 0; i < str.length; i++) {
  	    // Node's code seems to be doing this and not & 0x7F..
  	    byteArray.push(str.charCodeAt(i) & 0xFF);
  	  }
  	  return byteArray
  	}

  	function utf16leToBytes (str, units) {
  	  var c, hi, lo;
  	  var byteArray = [];
  	  for (var i = 0; i < str.length; i++) {
  	    if ((units -= 2) < 0) break

  	    c = str.charCodeAt(i);
  	    hi = c >> 8;
  	    lo = c % 256;
  	    byteArray.push(lo);
  	    byteArray.push(hi);
  	  }

  	  return byteArray
  	}

  	function base64ToBytes (str) {
  	  return base64.toByteArray(base64clean(str))
  	}

  	function blitBuffer (src, dst, offset, length) {
  	  for (var i = 0; i < length; i++) {
  	    if ((i + offset >= dst.length) || (i >= src.length)) break
  	    dst[i + offset] = src[i];
  	  }
  	  return i
  	}

  	function decodeUtf8Char (str) {
  	  try {
  	    return decodeURIComponent(str)
  	  } catch (err) {
  	    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  	  }
  	}

  	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7).Buffer));

  /***/ },
  /* 8 */
  /***/ function(module, exports, __webpack_require__) {

  	function isBMP (buffer) {
  	  return ('BM' === buffer.toString('ascii', 0, 2));
  	}

  	function calculate (buffer) {
  	  return {
  	    'width': buffer.readUInt32LE(18),
  	    'height': buffer.readUInt32LE(22)
  	  };
  	}

  	module.exports = {
  	  'detect': isBMP,
  	  'calculate': calculate
  	};


  /***/ },
  /* 9 */
  /***/ function(module, exports, __webpack_require__) {

  	var gifRegexp = /^GIF8[7,9]a/;
  	function isGIF (buffer) {
  	  var signature = buffer.toString('ascii', 0, 6);
  	  return (gifRegexp.test(signature));
  	}

  	function calculate(buffer) {
  	  return {
  	    'width': buffer.readUInt16LE(6),
  	    'height': buffer.readUInt16LE(8)
  	  };
  	}

  	module.exports = {
  	  'detect': isGIF,
  	  'calculate': calculate
  	};

  /***/ },
  /* 10 */
  /***/ function(module, exports, __webpack_require__) {

  	// NOTE: we only support baseline and progressive JPGs here
  	// due to the structure of the loader class, we only get a buffer
  	// with a maximum size of 4096 bytes. so if the SOF marker is outside
  	// if this range we can't detect the file size correctly.

  	// TO-DO: handle all JFIFs
  	var validJFIFMarkers = {
  	  'ffdb': '0001010101', // Samsung D807 JPEG
  	  'ffe0': '4a46494600', // Standard JPEG
  	  'ffe1': '4578696600', // Camera JPEG, with EXIF data
  	  'ffe2': '4943435f50', // Canon EOS-1D JPEG
  	  'ffe3': '',           // Samsung D500 JPEG
  	  'ffe8': '5350494646', // SPIFF JPEG
  	  'ffec': '4475636b79', // Photoshop JPEG
  	  'ffed': '50686f746f', // Adobe JPEG, Photoshop CMYK buffer
  	  'ffee': '41646f6265'  // Adobe JPEG, Unrecognised (Lightroom??)
  	};

  	var red = ['\x1B[31m', '\x1B[39m'];
  	function isJPG (buffer) { //, filepath
  	  var SOIMarker = buffer.toString('hex', 0, 2);
  	  var JFIFMarker = buffer.toString('hex', 2, 4);

  	  // not a valid jpeg
  	  if ('ffd8' !== SOIMarker) {
  	    return false;
  	  }

  	  // TO-DO: validate the end-bytes of a jpeg file
  	  // use filepath, get the last bytes, check for ffd9
  	  var got = buffer.toString('hex', 6, 11);
  	  var expected = JFIFMarker && validJFIFMarkers[JFIFMarker];
  	  if (expected === '') {
  	    console.warn(
  	      red[0] +
  	      'this looks like a unrecognised jpeg\n' +
  	      'please report the issue here\n' +
  	      red[1],
  	      '\thttps://github.com/netroy/image-size/issues/new\n'
  	    );
  	    return false;
  	  }
  	  return (got === expected) || (JFIFMarker === 'ffdb');
  	}

  	function extractSize (buffer, i) {
  	  return {
  	    'height' : buffer.readUInt16BE(i),
  	    'width' : buffer.readUInt16BE(i + 2)
  	  };
  	}

  	function validateBuffer (buffer, i) {
  	  // index should be within buffer limits
  	  if (i > buffer.length) {
  	    throw new TypeError('Corrupt JPG, exceeded buffer limits');
  	  }
  	  // Every JPEG block must begin with a 0xFF
  	  if (buffer[i] !== 0xFF) {
  	    throw new TypeError('Invalid JPG, marker table corrupted');
  	  }
  	}

  	function calculate (buffer) {

  	  // Skip 5 chars, they are for signature
  	  buffer = buffer.slice(4);

  	  var i, next;
  	  while (buffer.length) {
  	    // read length of the next block
  	    i = buffer.readUInt16BE(0);

  	    // ensure correct format
  	    validateBuffer(buffer, i);

  	    // 0xFFC0 is baseline(SOF)
  	    // 0xFFC2 is progressive(SOF2)
  	    next = buffer[i + 1];
  	    if (next === 0xC0 || next === 0xC2) {
  	      return extractSize(buffer, i + 5);
  	    }

  	    // move to the next block
  	    buffer = buffer.slice(i + 2);
  	  }

  	  throw new TypeError('Invalid JPG, no size found');
  	}

  	module.exports = {
  	  'detect': isJPG,
  	  'calculate': calculate
  	};


  /***/ },
  /* 11 */
  /***/ function(module, exports, __webpack_require__) {

  	var pngSignature = 'PNG\r\n\x1a\n';
  	function isPNG (buffer) {
  	  if (pngSignature === buffer.toString('ascii', 1, 8)) {
  	    if ('IHDR' !== buffer.toString('ascii', 12, 16)) {
  	      throw new TypeError('invalid png');
  	    }
  	    return true;
  	  }
  	}

  	function calculate (buffer) {
  	  return {
  	    'width': buffer.readUInt32BE(16),
  	    'height': buffer.readUInt32BE(20)
  	  };
  	}

  	module.exports = {
  	  'detect': isPNG,
  	  'calculate': calculate
  	};


  /***/ },
  /* 12 */
  /***/ function(module, exports, __webpack_require__) {

  	function isPSD (buffer) {
  	  return ('8BPS' === buffer.toString('ascii', 0, 4));
  	}

  	function calculate (buffer) {
  	  return {
  	    'width': buffer.readUInt32BE(18),
  	    'height': buffer.readUInt32BE(14)
  	  };
  	}

  	module.exports = {
  	  'detect': isPSD,
  	  'calculate': calculate
  	};


  /***/ },
  /* 13 */
  /***/ function(module, exports, __webpack_require__) {

  	var svgReg = /<svg[^>]+[^>]*>/;
  	function isSVG (buffer) {
  	  return svgReg.test(buffer);
  	}

  	var extractorRegExps = {
  	  'root': /<svg [^>]+>/,
  	  'width': /(^|\s)width\s*=\s*"(.+?)"/i,
  	  'height': /(^|\s)height\s*=\s*"(.+?)"/i,
  	  'viewbox': /(^|\s)viewbox\s*=\s*"(.+?)"/i
  	};

  	function getRatio (viewbox) {
  	  var ratio = 1;
  	  if (viewbox && viewbox[2]) {
  	    var dim = viewbox[2].split(/\s/g);
  	    if (dim.length === 4) {
  	      dim = dim.map(function (i) {
  	        return parseInt(i, 10);
  	      });
  	      ratio = (dim[2] - dim[0]) / (dim[3] - dim[1]);
  	    }
  	  }
  	  return ratio;
  	}

  	function parse (buffer) {
  	  var body = buffer.toString().replace(/[\r\n\s]+/g, ' ');
  	  var section = body.match(extractorRegExps.root);
  	  var root = section && section[0];
  	  if (root) {
  	    var width = root.match(extractorRegExps.width);
  	    var height = root.match(extractorRegExps.height);
  	    var viewbox = root.match(extractorRegExps.viewbox);
  	    var ratio = getRatio(viewbox);
  	    return {
  	      'width': parseInt(width && width[2], 10) || 0,
  	      'height': parseInt(height && height[2], 10) || 0,
  	      'ratio': ratio
  	    };
  	  }
  	}

  	function calculate (buffer) {

  	  var parsed = parse(buffer);
  	  var width = parsed.width;
  	  var height = parsed.height;
  	  var ratio = parsed.ratio;

  	  if (width && height) {
  	    return { 'width': width, 'height': height };
  	  } else {
  	    if (width) {
  	      return { 'width': width, 'height': Math.floor(width / ratio) };
  	    } else if (height) {
  	      return { 'width': Math.floor(height * ratio), 'height': height };
  	    } else {
  	      throw new TypeError('invalid svg');
  	    }
  	  }
  	}

  	module.exports = {
  	  'detect': isSVG,
  	  'calculate': calculate
  	};


  /***/ },
  /* 14 */
  /***/ function(module, exports, __webpack_require__) {

  	/* WEBPACK VAR INJECTION */(function(Buffer) {
  	// based on http://www.compix.com/fileformattif.htm
  	// TO-DO: support big-endian as well

  	var fs = __webpack_require__(16);
  	var readUInt = __webpack_require__(17);

  	function isTIFF (buffer) {
  	  var hex4 = buffer.toString('hex', 0, 4);
  	  return ('49492a00' === hex4 || '4d4d002a' === hex4);
  	}

  	// Read IFD (image-file-directory) into a buffer
  	function readIFD (buffer, filepath, isBigEndian) {

  	  var ifdOffset = readUInt(buffer, 32, 4, isBigEndian);

  	  // read only till the end of the file
  	  var bufferSize = 1024;
  	  var fileSize = fs.statSync(filepath).size;
  	  if (ifdOffset + bufferSize > fileSize) {
  	    bufferSize = fileSize - ifdOffset - 10;
  	  }

  	  // populate the buffer
  	  var endBuffer = new Buffer(bufferSize);
  	  var descriptor = fs.openSync(filepath, 'r');
  	  fs.readSync(descriptor, endBuffer, 0, bufferSize, ifdOffset);

  	  // var ifdLength = readUInt(endBuffer, 16, 0, isBigEndian);
  	  var ifdBuffer = endBuffer.slice(2); //, 2 + 12 * ifdLength);
  	  return ifdBuffer;
  	}

  	// TIFF values seem to be messed up on Big-Endian, this helps
  	function readValue (buffer, isBigEndian) {
  	  var low = readUInt(buffer, 16, 8, isBigEndian);
  	  var high = readUInt(buffer, 16, 10, isBigEndian);
  	  return (high << 16) + low;
  	}

  	// move to the next tag
  	function nextTag (buffer) {
  	  if (buffer.length > 24) {
  	    return buffer.slice(12);
  	  }
  	}

  	// Extract IFD tags from TIFF metadata
  	function extractTags (buffer, isBigEndian) {
  	  var tags = {};
  	  var code, type, length;

  	  while (buffer && buffer.length) {
  	    code = readUInt(buffer, 16, 0, isBigEndian);
  	    type = readUInt(buffer, 16, 2, isBigEndian);
  	    length = readUInt(buffer, 32, 4, isBigEndian);

  	    // 0 means end of IFD
  	    if (code === 0) {
  	      break;
  	    } else {
  	      // 256 is width, 257 is height
  	      // if (code === 256 || code === 257) {
  	      if (length === 1 && type === 3) {
  	        tags[code] = readValue(buffer, isBigEndian);
  	      }

  	      // move to the next tag
  	      buffer = nextTag(buffer);
  	    }
  	  }
  	  return tags;
  	}

  	// Test if the TIFF is Big Endian or Little Endian
  	function determineEndianness (buffer) {
  	  var signature = buffer.toString('ascii', 0, 2);
  	  if ('II' === signature) {
  	    return 'LE';
  	  } else if ('MM' === signature) {
  	    return 'BE';
  	  }
  	}

  	function calculate (buffer, filepath) {

  	  if (!filepath) {
  	    throw new TypeError('Tiff doesn\'t support buffer');
  	  }

  	  // Determine BE/LE
  	  var isBigEndian = determineEndianness(buffer) === 'BE';

  	  // read the IFD
  	  var ifdBuffer = readIFD(buffer, filepath, isBigEndian);

  	  // extract the tags from the IFD
  	  var tags = extractTags(ifdBuffer, isBigEndian);

  	  var width = tags[256];
  	  var height = tags[257];

  	  if (!width || !height) {
  	    throw new TypeError('Invalid Tiff, missing tags');
  	  }

  	  return {
  	    'width': width,
  	    'height': height
  	  };
  	}

  	module.exports = {
  	  'detect': isTIFF,
  	  'calculate': calculate
  	};

  	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7).Buffer));

  /***/ },
  /* 15 */
  /***/ function(module, exports, __webpack_require__) {

  	// based on https://developers.google.com/speed/webp/docs/riff_container

  	function isWebP (buffer) {
  	  var riffHeader = 'RIFF' === buffer.toString('ascii', 0, 4);
  	  var webpHeader = 'WEBP' === buffer.toString('ascii', 8, 12);
  	  var vp8Header  = 'VP8'  === buffer.toString('ascii', 12, 15);
  	  return (riffHeader && webpHeader && vp8Header);
  	}

  	function calculate (buffer) {

  	  var chunkHeader = buffer.toString('ascii', 12, 16);
  	  buffer = buffer.slice(20, 30);

  	  // Lossless webp stream signature
  	  if (chunkHeader === 'VP8 ' && buffer[0] !== 0x2f) {
  	    return calculateLossy(buffer);
  	  }

  	  // Lossy webp stream signature
  	  var signature = buffer.toString('hex', 3, 6);
  	  if (chunkHeader === 'VP8L' && signature !== '9d012a') {
  	    return calculateLossless(buffer);
  	  }

  	  return false;
  	}

  	function calculateLossless (buffer) {
  	  return {
  	    'width': 1 + (((buffer[2] & 0x3F) << 8) | buffer[1]),
  	    'height': 1 + (((buffer[4] & 0xF) << 10) | (buffer[3] << 2) |
  	                  ((buffer[2] & 0xC0) >> 6))
  	  };
  	}

  	function calculateLossy (buffer) {
  	  // `& 0x3fff` returns the last 14 bits
  	  // TO-DO: include webp scaling in the calculations
  	  return {
  	    'width': buffer.readInt16LE(6) & 0x3fff,
  	    'height': buffer.readInt16LE(8) & 0x3fff
  	  };
  	}

  	module.exports = {
  	  'detect': isWebP,
  	  'calculate': calculate
  	};


  /***/ },
  /* 16 */
  /***/ function(module, exports, __webpack_require__) {

  	

  /***/ },
  /* 17 */
  /***/ function(module, exports, __webpack_require__) {

  	module.exports = function(buffer, bits, offset, isBigEndian) {
  	  offset = offset || 0;
  	  var endian = !!isBigEndian ? 'BE' : 'LE';
  	  var method = buffer['readUInt' + bits + endian];
  	  return method.call(buffer, offset);
  	};


  /***/ },
  /* 18 */
  /***/ function(module, exports, __webpack_require__) {

  	// shim for using process in browser

  	var process = module.exports = {};
  	var queue = [];
  	var draining = false;

  	function drainQueue() {
  	    if (draining) {
  	        return;
  	    }
  	    draining = true;
  	    var currentQueue;
  	    var len = queue.length;
  	    while(len) {
  	        currentQueue = queue;
  	        queue = [];
  	        var i = -1;
  	        while (++i < len) {
  	            currentQueue[i]();
  	        }
  	        len = queue.length;
  	    }
  	    draining = false;
  	}
  	process.nextTick = function (fun) {
  	    queue.push(fun);
  	    if (!draining) {
  	        setTimeout(drainQueue, 0);
  	    }
  	};

  	process.title = 'browser';
  	process.browser = true;
  	process.env = {};
  	process.argv = [];
  	process.version = ''; // empty string to avoid regexp issues
  	process.versions = {};

  	function noop() {}

  	process.on = noop;
  	process.addListener = noop;
  	process.once = noop;
  	process.off = noop;
  	process.removeListener = noop;
  	process.removeAllListeners = noop;
  	process.emit = noop;

  	process.binding = function (name) {
  	    throw new Error('process.binding is not supported');
  	};

  	// TODO(shtylman)
  	process.cwd = function () { return '/' };
  	process.chdir = function (dir) {
  	    throw new Error('process.chdir is not supported');
  	};
  	process.umask = function() { return 0; };


  /***/ },
  /* 19 */
  /***/ function(module, exports, __webpack_require__) {

  	exports.read = function(buffer, offset, isLE, mLen, nBytes) {
  	  var e, m,
  	      eLen = nBytes * 8 - mLen - 1,
  	      eMax = (1 << eLen) - 1,
  	      eBias = eMax >> 1,
  	      nBits = -7,
  	      i = isLE ? (nBytes - 1) : 0,
  	      d = isLE ? -1 : 1,
  	      s = buffer[offset + i];

  	  i += d;

  	  e = s & ((1 << (-nBits)) - 1);
  	  s >>= (-nBits);
  	  nBits += eLen;
  	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);

  	  m = e & ((1 << (-nBits)) - 1);
  	  e >>= (-nBits);
  	  nBits += mLen;
  	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);

  	  if (e === 0) {
  	    e = 1 - eBias;
  	  } else if (e === eMax) {
  	    return m ? NaN : ((s ? -1 : 1) * Infinity);
  	  } else {
  	    m = m + Math.pow(2, mLen);
  	    e = e - eBias;
  	  }
  	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
  	};

  	exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
  	  var e, m, c,
  	      eLen = nBytes * 8 - mLen - 1,
  	      eMax = (1 << eLen) - 1,
  	      eBias = eMax >> 1,
  	      rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
  	      i = isLE ? 0 : (nBytes - 1),
  	      d = isLE ? 1 : -1,
  	      s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  	  value = Math.abs(value);

  	  if (isNaN(value) || value === Infinity) {
  	    m = isNaN(value) ? 1 : 0;
  	    e = eMax;
  	  } else {
  	    e = Math.floor(Math.log(value) / Math.LN2);
  	    if (value * (c = Math.pow(2, -e)) < 1) {
  	      e--;
  	      c *= 2;
  	    }
  	    if (e + eBias >= 1) {
  	      value += rt / c;
  	    } else {
  	      value += rt * Math.pow(2, 1 - eBias);
  	    }
  	    if (value * c >= 2) {
  	      e++;
  	      c /= 2;
  	    }

  	    if (e + eBias >= eMax) {
  	      m = 0;
  	      e = eMax;
  	    } else if (e + eBias >= 1) {
  	      m = (value * c - 1) * Math.pow(2, mLen);
  	      e = e + eBias;
  	    } else {
  	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
  	      e = 0;
  	    }
  	  }

  	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);

  	  e = (e << mLen) | m;
  	  eLen += mLen;
  	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);

  	  buffer[offset + i - d] |= s * 128;
  	};


  /***/ },
  /* 20 */
  /***/ function(module, exports, __webpack_require__) {

  	
  	/**
  	 * isArray
  	 */

  	var isArray = Array.isArray;

  	/**
  	 * toString
  	 */

  	var str = Object.prototype.toString;

  	/**
  	 * Whether or not the given `val`
  	 * is an array.
  	 *
  	 * example:
  	 *
  	 *        isArray([]);
  	 *        // > true
  	 *        isArray(arguments);
  	 *        // > false
  	 *        isArray('');
  	 *        // > false
  	 *
  	 * @param {mixed} val
  	 * @return {bool}
  	 */

  	module.exports = isArray || function (val) {
  	  return !! val && '[object Array]' == str.call(val);
  	};


  /***/ },
  /* 21 */
  /***/ function(module, exports, __webpack_require__) {

  	var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  (function (exports) {

  	  var Arr = (typeof Uint8Array !== 'undefined')
  	    ? Uint8Array
  	    : Array;

  		var PLUS   = '+'.charCodeAt(0);
  		var SLASH  = '/'.charCodeAt(0);
  		var NUMBER = '0'.charCodeAt(0);
  		var LOWER  = 'a'.charCodeAt(0);
  		var UPPER  = 'A'.charCodeAt(0);
  		var PLUS_URL_SAFE = '-'.charCodeAt(0);
  		var SLASH_URL_SAFE = '_'.charCodeAt(0);

  		function decode (elt) {
  			var code = elt.charCodeAt(0);
  			if (code === PLUS ||
  			    code === PLUS_URL_SAFE)
  				return 62 // '+'
  			if (code === SLASH ||
  			    code === SLASH_URL_SAFE)
  				return 63 // '/'
  			if (code < NUMBER)
  				return -1 //no match
  			if (code < NUMBER + 10)
  				return code - NUMBER + 26 + 26
  			if (code < UPPER + 26)
  				return code - UPPER
  			if (code < LOWER + 26)
  				return code - LOWER + 26
  		}

  		function b64ToByteArray (b64) {
  			var i, j, l, tmp, placeHolders, arr;

  			if (b64.length % 4 > 0) {
  				throw new Error('Invalid string. Length must be a multiple of 4')
  			}

  			// the number of equal signs (place holders)
  			// if there are two placeholders, than the two characters before it
  			// represent one byte
  			// if there is only one, then the three characters before it represent 2 bytes
  			// this is just a cheap hack to not do indexOf twice
  			var len = b64.length;
  			placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0;

  			// base64 is 4/3 + up to two characters of the original data
  			arr = new Arr(b64.length * 3 / 4 - placeHolders);

  			// if there are placeholders, only get up to the last complete 4 chars
  			l = placeHolders > 0 ? b64.length - 4 : b64.length;

  			var L = 0;

  			function push (v) {
  				arr[L++] = v;
  			}

  			for (i = 0, j = 0; i < l; i += 4, j += 3) {
  				tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3));
  				push((tmp & 0xFF0000) >> 16);
  				push((tmp & 0xFF00) >> 8);
  				push(tmp & 0xFF);
  			}

  			if (placeHolders === 2) {
  				tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4);
  				push(tmp & 0xFF);
  			} else if (placeHolders === 1) {
  				tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2);
  				push((tmp >> 8) & 0xFF);
  				push(tmp & 0xFF);
  			}

  			return arr
  		}

  		function uint8ToBase64 (uint8) {
  			var i,
  				extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
  				output = "",
  				temp, length;

  			function encode (num) {
  				return lookup.charAt(num)
  			}

  			function tripletToBase64 (num) {
  				return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
  			}

  			// go through the array every three bytes, we'll deal with trailing stuff later
  			for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
  				temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
  				output += tripletToBase64(temp);
  			}

  			// pad the end with zeros, but make sure to not forget the extra bytes
  			switch (extraBytes) {
  				case 1:
  					temp = uint8[uint8.length - 1];
  					output += encode(temp >> 2);
  					output += encode((temp << 4) & 0x3F);
  					output += '==';
  					break
  				case 2:
  					temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1]);
  					output += encode(temp >> 10);
  					output += encode((temp >> 4) & 0x3F);
  					output += encode((temp << 2) & 0x3F);
  					output += '=';
  					break
  			}

  			return output
  		}

  		exports.toByteArray = b64ToByteArray;
  		exports.fromByteArray = uint8ToBase64;
  	}(exports));


  /***/ }
  /******/ ])
  });
  }(markdownItImsize));

  var imsize = markdownItImsize.exports;

  var prism = {exports: {}};

  (function (module) {
  /* **********************************************
       Begin prism-core.js
  ********************************************** */

  /// <reference lib="WebWorker"/>

  var _self = (typeof window !== 'undefined')
  	? window   // if in browser
  	: (
  		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
  			? self // if in worker
  			: {}   // if in node js
  	);

  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var Prism = (function (_self) {

  	// Private helper vars
  	var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
  	var uniqueId = 0;

  	// The grammar object for plaintext
  	var plainTextGrammar = {};


  	var _ = {
  		/**
  		 * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
  		 * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
  		 * additional languages or plugins yourself.
  		 *
  		 * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
  		 *
  		 * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
  		 * empty Prism object into the global scope before loading the Prism script like this:
  		 *
  		 * ```js
  		 * window.Prism = window.Prism || {};
  		 * Prism.manual = true;
  		 * // add a new <script> to load Prism's script
  		 * ```
  		 *
  		 * @default false
  		 * @type {boolean}
  		 * @memberof Prism
  		 * @public
  		 */
  		manual: _self.Prism && _self.Prism.manual,
  		/**
  		 * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
  		 * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
  		 * own worker, you don't want it to do this.
  		 *
  		 * By setting this value to `true`, Prism will not add its own listeners to the worker.
  		 *
  		 * You obviously have to change this value before Prism executes. To do this, you can add an
  		 * empty Prism object into the global scope before loading the Prism script like this:
  		 *
  		 * ```js
  		 * window.Prism = window.Prism || {};
  		 * Prism.disableWorkerMessageHandler = true;
  		 * // Load Prism's script
  		 * ```
  		 *
  		 * @default false
  		 * @type {boolean}
  		 * @memberof Prism
  		 * @public
  		 */
  		disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,

  		/**
  		 * A namespace for utility methods.
  		 *
  		 * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
  		 * change or disappear at any time.
  		 *
  		 * @namespace
  		 * @memberof Prism
  		 */
  		util: {
  			encode: function encode(tokens) {
  				if (tokens instanceof Token) {
  					return new Token(tokens.type, encode(tokens.content), tokens.alias);
  				} else if (Array.isArray(tokens)) {
  					return tokens.map(encode);
  				} else {
  					return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
  				}
  			},

  			/**
  			 * Returns the name of the type of the given value.
  			 *
  			 * @param {any} o
  			 * @returns {string}
  			 * @example
  			 * type(null)      === 'Null'
  			 * type(undefined) === 'Undefined'
  			 * type(123)       === 'Number'
  			 * type('foo')     === 'String'
  			 * type(true)      === 'Boolean'
  			 * type([1, 2])    === 'Array'
  			 * type({})        === 'Object'
  			 * type(String)    === 'Function'
  			 * type(/abc+/)    === 'RegExp'
  			 */
  			type: function (o) {
  				return Object.prototype.toString.call(o).slice(8, -1);
  			},

  			/**
  			 * Returns a unique number for the given object. Later calls will still return the same number.
  			 *
  			 * @param {Object} obj
  			 * @returns {number}
  			 */
  			objId: function (obj) {
  				if (!obj['__id']) {
  					Object.defineProperty(obj, '__id', { value: ++uniqueId });
  				}
  				return obj['__id'];
  			},

  			/**
  			 * Creates a deep clone of the given object.
  			 *
  			 * The main intended use of this function is to clone language definitions.
  			 *
  			 * @param {T} o
  			 * @param {Record<number, any>} [visited]
  			 * @returns {T}
  			 * @template T
  			 */
  			clone: function deepClone(o, visited) {
  				visited = visited || {};

  				var clone; var id;
  				switch (_.util.type(o)) {
  					case 'Object':
  						id = _.util.objId(o);
  						if (visited[id]) {
  							return visited[id];
  						}
  						clone = /** @type {Record<string, any>} */ ({});
  						visited[id] = clone;

  						for (var key in o) {
  							if (o.hasOwnProperty(key)) {
  								clone[key] = deepClone(o[key], visited);
  							}
  						}

  						return /** @type {any} */ (clone);

  					case 'Array':
  						id = _.util.objId(o);
  						if (visited[id]) {
  							return visited[id];
  						}
  						clone = [];
  						visited[id] = clone;

  						(/** @type {Array} */(/** @type {any} */(o))).forEach(function (v, i) {
  							clone[i] = deepClone(v, visited);
  						});

  						return /** @type {any} */ (clone);

  					default:
  						return o;
  				}
  			},

  			/**
  			 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
  			 *
  			 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
  			 *
  			 * @param {Element} element
  			 * @returns {string}
  			 */
  			getLanguage: function (element) {
  				while (element) {
  					var m = lang.exec(element.className);
  					if (m) {
  						return m[1].toLowerCase();
  					}
  					element = element.parentElement;
  				}
  				return 'none';
  			},

  			/**
  			 * Sets the Prism `language-xxxx` class of the given element.
  			 *
  			 * @param {Element} element
  			 * @param {string} language
  			 * @returns {void}
  			 */
  			setLanguage: function (element, language) {
  				// remove all `language-xxxx` classes
  				// (this might leave behind a leading space)
  				element.className = element.className.replace(RegExp(lang, 'gi'), '');

  				// add the new `language-xxxx` class
  				// (using `classList` will automatically clean up spaces for us)
  				element.classList.add('language-' + language);
  			},

  			/**
  			 * Returns the script element that is currently executing.
  			 *
  			 * This does __not__ work for line script element.
  			 *
  			 * @returns {HTMLScriptElement | null}
  			 */
  			currentScript: function () {
  				if (typeof document === 'undefined') {
  					return null;
  				}
  				if ('currentScript' in document && 1 < 2 /* hack to trip TS' flow analysis */) {
  					return /** @type {any} */ (document.currentScript);
  				}

  				// IE11 workaround
  				// we'll get the src of the current script by parsing IE11's error stack trace
  				// this will not work for inline scripts

  				try {
  					throw new Error();
  				} catch (err) {
  					// Get file src url from stack. Specifically works with the format of stack traces in IE.
  					// A stack will look like this:
  					//
  					// Error
  					//    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
  					//    at Global code (http://localhost/components/prism-core.js:606:1)

  					var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
  					if (src) {
  						var scripts = document.getElementsByTagName('script');
  						for (var i in scripts) {
  							if (scripts[i].src == src) {
  								return scripts[i];
  							}
  						}
  					}
  					return null;
  				}
  			},

  			/**
  			 * Returns whether a given class is active for `element`.
  			 *
  			 * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
  			 * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
  			 * given class is just the given class with a `no-` prefix.
  			 *
  			 * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
  			 * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
  			 * ancestors have the given class or the negated version of it, then the default activation will be returned.
  			 *
  			 * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
  			 * version of it, the class is considered active.
  			 *
  			 * @param {Element} element
  			 * @param {string} className
  			 * @param {boolean} [defaultActivation=false]
  			 * @returns {boolean}
  			 */
  			isActive: function (element, className, defaultActivation) {
  				var no = 'no-' + className;

  				while (element) {
  					var classList = element.classList;
  					if (classList.contains(className)) {
  						return true;
  					}
  					if (classList.contains(no)) {
  						return false;
  					}
  					element = element.parentElement;
  				}
  				return !!defaultActivation;
  			}
  		},

  		/**
  		 * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
  		 *
  		 * @namespace
  		 * @memberof Prism
  		 * @public
  		 */
  		languages: {
  			/**
  			 * The grammar for plain, unformatted text.
  			 */
  			plain: plainTextGrammar,
  			plaintext: plainTextGrammar,
  			text: plainTextGrammar,
  			txt: plainTextGrammar,

  			/**
  			 * Creates a deep copy of the language with the given id and appends the given tokens.
  			 *
  			 * If a token in `redef` also appears in the copied language, then the existing token in the copied language
  			 * will be overwritten at its original position.
  			 *
  			 * ## Best practices
  			 *
  			 * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
  			 * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
  			 * understand the language definition because, normally, the order of tokens matters in Prism grammars.
  			 *
  			 * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
  			 * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
  			 *
  			 * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
  			 * @param {Grammar} redef The new tokens to append.
  			 * @returns {Grammar} The new language created.
  			 * @public
  			 * @example
  			 * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
  			 *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
  			 *     // at its original position
  			 *     'comment': { ... },
  			 *     // CSS doesn't have a 'color' token, so this token will be appended
  			 *     'color': /\b(?:red|green|blue)\b/
  			 * });
  			 */
  			extend: function (id, redef) {
  				var lang = _.util.clone(_.languages[id]);

  				for (var key in redef) {
  					lang[key] = redef[key];
  				}

  				return lang;
  			},

  			/**
  			 * Inserts tokens _before_ another token in a language definition or any other grammar.
  			 *
  			 * ## Usage
  			 *
  			 * This helper method makes it easy to modify existing languages. For example, the CSS language definition
  			 * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
  			 * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
  			 * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
  			 * this:
  			 *
  			 * ```js
  			 * Prism.languages.markup.style = {
  			 *     // token
  			 * };
  			 * ```
  			 *
  			 * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
  			 * before existing tokens. For the CSS example above, you would use it like this:
  			 *
  			 * ```js
  			 * Prism.languages.insertBefore('markup', 'cdata', {
  			 *     'style': {
  			 *         // token
  			 *     }
  			 * });
  			 * ```
  			 *
  			 * ## Special cases
  			 *
  			 * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
  			 * will be ignored.
  			 *
  			 * This behavior can be used to insert tokens after `before`:
  			 *
  			 * ```js
  			 * Prism.languages.insertBefore('markup', 'comment', {
  			 *     'comment': Prism.languages.markup.comment,
  			 *     // tokens after 'comment'
  			 * });
  			 * ```
  			 *
  			 * ## Limitations
  			 *
  			 * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
  			 * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
  			 * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
  			 * deleting properties which is necessary to insert at arbitrary positions.
  			 *
  			 * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
  			 * Instead, it will create a new object and replace all references to the target object with the new one. This
  			 * can be done without temporarily deleting properties, so the iteration order is well-defined.
  			 *
  			 * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
  			 * you hold the target object in a variable, then the value of the variable will not change.
  			 *
  			 * ```js
  			 * var oldMarkup = Prism.languages.markup;
  			 * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
  			 *
  			 * assert(oldMarkup !== Prism.languages.markup);
  			 * assert(newMarkup === Prism.languages.markup);
  			 * ```
  			 *
  			 * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
  			 * object to be modified.
  			 * @param {string} before The key to insert before.
  			 * @param {Grammar} insert An object containing the key-value pairs to be inserted.
  			 * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
  			 * object to be modified.
  			 *
  			 * Defaults to `Prism.languages`.
  			 * @returns {Grammar} The new grammar object.
  			 * @public
  			 */
  			insertBefore: function (inside, before, insert, root) {
  				root = root || /** @type {any} */ (_.languages);
  				var grammar = root[inside];
  				/** @type {Grammar} */
  				var ret = {};

  				for (var token in grammar) {
  					if (grammar.hasOwnProperty(token)) {

  						if (token == before) {
  							for (var newToken in insert) {
  								if (insert.hasOwnProperty(newToken)) {
  									ret[newToken] = insert[newToken];
  								}
  							}
  						}

  						// Do not insert token which also occur in insert. See #1525
  						if (!insert.hasOwnProperty(token)) {
  							ret[token] = grammar[token];
  						}
  					}
  				}

  				var old = root[inside];
  				root[inside] = ret;

  				// Update references in other language definitions
  				_.languages.DFS(_.languages, function (key, value) {
  					if (value === old && key != inside) {
  						this[key] = ret;
  					}
  				});

  				return ret;
  			},

  			// Traverse a language definition with Depth First Search
  			DFS: function DFS(o, callback, type, visited) {
  				visited = visited || {};

  				var objId = _.util.objId;

  				for (var i in o) {
  					if (o.hasOwnProperty(i)) {
  						callback.call(o, i, o[i], type || i);

  						var property = o[i];
  						var propertyType = _.util.type(property);

  						if (propertyType === 'Object' && !visited[objId(property)]) {
  							visited[objId(property)] = true;
  							DFS(property, callback, null, visited);
  						} else if (propertyType === 'Array' && !visited[objId(property)]) {
  							visited[objId(property)] = true;
  							DFS(property, callback, i, visited);
  						}
  					}
  				}
  			}
  		},

  		plugins: {},

  		/**
  		 * This is the most high-level function in Prism’s API.
  		 * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
  		 * each one of them.
  		 *
  		 * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
  		 *
  		 * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
  		 * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
  		 * @memberof Prism
  		 * @public
  		 */
  		highlightAll: function (async, callback) {
  			_.highlightAllUnder(document, async, callback);
  		},

  		/**
  		 * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
  		 * {@link Prism.highlightElement} on each one of them.
  		 *
  		 * The following hooks will be run:
  		 * 1. `before-highlightall`
  		 * 2. `before-all-elements-highlight`
  		 * 3. All hooks of {@link Prism.highlightElement} for each element.
  		 *
  		 * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
  		 * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
  		 * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
  		 * @memberof Prism
  		 * @public
  		 */
  		highlightAllUnder: function (container, async, callback) {
  			var env = {
  				callback: callback,
  				container: container,
  				selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
  			};

  			_.hooks.run('before-highlightall', env);

  			env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

  			_.hooks.run('before-all-elements-highlight', env);

  			for (var i = 0, element; (element = env.elements[i++]);) {
  				_.highlightElement(element, async === true, env.callback);
  			}
  		},

  		/**
  		 * Highlights the code inside a single element.
  		 *
  		 * The following hooks will be run:
  		 * 1. `before-sanity-check`
  		 * 2. `before-highlight`
  		 * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
  		 * 4. `before-insert`
  		 * 5. `after-highlight`
  		 * 6. `complete`
  		 *
  		 * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
  		 * the element's language.
  		 *
  		 * @param {Element} element The element containing the code.
  		 * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
  		 * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
  		 * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
  		 * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
  		 *
  		 * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
  		 * asynchronous highlighting to work. You can build your own bundle on the
  		 * [Download page](https://prismjs.com/download.html).
  		 * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
  		 * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
  		 * @memberof Prism
  		 * @public
  		 */
  		highlightElement: function (element, async, callback) {
  			// Find language
  			var language = _.util.getLanguage(element);
  			var grammar = _.languages[language];

  			// Set language on the element, if not present
  			_.util.setLanguage(element, language);

  			// Set language on the parent, for styling
  			var parent = element.parentElement;
  			if (parent && parent.nodeName.toLowerCase() === 'pre') {
  				_.util.setLanguage(parent, language);
  			}

  			var code = element.textContent;

  			var env = {
  				element: element,
  				language: language,
  				grammar: grammar,
  				code: code
  			};

  			function insertHighlightedCode(highlightedCode) {
  				env.highlightedCode = highlightedCode;

  				_.hooks.run('before-insert', env);

  				env.element.innerHTML = env.highlightedCode;

  				_.hooks.run('after-highlight', env);
  				_.hooks.run('complete', env);
  				callback && callback.call(env.element);
  			}

  			_.hooks.run('before-sanity-check', env);

  			// plugins may change/add the parent/element
  			parent = env.element.parentElement;
  			if (parent && parent.nodeName.toLowerCase() === 'pre' && !parent.hasAttribute('tabindex')) {
  				parent.setAttribute('tabindex', '0');
  			}

  			if (!env.code) {
  				_.hooks.run('complete', env);
  				callback && callback.call(env.element);
  				return;
  			}

  			_.hooks.run('before-highlight', env);

  			if (!env.grammar) {
  				insertHighlightedCode(_.util.encode(env.code));
  				return;
  			}

  			if (async && _self.Worker) {
  				var worker = new Worker(_.filename);

  				worker.onmessage = function (evt) {
  					insertHighlightedCode(evt.data);
  				};

  				worker.postMessage(JSON.stringify({
  					language: env.language,
  					code: env.code,
  					immediateClose: true
  				}));
  			} else {
  				insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
  			}
  		},

  		/**
  		 * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
  		 * and the language definitions to use, and returns a string with the HTML produced.
  		 *
  		 * The following hooks will be run:
  		 * 1. `before-tokenize`
  		 * 2. `after-tokenize`
  		 * 3. `wrap`: On each {@link Token}.
  		 *
  		 * @param {string} text A string with the code to be highlighted.
  		 * @param {Grammar} grammar An object containing the tokens to use.
  		 *
  		 * Usually a language definition like `Prism.languages.markup`.
  		 * @param {string} language The name of the language definition passed to `grammar`.
  		 * @returns {string} The highlighted HTML.
  		 * @memberof Prism
  		 * @public
  		 * @example
  		 * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
  		 */
  		highlight: function (text, grammar, language) {
  			var env = {
  				code: text,
  				grammar: grammar,
  				language: language
  			};
  			_.hooks.run('before-tokenize', env);
  			env.tokens = _.tokenize(env.code, env.grammar);
  			_.hooks.run('after-tokenize', env);
  			return Token.stringify(_.util.encode(env.tokens), env.language);
  		},

  		/**
  		 * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
  		 * and the language definitions to use, and returns an array with the tokenized code.
  		 *
  		 * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
  		 *
  		 * This method could be useful in other contexts as well, as a very crude parser.
  		 *
  		 * @param {string} text A string with the code to be highlighted.
  		 * @param {Grammar} grammar An object containing the tokens to use.
  		 *
  		 * Usually a language definition like `Prism.languages.markup`.
  		 * @returns {TokenStream} An array of strings and tokens, a token stream.
  		 * @memberof Prism
  		 * @public
  		 * @example
  		 * let code = `var foo = 0;`;
  		 * let tokens = Prism.tokenize(code, Prism.languages.javascript);
  		 * tokens.forEach(token => {
  		 *     if (token instanceof Prism.Token && token.type === 'number') {
  		 *         console.log(`Found numeric literal: ${token.content}`);
  		 *     }
  		 * });
  		 */
  		tokenize: function (text, grammar) {
  			var rest = grammar.rest;
  			if (rest) {
  				for (var token in rest) {
  					grammar[token] = rest[token];
  				}

  				delete grammar.rest;
  			}

  			var tokenList = new LinkedList();
  			addAfter(tokenList, tokenList.head, text);

  			matchGrammar(text, tokenList, grammar, tokenList.head, 0);

  			return toArray(tokenList);
  		},

  		/**
  		 * @namespace
  		 * @memberof Prism
  		 * @public
  		 */
  		hooks: {
  			all: {},

  			/**
  			 * Adds the given callback to the list of callbacks for the given hook.
  			 *
  			 * The callback will be invoked when the hook it is registered for is run.
  			 * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
  			 *
  			 * One callback function can be registered to multiple hooks and the same hook multiple times.
  			 *
  			 * @param {string} name The name of the hook.
  			 * @param {HookCallback} callback The callback function which is given environment variables.
  			 * @public
  			 */
  			add: function (name, callback) {
  				var hooks = _.hooks.all;

  				hooks[name] = hooks[name] || [];

  				hooks[name].push(callback);
  			},

  			/**
  			 * Runs a hook invoking all registered callbacks with the given environment variables.
  			 *
  			 * Callbacks will be invoked synchronously and in the order in which they were registered.
  			 *
  			 * @param {string} name The name of the hook.
  			 * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
  			 * @public
  			 */
  			run: function (name, env) {
  				var callbacks = _.hooks.all[name];

  				if (!callbacks || !callbacks.length) {
  					return;
  				}

  				for (var i = 0, callback; (callback = callbacks[i++]);) {
  					callback(env);
  				}
  			}
  		},

  		Token: Token
  	};
  	_self.Prism = _;


  	// Typescript note:
  	// The following can be used to import the Token type in JSDoc:
  	//
  	//   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

  	/**
  	 * Creates a new token.
  	 *
  	 * @param {string} type See {@link Token#type type}
  	 * @param {string | TokenStream} content See {@link Token#content content}
  	 * @param {string|string[]} [alias] The alias(es) of the token.
  	 * @param {string} [matchedStr=""] A copy of the full string this token was created from.
  	 * @class
  	 * @global
  	 * @public
  	 */
  	function Token(type, content, alias, matchedStr) {
  		/**
  		 * The type of the token.
  		 *
  		 * This is usually the key of a pattern in a {@link Grammar}.
  		 *
  		 * @type {string}
  		 * @see GrammarToken
  		 * @public
  		 */
  		this.type = type;
  		/**
  		 * The strings or tokens contained by this token.
  		 *
  		 * This will be a token stream if the pattern matched also defined an `inside` grammar.
  		 *
  		 * @type {string | TokenStream}
  		 * @public
  		 */
  		this.content = content;
  		/**
  		 * The alias(es) of the token.
  		 *
  		 * @type {string|string[]}
  		 * @see GrammarToken
  		 * @public
  		 */
  		this.alias = alias;
  		// Copy of the full string this token was created from
  		this.length = (matchedStr || '').length | 0;
  	}

  	/**
  	 * A token stream is an array of strings and {@link Token Token} objects.
  	 *
  	 * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
  	 * them.
  	 *
  	 * 1. No adjacent strings.
  	 * 2. No empty strings.
  	 *
  	 *    The only exception here is the token stream that only contains the empty string and nothing else.
  	 *
  	 * @typedef {Array<string | Token>} TokenStream
  	 * @global
  	 * @public
  	 */

  	/**
  	 * Converts the given token or token stream to an HTML representation.
  	 *
  	 * The following hooks will be run:
  	 * 1. `wrap`: On each {@link Token}.
  	 *
  	 * @param {string | Token | TokenStream} o The token or token stream to be converted.
  	 * @param {string} language The name of current language.
  	 * @returns {string} The HTML representation of the token or token stream.
  	 * @memberof Token
  	 * @static
  	 */
  	Token.stringify = function stringify(o, language) {
  		if (typeof o == 'string') {
  			return o;
  		}
  		if (Array.isArray(o)) {
  			var s = '';
  			o.forEach(function (e) {
  				s += stringify(e, language);
  			});
  			return s;
  		}

  		var env = {
  			type: o.type,
  			content: stringify(o.content, language),
  			tag: 'span',
  			classes: ['token', o.type],
  			attributes: {},
  			language: language
  		};

  		var aliases = o.alias;
  		if (aliases) {
  			if (Array.isArray(aliases)) {
  				Array.prototype.push.apply(env.classes, aliases);
  			} else {
  				env.classes.push(aliases);
  			}
  		}

  		_.hooks.run('wrap', env);

  		var attributes = '';
  		for (var name in env.attributes) {
  			attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
  		}

  		return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
  	};

  	/**
  	 * @param {RegExp} pattern
  	 * @param {number} pos
  	 * @param {string} text
  	 * @param {boolean} lookbehind
  	 * @returns {RegExpExecArray | null}
  	 */
  	function matchPattern(pattern, pos, text, lookbehind) {
  		pattern.lastIndex = pos;
  		var match = pattern.exec(text);
  		if (match && lookbehind && match[1]) {
  			// change the match to remove the text matched by the Prism lookbehind group
  			var lookbehindLength = match[1].length;
  			match.index += lookbehindLength;
  			match[0] = match[0].slice(lookbehindLength);
  		}
  		return match;
  	}

  	/**
  	 * @param {string} text
  	 * @param {LinkedList<string | Token>} tokenList
  	 * @param {any} grammar
  	 * @param {LinkedListNode<string | Token>} startNode
  	 * @param {number} startPos
  	 * @param {RematchOptions} [rematch]
  	 * @returns {void}
  	 * @private
  	 *
  	 * @typedef RematchOptions
  	 * @property {string} cause
  	 * @property {number} reach
  	 */
  	function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
  		for (var token in grammar) {
  			if (!grammar.hasOwnProperty(token) || !grammar[token]) {
  				continue;
  			}

  			var patterns = grammar[token];
  			patterns = Array.isArray(patterns) ? patterns : [patterns];

  			for (var j = 0; j < patterns.length; ++j) {
  				if (rematch && rematch.cause == token + ',' + j) {
  					return;
  				}

  				var patternObj = patterns[j];
  				var inside = patternObj.inside;
  				var lookbehind = !!patternObj.lookbehind;
  				var greedy = !!patternObj.greedy;
  				var alias = patternObj.alias;

  				if (greedy && !patternObj.pattern.global) {
  					// Without the global flag, lastIndex won't work
  					var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
  					patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
  				}

  				/** @type {RegExp} */
  				var pattern = patternObj.pattern || patternObj;

  				for ( // iterate the token list and keep track of the current token/string position
  					var currentNode = startNode.next, pos = startPos;
  					currentNode !== tokenList.tail;
  					pos += currentNode.value.length, currentNode = currentNode.next
  				) {

  					if (rematch && pos >= rematch.reach) {
  						break;
  					}

  					var str = currentNode.value;

  					if (tokenList.length > text.length) {
  						// Something went terribly wrong, ABORT, ABORT!
  						return;
  					}

  					if (str instanceof Token) {
  						continue;
  					}

  					var removeCount = 1; // this is the to parameter of removeBetween
  					var match;

  					if (greedy) {
  						match = matchPattern(pattern, pos, text, lookbehind);
  						if (!match || match.index >= text.length) {
  							break;
  						}

  						var from = match.index;
  						var to = match.index + match[0].length;
  						var p = pos;

  						// find the node that contains the match
  						p += currentNode.value.length;
  						while (from >= p) {
  							currentNode = currentNode.next;
  							p += currentNode.value.length;
  						}
  						// adjust pos (and p)
  						p -= currentNode.value.length;
  						pos = p;

  						// the current node is a Token, then the match starts inside another Token, which is invalid
  						if (currentNode.value instanceof Token) {
  							continue;
  						}

  						// find the last node which is affected by this match
  						for (
  							var k = currentNode;
  							k !== tokenList.tail && (p < to || typeof k.value === 'string');
  							k = k.next
  						) {
  							removeCount++;
  							p += k.value.length;
  						}
  						removeCount--;

  						// replace with the new match
  						str = text.slice(pos, p);
  						match.index -= pos;
  					} else {
  						match = matchPattern(pattern, 0, str, lookbehind);
  						if (!match) {
  							continue;
  						}
  					}

  					// eslint-disable-next-line no-redeclare
  					var from = match.index;
  					var matchStr = match[0];
  					var before = str.slice(0, from);
  					var after = str.slice(from + matchStr.length);

  					var reach = pos + str.length;
  					if (rematch && reach > rematch.reach) {
  						rematch.reach = reach;
  					}

  					var removeFrom = currentNode.prev;

  					if (before) {
  						removeFrom = addAfter(tokenList, removeFrom, before);
  						pos += before.length;
  					}

  					removeRange(tokenList, removeFrom, removeCount);

  					var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
  					currentNode = addAfter(tokenList, removeFrom, wrapped);

  					if (after) {
  						addAfter(tokenList, currentNode, after);
  					}

  					if (removeCount > 1) {
  						// at least one Token object was removed, so we have to do some rematching
  						// this can only happen if the current pattern is greedy

  						/** @type {RematchOptions} */
  						var nestedRematch = {
  							cause: token + ',' + j,
  							reach: reach
  						};
  						matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);

  						// the reach might have been extended because of the rematching
  						if (rematch && nestedRematch.reach > rematch.reach) {
  							rematch.reach = nestedRematch.reach;
  						}
  					}
  				}
  			}
  		}
  	}

  	/**
  	 * @typedef LinkedListNode
  	 * @property {T} value
  	 * @property {LinkedListNode<T> | null} prev The previous node.
  	 * @property {LinkedListNode<T> | null} next The next node.
  	 * @template T
  	 * @private
  	 */

  	/**
  	 * @template T
  	 * @private
  	 */
  	function LinkedList() {
  		/** @type {LinkedListNode<T>} */
  		var head = { value: null, prev: null, next: null };
  		/** @type {LinkedListNode<T>} */
  		var tail = { value: null, prev: head, next: null };
  		head.next = tail;

  		/** @type {LinkedListNode<T>} */
  		this.head = head;
  		/** @type {LinkedListNode<T>} */
  		this.tail = tail;
  		this.length = 0;
  	}

  	/**
  	 * Adds a new node with the given value to the list.
  	 *
  	 * @param {LinkedList<T>} list
  	 * @param {LinkedListNode<T>} node
  	 * @param {T} value
  	 * @returns {LinkedListNode<T>} The added node.
  	 * @template T
  	 */
  	function addAfter(list, node, value) {
  		// assumes that node != list.tail && values.length >= 0
  		var next = node.next;

  		var newNode = { value: value, prev: node, next: next };
  		node.next = newNode;
  		next.prev = newNode;
  		list.length++;

  		return newNode;
  	}
  	/**
  	 * Removes `count` nodes after the given node. The given node will not be removed.
  	 *
  	 * @param {LinkedList<T>} list
  	 * @param {LinkedListNode<T>} node
  	 * @param {number} count
  	 * @template T
  	 */
  	function removeRange(list, node, count) {
  		var next = node.next;
  		for (var i = 0; i < count && next !== list.tail; i++) {
  			next = next.next;
  		}
  		node.next = next;
  		next.prev = node;
  		list.length -= i;
  	}
  	/**
  	 * @param {LinkedList<T>} list
  	 * @returns {T[]}
  	 * @template T
  	 */
  	function toArray(list) {
  		var array = [];
  		var node = list.head.next;
  		while (node !== list.tail) {
  			array.push(node.value);
  			node = node.next;
  		}
  		return array;
  	}


  	if (!_self.document) {
  		if (!_self.addEventListener) {
  			// in Node.js
  			return _;
  		}

  		if (!_.disableWorkerMessageHandler) {
  			// In worker
  			_self.addEventListener('message', function (evt) {
  				var message = JSON.parse(evt.data);
  				var lang = message.language;
  				var code = message.code;
  				var immediateClose = message.immediateClose;

  				_self.postMessage(_.highlight(code, _.languages[lang], lang));
  				if (immediateClose) {
  					_self.close();
  				}
  			}, false);
  		}

  		return _;
  	}

  	// Get current script and highlight
  	var script = _.util.currentScript();

  	if (script) {
  		_.filename = script.src;

  		if (script.hasAttribute('data-manual')) {
  			_.manual = true;
  		}
  	}

  	function highlightAutomaticallyCallback() {
  		if (!_.manual) {
  			_.highlightAll();
  		}
  	}

  	if (!_.manual) {
  		// If the document state is "loading", then we'll use DOMContentLoaded.
  		// If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
  		// DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
  		// might take longer one animation frame to execute which can create a race condition where only some plugins have
  		// been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
  		// See https://github.com/PrismJS/prism/issues/2102
  		var readyState = document.readyState;
  		if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
  			document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
  		} else {
  			if (window.requestAnimationFrame) {
  				window.requestAnimationFrame(highlightAutomaticallyCallback);
  			} else {
  				window.setTimeout(highlightAutomaticallyCallback, 16);
  			}
  		}
  	}

  	return _;

  }(_self));

  if (module.exports) {
  	module.exports = Prism;
  }

  // hack for components to work correctly in node.js
  if (typeof commonjsGlobal !== 'undefined') {
  	commonjsGlobal.Prism = Prism;
  }

  // some additional documentation/types

  /**
   * The expansion of a simple `RegExp` literal to support additional properties.
   *
   * @typedef GrammarToken
   * @property {RegExp} pattern The regular expression of the token.
   * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
   * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
   * @property {boolean} [greedy=false] Whether the token is greedy.
   * @property {string|string[]} [alias] An optional alias or list of aliases.
   * @property {Grammar} [inside] The nested grammar of this token.
   *
   * The `inside` grammar will be used to tokenize the text value of each token of this kind.
   *
   * This can be used to make nested and even recursive language definitions.
   *
   * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
   * each another.
   * @global
   * @public
   */

  /**
   * @typedef Grammar
   * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
   * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
   * @global
   * @public
   */

  /**
   * A function which will invoked after an element was successfully highlighted.
   *
   * @callback HighlightCallback
   * @param {Element} element The element successfully highlighted.
   * @returns {void}
   * @global
   * @public
   */

  /**
   * @callback HookCallback
   * @param {Object<string, any>} env The environment variables of the hook.
   * @returns {void}
   * @global
   * @public
   */


  /* **********************************************
       Begin prism-markup.js
  ********************************************** */

  Prism.languages.markup = {
  	'comment': {
  		pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
  		greedy: true
  	},
  	'prolog': {
  		pattern: /<\?[\s\S]+?\?>/,
  		greedy: true
  	},
  	'doctype': {
  		// https://www.w3.org/TR/xml/#NT-doctypedecl
  		pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
  		greedy: true,
  		inside: {
  			'internal-subset': {
  				pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
  				lookbehind: true,
  				greedy: true,
  				inside: null // see below
  			},
  			'string': {
  				pattern: /"[^"]*"|'[^']*'/,
  				greedy: true
  			},
  			'punctuation': /^<!|>$|[[\]]/,
  			'doctype-tag': /^DOCTYPE/i,
  			'name': /[^\s<>'"]+/
  		}
  	},
  	'cdata': {
  		pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
  		greedy: true
  	},
  	'tag': {
  		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
  		greedy: true,
  		inside: {
  			'tag': {
  				pattern: /^<\/?[^\s>\/]+/,
  				inside: {
  					'punctuation': /^<\/?/,
  					'namespace': /^[^\s>\/:]+:/
  				}
  			},
  			'special-attr': [],
  			'attr-value': {
  				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
  				inside: {
  					'punctuation': [
  						{
  							pattern: /^=/,
  							alias: 'attr-equals'
  						},
  						/"|'/
  					]
  				}
  			},
  			'punctuation': /\/?>/,
  			'attr-name': {
  				pattern: /[^\s>\/]+/,
  				inside: {
  					'namespace': /^[^\s>\/:]+:/
  				}
  			}

  		}
  	},
  	'entity': [
  		{
  			pattern: /&[\da-z]{1,8};/i,
  			alias: 'named-entity'
  		},
  		/&#x?[\da-f]{1,8};/i
  	]
  };

  Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
  	Prism.languages.markup['entity'];
  Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup;

  // Plugin to make entity title show the real entity, idea by Roman Komarov
  Prism.hooks.add('wrap', function (env) {

  	if (env.type === 'entity') {
  		env.attributes['title'] = env.content.replace(/&amp;/, '&');
  	}
  });

  Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
  	/**
  	 * Adds an inlined language to markup.
  	 *
  	 * An example of an inlined language is CSS with `<style>` tags.
  	 *
  	 * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
  	 * case insensitive.
  	 * @param {string} lang The language key.
  	 * @example
  	 * addInlined('style', 'css');
  	 */
  	value: function addInlined(tagName, lang) {
  		var includedCdataInside = {};
  		includedCdataInside['language-' + lang] = {
  			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
  			lookbehind: true,
  			inside: Prism.languages[lang]
  		};
  		includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;

  		var inside = {
  			'included-cdata': {
  				pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
  				inside: includedCdataInside
  			}
  		};
  		inside['language-' + lang] = {
  			pattern: /[\s\S]+/,
  			inside: Prism.languages[lang]
  		};

  		var def = {};
  		def[tagName] = {
  			pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () { return tagName; }), 'i'),
  			lookbehind: true,
  			greedy: true,
  			inside: inside
  		};

  		Prism.languages.insertBefore('markup', 'cdata', def);
  	}
  });
  Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
  	/**
  	 * Adds an pattern to highlight languages embedded in HTML attributes.
  	 *
  	 * An example of an inlined language is CSS with `style` attributes.
  	 *
  	 * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
  	 * case insensitive.
  	 * @param {string} lang The language key.
  	 * @example
  	 * addAttribute('style', 'css');
  	 */
  	value: function (attrName, lang) {
  		Prism.languages.markup.tag.inside['special-attr'].push({
  			pattern: RegExp(
  				/(^|["'\s])/.source + '(?:' + attrName + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
  				'i'
  			),
  			lookbehind: true,
  			inside: {
  				'attr-name': /^[^\s=]+/,
  				'attr-value': {
  					pattern: /=[\s\S]+/,
  					inside: {
  						'value': {
  							pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
  							lookbehind: true,
  							alias: [lang, 'language-' + lang],
  							inside: Prism.languages[lang]
  						},
  						'punctuation': [
  							{
  								pattern: /^=/,
  								alias: 'attr-equals'
  							},
  							/"|'/
  						]
  					}
  				}
  			}
  		});
  	}
  });

  Prism.languages.html = Prism.languages.markup;
  Prism.languages.mathml = Prism.languages.markup;
  Prism.languages.svg = Prism.languages.markup;

  Prism.languages.xml = Prism.languages.extend('markup', {});
  Prism.languages.ssml = Prism.languages.xml;
  Prism.languages.atom = Prism.languages.xml;
  Prism.languages.rss = Prism.languages.xml;


  /* **********************************************
       Begin prism-css.js
  ********************************************** */

  (function (Prism) {

  	var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;

  	Prism.languages.css = {
  		'comment': /\/\*[\s\S]*?\*\//,
  		'atrule': {
  			pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
  			inside: {
  				'rule': /^@[\w-]+/,
  				'selector-function-argument': {
  					pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
  					lookbehind: true,
  					alias: 'selector'
  				},
  				'keyword': {
  					pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
  					lookbehind: true
  				}
  				// See rest below
  			}
  		},
  		'url': {
  			// https://drafts.csswg.org/css-values-3/#urls
  			pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
  			greedy: true,
  			inside: {
  				'function': /^url/i,
  				'punctuation': /^\(|\)$/,
  				'string': {
  					pattern: RegExp('^' + string.source + '$'),
  					alias: 'url'
  				}
  			}
  		},
  		'selector': {
  			pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
  			lookbehind: true
  		},
  		'string': {
  			pattern: string,
  			greedy: true
  		},
  		'property': {
  			pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
  			lookbehind: true
  		},
  		'important': /!important\b/i,
  		'function': {
  			pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
  			lookbehind: true
  		},
  		'punctuation': /[(){};:,]/
  	};

  	Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

  	var markup = Prism.languages.markup;
  	if (markup) {
  		markup.tag.addInlined('style', 'css');
  		markup.tag.addAttribute('style', 'css');
  	}

  }(Prism));


  /* **********************************************
       Begin prism-clike.js
  ********************************************** */

  Prism.languages.clike = {
  	'comment': [
  		{
  			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
  			lookbehind: true,
  			greedy: true
  		},
  		{
  			pattern: /(^|[^\\:])\/\/.*/,
  			lookbehind: true,
  			greedy: true
  		}
  	],
  	'string': {
  		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
  		greedy: true
  	},
  	'class-name': {
  		pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
  		lookbehind: true,
  		inside: {
  			'punctuation': /[.\\]/
  		}
  	},
  	'keyword': /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
  	'boolean': /\b(?:false|true)\b/,
  	'function': /\b\w+(?=\()/,
  	'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  	'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  	'punctuation': /[{}[\];(),.:]/
  };


  /* **********************************************
       Begin prism-javascript.js
  ********************************************** */

  Prism.languages.javascript = Prism.languages.extend('clike', {
  	'class-name': [
  		Prism.languages.clike['class-name'],
  		{
  			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
  			lookbehind: true
  		}
  	],
  	'keyword': [
  		{
  			pattern: /((?:^|\})\s*)catch\b/,
  			lookbehind: true
  		},
  		{
  			pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
  			lookbehind: true
  		},
  	],
  	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  	'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  	'number': {
  		pattern: RegExp(
  			/(^|[^\w$])/.source +
  			'(?:' +
  			(
  				// constant
  				/NaN|Infinity/.source +
  				'|' +
  				// binary integer
  				/0[bB][01]+(?:_[01]+)*n?/.source +
  				'|' +
  				// octal integer
  				/0[oO][0-7]+(?:_[0-7]+)*n?/.source +
  				'|' +
  				// hexadecimal integer
  				/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
  				'|' +
  				// decimal bigint
  				/\d+(?:_\d+)*n/.source +
  				'|' +
  				// decimal number (integer or float) but no bigint
  				/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source
  			) +
  			')' +
  			/(?![\w$])/.source
  		),
  		lookbehind: true
  	},
  	'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  });

  Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;

  Prism.languages.insertBefore('javascript', 'keyword', {
  	'regex': {
  		// eslint-disable-next-line regexp/no-dupe-characters-character-class
  		pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
  		lookbehind: true,
  		greedy: true,
  		inside: {
  			'regex-source': {
  				pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
  				lookbehind: true,
  				alias: 'language-regex',
  				inside: Prism.languages.regex
  			},
  			'regex-delimiter': /^\/|\/$/,
  			'regex-flags': /^[a-z]+$/,
  		}
  	},
  	// This must be declared before keyword because we use "function" inside the look-forward
  	'function-variable': {
  		pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
  		alias: 'function'
  	},
  	'parameter': [
  		{
  			pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
  			lookbehind: true,
  			inside: Prism.languages.javascript
  		},
  		{
  			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
  			lookbehind: true,
  			inside: Prism.languages.javascript
  		},
  		{
  			pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
  			lookbehind: true,
  			inside: Prism.languages.javascript
  		},
  		{
  			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
  			lookbehind: true,
  			inside: Prism.languages.javascript
  		}
  	],
  	'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  });

  Prism.languages.insertBefore('javascript', 'string', {
  	'hashbang': {
  		pattern: /^#!.*/,
  		greedy: true,
  		alias: 'comment'
  	},
  	'template-string': {
  		pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
  		greedy: true,
  		inside: {
  			'template-punctuation': {
  				pattern: /^`|`$/,
  				alias: 'string'
  			},
  			'interpolation': {
  				pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
  				lookbehind: true,
  				inside: {
  					'interpolation-punctuation': {
  						pattern: /^\$\{|\}$/,
  						alias: 'punctuation'
  					},
  					rest: Prism.languages.javascript
  				}
  			},
  			'string': /[\s\S]+/
  		}
  	},
  	'string-property': {
  		pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
  		lookbehind: true,
  		greedy: true,
  		alias: 'property'
  	}
  });

  Prism.languages.insertBefore('javascript', 'operator', {
  	'literal-property': {
  		pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
  		lookbehind: true,
  		alias: 'property'
  	},
  });

  if (Prism.languages.markup) {
  	Prism.languages.markup.tag.addInlined('script', 'javascript');

  	// add attribute support for all DOM events.
  	// https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events
  	Prism.languages.markup.tag.addAttribute(
  		/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
  		'javascript'
  	);
  }

  Prism.languages.js = Prism.languages.javascript;


  /* **********************************************
       Begin prism-file-highlight.js
  ********************************************** */

  (function () {

  	if (typeof Prism === 'undefined' || typeof document === 'undefined') {
  		return;
  	}

  	// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
  	if (!Element.prototype.matches) {
  		Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  	}

  	var LOADING_MESSAGE = 'Loading…';
  	var FAILURE_MESSAGE = function (status, message) {
  		return '✖ Error ' + status + ' while fetching file: ' + message;
  	};
  	var FAILURE_EMPTY_MESSAGE = '✖ Error: File does not exist or is empty';

  	var EXTENSIONS = {
  		'js': 'javascript',
  		'py': 'python',
  		'rb': 'ruby',
  		'ps1': 'powershell',
  		'psm1': 'powershell',
  		'sh': 'bash',
  		'bat': 'batch',
  		'h': 'c',
  		'tex': 'latex'
  	};

  	var STATUS_ATTR = 'data-src-status';
  	var STATUS_LOADING = 'loading';
  	var STATUS_LOADED = 'loaded';
  	var STATUS_FAILED = 'failed';

  	var SELECTOR = 'pre[data-src]:not([' + STATUS_ATTR + '="' + STATUS_LOADED + '"])'
  		+ ':not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';

  	/**
  	 * Loads the given file.
  	 *
  	 * @param {string} src The URL or path of the source file to load.
  	 * @param {(result: string) => void} success
  	 * @param {(reason: string) => void} error
  	 */
  	function loadFile(src, success, error) {
  		var xhr = new XMLHttpRequest();
  		xhr.open('GET', src, true);
  		xhr.onreadystatechange = function () {
  			if (xhr.readyState == 4) {
  				if (xhr.status < 400 && xhr.responseText) {
  					success(xhr.responseText);
  				} else {
  					if (xhr.status >= 400) {
  						error(FAILURE_MESSAGE(xhr.status, xhr.statusText));
  					} else {
  						error(FAILURE_EMPTY_MESSAGE);
  					}
  				}
  			}
  		};
  		xhr.send(null);
  	}

  	/**
  	 * Parses the given range.
  	 *
  	 * This returns a range with inclusive ends.
  	 *
  	 * @param {string | null | undefined} range
  	 * @returns {[number, number | undefined] | undefined}
  	 */
  	function parseRange(range) {
  		var m = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(range || '');
  		if (m) {
  			var start = Number(m[1]);
  			var comma = m[2];
  			var end = m[3];

  			if (!comma) {
  				return [start, start];
  			}
  			if (!end) {
  				return [start, undefined];
  			}
  			return [start, Number(end)];
  		}
  		return undefined;
  	}

  	Prism.hooks.add('before-highlightall', function (env) {
  		env.selector += ', ' + SELECTOR;
  	});

  	Prism.hooks.add('before-sanity-check', function (env) {
  		var pre = /** @type {HTMLPreElement} */ (env.element);
  		if (pre.matches(SELECTOR)) {
  			env.code = ''; // fast-path the whole thing and go to complete

  			pre.setAttribute(STATUS_ATTR, STATUS_LOADING); // mark as loading

  			// add code element with loading message
  			var code = pre.appendChild(document.createElement('CODE'));
  			code.textContent = LOADING_MESSAGE;

  			var src = pre.getAttribute('data-src');

  			var language = env.language;
  			if (language === 'none') {
  				// the language might be 'none' because there is no language set;
  				// in this case, we want to use the extension as the language
  				var extension = (/\.(\w+)$/.exec(src) || [, 'none'])[1];
  				language = EXTENSIONS[extension] || extension;
  			}

  			// set language classes
  			Prism.util.setLanguage(code, language);
  			Prism.util.setLanguage(pre, language);

  			// preload the language
  			var autoloader = Prism.plugins.autoloader;
  			if (autoloader) {
  				autoloader.loadLanguages(language);
  			}

  			// load file
  			loadFile(
  				src,
  				function (text) {
  					// mark as loaded
  					pre.setAttribute(STATUS_ATTR, STATUS_LOADED);

  					// handle data-range
  					var range = parseRange(pre.getAttribute('data-range'));
  					if (range) {
  						var lines = text.split(/\r\n?|\n/g);

  						// the range is one-based and inclusive on both ends
  						var start = range[0];
  						var end = range[1] == null ? lines.length : range[1];

  						if (start < 0) { start += lines.length; }
  						start = Math.max(0, Math.min(start - 1, lines.length));
  						if (end < 0) { end += lines.length; }
  						end = Math.max(0, Math.min(end, lines.length));

  						text = lines.slice(start, end).join('\n');

  						// add data-start for line numbers
  						if (!pre.hasAttribute('data-start')) {
  							pre.setAttribute('data-start', String(start + 1));
  						}
  					}

  					// highlight code
  					code.textContent = text;
  					Prism.highlightElement(code);
  				},
  				function (error) {
  					// mark as failed
  					pre.setAttribute(STATUS_ATTR, STATUS_FAILED);

  					code.textContent = error;
  				}
  			);
  		}
  	});

  	Prism.plugins.fileHighlight = {
  		/**
  		 * Executes the File Highlight plugin for all matching `pre` elements under the given container.
  		 *
  		 * Note: Elements which are already loaded or currently loading will not be touched by this method.
  		 *
  		 * @param {ParentNode} [container=document]
  		 */
  		highlight: function highlight(container) {
  			var elements = (container || document).querySelectorAll(SELECTOR);

  			for (var i = 0, element; (element = elements[i++]);) {
  				Prism.highlightElement(element);
  			}
  		}
  	};

  	var logged = false;
  	/** @deprecated Use `Prism.plugins.fileHighlight.highlight` instead. */
  	Prism.fileHighlight = function () {
  		if (!logged) {
  			console.warn('Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.');
  			logged = true;
  		}
  		Prism.plugins.fileHighlight.highlight.apply(this, arguments);
  	};

  }());
  }(prism));

  var Prism = prism.exports;

  function prismHighlight (Prism, str, lang) {
    if (lang === '') {
      lang = 'js'; // default language
    }
    else if (lang === 'vue') {
      lang = 'html';
    }

    if (Prism.languages[lang] !== void 0) {
      const code = Prism.highlight(str, Prism.languages[lang], lang);

      return `<pre class="q-markdown--code q-markdown--code__inner language-${lang}">` +
        `<code>${code}</code></pre>\n`
    }

    return ''
  }

  function extendBlockQuote (md) {
    md.renderer.rules.blockquote_open = (tokens, idx, options, env, self) => {
      const token = tokens[idx];

      token.attrSet('class', 'q-markdown--note');
      return self.renderToken(tokens, idx, options)
    };
  }

  // Process block-level custom containers
  //

  function containerPlugin (md, name, options) {
    function validateDefault (params) {
      return params.trim().split(' ', 2)[0] === name
    }

    function renderDefault (tokens, idx, _options, env, self) {
      // add a class to the opening tag
      if (tokens[idx].nesting === 1) {
        tokens[idx].attrPush(['class', name]);
      }

      return self.renderToken(tokens, idx, _options, env, self)
    }

    options = options || {};

    var minMarkers = 3,
      markerStr = options.marker || ':',
      markerChar = markerStr.charCodeAt(0),
      markerLen = markerStr.length,
      validate = options.validate || validateDefault,
      render = options.render || renderDefault;

    function container (state, startLine, endLine, silent) {
      var pos, nextLine, markerCount, markup, params, token,
        oldParent, oldLineMax,
        autoClosed = false,
        start = state.bMarks[startLine] + state.tShift[startLine],
        max = state.eMarks[startLine];

      // Check out the first character quickly,
      // this should filter out most of non-containers
      //
      if (markerChar !== state.src.charCodeAt(start)) { return false }

      // Check out the rest of the marker string
      //
      for (pos = start + 1; pos <= max; pos++) {
        if (markerStr[(pos - start) % markerLen] !== state.src[pos]) {
          break
        }
      }

      markerCount = Math.floor((pos - start) / markerLen);
      if (markerCount < minMarkers) { return false }
      pos -= (pos - start) % markerLen;

      markup = state.src.slice(start, pos);
      params = state.src.slice(pos, max);
      if (!validate(params)) { return false }

      // Since start is found, we can report success here in validation mode
      //
      if (silent) { return true }

      // Search for the end of the block
      //
      nextLine = startLine;

      for (;;) {
        nextLine++;
        if (nextLine >= endLine) {
          // unclosed block should be autoclosed by end of document.
          // also block seems to be autoclosed by end of parent
          break
        }

        start = state.bMarks[nextLine] + state.tShift[nextLine];
        max = state.eMarks[nextLine];

        if (start < max && state.sCount[nextLine] < state.blkIndent) {
          // non-empty line with negative indent should stop the list:
          // - ```
          //  test
          break
        }

        if (markerChar !== state.src.charCodeAt(start)) { continue }

        if (state.sCount[nextLine] - state.blkIndent >= 4) {
          // closing fence should be indented less than 4 spaces
          continue
        }

        for (pos = start + 1; pos <= max; pos++) {
          if (markerStr[(pos - start) % markerLen] !== state.src[pos]) {
            break
          }
        }

        // closing code fence must be at least as long as the opening one
        if (Math.floor((pos - start) / markerLen) < markerCount) { continue }

        // make sure tail has spaces only
        pos -= (pos - start) % markerLen;
        pos = state.skipSpaces(pos);

        if (pos < max) { continue }

        // found!
        autoClosed = true;
        break
      }

      oldParent = state.parentType;
      oldLineMax = state.lineMax;
      state.parentType = 'container';

      // this will prevent lazy continuations from ever going past our end marker
      state.lineMax = nextLine;

      token = state.push('container_' + name + '_open', 'div', 1);
      token.markup = markup;
      token.block = true;
      token.info = params;
      token.map = [startLine, nextLine];

      state.md.block.tokenize(state, startLine + 1, nextLine);

      token = state.push('container_' + name + '_close', 'div', -1);
      token.markup = state.src.slice(start, pos);
      token.block = true;

      state.parentType = oldParent;
      state.lineMax = oldLineMax;
      state.line = nextLine + (autoClosed ? 1 : 0);

      return true
    }

    md.block.ruler.before('fence', 'container_' + name, container, {
      alt: ['paragraph', 'reference', 'blockquote', 'list']
    });
    md.renderer.rules['container_' + name + '_open'] = render;
    md.renderer.rules['container_' + name + '_close'] = render;
  }

  // import container from 'markdown-it-container'

  function createContainer (className, defaultTitle) {
    return [
      containerPlugin,
      className,
      {
        render (tokens, idx) {
          const token = tokens[idx];
          const info = token.info.trim().slice(className.length).trim();
          if (token.nesting === 1) {
            return `<div class="q-markdown--note q-markdown--note--${className}"><p class="q-markdown--note-title">${info || defaultTitle}</p>\n`
          }
          else {
            return '</div>\n'
          }
        }
      }
    ]
  }

  function extendContainers (md) {
    md.use(...createContainer('info', 'INFO'));
    md.use(...createContainer('tip', 'TIP'));
    md.use(...createContainer('warning', 'WARNING'));
    md.use(...createContainer('danger', 'IMPORTANT'));
    md.use(...createContainer('', ''));

    // explicitly escape Vue syntax
    md.use(containerPlugin, 'v-pre', {
      render: (tokens, idx) => tokens[idx].nesting === 1
        ? '<div v-pre>\n'
        : '</div>\n'
    });
  }

  function slugify (str) {
    return encodeURIComponent(String(str).trim().replace(/\s+/g, '-'))
  }

  function unemoji (TokenConstructor, token) {
    if (token.type === 'emoji') {
      return Object.assign(new TokenConstructor(), token, { content: token.markup })
    }
    return token
  }

  function extendHeading (md, tocData = [], toc = false, tocStart = 1, tocEnd = 3, noHeadingAnchorLinks = false) {
    let Token;
    md.core.ruler.push('headingLinks', function (state) {
      // save the Token constructor because we'll be building a few instances at render
      // time; that's sort of outside the intended markdown-it parsing sequence, but
      // since we have tight control over what we're creating (a link), we're safe
      if (!Token) {
        Token = state.Token;
      }
    });

    md.renderer.rules.heading_open = (tokens, idx, options, env, self) => {
      const token = tokens[idx];

      // get the token number
      const tokenNumber = parseInt(token.tag[1]);

      const children = tokens[idx + 1]
        .children;

      const label = children
        .reduce((acc, t) => acc + t.content, '');

      const classes = [];
      classes.push('q-markdown--heading');
      classes.push(`q-markdown--heading-${token.tag}`);

      if (token.markup === '=') {
        classes.push('q-markdown--title-heavy');
      }
      else if (token.markup === '-') {
        classes.push('q-markdown--title-light');
      }

      if (noHeadingAnchorLinks !== true && tocStart && tocEnd && tocStart <= tocEnd && tokenNumber >= tocStart && tokenNumber <= tocEnd) {
        classes.push('q-markdown--heading--anchor-link');
      }

      const unemojiWithToken = unemoji.bind(null, Token);
      const renderedLabel = md.renderer.renderInline(children.map(unemojiWithToken), options, env);

      const id = slugify(renderedLabel
        .replace(/[<>]/g, '') // In case the heading contains `<stuff>`
        .toLowerCase() // should be lowercase
      );

      token.attrSet('id', id);
      token.attrSet('name', id);
      token.attrSet('class', classes.join(' '));

      if (toc) {
        if (tocStart && tocEnd && tocStart <= tocEnd && tokenNumber >= tocStart && tokenNumber <= tocEnd) {
          tocData.push({ id: id, label: label, level: tokenNumber, children: [] });
        }
      }

      if (noHeadingAnchorLinks !== true && tokenNumber <= tocEnd) {
        // add 3 new token objects link_open, text, link_close
        const linkOpen = new Token('link_open', 'a', 1);
        const text = new Token('html_inline', '', 0);
        if (options.enableHeadingLinkIcons) {
          text.content = options.linkIcon;
        }
        text.content = label;

        const linkClose = new Token('link_close', 'a', -1);

        // add some link attributes
        // linkOpen.attrSet('id', id)
        // linkOpen.attrSet('class', '')
        linkOpen.attrSet('href', '#' + id);
        linkOpen.attrSet('aria-hidden', 'true');

        // remove previous children
        while (children.length > 0) children.pop();

        // add new token objects as children of heading
        children.unshift(linkClose);
        children.unshift(text);
        children.unshift(linkOpen);

        return md.renderer.renderToken(tokens, idx, options, env, self)
      }

      return self.renderToken(tokens, idx, options)
    };
  }

  function extendImage (md) {
    md.renderer.rules.image = (tokens, idx, options, env, self) => {
      const token = tokens[idx];

      token.attrSet('class', 'q-markdown--image');

      // handle "alt" attribute, since markdown-it-imsize doesn't handle it properly
      // https://github.com/tatsy/markdown-it-imsize/blob/master/lib/index.js#L192
      if (Array.isArray(token.children) && token.children.length > 0 && token.children[0].type === 'text') {
        token.attrSet('alt', token.children[0].content);
      }

      return self.renderToken(tokens, idx, options)
    };
  }

  function extendLink (md, { noopener, noreferrer }) {
    md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
      const token = tokens[idx];

      const hrefIndex = token.attrIndex('href');

      if (token.attrs[hrefIndex][1][0] === '#') {
        if (typeof location !== 'undefined') {
          token.attrs[hrefIndex][1] = location.pathname + token.attrs[hrefIndex][1];
        }
      }

      if (token.attrs[hrefIndex][1] === '') {
        token.attrSet('class', 'q-markdown--link q-markdown--link-local');
        if (tokens[idx + 1] && tokens[idx + 1].type === 'text' && tokens[idx + 1].content) {
          token.attrSet('id', slugify(tokens[idx + 1].content));
        }
      }
      else if (token.attrs[hrefIndex][1][0] === '/' ||
        token.attrs[hrefIndex][1].startsWith('..')) {
        token.attrSet('class', 'q-markdown--link q-markdown--link-local');
      }
      else {
        token.attrSet('class', 'q-markdown--link q-markdown--link-external');
        token.attrSet('target', '_blank');
        if (noopener === true || noreferrer === true) {
          const rel = [];
          noopener === true && rel.push('noopener');
          noreferrer === true && rel.push('noreferrer');
          token.attrSet('rel', rel.join(' '));
        }
      }

      return self.renderToken(tokens, idx, options)
    };
  }

  function extendTable (md) {
    md.renderer.rules.table_open = (tokens, idx, options, env, self) => {
      const token = tokens[idx];

      token.attrSet('class', 'q-markdown--table');

      return self.renderToken(tokens, idx, options)
    };
  }

  function extendToken (md) {
    const defaultRender = md.renderer.rules.code_inline;

    md.renderer.rules.code_inline = (tokens, idx, options, env, self) => {
      const token = tokens[idx];

      token.attrSet('class', 'q-markdown--token');
      return defaultRender(tokens, idx, options, env, self)
    };
  }

  function extendFenceLineNumbers (md, alt) {
    const fence = md.renderer.rules.fence;
    md.renderer.rules.fence = (...args) => {
      const rawCode = fence(...args);
      const code = rawCode.slice(
        rawCode.indexOf('<code>') + 6,
        rawCode.indexOf('</code>')
      );

      const lines = code.trim().split('\n');

      const lineNumbersCode = [...Array(lines.length)]
        .map((line, index) => `<div class="q-markup--line-number">${alt === void 0 ? index + 1 : alt}</div>`).join('');

      const lineNumbersWrapperCode =
        `<div class="q-markdown--line-numbers non-selectable">${lineNumbersCode}</div><div class="q-markdown--code-wrapper">${rawCode}</div>`;

      const finalCode =
        `<div class="q-markdown--line-numbers-wrapper">${lines.length < 3 ? rawCode : lineNumbersWrapperCode}</div>`;

      return finalCode
    };
  }

  const mdiContentCopy = 'M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z';
  const matDone = 'M0 0h24v24H0z@@fill:none;&&M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z';

  var QMarkdown = {
    name: 'QMarkdown',

    props: {
      // the markdown source, or use slot - slot overrides this property
      src: {
        type: String,
        default: ''
      },
      // no abbreviations
      noAbbreviation: Boolean,
      // no blockquotes
      noBlockquote: Boolean,
      // no breaks
      noBreaks: Boolean,
      // no containers
      noContainer: Boolean,
      // no Deflists
      noDeflist: Boolean,
      // no emojies
      noEmoji: Boolean,
      // no footnotes
      noFootnote: Boolean,
      // no code highlights
      noHighlight: Boolean,
      // no html entities
      noHtml: Boolean,
      // no images
      noImage: Boolean,
      // no inserts
      noInsert: Boolean,
      // no line-numbers
      noLineNumbers: Boolean,
      // no links
      noLink: Boolean,
      // no automatic links
      noLinkify: Boolean,
      // no heading (h1-h6) anchor (#) links
      noHeadingAnchorLinks: Boolean,
      // no marks
      noMark: Boolean,
      // no subscript
      noSubscript: Boolean,
      // no superscript
      noSuperscript: Boolean,
      // no tasklists
      noTasklist: Boolean,
      // no typographer
      noTypographer: Boolean,
      // alternative character to use instead of line numbers
      lineNumberAlt: {
        type: String,
        validator: v => v.length === 1
      },
      // set to true to enable Table of Contents (sent via emit)
      toc: Boolean,
      tocStart: {
        type: Number,
        default: 1,
        validator: v => v >= 1 && v <= 6
      },
      tocEnd: {
        type: Number,
        default: 3,
        validator: v => v >= 1 && v <= 6
      },
      // set to true to enable task lists checkboxes (not read-only)
      taskListsEnable: Boolean,
      // to wrap the rendered list items in a <label> element for UX purposes
      taskListsLabel: Boolean,
      // to add the label after the checkbox
      taskListsLabelAfter: Boolean,
      // extend markdown-it!
      extend: Function,
      extendPrism: Function,
      contentStyle: [String, Object, Array],
      contentClass: [String, Object, Array],

      noNoopener: Boolean,
      noNoreferrer: Boolean,

      showCopy: Boolean,
      copyIcon: String,
      noCopyTooltip: Boolean,
      copyTooltipText: { // tooltip
        type: String,
        default: 'Copy to clipboard'
      },
      copyResponseText: {
        type: String,
        default: 'Copied to clipboard'
      }
    },

    data () {
      return {
        source: '',
        rendered: void 0
      }
    },

    created () {
      this.copy = mdiContentCopy;
      this.done = matDone;
    },

    beforeMount () {
      if (this.src && this.src.length > 0) {
        this.source = this.src.replace(/\\n/gi, '\n');
      }
    },

    destroyed () {
      // this.__deleteCache(this.uid)
    },

    watch: {
      src () {
        this.source = this.src.replace(/\\n/gi, '\n');
        this.rendered = void 0;
      },
      noAbbreviation () { this.rendered = void 0; },
      noBlockquote () { this.rendered = void 0; },
      noBreaks () { this.rendered = void 0; },
      noContainer () { this.rendered = void 0; },
      noDeflist () { this.rendered = void 0; },
      noEmoji () { this.rendered = void 0; },
      noFootnote () { this.rendered = void 0; },
      noHighlight () { this.rendered = void 0; },
      noHtml () { this.rendered = void 0; },
      noImage () { this.rendered = void 0; },
      noInsert () { this.rendered = void 0; },
      noLineNumbers () { this.rendered = void 0; },
      noLink () { this.rendered = void 0; },
      noLinkify () { this.rendered = void 0; },
      noHeadingAnchorLinks () { this.rendered = void 0; },
      noMark () { this.rendered = void 0; },
      noSubscript () { this.rendered = void 0; },
      noSuperscript () { this.rendered = void 0; },
      noTasklist () { this.rendered = void 0; },
      noTypographer () { this.rendered = void 0; },
      lineNumberAlt () { this.rendered = void 0; },
      toc () { this.rendered = void 0; },
      tocStart () { this.rendered = void 0; },
      tocEnd () { this.rendered = void 0; },
      taskListsEnable () { this.rendered = void 0; },
      taskListsLabel () { this.rendered = void 0; },
      taskListsLabelAfter () { this.rendered = void 0; },
      extend () { this.rendered = void 0; },

      contentStyle () { this.rendered = void 0; },
      contentClass () { this.rendered = void 0; },

      noNoopener () { this.rendered = void 0; },
      noNoreferrer () { this.rendered = void 0; }
    },

    methods: {
      __isEnabled (val) {
        return val === void 0 || val === false
      },

      __isFunction (f) {
        return f && {}.toString.call(f) === '[object Function]'
      },

      // __setCache (key, value) {
      //   cache[key] = value
      // },

      // __getCache (key) {
      //   return cache[key]
      // },

      // __deleteCache (key) {
      //   if (cache[key]) {
      //     delete cache[key]
      //   }
      // },

      makeTree (list) {
        const tree = [];
        let root = null;

        const addToTree = (item) => {
          if (item.level === this.tocStart) {
            root = item;
            tree.push(item);
          }
          else if (item.level === this.tocStart + 1) {
            root.children.push(item);
          }
          else {
            let parent = root;
            for (let k = 0; k < item.level - (this.tocStart + 1); ++k) {
              parent = parent.children[parent.children.length - 1];
            }
            if (parent) {
              parent.children.push(item);
            }
          }
        };

        for (let i = 0; i < list.length; ++i) {
          addToTree(list[i]);
        }

        return tree
      },

      __copyMarkdownToClipboard () {
        // let markdown = this.source
        // if (this.$slots.default) {
        //   markdown = this.$slots.default[0].text
        // }

        quasar.copyToClipboard(this.$refs.markdown.innerText);

        if (this.$q.notify) {
          this.$q.notify({
            message: this.copyResponseText,
            color: this.$q.dark.isActive ? 'grey-10' : 'white',
            textColor: this.$q.dark.isActive ? 'amber' : 'primary',
            icon: this.done,
            position: 'top',
            timeout: 2000
          });
        }
      },

      __renderCopy (h) {
        if (this.showCopy !== true) return
        return h(quasar.QBtn, {
          staticClass: 'q-markdown__copy',
          props: {
            color: this.$q.dark.isActive ? 'amber' : 'primary',
            dense: true,
            flat: true,
            round: true,
            icon: (this.copyIcon ? this.copyIcon : this.copy)
          },
          on: {
            click: v => { this.__copyMarkdownToClipboard(); }
          }
        }, [
          this.noCopyTooltip !== true && h(quasar.QTooltip, this.copyTooltipText)
        ])
      }
    },

    render (h) {
      if (this.rendered === void 0) {
        const tocData = [];

        // get the markdown - slot overrides 'src'
        let markdown = this.source;
        if (this.$slots.default) {
          markdown = this.$slots.default[0].text;
        }

        if (this.__isFunction(this.extendPrism)) {
          this.extendPrism(Prism);
        }

        const highlight = (str, lang) => {
          if (this.__isEnabled(this.noHighlight)) {
            return prismHighlight(Prism, str, lang)
          }
          return ''
        };

        const opts = {
          html: this.__isEnabled(this.noHtml),
          linkify: this.__isEnabled(this.noLinkify),
          typographer: this.__isEnabled(this.noTypographer),
          breaks: this.__isEnabled(this.noBreaks),
          highlight: highlight
        };

        const md = markdownIt(opts);

        if (this.__isEnabled(this.noSubscript)) {
          md.use(markdownItSub);
        }
        if (this.__isEnabled(this.noSuperscript)) {
          md.use(markdownItSup);
        }
        if (this.__isEnabled(this.noFootnote)) {
          md.use(markdownItFootnote);
        }
        if (this.__isEnabled(this.noDeflist)) {
          md.use(markdownItDeflist);
        }
        if (this.__isEnabled(this.noAbbreviation)) {
          md.use(markdownItAbbr);
        }
        if (this.__isEnabled(this.noInsert)) {
          md.use(markdownItIns);
        }
        if (this.__isEnabled(this.noMark)) {
          md.use(markdownItMark);
        }
        if (this.__isEnabled(this.noEmoji)) {
          md.use(markdownItEmoji);
        }
        if (this.__isEnabled(this.noImage)) {
          md.use(imsize);
        }
        if (this.__isEnabled(this.noTasklist)) {
          md.use(markdownItTaskLists, { enabled: this.taskListsEnable, label: this.taskListsLabel, labelAfter: this.taskListsLabelAfter });
        }

        extendBlockQuote(md);
        extendHeading(md, tocData, this.toc, this.tocStart, this.tocEnd, this.noHeadingAnchorLinks);
        extendImage(md);
        extendLink(md, { noopener: !this.noNoopener, noreferrer: !this.noNoreferrer });
        extendTable(md);
        extendToken(md);

        if (this.__isEnabled(this.noContainer)) {
          extendContainers(md);
        }
        if (this.__isEnabled(this.noLineNumbers)) {
          extendFenceLineNumbers(md, this.lineNumberAlt);
        }

        // handle disabled rules
        const disabled = [];
        if (!this.__isEnabled(this.noImage)) {
          disabled.push('image');
        }
        if (!this.__isEnabled(this.noLink)) {
          disabled.push('link');
        }
        if (!this.__isEnabled(this.noBlockquote)) {
          disabled.push('blockquote');
        }
        if (disabled.length > 0) {
          md.disable(disabled);
        }

        if (this.__isFunction(this.extend)) {
          this.extend(md);
        }

        this.rendered = md.render(markdown);

        if (this.toc && tocData.length > 0) {
          this.$emit('data', tocData);
        }
      }

      const renderedMarkdown = h('div', {
        ref: 'markdown',
        staticClass: 'q-markdown',
        class: this.contentClass,
        style: this.contentStyle,
        domProps: {
          innerHTML: this.rendered
        }
      });

      const renderedCopyWrapper = h('div', {
        style: {
          position: 'relative'
        }
      }, [
        renderedMarkdown,
        this.__renderCopy(h)
      ]);

      return this.showCopy !== true ? renderedMarkdown : renderedCopyWrapper
    }
  };

  const getTemplate = (html) => {
    let content = '';
    if (html && html.length > 0) {
      const start = '<template',
        end = '</template>';
      // find the first occurrence of "<template"
      const startIndex = html.indexOf(start);
      // find the last occurrence of "</template>"
      const lastIndex = html.lastIndexOf(end);
      if (startIndex > -1 && lastIndex > -1) {
        // grab the text
        content = html.substring(startIndex, lastIndex + end.length);
      }
    }
    return content
  };

  function getTagParts (html) {
    const canUseDOM = !!(
      (typeof window !== 'undefined' &&
      window.document && window.document.createElement)
    );
    if (canUseDOM !== true) {
      return {}
    }

    const results = {};
    let tag;

    // we'll use document to separate out of the sections,
    // but we can't use it for the <template> tags. Not only
    // does it reformat the html, it also removed any dynamic
    // vue properties.
    const t = getTemplate(html);

    if (t && t.length > 0) {
      results.template = t;
    }
    const el = document.createElement('html');
    el.innerHTML = html;
    tag = el.getElementsByTagName('script');
    if (tag.length > 0) {
      results.script = tag[0].outerHTML;
    }
    tag = el.getElementsByTagName('style');
    if (tag.length > 0) {
      results.style = tag[0].outerHTML;
    }
    return results
  }

  var Plugin = {
    version,
    QMarkdown,
    getTagParts,

    install (Vue) {
      Vue.component(QMarkdown.name, QMarkdown);
    }
  };

  Vue__default["default"].use(Plugin);

  exports.QMarkdown = QMarkdown;
  exports.getTagParts = getTagParts;
  exports.version = version;

  Object.defineProperty(exports, '__esModule', { value: true });

  return QMarkdown;
}));