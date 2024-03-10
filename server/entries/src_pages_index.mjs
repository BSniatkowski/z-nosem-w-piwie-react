import { renderToString } from "react-dom/server";
import o, { useRef, useState, useMemo, useEffect, useDebugValue, createElement, useContext, useCallback, createContext, useReducer, forwardRef } from "react";
import { dangerouslySkipEscape, escapeInject } from "vike/server";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider, HydrationBoundary, useQuery, dehydrate } from "@tanstack/react-query";
import { defineMessages, FormattedMessage, useIntl, IntlProvider } from "react-intl";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p2 in s)
        if (Object.prototype.hasOwnProperty.call(s, p2))
          t[p2] = s[p2];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __spreadArray(to, from2, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from2.length, ar; i < l; i++) {
      if (ar || !(i in from2)) {
        if (!ar)
          ar = Array.prototype.slice.call(from2, 0, i);
        ar[i] = from2[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from2));
}
function memoize(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn(arg);
    return cache[arg];
  };
}
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var isPropValid = /* @__PURE__ */ memoize(
  function(prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var shallowequal = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
  if (ret !== void 0) {
    return !!ret;
  }
  if (objA === objB) {
    return true;
  }
  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }
  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];
    if (!bHasOwnProperty(key)) {
      return false;
    }
    var valueA = objA[key];
    var valueB = objB[key];
    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
    if (ret === false || ret === void 0 && valueA !== valueB) {
      return false;
    }
  }
  return true;
};
const p = /* @__PURE__ */ getDefaultExportFromCjs(shallowequal);
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length2) {
  return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search, position2) {
  return value.indexOf(search, position2);
}
function charat(value, index2) {
  return value.charCodeAt(index2) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join("");
}
function filter(array, pattern) {
  return array.filter(function(value) {
    return !match(value, pattern);
  });
}
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type, props, children, length2, siblings) {
  return { value, root, parent, type, props, children, line, column, length: length2, return: "", siblings };
}
function copy(root, props) {
  return assign(node("", null, null, "", null, null, 0, root.siblings), root, { length: -root.length }, props);
}
function lift(root) {
  while (root.root)
    root = copy(root.root, { children: [root] });
  append(root, root.siblings);
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index2, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index2, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index2) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index2, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index2) {
  while (!token(peek()))
    next();
  return slice(index2, position);
}
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index2 = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f", abs(index2 ? points[index2 - 1] : 0)) != -1)
            ampersand = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent, declarations), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index2++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset:
            if (ampersand == -1)
              characters2 = replace(characters2, /\f/g, "");
            if (property > 0 && strlen(characters2) - length2)
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1, declarations) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2, declarations), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append(reference = ruleset(characters2, root, parent, index2, offset, rules, points, type, props = [], children = [], length2, rulesets), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
              else
                switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2, children), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                }
        }
        index2 = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index2++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index2, offset, rules, points, type, props, children, length2, siblings) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i = 0, j2 = 0, k2 = 0; i < index2; ++i)
    for (var x2 = 0, y2 = substr(value, post + 1, post = abs(j2 = points[i])), z2 = value; x2 < size; ++x2)
      if (z2 = trim(j2 > 0 ? rule[x2] + " " + y2 : replace(y2, /&\f/g, rule[x2])))
        props[k2++] = z2;
  return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2, siblings);
}
function comment(value, root, parent, siblings) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings);
}
function declaration(value, root, parent, length2, siblings) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2, siblings);
}
function prefix(value, length2, children) {
  switch (hash(value, length2)) {
    case 5103:
      return WEBKIT + "print-" + value + value;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    case 4789:
      return MOZ + value + value;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    case 5936:
      switch (charat(value, length2 + 11)) {
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
    case 6828:
    case 4268:
    case 2903:
      return WEBKIT + value + MS + value + value;
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
    case 5443:
      return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/g, "") + (!match(value, /flex-|baseline/) ? MS + "grid-row-" + replace(value, /flex-|-self/g, "") : "") + value;
    case 4675:
      return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/g, "") + value;
    case 5548:
      return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
    case 5292:
      return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
    case 6060:
      return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
    case 4200:
      if (!match(value, /flex-|baseline/))
        return MS + "grid-column-align" + substr(value, length2) + value;
      break;
    case 2592:
    case 3360:
      return MS + replace(value, "template-", "") + value;
    case 4384:
    case 3616:
      if (children && children.some(function(element, index2) {
        return length2 = index2, match(element.props, /grid-\w+-end/);
      })) {
        return ~indexof(value + (children = children[length2].value), "span", 0) ? value : MS + replace(value, "-start", "") + value + MS + "grid-row-span:" + (~indexof(children, "span", 0) ? match(children, /\d+/) : +match(children, /\d+/) - +match(value, /\d+/)) + ";";
      }
      return MS + replace(value, "-start", "") + value;
    case 4896:
    case 4128:
      return children && children.some(function(element) {
        return match(element.props, /grid-\w+-start/);
      }) ? value : MS + replace(replace(value, "-end", "-span"), "span ", "") + value;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value) - 1 - length2 > 6)
        switch (charat(value, length2 + 1)) {
          case 109:
            if (charat(value, length2 + 4) !== 45)
              break;
          case 102:
            return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
          case 115:
            return ~indexof(value, "stretch", 0) ? prefix(replace(value, "stretch", "fill-available"), length2, children) + value : value;
        }
      break;
    case 5152:
    case 5920:
      return replace(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(_2, a, b, c, d, e, f2) {
        return MS + a + ":" + b + f2 + (c ? MS + a + "-span:" + (d ? e : +e - +b) + f2 : "") + value;
      });
    case 4949:
      if (charat(value, length2 + 6) === 121)
        return replace(value, ":", ":" + WEBKIT) + value;
      break;
    case 6444:
      switch (charat(value, charat(value, 14) === 45 ? 18 : 11)) {
        case 120:
          return replace(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
        case 100:
          return replace(value, ":", ":" + MS) + value;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return replace(value, "scroll-", "scroll-snap-") + value;
  }
  return value;
}
function serialize(children, callback) {
  var output = "";
  for (var i = 0; i < children.length; i++)
    output += callback(children[i], i, children, callback) || "";
  return output;
}
function stringify(element, index2, children, callback) {
  switch (element.type) {
    case LAYER:
      if (element.children.length)
        break;
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      if (!strlen(element.value = element.props.join(",")))
        return "";
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}
function middleware(collection) {
  var length2 = sizeof(collection);
  return function(element, index2, children, callback) {
    var output = "";
    for (var i = 0; i < length2; i++)
      output += collection[i](element, index2, children, callback) || "";
    return output;
  };
}
function rulesheet(callback) {
  return function(element) {
    if (!element.root) {
      if (element = element.return)
        callback(element);
    }
  };
}
function prefixer(element, index2, children, callback) {
  if (element.length > -1) {
    if (!element.return)
      switch (element.type) {
        case DECLARATION:
          element.return = prefix(element.value, element.length, children);
          return;
        case KEYFRAMES:
          return serialize([copy(element, { value: replace(element.value, "@", "@" + WEBKIT) })], callback);
        case RULESET:
          if (element.length)
            return combine(children = element.props, function(value) {
              switch (match(value, callback = /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  lift(copy(element, { props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")] }));
                  lift(copy(element, { props: [value] }));
                  assign(element, { props: filter(children, callback) });
                  break;
                case "::placeholder":
                  lift(copy(element, { props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")] }));
                  lift(copy(element, { props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")] }));
                  lift(copy(element, { props: [replace(value, /:(plac\w+)/, MS + "input-$1")] }));
                  lift(copy(element, { props: [value] }));
                  assign(element, { props: filter(children, callback) });
                  break;
              }
              return "";
            });
      }
  }
}
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var f = "undefined" != typeof process && void 0 !== process.env && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", m = "active", y = "data-styled-version", v = "6.1.6", g = "/*!sc*/\n", S = "undefined" != typeof window && "HTMLElement" in window, w = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && void 0 !== process.env.SC_DISABLE_SPEEDY && "" !== process.env.SC_DISABLE_SPEEDY ? "false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY : "production" !== process.env.NODE_ENV), E = /invalid hook call/i, N = /* @__PURE__ */ new Set(), P = function(t, n) {
  if ("production" !== process.env.NODE_ENV) {
    var o2 = n ? ' with the id of "'.concat(n, '"') : "", s = "The component ".concat(t).concat(o2, " has been created dynamically.\n") + "You may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.", i = console.error;
    try {
      var a = true;
      console.error = function(t2) {
        for (var n2 = [], o3 = 1; o3 < arguments.length; o3++)
          n2[o3 - 1] = arguments[o3];
        E.test(t2) ? (a = false, N.delete(s)) : i.apply(void 0, __spreadArray([t2], n2, false));
      }, useRef(), a && !N.has(s) && (console.warn(s), N.add(s));
    } catch (e) {
      E.test(e.message) && N.delete(s);
    } finally {
      console.error = i;
    }
  }
}, _ = Object.freeze([]), C = Object.freeze({});
function I(e, t, n) {
  return void 0 === n && (n = C), e.theme !== n.theme && e.theme || t || n.theme;
}
var A = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), O = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, D = /(^-|-$)/g;
function R(e) {
  return e.replace(O, "-").replace(D, "");
}
var T = /(a)(d)/gi, k = 52, j = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function x$1(e) {
  var t, n = "";
  for (t = Math.abs(e); t > k; t = t / k | 0)
    n = j(t % k) + n;
  return (j(t % k) + n).replace(T, "$1-$2");
}
var V, F = 5381, M = function(e, t) {
  for (var n = t.length; n; )
    e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, z = function(e) {
  return M(F, e);
};
function $(e) {
  return x$1(z(e) >>> 0);
}
function B(e) {
  return "production" !== process.env.NODE_ENV && "string" == typeof e && e || e.displayName || e.name || "Component";
}
function L(e) {
  return "string" == typeof e && ("production" === process.env.NODE_ENV || e.charAt(0) === e.charAt(0).toLowerCase());
}
var G = "function" == typeof Symbol && Symbol.for, Y = G ? Symbol.for("react.memo") : 60115, q = G ? Symbol.for("react.forward_ref") : 60112, W = { childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true }, H = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true }, U = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true }, J = ((V = {})[q] = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, V[Y] = U, V);
function X(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Y ? U : "$$typeof" in e ? J[e.$$typeof] : W;
  var t;
}
var Z = Object.defineProperty, K = Object.getOwnPropertyNames, Q = Object.getOwnPropertySymbols, ee = Object.getOwnPropertyDescriptor, te = Object.getPrototypeOf, ne = Object.prototype;
function oe(e, t, n) {
  if ("string" != typeof t) {
    if (ne) {
      var o2 = te(t);
      o2 && o2 !== ne && oe(e, o2, n);
    }
    var r = K(t);
    Q && (r = r.concat(Q(t)));
    for (var s = X(e), i = X(t), a = 0; a < r.length; ++a) {
      var c = r[a];
      if (!(c in H || n && n[c] || i && c in i || s && c in s)) {
        var l = ee(t, c);
        try {
          Z(e, c, l);
        } catch (e2) {
        }
      }
    }
  }
  return e;
}
function re(e) {
  return "function" == typeof e;
}
function se(e) {
  return "object" == typeof e && "styledComponentId" in e;
}
function ie(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function ae(e, t) {
  if (0 === e.length)
    return "";
  for (var n = e[0], o2 = 1; o2 < e.length; o2++)
    n += t ? t + e[o2] : e[o2];
  return n;
}
function ce(e) {
  return null !== e && "object" == typeof e && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function le(e, t, n) {
  if (void 0 === n && (n = false), !n && !ce(e) && !Array.isArray(e))
    return t;
  if (Array.isArray(t))
    for (var o2 = 0; o2 < t.length; o2++)
      e[o2] = le(e[o2], t[o2]);
  else if (ce(t))
    for (var o2 in t)
      e[o2] = le(e[o2], t[o2]);
  return e;
}
function ue(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var pe = "production" !== process.env.NODE_ENV ? { 1: "Cannot create styled-component for component: %s.\n\n", 2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n", 3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n", 4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n", 5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n", 6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n", 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: 'ThemeProvider: Please make your "theme" prop an object.\n\n', 9: "Missing document `<head>`\n\n", 10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n", 11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n", 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n", 14: 'ThemeProvider: "theme" prop is required.\n\n', 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n", 17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n", 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function de() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  for (var n = e[0], o2 = [], r = 1, s = e.length; r < s; r += 1)
    o2.push(e[r]);
  return o2.forEach(function(e2) {
    n = n.replace(/%[a-z]/, e2);
  }), n;
}
function he(t) {
  for (var n = [], o2 = 1; o2 < arguments.length; o2++)
    n[o2 - 1] = arguments[o2];
  return "production" === process.env.NODE_ENV ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(n.length > 0 ? " Args: ".concat(n.join(", ")) : "")) : new Error(de.apply(void 0, __spreadArray([pe[t]], n, false)).trim());
}
var fe = function() {
  function e(e2) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e2;
  }
  return e.prototype.indexOfGroup = function(e2) {
    for (var t = 0, n = 0; n < e2; n++)
      t += this.groupSizes[n];
    return t;
  }, e.prototype.insertRules = function(e2, t) {
    if (e2 >= this.groupSizes.length) {
      for (var n = this.groupSizes, o2 = n.length, r = o2; e2 >= r; )
        if ((r <<= 1) < 0)
          throw he(16, "".concat(e2));
      this.groupSizes = new Uint32Array(r), this.groupSizes.set(n), this.length = r;
      for (var s = o2; s < r; s++)
        this.groupSizes[s] = 0;
    }
    for (var i = this.indexOfGroup(e2 + 1), a = (s = 0, t.length); s < a; s++)
      this.tag.insertRule(i, t[s]) && (this.groupSizes[e2]++, i++);
  }, e.prototype.clearGroup = function(e2) {
    if (e2 < this.length) {
      var t = this.groupSizes[e2], n = this.indexOfGroup(e2), o2 = n + t;
      this.groupSizes[e2] = 0;
      for (var r = n; r < o2; r++)
        this.tag.deleteRule(n);
    }
  }, e.prototype.getGroup = function(e2) {
    var t = "";
    if (e2 >= this.length || 0 === this.groupSizes[e2])
      return t;
    for (var n = this.groupSizes[e2], o2 = this.indexOfGroup(e2), r = o2 + n, s = o2; s < r; s++)
      t += "".concat(this.tag.getRule(s)).concat(g);
    return t;
  }, e;
}(), me = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), ve = 1, ge = function(e) {
  if (me.has(e))
    return me.get(e);
  for (; ye.has(ve); )
    ve++;
  var t = ve++;
  if ("production" !== process.env.NODE_ENV && ((0 | t) < 0 || t > 1073741824))
    throw he(16, "".concat(t));
  return me.set(e, t), ye.set(t, e), t;
}, Se = function(e, t) {
  ve = t + 1, me.set(e, t), ye.set(t, e);
}, we = "style[".concat(f, "][").concat(y, '="').concat(v, '"]'), be = new RegExp("^".concat(f, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Ee = function(e, t, n) {
  for (var o2, r = n.split(","), s = 0, i = r.length; s < i; s++)
    (o2 = r[s]) && e.registerName(t, o2);
}, Ne = function(e, t) {
  for (var n, o2 = (null !== (n = t.textContent) && void 0 !== n ? n : "").split(g), r = [], s = 0, i = o2.length; s < i; s++) {
    var a = o2[s].trim();
    if (a) {
      var c = a.match(be);
      if (c) {
        var l = 0 | parseInt(c[1], 10), u = c[2];
        0 !== l && (Se(u, l), Ee(e, u, c[3]), e.getTag().insertRules(l, r)), r.length = 0;
      } else
        r.push(a);
    }
  }
};
function Pe() {
  return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
}
var _e = function(e) {
  var t = document.head, n = e || t, o2 = document.createElement("style"), r = function(e2) {
    var t2 = Array.from(e2.querySelectorAll("style[".concat(f, "]")));
    return t2[t2.length - 1];
  }(n), s = void 0 !== r ? r.nextSibling : null;
  o2.setAttribute(f, m), o2.setAttribute(y, v);
  var i = Pe();
  return i && o2.setAttribute("nonce", i), n.insertBefore(o2, s), o2;
}, Ce = function() {
  function e(e2) {
    this.element = _e(e2), this.element.appendChild(document.createTextNode("")), this.sheet = function(e3) {
      if (e3.sheet)
        return e3.sheet;
      for (var t = document.styleSheets, n = 0, o2 = t.length; n < o2; n++) {
        var r = t[n];
        if (r.ownerNode === e3)
          return r;
      }
      throw he(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(e2, t) {
    try {
      return this.sheet.insertRule(t, e2), this.length++, true;
    } catch (e3) {
      return false;
    }
  }, e.prototype.deleteRule = function(e2) {
    this.sheet.deleteRule(e2), this.length--;
  }, e.prototype.getRule = function(e2) {
    var t = this.sheet.cssRules[e2];
    return t && t.cssText ? t.cssText : "";
  }, e;
}(), Ie = function() {
  function e(e2) {
    this.element = _e(e2), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(e2, t) {
    if (e2 <= this.length && e2 >= 0) {
      var n = document.createTextNode(t);
      return this.element.insertBefore(n, this.nodes[e2] || null), this.length++, true;
    }
    return false;
  }, e.prototype.deleteRule = function(e2) {
    this.element.removeChild(this.nodes[e2]), this.length--;
  }, e.prototype.getRule = function(e2) {
    return e2 < this.length ? this.nodes[e2].textContent : "";
  }, e;
}(), Ae = function() {
  function e(e2) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(e2, t) {
    return e2 <= this.length && (this.rules.splice(e2, 0, t), this.length++, true);
  }, e.prototype.deleteRule = function(e2) {
    this.rules.splice(e2, 1), this.length--;
  }, e.prototype.getRule = function(e2) {
    return e2 < this.length ? this.rules[e2] : "";
  }, e;
}(), Oe = S, De = { isServer: !S, useCSSOMInjection: !w }, Re = function() {
  function e(e2, n, o2) {
    void 0 === e2 && (e2 = C), void 0 === n && (n = {});
    var r = this;
    this.options = __assign(__assign({}, De), e2), this.gs = n, this.names = new Map(o2), this.server = !!e2.isServer, !this.server && S && Oe && (Oe = false, function(e3) {
      for (var t = document.querySelectorAll(we), n2 = 0, o3 = t.length; n2 < o3; n2++) {
        var r2 = t[n2];
        r2 && r2.getAttribute(f) !== m && (Ne(e3, r2), r2.parentNode && r2.parentNode.removeChild(r2));
      }
    }(this)), ue(this, function() {
      return function(e3) {
        for (var t = e3.getTag(), n2 = t.length, o3 = "", r2 = function(n3) {
          var r3 = function(e4) {
            return ye.get(e4);
          }(n3);
          if (void 0 === r3)
            return "continue";
          var s2 = e3.names.get(r3), i = t.getGroup(n3);
          if (void 0 === s2 || 0 === i.length)
            return "continue";
          var a = "".concat(f, ".g").concat(n3, '[id="').concat(r3, '"]'), c = "";
          void 0 !== s2 && s2.forEach(function(e4) {
            e4.length > 0 && (c += "".concat(e4, ","));
          }), o3 += "".concat(i).concat(a, '{content:"').concat(c, '"}').concat(g);
        }, s = 0; s < n2; s++)
          r2(s);
        return o3;
      }(r);
    });
  }
  return e.registerId = function(e2) {
    return ge(e2);
  }, e.prototype.reconstructWithOptions = function(n, o2) {
    return void 0 === o2 && (o2 = true), new e(__assign(__assign({}, this.options), n), this.gs, o2 && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(e2) {
    return this.gs[e2] = (this.gs[e2] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (e2 = function(e3) {
      var t = e3.useCSSOMInjection, n = e3.target;
      return e3.isServer ? new Ae(n) : t ? new Ce(n) : new Ie(n);
    }(this.options), new fe(e2)));
    var e2;
  }, e.prototype.hasNameForId = function(e2, t) {
    return this.names.has(e2) && this.names.get(e2).has(t);
  }, e.prototype.registerName = function(e2, t) {
    if (ge(e2), this.names.has(e2))
      this.names.get(e2).add(t);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(t), this.names.set(e2, n);
    }
  }, e.prototype.insertRules = function(e2, t, n) {
    this.registerName(e2, t), this.getTag().insertRules(ge(e2), n);
  }, e.prototype.clearNames = function(e2) {
    this.names.has(e2) && this.names.get(e2).clear();
  }, e.prototype.clearRules = function(e2) {
    this.getTag().clearGroup(ge(e2)), this.clearNames(e2);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), Te = /&/g, ke = /^\s*\/\/.*$/gm;
function je(e, t) {
  return e.map(function(e2) {
    return "rule" === e2.type && (e2.value = "".concat(t, " ").concat(e2.value), e2.value = e2.value.replaceAll(",", ",".concat(t, " ")), e2.props = e2.props.map(function(e3) {
      return "".concat(t, " ").concat(e3);
    })), Array.isArray(e2.children) && "@keyframes" !== e2.type && (e2.children = je(e2.children, t)), e2;
  });
}
function xe(e) {
  var t, n, o2, r = void 0 === e ? C : e, s = r.options, i = void 0 === s ? C : s, a = r.plugins, c = void 0 === a ? _ : a, l = function(e2, o3, r2) {
    return r2.startsWith(n) && r2.endsWith(n) && r2.replaceAll(n, "").length > 0 ? ".".concat(t) : e2;
  }, u = c.slice();
  u.push(function(e2) {
    e2.type === RULESET && e2.value.includes("&") && (e2.props[0] = e2.props[0].replace(Te, n).replace(o2, l));
  }), i.prefix && u.push(prefixer), u.push(stringify);
  var p2 = function(e2, r2, s2, a2) {
    void 0 === r2 && (r2 = ""), void 0 === s2 && (s2 = ""), void 0 === a2 && (a2 = "&"), t = a2, n = r2, o2 = new RegExp("\\".concat(n, "\\b"), "g");
    var c2 = e2.replace(ke, ""), l2 = compile(s2 || r2 ? "".concat(s2, " ").concat(r2, " { ").concat(c2, " }") : c2);
    i.namespace && (l2 = je(l2, i.namespace));
    var p3 = [];
    return serialize(l2, middleware(u.concat(rulesheet(function(e3) {
      return p3.push(e3);
    })))), p3;
  };
  return p2.hash = c.length ? c.reduce(function(e2, t2) {
    return t2.name || he(15), M(e2, t2.name);
  }, F).toString() : "", p2;
}
var Ve = new Re(), Fe = xe(), Me = o.createContext({ shouldForwardProp: void 0, styleSheet: Ve, stylis: Fe });
Me.Consumer;
var $e = o.createContext(void 0);
function Be() {
  return useContext(Me);
}
function Le(e) {
  var t = useState(e.stylisPlugins), n = t[0], r = t[1], c = Be().styleSheet, l = useMemo(function() {
    var t2 = c;
    return e.sheet ? t2 = e.sheet : e.target && (t2 = t2.reconstructWithOptions({ target: e.target }, false)), e.disableCSSOMInjection && (t2 = t2.reconstructWithOptions({ useCSSOMInjection: false })), t2;
  }, [e.disableCSSOMInjection, e.sheet, e.target, c]), u = useMemo(function() {
    return xe({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: n });
  }, [e.enableVendorPrefixes, e.namespace, n]);
  useEffect(function() {
    p(n, e.stylisPlugins) || r(e.stylisPlugins);
  }, [e.stylisPlugins]);
  var d = useMemo(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: l, stylis: u };
  }, [e.shouldForwardProp, l, u]);
  return o.createElement(Me.Provider, { value: d }, o.createElement($e.Provider, { value: u }, e.children));
}
var Ge = function() {
  function e(e2, t) {
    var n = this;
    this.inject = function(e3, t2) {
      void 0 === t2 && (t2 = Fe);
      var o2 = n.name + t2.hash;
      e3.hasNameForId(n.id, o2) || e3.insertRules(n.id, o2, t2(n.rules, o2, "@keyframes"));
    }, this.name = e2, this.id = "sc-keyframes-".concat(e2), this.rules = t, ue(this, function() {
      throw he(12, String(n.name));
    });
  }
  return e.prototype.getName = function(e2) {
    return void 0 === e2 && (e2 = Fe), this.name + e2.hash;
  }, e;
}(), Ye = function(e) {
  return e >= "A" && e <= "Z";
};
function qe(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var o2 = e[n];
    if (1 === n && "-" === o2 && "-" === e[0])
      return e;
    Ye(o2) ? t += "-" + o2.toLowerCase() : t += o2;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var We = function(e) {
  return null == e || false === e || "" === e;
}, He = function(t) {
  var n, o2, r = [];
  for (var s in t) {
    var i = t[s];
    t.hasOwnProperty(s) && !We(i) && (Array.isArray(i) && i.isCss || re(i) ? r.push("".concat(qe(s), ":"), i, ";") : ce(i) ? r.push.apply(r, __spreadArray(__spreadArray(["".concat(s, " {")], He(i), false), ["}"], false)) : r.push("".concat(qe(s), ": ").concat((n = s, null == (o2 = i) || "boolean" == typeof o2 || "" === o2 ? "" : "number" != typeof o2 || 0 === o2 || n in unitlessKeys || n.startsWith("--") ? String(o2).trim() : "".concat(o2, "px")), ";")));
  }
  return r;
};
function Ue(e, t, n, o2) {
  if (We(e))
    return [];
  if (se(e))
    return [".".concat(e.styledComponentId)];
  if (re(e)) {
    if (!re(s = e) || s.prototype && s.prototype.isReactComponent || !t)
      return [e];
    var r = e(t);
    return "production" === process.env.NODE_ENV || "object" != typeof r || Array.isArray(r) || r instanceof Ge || ce(r) || null === r || console.error("".concat(B(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Ue(r, t, n, o2);
  }
  var s;
  return e instanceof Ge ? n ? (e.inject(n, o2), [e.getName(o2)]) : [e] : ce(e) ? He(e) : Array.isArray(e) ? Array.prototype.concat.apply(_, e.map(function(e2) {
    return Ue(e2, t, n, o2);
  })) : [e.toString()];
}
function Je(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (re(n) && !se(n))
      return false;
  }
  return true;
}
var Xe = z(v), Ze = function() {
  function e(e2, t, n) {
    this.rules = e2, this.staticRulesId = "", this.isStatic = "production" === process.env.NODE_ENV && (void 0 === n || n.isStatic) && Je(e2), this.componentId = t, this.baseHash = M(Xe, t), this.baseStyle = n, Re.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(e2, t, n) {
    var o2 = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e2, t, n) : "";
    if (this.isStatic && !n.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId))
        o2 = ie(o2, this.staticRulesId);
      else {
        var r = ae(Ue(this.rules, e2, t, n)), s = x$1(M(this.baseHash, r) >>> 0);
        if (!t.hasNameForId(this.componentId, s)) {
          var i = n(r, ".".concat(s), void 0, this.componentId);
          t.insertRules(this.componentId, s, i);
        }
        o2 = ie(o2, s), this.staticRulesId = s;
      }
    else {
      for (var a = M(this.baseHash, n.hash), c = "", l = 0; l < this.rules.length; l++) {
        var u = this.rules[l];
        if ("string" == typeof u)
          c += u, "production" !== process.env.NODE_ENV && (a = M(a, u));
        else if (u) {
          var p2 = ae(Ue(u, e2, t, n));
          a = M(a, p2 + l), c += p2;
        }
      }
      if (c) {
        var d = x$1(a >>> 0);
        t.hasNameForId(this.componentId, d) || t.insertRules(this.componentId, d, n(c, ".".concat(d), void 0, this.componentId)), o2 = ie(o2, d);
      }
    }
    return o2;
  }, e;
}(), Ke = o.createContext(void 0);
Ke.Consumer;
function tt(e) {
  var n = o.useContext(Ke), r = useMemo(function() {
    return function(e2, n2) {
      if (!e2)
        throw he(14);
      if (re(e2)) {
        var o2 = e2(n2);
        if ("production" !== process.env.NODE_ENV && (null === o2 || Array.isArray(o2) || "object" != typeof o2))
          throw he(7);
        return o2;
      }
      if (Array.isArray(e2) || "object" != typeof e2)
        throw he(8);
      return n2 ? __assign(__assign({}, n2), e2) : e2;
    }(e.theme, n);
  }, [e.theme, n]);
  return e.children ? o.createElement(Ke.Provider, { value: r }, e.children) : null;
}
var nt = {}, ot = /* @__PURE__ */ new Set();
function rt(e, r, s) {
  var i = se(e), a = e, c = !L(e), p2 = r.attrs, d = void 0 === p2 ? _ : p2, h = r.componentId, f2 = void 0 === h ? function(e2, t) {
    var n = "string" != typeof e2 ? "sc" : R(e2);
    nt[n] = (nt[n] || 0) + 1;
    var o2 = "".concat(n, "-").concat($(v + n + nt[n]));
    return t ? "".concat(t, "-").concat(o2) : o2;
  }(r.displayName, r.parentComponentId) : h, m2 = r.displayName, y2 = void 0 === m2 ? function(e2) {
    return L(e2) ? "styled.".concat(e2) : "Styled(".concat(B(e2), ")");
  }(e) : m2, g2 = r.displayName && r.componentId ? "".concat(R(r.displayName), "-").concat(r.componentId) : r.componentId || f2, S2 = i && a.attrs ? a.attrs.concat(d).filter(Boolean) : d, w2 = r.shouldForwardProp;
  if (i && a.shouldForwardProp) {
    var b = a.shouldForwardProp;
    if (r.shouldForwardProp) {
      var E2 = r.shouldForwardProp;
      w2 = function(e2, t) {
        return b(e2, t) && E2(e2, t);
      };
    } else
      w2 = b;
  }
  var N2 = new Ze(s, g2, i ? a.componentStyle : void 0);
  function O2(e2, r2) {
    return function(e3, r3, s2) {
      var i2 = e3.attrs, a2 = e3.componentStyle, c2 = e3.defaultProps, p3 = e3.foldedComponentIds, d2 = e3.styledComponentId, h2 = e3.target, f3 = o.useContext(Ke), m3 = Be(), y3 = e3.shouldForwardProp || m3.shouldForwardProp;
      "production" !== process.env.NODE_ENV && useDebugValue(d2);
      var v2 = I(r3, f3, c2) || C, g3 = function(e4, n, o2) {
        for (var r4, s3 = __assign(__assign({}, n), { className: void 0, theme: o2 }), i3 = 0; i3 < e4.length; i3 += 1) {
          var a3 = re(r4 = e4[i3]) ? r4(s3) : r4;
          for (var c3 in a3)
            s3[c3] = "className" === c3 ? ie(s3[c3], a3[c3]) : "style" === c3 ? __assign(__assign({}, s3[c3]), a3[c3]) : a3[c3];
        }
        return n.className && (s3.className = ie(s3.className, n.className)), s3;
      }(i2, r3, v2), S3 = g3.as || h2, w3 = {};
      for (var b2 in g3)
        void 0 === g3[b2] || "$" === b2[0] || "as" === b2 || "theme" === b2 && g3.theme === v2 || ("forwardedAs" === b2 ? w3.as = g3.forwardedAs : y3 && !y3(b2, S3) || (w3[b2] = g3[b2], y3 || "development" !== process.env.NODE_ENV || isPropValid(b2) || ot.has(b2) || !A.has(S3) || (ot.add(b2), console.warn('styled-components: it looks like an unknown prop "'.concat(b2, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var E3 = function(e4, t) {
        var n = Be(), o2 = e4.generateAndInjectStyles(t, n.styleSheet, n.stylis);
        return "production" !== process.env.NODE_ENV && useDebugValue(o2), o2;
      }(a2, g3);
      "production" !== process.env.NODE_ENV && e3.warnTooManyClasses && e3.warnTooManyClasses(E3);
      var N3 = ie(p3, d2);
      return E3 && (N3 += " " + E3), g3.className && (N3 += " " + g3.className), w3[L(S3) && !A.has(S3) ? "class" : "className"] = N3, w3.ref = s2, createElement(S3, w3);
    }(D2, e2, r2);
  }
  O2.displayName = y2;
  var D2 = o.forwardRef(O2);
  return D2.attrs = S2, D2.componentStyle = N2, D2.displayName = y2, D2.shouldForwardProp = w2, D2.foldedComponentIds = i ? ie(a.foldedComponentIds, a.styledComponentId) : "", D2.styledComponentId = g2, D2.target = i ? a.target : e, Object.defineProperty(D2, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(e2) {
    this._foldedDefaultProps = i ? function(e3) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      for (var o2 = 0, r2 = t; o2 < r2.length; o2++)
        le(e3, r2[o2], true);
      return e3;
    }({}, a.defaultProps, e2) : e2;
  } }), "production" !== process.env.NODE_ENV && (P(y2, g2), D2.warnTooManyClasses = function(e2, t) {
    var n = {}, o2 = false;
    return function(r2) {
      if (!o2 && (n[r2] = true, Object.keys(n).length >= 200)) {
        var s2 = t ? ' with the id of "'.concat(t, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(e2).concat(s2, ".\n") + "Consider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"), o2 = true, n = {};
      }
    };
  }(y2, g2)), ue(D2, function() {
    return ".".concat(D2.styledComponentId);
  }), c && oe(D2, e, { attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true }), D2;
}
function st(e, t) {
  for (var n = [e[0]], o2 = 0, r = t.length; o2 < r; o2 += 1)
    n.push(t[o2], e[o2 + 1]);
  return n;
}
var it = function(e) {
  return Object.assign(e, { isCss: true });
};
function at(t) {
  for (var n = [], o2 = 1; o2 < arguments.length; o2++)
    n[o2 - 1] = arguments[o2];
  if (re(t) || ce(t))
    return it(Ue(st(_, __spreadArray([t], n, true))));
  var r = t;
  return 0 === n.length && 1 === r.length && "string" == typeof r[0] ? Ue(r) : it(Ue(st(r, n)));
}
function ct(n, o2, r) {
  if (void 0 === r && (r = C), !o2)
    throw he(1, o2);
  var s = function(t) {
    for (var s2 = [], i = 1; i < arguments.length; i++)
      s2[i - 1] = arguments[i];
    return n(o2, r, at.apply(void 0, __spreadArray([t], s2, false)));
  };
  return s.attrs = function(e) {
    return ct(n, o2, __assign(__assign({}, r), { attrs: Array.prototype.concat(r.attrs, e).filter(Boolean) }));
  }, s.withConfig = function(e) {
    return ct(n, o2, __assign(__assign({}, r), e));
  }, s;
}
var lt = function(e) {
  return ct(rt, e);
}, ut = lt;
A.forEach(function(e) {
  ut[e] = lt(e);
});
var mt = /^\s*<\/[a-z]/i, yt = function() {
  function e() {
    var e2 = this;
    this._emitSheetCSS = function() {
      var t = e2.instance.toString(), n = Pe(), o2 = ae([n && 'nonce="'.concat(n, '"'), "".concat(f, '="true"'), "".concat(y, '="').concat(v, '"')].filter(Boolean), " ");
      return "<style ".concat(o2, ">").concat(t, "</style>");
    }, this.getStyleTags = function() {
      if (e2.sealed)
        throw he(2);
      return e2._emitSheetCSS();
    }, this.getStyleElement = function() {
      var n;
      if (e2.sealed)
        throw he(2);
      var r = ((n = {})[f] = "", n[y] = v, n.dangerouslySetInnerHTML = { __html: e2.instance.toString() }, n), s = Pe();
      return s && (r.nonce = s), [o.createElement("style", __assign({}, r, { key: "sc-0-0" }))];
    }, this.seal = function() {
      e2.sealed = true;
    }, this.instance = new Re({ isServer: true }), this.sealed = false;
  }
  return e.prototype.collectStyles = function(e2) {
    if (this.sealed)
      throw he(2);
    return o.createElement(Le, { sheet: this.instance }, e2);
  }, e.prototype.interleaveWithNodeStream = function(e2) {
    if (S)
      throw he(3);
    if (this.sealed)
      throw he(2);
    this.seal();
    var t = require("stream").Transform, n = e2, o2 = this.instance, r = this._emitSheetCSS, s = new t({ transform: function(e3, t2, n2) {
      var s2 = e3.toString(), i = r();
      if (o2.clearTag(), mt.test(s2)) {
        var a = s2.indexOf(">") + 1, c = s2.slice(0, a), l = s2.slice(a);
        this.push(c + i + l);
      } else
        this.push(i + s2);
      n2();
    } });
    return n.on("error", function(e3) {
      s.emit("error", e3);
    }), n.pipe(s);
  }, e;
}();
"production" !== process.env.NODE_ENV && "undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native");
var gt = "__sc-".concat(f, "__");
"production" !== process.env.NODE_ENV && "test" !== process.env.NODE_ENV && "undefined" != typeof window && (window[gt] || (window[gt] = 0), 1 === window[gt] && console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."), window[gt] += 1);
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v2 = glob[path];
  if (v2) {
    return typeof v2 === "function" ? v2() : Promise.resolve(v2);
  }
  return new Promise((_2, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const index = "";
const close = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" />\n</svg>\n';
const copyright = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path d="M10 16H14C14.2833 16 14.5208 15.9042 14.7125 15.7125C14.9042 15.5208 15 15.2833 15 15V13H13V14H11V10H13V11H15V9C15 8.71667 14.9042 8.47917 14.7125 8.2875C14.5208 8.09583 14.2833 8 14 8H10C9.71667 8 9.47917 8.09583 9.2875 8.2875C9.09583 8.47917 9 8.71667 9 9V15C9 15.2833 9.09583 15.5208 9.2875 15.7125C9.47917 15.9042 9.71667 16 10 16ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" />\n</svg>\n';
const dot = '<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n<circle cx="5.5" cy="5.63672" r="4" fill="#FFE0B2" stroke="#5D4037" stroke-width="2"/>\n</svg>\n';
const dotActive = '<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n<circle cx="5.5" cy="5.63672" r="4" fill="#5D4037" stroke="#5D4037" stroke-width="2"/>\n</svg>\n';
const expand = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/></svg>';
const facebook = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<g clip-path="url(#clip0_25_373)">\n<path d="M9.101 23.6909V15.7109H6.627V12.0439H9.101V10.4639C9.101 6.37895 10.949 4.48595 14.959 4.48595C15.36 4.48595 15.914 4.52795 16.427 4.58895C16.8112 4.62848 17.1924 4.69363 17.568 4.78395V8.10895C17.3509 8.08869 17.133 8.07668 16.915 8.07295C16.6707 8.0666 16.4264 8.0636 16.182 8.06395C15.475 8.06395 14.923 8.15995 14.507 8.37295C14.2273 8.51326 13.9922 8.72862 13.828 8.99495C13.57 9.41495 13.454 9.98995 13.454 10.7469V12.0439H17.373L16.987 14.1469L16.7 15.7109H13.454V23.9559C19.396 23.2379 24 18.1789 24 12.0439C24 5.41695 18.627 0.0439453 12 0.0439453C5.373 0.0439453 0 5.41695 0 12.0439C0 17.6719 3.874 22.3939 9.101 23.6909Z" />\n</g>\n<defs>\n<clipPath id="clip0_25_373">\n<rect width="24" height="24" />\n</clipPath>\n</defs>\n</svg>\n';
const instagram = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<g clip-path="url(#clip0_25_370)">\n<path d="M12 0C8.74 0 8.333 0.015 7.053 0.072C5.775 0.132 4.905 0.333 4.14 0.63C3.351 0.936 2.681 1.347 2.014 2.014C1.347 2.681 0.935 3.35 0.63 4.14C0.333 4.905 0.131 5.775 0.072 7.053C0.012 8.333 0 8.74 0 12C0 15.26 0.015 15.667 0.072 16.947C0.132 18.224 0.333 19.095 0.63 19.86C0.936 20.648 1.347 21.319 2.014 21.986C2.681 22.652 3.35 23.065 4.14 23.37C4.906 23.666 5.776 23.869 7.053 23.928C8.333 23.988 8.74 24 12 24C15.26 24 15.667 23.985 16.947 23.928C18.224 23.868 19.095 23.666 19.86 23.37C20.648 23.064 21.319 22.652 21.986 21.986C22.652 21.319 23.065 20.651 23.37 19.86C23.666 19.095 23.869 18.224 23.928 16.947C23.988 15.667 24 15.26 24 12C24 8.74 23.985 8.333 23.928 7.053C23.868 5.776 23.666 4.904 23.37 4.14C23.064 3.351 22.652 2.681 21.986 2.014C21.319 1.347 20.651 0.935 19.86 0.63C19.095 0.333 18.224 0.131 16.947 0.072C15.667 0.012 15.26 0 12 0ZM12 2.16C15.203 2.16 15.585 2.176 16.85 2.231C18.02 2.286 18.655 2.48 19.077 2.646C19.639 2.863 20.037 3.123 20.459 3.542C20.878 3.962 21.138 4.361 21.355 4.923C21.519 5.345 21.715 5.98 21.768 7.15C21.825 8.416 21.838 8.796 21.838 12C21.838 15.204 21.823 15.585 21.764 16.85C21.703 18.02 21.508 18.655 21.343 19.077C21.119 19.639 20.864 20.037 20.444 20.459C20.025 20.878 19.62 21.138 19.064 21.355C18.644 21.519 17.999 21.715 16.829 21.768C15.555 21.825 15.18 21.838 11.97 21.838C8.759 21.838 8.384 21.823 7.111 21.764C5.94 21.703 5.295 21.508 4.875 21.343C4.306 21.119 3.915 20.864 3.496 20.444C3.075 20.025 2.806 19.62 2.596 19.064C2.431 18.644 2.237 17.999 2.176 16.829C2.131 15.569 2.115 15.18 2.115 11.985C2.115 8.789 2.131 8.399 2.176 7.124C2.237 5.954 2.431 5.31 2.596 4.89C2.806 4.32 3.075 3.93 3.496 3.509C3.915 3.09 4.306 2.82 4.875 2.611C5.295 2.445 5.926 2.25 7.096 2.19C8.371 2.145 8.746 2.13 11.955 2.13L12 2.16ZM12 5.838C8.595 5.838 5.838 8.598 5.838 12C5.838 15.405 8.598 18.162 12 18.162C15.405 18.162 18.162 15.402 18.162 12C18.162 8.595 15.402 5.838 12 5.838ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16ZM19.846 5.595C19.846 6.39 19.2 7.035 18.406 7.035C17.611 7.035 16.966 6.389 16.966 5.595C16.966 4.801 17.612 4.156 18.406 4.156C19.199 4.155 19.846 4.801 19.846 5.595Z" />\n</g>\n<defs>\n<clipPath id="clip0_25_370">\n<rect width="24" height="24" />\n</clipPath>\n</defs>\n</svg>\n';
const menu = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" />\n</svg>\n';
const merch = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path d="M6 10.95L5 11.5C4.76667 11.6333 4.51667 11.6667 4.25 11.6C3.98333 11.5333 3.78333 11.3833 3.65 11.15L1.65 7.65C1.51667 7.41667 1.48333 7.16667 1.55 6.9C1.61667 6.63333 1.76667 6.43333 2 6.3L7.75 3H9.5C9.65 3 9.77083 3.04583 9.8625 3.1375C9.95417 3.22917 10 3.35 10 3.5V4C10 4.55 10.1958 5.02083 10.5875 5.4125C10.9792 5.80417 11.45 6 12 6C12.55 6 13.0208 5.80417 13.4125 5.4125C13.8042 5.02083 14 4.55 14 4V3.5C14 3.35 14.0458 3.22917 14.1375 3.1375C14.2292 3.04583 14.35 3 14.5 3H16.25L22 6.3C22.2333 6.43333 22.3833 6.63333 22.45 6.9C22.5167 7.16667 22.4833 7.41667 22.35 7.65L20.35 11.15C20.2167 11.3833 20.0208 11.5292 19.7625 11.5875C19.5042 11.6458 19.25 11.6083 19 11.475L18 10.975V20C18 20.2833 17.9042 20.5208 17.7125 20.7125C17.5208 20.9042 17.2833 21 17 21H7C6.71667 21 6.47917 20.9042 6.2875 20.7125C6.09583 20.5208 6 20.2833 6 20V10.95ZM8 7.6V19H16V7.6L19.1 9.3L20.15 7.55L15.85 5.05C15.6 5.9 15.1292 6.60417 14.4375 7.1625C13.7458 7.72083 12.9333 8 12 8C11.0667 8 10.2542 7.72083 9.5625 7.1625C8.87083 6.60417 8.4 5.9 8.15 5.05L3.85 7.55L4.9 9.3L8 7.6Z" />\n</svg>\n';
const send = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path d="M3 20V4L22 12L3 20ZM5 17L16.85 12L5 7V10.5L11 12L5 13.5V17Z" />\n</svg>\n';
const share = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path d="M18 22C17.1667 22 16.4583 21.7083 15.875 21.125C15.2917 20.5417 15 19.8333 15 19C15 18.8833 15.0083 18.7625 15.025 18.6375C15.0417 18.5125 15.0667 18.4 15.1 18.3L8.05 14.2C7.76667 14.45 7.45 14.6458 7.1 14.7875C6.75 14.9292 6.38333 15 6 15C5.16667 15 4.45833 14.7083 3.875 14.125C3.29167 13.5417 3 12.8333 3 12C3 11.1667 3.29167 10.4583 3.875 9.875C4.45833 9.29167 5.16667 9 6 9C6.38333 9 6.75 9.07083 7.1 9.2125C7.45 9.35417 7.76667 9.55 8.05 9.8L15.1 5.7C15.0667 5.6 15.0417 5.4875 15.025 5.3625C15.0083 5.2375 15 5.11667 15 5C15 4.16667 15.2917 3.45833 15.875 2.875C16.4583 2.29167 17.1667 2 18 2C18.8333 2 19.5417 2.29167 20.125 2.875C20.7083 3.45833 21 4.16667 21 5C21 5.83333 20.7083 6.54167 20.125 7.125C19.5417 7.70833 18.8333 8 18 8C17.6167 8 17.25 7.92917 16.9 7.7875C16.55 7.64583 16.2333 7.45 15.95 7.2L8.9 11.3C8.93333 11.4 8.95833 11.5125 8.975 11.6375C8.99167 11.7625 9 11.8833 9 12C9 12.1167 8.99167 12.2375 8.975 12.3625C8.95833 12.4875 8.93333 12.6 8.9 12.7L15.95 16.8C16.2333 16.55 16.55 16.3542 16.9 16.2125C17.25 16.0708 17.6167 16 18 16C18.8333 16 19.5417 16.2917 20.125 16.875C20.7083 17.4583 21 18.1667 21 19C21 19.8333 20.7083 20.5417 20.125 21.125C19.5417 21.7083 18.8333 22 18 22ZM18 6C18.2833 6 18.5208 5.90417 18.7125 5.7125C18.9042 5.52083 19 5.28333 19 5C19 4.71667 18.9042 4.47917 18.7125 4.2875C18.5208 4.09583 18.2833 4 18 4C17.7167 4 17.4792 4.09583 17.2875 4.2875C17.0958 4.47917 17 4.71667 17 5C17 5.28333 17.0958 5.52083 17.2875 5.7125C17.4792 5.90417 17.7167 6 18 6ZM6 13C6.28333 13 6.52083 12.9042 6.7125 12.7125C6.90417 12.5208 7 12.2833 7 12C7 11.7167 6.90417 11.4792 6.7125 11.2875C6.52083 11.0958 6.28333 11 6 11C5.71667 11 5.47917 11.0958 5.2875 11.2875C5.09583 11.4792 5 11.7167 5 12C5 12.2833 5.09583 12.5208 5.2875 12.7125C5.47917 12.9042 5.71667 13 6 13ZM18 20C18.2833 20 18.5208 19.9042 18.7125 19.7125C18.9042 19.5208 19 19.2833 19 19C19 18.7167 18.9042 18.4792 18.7125 18.2875C18.5208 18.0958 18.2833 18 18 18C17.7167 18 17.4792 18.0958 17.2875 18.2875C17.0958 18.4792 17 18.7167 17 19C17 19.2833 17.0958 19.5208 17.2875 19.7125C17.4792 19.9042 17.7167 20 18 20Z" />\n</svg>\n';
const tiktok = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<g clip-path="url(#clip0_25_375)">\n<path d="M12.525 0.02C13.835 0 15.135 0.01 16.435 0C16.515 1.53 17.065 3.09 18.185 4.17C19.305 5.28 20.885 5.79 22.425 5.96V9.99C20.985 9.94 19.535 9.64 18.225 9.02C17.655 8.76 17.125 8.43 16.605 8.09C16.595 11.01 16.615 13.93 16.585 16.84C16.505 18.24 16.045 19.63 15.235 20.78C13.925 22.7 11.655 23.95 9.325 23.99C7.895 24.07 6.465 23.68 5.245 22.96C3.225 21.77 1.805 19.59 1.595 17.25C1.575 16.75 1.565 16.25 1.585 15.76C1.765 13.86 2.705 12.04 4.165 10.8C5.825 9.36 8.145 8.67 10.315 9.08C10.335 10.56 10.275 12.04 10.275 13.52C9.285 13.2 8.125 13.29 7.255 13.89C6.625 14.3 6.145 14.93 5.895 15.64C5.685 16.15 5.745 16.71 5.755 17.25C5.995 18.89 7.575 20.27 9.255 20.12C10.375 20.11 11.445 19.46 12.025 18.51C12.215 18.18 12.425 17.84 12.435 17.45C12.535 15.66 12.495 13.88 12.505 12.09C12.515 8.06 12.495 4.04 12.525 0.02Z" />\n</g>\n<defs>\n<clipPath id="clip0_25_375">\n<rect width="24" height="24" />\n</clipPath>\n</defs>\n</svg>\n';
const x = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path d="M18.901 1.15308H22.581L14.541 10.3431L24 22.8461H16.594L10.794 15.2621L4.156 22.8461H0.474L9.074 13.0161L0 1.15408H7.594L12.837 8.08608L18.901 1.15308ZM17.61 20.6441H19.649L6.486 3.24008H4.298L17.61 20.6441Z" />\n</svg>\n';
const youtube = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path d="M23.498 6.18592C23.3624 5.6752 23.095 5.20906 22.7226 4.83419C22.3502 4.45931 21.8858 4.18886 21.376 4.04992C19.505 3.54492 12 3.54492 12 3.54492C12 3.54492 4.495 3.54492 2.623 4.04992C2.11341 4.18911 1.64929 4.45966 1.27708 4.8345C0.904861 5.20935 0.637591 5.67536 0.502 6.18592C0 8.06992 0 11.9999 0 11.9999C0 11.9999 0 15.9299 0.502 17.8139C0.637586 18.3246 0.904975 18.7908 1.27739 19.1657C1.64981 19.5405 2.11418 19.811 2.624 19.9499C4.495 20.4549 12 20.4549 12 20.4549C12 20.4549 19.505 20.4549 21.377 19.9499C21.8869 19.8111 22.3513 19.5407 22.7237 19.1658C23.0961 18.7909 23.3635 18.3247 23.499 17.8139C24 15.9299 24 11.9999 24 11.9999C24 11.9999 24 8.06992 23.498 6.18592ZM9.545 15.5679V8.43192L15.818 11.9999L9.545 15.5679Z" />\n</svg>\n';
const IconWrapper = ut.div`
    --size: ${({ $size }) => ({ normal: 3.2, big: 4.2 })[$size]}rem;
    height: var(--size);
    width: var(--size);
    pointer-events: none;

    ${({ theme: theme2, $isClickable }) => $isClickable && at`
            position: relative;
            pointer-events: unset;
            cursor: pointer;
            &::after {
                position: absolute;
                top: -0.5rem;
                left: -0.5rem;
                content: '';
                display: block;
                height: calc(100% + 1rem);
                width: calc(100% + 1rem);
                transition: background-color 0.1s ease-out;
                border-radius: 100%;
            }

            &:hover::after {
                content: '';
                background-color: ${theme2.palette.shades.secondary[18]};
            }
        `}

    & > svg {
        height: inherit;
        width: inherit;
    }
`;
const adjustSizes = (rawSvg, size) => {
  const sizeValue = { normal: 3.2, big: 4.2 }[size];
  const width = 'width="';
  const height = 'height="';
  const startIndexOfWidth = rawSvg.indexOf(width);
  const endIndexOfWidth = rawSvg.indexOf('"', startIndexOfWidth + width.length);
  const oldWidth = rawSvg.slice(startIndexOfWidth, endIndexOfWidth + 1);
  const startIndexOfHeight = rawSvg.indexOf(height);
  const endIndexOfHeight = rawSvg.indexOf('"', startIndexOfHeight + height.length);
  const oldHeight = rawSvg.slice(startIndexOfHeight, endIndexOfHeight + 1);
  const newWidth = `${width}${sizeValue}rem"`;
  const newHeight = `${height}${sizeValue}rem"`;
  return rawSvg.replace(oldWidth, newWidth).replace(oldHeight, newHeight);
};
const Icon = ({ size = "normal", variant = "close", onClick }) => {
  const svg = {
    close,
    copyright,
    facebook,
    instagram,
    menu,
    merch,
    send,
    share,
    tiktok,
    x,
    youtube,
    expand,
    dot,
    dotActive
  }[variant];
  return /* @__PURE__ */ jsx(
    IconWrapper,
    {
      onClick,
      $size: size,
      $isClickable: !!onClick,
      dangerouslySetInnerHTML: { __html: adjustSizes(svg, size) }
    }
  );
};
const logo = '<svg width="400" height="424" viewBox="0 0 400 424" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <g id="Glasses">\n        <path id="nose" d="M208.464 105.381C204.792 97.9623 194.211 97.9623 190.539 105.381L149.055 189.201C145.765 195.847 150.601 203.636 158.017 203.636H240.985C248.401 203.636 253.237 195.847 249.948 189.201L208.464 105.381Z" fill="#FFE0B2"/>\n        <path d="M219.001 96.9697C219.001 145.196 257.25 183.939 304.002 183.939C350.754 183.939 389.003 145.196 389.003 96.9697C389.003 48.7433 350.754 10 304.002 10C257.25 10 219.001 48.7433 219.001 96.9697Z" stroke="#FFE0B2" stroke-width="20"/>\n        <path d="M10 96.9697C10 145.196 48.2485 183.939 95.0006 183.939C141.753 183.939 180.001 145.196 180.001 96.9697C180.001 48.7433 141.753 10 95.0006 10C48.2485 10 10 48.7433 10 96.9697Z" stroke="#FFE0B2" stroke-width="20"/>\n        <rect width="28.5002" height="19.3939" transform="matrix(-1 0 0 1 213.751 87.2727)" fill="#FFE0B2"/>\n    </g>\n    <g id="Beer">\n        <rect id="Rectangle 4" width="179.551" height="180" transform="matrix(-1 0 0 1 380.05 224)" fill="#FFCA28"/>\n        <rect id="Rectangle 2" width="219.451" height="20" transform="matrix(-1 0 0 1 400 204)" fill="white"/>\n        <rect id="Rectangle 3" width="179.551" height="20" transform="matrix(-1 0 0 1 380.05 404)" fill="white"/>\n        <line id="Line 1" y1="-10" x2="200.993" y2="-10" transform="matrix(-0.099258 0.995062 0.995013 0.09975 400 224)" stroke="white" stroke-width="20"/>\n        <line id="Line 2" y1="-10" x2="200.99" y2="-10" transform="matrix(-0.0992478 -0.995063 -0.995014 0.0997397 200.508 423.999)" stroke="white" stroke-width="20"/>\n        <ellipse id="Ellipse 5" cx="2.49377" cy="2.5" rx="2.49377" ry="2.5" transform="matrix(-1 0 0 1 290.274 384)" fill="white"/>\n        <ellipse id="Ellipse 6" cx="3.49127" cy="3.5" rx="3.49127" ry="3.5" transform="matrix(-1 0 0 1 300.249 374)" fill="white"/>\n        <ellipse id="Ellipse 7" cx="4.98753" cy="5" rx="4.98753" ry="5" transform="matrix(-1 0 0 1 290.274 364)" fill="white"/>\n        <ellipse id="Ellipse 8" cx="7.4813" cy="7.5" rx="7.4813" ry="7.5" transform="matrix(-1 0 0 1 310.224 344)" fill="white"/>\n        <ellipse id="Ellipse 9" cx="9.97506" cy="10" rx="9.97506" ry="10" transform="matrix(-1 0 0 1 290.274 324)" fill="white"/>\n        <path id="Rectangle 5" d="M302.244 194C302.244 182.954 293.29 174 282.244 174H232.494C215.925 174 202.494 187.431 202.494 204H302.244V194Z" fill="white"/>\n        <path id="Rectangle 6" d="M380.05 204C380.05 187.431 366.618 174 350.05 174H290.349C273.781 174 260.349 187.431 260.349 204H380.05Z" fill="white"/>\n        <path id="Rectangle 7" d="M320.199 204.875C320.199 177.33 297.87 155 270.324 155C242.779 155 220.449 177.33 220.449 204.875V209H320.199V204.875Z" fill="white"/>\n    </g>\n    <g id="Coffee">\n        <path id="Rectangle 8" d="M0 260H200.167V373.636C200.167 401.251 177.782 423.636 150.167 423.636H50C22.3858 423.636 0 401.251 0 373.636V260Z" fill="#BDBDBD"/>\n        <path id="Rectangle 9" d="M184.665 270H239.352C244.874 270 249.352 274.477 249.352 280V290C249.352 312.091 231.443 330 209.352 330H184.665V270Z" stroke="#BDBDBD" stroke-width="20"/>\n        <ellipse id="Ellipse 10" cx="99.7506" cy="260" rx="99.7506" ry="30" fill="#E0E0E0"/>\n        <ellipse id="Ellipse 11" cx="99.7506" cy="260" rx="79.8005" ry="20" fill="#5D4037"/>\n    </g>\n</svg>\n';
const LogoWrapper = ut.div`
    height: 8rem;
    width: fit-content;

    & > svg {
        height: 100%;
        width: 100%;
    }

    ${({ theme: theme2, $isDark }) => $isDark && at`
            & > svg > #Glasses {
                & > path {
                    stroke: ${theme2.palette.secondary};
                }

                & > #nose,
                rect {
                    fill: ${theme2.palette.secondary};
                }
            }
        `}

    ${({ theme: theme2, $withFrame }) => $withFrame && at`
            height: 7rem;
            padding: 1rem;
            border-radius: 2rem;
            background-color: ${theme2.palette.shades.secondary[48]};
        `}
`;
const Logo = ({ isDark, withFrame }) => {
  return /* @__PURE__ */ jsx(
    LogoWrapper,
    {
      $isDark: isDark,
      $withFrame: withFrame,
      dangerouslySetInnerHTML: { __html: logo }
    }
  );
};
const SLink = ut.a`
    font-size: inherit;
    text-decoration: none;
    color: inherit;
`;
const Link = ({ children, href = "#" }) => {
  return /* @__PURE__ */ jsx(
    SLink,
    {
      href,
      target: typeof href === "string" && href.startsWith("#") ? "_self" : "_blank",
      rel: "noopener",
      children: children ?? href
    }
  );
};
const NavigationList = ut.ul`
    display: flex;
    font-size: 2.8rem;

    ${({ theme: theme2, $variant }) => ({
  header: at`
                flex-direction: row;
                column-gap: 6rem;
                color: ${theme2.palette.primary};
            `,
  headerMobile: at`
                position: absolute;
                top: 100%;
                left: -2rem;
                width: calc(100% + 4rem);
                padding: 0 3rem 1rem 3rem;
                flex-direction: column;
                color: ${theme2.palette.secondary};
                background-color: ${theme2.palette.shades.primary[87]};
            `,
  footer: at`
                flex-direction: column;
                font-size: 1.4rem;
                gap: 1rem;
                color: ${theme2.palette.shades.primary[48]};
            `
})[$variant]}
`;
const NavigationItem = ut.li`
    cursor: pointer;

    ${({ theme: theme2, $variant, $isCurrent }) => ({
  header: at`
                transition: opacity 0.1s ease-out;

                &:hover {
                    opacity: 0.5;
                }
            `,
  headerMobile: at`
                & > ${SLink} {
                    display: block;
                    padding: 1rem;
                    text-align: center;
                    transition: background-color 0.1s ease-out;

                    &:hover {
                        background-color: ${theme2.palette.shades.secondary[38]};
                    }
                }
            `,
  footer: at`
                font-size: 1.4rem;
                color: ${theme2.palette.shades.secondary[48]};
                transition: color 0.1s ease-out;

                &:hover {
                    color: ${theme2.palette.secondary};
                }

                ${$isCurrent && at`
                    color: ${theme2.palette.secondary};
                    pointer-events: none;
                `}
            `
})[$variant]}
`;
const Navigation = ({ variant, links, onItemClickCallback }) => {
  return /* @__PURE__ */ jsx(NavigationList, { $variant: variant, children: links.length > 0 && links.map(({ isCurrent, children, href }, index2) => /* @__PURE__ */ jsx(
    NavigationItem,
    {
      $isCurrent: isCurrent,
      $variant: variant,
      onClick: onItemClickCallback,
      children: /* @__PURE__ */ jsx(Link, { href, children })
    },
    index2
  )) });
};
const messages$6 = defineMessages({
  siteLinks: {
    id: "app.layout.footer.siteLinks",
    description: "Footer link to general site links.",
    defaultMessage: "Site Links"
  },
  altLinks: {
    id: "app.layout.footer.altLinks",
    description: "Footer link to alternative versions of the site.",
    defaultMessage: "Alternative versions of this site"
  },
  myLinks: {
    id: "app.layout.footer.myLinks",
    description: "Footer link to personal links or information.",
    defaultMessage: "My links"
  }
});
const SFooter = ut.footer`
    width: 100%;
    padding: 2rem;
    color: ${({ theme: theme2 }) => theme2.palette.primary};
`;
const InnerFooter = ut.div`
    margin: 0 auto;
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;
const UpperPart = ut.div`
    display: flex;
    justify-content: center;
    column-gap: 2rem;
`;
const FooterSectionsContainer = ut.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
`;
const FooterSection = ut.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`;
const FooterSectionName = ut.span`
    color: ${({ theme: theme2 }) => theme2.palette.secondary};
    border-bottom: ${({ theme: theme2 }) => theme2.border.secondary};
    border-color: ${({ theme: theme2 }) => theme2.palette.shades.secondary[38]};
`;
const Copyrights = ut.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    column-gap: 1rem;
    color: ${({ theme: theme2 }) => theme2.palette.shades.secondary[48]};
    font-size: 1.6rem;

    & > ${IconWrapper} {
        fill: ${({ theme: theme2 }) => theme2.palette.shades.secondary[48]};
    }
`;
const Footer = ({ siteLinks, altLinks, myLinks }) => {
  return /* @__PURE__ */ jsx(SFooter, { children: /* @__PURE__ */ jsxs(InnerFooter, { children: [
    /* @__PURE__ */ jsxs(UpperPart, { children: [
      /* @__PURE__ */ jsx(Logo, { withFrame: true }),
      /* @__PURE__ */ jsxs(FooterSectionsContainer, { children: [
        /* @__PURE__ */ jsxs(FooterSection, { children: [
          /* @__PURE__ */ jsx(FooterSectionName, { children: /* @__PURE__ */ jsx(FormattedMessage, { ...messages$6.siteLinks }) }),
          /* @__PURE__ */ jsx(Navigation, { links: siteLinks, variant: "footer" })
        ] }),
        /* @__PURE__ */ jsxs(FooterSection, { children: [
          /* @__PURE__ */ jsx(FooterSectionName, { children: /* @__PURE__ */ jsx(FormattedMessage, { ...messages$6.altLinks }) }),
          /* @__PURE__ */ jsx(Navigation, { links: altLinks, variant: "footer" })
        ] }),
        /* @__PURE__ */ jsxs(FooterSection, { children: [
          /* @__PURE__ */ jsx(FooterSectionName, { children: /* @__PURE__ */ jsx(FormattedMessage, { ...messages$6.myLinks }) }),
          /* @__PURE__ */ jsx(Navigation, { links: myLinks, variant: "footer" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Copyrights, { children: [
      /* @__PURE__ */ jsx(Icon, { variant: "copyright" }),
      "Copyright 2024"
    ] })
  ] }) });
};
const messages$5 = defineMessages({
  home: {
    id: "app.layout.home",
    description: "Navigation link to the 'Home' page.",
    defaultMessage: "Home"
  },
  offer: {
    id: "app.layout.offer",
    description: "Navigation link to the 'Offer' section.",
    defaultMessage: "Offer"
  },
  about: {
    id: "app.layout.about",
    description: "Navigation link to the 'About' section.",
    defaultMessage: "About"
  },
  contact: {
    id: "app.layout.contact",
    description: "Navigation link to the 'Contact' section.",
    defaultMessage: "Contact"
  },
  react: {
    id: "app.layout.react",
    description: "Navigation link to the react verssion of app.",
    defaultMessage: "React (current)"
  },
  repository: {
    id: "app.layout.repository",
    description: "Navigation link to the project's repository section.",
    defaultMessage: "Current project's repository"
  },
  figma: {
    id: "app.layout.figma",
    description: "Navigation link to the project's figma section.",
    defaultMessage: "Website Figma project"
  }
});
const SLayout = ut.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme: theme2 }) => theme2.palette.primary};
`;
const Layout = ({ children }) => {
  const intl = useIntl();
  const siteLinks = [
    { children: intl.formatMessage(messages$5.home), href: "#home" },
    { children: intl.formatMessage(messages$5.offer), href: "#offer" },
    { children: intl.formatMessage(messages$5.about), href: "#about" },
    { children: intl.formatMessage(messages$5.contact), href: "#contact" }
  ];
  const altLinks = [{ children: intl.formatMessage(messages$5.react), href: "#", isCurrent: true }];
  const myLinks = [
    { children: "LinkedIn", href: "https://www.linkedin.com/in/bartlomiej-sniatkowski/" },
    { children: "Github", href: "https://github.com/BSniatkowski" },
    {
      children: intl.formatMessage(messages$5.repository),
      href: "https://github.com/BSniatkowski/z-nosem-w-piwie-react"
    },
    {
      children: intl.formatMessage(messages$5.figma),
      href: "https://www.figma.com/file/7sIhgDCOUo9jGmuUOFngF9/Z-Nosem-W-Piwie?type=design&node-id=0-1&mode=design&t=RaFAvIdMTLGsTKoS-0"
    }
  ];
  return /* @__PURE__ */ jsxs(SLayout, { children: [
    children,
    /* @__PURE__ */ jsx(Footer, { siteLinks, altLinks, myLinks })
  ] });
};
const beer_1 = "/imgs/beer_1.png";
const beer_2 = "/imgs/beer_2.png";
const beer_3 = "/imgs/beer_3.png";
const coffee_1 = "/imgs/coffee.png";
const coffee_2 = "/imgs/coffee_2.png";
const coffee_3 = "/imgs/coffee_3.png";
const event_1 = "/imgs/event_1.png";
const event_2 = "/imgs/event_2.png";
const event_3 = "/imgs/event_3.png";
const merch_1 = "/imgs/tshirt.png";
const PL = "pl-PL";
const EN = "en-GB";
const locales = [PL, EN];
const offerData = {
  beers: [
    {
      translations: {
        [EN]: {
          name: "India Pale Ale (IPA)",
          description: "India Pale Ale (IPA) is a beer style characterized by its hoppy flavor profile and higher alcohol content. Originating in England, IPAs gained popularity due to their robustness and ability to withstand long journeys to British troops stationed in India during the 18th century. These beers are known for their prominent hop bitterness, often featuring floral, piney, or citrusy aromas and flavors derived from hops. There are various subcategories within IPAs, such as American IPA, New England IPA, and Double IPA, each with distinct hop profiles and brewing techniques. IPAs typically exhibit a golden to amber color and are favored by craft beer enthusiasts for their bold, bitter, and often fruity characteristics."
        },
        [PL]: {
          name: "India Pale Ale (IPA)",
          description: "India Pale Ale (IPA) to styl piwa charakteryzujący się chmielowym profilem smakowym i wyższą zawartością alkoholu. Pochodzący z Anglii, IPA zyskały popularność ze względu na swoją wytrzymałość i zdolność do przetrwania długich podróży do brytyjskich oddziałów stacjonujących w Indiach w XVIII wieku. Te piwa są znane z wyraźnej goryczki chmielu, często z nutami kwiatowymi, sosnowymi lub cytrusowymi aromatami i smakami pochodzącymi od chmielu. Istnieje wiele podkategorii wśród IPA, takich jak American IPA, New England IPA i Double IPA, z każdą z nich charakteryzującą się unikalnym profilem chmielu i technikami warzenia. IPA zazwyczaj mają złoto-ambrowy kolor i są cenione przez miłośników piwa rzemieślniczego za swoje odważne, goryczkowe i często owocowe cechy."
        }
      },
      capacity: 0.5,
      price: 16,
      imgSrc: beer_1
    },
    {
      translations: {
        [EN]: {
          name: "Stout",
          description: "Stout is a dark, rich beer known for its creamy texture, full-bodied nature, and roasted malt flavors. It originated in the United Kingdom and has several variations, including Dry Stout (Irish Stout), Imperial Stout, and Milk Stout (Sweet Stout). Stouts typically showcase dark, roasted malt flavors that impart coffee, chocolate, caramel, and sometimes even nutty or toasty notes. The use of roasted barley in the brewing process gives stouts their distinct dark color and contributes to their robust flavor profile. While some stouts have a higher alcohol content, they are generally characterized by their smoothness and can range from sweet to bitter in taste, making them a favorite among beer enthusiasts seeking a hearty and flavorful brew."
        },
        [PL]: {
          name: "Stout",
          description: "Stout to ciemne, bogate piwo znane z kremowej tekstury, pełnego smaku i aromatu palonych słodów. Pochodzi z Wielkiej Brytanii i ma kilka odmian, w tym Dry Stout (Irish Stout), Imperial Stout i Milk Stout (Sweet Stout). Stouty zazwyczaj prezentują ciemne, palone smaki słodów, które nadają nuty kawy, czekolady, karmelu, a czasami nawet orzechowe lub tostowe. Użycie palonego jęczmienia w procesie warzenia nadaje stoutom charakterystyczny ciemny kolor i przyczynia się do ich intensywnego profilu smakowego. Choć niektóre stouty mają wyższą zawartość alkoholu, są one generalnie charakteryzowane przez swoją gładkość i mogą mieć smak od słodkiego do gorzkiego, co czyni je ulubionym wyborem miłośników piwa poszukujących sycącego i aromatycznego napoju."
        }
      },
      capacity: 0.5,
      price: 16,
      imgSrc: beer_2
    },
    {
      translations: {
        [EN]: {
          name: "Pilsner",
          description: "Pilsner is a pale lager that originated in the Czech Republic, specifically in the city of Pilsen. It is renowned for its crisp, clean taste, golden hue, and refreshing qualities. Pilsners are typically light-bodied with a moderate hop bitterness and a prominent malt presence. They often have a noticeable but balanced hoppy aroma, with floral or spicy notes derived from noble hops. Pilsners undergo a lagering process that contributes to their clarity and smoothness, making them highly drinkable and widely popular, particularly during warm weather. Known for their well-balanced flavors and effervescence, Pilsners remain a go-to choice for those seeking a refreshing and sessionable beer style."
        },
        [PL]: {
          name: "Pilsner",
          description: "Pilsner to jasny lager pochodzący z Czech, konkretnie z miasta Pilzno. Jest znany ze swojego klarownego, czystego smaku, złotego koloru i orzeźwiających cech. Pilsnery zazwyczaj są lekkie, z umiarkowaną goryczką chmielu i wyraźną obecnością słodu. Często mają zauważalny, ale zrównoważony aromat chmielu, z nutami kwiatowymi lub pikantnymi pochodzącymi od szlachetnych odmian chmielu. Pilsnery przechodzą proces leżakowania, który przyczynia się do ich klarowności i gładkości, sprawiając, że są wyjątkowo pijalne i szeroko popularne, zwłaszcza podczas ciepłej pogody. Znane ze swoich zrównoważonych smaków i musujących właściwości, Pilsnery pozostają popularnym wyborem dla tych, którzy szukają orzeźwiającego i sesyjnego stylu piwa."
        }
      },
      capacity: 0.5,
      price: 16,
      imgSrc: beer_3
    },
    {
      translations: {
        [EN]: {
          name: "Pale Ale",
          description: "Pale Ale is a beer style known for its balanced yet flavorful profile. It typically exhibits a copper to amber color and showcases a moderate hop presence coupled with a substantial malt backbone. With origins in Britain, Pale Ales offer a harmonious blend of hoppy bitterness and malt sweetness, often featuring fruity, floral, or citrusy hop aromas and flavors. There are various subcategories within Pale Ales, such as American Pale Ale and English Bitter, each with unique characteristics stemming from different hop varieties and brewing techniques. Pale Ales are often less bitter than IPAs, making them approachable for a wide range of beer enthusiasts, and they provide a pleasant drinking experience with their well-rounded flavors."
        },
        [PL]: {
          name: "Pale Ale",
          description: "Pale Ale to styl piwa znany ze zrównoważonego, ale aromatycznego profilu. Zazwyczaj prezentuje miedziany lub bursztynowy kolor i charakteryzuje się umiarkowaną obecnością chmielu w połączeniu z solidną bazą słodową. Wywodzące się z Wielkiej Brytanii, Pale Ale oferuje harmonijną mieszankę goryczki chmielowej i słodowej słodyczy, często z nutami owocowymi, kwiatowymi lub cytrusowymi aromatami i smakami chmielu. Istnieje wiele podkategorii wśród Pale Ale, takich jak American Pale Ale i English Bitter, z unikalnymi cechami wynikającymi z różnych odmian chmielu i technik warzenia. Pale Ale są często mniej gorzkie niż IPA, co sprawia, że są dostępne dla szerokiego spektrum miłośników piwa, i zapewniają przyjemne doświadczenie degustacyjne dzięki swoim zrównoważonym smakom."
        }
      },
      capacity: 0.5,
      price: 16,
      imgSrc: beer_1
    },
    {
      translations: {
        [EN]: {
          name: "Hefeweizen",
          description: "Hefeweizen is a traditional German wheat beer celebrated for its cloudy appearance and distinctive yeast-derived flavors. Brewed with a significant portion of wheat malt, Hefeweizens are known for their refreshing and effervescent nature. They often display a hazy, straw-colored appearance and a tall, foamy head. These beers commonly exhibit flavors and aromas reminiscent of banana, clove, and sometimes even bubblegum, which are produced by specific strains of yeast used during fermentation. Hefeweizens tend to be light-bodied, moderately carbonated, and offer a delightful balance between fruity esters and subtle spiciness, making them a popular choice, especially during warmer months."
        },
        [PL]: {
          name: "Hefeweizen",
          description: "Hefeweizen to tradycyjne niemieckie piwo pszeniczne cenione za swoją mętną aparycję i charakterystyczne smaki pochodzące od drożdży. Warzone z znaczną ilością słodu pszenicznego, Hefeweizeny są znane z orzeźwiającej i musującej natury. Często prezentują mętną, słomkową barwę i wysoką, piankową głowę. Te piwa często wykazują smaki i aromaty przypominające banan, goździk, a czasami nawet gumę do żucia, które są produkowane przez konkretne szczepy drożdży używane podczas fermentacji. Hefeweizeny mają tendencję do bycia lekkimi, umiarkowanie gazowanymi i oferują uroczy balans między owocowymi esterami a subtelnością pikantności, co sprawia, że są popularnym wyborem, zwłaszcza w cieplejszych miesiącach."
        }
      },
      capacity: 0.5,
      price: 16,
      imgSrc: beer_2
    },
    {
      translations: {
        [EN]: {
          name: "Saison",
          description: "Saison, originating from Belgium, is a farmhouse ale recognized for its complex yet refreshing character. Historically brewed in the winter for consumption during the summer by farmworkers ('saisonniers'), this beer style offers a diverse range of flavors and aromas. Saisons often possess a hazy, golden appearance and showcase fruity, spicy yeast characteristics alongside a moderate hop presence. They can feature a wide array of flavors, including notes of pepper, citrus, earthiness, and even a mild tartness. Saisons are typically dry and effervescent with a moderate to high level of carbonation, providing a refreshing and complex drinking experience that pairs well with a variety of cuisines."
        },
        [PL]: {
          name: "Saison",
          description: "Saison, pochodzący z Belgii, to ale farmeryjskie uznawane za swoją złożoną, a jednocześnie orzeźwiającą charakterystykę. Historycznie warzone zimą do spożycia latem przez pracowników rolnych ('saisonniers'), ten styl piwa oferuje różnorodny zakres smaków i aromatów. Saisony często posiadają mętną, złotą aparycję i prezentują owocowe, pikantne cechy drożdży w połączeniu z umiarkowaną obecnością chmielu. Mogą mieć różnorodne smaki, w tym nuty pieprzu, cytrusów, ziemistości, a nawet łagodną kwasowość. Saisony są zazwyczaj suche i musujące, z umiarkowanym do wysokiego poziomu nasycenia, co zapewnia orzeźwiające i złożone doświadczenie degustacyjne, które doskonale komponuje się z różnorodnymi kuchniami."
        }
      },
      capacity: 0.5,
      price: 16,
      imgSrc: beer_3
    }
  ],
  coffee: [
    {
      translations: {
        [EN]: {
          name: "Espresso",
          description: "Espresso is a concentrated coffee beverage brewed by forcing a small amount of nearly boiling water through finely-ground coffee beans. This method extracts intense flavors, resulting in a rich, velvety, and highly aromatic shot of coffee. Typically served in small, demitasse-sized cups, espresso is known for its robustness, strong flavor profile, and a layer of golden crema on top, which consists of oils and gases emulsified during the brewing process. It serves as the foundation for various coffee drinks like cappuccinos, lattes, and macchiatos. The taste of espresso can range from slightly sweet to notably bitter, depending on the beans used and the brewing technique employed."
        },
        [PL]: {
          name: "Espresso",
          description: "Espresso to skoncentrowany napój kawowy przygotowywany przez przepuszczanie niewielkiej ilości prawie wrzącej wody przez drobno zmielone ziarna kawy. Ta metoda wyciąga intensywne smaki, dając bogate, aksamitne i silnie aromatyczne espresso. Zazwyczaj podawane w małych filiżankach typu demitasse, espresso jest znane ze swojej solidności, intensywnego profilu smakowego i warstwy złotej cremy na wierzchu, składającej się z olejów i gazów emulgowanych podczas procesu parzenia. Jest podstawą do przygotowywania różnych napojów kawowych, takich jak cappuccino, latte i macchiato. Smak espresso może się różnić od lekko słodkiego do zauważalnie gorzkiego, w zależności od użytych ziaren i zastosowanej techniki parzenia."
        }
      },
      capacity: 0.3,
      price: 16,
      imgSrc: coffee_1
    },
    {
      translations: {
        [EN]: {
          name: "Cappuccino",
          description: "Cappuccino is a popular espresso-based drink made by combining equal parts of espresso, steamed milk, and milk foam. It's known for its luxurious creamy texture and balanced flavors. The espresso forms the base, while the steamed milk adds a velvety smoothness, and the milk foam crowns the drink, providing a frothy layer. Typically served in a cup smaller than a latte, cappuccinos offer a strong coffee flavor balanced by the milk, making it a favorite choice for those seeking a harmonious blend of espresso strength and creamy richness."
        },
        [PL]: {
          name: "Cappuccino",
          description: "Cappuccino to popularny napój oparty na espresso, przygotowywany poprzez połączenie równych części espresso, mleka parzonego i pianki mlecznej. Znany jest z luksusowej, kremowej tekstury i zrównoważonych smaków. Espresso stanowi bazę, podczas gdy mleko parzone dodaje aksamitnej gładkości, a pianka mleczna wieńczy napój, tworząc puchatą warstwę. Zazwyczaj podawane w filiżance mniejszej niż latte, cappuccino oferuje silny smak kawy zrównoważony przez mleko, co czyni go ulubionym wyborem dla tych, którzy szukają harmonijnego połączenia siły espresso i kremowej słodyczy."
        }
      },
      capacity: 0.3,
      price: 16,
      imgSrc: coffee_2
    },
    {
      translations: {
        [EN]: {
          name: "Cold Brew",
          description: "Cold brew is a coffee preparation method where coarse coffee grounds are steeped in cold water for an extended period, usually 12 to 24 hours. This slow extraction process produces a smooth, less acidic, and highly caffeinated coffee concentrate. Cold brew is appreciated for its milder, less bitter taste compared to traditionally brewed coffee, making it an excellent choice for those who prefer a smoother and less acidic coffee experience. It is often served over ice and can be customized with milk, cream, or flavored syrups to create a refreshing and customizable beverage. Cold brew's popularity has risen significantly due to its versatility and refreshing qualities, especially during warm weather."
        },
        [PL]: {
          name: "Cold Brew",
          description: "Cold brew to metoda przygotowywania kawy, w której grubo zmielone ziarna kawy są macerowane w zimnej wodzie przez przedłużony okres, zazwyczaj od 12 do 24 godzin. Ten proces powolnej ekstrakcji produkuje gładki, mniej kwasowy i silnie kofeinowany koncentrat kawy. Cold brew cieszy się uznaniem za swój łagodniejszy, mniej gorzki smak w porównaniu z tradycyjnie parzoną kawą, co czyni go doskonałym wyborem dla tych, którzy preferują łagodniejsze i mniej kwasowe doświadczenie kawowe. Często podawany jest na lodzie i można go dostosować, dodając mleko, śmietanę lub syropy smakowe, aby stworzyć orzeźwiający i dostosowywalny napój. Popularność cold brew znacząco wzrosła ze względu na jego wszechstronność i orzeźwiające cechy, zwłaszcza podczas ciepłej pogody."
        }
      },
      capacity: 0.3,
      price: 16,
      imgSrc: coffee_3
    },
    {
      translations: {
        [EN]: {
          name: "Latte",
          description: "A latte is an espresso-based drink made with a shot of espresso and steamed milk, topped with a small amount of milk foam. It's a milder and creamier coffee option compared to drinks like cappuccinos. Lattes have a higher ratio of milk to espresso, resulting in a smoother and more subdued coffee flavor. They are often served in larger cups or glasses and can be customized with flavored syrups such as vanilla, caramel, or hazelnut, allowing for a wide range of taste variations. Lattes are popular for their comforting and creamy texture, making them a favorite choice for those who enjoy a more milk-forward coffee experience."
        },
        [PL]: {
          name: "Latte",
          description: "Latte to napój oparty na espresso, przygotowywany z jednym strzałem espresso, mlekiem parzonym i niewielką ilością pianki mlecznej. Jest łagodniejszą i kremową opcją kawową w porównaniu do napojów takich jak cappuccino. Latte ma wyższy stosunek mleka do espresso, co sprawia, że smak kawy jest bardziej gładki i łagodny. Często podawane w większych filiżankach lub szklankach i można je dostosować, dodając syropy smakowe, takie jak waniliowy, karmelowy lub laskowy, co pozwala na szeroki zakres wariacji smakowych. Latte cieszy się popularnością ze względu na swoją kojącą i kremową teksturę, co sprawia, że jest ulubionym wyborem dla tych, którzy preferują bardziej mleczne doświadczenie kawowe."
        }
      },
      capacity: 0.3,
      price: 16,
      imgSrc: coffee_1
    },
    {
      translations: {
        [EN]: {
          name: "Macchiato",
          description: 'A macchiato, which translates to "stained" or "marked" in Italian, is an espresso-based drink characterized by a shot of espresso "marked" with a small amount of steamed milk or milk foam. This results in a strong coffee flavor with a touch of milkiness. There are two main variations: the traditional macchiato, which features just a dollop of foam, and the more modern version, known as a "latte macchiato," where a shot of espresso is added to a glass of steamed milk, creating layers of espresso and milk. The macchiato offers a balance between the intensity of espresso and the slight creaminess of milk, appealing to those who enjoy a stronger coffee taste but with a touch of milk.'
        },
        [PL]: {
          name: "Macchiato",
          description: 'Macchiato, co w języku włoskim oznacza "plamiony" lub "oznaczony", to napój oparty na espresso, charakteryzujący się strzałem espresso "oznaczonym" niewielką ilością mleka parzonego lub pianki mlecznej. Efektem jest silny smak kawy z lekką nutą mleczności. Istnieją dwie główne wersje: tradycyjne macchiato, które obejmuje jedynie niewielką ilość pianki, oraz bardziej nowoczesną wersję, znana jako "latte macchiato", gdzie strzał espresso dodawany jest do szkła z mlekiem parzonym, tworząc warstwy espresso i mleka. Macchiato oferuje równowagę między intensywnością espresso a lekką kremowością mleka, przyciągając tych, którzy lubią mocniejszy smak kawy, ale z nutą mleka.'
        }
      },
      capacity: 0.3,
      price: 16,
      imgSrc: coffee_2
    },
    {
      translations: {
        [EN]: {
          name: "Pour-Over Coffee",
          description: "Pour-over coffee is a manual brewing method that involves pouring hot water over coffee grounds placed in a filter, allowing the water to slowly drip through into a serving vessel below. This technique allows for precise control over brewing variables such as water temperature, pour rate, and coffee-to-water ratio, resulting in a clean, nuanced, and flavorful cup of coffee. The pour-over method emphasizes the use of fresh, high-quality coffee beans and allows the drinker to appreciate the subtle nuances of different coffee varieties. It's favored by coffee enthusiasts who appreciate the ritualistic and hands-on approach to brewing coffee and enjoy exploring the complexities of various coffee origins and flavors."
        },
        [PL]: {
          name: "Pour-Over Coffee",
          description: "Pour-over coffee to ręczna metoda parzenia kawy, polegająca na nalewaniu gorącej wody na umieszczone w filtrze ziarna kawy, pozwalając wodzie powoli przeciekać do naczynia pod spodem. Ta technika umożliwia precyzyjną kontrolę nad zmiennymi parzenia, takimi jak temperatura wody, szybkość nalewania i proporcje kawy do wody, co daje czystą, subtelnie zróżnicowaną i aromatyczną filiżankę kawy. Metoda pour-over podkreśla użycie świeżych, wysokiej jakości ziaren kawy i pozwala kawoszowi docenić subtelne niuanse różnych odmian kawy. Cieszy się uznaniem wśród miłośników kawy, którzy doceniają rytualny i praktyczny sposób parzenia kawy oraz lubią eksplorować złożoność różnych pochodzeń i smaków kawy."
        }
      },
      capacity: 0.3,
      price: 16,
      imgSrc: coffee_3
    }
  ]
};
const eventsData = [
  {
    id: "coffeest",
    translations: {
      [EN]: {
        title: "Coffeest",
        date: "10.2024",
        description: `Coffeest - A Brew-tiful Blend of Art and Aroma Indulge your senses in the enchanting world of "Coffeest" at "Z Nosem W Piwie." Immerse yourself in a celebration of the finer things in life - the rich aroma of freshly brewed coffee and the artistic ambiance that elevates your coffee-drinking experience. "Coffeest" is more than an event; it's a sensory journey where every sip becomes a moment of pure bliss, and every conversation is enriched by the warmth of our carefully crafted brews.`,
        imgSrc: event_1
      },
      [PL]: {
        title: "Coffeest",
        date: "10.2024",
        description: 'Coffeest - Przepiękne połączenie sztuki i aromatu. Zanurz swoje zmysły w czarującym świecie "Coffeest" w "Z Nosem W Piwie." Pogłęb się w celebracji wyrafinowanych aspektów życia - bogaty aromat świeżo parzonej kawy i artystyczne otoczenie, które podnosi doświadczenie picia kawy. "Coffeest" to nie tylko wydarzenie; to podróż sensoryczna, gdzie każdy łyk staje się chwilą czystego błogostanu, a każda rozmowa wzbogaca się ciepłem naszych starannie przygotowanych naparów.',
        imgSrc: event_1
      }
    }
  },
  {
    id: "brewers_banquet",
    translations: {
      [EN]: {
        title: "Brewer's Banquet",
        date: "6-12.11.2024",
        description: `Brewer's Banquet: A Beer Tasting Feast Dive into the world of craft beers at "Brewer's Banquet." Indulge your palate with a curated selection of artisanal brews, each with its unique flavor profile and story. Whether you're a seasoned beer enthusiast or a curious newcomer, this tasting event is a celebration of the art and science behind exceptional brewing.`,
        imgSrc: event_2
      },
      [PL]: {
        title: "Bankiet Piwowarów",
        date: "6-12.11.2024",
        description: 'Bankiet Piwowarów: Uczta Degustacji Piwa. Zanurz się w świat rzemieślniczych piw na "Bankiecie Piwowarów." Rozpieszczaj swoje kubki smakowe kuracyjnym wyborem artystycznych napojów, z każdym z unikalnym profilem smakowym i historią. Czy jesteś doświadczonym miłośnikiem piwa czy ciekawym nowicjuszem, to wydarzenie degustacyjne to święto sztuki i nauki stoiące za wyjątkowym warzeniem piwa.',
        imgSrc: event_2
      }
    }
  },
  {
    id: "canvas_and_beer",
    translations: {
      [EN]: {
        title: "Canvas and Beer",
        date: "8.06.2024",
        description: 'Canvas and Beer: Artistic Expressions Over Ales Unleash your inner artist in a delightful fusion of creativity and craft beer! "Canvas and Beer" invites you to paint your masterpiece while sipping on our specially selected ales. Let the flavors inspire your brushstrokes as you create art in the cozy ambiance of "Z Nosem W Piwie."',
        imgSrc: event_3
      },
      [PL]: {
        title: "Płótno i Piwo",
        date: "8.06.2024",
        description: 'Płótno i Piwo: Artystyczne Wyrażenia Nad Alem. Uwolnij swojego wewnętrznego artystę w uroczej fuzji kreatywności i piwa rzemieślniczego! "Płótno i Piwo" zaprasza cię do malowania swojego arcydzieła, popijając nasze specjalnie wyselekcjonowane piwa. Pozwól smakom inspirować twoje pociągnięcia pędzlem, gdy tworzysz sztukę w przytulnym otoczeniu "Z Nosem W Piwie."',
        imgSrc: event_3
      }
    }
  }
];
const merchData = [{ id: "tshirt", imgSrc: merch_1 }];
const fakeServerResponseDelay = async (minDelay) => new Promise((res) => {
  setTimeout(res, minDelay ?? 100 + Math.random() * 500);
});
const fetchOffer = async () => {
  await fakeServerResponseDelay();
  return offerData;
};
const fetchEvents = async () => {
  await fakeServerResponseDelay();
  return eventsData;
};
const fetchMerch = async () => {
  await fakeServerResponseDelay();
  return merchData;
};
const NewsletterRequest = async () => {
  await fakeServerResponseDelay(1e3);
  return { status: 200 };
};
const ContactFormRequest = async () => {
  await fakeServerResponseDelay(1e3);
  return { status: 200 };
};
const CookiesFormRequest = async () => {
  await fakeServerResponseDelay(300);
  return { status: 200 };
};
const useResize = (callback) => {
  const getWindowSizes = useCallback(
    () => ({
      width: 1920,
      height: 1080
    }),
    []
  );
  const [actualWindowSizes, setActualWindowSizes] = useState(getWindowSizes());
  const onResize = useCallback(() => {
    const sizes = getWindowSizes();
    setActualWindowSizes(sizes);
    if (typeof callback === "function")
      callback(sizes);
  }, [callback, getWindowSizes]);
  useEffect(() => {
    return () => {
    };
  }, [onResize]);
  return actualWindowSizes;
};
const breakpoints = {
  desktop: 1920,
  desktopSmall: 1366,
  tablet: 1024,
  mobile: 756
};
const useBreakpoint = (breakpoint) => {
  const breakpointWidth = breakpoints[breakpoint];
  const { width } = useResize();
  const isActive = useMemo(() => width <= breakpointWidth, [width, breakpointWidth]);
  return isActive;
};
const SSnackbar = ut.div`
    position: fixed;
    bottom: ${({ $isActive }) => $isActive ? "1rem" : "-100%"};
    width: fit-content;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    column-gap: 2rem;
    border-radius: 1rem;
    padding: 2rem;
    transition: bottom 0.3s ease-out;
    box-shadow: ${({ theme: theme2 }) => theme2.boxShadow.primary};

    ${({ $isMobile }) => $isMobile ? at`
                  margin: 0 auto;
                  max-width: calc(100% - 4rem);
                  left: 0;
                  right: 0;
              ` : at`
                  left: 50%;
                  transform: translateX(-50%);
              `}

    color: ${({ theme: theme2 }) => theme2.palette.white};
    background-color: ${({ $variant = "info", theme: theme2 }) => ({
  info: theme2.palette.secondary,
  warning: theme2.palette.warning,
  error: theme2.palette.error
})[$variant]};

    & > ${IconWrapper} {
        fill: ${({ theme: theme2 }) => theme2.palette.white};
    }
`;
const SnackbarMessage = ut.span`
    font-size: 2.4rem;
    line-height: 1.4em;
    text-align: start;
    align-self: center;
`;
const Snackbar = ({
  isMobile,
  variant = "info",
  message,
  isActive,
  onClose
}) => {
  return /* @__PURE__ */ jsxs(SSnackbar, { $isMobile: isMobile, $isActive: isActive, $variant: variant, children: [
    /* @__PURE__ */ jsx(SnackbarMessage, { children: message }),
    /* @__PURE__ */ jsx(Icon, { variant: "close", onClick: onClose })
  ] });
};
var ESnackbarDispatchActions = /* @__PURE__ */ ((ESnackbarDispatchActions2) => {
  ESnackbarDispatchActions2["SHOW_SNACKBAR"] = "showSnackbar";
  ESnackbarDispatchActions2["CLOSE_SNACKBAR"] = "closeSnackbar";
  return ESnackbarDispatchActions2;
})(ESnackbarDispatchActions || {});
const initialSnackbarState = {
  variant: "info",
  message: "",
  isActive: false
};
const snackbarStateReducer = (state, action) => {
  var _a, _b;
  switch (action.type) {
    case ESnackbarDispatchActions.SHOW_SNACKBAR: {
      return {
        variant: (_a = action == null ? void 0 : action.payload) == null ? void 0 : _a.variant,
        message: (_b = action == null ? void 0 : action.payload) == null ? void 0 : _b.message,
        isActive: true
      };
    }
    case ESnackbarDispatchActions.CLOSE_SNACKBAR: {
      return { ...state, isActive: false };
    }
  }
};
const SnackbarContext = createContext(initialSnackbarState);
const SnackbarDispatchContext = createContext(null);
const SnackbarProvider = ({ children }) => {
  const [snackbarState, snackbarDispatch] = useReducer(snackbarStateReducer, initialSnackbarState);
  const isMobile = useBreakpoint("mobile");
  useEffect(() => {
    const closeSnackbarTimeout = setTimeout(() => {
      if (snackbarState.isActive)
        snackbarDispatch({ type: ESnackbarDispatchActions.CLOSE_SNACKBAR });
    }, 3e3);
    return () => clearTimeout(closeSnackbarTimeout);
  }, [snackbarState.isActive]);
  return /* @__PURE__ */ jsx(SnackbarContext.Provider, { value: snackbarState, children: /* @__PURE__ */ jsxs(SnackbarDispatchContext.Provider, { value: snackbarDispatch, children: [
    children,
    /* @__PURE__ */ jsx(
      Snackbar,
      {
        ...snackbarState,
        isMobile,
        onClose: () => snackbarDispatch({ type: ESnackbarDispatchActions.CLOSE_SNACKBAR })
      }
    )
  ] }) });
};
const useSnackbarDispatch = () => useContext(SnackbarDispatchContext);
const SButton = ut.button`
    width: ${({ $size }) => $size === "full" ? "100%" : "fit-content"};
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: ${({ $isSingleItem }) => $isSingleItem ? "center" : "space-between"};
    column-gap: 1rem;
    font-size: 3.4rem;
    cursor: pointer;
    transition: background-color 0.1s ease-out;

    ${({ $variant = "normal", theme: theme2 }) => ({
  normal: at`
                border: none;
                background-color: ${theme2.palette.secondary};
                color: ${theme2.palette.accent};
            `,
  outlined: at`
                border: ${theme2.border.secondary};
                border-color: ${theme2.palette.secondary};
                background: none;
                color: ${theme2.palette.secondary};
            `
})[$variant]}

    &:hover {
        background-color: ${({ theme: theme2 }) => theme2.palette.shades.secondary[48]};
    }

    & > ${IconWrapper} {
        fill: ${({ theme: theme2 }) => theme2.palette.accent};
    }
`;
const Button = ({
  variant = "normal",
  size,
  label,
  iconVariant,
  onClick
}) => {
  return /* @__PURE__ */ jsxs(
    SButton,
    {
      className: "decorative",
      $variant: variant,
      $size: size,
      $isSingleItem: !(label && iconVariant),
      onClick,
      children: [
        label,
        iconVariant && /* @__PURE__ */ jsx(Icon, { variant: iconVariant })
      ]
    }
  );
};
var EFieldType = /* @__PURE__ */ ((EFieldType2) => {
  EFieldType2["text"] = "text";
  EFieldType2["textarea"] = "textarea";
  EFieldType2["switch"] = "switch";
  EFieldType2["accordionSwitch"] = "accordionSwitch";
  return EFieldType2;
})(EFieldType || {});
const ModalOverlay = ut.div`
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    height: 100vh;
    height: 100svh;
    width: 100vw;

    ${({ theme: theme2, $isOverlayVisible }) => $isOverlayVisible ? at`
                  background-color: ${theme2.palette.shades.black[38]};
              ` : at`
                  pointer-events: none;
              `};
`;
const SModal = ut.div`
    position: absolute;
    z-index: 9999;
    padding: 2rem;
    background-color: ${({ theme: theme2 }) => theme2.palette.primary};
    box-shadow: ${({ theme: theme2 }) => theme2.boxShadow.primary};
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
        background-color: ${({ theme: theme2 }) => theme2.palette.shades.secondary[18]};
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme: theme2 }) => theme2.palette.shades.secondary[48]};
    }

    &:hover::-webkit-scrollbar-thumb {
        background-color: ${({ theme: theme2 }) => theme2.palette.secondary};
    }

    ${({ $position = "center" }) => ({
  center: at`
                --maxSize: calc(100% - 4rem);

                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                height: fit-content;
                max-height: var(--maxSize);
                width: 80rem;
                max-width: var(--maxSize);
            `,
  bottom: at`
                bottom: 0;
                left: 0;
                height: fit-content;
                max-height: 100%;
                width: 100%;
                max-width: 100%;
            `
})[$position]}

    & > ${IconWrapper} {
        position: absolute;
        top: 0;
        right: 0;
        --size: 2.4rem;
        overflow: hidden;
        fill: ${({ theme: theme2 }) => theme2.palette.secondary};
    }
`;
const Modal = ({
  children,
  isActive,
  isOverlayVisible = true,
  isScrollBehindPossible,
  position: position2 = "center",
  onClose = void 0
}) => {
  useEffect(() => {
    if (isActive && !isScrollBehindPossible) {
      const body = document.getElementsByTagName("body")[0];
      if (body)
        body.style.overflow = "hidden";
    }
    return () => {
      if (isScrollBehindPossible)
        return;
      const body = document.getElementsByTagName("body")[0];
      if (body)
        body.style.overflow = "unset";
    };
  }, [isActive, isScrollBehindPossible]);
  return isActive && /* @__PURE__ */ jsx(ModalOverlay, { $isOverlayVisible: isOverlayVisible, $position: position2, children: /* @__PURE__ */ jsxs(SModal, { $position: position2, children: [
    children,
    onClose && /* @__PURE__ */ jsx(Icon, { variant: "close", onClick: onClose })
  ] }) });
};
const SSwitch = ut.div`
    position: relative;
    height: 3rem;
    width: 6rem;
    border-radius: 2rem;
    border: ${({ theme: theme2 }) => theme2.border.secondary};
    transition: background-color 0.15s ease-out;

    background-color: ${({ $isActive, theme: theme2 }) => $isActive ? theme2.palette.shades.secondary[48] : theme2.palette.shades.secondary[18]};

    ${({ $isDisabled, theme: theme2 }) => $isDisabled ? at`
                  pointer-events: none;
                  border-color: ${theme2.palette.shades.secondary[48]};
                  background-color: ${theme2.palette.shades.secondary[48]};
              ` : at`
                  border-color: ${theme2.palette.secondary};
              `}
`;
const SSwitchButton = ut.div`
    position: absolute;
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    transition:
        left 0.15s ease-out,
        background-color 0.15s ease-out;

    ${({ $isActive, theme: theme2 }) => $isActive ? at`
                  top: calc(0.5rem - 2px);
                  left: calc(100% - 2rem - 2px);
                  background-color: ${theme2.palette.secondary};
              ` : at`
                  top: calc(0.5rem - 2px);
                  left: calc(0.5rem - 2px);
                  background-color: ${theme2.palette.shades.secondary[48]};
              `};

    ${({ $isDisabled, theme: theme2 }) => $isDisabled ? at`
                  background-color: ${theme2.palette.shades.secondary[48]};
              ` : at`
                  border-color: ${theme2.palette.secondary};
              `};
`;
const HiddenInput = ut.input.attrs({ type: "checkbox" })`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    margin: 0;
    opacity: 0;
    cursor: pointer;

    ${({ $disabled }) => $disabled && at`
            pointer-events: none;
        `}
`;
const Switch = forwardRef(({ value, readOnly, ...props }, ref) => {
  return /* @__PURE__ */ jsxs(SSwitch, { $isActive: !!value, $isDisabled: readOnly, children: [
    /* @__PURE__ */ jsx(SSwitchButton, { $isActive: !!value, $isDisabled: readOnly }),
    /* @__PURE__ */ jsx(HiddenInput, { ...props, checked: !!value, $disabled: readOnly, ref })
  ] });
});
const TextareaContainer = ut.div`
    position: relative;
    height: fit-content;
    width: 100%;
    background-color: ${({ theme: theme2 }) => theme2.palette.shades.secondary[18]};
    color: ${({ theme: theme2 }) => theme2.palette.secondary};
    border-bottom: ${({ theme: theme2 }) => theme2.border.secondary};
    border-color: ${({ theme: theme2 }) => theme2.palette.shades.secondary[48]};
    transition: background-color 0.1s ease-out;

    ${({ theme: theme2, $isFocused }) => $isFocused ? at`
                  background-color: ${theme2.palette.shades.secondary[48]};
                  border-color: ${({ theme: theme22 }) => theme22.palette.secondary};
              ` : at`
                  &:hover {
                      background-color: ${theme2.palette.shades.secondary[38]};
                  }
              `}

    & > ${IconWrapper} {
        position: absolute;
        top: calc(var(--size) / 2 + 2rem);
        right: 2rem;
        transform: translateY(-50%);
        fill: ${({ theme: theme2 }) => theme2.palette.secondary};
    }
`;
const SLabel$2 = ut.label`
    position: absolute;
    pointer-events: none;
    transition:
        top 0.1s ease-out,
        font-size 0.1s ease-out;

    ${({ $isSmall }) => $isSmall ? at`
                  left: 2rem;
                  top: 1.2rem;
                  font-size: 1.6rem;
              ` : at`
                  left: 2rem;
                  top: 2.5rem;
                  font-size: 2.4rem;
              `}
`;
const STextarea = ut.textarea.attrs({ rows: 4 })`
    position: relative;
    height: 100%;
    width: 100%;
    margin-top: 3.8rem;
    padding: 0 2rem 1.3rem 2rem;
    outline: none;
    background: none;
    border: none;
    font-size: 2.4rem;
    color: ${({ theme: theme2 }) => theme2.palette.secondary};
    resize: none;

    &::-webkit-scrollbar {
        width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
        background-color: ${({ theme: theme2 }) => theme2.palette.shades.secondary[18]};
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme: theme2 }) => theme2.palette.secondary};
    }
`;
const Textarea = forwardRef(
  ({ label, iconVariant, onIconClick, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const isLabelSmall = useMemo(() => !!props.value || isFocused, [props.value, isFocused]);
    return /* @__PURE__ */ jsxs(TextareaContainer, { $isFocused: isFocused, children: [
      /* @__PURE__ */ jsx(SLabel$2, { $isSmall: isLabelSmall, children: label }),
      /* @__PURE__ */ jsx(
        STextarea,
        {
          ref,
          ...props,
          onFocus: () => setIsFocused(true),
          onBlur: () => setIsFocused(false)
        }
      ),
      iconVariant && /* @__PURE__ */ jsx(Icon, { variant: iconVariant, onClick: onIconClick })
    ] });
  }
);
const TextInputContainer = ut.div`
    position: relative;
    height: 7.4rem;
    width: 100%;
    background-color: ${({ theme: theme2 }) => theme2.palette.shades.secondary[18]};
    color: ${({ theme: theme2 }) => theme2.palette.secondary};
    border-bottom: ${({ theme: theme2 }) => theme2.border.secondary};
    border-color: ${({ theme: theme2 }) => theme2.palette.shades.secondary[48]};
    transition: background-color 0.1s ease-out;

    ${({ theme: theme2, $isFocused }) => $isFocused ? at`
                  background-color: ${theme2.palette.shades.secondary[48]};
                  border-color: ${({ theme: theme22 }) => theme22.palette.secondary};
              ` : at`
                  &:hover {
                      background-color: ${theme2.palette.shades.secondary[38]};
                  }
              `}

    & > ${IconWrapper} {
        position: absolute;
        top: calc(var(--size) / 2 + 2rem);
        right: 2rem;
        transform: translateY(-50%);
        fill: ${({ theme: theme2 }) => theme2.palette.secondary};
    }
`;
const SLabel$1 = ut.label`
    position: absolute;
    pointer-events: none;
    transition:
        top 0.1s ease-out,
        font-size 0.1s ease-out;

    ${({ $isSmall }) => $isSmall ? at`
                  left: 2rem;
                  top: 1.2rem;
                  font-size: 1.6rem;
              ` : at`
                  left: 2rem;
                  top: 2.5rem;
                  font-size: 2.4rem;
              `}
`;
const STextInput = ut.input`
    position: absolute;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 3.8rem 2rem 1.3rem 2rem;
    outline: none;
    background: none;
    border: none;
    font-size: 2.4rem;
    color: ${({ theme: theme2 }) => theme2.palette.secondary};
`;
const TextInput = forwardRef(
  ({ label, iconVariant, onIconClick, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const isLabelSmall = useMemo(() => !!props.value || isFocused, [props.value, isFocused]);
    return /* @__PURE__ */ jsxs(TextInputContainer, { $isFocused: isFocused, children: [
      /* @__PURE__ */ jsx(SLabel$1, { $isSmall: isLabelSmall, children: label }),
      /* @__PURE__ */ jsx(
        STextInput,
        {
          ref,
          ...props,
          onFocus: () => setIsFocused(true),
          onBlur: () => setIsFocused(false)
        }
      ),
      iconVariant && /* @__PURE__ */ jsx(Icon, { variant: iconVariant, onClick: onIconClick })
    ] });
  }
);
const SAccordion = ut.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;

    ${({ theme: theme2, $isWithoutTopBorder }) => $isWithoutTopBorder ? at`
                  border: ${theme2.border.secondary};
                  border-top: none;
              ` : at`
                  border: ${theme2.border.secondary};
              `};

    ${({ $isActive }) => $isActive && at`
            row-gap: 1rem;
        `}
`;
const AccordionHead = ut.div``;
const AccordionContent = ut.div`
    ${({ $isActive }) => $isActive ? at`
                  height: auto;
              ` : at`
                  height: 0;
                  pointer-events: none;

                  & * {
                      opacity: 0;
                  }
              `};
`;
const Accordion = ({
  title,
  isActiveByDefault,
  isActive,
  toggleIsActive,
  isWithoutTopBorder,
  headElement,
  children,
  ...props
}) => {
  const [innerIsActive, innerSetIsActive] = useState(isActiveByDefault ?? false);
  const innerToggleIsActive = useCallback(
    () => typeof toggleIsActive === "function" ? toggleIsActive() : innerSetIsActive(!innerIsActive),
    [innerIsActive, toggleIsActive]
  );
  return /* @__PURE__ */ jsxs(
    SAccordion,
    {
      $isActive: isActive ?? innerIsActive,
      $isWithoutTopBorder: isWithoutTopBorder,
      children: [
        /* @__PURE__ */ jsx(AccordionHead, { children: headElement({
          title,
          isActive: isActive ?? innerIsActive,
          toggleIsActive: innerToggleIsActive,
          ...props
        }) }),
        /* @__PURE__ */ jsx(AccordionContent, { $isActive: isActive ?? innerIsActive, children })
      ]
    }
  );
};
const DefaultAccordionHeadContainer = ut.div`
    display: flex;
    align-items: center;
    column-gap: 1rem;

    ${({ $isActive, theme: theme2 }) => $isActive && at`
            padding-bottom: 1rem;
            border-bottom: ${theme2.border.secondary};
            border-color: ${theme2.palette.shades.secondary[38]};
            border-width: 1px;
        `}

    font-size: 1.6rem;

    & > ${IconWrapper} {
        fill: ${({ theme: theme2 }) => theme2.palette.secondary};
        transform: rotate(${({ $isActive }) => $isActive ? 0 : 180}deg);
    }
`;
const ArrowWithTitleContainer = ut.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: 1rem;
`;
const AccordionHeadWithSwitchContainer = ut(DefaultAccordionHeadContainer)`
    justify-content: space-between;

    & > ${ArrowWithTitleContainer} > ${IconWrapper} {
        fill: ${({ theme: theme2 }) => theme2.palette.secondary};
        transform: rotate(${({ $isActive }) => $isActive ? 0 : 180}deg);
    }
`;
const AccordionHeadWithSwitch = forwardRef(
  ({ title, isActive, toggleIsActive, ...props }, ref) => {
    return /* @__PURE__ */ jsxs(AccordionHeadWithSwitchContainer, { $isActive: isActive, children: [
      /* @__PURE__ */ jsxs(ArrowWithTitleContainer, { children: [
        /* @__PURE__ */ jsx(Icon, { variant: "expand", onClick: toggleIsActive }),
        title
      ] }),
      /* @__PURE__ */ jsx(Switch, { ...props, ref })
    ] });
  }
);
const formMessages = defineMessages({
  requiredField: {
    id: "app.form.requiredField",
    description: "Form error message when field is required.",
    defaultMessage: "{fieldName} is required"
  },
  tooLongField: {
    id: "app.form.tooLongField",
    description: "Form error message when field is required.",
    defaultMessage: "{fieldName} cannot be longer than {max}"
  },
  emailField: {
    id: "app.form.emailField",
    description: "Form error message when field is required.",
    defaultMessage: "Field must be valid email"
  },
  send: {
    id: "app.form.send",
    description: "Form submit button text.",
    defaultMessage: "Send"
  }
});
const SForm = ut.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${({ $variant = "normal" }) => ({
  normal: at`
                row-gap: 1rem;
            `,
  collapsed: at`
                & > *:last-of-type {
                    margin-top: 2rem;
                }
            `
})[$variant]}
`;
const FieldContainer = ut.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    ${({ $withoutErrorMessage, $isErrorActive }) => $withoutErrorMessage ? "" : $isErrorActive ? at`
                    row-gap: 0.4rem;
                ` : at`
                    padding-bottom: 2rem;
                `}
`;
const SLabel = ut.label`
    font-size: 2.4rem;
`;
const SwitchWrapper = ut.div``;
const ErrorMessage = ut.span`
    font-size: 1.6rem;
    line-height: 1em;
    color: ${({ theme: theme2 }) => theme2.palette.error};
`;
const Form = ({
  fields,
  validationSchema,
  variant,
  buttonsElement,
  onSubmit
}) => {
  const intl = useIntl();
  const defaultValues = Object.fromEntries(
    fields.map((field) => {
      switch (field.type) {
        case "switch":
          return [field.name, field.defaultChecked];
        case "accordionSwitch":
          return [field.name, field.defaultChecked];
        default:
          return [field.name, field.defaultValue];
      }
    })
  );
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful }
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema)
  });
  const isWithoutErrorMessage = (fieldType) => {
    switch (fieldType) {
      case EFieldType.accordionSwitch:
        return true;
      default:
        return false;
    }
  };
  const formOnSubmit = useMemo(
    () => buttonsElement ? (e) => e.preventDefault() : handleSubmit(onSubmit),
    [buttonsElement, handleSubmit, onSubmit]
  );
  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);
  return /* @__PURE__ */ jsxs(SForm, { onSubmit: formOnSubmit, $variant: variant, children: [
    fields.length > 0 && fields.map((field, index2) => {
      var _a;
      return /* @__PURE__ */ jsxs(
        FieldContainer,
        {
          $withoutErrorMessage: isWithoutErrorMessage(field.type),
          $isErrorActive: !!errors[field.name],
          children: [
            /* @__PURE__ */ jsx(
              Controller,
              {
                name: field.name,
                disabled: field.disabled,
                control,
                render: ({ field: cField }) => {
                  var _a2;
                  switch (field.type) {
                    case EFieldType.text: {
                      return /* @__PURE__ */ jsx(
                        TextInput,
                        {
                          ...cField,
                          label: field.label,
                          iconVariant: field == null ? void 0 : field.iconVariant,
                          onIconClick: field == null ? void 0 : field.onIconClick
                        }
                      );
                    }
                    case EFieldType.textarea: {
                      return /* @__PURE__ */ jsx(
                        Textarea,
                        {
                          ...cField,
                          label: field.label,
                          iconVariant: field == null ? void 0 : field.iconVariant,
                          onIconClick: field == null ? void 0 : field.onIconClick
                        }
                      );
                    }
                    case EFieldType.switch: {
                      return /* @__PURE__ */ jsxs(SwitchWrapper, { children: [
                        field.label && /* @__PURE__ */ jsx(SLabel, { children: field.label }),
                        /* @__PURE__ */ jsx(Switch, { ...cField })
                      ] });
                    }
                    case EFieldType.accordionSwitch: {
                      const { ref, ...props } = cField;
                      const isWithoutTopBorder = ((_a2 = fields == null ? void 0 : fields[index2 - 1]) == null ? void 0 : _a2.type) === EFieldType.accordionSwitch;
                      return /* @__PURE__ */ jsx(
                        Accordion,
                        {
                          title: field.title,
                          isWithoutTopBorder,
                          headElement: (props2) => /* @__PURE__ */ jsx(
                            AccordionHeadWithSwitch,
                            {
                              ...props2,
                              readOnly: field.readOnly,
                              ref
                            }
                          ),
                          ...props,
                          children: /* @__PURE__ */ jsx("p", { children: field.children })
                        }
                      );
                    }
                  }
                }
              }
            ),
            /* @__PURE__ */ jsx(ErrorMessage, { children: errors[field.name] && String((_a = errors[field.name]) == null ? void 0 : _a.message) })
          ]
        },
        field.name
      );
    }),
    typeof buttonsElement === "function" ? buttonsElement({
      submitWith: (additionalProps) => {
        handleSubmit((data2) => onSubmit({ ...data2, ...additionalProps }))();
      }
    }) : /* @__PURE__ */ jsx(
      Button,
      {
        label: intl.formatMessage(formMessages.send),
        iconVariant: "send",
        onClick: handleSubmit(onSubmit)
      }
    )
  ] });
};
const messages$4 = defineMessages({
  disclaimerTitle: {
    id: "app.cookiesModal.disclaimerTitle",
    description: "Disclaimer title at Cookies GDPR.",
    defaultMessage: "Disclaimer:"
  },
  disclaimer: {
    id: "app.cookiesModal.disclaimer",
    description: "Disclaimer text at Cookies GDPR.",
    defaultMessage: "The following text is AI-generated and has no legal standing. It serves as a demonstration for a fictitious entity, “Z Nosem W Piwie” showcasing my skills as a Software Developer. The content and solutions presented here are solely for illustrative purposes."
  },
  mainCookiesTextPart1: {
    id: "app.cookiesModal.mainCookiesTextPart1",
    description: "Cookies agreement main text part 1.",
    defaultMessage: "Welcome to “Z Nosem W Piwie”! To enhance your experience, we use cookies on our website. These small text files help us understand how you interact with our site, personalize content, and improve overall functionality."
  },
  mainCookiesTextPart2: {
    id: "app.cookiesModal.mainCookiesTextPart2",
    description: "Cookies agreement main text part 2.",
    defaultMessage: "By continuing to use our website, you consent to the use of cookies in accordance with this Cookie Consent Agreement. You have the option to manage your cookie preferences through our advanced cookies modal."
  },
  mainCookiesTextPart3: {
    id: "app.cookiesModal.mainCookiesTextPart3",
    description: "Cookies agreement main text part 3.",
    defaultMessage: "For more details on the types of cookies we use and how they impact your experience, please review our {privacyPolicy} and {cookiePolicy}."
  },
  mainCookiesTextPart4: {
    id: "app.cookiesModal.mainCookiesTextPart4",
    description: "Cookies agreement main text part 4.",
    defaultMessage: "Thank you for choosing “Z Nosem W Piwie”."
  },
  privacyPolicy: {
    id: "app.cookiesModal.privacyPolicy",
    description: "Cookies agreement main text.",
    defaultMessage: "Privacy Policy"
  },
  cookiePolicy: {
    id: "app.cookiesModal.cookiePolicy",
    description: "Cookies agreement main text.",
    defaultMessage: "Cookie Policy"
  },
  openAdvancedSettings: {
    id: "app.cookiesModal.openAdvancedSettings",
    description: "Cookies advanced settings button label.",
    defaultMessage: "Advanced settings"
  },
  accept: {
    id: "app.cookiesModal.accept",
    description: "Cookies agreement accept button label.",
    defaultMessage: "Accept"
  },
  essentialLabel: {
    id: "app.cookiesModal.essentialLabel",
    description: "Essential Cookies field label.",
    defaultMessage: "Essential Cookies"
  },
  essentialDescription: {
    id: "app.cookiesModal.essentialDescription",
    description: "Essential Cookies description label.",
    defaultMessage: "Essential cookies ensure the basic functionality of our website. Without these cookies, you may not be able to access certain features or navigate the site effectively."
  },
  performanceLabel: {
    id: "app.cookiesModal.performanceLabel",
    description: "Performance Cookies field label.",
    defaultMessage: "Performance Cookies"
  },
  performanceDescription: {
    id: "app.cookiesModal.performanceDescription",
    description: "Performance Cookies description label.",
    defaultMessage: "Performance cookies help us understand how you interact with our website by collecting information about your visit. This data is aggregated and anonymous, allowing us to enhance the performance and usability of our site."
  },
  functionalLabel: {
    id: "app.cookiesModal.functionalLabel",
    description: "Functional Cookies field label.",
    defaultMessage: "Functional Cookies"
  },
  functionalDescription: {
    id: "app.cookiesModal.functionalDescription",
    description: "Functional Cookies description label.",
    defaultMessage: "Functional cookies enhance your experience by remembering your preferences and settings. This allows us to provide you with a more personalized and efficient visit."
  },
  advertisingLabel: {
    id: "app.cookiesModal.advertisingLabel",
    description: "Advertising Cookies field label.",
    defaultMessage: "Advertising Cookies"
  },
  advertisingDescription: {
    id: "app.cookiesModal.advertisingDescription",
    description: "Advertising Cookies description label.",
    defaultMessage: "Advertising cookies are used to tailor the ads you see to your interests. They also assist in measuring the effectiveness of our advertising campaigns. Rest assured, your data is used anonymously and is not shared with third parties"
  },
  socialLabel: {
    id: "app.cookiesModal.socialLabel",
    description: "Social Media Cookies field label.",
    defaultMessage: "Social Media Cookies"
  },
  socialDescription: {
    id: "app.cookiesModal.socialDescription",
    description: "Social Media Cookies description label.",
    defaultMessage: "Social media cookies enable you to share our content on various social media platforms and interact with integrated social media features. These cookies may also collect information about your social media activities on our site."
  },
  analyticsLabel: {
    id: "app.cookiesModal.analyticsLabel",
    description: "Analytics Cookies field label.",
    defaultMessage: "Analytics Cookies"
  },
  analyticsDescription: {
    id: "app.cookiesModal.analyticsDescription",
    description: "Analytics Cookies description label.",
    defaultMessage: "Analytics cookies assist us in understanding how visitors interact with our website. The data collected is anonymous and helps us make informed decisions to improve the overall user experience."
  },
  saveAdvancedSettings: {
    id: "app.cookiesModal.saveAdvancedSettings",
    description: "Cookies advanced settings save button label.",
    defaultMessage: "Save settings"
  },
  accepted: {
    id: "app.cookiesModal.accepted",
    description: "Cookies agreement settings accepted snackbar message.",
    defaultMessage: "Cookies accepted"
  },
  saved: {
    id: "app.cookiesModal.saved",
    description: "Cookies agreement settings saved snackbar message.",
    defaultMessage: "Your custom cookies settings have been saved!"
  }
});
const CookiesModalInnerContainer = ut.div`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
`;
const DisclaimerContainer = ut.p`
    padding: 1rem;
    color: ${({ theme: theme2 }) => theme2.palette.error};
    border: 1px solid ${({ theme: theme2 }) => theme2.palette.error};
`;
const OpenStaticModalText = ut.span`
    color: ${({ theme: theme2 }) => theme2.palette.info};
    cursor: pointer;
`;
const ButtonsContainer = ut.div`
    width: 100%;
    display: flex;
    gap: 2rem;

    ${({ $isMobile }) => $isMobile ? at`
                  flex-direction: column;
                  justify-content: flex-start;
              ` : at`
                  flex-direction: row;
                  justify-content: space-between;
              `}
`;
const AdvancedCookiesSettingsForm = ({
  isMobile,
  fields,
  onSubmit
}) => {
  const intl = useIntl();
  const validationSchema = yup.object({
    essential: yup.boolean().isTrue().required(),
    performance: yup.boolean().required(),
    functional: yup.boolean().required(),
    advertising: yup.boolean().required(),
    social: yup.boolean().required(),
    analytics: yup.boolean().required(),
    submitType: yup.string().oneOf(["save", "accept"]).optional()
  }).required();
  return /* @__PURE__ */ jsx(
    Form,
    {
      fields,
      validationSchema,
      variant: "collapsed",
      buttonsElement: ({ submitWith }) => /* @__PURE__ */ jsxs(ButtonsContainer, { $isMobile: isMobile, children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            size: isMobile ? "full" : "fit",
            variant: "outlined",
            label: intl.formatMessage(messages$4.saveAdvancedSettings),
            onClick: () => {
              submitWith({ submitType: "save" });
            }
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            size: isMobile ? "full" : "fit",
            label: intl.formatMessage(messages$4.accept),
            onClick: () => {
              submitWith({ submitType: "accept" });
            }
          }
        )
      ] }),
      onSubmit
    }
  );
};
const CookiesModal = () => {
  const intl = useIntl();
  const isMobile = useBreakpoint("mobile");
  const dispatch = useSnackbarDispatch();
  const [isActive, setIsActive] = useState(true);
  const [isAdvancedActive, setIsAdvanceActive] = useState(false);
  const fields = useMemo(
    () => [
      {
        name: "essential",
        type: EFieldType.accordionSwitch,
        title: intl.formatMessage(messages$4.essentialLabel),
        children: /* @__PURE__ */ jsx(FormattedMessage, { ...messages$4.essentialDescription }),
        defaultChecked: true,
        readOnly: true
      },
      {
        name: "performance",
        type: EFieldType.accordionSwitch,
        title: intl.formatMessage(messages$4.performanceLabel),
        children: /* @__PURE__ */ jsx(FormattedMessage, { ...messages$4.performanceDescription }),
        defaultChecked: true
      },
      {
        name: "functional",
        type: EFieldType.accordionSwitch,
        title: intl.formatMessage(messages$4.functionalLabel),
        children: /* @__PURE__ */ jsx(FormattedMessage, { ...messages$4.functionalDescription }),
        defaultChecked: true
      },
      {
        name: "advertising",
        type: EFieldType.accordionSwitch,
        title: intl.formatMessage(messages$4.advertisingLabel),
        children: /* @__PURE__ */ jsx(FormattedMessage, { ...messages$4.advertisingDescription }),
        defaultChecked: true
      },
      {
        name: "social",
        type: EFieldType.accordionSwitch,
        title: intl.formatMessage(messages$4.socialLabel),
        children: /* @__PURE__ */ jsx(FormattedMessage, { ...messages$4.socialDescription }),
        defaultChecked: true
      },
      {
        name: "analytics",
        type: EFieldType.accordionSwitch,
        title: intl.formatMessage(messages$4.analyticsLabel),
        children: /* @__PURE__ */ jsx(FormattedMessage, { ...messages$4.analyticsDescription }),
        defaultChecked: true
      }
    ],
    [intl]
  );
  const defaultSettings = useMemo(
    () => Object.fromEntries(
      fields.map(({ name, defaultChecked }) => [name, defaultChecked])
    ),
    [fields]
  );
  const onSaveClick = useCallback(
    async (data2) => {
      setIsActive(false);
      setIsAdvanceActive(false);
      if (dispatch)
        dispatch({
          type: ESnackbarDispatchActions.SHOW_SNACKBAR,
          payload: {
            message: intl.formatMessage(messages$4.saved)
          }
        });
      await CookiesFormRequest();
    },
    [dispatch, intl]
  );
  const onAcceptClick = useCallback(
    async (data2) => {
      setIsActive(false);
      setIsAdvanceActive(false);
      if (dispatch)
        dispatch({
          type: ESnackbarDispatchActions.SHOW_SNACKBAR,
          payload: {
            message: intl.formatMessage(messages$4.accepted)
          }
        });
      await CookiesFormRequest();
    },
    [dispatch, intl]
  );
  const onSubmit = useCallback(
    async (data2) => {
      switch (data2.submitType) {
        case "save":
          await onSaveClick(data2);
          return;
        default:
          await onAcceptClick(data2);
          return;
      }
    },
    [onAcceptClick, onSaveClick]
  );
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Modal, { isActive, children: /* @__PURE__ */ jsxs(CookiesModalInnerContainer, { children: [
      /* @__PURE__ */ jsxs(DisclaimerContainer, { children: [
        /* @__PURE__ */ jsx(FormattedMessage, { ...messages$4.disclaimerTitle }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx(FormattedMessage, { ...messages$4.disclaimer })
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx(FormattedMessage, { ...messages$4.mainCookiesTextPart1 }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx(FormattedMessage, { ...messages$4.mainCookiesTextPart2 }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx(
          FormattedMessage,
          {
            ...messages$4.mainCookiesTextPart3,
            values: {
              privacyPolicy: /* @__PURE__ */ jsx(OpenStaticModalText, { children: /* @__PURE__ */ jsx(FormattedMessage, { ...messages$4.privacyPolicy }) }),
              cookiePolicy: /* @__PURE__ */ jsx(OpenStaticModalText, { children: /* @__PURE__ */ jsx(FormattedMessage, { ...messages$4.cookiePolicy }) })
            }
          }
        ),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx(FormattedMessage, { ...messages$4.mainCookiesTextPart4 })
      ] }),
      /* @__PURE__ */ jsxs(ButtonsContainer, { $isMobile: isMobile, children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            size: isMobile ? "full" : "fit",
            variant: "outlined",
            label: intl.formatMessage(messages$4.openAdvancedSettings),
            onClick: () => setIsAdvanceActive(true)
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            size: isMobile ? "full" : "fit",
            label: intl.formatMessage(messages$4.accept),
            onClick: () => onAcceptClick(defaultSettings)
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(
      Modal,
      {
        isActive: isAdvancedActive,
        onClose: () => setIsAdvanceActive(false),
        isScrollBehindPossible: true,
        children: /* @__PURE__ */ jsxs(CookiesModalInnerContainer, { children: [
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx(FormattedMessage, { ...messages$4.mainCookiesTextPart1 }),
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx(FormattedMessage, { ...messages$4.mainCookiesTextPart2 })
          ] }),
          /* @__PURE__ */ jsx(
            AdvancedCookiesSettingsForm,
            {
              fields,
              isMobile,
              onSubmit
            }
          )
        ] })
      }
    )
  ] });
};
const CookiesProvider = ({ children }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    children,
    /* @__PURE__ */ jsx(CookiesModal, {})
  ] });
};
const theme = {
  palette: {
    primary: "#FFE0B2",
    secondary: "#5D4037",
    accent: "#FFCA28",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
    white: "#fff",
    black: "#000",
    grey: "#9E9E9E",
    greyLighten1: "#BDBDBD",
    greyLighten2: "#E0E0E0",
    shades: {
      black: {
        18: "#0000002E",
        38: "#00000061",
        87: "#000000DE"
      },
      primary: {
        48: "#FFE0B280",
        87: "#FFE0B2DE"
      },
      secondary: {
        18: "#5D40372E",
        38: "#5D403761",
        48: "#5D40377A"
      }
    }
  },
  border: { primary: "1rem solid #FFE0B2", secondary: "2px solid #5D40377A" },
  boxShadow: { primary: "0 0 8px #00000061", secondary: "-10px -10px 0 0 #FFE0B280" }
};
const ThemeProvider = ({ children }) => {
  return /* @__PURE__ */ jsx(tt, { theme, children });
};
function App({
  messages: messages2,
  locale,
  staticProps,
  Page: Page2
}) {
  const [queryClient] = useState(
    () => new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 60 * 1e3
        }
      }
    })
  );
  const [actualIntlLocale, setActualIntlLocale] = useState(locale);
  const actualMessages = useMemo(
    () => messages2[actualIntlLocale],
    [actualIntlLocale, messages2]
  );
  return /* @__PURE__ */ jsx(ThemeProvider, { children: /* @__PURE__ */ jsx(IntlProvider, { locale: actualIntlLocale, messages: actualMessages, defaultLocale: "en-GB", children: /* @__PURE__ */ jsx(SnackbarProvider, { children: /* @__PURE__ */ jsx(CookiesProvider, { children: /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(HydrationBoundary, { state: staticProps.dehydratedState, children: /* @__PURE__ */ jsx(
    Page2,
    {
      actualLocale: actualIntlLocale,
      setActualIntlLocale
    }
  ) }) }) }) }) }) }) });
}
const loadLocaleData = (locale) => __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../compiled-lang/en.json": () => import("../chunks/chunk-6ce70987.js"), "../compiled-lang/pl.json": () => import("../chunks/chunk-f5f2c7dc.js") }), `../compiled-lang/${locale}.json`);
const main = async (Page2, staticProps) => {
  var _a, _b;
  const en = (_a = await loadLocaleData("en")) == null ? void 0 : _a.default;
  const pl = (_b = await loadLocaleData("pl")) == null ? void 0 : _b.default;
  return /* @__PURE__ */ jsx(o.StrictMode, { children: /* @__PURE__ */ jsx(
    App,
    {
      messages: { "en-GB": en, "pl-PL": pl },
      locale: "en-GB",
      Page: Page2,
      staticProps
    }
  ) });
};
const onRenderHtml = async (pageContext) => {
  const { Page: Page2, data: staticProps } = pageContext;
  const sheet = new yt();
  const pageHtml = dangerouslySkipEscape(
    renderToString(
      sheet.collectStyles(
        await main(Page2, staticProps)
      )
    )
  );
  return escapeInject`<!DOCTYPE html>
    <html lang="en">
        <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="/logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Z Nosem W Piwie</title>
        ${dangerouslySkipEscape(sheet.getStyleTags())}
      </head>
      <body style="overflow: hidden;">
        <div id="page-view">${pageHtml}</div>
      </body>
    </html>`;
};
const import_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: onRenderHtml,
  onRenderHtml
}, Symbol.toStringTag, { value: "Module" }));
const map = "/imgs/map.png";
const useEvents = () => {
  return useQuery({ queryKey: ["events"], queryFn: fetchEvents });
};
const useMerch = () => {
  return useQuery({ queryKey: ["merch"], queryFn: fetchMerch });
};
const SCard = ut.div`
    padding: 2rem;
    background-color: ${({ theme: theme2 }) => theme2.palette.primary};
    box-shadow: ${({ theme: theme2 }) => theme2.boxShadow.secondary};

    height: fit-content;
    ${({ $size }) => typeof $size === "number" ? at`
                  width: 100%;
                  max-width: ${$size}rem;
              ` : {
  full: at`
                      width: 100%;
                  `,
  fit: at`
                      width: fit-content;
                  `
}[$size]};
`;
const Card = ({ size, children }) => {
  return /* @__PURE__ */ jsx(SCard, { $size: size, children });
};
const CarouselContainer = ut.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    row-gap: 1rem;
`;
const CarouselItemsContainer = ut.div`
    position: relative;
    display: flex;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    scroll-behavior: smooth;
`;
const CarouselItem = ut.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100%;
    width: 100%;

    & > img {
        display: block;
        max-width: 100%;
        max-height: 100%;
        height: auto;
        object-fit: fill;
        mix-blend-mode: multiply;
    }
`;
const CarouselItemsDots = ut.div`
    width: 100%;
    display: flex;
    justify-content: center;
    column-gap: 1rem;

    & > ${IconWrapper} {
        height: 1rem;
        width: 1rem;
    }
`;
const Carousel = ({ autoChange, items = [] }) => {
  const [actualItemId, setActualItemId] = useState(null);
  const itemsContainerRef = useRef(null);
  const itemsRefsMap = useRef(null);
  const refGetter = useCallback(() => {
    if (!itemsRefsMap.current)
      itemsRefsMap.current = /* @__PURE__ */ new Map();
    return itemsRefsMap.current;
  }, []);
  const refSetter = useCallback(
    ({ id, node: node2 }) => {
      const map2 = refGetter();
      if (node2) {
        map2.set(id, node2);
      } else {
        map2.delete(id);
      }
    },
    [refGetter]
  );
  const showElement = useCallback(
    (id) => {
      const map2 = refGetter();
      const node2 = map2.get(id);
      const container = itemsContainerRef.current;
      if (node2 && container)
        container.scrollLeft = node2.offsetLeft;
    },
    [refGetter]
  );
  const changeElement = useCallback(
    (id) => {
      setActualItemId(id);
      showElement(id);
    },
    [showElement]
  );
  useResize(() => {
    if (actualItemId)
      showElement(actualItemId);
  });
  useEffect(() => {
    if (!items.length || !autoChange)
      return;
    if (!actualItemId)
      setActualItemId(items[0].id);
    const changeInterval = setInterval(() => {
      const actualItemIndex = items.findIndex((item) => item.id === actualItemId);
      if (actualItemIndex + 1 < items.length) {
        changeElement(items[actualItemIndex + 1].id);
      } else {
        changeElement(items[0].id);
      }
    }, 5e3);
    return () => {
      clearInterval(changeInterval);
    };
  }, [actualItemId, autoChange, changeElement, items, showElement]);
  return /* @__PURE__ */ jsxs(CarouselContainer, { children: [
    /* @__PURE__ */ jsx(CarouselItemsContainer, { ref: itemsContainerRef, children: items.length > 0 && items.map(({ id, itemElement }) => /* @__PURE__ */ jsx(CarouselItem, { ref: (node2) => refSetter({ id, node: node2 }), children: itemElement }, id)) }),
    /* @__PURE__ */ jsx(CarouselItemsDots, { children: items.length && items.map(({ id }) => /* @__PURE__ */ jsx(
      Icon,
      {
        variant: id === actualItemId ? "dotActive" : "dot",
        onClick: () => changeElement(id)
      },
      id
    )) })
  ] });
};
const LoaderContainer = ut.div`
    position: relative;
`;
const LoaderContent = ut.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${({ theme: theme2 }) => theme2.palette.primary};

    --color: ${({ theme: theme2 }) => theme2.palette.secondary};
`;
const LoaderMessage = ut.span.attrs({ className: "decorative" })`
    font-size: 3.2rem;
    line-height: 1em;
    color: var(--color);
    text-align: center;
`;
const SLoader = ut.span`
    --size: 1.5rem;

    @keyframes shadowRolling {
        0% {
            box-shadow:
                0 0 rgba(255, 255, 255, 0),
                0 0 rgba(255, 255, 255, 0),
                0 0 rgba(255, 255, 255, 0),
                0 0 rgba(255, 255, 255, 0);
        }
        12% {
            box-shadow:
                calc(var(--size) * 10) 0 var(--color),
                0 0 rgba(255, 255, 255, 0),
                0 0 rgba(255, 255, 255, 0),
                0 0 rgba(255, 255, 255, 0);
        }
        25% {
            box-shadow:
                calc(var(--size) * 11) 0 var(--color),
                calc(var(--size) * 10) 0 var(--color),
                0 0 rgba(255, 255, 255, 0),
                0 0 rgba(255, 255, 255, 0);
        }
        36% {
            box-shadow:
                calc(var(--size) * 12) 0 var(--color),
                calc(var(--size) * 11) 0 var(--color),
                calc(var(--size) * 10) 0 var(--color),
                0 0 rgba(255, 255, 255, 0);
        }
        50% {
            box-shadow:
                calc(var(--size) * 13) 0 var(--color),
                calc(var(--size) * 12) 0 var(--color),
                calc(var(--size) * 11) 0 var(--color),
                calc(var(--size) * 10) 0 var(--color);
        }
        62% {
            box-shadow:
                calc(var(--size) * 20) 0 rgba(255, 255, 255, 0),
                calc(var(--size) * 13) 0 var(--color),
                calc(var(--size) * 12) 0 var(--color),
                calc(var(--size) * 11) 0 var(--color);
        }
        75% {
            box-shadow:
                calc(var(--size) * 20) 0 rgba(255, 255, 255, 0),
                calc(var(--size) * 20) 0 rgba(255, 255, 255, 0),
                calc(var(--size) * 13) 0 var(--color),
                calc(var(--size) * 12) 0 var(--color);
        }
        87% {
            box-shadow:
                calc(var(--size) * 20) 0 rgba(255, 255, 255, 0),
                calc(var(--size) * 20) 0 rgba(255, 255, 255, 0),
                calc(var(--size) * 20) 0 rgba(255, 255, 255, 0),
                calc(var(--size) * 13) 0 var(--color);
        }
        100% {
            box-shadow:
                calc(var(--size) * 20) 0 rgba(255, 255, 255, 0),
                calc(var(--size) * 20) 0 rgba(255, 255, 255, 0),
                calc(var(--size) * 20) 0 rgba(255, 255, 255, 0),
                calc(var(--size) * 20) 0 rgba(255, 255, 255, 0);
        }
    }

    position: relative;
    height: var(--size);
    width: var(--size);
    border-radius: 50%;
    display: block;
    margin: var(--size) auto;
    position: relative;
    color: var(--color);
    left: calc(var(--size) * -12);
    box-sizing: border-box;
    animation: shadowRolling 2s linear infinite;
`;
const Loader = ({ children, isLoading, loadingMessage }) => {
  return /* @__PURE__ */ jsxs(LoaderContainer, { children: [
    children,
    isLoading && /* @__PURE__ */ jsxs(LoaderContent, { children: [
      loadingMessage && /* @__PURE__ */ jsx(LoaderMessage, { children: loadingMessage }),
      /* @__PURE__ */ jsx(SLoader, {})
    ] })
  ] });
};
const messages$3 = defineMessages({
  pubName: {
    id: "app.about.pubName",
    description: "Name of the pub/cafe establishment.",
    defaultMessage: "Z Nosem W Piwie"
  },
  descriptionPart1: {
    id: "app.about.fullDescription1",
    description: "First part of the full description of the establishment.",
    defaultMessage: `At "Z Nosem W Piwie," we've meticulously crafted a haven that transcends the ordinary, inviting you to step into an imaginary realm where nostalgia intertwines with boundless creativity. Our whimsical establishment, bearing the playful moniker "Z Nosem W Piwie" (translating to "With a Nose in Beer"), is more than just a fictitious pub/cafe—it's an immersive experience where every visit is a journey into the extraordinary.`
  },
  descriptionPart2: {
    id: "app.about.fullDescription2",
    description: "Second part of the full description of the establishment.",
    defaultMessage: `Step into a cozy corner adorned with eclectic decorations, vintage posters, and the warm glow of flickering candlelight. The ambiance at "Z Nosem W Piwie" is a carefully curated blend of rustic charm and vibrant energy. It's an environment designed to invite you to unwind, connect with others, and savor each moment, creating a timeless escape where conversations flow freely.`
  },
  descriptionPart3: {
    id: "app.about.fullDescription3",
    description: "Third part of the full description of the establishment.",
    defaultMessage: 'While our pub/cafe might be born from imagination, the flavors we serve are grounded in the real joy of culinary exploration. Our menu is a testament to global inspirations, featuring hearty pub fare, aromatic coffees, and an artfully curated selection of imaginative beverages. From the allure of fictional craft beers to the whimsy of creatively crafted cocktails, every sip and bite at "Z Nosem W Piwie" is designed to transport you to a world of delightful gastronomy.'
  },
  descriptionPart4: {
    id: "app.about.fullDescription4",
    description: "Fourth part of the full description of the establishment.",
    defaultMessage: 'The spirit of make-believe comes alive with an array of events at "Z Nosem W Piwie." From live music performances that resonate through the walls to themed parties that transcend the ordinary, and quirky trivia nights that challenge the imagination – our event calendar is always buzzing with make-believe happenings. Check regularly for updates and immerse yourself in the magic of our make-believe world.'
  },
  address: {
    id: "app.about.address",
    description: "Physical address of the establishment.",
    defaultMessage: "Cracow, Main Square 0, 00-000"
  },
  openingHours: {
    id: "app.about.openingHours",
    description: "Title for the section displaying opening hours.",
    defaultMessage: "Opening hours"
  },
  oHMT: {
    id: "app.about.oHMT",
    description: "Abbreviation for opening hours from Monday to Thursday.",
    defaultMessage: "Monday - Thursday"
  },
  oHMTHours: {
    id: "app.about.oHMTHours",
    description: "Opening hours from Monday to Thursday.",
    defaultMessage: "8:00 - 22:30"
  },
  oHFS: {
    id: "app.about.oHFS",
    description: "Abbreviation for opening hours on Friday and Saturday.",
    defaultMessage: "Friday - Saturday"
  },
  oHFSHours: {
    id: "app.about.oHFSHours",
    description: "Opening hours for Friday and Saturday.",
    defaultMessage: "10:00 - 1:30"
  },
  oHS: {
    id: "app.about.oHS",
    description: "Abbreviation for opening hours on Sunday.",
    defaultMessage: "Sunday"
  },
  oHSHours: {
    id: "app.about.oHSHours",
    description: "Opening hours on Sunday.",
    defaultMessage: "10:00 - 18:00"
  },
  emailTitle: {
    id: "app.about.emailTitle",
    description: "Title for the email contact information.",
    defaultMessage: "email"
  },
  email: {
    id: "app.about.email",
    description: "Email address for contacting the establishment.",
    defaultMessage: "contact@znosemwpiwie.com"
  },
  phoneTitle: {
    id: "app.about.phoneTitle",
    description: "Title for the phone contact information.",
    defaultMessage: "phone"
  },
  phone: {
    id: "app.about.phone",
    description: "Contact phone number for the establishment.",
    defaultMessage: "+48 000 000 000"
  },
  eventsTitle: {
    id: "app.about.eventsTitle",
    description: "Title for the upcoming events section.",
    defaultMessage: "Upcoming events"
  },
  eventSnackbarMessageSuccess: {
    id: "app.about.eventSnackbarMessageSuccess",
    description: "Snackabar message after successful copied event data to clipboard.",
    defaultMessage: "Event data copied to clipboard!"
  },
  eventSnackbarMessageError: {
    id: "app.about.eventSnackbarMessageError",
    description: "Snackabar message after error while copying event data to clipboard.",
    defaultMessage: "Something went wrong: {error}."
  },
  contactTitle: {
    id: "app.about.contactTitle",
    description: "Title for the contact section.",
    defaultMessage: "Contact Us"
  },
  fullnameLabel: {
    id: "app.about.fullnameLabel",
    description: "Fullname field of contact form.",
    defaultMessage: "Fullname"
  },
  emailLabel: {
    id: "app.about.emailLabel",
    description: "Email field of contact form.",
    defaultMessage: "Contact email"
  },
  messageLabel: {
    id: "app.about.messageLabel",
    description: "Message field of contact form.",
    defaultMessage: "Message"
  },
  contactFormLoaderMessage: {
    id: "app.about.contactFormLoaderMessage",
    description: "Form sending loader message.",
    defaultMessage: "Sending"
  },
  contactFormSnackbarMessage: {
    id: "app.about.contactFormSnackbarMessage",
    description: "Snackabar message after contact form message sent.",
    defaultMessage: "Message sent!"
  },
  merchTitle: {
    id: "app.about.merchTitle",
    description: "Title for the merchandise section.",
    defaultMessage: "Checkout our merch!"
  }
});
const AboutSection = ut.section`
    width: 100%;
    padding: 4rem 2rem;
    background-color: ${({ theme: theme2 }) => theme2.palette.secondary};
`;
const AboutSectionInner = ut.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    & ${SCard} {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        color: ${({ theme: theme2 }) => theme2.palette.secondary};
    }
`;
const MapContainer = ut.div`
    max-width: 80rem;
    width: 100%;
    margin: 0 auto;

    & > * {
        width: 100%;
    }
`;
const CardsContainer = ut.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
`;
const ContactAndMerchContainer = ut.section`
    width: 100%;
    display: grid;
    grid-template-columns: ${({ $isTablet }) => $isTablet ? "auto" : "auto max-content"};
    gap: 4rem;
`;
const ContactCardTitle = ut.h4.attrs({ className: "decorative" })`
    text-align: center;
    margin-bottom: 2rem;
`;
const ContentRow = ut.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    & > span {
        width: max-content;
    }
`;
const EventContainer = ut.div`
    display: flex;
    gap: 2rem;

    ${({ $isMobile }) => $isMobile && at`
            align-items: center;
            flex-direction: column;
        `}
`;
const EventImg = ut.img`
    border-radius: 1rem;
    border: ${({ theme: theme2 }) => theme2.border.secondary};
    border-color: ${({ theme: theme2 }) => theme2.palette.secondary};
    max-height: 50rem;
    max-width: 50rem;
    height: auto;
    width: 100%;
`;
const EventDescription = ut.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;
const MerchTitle = ut.h4.attrs({ className: "decorative" })`
    display: flex;
    column-gap: 1rem;
    align-items: center;
    fill: ${({ theme: theme2 }) => theme2.palette.secondary};
`;
const MerchImg = ut.img`
    max-width: 25rem !important;
`;
const SNewsletterInsideContainer = ut.div`
    display: flex;
    flex-direction: column;
    row-gap: ${({ $isFormActive }) => $isFormActive ? "2rem" : "4rem"};
    ${({ $isFormActive }) => !$isFormActive && at`
            padding-bottom: 1.2rem;
        `};

    & > h4 {
        text-align: center;
    }
`;
const messages$2 = defineMessages({
  newsletterJoinButton: {
    id: "app.about.NewsletterForm.newsletterJoinButton",
    description: "Form activating button for joining establishment's newsletter.",
    defaultMessage: "Ok!"
  },
  newsletter: {
    id: "app.about.NewsletterForm.newsletter",
    description: "Invitation to join the establishment's newsletter.",
    defaultMessage: "Join our newsletter"
  },
  FormLoaderMessage: {
    id: "app.about.NewsletterForm.FormLoaderMessage",
    description: "Form newsletter loader message.",
    defaultMessage: "Signing you to newsletter"
  },
  FormSnackbarMessage: {
    id: "app.about.NewsletterForm.FormSnackbarMessage",
    description: "Snackabar message after newsletter signed.",
    defaultMessage: "Thank you for joining our newsletter. See you soon!"
  }
});
const NewsletterForm = () => {
  var _a;
  const intl = useIntl();
  const dispatch = useContext(SnackbarDispatchContext);
  const [isFormActive, setIsFormActive] = useState(false);
  const [isFormLoading, setIsFormLoading] = useState(false);
  const emailField = {
    name: "email",
    type: EFieldType.text,
    label: intl.formatMessage(messages$3.emailLabel),
    defaultValue: ""
  };
  const newsletterValidationSchema = useMemo(
    () => yup.object({
      email: yup.string().max(
        128,
        intl.formatMessage(formMessages.tooLongField, {
          fieldName: intl.formatMessage(messages$3.emailLabel),
          max: 128
        })
      ).email(intl.formatMessage(formMessages.emailField)).required(
        intl.formatMessage(formMessages.requiredField, {
          fieldName: intl.formatMessage(messages$3.emailLabel)
        })
      )
    }).required(),
    [intl]
  );
  const onNewsletterSubmit = useCallback(
    async (data2) => {
      setIsFormLoading(true);
      const response = await NewsletterRequest();
      console.log(response);
      if (dispatch)
        dispatch({
          type: ESnackbarDispatchActions.SHOW_SNACKBAR,
          payload: {
            variant: "info",
            message: intl.formatMessage(messages$2.FormSnackbarMessage)
          }
        });
      setIsFormLoading(false);
    },
    [dispatch, intl]
  );
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful }
  } = useForm({
    defaultValues: { [emailField.name]: emailField.defaultValue },
    resolver: yupResolver(newsletterValidationSchema)
  });
  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);
  return /* @__PURE__ */ jsx(Card, { size: 41, children: /* @__PURE__ */ jsx(
    Loader,
    {
      isLoading: isFormLoading,
      loadingMessage: /* @__PURE__ */ jsx(FormattedMessage, { ...messages$2.FormLoaderMessage }),
      children: /* @__PURE__ */ jsxs(SNewsletterInsideContainer, { $isFormActive: isFormActive, children: [
        /* @__PURE__ */ jsx("h4", { className: "decorative", children: /* @__PURE__ */ jsx(FormattedMessage, { ...messages$2.newsletter }) }),
        isFormActive ? /* @__PURE__ */ jsx(SForm, { onSubmit: handleSubmit(onNewsletterSubmit), children: /* @__PURE__ */ jsxs(FieldContainer, { $isErrorActive: !!errors[emailField.name], children: [
          /* @__PURE__ */ jsx(
            Controller,
            {
              name: emailField.name,
              control,
              render: ({ field }) => /* @__PURE__ */ jsx(
                TextInput,
                {
                  ...field,
                  label: emailField.label,
                  iconVariant: "send",
                  onIconClick: handleSubmit(onNewsletterSubmit)
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(ErrorMessage, { children: errors[emailField.name] && String((_a = errors[emailField.name]) == null ? void 0 : _a.message) })
        ] }) }) : /* @__PURE__ */ jsx(
          Button,
          {
            size: "full",
            label: intl.formatMessage(messages$2.newsletterJoinButton),
            onClick: () => setIsFormActive(true)
          }
        )
      ] })
    }
  ) });
};
const About = () => {
  const intl = useIntl();
  const isTablet = useBreakpoint("tablet");
  const isMobile = useBreakpoint("mobile");
  const dispatch = useSnackbarDispatch();
  const composeEventItemElement = useCallback(
    ({ title, date, description, imgSrc }) => /* @__PURE__ */ jsxs(EventContainer, { $isMobile: isMobile, children: [
      /* @__PURE__ */ jsxs(EventDescription, { children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            label: `${title} ${date}`,
            iconVariant: "share",
            onClick: async () => {
              try {
                await navigator.clipboard.writeText(
                  "https://www.facebook.com/fake_event_link"
                );
                if (dispatch)
                  dispatch({
                    type: ESnackbarDispatchActions.SHOW_SNACKBAR,
                    payload: {
                      variant: "info",
                      message: intl.formatMessage(
                        messages$3.eventSnackbarMessageSuccess
                      )
                    }
                  });
              } catch (error) {
                if (dispatch)
                  dispatch({
                    type: ESnackbarDispatchActions.SHOW_SNACKBAR,
                    payload: {
                      variant: "error",
                      message: intl.formatMessage(
                        messages$3.eventSnackbarMessageError,
                        { error: String(error) }
                      )
                    }
                  });
              }
            }
          }
        ),
        /* @__PURE__ */ jsx("p", { children: description })
      ] }),
      imgSrc && /* @__PURE__ */ jsx(EventImg, { src: imgSrc })
    ] }),
    [dispatch, intl, isMobile]
  );
  const { data: eventsData2, isLoading: eventsIsLoading, isSuccess: eventsIsSuccess } = useEvents();
  const { data: merchData2, isLoading: merchIsLoading, isSuccess: merchIsSuccess } = useMerch();
  const translatedEventsItems = useMemo(
    () => !eventsIsLoading && eventsIsSuccess && eventsData2.map((event) => {
      const text = event.translations[intl.locale];
      return { id: event.id, itemElement: composeEventItemElement(text) };
    }) || [],
    [composeEventItemElement, eventsData2, eventsIsLoading, eventsIsSuccess, intl.locale]
  );
  const merchItemsElements = useMemo(
    () => !merchIsLoading && merchIsSuccess && merchData2.map((merchItem) => ({
      id: merchItem.id,
      itemElement: /* @__PURE__ */ jsx(MerchImg, { src: merchItem.imgSrc })
    })) || [],
    [merchData2, merchIsLoading, merchIsSuccess]
  );
  const [isContactFormLoading, setIsContactFormLoading] = useState(false);
  const contactFields = [
    {
      name: "fullname",
      label: intl.formatMessage(messages$3.fullnameLabel),
      type: EFieldType.text,
      defaultValue: ""
    },
    {
      name: "email",
      label: intl.formatMessage(messages$3.emailLabel),
      type: EFieldType.text,
      defaultValue: ""
    },
    {
      name: "message",
      label: intl.formatMessage(messages$3.messageLabel),
      type: EFieldType.textarea,
      defaultValue: ""
    }
  ];
  const contactValidationSchema = useMemo(
    () => yup.object({
      fullname: yup.string().max(
        128,
        intl.formatMessage(formMessages.tooLongField, {
          fieldName: intl.formatMessage(messages$3.fullnameLabel),
          max: 128
        })
      ).required(
        intl.formatMessage(formMessages.requiredField, {
          fieldName: intl.formatMessage(messages$3.fullnameLabel)
        })
      ),
      email: yup.string().max(
        128,
        intl.formatMessage(formMessages.tooLongField, {
          fieldName: intl.formatMessage(messages$3.emailLabel),
          max: 128
        })
      ).email(intl.formatMessage(formMessages.emailField)).required(
        intl.formatMessage(formMessages.requiredField, {
          fieldName: intl.formatMessage(messages$3.emailLabel)
        })
      ),
      message: yup.string().max(
        512,
        intl.formatMessage(formMessages.tooLongField, {
          fieldName: intl.formatMessage(messages$3.messageLabel),
          max: 512
        })
      ).required(
        intl.formatMessage(formMessages.requiredField, {
          fieldName: intl.formatMessage(messages$3.messageLabel)
        })
      )
    }).required(),
    [intl]
  );
  const onContactSubmit = useCallback(
    async (data2) => {
      setIsContactFormLoading(true);
      const response = await ContactFormRequest();
      console.log(response);
      if (dispatch)
        dispatch({
          type: ESnackbarDispatchActions.SHOW_SNACKBAR,
          payload: {
            variant: "info",
            message: intl.formatMessage(messages$3.contactFormSnackbarMessage)
          }
        });
      setIsContactFormLoading(false);
    },
    [dispatch, intl]
  );
  return /* @__PURE__ */ jsx(AboutSection, { id: "about", children: /* @__PURE__ */ jsxs(AboutSectionInner, { children: [
    /* @__PURE__ */ jsxs(Card, { size: "full", children: [
      /* @__PURE__ */ jsx("h1", { className: "decorative", children: /* @__PURE__ */ jsx(FormattedMessage, { ...messages$3.pubName }) }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx(FormattedMessage, { ...messages$3.descriptionPart1 }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx(FormattedMessage, { ...messages$3.descriptionPart2 }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx(FormattedMessage, { ...messages$3.descriptionPart3 }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx(FormattedMessage, { ...messages$3.descriptionPart4 })
      ] }),
      /* @__PURE__ */ jsx(MapContainer, { children: /* @__PURE__ */ jsx("img", { src: map }) }),
      /* @__PURE__ */ jsx("h4", { className: "decorative", style: { textAlign: "center" }, children: /* @__PURE__ */ jsx(FormattedMessage, { ...messages$3.address }) })
    ] }),
    /* @__PURE__ */ jsxs(CardsContainer, { children: [
      /* @__PURE__ */ jsxs(Card, { size: "fit", children: [
        /* @__PURE__ */ jsx("h4", { className: "decorative", children: /* @__PURE__ */ jsx(FormattedMessage, { ...messages$3.openingHours }) }),
        /* @__PURE__ */ jsxs(ContentRow, { children: [
          /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(FormattedMessage, { ...messages$3.oHMT }) }),
          /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(FormattedMessage, { ...messages$3.oHMTHours }) })
        ] }),
        /* @__PURE__ */ jsxs(ContentRow, { children: [
          /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(FormattedMessage, { ...messages$3.oHFS }) }),
          /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(FormattedMessage, { ...messages$3.oHFSHours }) })
        ] }),
        /* @__PURE__ */ jsxs(ContentRow, { children: [
          /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(FormattedMessage, { ...messages$3.oHS }) }),
          /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(FormattedMessage, { ...messages$3.oHSHours }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { size: "fit", children: [
        /* @__PURE__ */ jsxs(ContentRow, { children: [
          /* @__PURE__ */ jsx("h4", { className: "decorative", children: /* @__PURE__ */ jsx(FormattedMessage, { ...messages$3.emailTitle }) }),
          /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(FormattedMessage, { ...messages$3.email }) })
        ] }),
        /* @__PURE__ */ jsxs(ContentRow, { children: [
          /* @__PURE__ */ jsx("h4", { className: "decorative", children: /* @__PURE__ */ jsx(FormattedMessage, { ...messages$3.phoneTitle }) }),
          /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(FormattedMessage, { ...messages$3.phone }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(NewsletterForm, {})
    ] }),
    /* @__PURE__ */ jsxs(Card, { size: "full", children: [
      /* @__PURE__ */ jsx("h3", { className: "decorative", style: { textAlign: "center" }, children: /* @__PURE__ */ jsx(FormattedMessage, { ...messages$3.eventsTitle }) }),
      /* @__PURE__ */ jsx(Carousel, { autoChange: true, items: translatedEventsItems })
    ] }),
    /* @__PURE__ */ jsxs(ContactAndMerchContainer, { id: "contact", $isTablet: isTablet, children: [
      /* @__PURE__ */ jsx(Card, { size: "full", children: /* @__PURE__ */ jsx(
        Loader,
        {
          isLoading: isContactFormLoading,
          loadingMessage: /* @__PURE__ */ jsx(FormattedMessage, { ...messages$3.contactFormLoaderMessage }),
          children: /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(ContactCardTitle, { children: /* @__PURE__ */ jsx(FormattedMessage, { ...messages$3.contactTitle }) }),
            /* @__PURE__ */ jsx(
              Form,
              {
                fields: contactFields,
                validationSchema: contactValidationSchema,
                onSubmit: onContactSubmit
              }
            )
          ] })
        }
      ) }),
      /* @__PURE__ */ jsxs(Card, { size: 40, children: [
        /* @__PURE__ */ jsxs(MerchTitle, { children: [
          /* @__PURE__ */ jsx(FormattedMessage, { ...messages$3.merchTitle }),
          /* @__PURE__ */ jsx(Icon, { variant: "merch" })
        ] }),
        /* @__PURE__ */ jsx(Carousel, { autoChange: true, items: merchItemsElements })
      ] })
    ] })
  ] }) });
};
const useOutsideClick = (callback) => {
  const ref = useRef(null);
  useEffect(() => {
    const handleClick = (event) => {
      const target = event.target;
      if (ref.current && !ref.current.contains(target))
        callback();
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [callback]);
  return ref;
};
const LanguagePickerContainer = ut.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    color: ${({ theme: theme2, $isActive, $isMenuActive }) => $isActive || $isMenuActive ? theme2.palette.secondary : theme2.palette.primary};
    font-size: 2.8rem;
    text-transform: uppercase;
    border-bottom: ${({ theme: theme2 }) => theme2.border.secondary};
    border-color: transparent;

    ${({ theme: theme2, $isActive }) => $isActive && at`
            background-color: ${theme2.palette.shades.primary[87]};
            border-color: ${theme2.palette.shades.secondary[18]};
        `};
`;
const ActualLanguageWithArrow = ut.div`
    display: flex;
    align-items: center;
    column-gap: 1rem;
    cursor: pointer;

    & > ${IconWrapper} {
        fill: ${({ theme: theme2, $isActive, $isMenuActive }) => $isActive || $isMenuActive ? theme2.palette.secondary : theme2.palette.primary};
        transform: rotate(${({ $isActive }) => $isActive ? "180deg" : "0deg"});
    }
`;
const LanguagesOptions = ut.ul`
    position: absolute;
    top: calc(100% + 2px);
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme: theme2 }) => theme2.palette.shades.primary[87]};
`;
const LanguageOption = ut.li`
    padding: 1rem;
    text-align: center;
    transition: background-color 0.1s ease-out;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme: theme2 }) => theme2.palette.shades.secondary[38]};
    }
`;
const LanguagePicker = ({
  actualLocale,
  setActualLocale: setActualIntlLocale,
  isMenuActive
}) => {
  const [isActive, setIsActive] = useState(false);
  const langaugesOptions = useMemo(
    () => locales.filter((lang) => lang !== actualLocale),
    [actualLocale]
  );
  const languageLabels = { [EN]: "en", [PL]: "pl" };
  const onLangItemClick = useCallback(
    (lang) => {
      setActualIntlLocale(lang);
      setIsActive(false);
    },
    [setActualIntlLocale]
  );
  const elementRef = useOutsideClick(() => setIsActive(false));
  return /* @__PURE__ */ jsxs(
    LanguagePickerContainer,
    {
      $isActive: isActive,
      $isMenuActive: isMenuActive,
      ref: elementRef,
      children: [
        /* @__PURE__ */ jsxs(
          ActualLanguageWithArrow,
          {
            $isActive: isActive,
            $isMenuActive: isMenuActive,
            onClick: () => setIsActive(!isActive),
            children: [
              languageLabels[actualLocale],
              /* @__PURE__ */ jsx(Icon, { variant: "expand" })
            ]
          }
        ),
        isActive && /* @__PURE__ */ jsx(LanguagesOptions, { children: langaugesOptions.length > 0 && langaugesOptions.map((lang) => /* @__PURE__ */ jsx(LanguageOption, { onClick: () => onLangItemClick(lang), children: languageLabels[lang] }, lang)) })
      ]
    }
  );
};
const SHeader = ut.header`
    position: relative;
    width: 100%;
    padding: 2rem 1rem 0 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 1rem;

    ${({ theme: theme2, $isMenuActive }) => $isMenuActive && at`
            &::before {
                position: absolute;
                top: 0;
                left: -2rem;
                content: '';
                display: block;
                width: calc(100% + 4rem);
                height: 100%;
                background-color: ${theme2.palette.shades.primary[87]};
            }
        `}
`;
const InnerHeader = ut.div`
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    width: 100%;
    padding-bottom: 1rem;
    border-bottom: ${({ theme: theme2 }) => theme2.border.secondary};

    ${({ $isMenuActive }) => !$isMenuActive && at`
            border-color: transparent;
        `}
`;
const MobileMenuContainer = ut.div`
    display: flex;
    align-items: center;
    column-gap: 2rem;

    & > ${IconWrapper} {
        cursor: pointer;
        fill: ${({ theme: theme2, $isMenuActive }) => $isMenuActive ? theme2.palette.secondary : theme2.palette.primary};
    }
`;
const Header = ({ actualLocale, setActualIntlLocale, isMobile, links }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const headerRef = useOutsideClick(() => setIsMenuActive(false));
  return /* @__PURE__ */ jsxs(SHeader, { ref: headerRef, $isMenuActive: isMobile && isMenuActive, children: [
    /* @__PURE__ */ jsxs(InnerHeader, { $isMenuActive: isMobile && isMenuActive, children: [
      /* @__PURE__ */ jsx(Logo, { isDark: isMobile && isMenuActive }),
      isMobile ? /* @__PURE__ */ jsxs(MobileMenuContainer, { $isMenuActive: isMenuActive, children: [
        /* @__PURE__ */ jsx(
          LanguagePicker,
          {
            actualLocale,
            setActualLocale: setActualIntlLocale,
            isMenuActive
          }
        ),
        /* @__PURE__ */ jsx(Icon, { variant: "menu", onClick: () => setIsMenuActive(!isMenuActive) })
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Navigation, { variant: "header", links }),
        /* @__PURE__ */ jsx(
          LanguagePicker,
          {
            actualLocale,
            setActualLocale: setActualIntlLocale,
            isMenuActive: isMobile
          }
        )
      ] })
    ] }),
    isMobile && isMenuActive && /* @__PURE__ */ jsx(
      Navigation,
      {
        variant: "headerMobile",
        links,
        onItemClickCallback: () => setIsMenuActive(false)
      }
    )
  ] });
};
const messages$1 = defineMessages({
  home: {
    id: "app.home.home",
    description: "Navigation link to the 'Home' page.",
    defaultMessage: "Home"
  },
  offer: {
    id: "app.home.offer",
    description: "Navigation link to the 'Offer' section.",
    defaultMessage: "Offer"
  },
  about: {
    id: "app.home.about",
    description: "Navigation link to the 'About' section.",
    defaultMessage: "About"
  },
  contact: {
    id: "app.home.contact",
    description: "Navigation link to the 'Contact' section.",
    defaultMessage: "Contact"
  },
  pubName: {
    id: "app.home.pubName",
    description: "Name of the pub/cafe establishment on the home page.",
    defaultMessage: "Z Nosem W Piwie"
  },
  welcome: {
    id: "app.home.welcome",
    description: "Welcome message on the home page.",
    defaultMessage: 'Welcome to place where the past and imagination converge for a unique pub/cafe experience! Immerse yourself in the charm of rustic decor, sip on imaginative brews, and let every moment transport you to a place where laughter knows no bounds. Cheers to the magic of "Z Nosem W Piwie" - your escape into an extraordinary world of make-believe!'
  },
  follow: {
    id: "app.home.follow",
    description: "Invitation to follow the establishment on social media.",
    defaultMessage: "Follow Us"
  }
});
const home_background = "/imgs/home_background.png";
const HeaderSection = ut.section`
    height: 100vh;
    height: 100svh;
    padding: 0 2rem 2rem 2rem;
    background-color: ${({ theme: theme2 }) => theme2.palette.shades.black[38]};
    background-image: url(${home_background});
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: darken;
    background-position: center;
`;
const SHome = ut.div`
    height: 100%;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const MainTextFrame = ut.div`
    max-width: 80rem;
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    border-left: ${({ theme: theme2 }) => theme2.border.primary};

    & > h1 {
        color: ${({ theme: theme2 }) => theme2.palette.primary};
    }

    & > p {
        color: ${({ theme: theme2 }) => theme2.palette.white};
    }
`;
const FollowUs = ut.div`
    height: fit-content;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    column-gap: 2rem;
`;
const FollowUsTextContainer = ut.div`
    display: flex;
    align-items: center;
    padding-right: 2rem;
    border-right: ${({ theme: theme2 }) => theme2.border.primary};
    color: ${({ theme: theme2 }) => theme2.palette.primary};
    font-size: 2.8rem;
`;
const FollowUsIconsContainer = ut.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;

    & > ${SLink} > ${IconWrapper} {
        fill: ${({ theme: theme2 }) => theme2.palette.primary};
    }
`;
const Home = ({ actualLocale, setActualIntlLocale }) => {
  const intl = useIntl();
  const links = [
    { children: intl.formatMessage(messages$1.home), href: "#home" },
    { children: intl.formatMessage(messages$1.offer), href: "#offer" },
    { children: intl.formatMessage(messages$1.about), href: "#about" },
    { children: intl.formatMessage(messages$1.contact), href: "#contact" }
  ];
  const isMobile = useBreakpoint("mobile");
  return /* @__PURE__ */ jsx(HeaderSection, { id: "home", children: /* @__PURE__ */ jsxs(SHome, { children: [
    /* @__PURE__ */ jsx(
      Header,
      {
        actualLocale,
        setActualIntlLocale,
        links,
        isMobile
      }
    ),
    /* @__PURE__ */ jsxs(MainTextFrame, { children: [
      /* @__PURE__ */ jsx("h1", { className: "decorative", children: /* @__PURE__ */ jsx(FormattedMessage, { ...messages$1.pubName }) }),
      /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(FormattedMessage, { ...messages$1.welcome }) })
    ] }),
    /* @__PURE__ */ jsxs(FollowUs, { children: [
      /* @__PURE__ */ jsx(FollowUsTextContainer, { children: /* @__PURE__ */ jsx(FormattedMessage, { ...messages$1.follow }) }),
      /* @__PURE__ */ jsxs(FollowUsIconsContainer, { children: [
        /* @__PURE__ */ jsx(Link, { href: "https://www.facebook.com/", children: /* @__PURE__ */ jsx(Icon, { variant: "facebook" }) }),
        /* @__PURE__ */ jsx(Link, { href: "https://www.instagram.com/", children: /* @__PURE__ */ jsx(Icon, { variant: "instagram" }) }),
        /* @__PURE__ */ jsx(Link, { href: "https://www.tiktok.com/", children: /* @__PURE__ */ jsx(Icon, { variant: "tiktok" }) }),
        /* @__PURE__ */ jsx(Link, { href: "https://twitter.com/", children: /* @__PURE__ */ jsx(Icon, { variant: "x" }) }),
        /* @__PURE__ */ jsx(Link, { href: "https://www.youtube.com/", children: /* @__PURE__ */ jsx(Icon, { variant: "youtube" }) })
      ] })
    ] })
  ] }) });
};
const useOffer = () => {
  return useQuery({ queryKey: ["offer"], queryFn: fetchOffer });
};
const MenuItemContainer = ut.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;

    ${({ $direction }) => ({
  normal: "",
  reversed: at`
                flex-direction: row-reverse;
            `,
  column: at`
                flex-direction: column-reverse;
                align-items: center;
            `
})[$direction]}
`;
const ItemImg = ut.img`
    --size: 30rem;
    height: 100%;
    max-height: var(--size);
    width: 100%;
    max-width: var(--size);
    border-radius: 100%;
    object-fit: contain;
    aspect-ratio: 1;
    border: 1rem solid ${({ theme: theme2 }) => theme2.palette.secondary};
    background: ${({ theme: theme2 }) => theme2.palette.white};
