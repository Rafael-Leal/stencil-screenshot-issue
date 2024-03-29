var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
System.register(['./chunk-a61457cf.system.js', './chunk-ba8c0cb1.system.js', './chunk-f43705e2.system.js', './chunk-93181f6c.system.js'], function (exports) {
    'use strict';
    var registerInstance, createEvent, getIonMode, h, getElement, Host, pickerController, hostContext, clamp, findItemLabel, renderHiddenInput;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                createEvent = module.d;
                getIonMode = module.c;
                h = module.h;
                getElement = module.f;
                Host = module.H;
            }, function (module) {
                pickerController = module.b;
            }, function (module) {
                hostContext = module.h;
            }, function (module) {
                clamp = module.c;
                findItemLabel = module.f;
                renderHiddenInput = module.a;
            }],
        execute: function () {
            /**
             * Gets a date value given a format
             * Defaults to the current date if
             * no date given
             */
            function getDateValue(date, format) {
                var getValue = getValueFromFormat(date, format);
                if (getValue !== undefined) {
                    return getValue;
                }
                var defaultDate = parseDate(new Date().toISOString());
                return getValueFromFormat(defaultDate, format);
            }
            function renderDatetime(template, value, locale) {
                if (value === undefined) {
                    return undefined;
                }
                var tokens = [];
                var hasText = false;
                FORMAT_KEYS.forEach(function (format, index) {
                    if (template.indexOf(format.f) > -1) {
                        var token = '{' + index + '}';
                        var text = renderTextFormat(format.f, value[format.k], value, locale);
                        if (!hasText && text !== undefined && value[format.k] != null) {
                            hasText = true;
                        }
                        tokens.push(token, text || '');
                        template = template.replace(format.f, token);
                    }
                });
                if (!hasText) {
                    return undefined;
                }
                for (var i = 0; i < tokens.length; i += 2) {
                    template = template.replace(tokens[i], tokens[i + 1]);
                }
                return template;
            }
            function renderTextFormat(format, value, date, locale) {
                if ((format === FORMAT_DDDD || format === FORMAT_DDD)) {
                    try {
                        value = (new Date(date.year, date.month - 1, date.day)).getDay();
                        if (format === FORMAT_DDDD) {
                            return (locale.dayNames ? locale.dayNames : DAY_NAMES)[value];
                        }
                        return (locale.dayShortNames ? locale.dayShortNames : DAY_SHORT_NAMES)[value];
                    }
                    catch (e) {
                        // ignore
                    }
                    return undefined;
                }
                if (format === FORMAT_A) {
                    return date !== undefined && date.hour !== undefined
                        ? (date.hour < 12 ? 'AM' : 'PM')
                        : value ? value.toUpperCase() : '';
                }
                if (format === FORMAT_a) {
                    return date !== undefined && date.hour !== undefined
                        ? (date.hour < 12 ? 'am' : 'pm')
                        : value || '';
                }
                if (value == null) {
                    return '';
                }
                if (format === FORMAT_YY || format === FORMAT_MM ||
                    format === FORMAT_DD || format === FORMAT_HH ||
                    format === FORMAT_mm || format === FORMAT_ss) {
                    return twoDigit(value);
                }
                if (format === FORMAT_YYYY) {
                    return fourDigit(value);
                }
                if (format === FORMAT_MMMM) {
                    return (locale.monthNames ? locale.monthNames : MONTH_NAMES)[value - 1];
                }
                if (format === FORMAT_MMM) {
                    return (locale.monthShortNames ? locale.monthShortNames : MONTH_SHORT_NAMES)[value - 1];
                }
                if (format === FORMAT_hh || format === FORMAT_h) {
                    if (value === 0) {
                        return '12';
                    }
                    if (value > 12) {
                        value -= 12;
                    }
                    if (format === FORMAT_hh && value < 10) {
                        return ('0' + value);
                    }
                }
                return value.toString();
            }
            function dateValueRange(format, min, max) {
                var opts = [];
                if (format === FORMAT_YYYY || format === FORMAT_YY) {
                    // year
                    if (max.year === undefined || min.year === undefined) {
                        throw new Error('min and max year is undefined');
                    }
                    for (var i = max.year; i >= min.year; i--) {
                        opts.push(i);
                    }
                }
                else if (format === FORMAT_MMMM || format === FORMAT_MMM ||
                    format === FORMAT_MM || format === FORMAT_M ||
                    format === FORMAT_hh || format === FORMAT_h) {
                    // month or 12-hour
                    for (var i = 1; i < 13; i++) {
                        opts.push(i);
                    }
                }
                else if (format === FORMAT_DDDD || format === FORMAT_DDD ||
                    format === FORMAT_DD || format === FORMAT_D) {
                    // day
                    for (var i = 1; i < 32; i++) {
                        opts.push(i);
                    }
                }
                else if (format === FORMAT_HH || format === FORMAT_H) {
                    // 24-hour
                    for (var i = 0; i < 24; i++) {
                        opts.push(i);
                    }
                }
                else if (format === FORMAT_mm || format === FORMAT_m) {
                    // minutes
                    for (var i = 0; i < 60; i++) {
                        opts.push(i);
                    }
                }
                else if (format === FORMAT_ss || format === FORMAT_s) {
                    // seconds
                    for (var i = 0; i < 60; i++) {
                        opts.push(i);
                    }
                }
                else if (format === FORMAT_A || format === FORMAT_a) {
                    // AM/PM
                    opts.push('am', 'pm');
                }
                return opts;
            }
            function dateSortValue(year, month, day, hour, minute) {
                if (hour === void 0) { hour = 0; }
                if (minute === void 0) { minute = 0; }
                return parseInt("1" + fourDigit(year) + twoDigit(month) + twoDigit(day) + twoDigit(hour) + twoDigit(minute), 10);
            }
            function dateDataSortValue(data) {
                return dateSortValue(data.year, data.month, data.day, data.hour, data.minute);
            }
            function daysInMonth(month, year) {
                return (month === 4 || month === 6 || month === 9 || month === 11) ? 30 : (month === 2) ? isLeapYear(year) ? 29 : 28 : 31;
            }
            function isLeapYear(year) {
                return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
            }
            var ISO_8601_REGEXP = /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;
            var TIME_REGEXP = /^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;
            function parseDate(val) {
                // manually parse IS0 cuz Date.parse cannot be trusted
                // ISO 8601 format: 1994-12-15T13:47:20Z
                var parse = null;
                if (val != null && val !== '') {
                    // try parsing for just time first, HH:MM
                    parse = TIME_REGEXP.exec(val);
                    if (parse) {
                        // adjust the array so it fits nicely with the datetime parse
                        parse.unshift(undefined, undefined);
                        parse[2] = parse[3] = undefined;
                    }
                    else {
                        // try parsing for full ISO datetime
                        parse = ISO_8601_REGEXP.exec(val);
                    }
                }
                if (parse === null) {
                    // wasn't able to parse the ISO datetime
                    return undefined;
                }
                // ensure all the parse values exist with at least 0
                for (var i = 1; i < 8; i++) {
                    parse[i] = parse[i] !== undefined ? parseInt(parse[i], 10) : undefined;
                }
                var tzOffset = 0;
                if (parse[9] && parse[10]) {
                    // hours
                    tzOffset = parseInt(parse[10], 10) * 60;
                    if (parse[11]) {
                        // minutes
                        tzOffset += parseInt(parse[11], 10);
                    }
                    if (parse[9] === '-') {
                        // + or -
                        tzOffset *= -1;
                    }
                }
                return {
                    year: parse[1],
                    month: parse[2],
                    day: parse[3],
                    hour: parse[4],
                    minute: parse[5],
                    second: parse[6],
                    millisecond: parse[7],
                    tzOffset: tzOffset,
                };
            }
            /**
             * Converts a valid UTC datetime string
             * To the user's local timezone
             * Note: This is not meant for time strings
             * such as "01:47"
             */
            var getLocalDateTime = function (dateString) {
                if (dateString === void 0) { dateString = ''; }
                /**
                 * If user passed in undefined
                 * or null, convert it to the
                 * empty string since the rest
                 * of this functions expects
                 * a string
                 */
                if (dateString === undefined || dateString === null) {
                    dateString = '';
                }
                /**
                 * Ensures that YYYY-MM-DD, YYYY-MM,
                 * YYYY-DD, etc does not get affected
                 * by timezones and stays on the day/month
                 * that the user provided
                 */
                if (dateString.length === 10 ||
                    dateString.length === 7) {
                    dateString += ' ';
                }
                var date = (typeof dateString === 'string' && dateString.length > 0) ? new Date(dateString) : new Date();
                return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
            };
            function updateDate(existingData, newData) {
                if (!newData || typeof newData === 'string') {
                    var localDateTime = getLocalDateTime(newData);
                    if (!Number.isNaN(localDateTime.getTime())) {
                        newData = localDateTime.toISOString();
                    }
                }
                if (newData && newData !== '') {
                    if (typeof newData === 'string') {
                        // new date is a string, and hopefully in the ISO format
                        // convert it to our DatetimeData if a valid ISO
                        newData = parseDate(newData);
                        if (newData) {
                            // successfully parsed the ISO string to our DatetimeData
                            Object.assign(existingData, newData);
                            return true;
                        }
                    }
                    else if ((newData.year || newData.hour || newData.month || newData.day || newData.minute || newData.second)) {
                        // newData is from of a datetime picker's selected values
                        // update the existing DatetimeData data with the new values
                        // do some magic for 12-hour values
                        if (newData.ampm && newData.hour) {
                            newData.hour.value = (newData.ampm.value === 'pm')
                                ? (newData.hour.value === 12 ? 12 : newData.hour.value + 12)
                                : (newData.hour.value === 12 ? 0 : newData.hour.value);
                        }
                        // merge new values from the picker's selection
                        // to the existing DatetimeData values
                        for (var _i = 0, _a = Object.keys(newData); _i < _a.length; _i++) {
                            var key = _a[_i];
                            existingData[key] = newData[key].value;
                        }
                        return true;
                    }
                    // eww, invalid data
                    console.warn("Error parsing date: \"" + newData + "\". Please provide a valid ISO 8601 datetime format: https://www.w3.org/TR/NOTE-datetime");
                }
                else {
                    // blank data, clear everything out
                    for (var k in existingData) {
                        if (existingData.hasOwnProperty(k)) {
                            delete existingData[k];
                        }
                    }
                }
                return false;
            }
            function parseTemplate(template) {
                var formats = [];
                template = template.replace(/[^\w\s]/gi, ' ');
                FORMAT_KEYS.forEach(function (format) {
                    if (format.f.length > 1 && template.indexOf(format.f) > -1 && template.indexOf(format.f + format.f.charAt(0)) < 0) {
                        template = template.replace(format.f, ' ' + format.f + ' ');
                    }
                });
                var words = template.split(' ').filter(function (w) { return w.length > 0; });
                words.forEach(function (word, i) {
                    FORMAT_KEYS.forEach(function (format) {
                        if (word === format.f) {
                            if (word === FORMAT_A || word === FORMAT_a) {
                                // this format is an am/pm format, so it's an "a" or "A"
                                if ((formats.indexOf(FORMAT_h) < 0 && formats.indexOf(FORMAT_hh) < 0) ||
                                    VALID_AMPM_PREFIX.indexOf(words[i - 1]) === -1) {
                                    // template does not already have a 12-hour format
                                    // or this am/pm format doesn't have a hour, minute, or second format immediately before it
                                    // so do not treat this word "a" or "A" as the am/pm format
                                    return;
                                }
                            }
                            formats.push(word);
                        }
                    });
                });
                return formats;
            }
            function getValueFromFormat(date, format) {
                if (format === FORMAT_A || format === FORMAT_a) {
                    return (date.hour < 12 ? 'am' : 'pm');
                }
                if (format === FORMAT_hh || format === FORMAT_h) {
                    return (date.hour > 12 ? date.hour - 12 : date.hour);
                }
                return date[convertFormatToKey(format)];
            }
            function convertFormatToKey(format) {
                for (var k in FORMAT_KEYS) {
                    if (FORMAT_KEYS[k].f === format) {
                        return FORMAT_KEYS[k].k;
                    }
                }
                return undefined;
            }
            function convertDataToISO(data) {
                // https://www.w3.org/TR/NOTE-datetime
                var rtn = '';
                if (data.year !== undefined) {
                    // YYYY
                    rtn = fourDigit(data.year);
                    if (data.month !== undefined) {
                        // YYYY-MM
                        rtn += '-' + twoDigit(data.month);
                        if (data.day !== undefined) {
                            // YYYY-MM-DD
                            rtn += '-' + twoDigit(data.day);
                            if (data.hour !== undefined) {
                                // YYYY-MM-DDTHH:mm:SS
                                rtn += "T" + twoDigit(data.hour) + ":" + twoDigit(data.minute) + ":" + twoDigit(data.second);
                                if (data.millisecond > 0) {
                                    // YYYY-MM-DDTHH:mm:SS.SSS
                                    rtn += '.' + threeDigit(data.millisecond);
                                }
                                if (data.tzOffset === undefined) {
                                    // YYYY-MM-DDTHH:mm:SSZ
                                    rtn += 'Z';
                                }
                                else {
                                    // YYYY-MM-DDTHH:mm:SS+/-HH:mm
                                    rtn += (data.tzOffset > 0 ? '+' : '-') + twoDigit(Math.floor(Math.abs(data.tzOffset / 60))) + ':' + twoDigit(data.tzOffset % 60);
                                }
                            }
                        }
                    }
                }
                else if (data.hour !== undefined) {
                    // HH:mm
                    rtn = twoDigit(data.hour) + ':' + twoDigit(data.minute);
                    if (data.second !== undefined) {
                        // HH:mm:SS
                        rtn += ':' + twoDigit(data.second);
                        if (data.millisecond !== undefined) {
                            // HH:mm:SS.SSS
                            rtn += '.' + threeDigit(data.millisecond);
                        }
                    }
                }
                return rtn;
            }
            /**
             * Use to convert a string of comma separated strings or
             * an array of strings, and clean up any user input
             */
            function convertToArrayOfStrings(input, type) {
                if (input == null) {
                    return undefined;
                }
                if (typeof input === 'string') {
                    // convert the string to an array of strings
                    // auto remove any [] characters
                    input = input.replace(/\[|\]/g, '').split(',');
                }
                var values;
                if (Array.isArray(input)) {
                    // trim up each string value
                    values = input.map(function (val) { return val.toString().trim(); });
                }
                if (values === undefined || values.length === 0) {
                    console.warn("Invalid \"" + type + "Names\". Must be an array of strings, or a comma separated string.");
                }
                return values;
            }
            /**
             * Use to convert a string of comma separated numbers or
             * an array of numbers, and clean up any user input
             */
            function convertToArrayOfNumbers(input, type) {
                if (typeof input === 'string') {
                    // convert the string to an array of strings
                    // auto remove any whitespace and [] characters
                    input = input.replace(/\[|\]|\s/g, '').split(',');
                }
                var values;
                if (Array.isArray(input)) {
                    // ensure each value is an actual number in the returned array
                    values = input
                        .map(function (num) { return parseInt(num, 10); })
                        .filter(isFinite);
                }
                else {
                    values = [input];
                }
                if (values.length === 0) {
                    console.warn("Invalid \"" + type + "Values\". Must be an array of numbers, or a comma separated string of numbers.");
                }
                return values;
            }
            function twoDigit(val) {
                return ('0' + (val !== undefined ? Math.abs(val) : '0')).slice(-2);
            }
            function threeDigit(val) {
                return ('00' + (val !== undefined ? Math.abs(val) : '0')).slice(-3);
            }
            function fourDigit(val) {
                return ('000' + (val !== undefined ? Math.abs(val) : '0')).slice(-4);
            }
            var FORMAT_YYYY = 'YYYY';
            var FORMAT_YY = 'YY';
            var FORMAT_MMMM = 'MMMM';
            var FORMAT_MMM = 'MMM';
            var FORMAT_MM = 'MM';
            var FORMAT_M = 'M';
            var FORMAT_DDDD = 'DDDD';
            var FORMAT_DDD = 'DDD';
            var FORMAT_DD = 'DD';
            var FORMAT_D = 'D';
            var FORMAT_HH = 'HH';
            var FORMAT_H = 'H';
            var FORMAT_hh = 'hh';
            var FORMAT_h = 'h';
            var FORMAT_mm = 'mm';
            var FORMAT_m = 'm';
            var FORMAT_ss = 'ss';
            var FORMAT_s = 's';
            var FORMAT_A = 'A';
            var FORMAT_a = 'a';
            var FORMAT_KEYS = [
                { f: FORMAT_YYYY, k: 'year' },
                { f: FORMAT_MMMM, k: 'month' },
                { f: FORMAT_DDDD, k: 'day' },
                { f: FORMAT_MMM, k: 'month' },
                { f: FORMAT_DDD, k: 'day' },
                { f: FORMAT_YY, k: 'year' },
                { f: FORMAT_MM, k: 'month' },
                { f: FORMAT_DD, k: 'day' },
                { f: FORMAT_HH, k: 'hour' },
                { f: FORMAT_hh, k: 'hour' },
                { f: FORMAT_mm, k: 'minute' },
                { f: FORMAT_ss, k: 'second' },
                { f: FORMAT_M, k: 'month' },
                { f: FORMAT_D, k: 'day' },
                { f: FORMAT_H, k: 'hour' },
                { f: FORMAT_h, k: 'hour' },
                { f: FORMAT_m, k: 'minute' },
                { f: FORMAT_s, k: 'second' },
                { f: FORMAT_A, k: 'ampm' },
                { f: FORMAT_a, k: 'ampm' },
            ];
            var DAY_NAMES = [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
            ];
            var DAY_SHORT_NAMES = [
                'Sun',
                'Mon',
                'Tue',
                'Wed',
                'Thu',
                'Fri',
                'Sat',
            ];
            var MONTH_NAMES = [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
            ];
            var MONTH_SHORT_NAMES = [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
            ];
            var VALID_AMPM_PREFIX = [
                FORMAT_hh, FORMAT_h, FORMAT_mm, FORMAT_m, FORMAT_ss, FORMAT_s
            ];
            /**
             * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
             */
            var Datetime = /** @class */ (function () {
                function Datetime(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    this.inputId = "ion-dt-" + datetimeIds++;
                    this.locale = {};
                    this.datetimeMin = {};
                    this.datetimeMax = {};
                    this.datetimeValue = {};
                    this.isExpanded = false;
                    /**
                     * The name of the control, which is submitted with the form data.
                     */
                    this.name = this.inputId;
                    /**
                     * If `true`, the user cannot interact with the datetime.
                     */
                    this.disabled = false;
                    /**
                     * If `true`, the datetime appears normal but is not interactive.
                     */
                    this.readonly = false;
                    /**
                     * The display format of the date and time as text that shows
                     * within the item. When the `pickerFormat` input is not used, then the
                     * `displayFormat` is used for both display the formatted text, and determining
                     * the datetime picker's columns. See the `pickerFormat` input description for
                     * more info. Defaults to `MMM D, YYYY`.
                     */
                    this.displayFormat = 'MMM D, YYYY';
                    /**
                     * The text to display on the picker's cancel button.
                     */
                    this.cancelText = 'Cancel';
                    /**
                     * The text to display on the picker's "Done" button.
                     */
                    this.doneText = 'Done';
                    this.onFocus = function () {
                        _this.ionFocus.emit();
                    };
                    this.onBlur = function () {
                        _this.ionBlur.emit();
                    };
                    this.ionCancel = createEvent(this, "ionCancel", 7);
                    this.ionChange = createEvent(this, "ionChange", 7);
                    this.ionFocus = createEvent(this, "ionFocus", 7);
                    this.ionBlur = createEvent(this, "ionBlur", 7);
                    this.ionStyle = createEvent(this, "ionStyle", 7);
                }
                Datetime.prototype.disabledChanged = function () {
                    this.emitStyle();
                };
                /**
                 * Update the datetime value when the value changes
                 */
                Datetime.prototype.valueChanged = function () {
                    this.updateDatetimeValue(this.value);
                    this.emitStyle();
                    this.ionChange.emit({
                        value: this.value
                    });
                };
                Datetime.prototype.componentWillLoad = function () {
                    // first see if locale names were provided in the inputs
                    // then check to see if they're in the config
                    // if neither were provided then it will use default English names
                    this.locale = {
                        // this.locale[type] = convertToArrayOfStrings((this[type] ? this[type] : this.config.get(type), type);
                        monthNames: convertToArrayOfStrings(this.monthNames, 'monthNames'),
                        monthShortNames: convertToArrayOfStrings(this.monthShortNames, 'monthShortNames'),
                        dayNames: convertToArrayOfStrings(this.dayNames, 'dayNames'),
                        dayShortNames: convertToArrayOfStrings(this.dayShortNames, 'dayShortNames')
                    };
                    this.updateDatetimeValue(this.value);
                    this.emitStyle();
                };
                Datetime.prototype.onClick = function () {
                    this.setFocus();
                    this.open();
                };
                /**
                 * Opens the datetime overlay.
                 */
                Datetime.prototype.open = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var pickerOptions, picker;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (this.disabled || this.isExpanded) {
                                        return [2 /*return*/];
                                    }
                                    pickerOptions = this.generatePickerOptions();
                                    return [4 /*yield*/, pickerController.create(pickerOptions)];
                                case 1:
                                    picker = _a.sent();
                                    this.isExpanded = true;
                                    picker.onDidDismiss().then(function () {
                                        _this.isExpanded = false;
                                        _this.setFocus();
                                    });
                                    picker.addEventListener('ionPickerColChange', function (event) { return __awaiter(_this, void 0, void 0, function () {
                                        var data, colSelectedIndex, colOptions, changeData, columns;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    data = event.detail;
                                                    colSelectedIndex = data.selectedIndex;
                                                    colOptions = data.options;
                                                    changeData = {};
                                                    changeData[data.name] = {
                                                        value: colOptions[colSelectedIndex].value
                                                    };
                                                    this.updateDatetimeValue(changeData);
                                                    columns = this.generateColumns();
                                                    picker.columns = columns;
                                                    return [4 /*yield*/, this.validate(picker)];
                                                case 1:
                                                    _a.sent();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                    return [4 /*yield*/, this.validate(picker)];
                                case 2:
                                    _a.sent();
                                    return [4 /*yield*/, picker.present()];
                                case 3:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                Datetime.prototype.emitStyle = function () {
                    this.ionStyle.emit({
                        'interactive': true,
                        'datetime': true,
                        'has-placeholder': this.placeholder != null,
                        'has-value': this.hasValue(),
                        'interactive-disabled': this.disabled,
                    });
                };
                Datetime.prototype.updateDatetimeValue = function (value) {
                    updateDate(this.datetimeValue, value);
                };
                Datetime.prototype.generatePickerOptions = function () {
                    var _this = this;
                    var mode = getIonMode(this);
                    var pickerOptions = Object.assign({ mode: mode }, this.pickerOptions, { columns: this.generateColumns() });
                    // If the user has not passed in picker buttons,
                    // add a cancel and ok button to the picker
                    var buttons = pickerOptions.buttons;
                    if (!buttons || buttons.length === 0) {
                        pickerOptions.buttons = [
                            {
                                text: this.cancelText,
                                role: 'cancel',
                                handler: function () {
                                    _this.updateDatetimeValue(_this.value);
                                    _this.ionCancel.emit();
                                }
                            },
                            {
                                text: this.doneText,
                                handler: function (data) {
                                    _this.updateDatetimeValue(data);
                                    /**
                                     * Prevent convertDataToISO from doing any
                                     * kind of transformation based on timezone
                                     * This cancels out any change it attempts to make
                                     *
                                     * Important: Take the timezone offset based on
                                     * the date that is currently selected, otherwise
                                     * there can be 1 hr difference when dealing w/ DST
                                     */
                                    var date = new Date(convertDataToISO(_this.datetimeValue));
                                    _this.datetimeValue.tzOffset = date.getTimezoneOffset() * -1;
                                    _this.value = convertDataToISO(_this.datetimeValue);
                                }
                            }
                        ];
                    }
                    return pickerOptions;
                };
                Datetime.prototype.generateColumns = function () {
                    var _this = this;
                    // if a picker format wasn't provided, then fallback
                    // to use the display format
                    var template = this.pickerFormat || this.displayFormat || DEFAULT_FORMAT;
                    if (template.length === 0) {
                        return [];
                    }
                    // make sure we've got up to date sizing information
                    this.calcMinMax();
                    // does not support selecting by day name
                    // automatically remove any day name formats
                    template = template.replace('DDDD', '{~}').replace('DDD', '{~}');
                    if (template.indexOf('D') === -1) {
                        // there is not a day in the template
                        // replace the day name with a numeric one if it exists
                        template = template.replace('{~}', 'D');
                    }
                    // make sure no day name replacer is left in the string
                    template = template.replace(/{~}/g, '');
                    // parse apart the given template into an array of "formats"
                    var columns = parseTemplate(template).map(function (format) {
                        // loop through each format in the template
                        // create a new picker column to build up with data
                        var key = convertFormatToKey(format);
                        var values;
                        // check if they have exact values to use for this date part
                        // otherwise use the default date part values
                        var self = _this;
                        values = self[key + 'Values']
                            ? convertToArrayOfNumbers(self[key + 'Values'], key)
                            : dateValueRange(format, _this.datetimeMin, _this.datetimeMax);
                        var colOptions = values.map(function (val) {
                            return {
                                value: val,
                                text: renderTextFormat(format, val, undefined, _this.locale),
                            };
                        });
                        // cool, we've loaded up the columns with options
                        // preselect the option for this column
                        var optValue = getDateValue(_this.datetimeValue, format);
                        var selectedIndex = colOptions.findIndex(function (opt) { return opt.value === optValue; });
                        return {
                            name: key,
                            selectedIndex: selectedIndex >= 0 ? selectedIndex : 0,
                            options: colOptions
                        };
                    });
                    // Normalize min/max
                    var min = this.datetimeMin;
                    var max = this.datetimeMax;
                    ['month', 'day', 'hour', 'minute']
                        .filter(function (name) { return !columns.find(function (column) { return column.name === name; }); })
                        .forEach(function (name) {
                        min[name] = 0;
                        max[name] = 0;
                    });
                    return divyColumns(columns);
                };
                Datetime.prototype.validate = function (picker) {
                    return __awaiter(this, void 0, void 0, function () {
                        var today, minCompareVal, maxCompareVal, yearCol, selectedYear, selectedIndex, yearOpt, selectedMonth, numDaysInMonth, selectedDay, selectedHour;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    today = new Date();
                                    minCompareVal = dateDataSortValue(this.datetimeMin);
                                    maxCompareVal = dateDataSortValue(this.datetimeMax);
                                    return [4 /*yield*/, picker.getColumn('year')];
                                case 1:
                                    yearCol = _a.sent();
                                    selectedYear = today.getFullYear();
                                    if (yearCol) {
                                        // default to the first value if the current year doesn't exist in the options
                                        if (!yearCol.options.find(function (col) { return col.value === today.getFullYear(); })) {
                                            selectedYear = yearCol.options[0].value;
                                        }
                                        selectedIndex = yearCol.selectedIndex;
                                        if (selectedIndex !== undefined) {
                                            yearOpt = yearCol.options[selectedIndex];
                                            if (yearOpt) {
                                                // they have a selected year value
                                                selectedYear = yearOpt.value;
                                            }
                                        }
                                    }
                                    return [4 /*yield*/, this.validateColumn(picker, 'month', 1, minCompareVal, maxCompareVal, [selectedYear, 0, 0, 0, 0], [selectedYear, 12, 31, 23, 59])];
                                case 2:
                                    selectedMonth = _a.sent();
                                    numDaysInMonth = daysInMonth(selectedMonth, selectedYear);
                                    return [4 /*yield*/, this.validateColumn(picker, 'day', 2, minCompareVal, maxCompareVal, [selectedYear, selectedMonth, 0, 0, 0], [selectedYear, selectedMonth, numDaysInMonth, 23, 59])];
                                case 3:
                                    selectedDay = _a.sent();
                                    return [4 /*yield*/, this.validateColumn(picker, 'hour', 3, minCompareVal, maxCompareVal, [selectedYear, selectedMonth, selectedDay, 0, 0], [selectedYear, selectedMonth, selectedDay, 23, 59])];
                                case 4:
                                    selectedHour = _a.sent();
                                    return [4 /*yield*/, this.validateColumn(picker, 'minute', 4, minCompareVal, maxCompareVal, [selectedYear, selectedMonth, selectedDay, selectedHour, 0], [selectedYear, selectedMonth, selectedDay, selectedHour, 59])];
                                case 5:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                Datetime.prototype.calcMinMax = function () {
                    var todaysYear = new Date().getFullYear();
                    if (this.yearValues !== undefined) {
                        var years = convertToArrayOfNumbers(this.yearValues, 'year');
                        if (this.min === undefined) {
                            this.min = Math.min.apply(Math, years).toString();
                        }
                        if (this.max === undefined) {
                            this.max = Math.max.apply(Math, years).toString();
                        }
                    }
                    else {
                        if (this.min === undefined) {
                            this.min = (todaysYear - 100).toString();
                        }
                        if (this.max === undefined) {
                            this.max = todaysYear.toString();
                        }
                    }
                    var min = this.datetimeMin = parseDate(this.min);
                    var max = this.datetimeMax = parseDate(this.max);
                    min.year = min.year || todaysYear;
                    max.year = max.year || todaysYear;
                    min.month = min.month || 1;
                    max.month = max.month || 12;
                    min.day = min.day || 1;
                    max.day = max.day || 31;
                    min.hour = min.hour || 0;
                    max.hour = max.hour || 23;
                    min.minute = min.minute || 0;
                    max.minute = max.minute || 59;
                    min.second = min.second || 0;
                    max.second = max.second || 59;
                    // Ensure min/max constraints
                    if (min.year > max.year) {
                        console.error('min.year > max.year');
                        min.year = max.year - 100;
                    }
                    if (min.year === max.year) {
                        if (min.month > max.month) {
                            console.error('min.month > max.month');
                            min.month = 1;
                        }
                        else if (min.month === max.month && min.day > max.day) {
                            console.error('min.day > max.day');
                            min.day = 1;
                        }
                    }
                };
                Datetime.prototype.validateColumn = function (picker, name, index, min, max, lowerBounds, upperBounds) {
                    return __awaiter(this, void 0, void 0, function () {
                        var column, lb, ub, options, indexMin, indexMax, i, opts, value, disabled, selectedIndex, opt;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, picker.getColumn(name)];
                                case 1:
                                    column = _a.sent();
                                    if (!column) {
                                        return [2 /*return*/, 0];
                                    }
                                    lb = lowerBounds.slice();
                                    ub = upperBounds.slice();
                                    options = column.options;
                                    indexMin = options.length - 1;
                                    indexMax = 0;
                                    for (i = 0; i < options.length; i++) {
                                        opts = options[i];
                                        value = opts.value;
                                        lb[index] = opts.value;
                                        ub[index] = opts.value;
                                        disabled = opts.disabled = (value < lowerBounds[index] ||
                                            value > upperBounds[index] ||
                                            dateSortValue(ub[0], ub[1], ub[2], ub[3], ub[4]) < min ||
                                            dateSortValue(lb[0], lb[1], lb[2], lb[3], lb[4]) > max);
                                        if (!disabled) {
                                            indexMin = Math.min(indexMin, i);
                                            indexMax = Math.max(indexMax, i);
                                        }
                                    }
                                    selectedIndex = column.selectedIndex = clamp(indexMin, column.selectedIndex, indexMax);
                                    opt = column.options[selectedIndex];
                                    if (opt) {
                                        return [2 /*return*/, opt.value];
                                    }
                                    return [2 /*return*/, 0];
                            }
                        });
                    });
                };
                Datetime.prototype.getText = function () {
                    // create the text of the formatted data
                    var template = this.displayFormat || this.pickerFormat || DEFAULT_FORMAT;
                    if (this.value === undefined ||
                        this.value === null ||
                        this.value.length === 0) {
                        return;
                    }
                    return renderDatetime(template, this.datetimeValue, this.locale);
                };
                Datetime.prototype.hasValue = function () {
                    var val = this.datetimeValue;
                    return Object.keys(val).length > 0;
                };
                Datetime.prototype.setFocus = function () {
                    if (this.buttonEl) {
                        this.buttonEl.focus();
                    }
                };
                Datetime.prototype.hostData = function () {
                    var _a;
                    var _b = this, inputId = _b.inputId, disabled = _b.disabled, readonly = _b.readonly, isExpanded = _b.isExpanded, el = _b.el, placeholder = _b.placeholder;
                    var mode = getIonMode(this);
                    var addPlaceholderClass = (this.getText() === undefined && placeholder != null) ? true : false;
                    var labelId = inputId + '-lbl';
                    var label = findItemLabel(el);
                    if (label) {
                        label.id = labelId;
                    }
                    return {
                        'role': 'combobox',
                        'aria-disabled': disabled ? 'true' : null,
                        'aria-expanded': "" + isExpanded,
                        'aria-haspopup': 'true',
                        'aria-labelledby': labelId,
                        class: (_a = {},
                            _a["" + mode] = true,
                            _a['datetime-disabled'] = disabled,
                            _a['datetime-readonly'] = readonly,
                            _a['datetime-placeholder'] = addPlaceholderClass,
                            _a['in-item'] = hostContext('ion-item', el),
                            _a)
                    };
                };
                Datetime.prototype.__stencil_render = function () {
                    var _this = this;
                    // If selected text has been passed in, use that first
                    // otherwise use the placeholder
                    var datetimeText = this.getText();
                    if (datetimeText === undefined) {
                        datetimeText = this.placeholder != null ? this.placeholder : '';
                    }
                    renderHiddenInput(true, this.el, this.name, this.value, this.disabled);
                    return [
                        h("div", { class: "datetime-text" }, datetimeText),
                        h("button", { type: "button", onFocus: this.onFocus, onBlur: this.onBlur, disabled: this.disabled, ref: function (el) { return _this.buttonEl = el; } })
                    ];
                };
                Object.defineProperty(Datetime.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Datetime, "watchers", {
                    get: function () {
                        return {
                            "disabled": ["disabledChanged"],
                            "value": ["valueChanged"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Datetime.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
                Object.defineProperty(Datetime, "style", {
                    get: function () { return ":host {\n  /**\n   * \@prop --padding-top: Padding top of the datetime\n   * \@prop --padding-end: Padding end of the datetime\n   * \@prop --padding-bottom: Padding bottom of the datetime\n   * \@prop --padding-start: Padding start of the datetime\n   *\n   * \@prop --placeholder-color: Color of the datetime placeholder\n   */\n  padding-left: var(--padding-start);\n  padding-right: var(--padding-end);\n  padding-top: var(--padding-top);\n  padding-bottom: var(--padding-bottom);\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  min-width: 16px;\n  min-height: 1.2em;\n  font-family: var(--ion-font-family, inherit);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  z-index: 2;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--padding-start);\n    padding-inline-start: var(--padding-start);\n    -webkit-padding-end: var(--padding-end);\n    padding-inline-end: var(--padding-end);\n  }\n}\n\n:host(.in-item) {\n  position: static;\n}\n\n:host(.datetime-placeholder) {\n  color: var(--placeholder-color);\n}\n\n:host(.datetime-disabled) {\n  opacity: 0.3;\n  pointer-events: none;\n}\n\n:host(.datetime-readonly) {\n  pointer-events: none;\n}\n\nbutton {\n  left: 0;\n  top: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: none;\n}\n[dir=rtl] button, :host-context([dir=rtl]) button {\n  left: unset;\n  right: unset;\n  right: 0;\n}\n\nbutton::-moz-focus-inner {\n  border: 0;\n}\n\n.datetime-text {\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n  -ms-flex: 1;\n  flex: 1;\n  min-height: inherit;\n  direction: ltr;\n  overflow: inherit;\n}\n[dir=rtl] .datetime-text, :host-context([dir=rtl]) .datetime-text {\n  direction: rtl;\n}\n\n:host {\n  --placeholder-color: var(--ion-placeholder-color, var(--ion-color-step-400, #999999));\n  --padding-top: 10px;\n  --padding-end: 0;\n  --padding-bottom: 11px;\n  --padding-start: 16px;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Datetime;
            }());
            exports('ion_datetime', Datetime);
            function divyColumns(columns) {
                var columnsWidth = [];
                var col;
                var width;
                for (var i = 0; i < columns.length; i++) {
                    col = columns[i];
                    columnsWidth.push(0);
                    for (var _i = 0, _a = col.options; _i < _a.length; _i++) {
                        var option = _a[_i];
                        width = option.text.length;
                        if (width > columnsWidth[i]) {
                            columnsWidth[i] = width;
                        }
                    }
                }
                if (columnsWidth.length === 2) {
                    width = Math.max(columnsWidth[0], columnsWidth[1]);
                    columns[0].align = 'right';
                    columns[1].align = 'left';
                    columns[0].optionsWidth = columns[1].optionsWidth = width * 17 + "px";
                }
                else if (columnsWidth.length === 3) {
                    width = Math.max(columnsWidth[0], columnsWidth[2]);
                    columns[0].align = 'right';
                    columns[1].columnWidth = columnsWidth[1] * 17 + "px";
                    columns[0].optionsWidth = columns[2].optionsWidth = width * 17 + "px";
                    columns[2].align = 'left';
                }
                return columns;
            }
            var datetimeIds = 0;
            var DEFAULT_FORMAT = 'MMM D, YYYY';
        }
    };
});
