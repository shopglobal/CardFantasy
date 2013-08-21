Kinetic.Text.prototype.center = function(rect) {
    this.setX(rect.getX() + rect.getWidth() / 2 - this.getWidth() / 2);
    return this;
};
Kinetic.Text.prototype.middle = function(rect) {
    this.setY(rect.getY() + rect.getHeight() / 2 - this.getHeight() / 2);
    return this;
};
Kinetic.Text.prototype.centerMiddle = function(rect) {
    return this.center(rect).middle(rect);
};

var ArenaSettings = function() {
    this.maxWidth = 420;
    this.heightRate = 1.2;
    this.width = this.maxWidth;
    this.height = this.width * this.heightRate;
    this.minimumDuration = 0.01;

    this.bgColor = 'black';
    this.separatorColor = 'white';
    this.separatorWidth = 1;

    this.leftPanelWidthRate = 0.2;
    this.globalPadding = 5;

    this.handHeightRate = 0.2;
    
    this.fontFamily = '微软雅黑, Calibri, 新宋体, Courier New';

    this.heroIdFontSize = 12;
    this.heroIdFontFamily = this.fontFamily;
    this.heroIdColor = '#FFCCFF';
    
    this.heroHpFontSize = 10;
    this.heroHpFontFamily = this.fontFamily;
    this.heroHpColor = '#FFFFFF';

    this.hpRectStroke = '#FFFFFF';
    this.hpRectBgFill = '#222222';
    this.hpRectHpFill = '#FF0000';
    this.hpRectStrokeWidth = 4;
    
    this.runeCircleRadiusRate = 0.7;
    this.runeCircleStroke = '#999999';
    this.runeCircleStrokeWidth = 2;
    this.runeCircleFill = '#000000';
    this.runeFill = { FIRE: '#FF0000', WIND: '#00FF00', WATER: '#0000FF', GROUND: '#FF9900' };
    this.runeRectHeightRate = 0.3;
    this.runeRadiusRate = 0.7;
    
    this.roundFontSize = 32;
    this.roundFontFamily = this.fontFamily;
    this.roundTextColor = 'yellow';
    this.roundTextOpacity = 0.4;
    
    this.bannerHeight = 200;
    this.bannerFill = '#222222';
    this.bannerFontSize = 18;
    this.bannerFontFamily = this.fontFamily;
    this.bannerTextColor = 'white';
    this.bannerOpacity = 0.85;
    this.bannerBorderColor = '#EEEEEE';
    this.bannerBorderWidth = 1;
    this.bannerDuration = 0.4;
    this.bannerPause = 1.3;
    
    this.handDelayFontSize = 10;
    this.handDelayColor = 'black';
    this.handDelayFontFamily = 'Aria Black, Arial';
    this.handDelayRectSize = 12;
    this.handDelayRectBorderColor = 'black';
    this.handDelayRectBorderWidth = 1;
    this.handDelayRectFill = 'white';
    this.handDelayRectOpacity = 0.65;
    
    this.cardHpRectBorderColor = 'white';
    this.cardHpRectBorderWidth = 1;
    this.cardHpRectFill = '#222222';
    this.cardHpRectOpactiy = '0.8';
    this.cardHpRectHeight = 15;
    this.cardHpTextColor = 'white';
    
    this.cardAtRectBorderColor = this.cardHpRectBorderColor;
    this.cardAtRectBorderWidth = this.cardHpRectBorderWidth;
    this.cardAtRectFill = this.cardHpRectFill;
    this.cardAtRectOpacity = this.cardHpRectOpactiy;
    this.cardAtRectHeight = this.cardHpRectHeight;
    this.cardAtTextColor = this.cardHpTextColor;
    
    this.drawCardDuration = 0.2;
    this.compactFieldDuration = 0.1;
    
    this.summonCardDuration = 0.2;
    this.summonCardPause = 0.5;

    this.hpChangeDuration = 0.3;
    
    this.returnCardCrossDuration = 1;
    
    this.zoomAttackerDuration = 0.2;
    this.zoomRate = 0.2;
    
    this.normalAttackDuration = 0.3;
    this.swordWidth = 14;
    this.swordHeight = 44;
    
    this.adjustDuration = 0.7;
    this.adjustFontFamily = this.fontFamily;
    this.adjustFontSize = 8;
    this.adjustAdjAtColor = '#5555FF';
    this.adjustAdjHpColor = '#FF5555';
    this.adjRectHeight = 50;
    this.adjRectBorderColor = 'white';
    this.adjRectBorderWidth = 1;
    this.adjRectFill = '#CCCCCC';
    this.adjRectOpacity = 0.95;
    
    this.cardMsgRectHeight = 50;
    this.cardMsgRectBorderColor = 'white';
    this.cardMsgRectBorderWidth = 1;
    this.cardMsgRectFill = '#CCCCCC';
    this.cardMsgRectOpacity = 0.95;
    this.cardMsgFontFamily = this.fontFamily;
    this.cardMsgFontSize = 8;
    this.cardMsgTextColor = 'black';
    this.cardMsgDuration = 0.7;
    
    this.attackCardTextColor = 'red';
    this.healCardTextColor = 'green';
    
    this.skillSplashDuration = 0.1;
    this.skillSplashPause = 0.7;

    this.refreshSize = function () {
        var currentWidth = $(window).width() * 0.8;
        if (currentWidth > this.maxWidth) { currentWidth = this.maxWidth; }
        var currentHeight = currentWidth * this.heightRate;
        this.width = currentWidth;
        this.height = currentHeight;
    };
    
    this.getLeftPanelClientWidth = function() {
        return this.getRightPanelX() - this.globalPadding * 2;
    };
    
    this.getRightPanelX = function() {
        return this.width * this.leftPanelWidthRate;
    };
    
    this.getRightPanelWidth = function() {
        return this.width - this.getRightPanelX();
    };
    
    this.getHandPanelHeight = function() {
        return this.handHeightRate * this.getPanelHeight();
    };
    
    this.getBottomPanelY = function() {
        return this.height / 2;
    };
    
    this.getPanelHeight = function() {
        return this.getBottomPanelY();
    };
    
    this.getRuneRectHeight = function() {
        return this.getPanelHeight() * this.runeRectHeightRate;
    };

    this.getRuneRadius = function() {
        var signalRadius = Math.min(this.getRuneRectHeight(), this.getLeftPanelClientWidth()) / 4;
        return signalRadius * this.runeRadiusRate;
    };
    
    this.getTopRuneRectY = function() {
        return this.getPanelHeight() - this.getRuneRectHeight() - this.globalPadding;
    };
    
    this.getBottomRuneRectY = function() {
        return this.height - this.getRuneRectHeight() - this.globalPadding; 
    };
    
    this.getLogoSize = function() {
        return { width: this.getRightPanelWidth() / 5, height: this.getPanelHeight() * this.handHeightRate };
    };
    
    this.getPortraitSize = function() {
        return {
            width: this.getRightPanelWidth() / 5,
            height: this.getPanelHeight() * (1 - this.handHeightRate) / 2,
        };
    };
    
    this.getLogoX = function(playerNumber, logoIndex) {
        return this.getRightPanelX() + logoIndex * this.getLogoSize().width;
    };
    this.getLogoY = function(playerNumber) {
        return playerNumber == 0 ? 0 : this.height - this.getHandPanelHeight();
    };
    this.getLogoPos = function(playerNumber, logoIndex) {
        return { x: this.getLogoX(playerNumber, logoIndex), y: this.getLogoY(playerNumber), };
    };
    
    this.getPortraitPos = function(playerNumber, logoIndex) {
        if (logoIndex >= 0 && logoIndex <= 4) {
            return {
                x: this.getRightPanelX() + logoIndex * this.getLogoSize().width,
                y: playerNumber == 1 ?
                        this.getPanelHeight() :
                        this.getHandPanelHeight() + this.getPortraitSize().height,
            };
        } else {
            logoIndex -= 5;
            return {
                x: this.getRightPanelX() + logoIndex * this.getLogoSize().width,
                y: playerNumber == 1 ?
                        this.getPanelHeight() + this.getPortraitSize().height :
                        this.getHandPanelHeight(),
            };
        }
    };
};
var settings = new ArenaSettings();

