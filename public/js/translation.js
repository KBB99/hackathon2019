var isEnglish = true;

function translatePage(){
  if(isEnglish){
    isEnglish = false;
    document.getElementById("menuText").innerHTML = "菜单 <i class=\"fas fa-bars\"></i>";
    document.getElementById("registerText").innerHTML = "注册";
    document.getElementById("introText").innerHTML = "介绍";
    document.getElementById("scheduleText").innerHTML = "日程";
    document.getElementById("tracksText").innerHTML = "题目";
    document.getElementById("sponsorsText").innerHTML = "赞助商";
    document.getElementById("teamText").innerHTML = "创办团队"
    document.getElementById("languageText").innerHTML = "English";
    document.getElementById("opportunitiesText").innerHTML = "机会";
    document.getElementById("opportunitiesText1").innerHTML = "你有36个小时与你的团队完成一个项目。 这是一个很好的机会来进行连接。";
    document.getElementById("programmersText").innerHTML = "程序员";
    document.getElementById("programmersText1").innerHTML = "Hack the Pearl将接受来自世界各地的人，申请，我们将涵盖所有内容。";
    document.getElementById("shanghaiText").innerHTML = "上海";
    document.getElementById("shanghaiText1").innerHTML = "上海是世界上最发达的城市，你会有机会向跨国企业展示你的能力。";
    document.getElementById("scheduleheadingText").innerHTML = "活动概况";
    // document.getElementById("table01").innerHTML = "星期六";
    // document.getElementById("table02").innerHTML = "时间";
    // document.getElementById("table03").innerHTML = "事件";
    // document.getElementById("table04").innerHTML = "签到和注册";
    // document.getElementById("table05").innerHTML = "开幕仪式";
    // document.getElementById("table06").innerHTML = "开始创作";
    // document.getElementById("table07").innerHTML = "午餐时段";
    // document.getElementById("table08").innerHTML = "现场工作坊";
    // document.getElementById("table09").innerHTML = "现场工作坊" + "<br>" +"赞助商校园游";
    // document.getElementById("table10").innerHTML = "晚餐供给";
    // document.getElementById("table11").innerHTML = "现场工作坊";
    // document.getElementById("table12").innerHTML = "项目提交"+ "<br>" + "选手必须离开上海纽约大学教学楼";
    // document.getElementById("table13").innerHTML = "星期日";
    // document.getElementById("table14").innerHTML = "时间";
    // document.getElementById("table15").innerHTML = "事件";
    // document.getElementById("table16").innerHTML = "创作继续";
    // document.getElementById("table17").innerHTML = "现场工作坊";
    // document.getElementById("table18").innerHTML = "午餐时段";
    // document.getElementById("table19").innerHTML = "作品上交截止";
    // document.getElementById("table20").innerHTML = "评奖和前5名展示";
    // document.getElementById("table21").innerHTML = "作品展示";
    // document.getElementById("table22").innerHTML = "闭幕式与赛后清理";
    // document.getElementById("table23").innerHTML = "选手必须离开上海纽约大学教学楼";
    document.getElementById("trackstitleText").innerHTML = "题目";
    document.getElementById("trackstitleText1").innerHTML = "点击你最喜欢的以了解更多信息。";
    document.getElementById("roboticstitleText").innerHTML = "使用翻译";
    document.getElementById("roboticsText").innerHTML = "专注于翻译的项目";
    document.getElementById("codingtitleText").innerHTML = "教育";
    document.getElementById("codingText").innerHTML = "专注于学习或教学的项目";
    document.getElementById("socialtitleText").innerHTML = "社会福利";
    document.getElementById("socialgoodText").innerHTML = "有益于世界的项目。";
    document.getElementById("sponsorstitleText").innerHTML = "赞助商";
    document.getElementById("recruitmentText").innerHTML = "招聘";
    document.getElementById("recruitmentText1").innerHTML = "参加此次活动的人非常有才能。因此，你能够观察他们的表现并决定他们是否适合你的公司。";
    document.getElementById("adtitleText").innerHTML = "广告";
    document.getElementById("adtitleText1").innerHTML = "通过将公司名称附加到Hack the Pearl，公司将能够提高品牌知名度并使自己成为技术开发的领导者。";
    document.getElementById("apiText").innerHTML = "API推广";
    document.getElementById("apiText1").innerHTML = "如果你有兴趣让开发人员使用你的API，黑客马拉松是理想的完美解决方案。";
    document.getElementById("download_details").innerHTML = "赞助细节";
    document.getElementById("teamText1").innerHTML = "我们的团队";
    document.getElementById("teamText2").innerHTML = "组织活动的人";
    document.getElementById("programchair").innerHTML = "活动协调员";
    document.getElementById("webdev").innerHTML = "Web开发人员";
    document.getElementById("marketingText").innerHTML = "营销主管";
    document.getElementById("events1").innerHTML = "活动";
    document.getElementById("finance").innerHTML = "金融";
    document.getElementById("logistics").innerHTML = "后勤";
    document.getElementById("publicrelations").innerHTML = "公共关系";
    document.getElementById("events2").innerHTML = "活动";
    document.getElementById("consultant").innerHTML = "顾问";
    document.getElementsByName("registration[first_name]")[0].placeholder = "名字";
    document.getElementsByName("registration[last_name]")[0].placeholder = "姓";
    document.getElementsByName("registration[email]")[0].placeholder = "电子邮件";
    document.getElementsByName("registration[organization]")[0].placeholder = "学校";
    document.getElementsByName("registration[linked_in]")[0].placeholder = "LinkedIn (可选的)";
    document.getElementsByClassName("btn btn-primary")[1].innerHTML = "个人简历 (可选的)";
    document.getElementsByClassName("btn btn-primary")[2].innerHTML = "简历 (可选的)";
    document.getElementById("contactText").innerHTML = "联系我们";
    document.getElementById("registerlargeText").innerHTML = "注册";
    document.getElementById("sendMessageButton").value = "提交表格";
  }
  else{
    isEnglish = true;
    location.reload();
  }
}