`;
const DescriptionContainer = ut.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: ${({ theme: theme2 }) => theme2.palette.secondary};
`;
const NameWithPrice = ut.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
`;
const MenuItem = ({
  direction = "normal",
  name,
  capacity,
  price,
  description,
  imgSrc
}) => {
  return /* @__PURE__ */ jsxs(MenuItemContainer, { $direction: direction, children: [
    /* @__PURE__ */ jsx(ItemImg, { src: imgSrc }),
    /* @__PURE__ */ jsxs(DescriptionContainer, { children: [
      /* @__PURE__ */ jsxs(NameWithPrice, { children: [
        /* @__PURE__ */ jsx("h3", { className: "decorative", children: name }),
        /* @__PURE__ */ jsxs("h4", { children: [
          capacity,
          "l ",
          price,
          " zł"
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { children: description })
    ] })
  ] });
};
const messages = defineMessages({
  beers: {
    id: "app.offer.beers",
    description: "Title for the beers section in the menu.",
    defaultMessage: "B e e r s"
  },
  beersM: {
    id: "app.offer.beersM",
    description: "Title for the beers section in a condensed format.",
    defaultMessage: "Beers"
  },
  coffee: {
    id: "app.offer.coffee",
    description: "Title for the coffee section in the menu.",
    defaultMessage: "C o f f e e"
  },
  coffeeM: {
    id: "app.offer.coffeeM",
    description: "Title for the coffee section in a condensed format.",
    defaultMessage: "Coffee"
  }
});
const OfferSection = ut.section`
    padding: 2rem;
