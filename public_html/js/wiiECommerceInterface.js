var wiiEC = new ECommerceInterface();
// OSS Data, this is required for initPage.
function ECTimeout(timeout, interval)
{
    this.timeout = timeout; // Timeout in milliseconds (to cancel)
    this.noProgressMillis = 0; // Milliseconds for which no progress was made
    this.lastPhase = 0; // Last progress phase
    this.lastDownloadedSize = 0; // Last downloaded size
}

function ecSupportsSession()
{
    return ("setSessionValue" in wiiEC && "getSessionValue" in wiiEC);
}
function checkRegistration()
{
    var progress = wiiEC.checkRegistration ();
    opName = "Check Registration";
    opDesc = "Checking Registration";
    finishOp(opName, opDesc, progress, "onCheckRegistrationDone");
}
function isCheckRegisterNeeded()
{
    if (ecSupportsSession()) {
        var accountInvalid = wiiEC.getSessionValue("accountInvalid");
        if (accountInvalid == "true") {
            return true;
        }
    }

    return false;
}
function checkRegistered()
{
    var r = wiiEC.getDeviceInfo ();
    var checkRegisterNeeded = isCheckRegisterNeeded();
    var weakToken = wiiEC.getWeakToken();
    trace("AccountId=" + r.accountId + " token=" + weakToken + " Country=" + r.country + " a/c Country=" + r.accountCountry);
    trace("DeviceCode=" + r.deviceCode + " a/c DeviceCode=" + r.accountDeviceCode);

    if (!checkRegisterNeeded) {
        checkRegisterNeeded = (r.accountId === EC_INVALID_ACCOUNT_ID || !weakToken);
    }

    if (checkRegisterNeeded) {
        // No account id - Ask server if registered
        checkRegistration();
    }
}
// testy commenty
// why is this here

// ERROR VARIABLES
var EC_ERROR_OK                   =     0;  // No error
var EC_ERROR_FAIL                 = -4001;  // Generic error
var EC_ERROR_NOT_SUPPORTED        = -4002;
var EC_ERROR_INSUFFICIENT_RESOURCE = -4003;
var EC_ERROR_INVALID              = -4004;
var EC_ERROR_NOMEM                = -4005;
var EC_ERROR_NOT_FOUND            = -4006;
var EC_ERROR_NOT_BUSY             = -4007;
var EC_ERROR_BUSY                 = -4008;
var EC_ERROR_NOT_DONE             = -4009;

var EC_ERROR_NET_NA               = -4013;
var EC_ERROR_WS_REPORT            = -4015;
var EC_ERROR_ECARD                = -4017;
var EC_ERROR_OVERFLOW             = -4018;
/* Should never see EC_ERROR_OVERFLOW */
var EC_ERROR_NET_CONTENT          = -4019;
var EC_ERROR_CONTENT_SIZE         = -4020;

var EC_ERROR_WS_RESP              = -4034
var EC_ERROR_TICKET               = -4035;
var EC_ERROR_TITLE                = -4036;
var EC_ERROR_TITLE_CONTENT        = -4037;
var EC_ERROR_CANCELED             = -4038;
var EC_ERROR_ALREADY              = -4039;

var EC_ERROR_INIT                 = -4041;
var EC_ERROR_REGISTER             = -4042;
var EC_ERROR_WS_RECV              = -4043;
var EC_ERROR_NOT_ACTIVE           = -4044;
var EC_ERROR_FILE_READ            = -4045;
var EC_ERROR_FILE_WRITE           = -4046;

var EC_ERROR_NOT_OWNED            = -4050;
var EC_ERROR_HTTP_HDR_PARSE       = -4052;
var EC_ERROR_CONFIG               = -4053;
var EC_ERROR_CANCEL_FAILED        = -4054;
var EC_ERROR_USER_INODES          = -4055;
var EC_ERROR_USER_BLOCKS          = -4056;
var EC_ERROR_SYS_INODES           = -4057;
var EC_ERROR_SYS_BLOCKS           = -4058;

var EC_ERROR_NO_DEVICE_CODE       = -4065;
var EC_ERROR_SYNC                 = -4066;
var EC_ERROR_CONNECT              = -4069;
var EC_ERROR_NO_TMD               = -4070;
var EC_ERROR_FIRMWARE             = -4071;

var EC_ERROR_INVALID_PCPW         = -4074;
var EC_ERROR_PC_DISABLED          = -4075;
var EC_ERROR_EULA                 = -4076;
var EC_ERROR_AGE_RESTRICTED       = -4077;
var EC_ERROR_POINTS_RESTRICTED    = -4078;
var EC_ERROR_ALREADY_OWN          = -4079;
var EC_ERROR_SHOP_SETUP           = -4080;
var EC_ERROR_INSUFFICIENT_FUNDS   = -4081;