Array.prototype.compact = function() {
    for (var i = 0; i < this.length; i++) {
        if (!this[i]) {
            this.splice(i, 1);
            --i;
        }
    }
    return this;
};

Array.prototype.removeOfName = function(name) {
    for (var i = 0; i < this.length; ++i) {
        if (this[i] && this[i].name == name) {
            return this.splice(i, 1)[0];
        }
    }
    return null;
};

Array.prototype.pickByName = function(name) {
    for (var i = 0; i < this.length; ++i) {
        if (this[i] && this[i].name == name) {
            var result = this[i];
            this[i] = null;
            return result;
        }
    }
    return null;
};

Array.prototype.indexOfName = function(name) {
    for (var i = 0; i < this.length; ++i) {
        if (this[i] && this[i].name == name) {
            return i;
        }
    }
    return -1;
};

Array.prototype.ofName = function(name) {
    for (var i = 0; i < this.length; ++i) {
        if (this[i] && this[i].name == name) {
            return this[i];
        }
    }
    return null;
};

var Arena = function(playerId, playerNumber) {
    this.playerId = playerId, playerNumber;
    this.playerNumber = playerNumber;
    this.hands = [];

    this.fields = [];
    this.runes = [];
    
    this.createLogo = function(id, name, delay, size) {
        var group = new Kinetic.Group({ x: settings.width, y: settings.height, });
        
        var delayRect = new Kinetic.Rect({
            x: size.width - settings.handDelayRectSize - 1,
            y: size.height - settings.handDelayRectSize - 1,
            width: settings.handDelayRectSize,
            height: settings.handDelayRectSize,
            stroke: settings.handDelayRectBorderColor,
            strokeWidth: settings.handDelayRectBorderWidth,
            fill: settings.handDelayRectFill,
            opacity: settings.handDelayRectOpacity,
        });
        var delayText = new Kinetic.Text({
            text: delay.toString(),
            fontFamily: settings.handDelayFontFamily,
            fontSize: settings.handDelayFontSize,
            fill: settings.handDelayColor,
        }).centerMiddle(delayRect);

        var cardAvatar = new Image();
        cardAvatar.src = resDir + '/img/cardlogo/' + id + '.jpg';
        cardAvatar.onload = function() {
            var cardAvatarImage = new Kinetic.Image({
                x : 2,
                y : 2,
                width: size.width - 4,
                height: size.height - 4,
                image : cardAvatar,
            });
            group.add(cardAvatarImage);
            var cardFrame = new Image();
            cardFrame.src = resDir + '/img/frame/frame.png';
            cardFrame.onload = function() {
                var cardFrameImage = new Kinetic.Image({
                    x : 0,
                    y : 0,
                    width: size.width,
                    height: size.height,
                    image : cardFrame,
                });
                group.add(cardFrameImage);
                group.add(delayRect);
                group.add(delayText);
            };
        };

        this.hands.push({ name: name, group: group, delay: delay, delayText: delayText });
        return group;
    };
    
    this.createPortrait = function(card) {
        var size = settings.getPortraitSize();
        var group = new Kinetic.Group({ x: settings.width, y: settings.height, });
        var cardAvatar = new Image();
        cardAvatar.src = resDir + '/img/cardportrait/' + card.id + '.jpg';
        var hpRect = new Kinetic.Rect({
            x: 0,
            y: size.height - settings.cardAtRectHeight - settings.cardHpRectHeight,
            width: size.width,
            height: settings.cardHpRectHeight,
            stroke: settings.cardHpRectBorderColor,
            strokeWidth: settings.cardHpRectBorderWidth,
            fill: settings.cardHpRectFill,
            opacity: settings.cardHpRectOpacity,
        });
        var atRect = new Kinetic.Rect({
            x: 0,
            y: size.height - settings.cardAtRectHeight,
            width: size.width,
            height: settings.cardAtRectHeight,
            stroke: settings.cardAtRectBorderColor,
            strokeWidth: settings.cardAtRectBorderWidth,
            fill: settings.cardAtRectFill,
            opacity: settings.cardAtRectOpacity,
        });
        var hpText = new Kinetic.Text({
            text: 'HP: ' + card.hp, fill: settings.cardHpTextColor,
        }).centerMiddle(hpRect);
        var atText = new Kinetic.Text({
            text: 'AT: ' + card.at, fill: settings.cardAtTextColor,
        }).centerMiddle(atRect);
        cardAvatar.onload = function() {
            var cardAvatarImage = new Kinetic.Image({
                x : 2,
                y : 2,
                width: size.width - 4,
                height: size.height - 4,
                image : cardAvatar,
            });
            group.add(cardAvatarImage).add(hpRect).add(atRect).add(hpText).add(atText);
        };
        this.fields.push({
            name: card.name, group: group,
            hpRect: hpRect, atRect: atRect, hpText: hpText, atText: atText });
        return group;
    };
};

