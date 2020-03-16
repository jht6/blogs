/*eslint-disable*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.demo_proto = (function() {
    
        var demo_proto = {};
    
        demo_proto.Frame = (function() {
    
            function Frame(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Frame.prototype.seqid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
            Frame.prototype.payload = $util.newBuffer([]);
    
            Frame.create = function create(properties) {
                return new Frame(properties);
            };
    
            Frame.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                w.uint32(8).uint64(m.seqid);
                w.uint32(18).bytes(m.payload);
                return w;
            };
    
            Frame.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.demo_proto.Frame();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.seqid = r.uint64();
                        break;
                    case 2:
                        m.payload = r.bytes();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                if (!m.hasOwnProperty("seqid"))
                    throw $util.ProtocolError("missing required 'seqid'", { instance: m });
                if (!m.hasOwnProperty("payload"))
                    throw $util.ProtocolError("missing required 'payload'", { instance: m });
                return m;
            };
    
            return Frame;
        })();
    
        demo_proto.Payload = (function() {
    
            function Payload(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Payload.prototype.id = 0;
            Payload.prototype.name = "";
    
            Payload.create = function create(properties) {
                return new Payload(properties);
            };
    
            Payload.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                w.uint32(8).int32(m.id);
                w.uint32(18).string(m.name);
                return w;
            };
    
            Payload.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.demo_proto.Payload();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.id = r.int32();
                        break;
                    case 2:
                        m.name = r.string();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                if (!m.hasOwnProperty("id"))
                    throw $util.ProtocolError("missing required 'id'", { instance: m });
                if (!m.hasOwnProperty("name"))
                    throw $util.ProtocolError("missing required 'name'", { instance: m });
                return m;
            };
    
            return Payload;
        })();
    
        return demo_proto;
    })();

    return $root;
});