var EC_ERROR_RANGE_START          = -4000;
var EC_ERROR_RANGE_END            = -4199;

var EC_ISFS_ERROR_START           =  -101;
var EC_ISFS_ERROR_END             =  -199;
var EC_ES_ERROR_START             = -1000;
var EC_ES_ERROR_END               = -1999;
var EC_HTTP_STATUS_RANGE_START    = -4400;
var EC_HTTP_STATUS_RANGE_END      = -4899;
var EC_NHTTP_ERROR_RANGE_START    = -4900;
var EC_NHTTP_ERROR_RANGE_END      = -4959;
var EC_SSL_ERROR_RANGE_START      = -4960;
var EC_SSL_ERROR_RANGE_END        = -4979;
var EC_NHTTP_APIERR_RANGE_START   = -4980;
var EC_NHTTP_APIERR_RANGE_END     = -4999;

var EC_ERROR_NHTTP_CRX            = -4992;
var EC_ERROR_NHTTP_AHF            = -4993;
var EC_ERROR_NHTTP_SCCD           = -4994;
var EC_ERROR_NHTTP_SRCD           = -4995;
var EC_ERROR_NHTTP_SVO            = -4996;
var EC_ERROR_NHTTP_PDE            = -4997;
var EC_ERROR_NHTTP_PDR            = -4998;
var EC_ERROR_NHTTP_SRA            = -4999;



var  NHTTP_ERROR_NONE            =  0;
var  NHTTP_ERROR_ALLOC           =  1;
var  NHTTP_ERROR_TOOMANYREQ      =  2;
var  NHTTP_ERROR_SOCKET          =  3;
var  NHTTP_ERROR_DNS             =  4;
var  NHTTP_ERROR_CONNECT         =  5;
var  NHTTP_ERROR_BUFFULL         =  6;
var  NHTTP_ERROR_HTTPPARSE       =  7;
var  NHTTP_ERROR_CANCELED        =  8;
var  NHTTP_ERROR_REVOLUTIONSDK   =  9;
var  NHTTP_ERROR_REVOLUTIONWIFI  = 10;
var  NHTTP_ERROR_UNKNOWN         = 11;
var  NHTTP_ERROR_DNS_PROXY       = 12;
var  NHTTP_ERROR_CONNECT_PROXY   = 13;
var  NHTTP_ERROR_SSL             = 14;

// SSL errors returned by NHTTPSSLGetError()
var  SSL_ENONE                   =   0;
var  SSL_EFAILED                 =  -1;
var  SSL_EWANT_READ              =  -2;
var  SSL_EWANT_WRITE             =  -3;
var  SSL_ESYSCALL                =  -5;
var  SSL_EZERO_RETURN            =  -6;
var  SSL_EWANT_CONNECT           =  -7;
var  SSL_ESSLID                  =  -8;
var  SSL_EVERIFY_COMMON_NAME     =  -9;
var  SSL_EVERIFY_ROOT_CA         = -10;
var  SSL_EVERIFY_CHAIN           = -11;
var  SSL_EVERIFY_DATE            = -12;
var  SSL_EGET_SERVER_CERT        = -13;


var ES_MAX_LIMIT_TYPE  = 8;
var EC_INVALID_MONEY_AMOUNT = (-2147483647-1);

var EC_PHASE_NoPhase                        =  0;
var EC_PHASE_Starting                       =  1;
var EC_PHASE_Done                           =  2;
var EC_PHASE_PurchasingTitle                =  3;
var EC_PHASE_RedeemingECard                 =  4;
var EC_PHASE_DownloadingContent             =  5;
var EC_PHASE_GettingTicketsFromServer       =  6;
var EC_PHASE_GettingPointsBalance           =  7;
var EC_PHASE_PurchasingPoints               =  8;
var EC_PHASE_CheckingRegistrationStatus     = 11;
var EC_PHASE_Registering                    = 12;
var EC_PHASE_Unregistering                  = 13;
var EC_PHASE_Transfer                       = 14;
var EC_PHASE_DeletingOwnership              = 15;


var EC_INVALID_ACCOUNT_ID = "";


var EC_PaymentMethod_ECard      = 0;
var EC_PaymentMethod_Account    = 1;
var EC_PaymentMethod_CreditCard = 2;


var ECOPT_JS_TEST_MODE        = 0;  /* can never set from JavaScript */
var ECOPT_LOG_LEVEL           = 1;
var ECOPT_RE_DOWNLOAD_CONTENT = 2;
var ECOPT_INVALID             = 3;

