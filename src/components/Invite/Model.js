/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader,
  $Writer = $protobuf.Writer,
  $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Invite = (function () {
  /**
   * Properties of an Invite.
   * @exports IInvite
   * @interface IInvite
   * @property {string|null} [group] Invite group
   * @property {Array.<IGuest>|null} [guests] Invite guests
   */

  /**
   * Constructs a new Invite.
   * @exports Invite
   * @classdesc Represents an Invite.
   * @implements IInvite
   * @constructor
   * @param {IInvite=} [properties] Properties to set
   */
  function Invite(properties) {
    this.guests = [];
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * Invite group.
   * @member {string} group
   * @memberof Invite
   * @instance
   */
  Invite.prototype.group = "";

  /**
   * Invite guests.
   * @member {Array.<IGuest>} guests
   * @memberof Invite
   * @instance
   */
  Invite.prototype.guests = $util.emptyArray;

  /**
   * Creates a new Invite instance using the specified properties.
   * @function create
   * @memberof Invite
   * @static
   * @param {IInvite=} [properties] Properties to set
   * @returns {Invite} Invite instance
   */
  Invite.create = function create(properties) {
    return new Invite(properties);
  };

  /**
   * Encodes the specified Invite message. Does not implicitly {@link Invite.verify|verify} messages.
   * @function encode
   * @memberof Invite
   * @static
   * @param {IInvite} message Invite message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Invite.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.group != null && Object.hasOwnProperty.call(message, "group"))
      writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.group);
    if (message.guests != null && message.guests.length)
      for (var i = 0; i < message.guests.length; ++i)
        $root.Guest.encode(
          message.guests[i],
          writer.uint32(/* id 2, wireType 2 =*/ 18).fork(),
        ).ldelim();
    return writer;
  };

  /**
   * Encodes the specified Invite message, length delimited. Does not implicitly {@link Invite.verify|verify} messages.
   * @function encodeDelimited
   * @memberof Invite
   * @static
   * @param {IInvite} message Invite message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Invite.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes an Invite message from the specified reader or buffer.
   * @function decode
   * @memberof Invite
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {Invite} Invite
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Invite.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.Invite();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          message.group = reader.string();
          break;
        }
        case 2: {
          if (!(message.guests && message.guests.length)) message.guests = [];
          message.guests.push($root.Guest.decode(reader, reader.uint32()));
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Decodes an Invite message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof Invite
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {Invite} Invite
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Invite.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies an Invite message.
   * @function verify
   * @memberof Invite
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  Invite.verify = function verify(message) {
    if (typeof message !== "object" || message === null)
      return "object expected";
    if (message.group != null && message.hasOwnProperty("group"))
      if (!$util.isString(message.group)) return "group: string expected";
    if (message.guests != null && message.hasOwnProperty("guests")) {
      if (!Array.isArray(message.guests)) return "guests: array expected";
      for (var i = 0; i < message.guests.length; ++i) {
        var error = $root.Guest.verify(message.guests[i]);
        if (error) return "guests." + error;
      }
    }
    return null;
  };

  /**
   * Creates an Invite message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof Invite
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {Invite} Invite
   */
  Invite.fromObject = function fromObject(object) {
    if (object instanceof $root.Invite) return object;
    var message = new $root.Invite();
    if (object.group != null) message.group = String(object.group);
    if (object.guests) {
      if (!Array.isArray(object.guests))
        throw TypeError(".Invite.guests: array expected");
      message.guests = [];
      for (var i = 0; i < object.guests.length; ++i) {
        if (typeof object.guests[i] !== "object")
          throw TypeError(".Invite.guests: object expected");
        message.guests[i] = $root.Guest.fromObject(object.guests[i]);
      }
    }
    return message;
  };

  /**
   * Creates a plain object from an Invite message. Also converts values to other types if specified.
   * @function toObject
   * @memberof Invite
   * @static
   * @param {Invite} message Invite
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  Invite.toObject = function toObject(message, options) {
    if (!options) options = {};
    var object = {};
    if (options.arrays || options.defaults) object.guests = [];
    if (options.defaults) object.group = "";
    if (message.group != null && message.hasOwnProperty("group"))
      object.group = message.group;
    if (message.guests && message.guests.length) {
      object.guests = [];
      for (var j = 0; j < message.guests.length; ++j)
        object.guests[j] = $root.Guest.toObject(message.guests[j], options);
    }
    return object;
  };

  /**
   * Converts this Invite to JSON.
   * @function toJSON
   * @memberof Invite
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  Invite.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  /**
   * Gets the default type url for Invite
   * @function getTypeUrl
   * @memberof Invite
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  Invite.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/Invite";
  };

  return Invite;
})();

$root.Guest = (function () {
  /**
   * Properties of a Guest.
   * @exports IGuest
   * @interface IGuest
   * @property {string|null} [id] Guest id
   * @property {string|null} [name] Guest name
   * @property {IAvatar|null} [avatar] Guest avatar
   */

  /**
   * Constructs a new Guest.
   * @exports Guest
   * @classdesc Represents a Guest.
   * @implements IGuest
   * @constructor
   * @param {IGuest=} [properties] Properties to set
   */
  function Guest(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * Guest id.
   * @member {string} id
   * @memberof Guest
   * @instance
   */
  Guest.prototype.id = "";

  /**
   * Guest name.
   * @member {string} name
   * @memberof Guest
   * @instance
   */
  Guest.prototype.name = "";

  /**
   * Guest avatar.
   * @member {IAvatar|null|undefined} avatar
   * @memberof Guest
   * @instance
   */
  Guest.prototype.avatar = null;

  // OneOf field names bound to virtual getters and setters
  var $oneOfFields;

  /**
   * Guest _avatar.
   * @member {"avatar"|undefined} _avatar
   * @memberof Guest
   * @instance
   */
  Object.defineProperty(Guest.prototype, "_avatar", {
    get: $util.oneOfGetter(($oneOfFields = ["avatar"])),
    set: $util.oneOfSetter($oneOfFields),
  });

  /**
   * Creates a new Guest instance using the specified properties.
   * @function create
   * @memberof Guest
   * @static
   * @param {IGuest=} [properties] Properties to set
   * @returns {Guest} Guest instance
   */
  Guest.create = function create(properties) {
    return new Guest(properties);
  };

  /**
   * Encodes the specified Guest message. Does not implicitly {@link Guest.verify|verify} messages.
   * @function encode
   * @memberof Guest
   * @static
   * @param {IGuest} message Guest message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Guest.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
      writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.id);
    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
      writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.name);
    if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
      $root.Avatar.encode(
        message.avatar,
        writer.uint32(/* id 3, wireType 2 =*/ 26).fork(),
      ).ldelim();
    return writer;
  };

  /**
   * Encodes the specified Guest message, length delimited. Does not implicitly {@link Guest.verify|verify} messages.
   * @function encodeDelimited
   * @memberof Guest
   * @static
   * @param {IGuest} message Guest message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Guest.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a Guest message from the specified reader or buffer.
   * @function decode
   * @memberof Guest
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {Guest} Guest
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Guest.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.Guest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          message.id = reader.string();
          break;
        }
        case 2: {
          message.name = reader.string();
          break;
        }
        case 3: {
          message.avatar = $root.Avatar.decode(reader, reader.uint32());
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Decodes a Guest message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof Guest
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {Guest} Guest
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Guest.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a Guest message.
   * @function verify
   * @memberof Guest
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  Guest.verify = function verify(message) {
    if (typeof message !== "object" || message === null)
      return "object expected";
    var properties = {};
    if (message.id != null && message.hasOwnProperty("id"))
      if (!$util.isString(message.id)) return "id: string expected";
    if (message.name != null && message.hasOwnProperty("name"))
      if (!$util.isString(message.name)) return "name: string expected";
    if (message.avatar != null && message.hasOwnProperty("avatar")) {
      properties._avatar = 1;
      {
        var error = $root.Avatar.verify(message.avatar);
        if (error) return "avatar." + error;
      }
    }
    return null;
  };

  /**
   * Creates a Guest message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof Guest
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {Guest} Guest
   */
  Guest.fromObject = function fromObject(object) {
    if (object instanceof $root.Guest) return object;
    var message = new $root.Guest();
    if (object.id != null) message.id = String(object.id);
    if (object.name != null) message.name = String(object.name);
    if (object.avatar != null) {
      if (typeof object.avatar !== "object")
        throw TypeError(".Guest.avatar: object expected");
      message.avatar = $root.Avatar.fromObject(object.avatar);
    }
    return message;
  };

  /**
   * Creates a plain object from a Guest message. Also converts values to other types if specified.
   * @function toObject
   * @memberof Guest
   * @static
   * @param {Guest} message Guest
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  Guest.toObject = function toObject(message, options) {
    if (!options) options = {};
    var object = {};
    if (options.defaults) {
      object.id = "";
      object.name = "";
    }
    if (message.id != null && message.hasOwnProperty("id"))
      object.id = message.id;
    if (message.name != null && message.hasOwnProperty("name"))
      object.name = message.name;
    if (message.avatar != null && message.hasOwnProperty("avatar")) {
      object.avatar = $root.Avatar.toObject(message.avatar, options);
      if (options.oneofs) object._avatar = "avatar";
    }
    return object;
  };

  /**
   * Converts this Guest to JSON.
   * @function toJSON
   * @memberof Guest
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  Guest.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  /**
   * Gets the default type url for Guest
   * @function getTypeUrl
   * @memberof Guest
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  Guest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/Guest";
  };

  return Guest;
})();

$root.Avatar = (function () {
  /**
   * Properties of an Avatar.
   * @exports IAvatar
   * @interface IAvatar
   * @property {SkinColor|null} [skinColor] Avatar skinColor
   * @property {Top|null} [topType] Avatar topType
   * @property {HairColor|null} [hairColor] Avatar hairColor
   * @property {HatColor|null} [hatColor] Avatar hatColor
   * @property {Accessories|null} [accessoriesType] Avatar accessoriesType
   * @property {FacialHair|null} [facialHairType] Avatar facialHairType
   * @property {FacialHairColor|null} [facialHairColor] Avatar facialHairColor
   * @property {Clothe|null} [clotheType] Avatar clotheType
   * @property {ClotheColor|null} [clotheColor] Avatar clotheColor
   * @property {ClotheGraphic|null} [graphicType] Avatar graphicType
   * @property {Eye|null} [eyeType] Avatar eyeType
   * @property {Eyebrow|null} [eyebrowType] Avatar eyebrowType
   * @property {Mouth|null} [mouthType] Avatar mouthType
   */

  /**
   * Constructs a new Avatar.
   * @exports Avatar
   * @classdesc Represents an Avatar.
   * @implements IAvatar
   * @constructor
   * @param {IAvatar=} [properties] Properties to set
   */
  function Avatar(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * Avatar skinColor.
   * @member {SkinColor} skinColor
   * @memberof Avatar
   * @instance
   */
  Avatar.prototype.skinColor = 0;

  /**
   * Avatar topType.
   * @member {Top} topType
   * @memberof Avatar
   * @instance
   */
  Avatar.prototype.topType = 0;

  /**
   * Avatar hairColor.
   * @member {HairColor} hairColor
   * @memberof Avatar
   * @instance
   */
  Avatar.prototype.hairColor = 0;

  /**
   * Avatar hatColor.
   * @member {HatColor} hatColor
   * @memberof Avatar
   * @instance
   */
  Avatar.prototype.hatColor = 0;

  /**
   * Avatar accessoriesType.
   * @member {Accessories} accessoriesType
   * @memberof Avatar
   * @instance
   */
  Avatar.prototype.accessoriesType = 0;

  /**
   * Avatar facialHairType.
   * @member {FacialHair} facialHairType
   * @memberof Avatar
   * @instance
   */
  Avatar.prototype.facialHairType = 0;

  /**
   * Avatar facialHairColor.
   * @member {FacialHairColor} facialHairColor
   * @memberof Avatar
   * @instance
   */
  Avatar.prototype.facialHairColor = 0;

  /**
   * Avatar clotheType.
   * @member {Clothe} clotheType
   * @memberof Avatar
   * @instance
   */
  Avatar.prototype.clotheType = 0;

  /**
   * Avatar clotheColor.
   * @member {ClotheColor} clotheColor
   * @memberof Avatar
   * @instance
   */
  Avatar.prototype.clotheColor = 0;

  /**
   * Avatar graphicType.
   * @member {ClotheGraphic} graphicType
   * @memberof Avatar
   * @instance
   */
  Avatar.prototype.graphicType = 0;

  /**
   * Avatar eyeType.
   * @member {Eye} eyeType
   * @memberof Avatar
   * @instance
   */
  Avatar.prototype.eyeType = 0;

  /**
   * Avatar eyebrowType.
   * @member {Eyebrow} eyebrowType
   * @memberof Avatar
   * @instance
   */
  Avatar.prototype.eyebrowType = 0;

  /**
   * Avatar mouthType.
   * @member {Mouth} mouthType
   * @memberof Avatar
   * @instance
   */
  Avatar.prototype.mouthType = 0;

  /**
   * Creates a new Avatar instance using the specified properties.
   * @function create
   * @memberof Avatar
   * @static
   * @param {IAvatar=} [properties] Properties to set
   * @returns {Avatar} Avatar instance
   */
  Avatar.create = function create(properties) {
    return new Avatar(properties);
  };

  /**
   * Encodes the specified Avatar message. Does not implicitly {@link Avatar.verify|verify} messages.
   * @function encode
   * @memberof Avatar
   * @static
   * @param {IAvatar} message Avatar message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Avatar.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.skinColor != null &&
      Object.hasOwnProperty.call(message, "skinColor")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.skinColor);
    if (
      message.topType != null &&
      Object.hasOwnProperty.call(message, "topType")
    )
      writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.topType);
    if (
      message.hairColor != null &&
      Object.hasOwnProperty.call(message, "hairColor")
    )
      writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.hairColor);
    if (
      message.hatColor != null &&
      Object.hasOwnProperty.call(message, "hatColor")
    )
      writer.uint32(/* id 4, wireType 0 =*/ 32).int32(message.hatColor);
    if (
      message.accessoriesType != null &&
      Object.hasOwnProperty.call(message, "accessoriesType")
    )
      writer.uint32(/* id 5, wireType 0 =*/ 40).int32(message.accessoriesType);
    if (
      message.facialHairType != null &&
      Object.hasOwnProperty.call(message, "facialHairType")
    )
      writer.uint32(/* id 6, wireType 0 =*/ 48).int32(message.facialHairType);
    if (
      message.facialHairColor != null &&
      Object.hasOwnProperty.call(message, "facialHairColor")
    )
      writer.uint32(/* id 7, wireType 0 =*/ 56).int32(message.facialHairColor);
    if (
      message.clotheType != null &&
      Object.hasOwnProperty.call(message, "clotheType")
    )
      writer.uint32(/* id 8, wireType 0 =*/ 64).int32(message.clotheType);
    if (
      message.clotheColor != null &&
      Object.hasOwnProperty.call(message, "clotheColor")
    )
      writer.uint32(/* id 9, wireType 0 =*/ 72).int32(message.clotheColor);
    if (
      message.graphicType != null &&
      Object.hasOwnProperty.call(message, "graphicType")
    )
      writer.uint32(/* id 10, wireType 0 =*/ 80).int32(message.graphicType);
    if (
      message.eyeType != null &&
      Object.hasOwnProperty.call(message, "eyeType")
    )
      writer.uint32(/* id 11, wireType 0 =*/ 88).int32(message.eyeType);
    if (
      message.eyebrowType != null &&
      Object.hasOwnProperty.call(message, "eyebrowType")
    )
      writer.uint32(/* id 12, wireType 0 =*/ 96).int32(message.eyebrowType);
    if (
      message.mouthType != null &&
      Object.hasOwnProperty.call(message, "mouthType")
    )
      writer.uint32(/* id 13, wireType 0 =*/ 104).int32(message.mouthType);
    return writer;
  };

  /**
   * Encodes the specified Avatar message, length delimited. Does not implicitly {@link Avatar.verify|verify} messages.
   * @function encodeDelimited
   * @memberof Avatar
   * @static
   * @param {IAvatar} message Avatar message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Avatar.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes an Avatar message from the specified reader or buffer.
   * @function decode
   * @memberof Avatar
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {Avatar} Avatar
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Avatar.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.Avatar();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          message.skinColor = reader.int32();
          break;
        }
        case 2: {
          message.topType = reader.int32();
          break;
        }
        case 3: {
          message.hairColor = reader.int32();
          break;
        }
        case 4: {
          message.hatColor = reader.int32();
          break;
        }
        case 5: {
          message.accessoriesType = reader.int32();
          break;
        }
        case 6: {
          message.facialHairType = reader.int32();
          break;
        }
        case 7: {
          message.facialHairColor = reader.int32();
          break;
        }
        case 8: {
          message.clotheType = reader.int32();
          break;
        }
        case 9: {
          message.clotheColor = reader.int32();
          break;
        }
        case 10: {
          message.graphicType = reader.int32();
          break;
        }
        case 11: {
          message.eyeType = reader.int32();
          break;
        }
        case 12: {
          message.eyebrowType = reader.int32();
          break;
        }
        case 13: {
          message.mouthType = reader.int32();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Decodes an Avatar message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof Avatar
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {Avatar} Avatar
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Avatar.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies an Avatar message.
   * @function verify
   * @memberof Avatar
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  Avatar.verify = function verify(message) {
    if (typeof message !== "object" || message === null)
      return "object expected";
    if (message.skinColor != null && message.hasOwnProperty("skinColor"))
      switch (message.skinColor) {
        default:
          return "skinColor: enum value expected";
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
          break;
      }
    if (message.topType != null && message.hasOwnProperty("topType"))
      switch (message.topType) {
        default:
          return "topType: enum value expected";
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
        case 25:
        case 26:
        case 27:
        case 28:
        case 29:
        case 30:
        case 31:
        case 32:
        case 33:
        case 34:
          break;
      }
    if (message.hairColor != null && message.hasOwnProperty("hairColor"))
      switch (message.hairColor) {
        default:
          return "hairColor: enum value expected";
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
          break;
      }
    if (message.hatColor != null && message.hasOwnProperty("hatColor"))
      switch (message.hatColor) {
        default:
          return "hatColor: enum value expected";
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
          break;
      }
    if (
      message.accessoriesType != null &&
      message.hasOwnProperty("accessoriesType")
    )
      switch (message.accessoriesType) {
        default:
          return "accessoriesType: enum value expected";
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
          break;
      }
    if (
      message.facialHairType != null &&
      message.hasOwnProperty("facialHairType")
    )
      switch (message.facialHairType) {
        default:
          return "facialHairType: enum value expected";
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
      }
    if (
      message.facialHairColor != null &&
      message.hasOwnProperty("facialHairColor")
    )
      switch (message.facialHairColor) {
        default:
          return "facialHairColor: enum value expected";
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
          break;
      }
    if (message.clotheType != null && message.hasOwnProperty("clotheType"))
      switch (message.clotheType) {
        default:
          return "clotheType: enum value expected";
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
          break;
      }
    if (message.clotheColor != null && message.hasOwnProperty("clotheColor"))
      switch (message.clotheColor) {
        default:
          return "clotheColor: enum value expected";
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
          break;
      }
    if (message.graphicType != null && message.hasOwnProperty("graphicType"))
      switch (message.graphicType) {
        default:
          return "graphicType: enum value expected";
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
          break;
      }
    if (message.eyeType != null && message.hasOwnProperty("eyeType"))
      switch (message.eyeType) {
        default:
          return "eyeType: enum value expected";
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
          break;
      }
    if (message.eyebrowType != null && message.hasOwnProperty("eyebrowType"))
      switch (message.eyebrowType) {
        default:
          return "eyebrowType: enum value expected";
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
          break;
      }
    if (message.mouthType != null && message.hasOwnProperty("mouthType"))
      switch (message.mouthType) {
        default:
          return "mouthType: enum value expected";
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
          break;
      }
    return null;
  };

  /**
   * Creates an Avatar message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof Avatar
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {Avatar} Avatar
   */
  Avatar.fromObject = function fromObject(object) {
    if (object instanceof $root.Avatar) return object;
    var message = new $root.Avatar();
    switch (object.skinColor) {
      default:
        if (typeof object.skinColor === "number") {
          message.skinColor = object.skinColor;
          break;
        }
        break;
      case "Light":
      case 0:
        message.skinColor = 0;
        break;
      case "Yellow":
      case 1:
        message.skinColor = 1;
        break;
      case "Pale":
      case 2:
        message.skinColor = 2;
        break;
      case "Tanned":
      case 3:
        message.skinColor = 3;
        break;
      case "Brown":
      case 4:
        message.skinColor = 4;
        break;
      case "Darkbrown":
      case 5:
        message.skinColor = 5;
        break;
      case "Black":
      case 6:
        message.skinColor = 6;
        break;
    }
    switch (object.topType) {
      default:
        if (typeof object.topType === "number") {
          message.topType = object.topType;
          break;
        }
        break;
      case "NoHair":
      case 0:
        message.topType = 0;
        break;
      case "Eyepatch":
      case 1:
        message.topType = 1;
        break;
      case "Hat":
      case 2:
        message.topType = 2;
        break;
      case "Hijab":
      case 3:
        message.topType = 3;
        break;
      case "Turban":
      case 4:
        message.topType = 4;
        break;
      case "WinterHat1":
      case 5:
        message.topType = 5;
        break;
      case "WinterHat2":
      case 6:
        message.topType = 6;
        break;
      case "WinterHat3":
      case 7:
        message.topType = 7;
        break;
      case "WinterHat4":
      case 8:
        message.topType = 8;
        break;
      case "LongHairBigHair":
      case 9:
        message.topType = 9;
        break;
      case "LongHairBob":
      case 10:
        message.topType = 10;
        break;
      case "LongHairBun":
      case 11:
        message.topType = 11;
        break;
      case "LongHairCurly":
      case 12:
        message.topType = 12;
        break;
      case "LongHairCurvy":
      case 13:
        message.topType = 13;
        break;
      case "LongHairDreads":
      case 14:
        message.topType = 14;
        break;
      case "LongHairFrida":
      case 15:
        message.topType = 15;
        break;
      case "LongHairFro":
      case 16:
        message.topType = 16;
        break;
      case "LongHairFroBand":
      case 17:
        message.topType = 17;
        break;
      case "LongHairNotTooLong":
      case 18:
        message.topType = 18;
        break;
      case "LongHairShavedSides":
      case 19:
        message.topType = 19;
        break;
      case "LongHairMiaWallace":
      case 20:
        message.topType = 20;
        break;
      case "LongHairStraight":
      case 21:
        message.topType = 21;
        break;
      case "LongHairStraight2":
      case 22:
        message.topType = 22;
        break;
      case "LongHairStraightStrand":
      case 23:
        message.topType = 23;
        break;
      case "ShortHairDreads01":
      case 24:
        message.topType = 24;
        break;
      case "ShortHairDreads02":
      case 25:
        message.topType = 25;
        break;
      case "ShortHairFrizzle":
      case 26:
        message.topType = 26;
        break;
      case "ShortHairShaggyMullet":
      case 27:
        message.topType = 27;
        break;
      case "ShortHairShortCurly":
      case 28:
        message.topType = 28;
        break;
      case "ShortHairShortFlat":
      case 29:
        message.topType = 29;
        break;
      case "ShortHairShortRound":
      case 30:
        message.topType = 30;
        break;
      case "ShortHairShortWaved":
      case 31:
        message.topType = 31;
        break;
      case "ShortHairSides":
      case 32:
        message.topType = 32;
        break;
      case "ShortHairTheCaesar":
      case 33:
        message.topType = 33;
        break;
      case "ShortHairTheCaesarSidePart":
      case 34:
        message.topType = 34;
        break;
    }
    switch (object.hairColor) {
      default:
        if (typeof object.hairColor === "number") {
          message.hairColor = object.hairColor;
          break;
        }
        break;
      case "Auburn":
      case 0:
        message.hairColor = 0;
        break;
      case "Black":
      case 1:
        message.hairColor = 1;
        break;
      case "Blonde":
      case 2:
        message.hairColor = 2;
        break;
      case "BlondeGolden":
      case 3:
        message.hairColor = 3;
        break;
      case "Brown":
      case 4:
        message.hairColor = 4;
        break;
      case "BrownDark":
      case 5:
        message.hairColor = 5;
        break;
      case "PastelPink":
      case 6:
        message.hairColor = 6;
        break;
      case "Blue":
      case 7:
        message.hairColor = 7;
        break;
      case "Platinum":
      case 8:
        message.hairColor = 8;
        break;
      case "Red":
      case 9:
        message.hairColor = 9;
        break;
      case "SilverGray":
      case 10:
        message.hairColor = 10;
        break;
    }
    switch (object.hatColor) {
      default:
        if (typeof object.hatColor === "number") {
          message.hatColor = object.hatColor;
          break;
        }
        break;
      case "Black":
      case 0:
        message.hatColor = 0;
        break;
      case "Blue01":
      case 1:
        message.hatColor = 1;
        break;
      case "Blue02":
      case 2:
        message.hatColor = 2;
        break;
      case "Blue03":
      case 3:
        message.hatColor = 3;
        break;
      case "Gray01":
      case 4:
        message.hatColor = 4;
        break;
      case "Gray02":
      case 5:
        message.hatColor = 5;
        break;
      case "Heather":
      case 6:
        message.hatColor = 6;
        break;
      case "PastelBlue":
      case 7:
        message.hatColor = 7;
        break;
      case "PastelGreen":
      case 8:
        message.hatColor = 8;
        break;
      case "PastelOrange":
      case 9:
        message.hatColor = 9;
        break;
      case "PastelRed":
      case 10:
        message.hatColor = 10;
        break;
      case "PastelYellow":
      case 11:
        message.hatColor = 11;
        break;
      case "Pink":
      case 12:
        message.hatColor = 12;
        break;
      case "Red":
      case 13:
        message.hatColor = 13;
        break;
      case "White":
      case 14:
        message.hatColor = 14;
        break;
    }
    switch (object.accessoriesType) {
      default:
        if (typeof object.accessoriesType === "number") {
          message.accessoriesType = object.accessoriesType;
          break;
        }
        break;
      case "Blank":
      case 0:
        message.accessoriesType = 0;
        break;
      case "Kurt":
      case 1:
        message.accessoriesType = 1;
        break;
      case "Prescription01":
      case 2:
        message.accessoriesType = 2;
        break;
      case "Prescription02":
      case 3:
        message.accessoriesType = 3;
        break;
      case "Round":
      case 4:
        message.accessoriesType = 4;
        break;
      case "Sunglasses":
      case 5:
        message.accessoriesType = 5;
        break;
      case "Wayfarers":
      case 6:
        message.accessoriesType = 6;
        break;
    }
    switch (object.facialHairType) {
      default:
        if (typeof object.facialHairType === "number") {
          message.facialHairType = object.facialHairType;
          break;
        }
        break;
      case "Blank":
      case 0:
        message.facialHairType = 0;
        break;
      case "BeardMedium":
      case 1:
        message.facialHairType = 1;
        break;
      case "BeardLight":
      case 2:
        message.facialHairType = 2;
        break;
      case "BeardMajestic":
      case 3:
        message.facialHairType = 3;
        break;
      case "MoustacheFancy":
      case 4:
        message.facialHairType = 4;
        break;
      case "MoustacheMagnum":
      case 5:
        message.facialHairType = 5;
        break;
    }
    switch (object.facialHairColor) {
      default:
        if (typeof object.facialHairColor === "number") {
          message.facialHairColor = object.facialHairColor;
          break;
        }
        break;
      case "Auburn":
      case 0:
        message.facialHairColor = 0;
        break;
      case "Black":
      case 1:
        message.facialHairColor = 1;
        break;
      case "Blonde":
      case 2:
        message.facialHairColor = 2;
        break;
      case "BlondeGolden":
      case 3:
        message.facialHairColor = 3;
        break;
      case "Brown":
      case 4:
        message.facialHairColor = 4;
        break;
      case "BrownDark":
      case 5:
        message.facialHairColor = 5;
        break;
      case "Platinum":
      case 6:
        message.facialHairColor = 6;
        break;
      case "Red":
      case 7:
        message.facialHairColor = 7;
        break;
    }
    switch (object.clotheType) {
      default:
        if (typeof object.clotheType === "number") {
          message.clotheType = object.clotheType;
          break;
        }
        break;
      case "BlazerShirt":
      case 0:
        message.clotheType = 0;
        break;
      case "BlazerSweater":
      case 1:
        message.clotheType = 1;
        break;
      case "CollarSweater":
      case 2:
        message.clotheType = 2;
        break;
      case "GraphicShirt":
      case 3:
        message.clotheType = 3;
        break;
      case "Hoodie":
      case 4:
        message.clotheType = 4;
        break;
      case "Overall":
      case 5:
        message.clotheType = 5;
        break;
      case "ShirtCrewNeck":
      case 6:
        message.clotheType = 6;
        break;
      case "ShirtScoopNeck":
      case 7:
        message.clotheType = 7;
        break;
      case "ShirtVNeck":
      case 8:
        message.clotheType = 8;
        break;
    }
    switch (object.clotheColor) {
      default:
        if (typeof object.clotheColor === "number") {
          message.clotheColor = object.clotheColor;
          break;
        }
        break;
      case "Black":
      case 0:
        message.clotheColor = 0;
        break;
      case "Blue01":
      case 1:
        message.clotheColor = 1;
        break;
      case "Blue02":
      case 2:
        message.clotheColor = 2;
        break;
      case "Blue03":
      case 3:
        message.clotheColor = 3;
        break;
      case "Gray01":
      case 4:
        message.clotheColor = 4;
        break;
      case "Gray02":
      case 5:
        message.clotheColor = 5;
        break;
      case "Heather":
      case 6:
        message.clotheColor = 6;
        break;
      case "PastelBlue":
      case 7:
        message.clotheColor = 7;
        break;
      case "PastelGreen":
      case 8:
        message.clotheColor = 8;
        break;
      case "PastelOrange":
      case 9:
        message.clotheColor = 9;
        break;
      case "PastelRed":
      case 10:
        message.clotheColor = 10;
        break;
      case "PastelYellow":
      case 11:
        message.clotheColor = 11;
        break;
      case "Pink":
      case 12:
        message.clotheColor = 12;
        break;
      case "Red":
      case 13:
        message.clotheColor = 13;
        break;
      case "White":
      case 14:
        message.clotheColor = 14;
        break;
    }
    switch (object.graphicType) {
      default:
        if (typeof object.graphicType === "number") {
          message.graphicType = object.graphicType;
          break;
        }
        break;
      case "Bat":
      case 0:
        message.graphicType = 0;
        break;
      case "Cumbia":
      case 1:
        message.graphicType = 1;
        break;
      case "Deer":
      case 2:
        message.graphicType = 2;
        break;
      case "Diamond":
      case 3:
        message.graphicType = 3;
        break;
      case "Hola":
      case 4:
        message.graphicType = 4;
        break;
      case "Pizza":
      case 5:
        message.graphicType = 5;
        break;
      case "Resist":
      case 6:
        message.graphicType = 6;
        break;
      case "Selena":
      case 7:
        message.graphicType = 7;
        break;
      case "Bear":
      case 8:
        message.graphicType = 8;
        break;
      case "SkullOutline":
      case 9:
        message.graphicType = 9;
        break;
      case "Skull":
      case 10:
        message.graphicType = 10;
        break;
    }
    switch (object.eyeType) {
      default:
        if (typeof object.eyeType === "number") {
          message.eyeType = object.eyeType;
          break;
        }
        break;
      case "Default":
      case 0:
        message.eyeType = 0;
        break;
      case "Close":
      case 1:
        message.eyeType = 1;
        break;
      case "Cry":
      case 2:
        message.eyeType = 2;
        break;
      case "Dizzy":
      case 3:
        message.eyeType = 3;
        break;
      case "EyeRoll":
      case 4:
        message.eyeType = 4;
        break;
      case "Happy":
      case 5:
        message.eyeType = 5;
        break;
      case "Hearts":
      case 6:
        message.eyeType = 6;
        break;
      case "Side":
      case 7:
        message.eyeType = 7;
        break;
      case "Squint":
      case 8:
        message.eyeType = 8;
        break;
      case "Surprised":
      case 9:
        message.eyeType = 9;
        break;
      case "Wink":
      case 10:
        message.eyeType = 10;
        break;
      case "WinkWacky":
      case 11:
        message.eyeType = 11;
        break;
    }
    switch (object.eyebrowType) {
      default:
        if (typeof object.eyebrowType === "number") {
          message.eyebrowType = object.eyebrowType;
          break;
        }
        break;
      case "Default":
      case 0:
        message.eyebrowType = 0;
        break;
      case "Angry":
      case 1:
        message.eyebrowType = 1;
        break;
      case "AngryNatural":
      case 2:
        message.eyebrowType = 2;
        break;
      case "DefaultNatural":
      case 3:
        message.eyebrowType = 3;
        break;
      case "FlatNatural":
      case 4:
        message.eyebrowType = 4;
        break;
      case "RaisedExcited":
      case 5:
        message.eyebrowType = 5;
        break;
      case "RaisedExcitedNatural":
      case 6:
        message.eyebrowType = 6;
        break;
      case "SadConcerned":
      case 7:
        message.eyebrowType = 7;
        break;
      case "SadConcernedNatural":
      case 8:
        message.eyebrowType = 8;
        break;
      case "UnibrowNatural":
      case 9:
        message.eyebrowType = 9;
        break;
      case "UpDown":
      case 10:
        message.eyebrowType = 10;
        break;
      case "UpDownNatural":
      case 11:
        message.eyebrowType = 11;
        break;
    }
    switch (object.mouthType) {
      default:
        if (typeof object.mouthType === "number") {
          message.mouthType = object.mouthType;
          break;
        }
        break;
      case "Default":
      case 0:
        message.mouthType = 0;
        break;
      case "Concerned":
      case 1:
        message.mouthType = 1;
        break;
      case "Disbelief":
      case 2:
        message.mouthType = 2;
        break;
      case "Eating":
      case 3:
        message.mouthType = 3;
        break;
      case "Grimace":
      case 4:
        message.mouthType = 4;
        break;
      case "Sad":
      case 5:
        message.mouthType = 5;
        break;
      case "ScreamOpen":
      case 6:
        message.mouthType = 6;
        break;
      case "Serious":
      case 7:
        message.mouthType = 7;
        break;
      case "Smile":
      case 8:
        message.mouthType = 8;
        break;
      case "Tongue":
      case 9:
        message.mouthType = 9;
        break;
      case "Twinkle":
      case 10:
        message.mouthType = 10;
        break;
      case "Vomit":
      case 11:
        message.mouthType = 11;
        break;
    }
    return message;
  };

  /**
   * Creates a plain object from an Avatar message. Also converts values to other types if specified.
   * @function toObject
   * @memberof Avatar
   * @static
   * @param {Avatar} message Avatar
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  Avatar.toObject = function toObject(message, options) {
    if (!options) options = {};
    var object = {};
    if (options.defaults) {
      object.skinColor = options.enums === String ? "Light" : 0;
      object.topType = options.enums === String ? "NoHair" : 0;
      object.hairColor = options.enums === String ? "Auburn" : 0;
      object.hatColor = options.enums === String ? "Black" : 0;
      object.accessoriesType = options.enums === String ? "Blank" : 0;
      object.facialHairType = options.enums === String ? "Blank" : 0;
      object.facialHairColor = options.enums === String ? "Auburn" : 0;
      object.clotheType = options.enums === String ? "BlazerShirt" : 0;
      object.clotheColor = options.enums === String ? "Black" : 0;
      object.graphicType = options.enums === String ? "Bat" : 0;
      object.eyeType = options.enums === String ? "Default" : 0;
      object.eyebrowType = options.enums === String ? "Default" : 0;
      object.mouthType = options.enums === String ? "Default" : 0;
    }
    if (message.skinColor != null && message.hasOwnProperty("skinColor"))
      object.skinColor =
        options.enums === String
          ? $root.SkinColor[message.skinColor] === undefined
            ? message.skinColor
            : $root.SkinColor[message.skinColor]
          : message.skinColor;
    if (message.topType != null && message.hasOwnProperty("topType"))
      object.topType =
        options.enums === String
          ? $root.Top[message.topType] === undefined
            ? message.topType
            : $root.Top[message.topType]
          : message.topType;
    if (message.hairColor != null && message.hasOwnProperty("hairColor"))
      object.hairColor =
        options.enums === String
          ? $root.HairColor[message.hairColor] === undefined
            ? message.hairColor
            : $root.HairColor[message.hairColor]
          : message.hairColor;
    if (message.hatColor != null && message.hasOwnProperty("hatColor"))
      object.hatColor =
        options.enums === String
          ? $root.HatColor[message.hatColor] === undefined
            ? message.hatColor
            : $root.HatColor[message.hatColor]
          : message.hatColor;
    if (
      message.accessoriesType != null &&
      message.hasOwnProperty("accessoriesType")
    )
      object.accessoriesType =
        options.enums === String
          ? $root.Accessories[message.accessoriesType] === undefined
            ? message.accessoriesType
            : $root.Accessories[message.accessoriesType]
          : message.accessoriesType;
    if (
      message.facialHairType != null &&
      message.hasOwnProperty("facialHairType")
    )
      object.facialHairType =
        options.enums === String
          ? $root.FacialHair[message.facialHairType] === undefined
            ? message.facialHairType
            : $root.FacialHair[message.facialHairType]
          : message.facialHairType;
    if (
      message.facialHairColor != null &&
      message.hasOwnProperty("facialHairColor")
    )
      object.facialHairColor =
        options.enums === String
          ? $root.FacialHairColor[message.facialHairColor] === undefined
            ? message.facialHairColor
            : $root.FacialHairColor[message.facialHairColor]
          : message.facialHairColor;
    if (message.clotheType != null && message.hasOwnProperty("clotheType"))
      object.clotheType =
        options.enums === String
          ? $root.Clothe[message.clotheType] === undefined
            ? message.clotheType
            : $root.Clothe[message.clotheType]
          : message.clotheType;
    if (message.clotheColor != null && message.hasOwnProperty("clotheColor"))
      object.clotheColor =
        options.enums === String
          ? $root.ClotheColor[message.clotheColor] === undefined
            ? message.clotheColor
            : $root.ClotheColor[message.clotheColor]
          : message.clotheColor;
    if (message.graphicType != null && message.hasOwnProperty("graphicType"))
      object.graphicType =
        options.enums === String
          ? $root.ClotheGraphic[message.graphicType] === undefined
            ? message.graphicType
            : $root.ClotheGraphic[message.graphicType]
          : message.graphicType;
    if (message.eyeType != null && message.hasOwnProperty("eyeType"))
      object.eyeType =
        options.enums === String
          ? $root.Eye[message.eyeType] === undefined
            ? message.eyeType
            : $root.Eye[message.eyeType]
          : message.eyeType;
    if (message.eyebrowType != null && message.hasOwnProperty("eyebrowType"))
      object.eyebrowType =
        options.enums === String
          ? $root.Eyebrow[message.eyebrowType] === undefined
            ? message.eyebrowType
            : $root.Eyebrow[message.eyebrowType]
          : message.eyebrowType;
    if (message.mouthType != null && message.hasOwnProperty("mouthType"))
      object.mouthType =
        options.enums === String
          ? $root.Mouth[message.mouthType] === undefined
            ? message.mouthType
            : $root.Mouth[message.mouthType]
          : message.mouthType;
    return object;
  };

  /**
   * Converts this Avatar to JSON.
   * @function toJSON
   * @memberof Avatar
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  Avatar.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  /**
   * Gets the default type url for Avatar
   * @function getTypeUrl
   * @memberof Avatar
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  Avatar.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/Avatar";
  };

  return Avatar;
})();

/**
 * SkinColor enum.
 * @exports SkinColor
 * @enum {number}
 * @property {number} Light=0 Light value
 * @property {number} Yellow=1 Yellow value
 * @property {number} Pale=2 Pale value
 * @property {number} Tanned=3 Tanned value
 * @property {number} Brown=4 Brown value
 * @property {number} Darkbrown=5 Darkbrown value
 * @property {number} Black=6 Black value
 */
