exports.defineAutoTests = function () {
    var isBrowser = cordova.platformId === "browser";

    var fail = function (done) {
        expect(true).toBe(false);
        done();
    };

    describe('AppInfo (navigator.appInfo)', function () {

        it("appInfo should exist", function () {
            expect(navigator.appInfo).toBeDefined();
        });

        var checkVersion = function (a) {
            expect(a).toBeDefined();
            expect(typeof a).toBe('string');
            expect(a.length).toBeGreaterThan(2);
            expect(a.split('.').length).toBeGreaterThan(1);
        };

        var checkIdentifier = function (a) {
            expect(a).toBeDefined();
            expect(typeof a).toBe('string');
            expect(a.length).toBeGreaterThan(0);
        };

        var checkBuild = function(a) {
            expect(a).toBeDefined();
            expect(typeof a).toBe('string');
            if (cordova.platformId == 'wp8') {
                expect(a.length).toEqual(0);
            } else {
                expect(a.length).toBeGreaterThan(0);
            }
        };

        describe("getVersion", function () {
            it("appInfo.getVersion should exist", function () {
                expect(typeof navigator.appInfo.getVersion).toBeDefined();
                expect(typeof navigator.appInfo.getVersion).toEqual('function');
            });
            it("appInfo.getVersion success callback should be called with a version name", function (done) {
                navigator.appInfo.getVersion(function (a) {
                    checkVersion(a);
                    done();
                },
                fail.bind(null, done));
            });
        });

        describe("getIdentifier", function () {
            it("appInfo.getIdentifier should exist", function () {
                expect(typeof navigator.appInfo.getIdentifier).toBeDefined();
                expect(typeof navigator.appInfo.getIdentifier).toEqual('function');
            });
            it("appInfo.getIdentifier success callback should be called with a identifier", function (done) {
                navigator.appInfo.getIdentifier(function (a) {
                    checkIdentifier(a);
                    done();
                },
                fail.bind(null, done));
            });
        });

        describe("getAppInfo", function () {
            var checkAppInfo = function (a) {
                expect(a).toBeDefined();
                expect(typeof a).toBe('object');

                checkVersion(a.version);
                checkIdentifier(a.identifier);
                checkBuild(a.build);
            };
            it("appInfo.getAppInfo should exist", function () {
                expect(typeof navigator.appInfo.getAppInfo).toBeDefined();
                expect(typeof navigator.appInfo.getAppInfo).toEqual('function');
            });
            it("appInfo.getAppInfo success callback should be called with a JSON object", function (done) {
                navigator.appInfo.getAppInfo(function (a) {
                    checkAppInfo(a);
                    done();
                }, fail.bind(null, done));
            });
        });

        describe("Consistency", function () {

            it("Version returned from getAppInfo and getVersion should be the same", function (done) {
                navigator.appInfo.getAppInfo(function (a) {
                    navigator.appInfo.getVersion(function (b) {
                        expect(a.version).toEqual(b);
                        done();
                    }, fail.bind(null, done));
                }, fail.bind(null, done));
            });

            it("Identifier returned from getAppInfo and getIdentifier should be the same", function (done) {
                navigator.appInfo.getAppInfo(function (a) {
                    navigator.appInfo.getIdentifier(function (b) {
                        expect(a.identifier).toEqual(b);
                        done();
                    }, fail.bind(null, done));
                }, fail.bind(null, done));
            });

        });

    });
};