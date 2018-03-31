/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : juooo

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-03-31 16:34:50
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admins
-- ----------------------------
DROP TABLE IF EXISTS `admins`;
CREATE TABLE `admins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of admins
-- ----------------------------
INSERT INTO `admins` VALUES ('1', 'admin', 'admin');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `imgs` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `time` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `venue` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `price` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `introduce` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `kind` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `top` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=121 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', 'http://image.juooo.com/group1/M00/01/9D/rAoKNVphZQqAQDVnAACx3hyCtRA347.jpg', '【万有音乐系】打扰一下2018新专辑《闲人免进》音乐分享会-广州站', '2018.04.22 20:00', '广州TU凸空间', '200-280', '“打扰一下”寓意为：一份尊重，是一种信仰，是一份期许，是一种摇滚态度，更是一种正能量的传递，秉持着对音乐的领悟，追逐音乐造诣的巅峰。', 'con', null);
INSERT INTO `goods` VALUES ('2', 'http://image.juooo.com/group1/M00/00/CF/rAoKmVoo_CiALJwHAABkrdGWhMo075.jpg', '【万有音乐系】Keren Ann 2018 中国巡演-广州站', '2018.04.28 20:00', '广州友谊剧院', '180-580', '有人说，Keren Ann的歌声像是把灵魂领出来，在不吵不闹的小巷里边走边唱，像是观众只有自己，更像是观众是整个世界。如吟游诗人般将一切用歌声诗意化，如梦幻泡影，亦如心底呼唤。', 'con', null);
INSERT INTO `goods` VALUES ('3', 'http://image.juooo.com/group1/M00/00/A7/rAoKmVnpnQyAXy1JAABYOJPzD50405.jpg', '【万有音乐系】麦斯米兰“Sea of Silence”寂静如海 2018巡回演唱会-广州站', '2018.04.29 20:00', '广州友谊剧院', '100-380', '麦斯米兰2018年将再次来到中国，带着他的新专辑，展开他全新的“SeaofSilence”寂静如海2018巡回演唱会。', 'con', null);
INSERT INTO `goods` VALUES ('4', 'http://image.juooo.com/group1/M00/01/A3/rAoKNVpm78iAW6elAACHMT17x2M166.jpg', '【万有音乐系】简弘亦“柔软的国”2018巡回演唱会-广州', '2018.05.11 20:00', '广东演艺中心大剧院', '180-580', '俊朗帅气的外表，略带羞涩的表现力，恰到好处地拿捏歌曲本身的灵魂色彩，他是“拥有最多男朋友和女朋友的亦神”，他是全能唱作人歌手、音乐制作人，被媒体评为“音乐诗人”，他是华语金曲奖全能唱作艺人', 'con', null);
INSERT INTO `goods` VALUES ('5', 'http://image.juooo.com/group1/M00/01/7E/rAoKNVoyJyKASxdrAACNsaqVNy4628.jpg', '【万有音乐系】“远扬十年·海角重现”岛歌王子中孝介2018巡回演唱会-广州站', '2018.05.25 20:00', '星海音乐厅演奏大厅', '180-580', '被称为“岛歌王子”的中孝介（あたりこうすけ），中孝介拥有充满透明感的温柔真假声，他的歌声并且带有岛歌的特有转音，也被称为“地球上最温柔的男声”。', 'con', null);
INSERT INTO `goods` VALUES ('6', 'http://image.juooo.com/group1/M00/01/15/rAoKmVqo7GGAQNUhAADcJr5iHGQ141.jpg', '【万有音乐系】“HONEY”SCANDAL 2018亚洲巡演-广州站', '2018.06.17 20:00', '广州TU凸空间', '480-680', '充满丰富情感摇滚曲风＋扣人心弦动人情歌曲风，诚实表达内心深处的真诚告白！', 'con', null);
INSERT INTO `goods` VALUES ('7', 'http://image.juooo.com/group1/M00/01/79/rAoKNVoo-6iAeApyAABn3d17voE445.jpg', '【万有音乐系】My Song--Sophie Zelmani 苏菲 · 珊曼妮2018巡回演唱会—广州站  ', '2018.06.30 20:00', '广州友谊剧院', '180-480', '苏菲·珊曼妮，瑞典歌手和歌曲创作人，她有着高纬寒带森林里冰雪精灵般的样子，过耳不忘的无烟火气嗓音，她满足了人们对北欧民谣女生所有的幻想。', 'con', null);
INSERT INTO `goods` VALUES ('8', 'http://image.juooo.com/group1/M00/01/9F/rAoKNVplQUKANAzbAACfFtrx1kI323.jpg', '2018年詹姆斯布朗特真情挚爱广州演唱会', '2018.04.02 20:00', '广州中山纪念堂', '380-1280', 'James Blunt的创作灵感不断带来惊喜和新鲜感，不同于其它的创作新歌手，JamesBlunt用他独特的嗓音来展示音乐上的画面感，细腻的感情通过声线和旋律变成一幕幕场景', 'con', null);
INSERT INTO `goods` VALUES ('9', 'http://image.juooo.com/group1/M00/01/C0/rAoKNVqqUMCAb2gQAABHQhZTliI295.jpg', '【万有音乐系】新古典钢琴家Ludovico Einaudi鲁多维科·艾奥迪2018巡演-广州站', '2018.06.08 20:00', '星海音乐厅交响乐演奏厅', '280-1280', '【万有音乐系】鲁多维科·艾奥迪Ludovico Einaudi 2018巡演', 'mu', null);
INSERT INTO `goods` VALUES ('10', 'http://image.juooo.com/group1/M00/01/5B/rAoKNVn5kHGAEdz_AACs7SsPG2w941.jpg', '【万有音乐系】最后的莫西干人--亚历桑德罗印第安音乐品鉴会--广州站', '2018.06.22 20:00', '星海音乐厅室内乐演奏厅', '180-380', '印第安特色的笛箫类吹奏乐器（盖纳笛、安塔拉等）伴以纯天然材质的摇荡器，原住民之吟唱演绎出的印第安传统曲目', 'mu', null);
INSERT INTO `goods` VALUES ('11', 'http://image.juooo.com/group1/M00/01/BC/rAoKNVqg3CGAW6mIAACwAwjhoOk444.jpg', '【万有音乐系】“弦乐名家”——柏林爱乐弦乐五重奏2018音乐会', '2018.07.26 20:00', '星海音乐厅交响乐演奏厅', '180-880', '柏林爱乐弦乐五重奏的独特之处在于乐器的组成：不同于常规的弦乐四重奏基础上加多一个小提琴或中提琴，他们还特别加入了低音提琴。', 'mu', null);
INSERT INTO `goods` VALUES ('12', 'http://image.juooo.com/group1/M00/01/BC/rAoKNVqg3CGAW6mIAACwAwjhoOk444.jpg', '【万有音乐系】“弦乐名家”——柏林爱乐弦乐五重奏2018音乐会', '2018.07.26 20:00', '星海音乐厅交响乐演奏厅', '180-880', '柏林爱乐弦乐五重奏的独特之处在于乐器的组成：不同于常规的弦乐四重奏基础上加多一个小提琴或中提琴，他们还特别加入了低音提琴。', 'mu', null);
INSERT INTO `goods` VALUES ('13', 'http://image.juooo.com/group1/M00/01/14/rAoKmVqmI72AZ-vkAACidVSp6yI354.jpg', '【万有音乐系】《海上钢琴师》电影20周年纪念·原声音乐演奏家——吉达·布塔钢琴视听音乐会-广州站', '2018.11.11 20:00', '星海音乐厅室内乐演奏厅', '180-580', '吉达·布塔钢琴视听音乐会', 'mu', null);
INSERT INTO `goods` VALUES ('14', 'http://image.juooo.com/group1/M00/01/08/rAoKmVqOXqqASshBAABtUXCKWAQ970.jpg', '2018陈鸿宇“与荒野”巡回音乐会', '2018.04.13 19:30', '广州中山纪念堂', '177-677', '“与荒野”希望你是有梦敢做的人！', 'mu', null);
INSERT INTO `goods` VALUES ('15', 'http://image.juooo.com/group1/M00/01/C2/rAoKNVqxwjaAFAg_AACmgKLJ0w8693.jpg', '阿部笃志——动漫钢琴音乐会 ', '2018.04.21 19:30', '星海音乐厅室内乐演奏厅', '80-380', '阿部笃志（Abe Atsushi），日本著名的钢琴家、作曲家，他的音乐表现以即兴演奏为主，拥有较强的爵士乐风格，给观众带来音乐画面感！', 'mu', null);
INSERT INTO `goods` VALUES ('16', 'http://image.juooo.com/group1/M00/01/BD/rAoKNVql9lWAXbuaAADxyuwJl8s729.jpg', 'Animenz  Live  2018 动漫钢琴音乐会-广州站', '2018.07.23 19:30', '星海音乐厅交响乐演奏厅', '180-680', 'Animenz（原名郭迈克），在德国南部小镇巴特乌拉赫出生、梅青根长大的华裔青年音乐家。', 'mu', null);
INSERT INTO `goods` VALUES ('17', 'http://image.juooo.com/group1/M00/00/D5/rAoKmVoyT6KAF01XAABO7rBq5eE457.jpg', '2018第五届城市戏剧节off单元  草三剧社原创小剧《忘了我》-广州', '2018.04.21 19:30', '郭兰英剧院', '80-181', '女主角小米是一位已婚白领，她从小翻来覆去做同一个噩梦，而她的爱人也习惯了他从噩梦中惊醒。直到有一天，小米的噩梦中出现了一个从未出现的角色，比以往任何时候都来的可怕......', 'mo', null);
INSERT INTO `goods` VALUES ('18', 'http://image.juooo.com/group1/M00/01/68/rAoKNVoSoOGANW9LAABnx1rsyi4180.jpg', '2018第五届城市戏剧节 诗·歌·舞变奏三幕剧《木心·人曲》-广州站', '2018.05.12-2018.05.13', '正佳演艺剧院', '99-299', '木心是诗人，是文学家，是画家，是艺术家，是先生，是设计师，是囚徒，是音乐家，是少爷。那么，木心，到底是谁？', 'mo', null);
INSERT INTO `goods` VALUES ('19', 'http://image.juooo.com/group1/M00/00/D5/rAoKmVoySIyAYh2AAACBOKSWAsA310.jpg', '2018第五届城市戏剧节off单元 广州公艺坊剧团 先锋话剧《D》-广州', '2018.06.23 19:30', '郭兰英剧院', '80-181', '剧目《D》，不以事件去讲述抑郁症患者的故事，而是以多个零散碎片的行为日常去呈现抑郁症患者的状态。', 'mo', null);
INSERT INTO `goods` VALUES ('20', 'http://image.juooo.com/group1/M00/01/73/rAoKNVohAxyAPnHvAADdPqmXhvE975.jpg', '2018第五届城市戏剧节 乌镇戏剧节特邀剧目 香港绿叶剧团最新力作《爸爸》-广州站', '2018.06.30-2018.07.01', '正佳演艺剧院', '99-299', '他在唐楼楼梯底铺，一坐就是五十多个年头。每天在一平方多米的桌上用心帮街坊维修钟表，让时间巨轮永恒流转。', 'mo', null);
INSERT INTO `goods` VALUES ('21', 'http://image.juooo.com/group1/M00/00/88/rAoKNVhQ3H6AQdk2AAKWHhTJygQ088.jpg', '【小橙堡·微剧场】保加利亚温情故事木偶剧《顽皮小精灵》', '2018.04.07', '正佳演艺剧院', '100-260', '在每个国家，每个城市，每个街道，都至少住着这么一个怪叔叔。他不喜欢冰淇淋，不喜欢风筝，不喜欢和小朋友玩耍，甚至不喜欢和任何人说话。直到有一天……', 'ch', 'hot');
INSERT INTO `goods` VALUES ('22', 'http://image.juooo.com/group1/M00/00/88/rAoKNVhQ3H6AQdk2AAKWHhTJygQ088.jpg', '【小橙堡·微剧场】保加利亚温情故事木偶剧《顽皮小精灵》', '2018.04.14-2018.04.15', '小橙堡·Pororo乐园小剧场', '180', '在每个国家，每个城市，每个街道，都至少住着这么一个怪叔叔。他不喜欢冰淇淋，不喜欢风筝，不喜欢和小朋友玩耍，甚至不喜欢和任何人说话。直到有一天……', 'ch', 'hot');
INSERT INTO `goods` VALUES ('23', 'http://image.juooo.com/group1/M00/00/89/rAoKNVhQ_MyAEW9JAALDE-IWeeU535.jpg', '【小橙堡】经典童话人偶剧《小红帽》', '2017.09.03-2018.04.29', '郭兰英剧院', '50-300', '当可爱的小红帽遇到美食专家大灰狼，惊险滑稽的故事再次华丽展开。以尝尽天下美食为梦想的大灰狼，练就了一手好厨艺。他善于欺骗和表演，要将森林里的小动物和孩子们都变成自己的美食。小红帽能从危险中逃脱么？', 'ch', null);
INSERT INTO `goods` VALUES ('24', 'http://image.juooo.com/group1/M00/00/ED/rAoKmVpVvYuAAQeuAADX4Z4msbU869.jpg', '【小橙堡】乌克兰国宝级亲子趣味默剧《疯狂纸世界》Paper World', '2018.04.15', '广州少年宫蓓蕾剧院', '60-450', '国际屡获殊荣的Mimirichi喜剧团为你带来一个”疯狂纸世界”，用“一张张白纸“带你穿越现实，进入充满缤纷想像力的世界。', 'ch', null);
INSERT INTO `goods` VALUES ('25', 'http://image.juooo.com/group1/M00/01/0A/rAoKmVqQxJOAPv1DAAEVi4Th8KY275.jpg', '【小橙堡微剧场】台湾《长毛朱的衣想世界》-广州站', '2018.05.05-2018.05.13', '小橙堡·Pororo乐园小剧场', '180', '台湾创新剧场《長毛朱的“衣”想世界》', 'ch', 'hot');
INSERT INTO `goods` VALUES ('26', 'http://image.juooo.com/group1/M00/01/46/rAoKNVnLXoSAfA7kAAC5zJAa5T4620.jpg', '【小橙堡】甜甜旋风公主秀《我是最美公主》', '2018.05.13-2018.05.27', '郭兰英剧院', '50-300', '故事讲述了童话作家的安徒生，为了寻找完成下一个故事的灵感，而举办了一场甜甜旋风的公主大选秀。', 'ch', null);
INSERT INTO `goods` VALUES ('27', 'http://image.juooo.com/group1/M00/01/B1/rAoKNVqOHBWAbTpsAADFJQF_jLs014.jpg', '【小橙堡】甜甜旋风公主秀《我是最美公主》', '2018.05.26', '广州少年宫蓓蕾剧院', '60-360', '故事讲述了童话作家的安徒生，为了寻找完成下一个故事的灵感，而举办了一场甜甜旋风的公主大选秀。', 'ch', null);
INSERT INTO `goods` VALUES ('28', 'http://image.juooo.com/group1/M00/00/98/rAoKOVh8izKAIKGxAAK6-WDsfks952.jpg', '【小橙堡·微剧场】台湾温情生活剧《小老头和他的朋友们》-广州站', '2018.06.02-2018.06.17', '小橙堡·Pororo乐园小剧场', '180', '这是一个小男孩渐渐变成孤独小老头的故事。', 'ch', 'hot');
INSERT INTO `goods` VALUES ('29', 'http://image.juooo.com/group1/M00/00/A1/rAoKOVimYQ6Ad6tUAAH25-kuG-I880.jpg', '【小橙堡】大型奇幻音乐儿童剧《小伴龙·魔法生日会》-广州', '2017.06.18-2018.06.24', '郭兰英剧院', '50-300', '龙妹妹生日，小伴龙和朋友们在海螺屋给她准备生日派对，忘了邀请乌拉拉。调皮的乌拉拉带来了飓风种子，伙伴们被飓风刮到了七彩大陆的四面八方，冰雪城堡、树仙谷、糖果岛…', 'ch', 'hot');
INSERT INTO `goods` VALUES ('30', 'http://image.juooo.com/group1/M00/01/74/rAoKNVokoiSAHdJfAAD6dkgnduI888.jpg', '【小橙堡】经典幻想童话剧《爱丽丝梦游泡泡仙境》', '2017.11.05-2018.09.16', '郭兰英剧院', '50-300', '揣着怀表的兔子先生，暴戾的红桃皇后，吃了能变巨人的蛋糕，身体是扑克牌的骑士们……有着强烈好奇心的爱丽丝在睡梦中来到了这个神奇的泡泡世界。', 'ch', 'hot');
INSERT INTO `goods` VALUES ('31', 'http://image.juooo.com/group1/M00/01/46/rAoKNVnLYEqAbifVAADHls_vPik092.jpg', '【小橙堡】温馨亲子舞台剧《泰迪熊》', '2018.11.11-2018.11.25', '郭兰英剧院', '50-300', '泰迪轻点魔法棒，', 'ch', 'hot');
INSERT INTO `goods` VALUES ('32', 'http://image.juooo.com/group1/M00/00/7A/rAoKOVg2QOuAdLhxAAHcIPIRxuQ561.png', '【小橙堡】奇幻穿越历险主题儿童剧《历险恐龙岛》', '2017.07.02-2018.03.25', '郭兰英剧院', '50-300', '一个恶毒的阴谋在垃圾“四怪”的“人类批斗大会”上呼之欲出。于是，乐乐在垃圾们的诱惑下穿越到侏罗纪。一时间，原本和谐、美好的恐龙家园遭到毁灭性打击：环境危机、人类受袭、恐龙面临被制成标本的噩运……', 'ch', null);
INSERT INTO `goods` VALUES ('33', 'http://image.juooo.com/group1/M00/00/D6/rAoKmVozZXyAA70IAADnQ1w4hys096.jpg', '【嬉习喜戏】百老汇音乐剧《摇滚年代》中文版-广州', '2018.06.07-2018.06.08', '广东演艺中心大剧院', '100-580', '《摇滚年代》是一部摇滚歌曲点唱机音乐剧，由Chris D\'Arienzo编剧，剧中歌曲全部来自于上世纪80年代的曾风行一时的经典摇滚歌曲，尤其是同一时期的华丽金属歌曲', 'muj', 'hot');
INSERT INTO `goods` VALUES ('34', 'http://image.juooo.com/group1/M00/00/F9/rAoKmVpm0dGALxNKAAB8eHFRRLg127.jpg', '百老汇浪漫音乐剧《I Do！I Do！》中文版-广州站', '2018.06.09-2018.06.14', '正佳演艺剧院', '100-380', '婚礼上，一对夫妇宣誓，并期待着接下来要共同度过的一生。在这一生当中，两人从新婚之夜的恐慌', 'muj', 'hot');
INSERT INTO `goods` VALUES ('35', 'http://image.juooo.com/group1/M00/01/04/rAoKmVpxef2AMYs4AABYd7HZI6o164.jpg', '外百老汇浪漫爱情音乐剧《长腿叔叔》中文版-广州站', '2018.08.11-2018.08.16', '正佳演艺剧院', '100-380', '-来自美国外百老汇精品浪漫爱情音乐剧 风靡日韩 口碑爆棚 -音乐剧《悲惨世界》原版导演突破之作', 'muj', 'hot');
INSERT INTO `goods` VALUES ('36', 'http://image.juooo.com/group1/M00/01/02/rAoKmVpu4keAb-dBAABXqnRpcog041.jpg', '世界经典原版音乐剧《猫》Cats 广州站', '2018.08.30-2018.09.11', '广州大剧院 歌剧厅', '180-1380', '世界经典原版音乐剧《猫》', 'muj', null);
INSERT INTO `goods` VALUES ('37', 'http://image.juooo.com/group1/M00/00/A8/rAoKmVntSC2ASHskAADrrpOgpu0379.jpg', '百老汇经典原版音乐剧《吉屋出租》RENT 二十周年巡演-广州站', '2018.09.26-2018.09.28', '广东演艺中心大剧院', '180-780', '音乐剧历史上获奖最多的剧目，横扫1996年普利策戏剧奖、托尼奖最佳音乐剧、最佳音乐剧编剧、最佳原创音乐、最佳音乐剧男配角奖、纽约戏剧论坛奖的最佳音乐剧奖等多个奖项。', 'muj', null);
INSERT INTO `goods` VALUES ('38', 'http://image.juooo.com/group1/M00/01/78/rAoKNVoop3iAA9tIAACbWUNayAI154.jpg', '2018第五届城市戏剧节off单元 Farsome－呼声剧团 首部原创都市话剧《8分钟》-广州', '2018.05.05 19:30', '郭兰英剧院', '80-181', '转瞬的生命充盈着错过，怎样的力量才能让我饶恕？当所有记忆都浸染着爱情，你还会做出同样的选择吗？', 'xiju', null);
INSERT INTO `goods` VALUES ('39', 'http://image.juooo.com/group1/M00/01/06/rAoKmVp4Wz-AVxOFAABYh3pMGpY545.jpg', '2018第五届城市戏剧节 莎翁经典X爱情喜剧《终成眷属》-广州站', '2018.05.23-2018.05.24', '正佳演艺剧院', '99-299', '​莎士比亚爱情喜剧《终成眷属》', 'xiju', null);
INSERT INTO `goods` VALUES ('40', 'http://image.juooo.com/group1/M00/00/CE/rAoKmVoop4qAY2JAAADUzwvOjyo170.jpg', '2018第五届城市戏剧节off单元 Farsome－呼声剧团 即兴喜剧《喜乐秀》-广州', '2018.05.26 19:30', '郭兰英剧院', '80-181', '有一帮喜欢即兴喜剧的票友', 'xiju', null);
INSERT INTO `goods` VALUES ('41', 'http://image.juooo.com/group1/M00/01/98/rAoKNVpYgOOAKXz7AABFlcsXoX4578.jpg', '2018第五届城市戏剧节off单元 江湖剧社《呐》-广州站', '2018.06.29 19:30', '郭兰英剧院', '80-181', '《呐》就是秉承鲁迅先生的精神，直面我们的生活状态，淋漓的，彻骨的，深触当下的对一些现象进行反思并企图寻找解决的可能。', 'xiju', null);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=71 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('64', '18744444444', '123');
INSERT INTO `user` VALUES ('65', '13599999999', '123');
INSERT INTO `user` VALUES ('66', '15224657529', '06264513');
INSERT INTO `user` VALUES ('67', '13877878787', '123456');
INSERT INTO `user` VALUES ('68', '13838383838', '123456');
INSERT INTO `user` VALUES ('69', '18711111111', '12345');
INSERT INTO `user` VALUES ('70', '15171615526', '111111');

-- ----------------------------
-- Table structure for useraddr
-- ----------------------------
DROP TABLE IF EXISTS `useraddr`;
CREATE TABLE `useraddr` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `adrdeta` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `shouname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of useraddr
-- ----------------------------
INSERT INTO `useraddr` VALUES ('1', 'admin', '15224657529', '广西壮族自治区,柳州市,三江侗族自治县', '古宜镇', 'pan');
INSERT INTO `useraddr` VALUES ('2', 'admin', '15224657529', '广东省,广州市,天河区', '古宜镇', 'pan');
INSERT INTO `useraddr` VALUES ('21', '13599999999', '··1', '山西省,运城市,盐湖区', '·1·', '·1·');
INSERT INTO `useraddr` VALUES ('22', '15224657529', 'zhsh', '湖北省,恩施土家族苗族自治州,恩施市', 'sjdj', 'shdh');
INSERT INTO `useraddr` VALUES ('23', '18711111111', '11', '辽宁省,阜新市,清河门区', '111', '11');
INSERT INTO `useraddr` VALUES ('24', '18711111111', '2131', '山西省,运城市,盐湖区', '12312', '1231');