$root.SkinColor = (function () {
  var valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[0] = "Light")] = 0;
  values[(valuesById[1] = "Yellow")] = 1;
  values[(valuesById[2] = "Pale")] = 2;
  values[(valuesById[3] = "Tanned")] = 3;
  values[(valuesById[4] = "Brown")] = 4;
  values[(valuesById[5] = "Darkbrown")] = 5;
  values[(valuesById[6] = "Black")] = 6;
  return values;
})();

/**
 * Clothe enum.
 * @exports Clothe
 * @enum {number}
 * @property {number} BlazerShirt=0 BlazerShirt value
 * @property {number} BlazerSweater=1 BlazerSweater value
 * @property {number} CollarSweater=2 CollarSweater value
 * @property {number} GraphicShirt=3 GraphicShirt value
 * @property {number} Hoodie=4 Hoodie value
 * @property {number} Overall=5 Overall value
 * @property {number} ShirtCrewNeck=6 ShirtCrewNeck value
 * @property {number} ShirtScoopNeck=7 ShirtScoopNeck value
 * @property {number} ShirtVNeck=8 ShirtVNeck value
 */
$root.Clothe = (function () {
  var valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[0] = "BlazerShirt")] = 0;
  values[(valuesById[1] = "BlazerSweater")] = 1;
  values[(valuesById[2] = "CollarSweater")] = 2;
  values[(valuesById[3] = "GraphicShirt")] = 3;
  values[(valuesById[4] = "Hoodie")] = 4;
  values[(valuesById[5] = "Overall")] = 5;
  values[(valuesById[6] = "ShirtCrewNeck")] = 6;
  values[(valuesById[7] = "ShirtScoopNeck")] = 7;
  values[(valuesById[8] = "ShirtVNeck")] = 8;
  return values;
})();