var EC_JS_TM_OFF = 0;
var EC_JS_TM_ON  = 1;

var  EC_LOG_NONE    =  0;
var  EC_LOG_ERR     =  1;
var  EC_LOG_WARN    =  2;
var  EC_LOG_INFO    =  3;
var  EC_LOG_FINE    =  4;
var  EC_LOG_FINER   =  5;
var  EC_LOG_FINEST  =  6;

var SC_NET_CONTENT_RESTRICTION_MASK_NEWS          = 0x00000001;
var SC_NET_CONTENT_RESTRICTION_MASK_NWC24_MESSAGE = 0x00000002;
var SC_NET_CONTENT_RESTRICTION_MASK_SHOPPING      = 0x00000004;

var EC_SYNC_TYPE_UPDATE = "1";
var EC_SYNC_TYPE_IMPORT_ALL = "0";

var EC_REGION_JPN = "JPN";
var EC_REGION_USA = "USA";
var EC_REGION_EUR = "EUR";
var EC_REGION_AUS = "AUS";
var EC_REGION_BRA = "BRA";
var EC_REGION_TWN = "TWN";
var EC_REGION_KOR = "KOR";
var EC_REGION_HKG = "HKG";
var EC_REGION_ASI = "ASI";
var EC_REGION_LTN = "LTN";
var EC_REGION_SAF = "SAF";
var EC_REGION_CHN = "CHN";

var ES_LIMIT_CODE_TR = "TR";
var ES_LIMIT_CODE_DR = "DR";
var ES_LIMIT_CODE_SR = "SR";
var ES_LIMIT_CODE_LR = "LR";

var ES_LICENSE_MASK         = 0x0f;
var ES_LICENSE_PERMANENT    = 0x00;
var ES_LICENSE_DEMO         = 0x01;
var ES_LICENSE_TRIAL        = 0x02;
var ES_LICENSE_RENTAL       = 0x03;
var ES_LICENSE_SUBSCRIPTION = 0x04;
var ES_LICENSE_GIFT_MASK    = 0x80;

var ES_LICENSE_PERMANENT_STRING = "PERMANENT";
var ES_LICENSE_DEMO_STRING = "DEMO";
var ES_LICENSE_TRIAL_STRING = "TRIAL";
var ES_LICENSE_RENTAL_STRING = "RENTAL";
var ES_LICENSE_SUBSCRIPTION_STRING = "SUBSCRIPTION";

var ES_LICENSE_TYPE_TO_STRING = new Array();
ES_LICENSE_TYPE_TO_STRING[ES_LICENSE_PERMANENT] = ES_LICENSE_PERMANENT_STRING;
ES_LICENSE_TYPE_TO_STRING[ES_LICENSE_DEMO] = ES_LICENSE_DEMO_STRING;
ES_LICENSE_TYPE_TO_STRING[ES_LICENSE_TRIAL] = ES_LICENSE_TRIAL_STRING;
ES_LICENSE_TYPE_TO_STRING[ES_LICENSE_RENTAL] = ES_LICENSE_RENTAL_STRING;
ES_LICENSE_TYPE_TO_STRING[ES_LICENSE_SUBSCRIPTION] = ES_LICENSE_SUBSCRIPTION_STRING;

var ES_STRING_TO_LICENSE_TYPE = new Array();
ES_STRING_TO_LICENSE_TYPE[ES_LICENSE_PERMANENT_STRING] = ES_LICENSE_PERMANENT;
ES_STRING_TO_LICENSE_TYPE[ES_LICENSE_DEMO_STRING] = ES_LICENSE_DEMO;
ES_STRING_TO_LICENSE_TYPE[ES_LICENSE_TRIAL_STRING] = ES_LICENSE_TRIAL;
ES_STRING_TO_LICENSE_TYPE[ES_LICENSE_RENTAL_STRING] = ES_LICENSE_RENTAL;
ES_STRING_TO_LICENSE_TYPE[ES_LICENSE_SUBSCRIPTION_STRING] = ES_LICENSE_SUBSCRIPTION;

var GIFT_OWNED      = "200";
var GIFT_COUNTRY    = "201";
var GIFT_REJECT     = "202";
var GIFT_EXPIRED    = "203";
var GIFT_SETTINGS   = "204";
var GIFT_EXPIRED_CS = "205";

var EC_ACCEPT_GIFT_MIN_INODES = 8;
var EC_ACCEPT_GIFT_MIN_DEVICE_SPACE = 3;
var EC_ACCEPT_GIFT_MIN_USER_SPACE = 1;

var WIFI_PARTIALLY_CHARGED = 1;
var WIFI_FREE_INPUT = 2;
var WIFI_ALL_CHARGED = 3;