-- ----------------------------
-- Table structure for userorder
-- ----------------------------
DROP TABLE IF EXISTS `userorder`;
CREATE TABLE `userorder` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `goodsID` int(11) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `status` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=93 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of userorder
-- ----------------------------
INSERT INTO `userorder` VALUES ('1', 'admin', '2018-03-29 20:25:28', '1', '3', '299.00', 'yfk');
INSERT INTO `userorder` VALUES ('6', 'admin', '2018-03-29 22:05:26', '2', '5', '199.00', 'yfk');
INSERT INTO `userorder` VALUES ('10', 'admin', '2018-03-29 22:01:34', '3', '4', '1520.00', 'tbp');
INSERT INTO `userorder` VALUES ('55', '18799999999', '2018-03-30 15:01:03', '31', '2', '600.00', 'yfk');
INSERT INTO `userorder` VALUES ('48', '18766666666', '2018-03-30 12:04:44', '29', '2', '600.00', 'yfk');
INSERT INTO `userorder` VALUES ('50', '18744444444', '2018-03-30 14:27:14', '22', '1', '180.00', 'yfk');
INSERT INTO `userorder` VALUES ('52', '13566666666', '2018-03-30 14:58:25', '29', '4', '1200.00', 'yfk');
INSERT INTO `userorder` VALUES ('54', '13566666666', '2018-03-30 14:59:47', '28', '4', '720.00', 'tbp');
INSERT INTO `userorder` VALUES ('60', '18799999999', '2018-03-30 15:03:13', '6', '1', '680.00', 'tbp');
INSERT INTO `userorder` VALUES ('59', '18799999999', '2018-03-30 15:03:00', '36', '1', '1380.00', 'yfk');
INSERT INTO `userorder` VALUES ('61', '13522222222', '2018-03-30 15:04:37', '21', '1', '260.00', 'yfk');
INSERT INTO `userorder` VALUES ('66', '13511111111', '2018-03-30 15:08:00', '35', '1', '380.00', 'yfk');
INSERT INTO `userorder` VALUES ('74', '13666666666', '2018-03-30 15:15:19', '34', '3', '1140.00', 'tbp');
INSERT INTO `userorder` VALUES ('68', 'admin', '2018-03-30 15:08:23', '22', '4', '720.00', 'tbp');
INSERT INTO `userorder` VALUES ('82', '13599999999', '2018-03-30 15:25:12', '4', '1', '580.00', 'tbp');
INSERT INTO `userorder` VALUES ('79', '13599999999', '2018-03-30 15:23:48', '28', '1', '180.00', 'yfk');
INSERT INTO `userorder` VALUES ('83', '15224657529', '2018-03-30 15:31:40', '2', '1', '580.00', 'yfk');
INSERT INTO `userorder` VALUES ('84', 'admin', '2018-03-30 15:32:35', '5', '1', '580.00', 'tbp');
INSERT INTO `userorder` VALUES ('85', '13599999999', '2018-03-30 16:09:19', '5', '1', '580.00', 'tbp');
INSERT INTO `userorder` VALUES ('88', 'admin', '2018-03-30 17:10:45', '1', '1', '200.00', 'tbp');
INSERT INTO `userorder` VALUES ('91', '18711111111', '2018-03-30 17:42:23', '20', '3', '897.00', 'yfk');
SET FOREIGN_KEY_CHECKS=1;