/**
 * ClotheColor enum.
 * @exports ClotheColor
 * @enum {number}
 * @property {number} Black=0 Black value
 * @property {number} Blue01=1 Blue01 value
 * @property {number} Blue02=2 Blue02 value
 * @property {number} Blue03=3 Blue03 value
 * @property {number} Gray01=4 Gray01 value
 * @property {number} Gray02=5 Gray02 value
 * @property {number} Heather=6 Heather value
 * @property {number} PastelBlue=7 PastelBlue value
 * @property {number} PastelGreen=8 PastelGreen value
 * @property {number} PastelOrange=9 PastelOrange value
 * @property {number} PastelRed=10 PastelRed value
 * @property {number} PastelYellow=11 PastelYellow value
 * @property {number} Pink=12 Pink value
 * @property {number} Red=13 Red value
 * @property {number} White=14 White value
 */
$root.ClotheColor = (function () {
  var valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[0] = "Black")] = 0;
  values[(valuesById[1] = "Blue01")] = 1;
  values[(valuesById[2] = "Blue02")] = 2;
  values[(valuesById[3] = "Blue03")] = 3;
  values[(valuesById[4] = "Gray01")] = 4;
  values[(valuesById[5] = "Gray02")] = 5;
  values[(valuesById[6] = "Heather")] = 6;
  values[(valuesById[7] = "PastelBlue")] = 7;
  values[(valuesById[8] = "PastelGreen")] = 8;
  values[(valuesById[9] = "PastelOrange")] = 9;
  values[(valuesById[10] = "PastelRed")] = 10;
  values[(valuesById[11] = "PastelYellow")] = 11;
  values[(valuesById[12] = "Pink")] = 12;
  values[(valuesById[13] = "Red")] = 13;
  values[(valuesById[14] = "White")] = 14;
  return values;
})();

