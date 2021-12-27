// 시계 뒤집기랑 합치면 재밌겠다

const iconList = [
  "manage_accounts",
  "filter_alt",
  "event",
  "thumb_up",
  "dashboard",
  "calendar_today",
  "login",
  "list",
  "visibility_off",
  "check_circle_outline",
  "date_range",
  "highlight_off",
  "help",
  "article",
  "question_answer",
  "paid",
  "task_alt",
  "lightbulb",
  "shopping_bag",
  "open_in_new",
  "trending_up",
  "perm_identity",
  "credit_card",
  "history",
  "account_balance",
  "delete_outline",
  "report_problem",
  "fact_check",
  "star_rate",
  "savings",
  "lock_open",
  "room",
  "code",
  "grade",
  "update",
  "add_shopping_cart",
  "receipt",
  "watch_later",
  "contact_support",
  "power_settings_new",
  "pets",
  "done_all",
  "explore",
  "bookmark",
  "account_box",
  "reorder",
  "note_add",
  "shopping_basket",
];

const select = function () {
  // check more than 2 is selected
  if ($(".selected").length > 1) {
    $(".selected").removeClass("selected");
  }
  // toggle selected class
  $(this).toggleClass("selected");
};

const match = function (ori_cord, comp_cord) {
  $(`[data-cord="${ori_cord[0]},${ori_cord[1]}"]`).find("span")[0].textContent == $(`[data-cord="${comp_cord[0]},${comp_cord[1]}"]`).find("span")[0].textContent;
};

const dfs = function (r_cord, d_cord, record, answer, size, turns = 0, dirc = [0, 0], debug = 0) {
  // void: assigned at answer[0]
  if (turns < 4) {
    console.log(" ".repeat(debug) + "=======================");
    console.log(" ".repeat(debug) + `r_cord:${r_cord}, d_cord:${d_cord}, record:${record}, turns:${turns}, dirc:${dirc}`);
    let root = $(`[data-cord="${r_cord[0]},${r_cord[1]}"]`);

    if (dirc.some((x) => x) && root.hasClass("block")) {
      console.log(" ".repeat(debug) + "===is block===");
      if (r_cord.every((v, i) => v == d_cord[i])) {
        console.log(" ".repeat(debug) + "===is path===");
        console.log(" ".repeat(debug) + record);
        answer[0] = record;
      }
    } else {
      const dircs = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
      ];
      for (let i = 0; i < dircs.length; i++) {
        const _dirc = dircs[i];
        if (r_cord[0] + _dirc[0] in [...Array(size[0] + 2).keys()] && r_cord[1] + _dirc[1] in [...Array(size[1] + 2).keys()] && _dirc.some((v, i, arr) => v + dirc[i])) {
          let _r_cord = r_cord.map((v, i) => v + _dirc[i]);
          console.log(" ".repeat(debug) + "===in range=== && ===in dirc===");
          console.log(" ".repeat(debug) + `_r_cord : ${_r_cord}`);
          dfs(_r_cord, d_cord, record.concat([_r_cord]), answer, size, turns + !dirc.every((v, i) => v == _dirc[i]), _dirc, debug + 1);
        }
      }
    }
  }
};

const offset = function (cord) {
  // x: left, y: height
  let b = $(`[data-cord="${cord[0]},${cord[1]}"]`)[0];
  console.log(`chosen cord:${cord}`);
  console.log(`chosen b:${b}`);
  return [b.offsetLeft + b.offsetWidth / 2, b.offsetTop + b.offsetHeight / 2];
};

const line = function (path) {
  let output = "";
  for (let i = 0; i < path.length; i++) {
    if (i + 1 < path.length) {
      // console.log(output);
      let xy = offset(path[i]);
      let _xy = offset(path[i + 1]);
      output += `<line x1="${xy[0]}" y1="${xy[1]}" x2="${_xy[0]}" y2="${_xy[1]}" style="stroke:transparent;stroke-width:2px" />`;
    }
  }
  return `<svg style="position: absolute">` + output + `</svg>`;
};

const putIcon = function (cord, i) {
  // put icon as html
  let r = cord[0];
  let c = cord[1];
  let block = $(`*[data-cord="${r},${c}"]`);
  $(`*[data-cord="${r},${c}"]`).html(
    `<div style="line-height:100%"><span class="material-icons-two-tone">
    ${iconList[i]}
    </span></div>`
  );
  // console.log("=====================");
  // console.log(`cord:${cord}   i:${i}`);
  // console.log(`block:${block[0]}`);
};