Arena.createCross = function() {
    var size = settings.getPortraitSize();
    var group = new Kinetic.Group({ x: settings.width, y: settings.height, });
    var paddingX = size.width * 0.2;
    var paddingY = size.height * 0.2;
    var verX = size.width * 0.5;
    var hozY = (size.height - paddingY) * 0.3 + paddingY;
    var crossLine = new Kinetic.Line({
        points: [
                 paddingX, hozY,
                 size.width - paddingX, hozY,
                 verX, hozY,
                 verX, paddingY,
                 verX, size.height
                 ],
        stroke: 'white',
        strokeWidth: 5,
        shadowColor: '#333333',
        shadowBlur: 10,
        shadowOffset: 0,
        shadowOpacity: 0.4,
    });
    group.add(crossLine);
    return group;
};

Arena.createSword = function() {
    var group = new Kinetic.Group({
        x: settings.width,
        y: settings.height,
    });

    var swordSrc = new Image();
    swordSrc.src = resDir + '/img/effect/sword.png';
    swordSrc.onload = function() {
        var swordImg = new Kinetic.Image({
            x : 0,
            y : 0,
            image : swordSrc,
        });
        group.add(swordImg);
    };
    return group;
};

var Animater = function() {
    this.initTime = 0.5;
    this.time = 0;
    this.stage = null;
    this.arenas = {};

    this.drawRunes = function(layer, positions) {
        for (var i = 0; i < positions.length; ++i) {
            var pos = positions[i];
            layer.add(new Kinetic.Circle({
                id: pos.id,
                x: pos.x,
                y: pos.y,
                radius: settings.getRuneRadius(),
                stroke: settings.runeCircleStroke,
                strokeWidth: settings.runeCircleStrokeWidth,
                fill: settings.runeCircleFill,
            }));
        }
    };
    
    this.__getPrefix = function(player) {
        return player.number == 0 ? 'hero1-' : 'hero2-';
    };
    
    this.__getShape = function(player, idSuffix) {
        var prefix = this.__getPrefix(player);
        return this.stage.get('#' + prefix + idSuffix)[0];
    };

    this.__updateHeroHp = function(player) {
        var hp = player.hp;
        var maxHp = player.maxHP;
        var hpTextShape = this.__getShape(player, 'hp');
        var hpRectShape = this.__getShape(player, 'hpbg-rect');
        var hpBarShape = this.__getShape(player, 'hp-bar');
        var hpText = hp > 99999 ? '?????' : hp.toString();
        var maxHpText = maxHp > 99999 ? '?????' : maxHp.toString();
        this.addAnimation("updateHeroHP", function() {
            hpTextShape.setText('HP:\r\n' + hpText + '/\r\n' + maxHpText);
            hpTextShape.middle(hpRectShape).center(hpRectShape);
            new Kinetic.Tween({
                node: hpBarShape,
                height: hp * hpRectShape.getHeight() / maxHp,
                y: hpRectShape.getY() + hpRectShape.getHeight() - hp * hpRectShape.getHeight() / maxHp,
                duration: settings.hpChangeDuration,
            }).play();
        }, settings.hpChangeDuration);
    };
    
    this.__updateRunes = function(player, runeInitInfos) {
        for (var i = 0; i < runeInitInfos.length; ++i) {
            var runeInitInfo = runeInitInfos[i];
            var runeShape = this.__getShape(player, 'rune' + i);
            runeShape.setFill(settings.runeFill[runeInitInfo.type]);
            runeShape.getLayer().draw();
        }
    };
    
    this.__stageCreated = function(data) {
        var frameLayer = new Kinetic.Layer({ id: 'frame-layer' });
        // Draw vertical separator line
        frameLayer.add(new Kinetic.Line({
            points: [
                settings.getRightPanelX(), 0,
                settings.getRightPanelX(), settings.height,
            ],
            stroke: settings.separatorColor,
            strokeWidth: settings.separatorWidth,
        }));
        // Draw horizontal separator line
        frameLayer.add(new Kinetic.Line({
            points: [
                0, settings.getBottomPanelY(),
                settings.width, settings.getBottomPanelY(),
            ],
            stroke: settings.separatorColor,
            strokeWidth: settings.separatorWidth * 2,
        }));
        
        // Draw hero label for player1
        var hero1Id = new Kinetic.Text({
            id: 'hero1-id',
            x: settings.globalPadding,
            y: settings.globalPadding,
            text: '玩家1',
            fontSize: settings.heroIdFontSize,
            fontFamily: settings.heroIdFontFamily,
            fill: settings.heroIdColor,
        });
        frameLayer.add(hero1Id);
        
        // Draw hero HP rectangle for player1
        var hp1RectY = hero1Id.getHeight() + hero1Id.getY() + settings.globalPadding;
        var hp1Rect = new Kinetic.Rect({
            id: 'hero1-hpbg-rect',
            x: settings.globalPadding,
            y: hp1RectY,
            width: settings.getLeftPanelClientWidth(),
            height: settings.getTopRuneRectY() - settings.globalPadding - hp1RectY,
            stroke: settings.hpRectStroke,
            strokeWidth: settings.hpRectStrokeWidth,
            fill: settings.hpRectBgFill,
        });
        frameLayer.add(hp1Rect);

        // Draw hero label for player2
        var hero2Id = new Kinetic.Text({
            id: 'hero2-id',
            x: settings.globalPadding,
            y: settings.globalPadding + settings.getBottomPanelY(),
            text: '玩家2',
            fontSize: settings.heroIdFontSize,
            fontFamily: settings.heroIdFontFamily,
            fill: settings.heroIdColor,
        });
        frameLayer.add(hero2Id);
        
        // Draw hero HP rectangle for player2
        var hp2RectY = hero2Id.getHeight() + hero2Id.getY() + settings.globalPadding;
        var hp2Rect = new Kinetic.Rect({
            id: 'hero2-hpbg-rect',
            x: settings.globalPadding,
            y: hp2RectY,
            width: settings.getLeftPanelClientWidth(),
            height: settings.getBottomRuneRectY() - settings.globalPadding - hp2RectY,
            stroke: settings.hpRectStroke,
            strokeWidth: settings.hpRectStrokeWidth,
            fill: settings.hpRectBgFill,
        });
        frameLayer.add(hp2Rect);
        
        // Draw rune circle for player1
        var rune1Circle = new Kinetic.Ellipse({
            x: settings.getRightPanelX() / 2,
            y: settings.getTopRuneRectY() + settings.getRuneRectHeight() / 2,
            radius: {
                x: settings.getLeftPanelClientWidth() / 2 * settings.runeCircleRadiusRate,
                y: settings.getRuneRectHeight() / 2 * settings.runeCircleRadiusRate,
            },
            stroke: settings.runeCircleStroke,
            strokeWidth: settings.runeCircleStrokeWidth,
            fill: settings.runeCircleFill,
        });
        frameLayer.add(rune1Circle);

        // Draw rune circle for player2
        var rune2Circle = new Kinetic.Ellipse({
            x: settings.getRightPanelX() / 2,
            y: settings.getBottomRuneRectY() + settings.getRuneRectHeight() / 2,
            radius: {
                x: settings.getLeftPanelClientWidth() / 2 * settings.runeCircleRadiusRate,
                y: settings.getRuneRectHeight() / 2 * settings.runeCircleRadiusRate,
            },
            stroke: settings.runeCircleStroke,
            strokeWidth: settings.runeCircleStrokeWidth,
            fill: settings.runeCircleFill,
        });
        frameLayer.add(rune2Circle);

        // Draw hand/field separators
        var hfSep1Y = settings.height / 2 * settings.handHeightRate; 
        frameLayer.add(new Kinetic.Line({
            points: [
                settings.getRightPanelX(), hfSep1Y,
                settings.width, hfSep1Y,
            ],
            stroke: settings.separatorColor,
            strokeWidth: settings.separatorWidth,
        }));
        
        var hfSep2Y = settings.height - hfSep1Y;
        frameLayer.add(new Kinetic.Line({
            points: [
                settings.getRightPanelX(), hfSep2Y,
                settings.width, hfSep2Y,
            ],
            stroke: settings.separatorColor,
            strokeWidth: settings.separatorWidth,
        }));
        
        // Draw horizontal inner separators
        var inSep1Y = hfSep1Y + (settings.height / 2 - hfSep1Y) / 2;
        frameLayer.add(new Kinetic.Line({
            points: [
                 settings.getRightPanelX(), inSep1Y,
                 settings.width, inSep1Y,
             ],
             stroke: settings.separatorColor,
             strokeWidth: settings.separatorWidth,
        }));
        
        var inSep2Y = settings.height - inSep1Y;
        frameLayer.add(new Kinetic.Line({
            points: [
                 settings.getRightPanelX(), inSep2Y,
                 settings.width, inSep2Y,
             ],
             stroke: settings.separatorColor,
             strokeWidth: settings.separatorWidth,
        }));
        
        // Draw vertical inner separators
        var rightPanelWidth = settings.width - settings.getRightPanelX();
        for (var i = 1; i <= 4; ++i) {
            var inSepX = settings.getRightPanelX()  + i * rightPanelWidth / 5;
            frameLayer.add(new Kinetic.Line({
                points: [ inSepX, 0, inSepX, settings.height ],
                stroke: settings.separatorColor,
                strokeWidth: settings.separatorWidth, 
            }));
        }

        // Append frame layer
        this.stage.add(frameLayer);
        // Append HP shapes to card layer
        var cardLayer = new Kinetic.Layer({ id: 'card-layer' });
        // Draw rune outlines for both players
        this.drawRunes(cardLayer, [
            { id: 'hero1-rune0', x: rune1Circle.getX() - rune1Circle.getRadius().x, y: rune1Circle.getY(), },
            { id: 'hero1-rune1', x: rune1Circle.getX(), y: rune1Circle.getY() - rune1Circle.getRadius().y, },
            { id: 'hero1-rune2', x: rune1Circle.getX() + rune1Circle.getRadius().x, y: rune1Circle.getY(), },
            { id: 'hero1-rune3', x: rune1Circle.getX(), y: rune1Circle.getY() + rune1Circle.getRadius().y, },
            { id: 'hero2-rune0', x: rune2Circle.getX() - rune2Circle.getRadius().x, y: rune2Circle.getY(), },
            { id: 'hero2-rune1', x: rune2Circle.getX(), y: rune2Circle.getY() - rune2Circle.getRadius().y, },
            { id: 'hero2-rune2', x: rune2Circle.getX() + rune2Circle.getRadius().x, y: rune2Circle.getY(), },
            { id: 'hero2-rune3', x: rune2Circle.getX(), y: rune2Circle.getY() + rune2Circle.getRadius().y, },
        ]);
        cardLayer.add(new Kinetic.Rect({
            id: 'hero1-hp-bar',
            x: hp1Rect.getX(),
            y: hp1Rect.getY() + hp1Rect.getHeight(),
            width: hp1Rect.getWidth(),
            height: 0,
            fill: settings.hpRectHpFill,
        }));
        cardLayer.add(new Kinetic.Rect({
            id: 'hero2-hp-bar',
            x: hp2Rect.getX(),
            y: hp2Rect.getY() + hp2Rect.getHeight(),
            width: hp2Rect.getWidth(),
            height: 0,
            fill: settings.hpRectHpFill,
        }));
        cardLayer.add(new Kinetic.Text({
            id: 'hero1-hp',
            text: '******\r\n******\r\n******',
            fontSize: settings.heroHpFontSize,
            fontFamily: settings.heroHpFontFamily,
            fill: settings.heroHpColor,
        }).center(hp1Rect).middle(hp1Rect));

        cardLayer.add(new Kinetic.Text({
            id: 'hero2-hp',
            text: '******\r\n******\r\n******',
            fontSize: settings.heroHpFontSize,
            fontFamily: settings.heroHpFontFamily,
            fill: settings.heroHpColor,
        }).center(hp2Rect).middle(hp2Rect));
        this.stage.add(cardLayer);
        // Append other layers
        this.stage.add(new Kinetic.Layer({ id: 'effect-layer' }));
        
        var roundLayer = new Kinetic.Layer({ id: 'round-layer' });
        var roundRect = new Kinetic.Rect({
            id: 'round-rect', x: 0, y: 0, width: settings.width, height: settings.height, opacity: 0,
        });
        roundLayer.add(roundRect);
        var roundText = new Kinetic.Text({
            id: 'round-text',
            text: '回合: 0',
            fontSize: settings.roundFontSize,
            fontFamily: settings.roundFontFamily,
            fill: settings.roundTextColor,//'yellow',
            opacity: settings.roundTextOpacity,//0.4,
        });
        roundLayer.add(roundText);
        this.stage.add(roundLayer);
        roundText.centerMiddle(roundRect);
        roundLayer.draw();
        
        var splashLayer = new Kinetic.Layer({ id: 'splash-layer' });
        var splashRect = new Kinetic.Rect({
            id: 'splash-label',
            x: -settings.width,
            y: settings.height / 2 - 100,
            width: settings.width,
            height: settings.bannerHeight,
            strokeWidth: settings.bannerBorderWidth,
            stroke: settings.bannerBorderColor,
            fill: settings.bannerFill,
            opacity: settings.bannerOpacity,
        });
        var splashText = new Kinetic.Text({
            id: 'splash-text',
            text: '',
            fontSize: settings.bannerFontSize,
            fontFamily: settings.bannerFontFamily,
            fill: settings.bannerTextColor,
        });
        splashLayer.add(splashRect).add(splashText);
        this.stage.add(splashLayer);
    };
    
    this.__playerAdded = function(data) {
        var player = data[0];
        var prefix = this.__getPrefix(player);
        var heroId = this.stage.get('#' + prefix + 'id')[0];
        heroId.setText(player.id);
        heroId.getLayer().draw();
        var arena = new Arena(player.id, player.number);
        this.arenas[player.id] = arena;

        this.__updateHeroHp(player, player.maxHP, player.maxHP);
        this.__updateRunes(player, player.runeInitInfos);
    };

    this.__gameStarted = function(data) {
        this.showSplash({ text: '战斗开始!' });
    };
    
    this.__roundStarted = function(data) {

    };
    
    this.__compactField = function(data) {
        var arena = this.arenas[data[0]];
        var fields = arena.fields;
        fields.compact();
        var funcs = [];
        for (var i = 0; i < fields.length; ++i) {
            (function(iCard, card) {
                var pos = settings.getPortraitPos(arena.playerNumber, iCard);
                funcs.push(function() {
                    new Kinetic.Tween({
                        node: card.group,
                        x: pos.x,
                        y: pos.y,
                        duration: settings.compactFieldDuration,
                    }).play();
                });
            })(i, fields[i]);
        }
        this.addAnimations("compactField", funcs, settings.compactFieldDuration);
    };
    
    this.__roundEnded = function(data) {
        var stage = this.stage;
        var roundText = stage.get('#round-text')[0];
        this.addAnimation("roundEnded", function() {
            roundText.setText("回合: " + data[0]);
            roundText.centerMiddle(stage.get('#round-rect')[0]);
            roundText.getLayer().draw();
        }, settings.minimumDuration);
        var funcs = [];
        for (var arena in this.arenas) {
            var hands = this.arenas[arena].hands;
            for (var i = 0; i < hands.length; ++i) {
                (function (logo) {
                    funcs.push(function () {
                        if (logo.delay <= 0) { return; }
                        logo.delay -= 1;
                        logo.delayText.setText(logo.delay.toString());
                        logo.delayText.getLayer().draw();
                    });
                })(hands[i]);
            }
        }
        this.addAnimations("delayDecrease", funcs, 0.3);
    };
    
    this.__activateRune = function(data) {
        var playerId = data[0];
        var runeName = data[1];
        var shouldNotice = data[2];
        if (!shouldNotice) { return; }
        this.showSplash({
            text: playerId + " 的 " + runeName + " 激活！",
        });
    };
    
    this.__deactivateRune = function(data) {
        var playerId = data[0];
        var runeName = data[1];
        var shouldNotice = data[2];
        if (!shouldNotice) { return; }
        this.showSplash({
            text: playerId + " 的 " + runeName + " 能量耗尽！",
        });
    };
    
    this.__cardDrawed = function(data) {
        var playerId = data[0];
        var arena = this.arenas[playerId];
        var targetIndex = arena.hands.length;
        var pn = arena.playerNumber;
        var logo = arena.createLogo(data[1], data[2], data[3], settings.getLogoSize());
        this.stage.get('#card-layer')[0].add(logo);
        this.addAnimation("drawCard", function() {
            logo.setX(settings.width);
            logo.setY(settings.getLogoY(pn));
            new Kinetic.Tween({
                node: logo,
                x: settings.getLogoX(pn, targetIndex),
                duration: settings.drawCardDuration
            }).play();
        }, settings.drawCardDuration);
    };
    
    this.__summonCard = function(data) {
        var playerId = data[0];
        var card = data[1];
        var arena = this.arenas[playerId];
        
        var logo = arena.hands.removeOfName(card.name);

        var handFuncs = [];
        handFuncs.push(function() {
            new Kinetic.Tween({
                node: logo.group,
                x: -settings.getLogoSize().width,
                duration: settings.drawCardDuration,
            }).play();
        });

        for (var iHand = 0; iHand < arena.hands.length; ++iHand) {
            (function(i, currentCard) {
                var card = currentCard;
                if (card == logo) { return; }
                var pos = settings.getLogoPos(arena.playerNumber, i);
                handFuncs.push(function () {
                    new Kinetic.Tween({
                        node: card.group,
                        x: pos.x,
                        y: pos.y,
                        duration: settings.drawCardDuration,
                    }).play();
                });
            })(iHand, arena.hands[iHand]);
        }
        this.addAnimations("summonCards", handFuncs, settings.drawCardDuration);

        this.addAnimation("destroySummonedCardFromHand", function() {
            logo.group.destroy();
            delete logo;
        }, settings.minimumDuration);

        var targetIndex = arena.fields.length;
        var portrait = arena.createPortrait(card, settings.getPortraitSize());
        this.stage.get('#card-layer')[0].add(portrait);
        this.addAnimation("compactHand", function() {
            var pos = settings.getPortraitPos(arena.playerNumber, targetIndex);
            new Kinetic.Tween({
                node: portrait,
                x: pos.x,
                y: pos.y,
                duration: settings.summonCardDuration,
            }).play();
        }, settings.summonCardDuration);
        this.pauseAnimation(settings.summonCardPause);
    };

    this.__adjustAT = function(data) {
        this.adjustValue(data, 'AT', true);
    };
    
    this.__lostAdjAT = function(data) {
        this.adjustValue(data, 'AT', false);
    };
    
    this.__adjustHP = function(data) {
        this.adjustValue(data, 'HP', true);
    };
    
    this.__lostAdjHP = function(data) {
        this.adjustValue(data, 'HP', false);
    };
    
    this.__attackHero = function(data) {
        var attacker = data[0];
        var defenderHero = data[1];
        var damage = data[2];
        var featureName = data[3];
        this.normalAttack(attacker, defenderHero, true);
        this.displayCardMsg({
            name: 'attackHeroMsg',
            cardShape: this.__getShape(defenderHero, 'hpbg-rect'),
            textColor: settings.attackCardTextColor,
            text: '伤害: ' + damage + '\r\n' + featureName,
        });
        defenderHero.hp -= damage;
        if (defenderHero.hp < 0) {
            defenderHero.hp = 0;
        }
        this.__updateHeroHp(defenderHero);
    };
    
    this.__attackCard = function(data) {
        //var attacker = data[0];
        var defender = data[1];
        var featureName = data[2];
        var damage = data[3];
        var currentHP = data[4];
        var dfCard = this.getCard(defender);
        this.displayCardMsg({
            name: 'attackCard',
            cardShape: dfCard.group,
            textColor: settings.attackCardTextColor,
            text: '伤害: ' + damage + '\r\n' + featureName,
        });
        this.addAnimation('attackCardUpdateHp', function () {
            dfCard.hpText.setText('HP: ' + currentHP);
            dfCard.hpText.centerMiddle(dfCard.hpRect);
            dfCard.hpText.getLayer().draw();
        }, settings.minimumDuration);
    };
    
    this.__healCard = function(data) {
        //var healer = data[0];       // EntityRuntimeInfo
        var healee = data[1];       // EntityRuntimeInfo
        var featureName = data[2];  // String
        var heal = data[3];         // int
        var currentHP = data[4];    // int
        var healeeCard = this.getCard(healee);
        this.displayCardMsg({
            name: 'healCard',
            cardShape: healeeCard.group,
            textColor: settings.healCardTextColor,
            text: '治疗: ' + heal + '\r\n' + featureName,
        });
        this.addAnimation('healCardUpdateHp', function () {
            healeeCard.hpText.setText('HP: ' + currentHP);
            healeeCard.hpText.centerMiddle(healeeCard.hpRect);
            healeeCard.hpText.getLayer().draw();
        }, settings.minimumDuration);
    };

    this.__blockDamage = function(data) {
        var protector = data[0];
        //var attacker = data[1];
        var defender = data[2];
        var featureName = data[3];
        var originalDamage = data[4];
        var actualDamage = data[5];
        if (protector.uniqueName != defender.uniqueName) {
            console.error("Protector(" + protector.uniqueName + ") != Defender(" +
                    defender.uniqueName + "). Not supported yet!");
            return;
        }
        var dfCard = this.getCard(defender);
        this.displayCardMsg({
            name: 'blockDamage',
            cardShape: dfCard.group,
            textColor: settings.blockDamageTextColor,
            text: featureName + '\r\n伤害: ' + originalDamage + '\r\n-->' + actualDamage,
        });
    };

    this.msgIgnoredSkills = ['背刺', '暴击', '狂热', '嗜血'];
    this.__useSkill = function(data) {
        var attacker = data[0]; // EntityRuntimeInfo
        var skill = data[1];    // String
        var defenders = data[2]; // EntityRuntimeInfo[]
        if (defenders.length == 0) {
            return;
        }
        if (skill.indexOf('军团') == 0 || this.msgIgnoredSkills.indexOf(skill) >= 0) {
            return;
        }
        if (skill == '普通攻击') {
            this.normalAttack(attacker, defenders[0], false);
        } else if (skill == '送还') {
            this.showReturnCross(attacker, defenders[0]);
        } else {
            var text = attacker.ownerId + "的" + attacker.uniqueName + "\r\n";
            text += "\r\n" + skill + "\r\n\r\n";
            for (var i = 0; i < defenders.length; ++i) {
                text += defenders[i].uniqueName + '\r\n';
            }
            this.showSplash({
                text: text,
                duration: settings.skillSplashDuration,
                pause: settings.skillSplashPause,
            });
        }
    };
    
    this.showReturnCross = function(attacker, defender) {
        var attackerArena = this.arenas[attacker.ownerId];
        var defenderArena = this.arenas[defender.ownerId];
        var defenderCardIndex = defenderArena.fields.indexOfName(defender.uniqueName);
        var cross = Arena.createCross();
        this.stage.get('#effect-layer')[0].add(cross);
        this.addAnimation("showCross", function() {
            var crossSartPos = settings.getPortraitPos(attackerArena.playerNumber, defenderCardIndex);
            var crossEndPos = settings.getPortraitPos(defenderArena.playerNumber, defenderCardIndex);
            cross.setX(crossSartPos.x);
            cross.setY(crossSartPos.y);
            new Kinetic.Tween({
                node: cross,
                x: crossEndPos.x,
                y: crossEndPos.y,
                easing: Kinetic.Easings.StrongEaseIn,
                duration: settings.returnCardCrossDuration,
            }).play();
        }, settings.returnCardCrossDuration);
        this.addAnimation("destroyCross", function() {
            cross.destroy();
            delete cross;
        }, settings.minimumDuration);
    };
    
    this.__returnCard = function(data) {
        // var attacker = data[0];
        var defender = data[1];
        var defenderArena = this.arenas[defender.ownerId];
        var card = defenderArena.fields.pickByName(defender.uniqueName);
        this.addAnimation("returnCard", function() {
            new Kinetic.Tween({
                node: card.group,
                x: settings.width,
                duration: settings.summonCardDuration,
            }).play();
        }, settings.summonCardDuration);
        this.addAnimation("destroyReturnedCard", function() {
            card.group.destroy();
            delete card;
        }, settings.minimumDuration);
    };
    
    this.__cardDead = function(data) {
        var playerId = data[0];
        var arena = this.arenas[playerId];
        var card = arena.fields.pickByName(data[1].name);
        this.addAnimation("removeDeadCard", function() {
            card.hpText.setText('DEAD');
            card.hpText.setFill('red');
            card.hpText.centerMiddle(card.hpRect);
            new Kinetic.Tween({
                node: card.group,
                x: settings.width,
                duration: settings.summonCardDuration,
            }).play();
        }, settings.summonCardDuration);
        this.addAnimation("destroyDeadCard", function() {
            card.group.destroy();
            delete card;
        }, settings.minimumDuration);
    };
    
    this.__cardToGrave = function(data) {
        
    };
    
    this.__gameEnded = function(data) {
        var player = data[0];
        /*
        var loser = data[1];
        var cause = data[2];
        if (cause == '英雄死亡') {
            loser.hp = 0;
            this.__updateHeroHp(loser);
        }
        */
        this.showSplash({ text: '战斗结束!\r\n获胜者: ' + player.id + (data[3] > 0 ? ('\r\n共造成伤害: ' + data[3]) : ''), });
        this.showSplash({ text: '这个功能还没完成，\r\n就做了那么点儿，\r\n白白会努力做的！^0^', exitType: 'onclick', });
    };
    
    /**
     * @param
     * card.ownerId,
     * card.uniqueName,
     * @return { x, y }
     */
    this.getCard = function(cardRtInfo) {
        var card = this.arenas[cardRtInfo.ownerId].fields.ofName(cardRtInfo.uniqueName);
        if (card == null) {
            console.error('ERROR: Cannot find card ' + cardRtInfo.uniqueName + ' from ' + cardRtInfo.ownerId);
        } 
        return card;
    };
    
    this.animations = [];

    this.addAnimation = function(name, func, duration) {
        if ($.type(name) !== 'string') {
            console.error("ERROR: first variable of this.addAnimation must be string! Given: " + name);
        }
        if (duration == undefined || duration <= 0) {
            console.error("ERROR: Invalid addAnimation duration of " + name + ": " + duration + "!");
        }
        var timeOutVar = window.setTimeout(function() {
            //console.log("ANIM Executing " + name + " (duration = " + duration + ")");
            //console.log("ANIM Next animation should happen at " + new Date(new Date().getTime() + duration * 1000));
            func();
        }, this.time * 1000);
        this.animations.push(timeOutVar);
        //console.log("ANIM Registering " + name + " (time = " + this.time + ", duration = " + duration + ")");
        this.time += duration;
    };
    
    this.addAnimations = function(name, funcs, duration) {
        this.addAnimation(name, function () {
            for (var i = 0; i < funcs.length; ++i) {
                //console.log("ANIM Executing " + name + "[" + i + "] (duration = " + duration + ")");
                //console.log("ANIM Next animation should happen at " + new Date(new Date().getTime() + duration * 1000));
                funcs[i]();
            }
        }, duration);
    };
    
    this.pauseAnimation = function(duration) {
        this.addAnimation("pause", function () {}, duration);
    };
    
    this.showSplash = function(attrs) {
        var opt = attrs || {};
        var text = opt.text || '';
        var duration = opt.duration || settings.bannerDuration;
        var pause = opt.pause || settings.bannerPause;
        var exitType = opt.exitType || 'pause';
        
        var width = settings.width;
        var splashText = this.stage.get('#splash-text')[0];
        var splashRect = this.stage.get('#splash-label')[0];
        this.addAnimation("showSplash", function() {
            splashRect.setX(-width);
            splashText.setText(text);
            splashText.centerMiddle(splashRect);
            new Kinetic.Tween({
                node: splashRect,
                x: 0,
                duration: duration,
            }).play();
            new Kinetic.Tween({
                node: splashText,
                x: width / 2 - splashText.getWidth() / 2,
                duration: duration,
            }).play();
        }, duration);
        if (exitType == 'pause') {
            this.pauseAnimation(pause);
            this.addAnimation("exitSplash", function() {
                new Kinetic.Tween({
                    node: splashRect,
                    x: width,
                    duration: duration,
                }).play();
                new Kinetic.Tween({
                    node: splashText,
                    x: width * 1.5 - splashText.getWidth() / 2,
                    duration: duration,
                }).play();
            }, duration);
        };
    };
    
    /**
     * @param adjName: AT or HP
     * @param data: the event data
     * @param addEffect (boolean): whether is to add or lost effect
     */
    this.adjustValue = function(data, adjName, addEffect) {
        var source = data[0]; // EntityRuntimeInfo
        var target = data[1]; // EntityRuntimeInfo
        var adjustment = data[2]; // int
        var newValue = data[3]; // int
        var featureName = data[4]; // String
        var ptSize = settings.getPortraitSize();
        var adjRect = new Kinetic.Rect({
            x: 0, y: 0, width: ptSize.width, height: settings.adjRectHeight,
            stroke: settings.adjRectBorderColor,
            strokeWidth: settings.adjRectBorderWidth,
            fill: settings.adjRectFill,
            opacity: settings.adjRectOpacity,
        });
        var adjTextPrefix = addEffect ? '' : '失去\r\n';
        var adjValueText = adjustment > 0 ? '+' + adjustment : '-' + (-adjustment);
        var adjText = new Kinetic.Text({
            x: 0, y: 0,
            text: adjTextPrefix + adjName + adjValueText + '\r\n' + featureName,
            fontFamily: settings.adjustFontFamily,
            fontSize: settings.adjustFontSize,
            fill: adjName == 'AT' ? settings.adjustAdjAtColor : settings.adjustAdjHpColor,
        });
        var adjGroup = new Kinetic.Group({
            x: settings.width, y: settings.height,
        });
        adjGroup.add(adjRect).add(adjText);
        adjText.centerMiddle(adjRect);
        this.stage.get('#effect-layer')[0].add(adjGroup);

        var targetCard = this.getCard(target);
        if (source.type != 'Card' || source.uniqueName == target.uniqueName) {
            this.addAnimation("showAdjust" + adjName, function() {
                adjGroup.setX(targetCard.group.getX());
                adjGroup.setY(-adjRect.getHeight());
                new Kinetic.Tween({
                    node: adjGroup,
                    x: adjGroup.getX(),
                    y: targetCard.group.getY() + ptSize.height / 2 - adjRect.getHeight() / 2,
                    duration: settings.adjustDuration / 5,
                }).play();
            }, settings.adjustDuration);
        } else {
            var sourceCard = this.getCard(source);
            this.addAnimation("showAdjust" + adjName, function() {
                adjGroup.setX(sourceCard.group.getX());
                adjGroup.setY(sourceCard.group.getY() + ptSize.height / 2 - adjRect.getHeight() / 2);
                new Kinetic.Tween({
                    node: adjGroup,
                    x: targetCard.group.getX(),
                    y: targetCard.group.getY() + ptSize.height / 2 - adjRect.getHeight() / 2,
                    duration: settings.adjustDuration,
                }).play();
            }, settings.adjustDuration);
        }

        this.addAnimation("destroyAdjust" + adjName + "Text", function() {
            var layer = adjGroup.getLayer();
            adjGroup.destroy();
            delete adjGroup;
            layer.draw();
        }, settings.minimumDuration);
        
        this.addAnimation('set' + adjName + 'Text', function() {
            // Adjust text number
            var textShape = adjName == 'AT' ? targetCard.atText : targetCard.hpText;
            var rectShape = adjName == 'AT' ? targetCard.atRect : targetCard.hpRect;
            textShape.setText(adjName + ': ' + newValue);
            textShape.centerMiddle(rectShape);
            textShape.getLayer().draw();
        }, settings.minimumDuration);
    };
    
    /**
     * @attribute name (required)
     * @attribute cardShape (required)
     * @attribute text (default to '')
     * @attribute textColor
     * @attribute duration
     */
    this.displayCardMsg = function(attrs) {
        if (!attrs || !attrs.name || !attrs.cardShape) {
            console.error("Invalid attrs in this.displayCardMsg: " + attrs);
            return;
        }
        var self = this;
        var opt = $.extend({
            textColor: settings.cardMsgTextColor,
            text: '',
            duration: settings.cardMsgDuration,
        }, (attrs || {}));
        var ptSize = settings.getPortraitSize();
        var group = null;
        this.addAnimation(name, function () {
            var rect = new Kinetic.Rect({
                x: 0, y: 0, width: ptSize.width,
                height: settings.cardMsgRectHeight,
                stroke: settings.cardMsgRectBorderColor,
                strokeWidth: settings.cardMsgRectBorderWidth,
                fill: settings.cardMsgRectFill,
                opacity: settings.cardMsgRectOpacity,
            });
            var text = new Kinetic.Text({
                text: opt.text,
                fontFamily: settings.cardMsgFontFamily,
                fontSize: settings.cardMsgFontSize,
                fill: opt.textColor,
            });
            group = new Kinetic.Group({
                x: opt.cardShape.getX(),
                y: opt.cardShape.getY() + ptSize.height / 2 - rect.getHeight() / 2,
            });
            group.add(rect).add(text);
            self.stage.get('#effect-layer')[0].add(group);
            text.centerMiddle(rect);
            group.getLayer().draw();
        }, opt.duration);
        this.addAnimation(name + "Clearup", function() {
            var layer = group.getLayer();
            group.destroy();
            delete group;
            layer.draw();
        }, settings.minimumDuration);
    };
    
    /**
     * @param attacker { ownerId, uniqueName }
     * @param defender
     * { ownerId, uniqueName } if attackingHero is false
     * { id } if attackingHero is true
     */
    this.normalAttack = function(attacker, defender, attackingHero) {
        var sword = Arena.createSword();
        this.stage.get('#effect-layer')[0].add(sword);
        var ptSize = settings.getPortraitSize();
        var self = this;
        var attackerCard = this.getCard(attacker);
        if (attackerCard == null) {
            console.error('Cannot find card ' + attacker.uniqueName);
        }
        var defenderCard = null;
        if (!attackingHero) {
            defenderCard = this.getCard(defender);
        }
        this.addAnimation("normalAttack", function() {
            // Center sword inside attacker portrait
            sword.setX(attackerCard.group.getX() + ptSize.width / 2 - settings.swordWidth / 2);
            sword.setY(attackerCard.group.getY() + ptSize.height / 2 - settings.swordHeight / 2);
            var targetPoint = { x: 0, y: 0 };
            if (attackingHero) {
                var hpBgRect = self.__getShape(defender, 'hpbg-rect');
                targetPoint.x = hpBgRect.getX() + hpBgRect.getWidth() / 2 - settings.swordWidth / 2;
                targetPoint.y = hpBgRect.getY() + hpBgRect.getHeight() / 2 - settings.swordHeight / 2;
            } else {
                targetPoint.x = defenderCard.group.getX() + ptSize.width / 2 - settings.swordWidth / 2;
                targetPoint.y = defenderCard.group.getY() + ptSize.height / 2 - settings.swordHeight / 2;
            }
            new Kinetic.Tween({
                node: sword,
                x: targetPoint.x,
                y: targetPoint.y,
                duration: settings.normalAttackDuration,
            }).play();
        }, settings.normalAttackDuration);
        this.addAnimation("normalAttackDestroySword", function() {
            sword.destroy();
            delete sword;
        }, settings.minimumDuration);
    };
    
    /**
     * @param attacker {
     *    ownerId, type, uniqueName
     * }
     */
    this.zoomAttacker = function(attacker, zoomOut) {
        if (attacker.type == 'Card') {
            var card = this.arenas[attacker.ownerId].fields.ofName(attacker.uniqueName);
            this.addAnimation("zoomAttacker", function() {
                var shape = card.group;
                var deltaY = settings.getPortraitSize().height * settings.zoomRate;
                new Kinetic.Tween({
                    node: shape,
                    y: zoomOut ? shape.getY() - deltaY : shape.getY() + deltaY,
                    duration: settings.zoomAttackerDuration,
                }).play();
            }, settings.zoomAttackerDuration);
        }
    };

    this.start = function(animation) {
        settings.refreshSize();
        $.each(this.animations, function(i, v) {
            clearTimeout(v);
        });
        this.time = this.initTime;
        $('#battle-canvas').width(this.width).height(this.height);
        this.stage = new Kinetic.Stage({
            container : 'battle-canvas',
            width : settings.width,
            height : settings.height
        });
        var bgLayer = new Kinetic.Layer();
        var bg = new Kinetic.Rect({
            id: 'bg-layer',
            x : 0,
            y : 0,
            width : settings.width,
            height : settings.height,
            fill : settings.bgColor,
            strokeWidth : 0,
        });
        bgLayer.add(bg);
        this.stage.add(bgLayer);
        
        var events = animation.events;
        for (var i = 0; i < events.length; ++i) {
            var event = events[i];
            console.log(JSON.stringify(event));
            var handlerName = "__" + event.name;
            var handler = this[handlerName];
            if (handler) {
                handler.apply(this, [event.dataList]);
            } else {
                console.log("ERROR: unknown event: " + event.name);
            }
        }
    };
};
var animater = null;

var showBattle = function(animation) {
    animater.start(animation);
};

$(document).ready( function() {
    animater = new Animater();
});