/**
 * ClotheGraphic enum.
 * @exports ClotheGraphic
 * @enum {number}
 * @property {number} Bat=0 Bat value
 * @property {number} Cumbia=1 Cumbia value
 * @property {number} Deer=2 Deer value
 * @property {number} Diamond=3 Diamond value
 * @property {number} Hola=4 Hola value
 * @property {number} Pizza=5 Pizza value
 * @property {number} Resist=6 Resist value
 * @property {number} Selena=7 Selena value
 * @property {number} Bear=8 Bear value
 * @property {number} SkullOutline=9 SkullOutline value
 * @property {number} Skull=10 Skull value
 */
$root.ClotheGraphic = (function () {
  var valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[0] = "Bat")] = 0;
  values[(valuesById[1] = "Cumbia")] = 1;
  values[(valuesById[2] = "Deer")] = 2;
  values[(valuesById[3] = "Diamond")] = 3;
  values[(valuesById[4] = "Hola")] = 4;
  values[(valuesById[5] = "Pizza")] = 5;
  values[(valuesById[6] = "Resist")] = 6;
  values[(valuesById[7] = "Selena")] = 7;
  values[(valuesById[8] = "Bear")] = 8;
  values[(valuesById[9] = "SkullOutline")] = 9;
  values[(valuesById[10] = "Skull")] = 10;
  return values;
})();