const addListener = function (cord, size) {
  // add action
  let r = cord[0];
  let c = cord[1];
  $(`*[data-cord="${r},${c}"]`)
    .addClass("block")
    // actions (selecting, matching)
    .on("click", function () {
      select.bind(this)();
      let selected = $(".selected");
      if (selected.length == 2) {
        if (selected.find("span")[0].textContent == selected.find("span")[1].textContent) {
          let answer = [];
          let root = $(selected[0]);
          let dest = $(selected[1]);
          let r_cord = [/(\d+),\d+/.exec(root.data("cord"))[1], /\d+,(\d+)/.exec(root.data("cord"))[1]].map((x) => Number(x)); // 이거 한자리만 받아오네.. 10개 넘으면 팅김... regex로 대체하자
          let d_cord = [/(\d+),\d+/.exec(dest.data("cord"))[1], /\d+,(\d+)/.exec(dest.data("cord"))[1]].map((x) => Number(x));

          dfs(r_cord, d_cord, [r_cord], answer, size);

          if (answer.length) {
            $(".contentWrap").append(line(answer[0]));

            const tl = gsap.timeline();
            tl.to("line", 0.01, { stroke: "blue", stagger: 0.01 });
            tl.to(selected, 0.01, { scale: 0, rotateY: 360 });
            tl.fromTo(
              "line",
              0.05,
              { x: -1 },
              { x: 1, ease: RoughEase.ease.config({ strength: 8, points: 20, template: Linear.easeNone, randomize: false }), clearProps: "x", onComplete: () => $("line").remove() }
            );

            selected.removeClass("block");
          } else {
            // no path
            gsap.fromTo(selected, 0.05, { rotateY: -10 }, { rotateY: 10, ease: RoughEase.ease.config({ strength: 8, points: 20, template: Linear.easeNone, randomize: false }), clearProps: "x" });
            selected.removeClass("selected");
          }
        } else {
          // totally wrong
          gsap.fromTo(selected, 0.05, { rotateX: -15 }, { rotateX: 15, ease: RoughEase.ease.config({ strength: 8, points: 20, template: Linear.easeNone, randomize: false }), clearProps: "x" });
          selected.removeClass("selected");
        }
      }
    });
};

const choosePair = function (s_row, s_col) {
  // return [[(1,1),(5,4)], ...]
  let bucket = [];

  for (let i = 0; i < s_row * s_col; i++) {
    bucket.push(i);
  }

  function getRandomFromBucket() {
    let randomRowIndex = Math.floor(Math.random() * bucket.length);
    let idx = bucket.splice(randomRowIndex, 1)[0];
    let row = Math.floor(idx / s_col);
    let col = idx % s_col;

    // console.log("--------------------------------------------");
    // console.log(`idx: ${idx}   row:${row + 1}   col:${col + 1}   s_row: ${s_row}   s_col: ${s_col}`);
    return [row + 1, col + 1];
  }

  let result = [];
  for (let k = 0; k < (s_row * s_col) / 2; k++) {
    // product has to be even
    result.push([getRandomFromBucket(), getRandomFromBucket()]); // push pair
  }
  return result;
};

const buildFrame = function (s_row, s_col) {
  let output = "";
  for (let row = 0; row < s_row + 2; row++) {
    output += `<div class="row ${row}">`;
    for (let col = 0; col < s_col + 2; col++) {
      output += `<div class="sizeFixer"><div class="tile" data-cord="${row},${col}"></div></div>`;
    }
    output += `</div>`;
  }
  $(".contentWrap").html(output);
};

const genBoard = function (s_row, s_col) {
  // generate board of size
  buildFrame(s_row, s_col);
  let idxs = choosePair(s_row, s_col);
  console.log(`idxs:${idxs}`);
  for (let i = 0; i < idxs.length; i++) {
    let idx = idxs[i];
    console.log(`trabelable : ${[...Array([s_row, s_col][0] + 2).keys()]}, ${[...Array([s_row, s_col][1] + 2).keys()]}`);
    putIcon(idx[0], i);
    putIcon(idx[1], i);
    addListener(idx[0], [s_row, s_col]);
    addListener(idx[1], [s_row, s_col]);
  }
  gsap.from(".tile", 0.1, { x: -1000, y: -1000, z: 100, stagger: 0.01 });
};

genBoard(4, 12);
