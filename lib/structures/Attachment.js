"use strict";

const Base = require("./Base");

/**
 * Represents an attachment
 * @prop {String?} content_type The content type of the attachment
 * @prop {String?} description The description of the attachment
 * @prop {Number?} duration_secs The duration of the attachment (if video)
 * @prop {Boolean?} ephemeral Whether the attachment is ephemeral
 * @prop {String?} filename The name of the file
 * @prop {Number?} flags The flags of the attachment
 * @prop {Number?} height The height of the attachment (if image)
 * @prop {String} id The ID of the attachment
 * @prop {String?} proxy_url The proxied URL of the attachment
 * @prop {Number} size The size of the attachment
 * @prop {String?} waveform The waveform of the attachment (if audio)
 * @prop {Number?} width The width of the attachment (if image)
 * @prop {String} url The URL of the attachment
 */

class Attachment extends Base {
  constructor(data, client) {
    super(data.id);
    if (!client) {
      this._missingClientError = new Error("Missing client in constructor"); // Preserve constructor callstack
    }
    this._client = client;
    this.bot = !!data.bot;
    this.system = !!data.system;
    this.update(data);
  }

  update(data) {
    if (data.content_type !== undefined) {
      this.content_type = data.content_type;
    }
    if (data.description !== undefined) {
      this.description = data.description;
    }
    if (data.duration_secs !== undefined) {
      this.duration_secs = data.duration_secs;
    }
    if (data.ephemeral !== undefined) {
      this.ephemeral = data.ephemeral;
    }
    if (data.filename !== undefined) {
      this.filename = data.filename;
    }
    if (data.flags !== undefined) {
      this.flags = data.flags;
    }
    if (data.height !== undefined) {
      this.height = data.height;
    }
    if (data.proxy_url !== undefined) {
      this.proxy_url = data.proxy_url;
    }
    if (data.size !== undefined) {
      this.size = data.size;
    }
    if (data.waveform !== undefined) {
      this.waveform = data.waveform;
    }
    if (data.width !== undefined) {
      this.width = data.width;
    }
    if (data.url !== undefined) {
      this.url = data.url;
    }
  }
}

module.exports = Attachment;