/**
 * Eyebrow enum.
 * @exports Eyebrow
 * @enum {number}
 * @property {number} Default=0 Default value
 * @property {number} Angry=1 Angry value
 * @property {number} AngryNatural=2 AngryNatural value
 * @property {number} DefaultNatural=3 DefaultNatural value
 * @property {number} FlatNatural=4 FlatNatural value
 * @property {number} RaisedExcited=5 RaisedExcited value
 * @property {number} RaisedExcitedNatural=6 RaisedExcitedNatural value
 * @property {number} SadConcerned=7 SadConcerned value
 * @property {number} SadConcernedNatural=8 SadConcernedNatural value
 * @property {number} UnibrowNatural=9 UnibrowNatural value
 * @property {number} UpDown=10 UpDown value
 * @property {number} UpDownNatural=11 UpDownNatural value
 */
$root.Eyebrow = (function () {
  var valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[0] = "Default")] = 0;
  values[(valuesById[1] = "Angry")] = 1;
  values[(valuesById[2] = "AngryNatural")] = 2;
  values[(valuesById[3] = "DefaultNatural")] = 3;
  values[(valuesById[4] = "FlatNatural")] = 4;
  values[(valuesById[5] = "RaisedExcited")] = 5;
  values[(valuesById[6] = "RaisedExcitedNatural")] = 6;
  values[(valuesById[7] = "SadConcerned")] = 7;
  values[(valuesById[8] = "SadConcernedNatural")] = 8;
  values[(valuesById[9] = "UnibrowNatural")] = 9;
  values[(valuesById[10] = "UpDown")] = 10;
  values[(valuesById[11] = "UpDownNatural")] = 11;
  return values;
})();