`;
const OfferSectionInner = ut.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;
const ItemsCategoryContainer = ut.div`
    display: flex;
    ${({ $isMobile, $direction }) => $isMobile ? at`
                  flex-direction: column;
              ` : $direction === "reverse" && at`
                  flex-direction: row-reverse;
              `}
`;
const ItemsCategoryNameContainer = ut.div`
    position: relative;
    padding: 2rem;
    background-color: ${({ theme: theme2 }) => theme2.palette.secondary};
    color: ${({ theme: theme2 }) => theme2.palette.primary};
    text-align: center;
`;
const ItemsCategoryName = ut.h2.attrs({
  className: "decorative"
})`
    position: sticky;
    top: 25%;
    color: ${({ theme: theme2 }) => theme2.palette.primary};
    text-align: center;
`;
const ItemsList = ut.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
`;
const CategoriesDivider = ut.hr`
    height: 5rem;
    width: 100%;
    margin: 0;
    border: none;
    background-color: ${({ theme: theme2 }) => theme2.palette.secondary};
`;
const Offer = () => {
  const intl = useIntl();
  const { data: data2, isLoading, isSuccess } = useOffer();
  const translatedBeersOffer = useMemo(
    () => !isLoading && isSuccess && (data2 == null ? void 0 : data2.beers.map((beer) => {
      const text = beer.translations[intl.locale];
      return { ...beer, ...text };
    })) || [],
    [data2 == null ? void 0 : data2.beers, intl.locale, isLoading, isSuccess]
  );
  const translatedCoffeeOffer = useMemo(
    () => !isLoading && isSuccess && (data2 == null ? void 0 : data2.coffee.map((coffee) => {
      const text = coffee.translations[intl.locale];
      return { ...coffee, ...text };
    })) || [],
    [data2 == null ? void 0 : data2.coffee, intl.locale, isLoading, isSuccess]
  );
  const isMobile = useBreakpoint("mobile");
  return /* @__PURE__ */ jsx(OfferSection, { id: "offer", children: /* @__PURE__ */ jsxs(OfferSectionInner, { children: [
    translatedBeersOffer.length > 0 && /* @__PURE__ */ jsxs(ItemsCategoryContainer, { $isMobile: isMobile, children: [
      /* @__PURE__ */ jsx(ItemsCategoryNameContainer, { children: /* @__PURE__ */ jsx(ItemsCategoryName, { children: isMobile ? /* @__PURE__ */ jsx(FormattedMessage, { ...messages.beersM }) : /* @__PURE__ */ jsx(FormattedMessage, { ...messages.beers }) }) }),
      /* @__PURE__ */ jsx(ItemsList, { children: translatedBeersOffer.map((item, index2) => /* @__PURE__ */ jsx(
        MenuItem,
        {
          ...item,
          name: `${index2 + 1}. ${item.name}`,
          direction: isMobile ? "column" : index2 % 2 ? "reversed" : "normal"
        },
        index2
      )) })
    ] }),
    !isMobile && translatedCoffeeOffer.length > 0 && /* @__PURE__ */ jsx(CategoriesDivider, {}),
    translatedCoffeeOffer.length > 0 && /* @__PURE__ */ jsxs(ItemsCategoryContainer, { $isMobile: isMobile, $direction: "reverse", children: [
      /* @__PURE__ */ jsx(ItemsCategoryNameContainer, { children: /* @__PURE__ */ jsx(ItemsCategoryName, { children: isMobile ? /* @__PURE__ */ jsx(FormattedMessage, { ...messages.coffeeM }) : /* @__PURE__ */ jsx(FormattedMessage, { ...messages.coffee }) }) }),
      /* @__PURE__ */ jsx(ItemsList, { children: translatedCoffeeOffer.map((item, index2) => /* @__PURE__ */ jsx(
        MenuItem,
        {
          ...item,
          name: `${index2 + 1}. ${item.name}`,
          direction: isMobile ? "column" : index2 % 2 ? "reversed" : "normal"
        },
        index2
      )) })
    ] })
  ] }) });
};
const Page = ({ actualLocale, setActualIntlLocale }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Home, { actualLocale, setActualIntlLocale }),
    /* @__PURE__ */ jsx(Offer, {}),
    /* @__PURE__ */ jsx(About, {})
  ] });
};
const import_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Page
}, Symbol.toStringTag, { value: "Module" }));
const data = async () => {
  const queryClient = new QueryClient();
  await Promise.all([
    queryClient.prefetchQuery({ queryKey: ["offer"], queryFn: fetchOffer }),
    queryClient.prefetchQuery({ queryKey: ["events"], queryFn: fetchEvents }),
    queryClient.prefetchQuery({ queryKey: ["merch"], queryFn: fetchMerch })
  ]);
  return {
    dehydratedState: dehydrate(queryClient)
  };
};
const import_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: data
}, Symbol.toStringTag, { value: "Module" }));
const configValuesImported = [
  {
    configName: "onRenderHtml",
    importPath: "/src/renderer/+onRenderHtml.tsx",
    isValueFile: true,
    exportValues: import_0
  },
  {
    configName: "Page",
    importPath: "/src/pages/index/+Page.tsx",
    isValueFile: true,
    exportValues: import_1
  },
  {
    configName: "data",
    importPath: "/src/pages/index/+data.ts",
    isValueFile: true,
    exportValues: import_2
  }
];
const configValuesSerialized = {};
export {
  configValuesImported,
  configValuesSerialized
};