/**
 * Eye enum.
 * @exports Eye
 * @enum {number}
 * @property {number} Default=0 Default value
 * @property {number} Close=1 Close value
 * @property {number} Cry=2 Cry value
 * @property {number} Dizzy=3 Dizzy value
 * @property {number} EyeRoll=4 EyeRoll value
 * @property {number} Happy=5 Happy value
 * @property {number} Hearts=6 Hearts value
 * @property {number} Side=7 Side value
 * @property {number} Squint=8 Squint value
 * @property {number} Surprised=9 Surprised value
 * @property {number} Wink=10 Wink value
 * @property {number} WinkWacky=11 WinkWacky value
 */
$root.Eye = (function () {
  var valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[0] = "Default")] = 0;
  values[(valuesById[1] = "Close")] = 1;
  values[(valuesById[2] = "Cry")] = 2;
  values[(valuesById[3] = "Dizzy")] = 3;
  values[(valuesById[4] = "EyeRoll")] = 4;
  values[(valuesById[5] = "Happy")] = 5;
  values[(valuesById[6] = "Hearts")] = 6;
  values[(valuesById[7] = "Side")] = 7;
  values[(valuesById[8] = "Squint")] = 8;
  values[(valuesById[9] = "Surprised")] = 9;
  values[(valuesById[10] = "Wink")] = 10;
  values[(valuesById[11] = "WinkWacky")] = 11;
  return values;
})();

/**
 * Mouth enum.
 * @exports Mouth
 * @enum {number}
 * @property {number} Default=0 Default value
 * @property {number} Concerned=1 Concerned value
 * @property {number} Disbelief=2 Disbelief value
 * @property {number} Eating=3 Eating value
 * @property {number} Grimace=4 Grimace value
 * @property {number} Sad=5 Sad value
 * @property {number} ScreamOpen=6 ScreamOpen value
 * @property {number} Serious=7 Serious value
 * @property {number} Smile=8 Smile value
 * @property {number} Tongue=9 Tongue value
 * @property {number} Twinkle=10 Twinkle value
 * @property {number} Vomit=11 Vomit value
 */
$root.Mouth = (function () {
  var valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[0] = "Default")] = 0;
  values[(valuesById[1] = "Concerned")] = 1;
  values[(valuesById[2] = "Disbelief")] = 2;
  values[(valuesById[3] = "Eating")] = 3;
  values[(valuesById[4] = "Grimace")] = 4;
  values[(valuesById[5] = "Sad")] = 5;
  values[(valuesById[6] = "ScreamOpen")] = 6;
  values[(valuesById[7] = "Serious")] = 7;
  values[(valuesById[8] = "Smile")] = 8;
  values[(valuesById[9] = "Tongue")] = 9;
  values[(valuesById[10] = "Twinkle")] = 10;
  values[(valuesById[11] = "Vomit")] = 11;
  return values;
})();

/**
 * Top enum.
 * @exports Top
 * @enum {number}
 * @property {number} NoHair=0 NoHair value
 * @property {number} Eyepatch=1 Eyepatch value
 * @property {number} Hat=2 Hat value
 * @property {number} Hijab=3 Hijab value
 * @property {number} Turban=4 Turban value
 * @property {number} WinterHat1=5 WinterHat1 value
 * @property {number} WinterHat2=6 WinterHat2 value
 * @property {number} WinterHat3=7 WinterHat3 value
 * @property {number} WinterHat4=8 WinterHat4 value
 * @property {number} LongHairBigHair=9 LongHairBigHair value
 * @property {number} LongHairBob=10 LongHairBob value
 * @property {number} LongHairBun=11 LongHairBun value
 * @property {number} LongHairCurly=12 LongHairCurly value
 * @property {number} LongHairCurvy=13 LongHairCurvy value
 * @property {number} LongHairDreads=14 LongHairDreads value
 * @property {number} LongHairFrida=15 LongHairFrida value
 * @property {number} LongHairFro=16 LongHairFro value
 * @property {number} LongHairFroBand=17 LongHairFroBand value
 * @property {number} LongHairNotTooLong=18 LongHairNotTooLong value
 * @property {number} LongHairShavedSides=19 LongHairShavedSides value
 * @property {number} LongHairMiaWallace=20 LongHairMiaWallace value
 * @property {number} LongHairStraight=21 LongHairStraight value
 * @property {number} LongHairStraight2=22 LongHairStraight2 value
 * @property {number} LongHairStraightStrand=23 LongHairStraightStrand value
 * @property {number} ShortHairDreads01=24 ShortHairDreads01 value
 * @property {number} ShortHairDreads02=25 ShortHairDreads02 value
 * @property {number} ShortHairFrizzle=26 ShortHairFrizzle value
 * @property {number} ShortHairShaggyMullet=27 ShortHairShaggyMullet value
 * @property {number} ShortHairShortCurly=28 ShortHairShortCurly value
 * @property {number} ShortHairShortFlat=29 ShortHairShortFlat value
 * @property {number} ShortHairShortRound=30 ShortHairShortRound value
 * @property {number} ShortHairShortWaved=31 ShortHairShortWaved value
 * @property {number} ShortHairSides=32 ShortHairSides value
 * @property {number} ShortHairTheCaesar=33 ShortHairTheCaesar value
 * @property {number} ShortHairTheCaesarSidePart=34 ShortHairTheCaesarSidePart value
 */
$root.Top = (function () {
  var valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[0] = "NoHair")] = 0;
  values[(valuesById[1] = "Eyepatch")] = 1;
  values[(valuesById[2] = "Hat")] = 2;
  values[(valuesById[3] = "Hijab")] = 3;
  values[(valuesById[4] = "Turban")] = 4;
  values[(valuesById[5] = "WinterHat1")] = 5;
  values[(valuesById[6] = "WinterHat2")] = 6;
  values[(valuesById[7] = "WinterHat3")] = 7;
  values[(valuesById[8] = "WinterHat4")] = 8;
  values[(valuesById[9] = "LongHairBigHair")] = 9;
  values[(valuesById[10] = "LongHairBob")] = 10;
  values[(valuesById[11] = "LongHairBun")] = 11;
  values[(valuesById[12] = "LongHairCurly")] = 12;
  values[(valuesById[13] = "LongHairCurvy")] = 13;
  values[(valuesById[14] = "LongHairDreads")] = 14;
  values[(valuesById[15] = "LongHairFrida")] = 15;
  values[(valuesById[16] = "LongHairFro")] = 16;
  values[(valuesById[17] = "LongHairFroBand")] = 17;
  values[(valuesById[18] = "LongHairNotTooLong")] = 18;
  values[(valuesById[19] = "LongHairShavedSides")] = 19;
  values[(valuesById[20] = "LongHairMiaWallace")] = 20;
  values[(valuesById[21] = "LongHairStraight")] = 21;
  values[(valuesById[22] = "LongHairStraight2")] = 22;
  values[(valuesById[23] = "LongHairStraightStrand")] = 23;
  values[(valuesById[24] = "ShortHairDreads01")] = 24;
  values[(valuesById[25] = "ShortHairDreads02")] = 25;
  values[(valuesById[26] = "ShortHairFrizzle")] = 26;
  values[(valuesById[27] = "ShortHairShaggyMullet")] = 27;
  values[(valuesById[28] = "ShortHairShortCurly")] = 28;
  values[(valuesById[29] = "ShortHairShortFlat")] = 29;
  values[(valuesById[30] = "ShortHairShortRound")] = 30;
  values[(valuesById[31] = "ShortHairShortWaved")] = 31;
  values[(valuesById[32] = "ShortHairSides")] = 32;
  values[(valuesById[33] = "ShortHairTheCaesar")] = 33;
  values[(valuesById[34] = "ShortHairTheCaesarSidePart")] = 34;
  return values;
})();

/**
 * HairColor enum.
 * @exports HairColor
 * @enum {number}
 * @property {number} Auburn=0 Auburn value
 * @property {number} Black=1 Black value
 * @property {number} Blonde=2 Blonde value
 * @property {number} BlondeGolden=3 BlondeGolden value
 * @property {number} Brown=4 Brown value
 * @property {number} BrownDark=5 BrownDark value
 * @property {number} PastelPink=6 PastelPink value
 * @property {number} Blue=7 Blue value
 * @property {number} Platinum=8 Platinum value
 * @property {number} Red=9 Red value
 * @property {number} SilverGray=10 SilverGray value
 */
$root.HairColor = (function () {
  var valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[0] = "Auburn")] = 0;
  values[(valuesById[1] = "Black")] = 1;
  values[(valuesById[2] = "Blonde")] = 2;
  values[(valuesById[3] = "BlondeGolden")] = 3;
  values[(valuesById[4] = "Brown")] = 4;
  values[(valuesById[5] = "BrownDark")] = 5;
  values[(valuesById[6] = "PastelPink")] = 6;
  values[(valuesById[7] = "Blue")] = 7;
  values[(valuesById[8] = "Platinum")] = 8;
  values[(valuesById[9] = "Red")] = 9;
  values[(valuesById[10] = "SilverGray")] = 10;
  return values;
})();

/**
 * HatColor enum.
 * @exports HatColor
 * @enum {number}
 * @property {number} Black=0 Black value
 * @property {number} Blue01=1 Blue01 value
 * @property {number} Blue02=2 Blue02 value
 * @property {number} Blue03=3 Blue03 value
 * @property {number} Gray01=4 Gray01 value
 * @property {number} Gray02=5 Gray02 value
 * @property {number} Heather=6 Heather value
 * @property {number} PastelBlue=7 PastelBlue value
 * @property {number} PastelGreen=8 PastelGreen value
 * @property {number} PastelOrange=9 PastelOrange value
 * @property {number} PastelRed=10 PastelRed value
 * @property {number} PastelYellow=11 PastelYellow value
 * @property {number} Pink=12 Pink value
 * @property {number} Red=13 Red value
 * @property {number} White=14 White value
 */
$root.HatColor = (function () {
  var valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[0] = "Black")] = 0;
  values[(valuesById[1] = "Blue01")] = 1;
  values[(valuesById[2] = "Blue02")] = 2;
  values[(valuesById[3] = "Blue03")] = 3;
  values[(valuesById[4] = "Gray01")] = 4;
  values[(valuesById[5] = "Gray02")] = 5;
  values[(valuesById[6] = "Heather")] = 6;
  values[(valuesById[7] = "PastelBlue")] = 7;
  values[(valuesById[8] = "PastelGreen")] = 8;
  values[(valuesById[9] = "PastelOrange")] = 9;
  values[(valuesById[10] = "PastelRed")] = 10;
  values[(valuesById[11] = "PastelYellow")] = 11;
  values[(valuesById[12] = "Pink")] = 12;
  values[(valuesById[13] = "Red")] = 13;
  values[(valuesById[14] = "White")] = 14;
  return values;
})();

/**
 * Accessories enum.
 * @exports Accessories
 * @enum {number}
 * @property {number} Blank=0 Blank value
 * @property {number} Kurt=1 Kurt value
 * @property {number} Prescription01=2 Prescription01 value
 * @property {number} Prescription02=3 Prescription02 value
 * @property {number} Round=4 Round value
 * @property {number} Sunglasses=5 Sunglasses value
 * @property {number} Wayfarers=6 Wayfarers value
 */
$root.Accessories = (function () {
  var valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[0] = "Blank")] = 0;
  values[(valuesById[1] = "Kurt")] = 1;
  values[(valuesById[2] = "Prescription01")] = 2;
  values[(valuesById[3] = "Prescription02")] = 3;
  values[(valuesById[4] = "Round")] = 4;
  values[(valuesById[5] = "Sunglasses")] = 5;
  values[(valuesById[6] = "Wayfarers")] = 6;
  return values;
})();

/**
 * FacialHair enum.
 * @exports FacialHair
 * @enum {number}
 * @property {number} Blank=0 Blank value
 * @property {number} BeardMedium=1 BeardMedium value
 * @property {number} BeardLight=2 BeardLight value
 * @property {number} BeardMajestic=3 BeardMajestic value
 * @property {number} MoustacheFancy=4 MoustacheFancy value
 * @property {number} MoustacheMagnum=5 MoustacheMagnum value
 */
$root.FacialHair = (function () {
  var valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[0] = "Blank")] = 0;
  values[(valuesById[1] = "BeardMedium")] = 1;
  values[(valuesById[2] = "BeardLight")] = 2;
  values[(valuesById[3] = "BeardMajestic")] = 3;
  values[(valuesById[4] = "MoustacheFancy")] = 4;
  values[(valuesById[5] = "MoustacheMagnum")] = 5;
  return values;
})();

/**
 * FacialHairColor enum.
 * @exports FacialHairColor
 * @enum {number}
 * @property {number} Auburn=0 Auburn value
 * @property {number} Black=1 Black value
 * @property {number} Blonde=2 Blonde value
 * @property {number} BlondeGolden=3 BlondeGolden value
 * @property {number} Brown=4 Brown value
 * @property {number} BrownDark=5 BrownDark value
 * @property {number} Platinum=6 Platinum value
 * @property {number} Red=7 Red value
 */
$root.FacialHairColor = (function () {
  var valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[0] = "Auburn")] = 0;
  values[(valuesById[1] = "Black")] = 1;
  values[(valuesById[2] = "Blonde")] = 2;
  values[(valuesById[3] = "BlondeGolden")] = 3;
  values[(valuesById[4] = "Brown")] = 4;
  values[(valuesById[5] = "BrownDark")] = 5;
  values[(valuesById[6] = "Platinum")] = 6;
  values[(valuesById[7] = "Red")] = 7;
  return values;
})();

module.exports = $root;
