//静态数据
var traffic=[
    {"data":"201807010000 ","dsquare":"7 ","xsquare":"9 ","parking":"6 "},
    {"data":"201807010005 ","dsquare":"17 ","xsquare":"14 ","parking":"10 "},
    {"data":"201807010010 ","dsquare":"24 ","xsquare":"27 ","parking":"17 "},
    {"data":"201807010015 ","dsquare":"23 ","xsquare":"23 ","parking":"16 "},
    {"data":"201807010020 ","dsquare":"21 ","xsquare":"13 ","parking":"11 "},
    {"data":"201807010025 ","dsquare":"59 ","xsquare":"36 ","parking":"19 "},
    {"data":"201807010030 ","dsquare":"71 ","xsquare":"51 ","parking":"27 "},
    {"data":"201807010035 ","dsquare":"61 ","xsquare":"49 ","parking":"30 "},
    {"data":"201807010040 ","dsquare":"60 ","xsquare":"61 ","parking":"19 "},
    {"data":"201807010045 ","dsquare":"43 ","xsquare":"44 ","parking":"20 "},
    {"data":"201807010050 ","dsquare":"31 ","xsquare":"36 ","parking":"23 "},
    {"data":"201807010055 ","dsquare":"44 ","xsquare":"29 ","parking":"29 "},
    {"data":"201807010100 ","dsquare":"37 ","xsquare":"27 ","parking":"26 "},
    {"data":"201807010105 ","dsquare":"34 ","xsquare":"9 ","parking":"24 "},
    {"data":"201807010110 ","dsquare":"33 ","xsquare":"11 ","parking":"26 "},
    {"data":"201807010115 ","dsquare":"29 ","xsquare":"14 ","parking":"26 "},
    {"data":"201807010120 ","dsquare":"26 ","xsquare":"7 ","parking":"21 "},
    {"data":"201807010125 ","dsquare":"26 ","xsquare":"3 ","parking":"16 "},
    {"data":"201807010130 ","dsquare":"27 ","xsquare":"3 ","parking":"16 "},
    {"data":"201807010135 ","dsquare":"27 ","xsquare":"4 ","parking":"17 "},
    {"data":"201807010140 ","dsquare":"24 ","xsquare":"9 ","parking":"19 "},
    {"data":"201807010145 ","dsquare":"26 ","xsquare":"7 ","parking":"19 "},
    {"data":"201807010150 ","dsquare":"23 ","xsquare":"9 ","parking":"19 "},
    {"data":"201807010155 ","dsquare":"23 ","xsquare":"7 ","parking":"20 "},
    {"data":"201807010200 ","dsquare":"21 ","xsquare":"7 ","parking":"19 "},
    {"data":"201807010205 ","dsquare":"24 ","xsquare":"9 ","parking":"20 "},
    {"data":"201807010210 ","dsquare":"31 ","xsquare":"10 ","parking":"19 "},
    {"data":"201807010215 ","dsquare":"54 ","xsquare":"21 ","parking":"24 "},
    {"data":"201807010220 ","dsquare":"53 ","xsquare":"33 ","parking":"27 "},
    {"data":"201807010225 ","dsquare":"51 ","xsquare":"27 ","parking":"26 "},
    {"data":"201807010230 ","dsquare":"80 ","xsquare":"30 ","parking":"19 "},
    {"data":"201807010235 ","dsquare":"90 ","xsquare":"34 ","parking":"24 "},
    {"data":"201807010240 ","dsquare":"73 ","xsquare":"24 ","parking":"26 "},
    {"data":"201807010245 ","dsquare":"66 ","xsquare":"26 ","parking":"21 "},
    {"data":"201807010250 ","dsquare":"60 ","xsquare":"24 ","parking":"23 "},
    {"data":"201807010255 ","dsquare":"57 ","xsquare":"27 ","parking":"24 "},
    {"data":"201807010300 ","dsquare":"67 ","xsquare":"31 ","parking":"30 "},
    {"data":"201807010305 ","dsquare":"64 ","xsquare":"33 ","parking":"29 "},
    {"data":"201807010310 ","dsquare":"69 ","xsquare":"29 ","parking":"24 "},
    {"data":"201807010315 ","dsquare":"66 ","xsquare":"29 ","parking":"21 "},
    {"data":"201807010320 ","dsquare":"64 ","xsquare":"21 ","parking":"24 "},
    {"data":"201807010325 ","dsquare":"59 ","xsquare":"16 ","parking":"17 "},
    {"data":"201807010330 ","dsquare":"61 ","xsquare":"19 ","parking":"19 "},
    {"data":"201807010335 ","dsquare":"57 ","xsquare":"19 ","parking":"17 "},
    {"data":"201807010340 ","dsquare":"56 ","xsquare":"20 ","parking":"19 "},
    {"data":"201807010345 ","dsquare":"53 ","xsquare":"21 ","parking":"21 "},
    {"data":"201807010350 ","dsquare":"56 ","xsquare":"23 ","parking":"21 "},
    {"data":"201807010355 ","dsquare":"54 ","xsquare":"19 ","parking":"16 "},
    {"data":"201807010400 ","dsquare":"57 ","xsquare":"19 ","parking":"17 "},
    {"data":"201807010405 ","dsquare":"77 ","xsquare":"21 ","parking":"19 "},
    {"data":"201807010410 ","dsquare":"89 ","xsquare":"20 ","parking":"23 "},
    {"data":"201807010415 ","dsquare":"99 ","xsquare":"20 ","parking":"23 "},
    {"data":"201807010420 ","dsquare":"93 ","xsquare":"21 ","parking":"21 "},
    {"data":"201807010425 ","dsquare":"93 ","xsquare":"24 ","parking":"20 "},
    {"data":"201807010430 ","dsquare":"93 ","xsquare":"23 ","parking":"23 "},
    {"data":"201807010435 ","dsquare":"91 ","xsquare":"20 ","parking":"19 "},
    {"data":"201807010440 ","dsquare":"90 ","xsquare":"21 ","parking":"21 "},
    {"data":"201807010445 ","dsquare":"90 ","xsquare":"20 ","parking":"23 "},
    {"data":"201807010450 ","dsquare":"99 ","xsquare":"30 ","parking":"21 "},
    {"data":"201807010455 ","dsquare":"101 ","xsquare":"36 ","parking":"23 "},
    {"data":"201807010500 ","dsquare":"91 ","xsquare":"33 ","parking":"21 "},
    {"data":"201807010505 ","dsquare":"90 ","xsquare":"37 ","parking":"24 "},
    {"data":"201807010510 ","dsquare":"110 ","xsquare":"46 ","parking":"27 "},
    {"data":"201807010515 ","dsquare":"127 ","xsquare":"67 ","parking":"36 "},
    {"data":"201807010520 ","dsquare":"121 ","xsquare":"69 ","parking":"27 "},
    {"data":"201807010525 ","dsquare":"114 ","xsquare":"66 ","parking":"33 "},
    {"data":"201807010530 ","dsquare":"120 ","xsquare":"70 ","parking":"27 "},
    {"data":"201807010535 ","dsquare":"130 ","xsquare":"67 ","parking":"23 "},
    {"data":"201807010540 ","dsquare":"137 ","xsquare":"73 ","parking":"24 "},
    {"data":"201807010545 ","dsquare":"163 ","xsquare":"73 ","parking":"29 "},
    {"data":"201807010550 ","dsquare":"160 ","xsquare":"83 ","parking":"39 "},
    {"data":"201807010555 ","dsquare":"186 ","xsquare":"84 ","parking":"43 "},
    {"data":"201807010600 ","dsquare":"194 ","xsquare":"111 ","parking":"49 "},
    {"data":"201807010605 ","dsquare":"183 ","xsquare":"109 ","parking":"33 "},
    {"data":"201807010610 ","dsquare":"211 ","xsquare":"109 ","parking":"36 "},
    {"data":"201807010615 ","dsquare":"221 ","xsquare":"106 ","parking":"43 "},
    {"data":"201807010620 ","dsquare":"201 ","xsquare":"97 ","parking":"66 "},
    {"data":"201807010625 ","dsquare":"193 ","xsquare":"90 ","parking":"71 "},
    {"data":"201807010630 ","dsquare":"177 ","xsquare":"87 ","parking":"57 "},
    {"data":"201807010635 ","dsquare":"156 ","xsquare":"100 ","parking":"50 "},
    {"data":"201807010640 ","dsquare":"144 ","xsquare":"87 ","parking":"39 "},
    {"data":"201807010645 ","dsquare":"160 ","xsquare":"93 ","parking":"33 "},
    {"data":"201807010650 ","dsquare":"190 ","xsquare":"90 ","parking":"40 "},
    {"data":"201807010655 ","dsquare":"197 ","xsquare":"91 ","parking":"57 "},
    {"data":"201807010700 ","dsquare":"194 ","xsquare":"96 ","parking":"47 "},
    {"data":"201807010705 ","dsquare":"179 ","xsquare":"101 ","parking":"43 "},
    {"data":"201807010710 ","dsquare":"186 ","xsquare":"110 ","parking":"56 "},
    {"data":"201807010715 ","dsquare":"181 ","xsquare":"104 ","parking":"70 "},
    {"data":"201807010720 ","dsquare":"183 ","xsquare":"106 ","parking":"83 "},
    {"data":"201807010725 ","dsquare":"200 ","xsquare":"107 ","parking":"71 "},
    {"data":"201807010730 ","dsquare":"189 ","xsquare":"110 ","parking":"71 "},
    {"data":"201807010735 ","dsquare":"181 ","xsquare":"156 ","parking":"50 "},
    {"data":"201807010740 ","dsquare":"181 ","xsquare":"167 ","parking":"54 "},
    {"data":"201807010745 ","dsquare":"164 ","xsquare":"157 ","parking":"59 "},
    {"data":"201807010750 ","dsquare":"164 ","xsquare":"156 ","parking":"61 "},
    {"data":"201807010755 ","dsquare":"166 ","xsquare":"151 ","parking":"66 "},
    {"data":"201807010800 ","dsquare":"177 ","xsquare":"163 ","parking":"66 "},
    {"data":"201807010805 ","dsquare":"207 ","xsquare":"213 ","parking":"79 "},
    {"data":"201807010810 ","dsquare":"194 ","xsquare":"223 ","parking":"79 "},
    {"data":"201807010815 ","dsquare":"201 ","xsquare":"207 ","parking":"101 "},
    {"data":"201807010820 ","dsquare":"176 ","xsquare":"177 ","parking":"83 "},
    {"data":"201807010825 ","dsquare":"199 ","xsquare":"177 ","parking":"66 "},
    {"data":"201807010830 ","dsquare":"196 ","xsquare":"227 ","parking":"63 "},
    {"data":"201807010835 ","dsquare":"184 ","xsquare":"233 ","parking":"76 "},
    {"data":"201807010840 ","dsquare":"233 ","xsquare":"239 ","parking":"71 "},
    {"data":"201807010845 ","dsquare":"266 ","xsquare":"277 ","parking":"69 "},
    {"data":"201807010850 ","dsquare":"299 ","xsquare":"319 ","parking":"84 "},
    {"data":"201807010855 ","dsquare":"306 ","xsquare":"306 ","parking":"90 "},
    {"data":"201807010900 ","dsquare":"296 ","xsquare":"283 ","parking":"93 "},
    {"data":"201807010905 ","dsquare":"273 ","xsquare":"253 ","parking":"64 "},
    {"data":"201807010910 ","dsquare":"329 ","xsquare":"284 ","parking":"93 "},
    {"data":"201807010915 ","dsquare":"344 ","xsquare":"310 ","parking":"129 "},
    {"data":"201807010920 ","dsquare":"374 ","xsquare":"334 ","parking":"127 "},
    {"data":"201807010925 ","dsquare":"380 ","xsquare":"349 ","parking":"134 "},
    {"data":"201807010930 ","dsquare":"370 ","xsquare":"353 ","parking":"143 "},
    {"data":"201807010935 ","dsquare":"346 ","xsquare":"309 ","parking":"104 "},
    {"data":"201807010940 ","dsquare":"307 ","xsquare":"267 ","parking":"121 "},
    {"data":"201807010945 ","dsquare":"313 ","xsquare":"293 ","parking":"110 "},
    {"data":"201807010950 ","dsquare":"333 ","xsquare":"319 ","parking":"124 "},
    {"data":"201807010955 ","dsquare":"336 ","xsquare":"303 ","parking":"126 "},
    {"data":"201807011000 ","dsquare":"364 ","xsquare":"304 ","parking":"106 "},
    {"data":"201807011005 ","dsquare":"463 ","xsquare":"319 ","parking":"120 "},
    {"data":"201807011010 ","dsquare":"454 ","xsquare":"291 ","parking":"159 "},
    {"data":"201807011015 ","dsquare":"420 ","xsquare":"347 ","parking":"161 "},
    {"data":"201807011020 ","dsquare":"426 ","xsquare":"346 ","parking":"171 "},
    {"data":"201807011025 ","dsquare":"461 ","xsquare":"436 ","parking":"207 "},
    {"data":"201807011030 ","dsquare":"481 ","xsquare":"499 ","parking":"206 "},
    {"data":"201807011035 ","dsquare":"454 ","xsquare":"496 ","parking":"131 "},
    {"data":"201807011040 ","dsquare":"477 ","xsquare":"610 ","parking":"163 "},
    {"data":"201807011045 ","dsquare":"503 ","xsquare":"659 ","parking":"184 "},
    {"data":"201807011050 ","dsquare":"511 ","xsquare":"586 ","parking":"213 "},
    {"data":"201807011055 ","dsquare":"514 ","xsquare":"523 ","parking":"207 "},
    {"data":"201807011100 ","dsquare":"483 ","xsquare":"433 ","parking":"153 "},
    {"data":"201807011105 ","dsquare":"503 ","xsquare":"480 ","parking":"147 "},
    {"data":"201807011110 ","dsquare":"540 ","xsquare":"520 ","parking":"163 "},
    {"data":"201807011115 ","dsquare":"556 ","xsquare":"546 ","parking":"183 "},
    {"data":"201807011120 ","dsquare":"521 ","xsquare":"497 ","parking":"190 "},
    {"data":"201807011125 ","dsquare":"496 ","xsquare":"406 ","parking":"159 "},
    {"data":"201807011130 ","dsquare":"513 ","xsquare":"364 ","parking":"170 "},
    {"data":"201807011135 ","dsquare":"519 ","xsquare":"414 ","parking":"160 "},
    {"data":"201807011140 ","dsquare":"537 ","xsquare":"464 ","parking":"163 "},
    {"data":"201807011145 ","dsquare":"573 ","xsquare":"449 ","parking":"171 "},
    {"data":"201807011150 ","dsquare":"586 ","xsquare":"396 ","parking":"156 "},
    {"data":"201807011155 ","dsquare":"566 ","xsquare":"383 ","parking":"171 "},
    {"data":"201807011200 ","dsquare":"570 ","xsquare":"407 ","parking":"177 "},
    {"data":"201807011205 ","dsquare":"614 ","xsquare":"469 ","parking":"163 "},
    {"data":"201807011210 ","dsquare":"644 ","xsquare":"611 ","parking":"214 "},
    {"data":"201807011215 ","dsquare":"670 ","xsquare":"681 ","parking":"220 "},
    {"data":"201807011220 ","dsquare":"676 ","xsquare":"680 ","parking":"197 "},
    {"data":"201807011225 ","dsquare":"730 ","xsquare":"599 ","parking":"236 "},
    {"data":"201807011230 ","dsquare":"703 ","xsquare":"540 ","parking":"224 "},
    {"data":"201807011235 ","dsquare":"693 ","xsquare":"509 ","parking":"170 "},
    {"data":"201807011240 ","dsquare":"647 ","xsquare":"576 ","parking":"196 "},
    {"data":"201807011245 ","dsquare":"619 ","xsquare":"566 ","parking":"224 "},
    {"data":"201807011250 ","dsquare":"666 ","xsquare":"593 ","parking":"233 "},
    {"data":"201807011255 ","dsquare":"630 ","xsquare":"606 ","parking":"217 "},
    {"data":"201807011300 ","dsquare":"659 ","xsquare":"664 ","parking":"206 "},
    {"data":"201807011305 ","dsquare":"673 ","xsquare":"656 ","parking":"189 "},
    {"data":"201807011310 ","dsquare":"679 ","xsquare":"696 ","parking":"223 "},
    {"data":"201807011315 ","dsquare":"680 ","xsquare":"650 ","parking":"206 "},
    {"data":"201807011320 ","dsquare":"629 ","xsquare":"581 ","parking":"197 "},
    {"data":"201807011325 ","dsquare":"601 ","xsquare":"610 ","parking":"193 "},
    {"data":"201807011330 ","dsquare":"629 ","xsquare":"580 ","parking":"194 "},
    {"data":"201807011335 ","dsquare":"607 ","xsquare":"577 ","parking":"213 "},
    {"data":"201807011340 ","dsquare":"703 ","xsquare":"587 ","parking":"243 "},
    {"data":"201807011345 ","dsquare":"721 ","xsquare":"659 ","parking":"234 "},
    {"data":"201807011350 ","dsquare":"759 ","xsquare":"729 ","parking":"216 "},
    {"data":"201807011355 ","dsquare":"810 ","xsquare":"826 ","parking":"261 "},
    {"data":"201807011400 ","dsquare":"743 ","xsquare":"859 ","parking":"281 "},
    {"data":"201807011405 ","dsquare":"699 ","xsquare":"787 ","parking":"237 "},
    {"data":"201807011410 ","dsquare":"754 ","xsquare":"719 ","parking":"219 "},
    {"data":"201807011415 ","dsquare":"771 ","xsquare":"669 ","parking":"281 "},
    {"data":"201807011420 ","dsquare":"689 ","xsquare":"600 ","parking":"250 "},
    {"data":"201807011425 ","dsquare":"656 ","xsquare":"474 ","parking":"181 "},
    {"data":"201807011430 ","dsquare":"594 ","xsquare":"440 ","parking":"120 "},
    {"data":"201807011435 ","dsquare":"567 ","xsquare":"500 ","parking":"166 "},
    {"data":"201807011440 ","dsquare":"573 ","xsquare":"563 ","parking":"181 "},
    {"data":"201807011445 ","dsquare":"581 ","xsquare":"610 ","parking":"194 "},
    {"data":"201807011450 ","dsquare":"583 ","xsquare":"614 ","parking":"200 "},
    {"data":"201807011455 ","dsquare":"566 ","xsquare":"523 ","parking":"240 "},
    {"data":"201807011500 ","dsquare":"549 ","xsquare":"467 ","parking":"199 "},
    {"data":"201807011505 ","dsquare":"536 ","xsquare":"500 ","parking":"224 "},
    {"data":"201807011510 ","dsquare":"533 ","xsquare":"543 ","parking":"236 "},
    {"data":"201807011515 ","dsquare":"539 ","xsquare":"547 ","parking":"253 "},
    {"data":"201807011520 ","dsquare":"571 ","xsquare":"533 ","parking":"211 "},
    {"data":"201807011525 ","dsquare":"607 ","xsquare":"579 ","parking":"209 "},
    {"data":"201807011530 ","dsquare":"659 ","xsquare":"613 ","parking":"231 "},
    {"data":"201807011535 ","dsquare":"646 ","xsquare":"634 ","parking":"243 "},
    {"data":"201807011540 ","dsquare":"696 ","xsquare":"659 ","parking":"259 "},
    {"data":"201807011545 ","dsquare":"754 ","xsquare":"756 ","parking":"313 "},
    {"data":"201807011550 ","dsquare":"814 ","xsquare":"803 ","parking":"353 "},
    {"data":"201807011555 ","dsquare":"817 ","xsquare":"750 ","parking":"370 "},
    {"data":"201807011600 ","dsquare":"753 ","xsquare":"726 ","parking":"364 "},
    {"data":"201807011605 ","dsquare":"729 ","xsquare":"770 ","parking":"296 "},
    {"data":"201807011610 ","dsquare":"724 ","xsquare":"724 ","parking":"310 "},
    {"data":"201807011615 ","dsquare":"704 ","xsquare":"640 ","parking":"273 "},
    {"data":"201807011620 ","dsquare":"681 ","xsquare":"576 ","parking":"261 "},
    {"data":"201807011625 ","dsquare":"700 ","xsquare":"581 ","parking":"220 "},
    {"data":"201807011630 ","dsquare":"736 ","xsquare":"653 ","parking":"227 "},
    {"data":"201807011635 ","dsquare":"790 ","xsquare":"679 ","parking":"240 "},
    {"data":"201807011640 ","dsquare":"803 ","xsquare":"704 ","parking":"260 "},
    {"data":"201807011645 ","dsquare":"767 ","xsquare":"653 ","parking":"266 "},
    {"data":"201807011650 ","dsquare":"743 ","xsquare":"557 ","parking":"253 "},
    {"data":"201807011655 ","dsquare":"726 ","xsquare":"564 ","parking":"259 "},
    {"data":"201807011700 ","dsquare":"679 ","xsquare":"643 ","parking":"270 "},
    {"data":"201807011705 ","dsquare":"643 ","xsquare":"589 ","parking":"234 "},
    {"data":"201807011710 ","dsquare":"613 ","xsquare":"540 ","parking":"187 "},
    {"data":"201807011715 ","dsquare":"644 ","xsquare":"601 ","parking":"189 "},
    {"data":"201807011720 ","dsquare":"721 ","xsquare":"603 ","parking":"221 "},
    {"data":"201807011725 ","dsquare":"790 ","xsquare":"636 ","parking":"267 "},
    {"data":"201807011730 ","dsquare":"759 ","xsquare":"636 ","parking":"274 "},
    {"data":"201807011735 ","dsquare":"734 ","xsquare":"620 ","parking":"246 "},
    {"data":"201807011740 ","dsquare":"794 ","xsquare":"680 ","parking":"269 "},
    {"data":"201807011745 ","dsquare":"809 ","xsquare":"669 ","parking":"289 "},
    {"data":"201807011750 ","dsquare":"764 ","xsquare":"723 ","parking":"267 "},
    {"data":"201807011755 ","dsquare":"781 ","xsquare":"630 ","parking":"297 "},
    {"data":"201807011800 ","dsquare":"830 ","xsquare":"586 ","parking":"294 "},
    {"data":"201807011805 ","dsquare":"779 ","xsquare":"566 ","parking":"216 "},
    {"data":"201807011810 ","dsquare":"817 ","xsquare":"589 ","parking":"249 "},
    {"data":"201807011815 ","dsquare":"797 ","xsquare":"596 ","parking":"241 "},
    {"data":"201807011820 ","dsquare":"819 ","xsquare":"606 ","parking":"201 "},
    {"data":"201807011825 ","dsquare":"779 ","xsquare":"660 ","parking":"187 "},
    {"data":"201807011830 ","dsquare":"803 ","xsquare":"727 ","parking":"213 "},
    {"data":"201807011835 ","dsquare":"771 ","xsquare":"634 ","parking":"191 "},
    {"data":"201807011840 ","dsquare":"709 ","xsquare":"499 ","parking":"199 "},
    {"data":"201807011845 ","dsquare":"697 ","xsquare":"523 ","parking":"214 "},
    {"data":"201807011850 ","dsquare":"694 ","xsquare":"550 ","parking":"190 "},
    {"data":"201807011855 ","dsquare":"681 ","xsquare":"586 ","parking":"229 "},
    {"data":"201807011900 ","dsquare":"670 ","xsquare":"559 ","parking":"249 "},
    {"data":"201807011905 ","dsquare":"623 ","xsquare":"530 ","parking":"246 "},
    {"data":"201807011910 ","dsquare":"650 ","xsquare":"549 ","parking":"260 "},
    {"data":"201807011915 ","dsquare":"663 ","xsquare":"539 ","parking":"261 "},
    {"data":"201807011920 ","dsquare":"656 ","xsquare":"541 ","parking":"211 "},
    {"data":"201807011925 ","dsquare":"661 ","xsquare":"556 ","parking":"204 "},
    {"data":"201807011930 ","dsquare":"650 ","xsquare":"589 ","parking":"223 "},
    {"data":"201807011935 ","dsquare":"624 ","xsquare":"566 ","parking":"236 "},
    {"data":"201807011940 ","dsquare":"621 ","xsquare":"500 ","parking":"243 "},
    {"data":"201807011945 ","dsquare":"576 ","xsquare":"500 ","parking":"210 "},
    {"data":"201807011950 ","dsquare":"564 ","xsquare":"453 ","parking":"196 "},
    {"data":"201807011955 ","dsquare":"553 ","xsquare":"490 ","parking":"190 "},
    {"data":"201807012000 ","dsquare":"524 ","xsquare":"457 ","parking":"189 "},
    {"data":"201807012005 ","dsquare":"444 ","xsquare":"393 ","parking":"150 "},
    {"data":"201807012010 ","dsquare":"441 ","xsquare":"436 ","parking":"159 "},
    {"data":"201807012015 ","dsquare":"466 ","xsquare":"467 ","parking":"179 "},
    {"data":"201807012020 ","dsquare":"470 ","xsquare":"507 ","parking":"166 "},
    {"data":"201807012025 ","dsquare":"456 ","xsquare":"569 ","parking":"173 "},
    {"data":"201807012030 ","dsquare":"454 ","xsquare":"586 ","parking":"170 "},
    {"data":"201807012035 ","dsquare":"467 ","xsquare":"659 ","parking":"163 "},
    {"data":"201807012040 ","dsquare":"489 ","xsquare":"584 ","parking":"213 "},
    {"data":"201807012045 ","dsquare":"423 ","xsquare":"506 ","parking":"253 "},
    {"data":"201807012050 ","dsquare":"406 ","xsquare":"441 ","parking":"249 "},
    {"data":"201807012055 ","dsquare":"376 ","xsquare":"483 ","parking":"217 "},
    {"data":"201807012100 ","dsquare":"346 ","xsquare":"544 ","parking":"163 "},
    {"data":"201807012105 ","dsquare":"283 ","xsquare":"359 ","parking":"136 "},
    {"data":"201807012110 ","dsquare":"284 ","xsquare":"283 ","parking":"119 "},
    {"data":"201807012115 ","dsquare":"259 ","xsquare":"273 ","parking":"131 "},
    {"data":"201807012120 ","dsquare":"216 ","xsquare":"210 ","parking":"124 "},
    {"data":"201807012125 ","dsquare":"201 ","xsquare":"216 ","parking":"90 "},
    {"data":"201807012130 ","dsquare":"211 ","xsquare":"256 ","parking":"97 "},
    {"data":"201807012135 ","dsquare":"233 ","xsquare":"239 ","parking":"114 "},
    {"data":"201807012140 ","dsquare":"267 ","xsquare":"309 ","parking":"111 "},
    {"data":"201807012145 ","dsquare":"266 ","xsquare":"340 ","parking":"123 "},
    {"data":"201807012150 ","dsquare":"246 ","xsquare":"301 ","parking":"117 "},
    {"data":"201807012155 ","dsquare":"234 ","xsquare":"249 ","parking":"113 "},
    {"data":"201807012200 ","dsquare":"237 ","xsquare":"243 ","parking":"104 "},
    {"data":"201807012205 ","dsquare":"230 ","xsquare":"247 ","parking":"89 "},
    {"data":"201807012210 ","dsquare":"261 ","xsquare":"379 ","parking":"107 "},
    {"data":"201807012215 ","dsquare":"276 ","xsquare":"423 ","parking":"174 "},
    {"data":"201807012220 ","dsquare":"234 ","xsquare":"313 ","parking":"211 "},
    {"data":"201807012225 ","dsquare":"256 ","xsquare":"354 ","parking":"206 "},
    {"data":"201807012230 ","dsquare":"287 ","xsquare":"381 ","parking":"169 "},
    {"data":"201807012235 ","dsquare":"329 ","xsquare":"404 ","parking":"170 "},
    {"data":"201807012240 ","dsquare":"350 ","xsquare":"410 ","parking":"167 "},
    {"data":"201807012245 ","dsquare":"357 ","xsquare":"346 ","parking":"171 "},
    {"data":"201807012250 ","dsquare":"320 ","xsquare":"269 ","parking":"183 "},
    {"data":"201807012255 ","dsquare":"261 ","xsquare":"230 ","parking":"123 "},
    {"data":"201807012300 ","dsquare":"236 ","xsquare":"211 ","parking":"74 "},
    {"data":"201807012305 ","dsquare":"221 ","xsquare":"281 ","parking":"87 "},
    {"data":"201807012310 ","dsquare":"261 ","xsquare":"303 ","parking":"126 "},
    {"data":"201807012315 ","dsquare":"249 ","xsquare":"234 ","parking":"131 "},
    {"data":"201807012320 ","dsquare":"226 ","xsquare":"193 ","parking":"114 "},
    {"data":"201807012325 ","dsquare":"221 ","xsquare":"209 ","parking":"104 "},
    {"data":"201807012330 ","dsquare":"219 ","xsquare":"176 ","parking":"77 "},
    {"data":"201807012335 ","dsquare":"209 ","xsquare":"140 ","parking":"57 "},
    {"data":"201807012340 ","dsquare":"247 ","xsquare":"177 ","parking":"63 "},
    {"data":"201807012345 ","dsquare":"239 ","xsquare":"189 ","parking":"77 "},
    {"data":"201807012350 ","dsquare":"201 ","xsquare":"154 ","parking":"63 "},
    {"data":"201807012355 ","dsquare":"166 ","xsquare":"183 ","parking":"61 "}
  ]

abs(['dsquare','xsquare', 'parking'],'<span style="font-size: 24px;font-weight:bold;">【东广场，西广场，停车场】去向监测展示分析图</span>');
setInterval(function (){
    var r = $('.timetxt dl dd').find('input');
    arrVal = new Array;
    var _str = '';
    var _txt = "";
    for (var i = 0; i < r.length; i++) {
        if (r[i].checked) {
            arrVal[i] = r[i].value;
            if (!_str) {
                _str += r[i].value;
            } else {
                _str += ',' + r[i].value;
            }
            if (!_txt) {
                _txt += r[i].nextSibling.nodeValue;
            } else {
                _txt += ',' + r[i].nextSibling.nodeValue;
            }

        }
    }
    var tss = _str.split(",");
    //alert(ss)
    $("#titletext").text(_txt);
    if (_txt == "") {
        titles = "";
    } else {
        titles = '<span style="font-size: 24px;font-weight:bold;">' + "【" + _txt + "】" + '去向监测展示分析图</span>';
    }
  abs(tss,titles);
}, 30*1000)
function abs(aa,tt){
  var chart;
  var leged = false;
  var titles=tt; //标题
  var result1 = [],
      result2 = [],
      result3 = []; //数据筛选
  var result0 = [];
  var size = []; //选择数据
  var arrVal;
  var ss = aa;
  var abs = [];

  $(function() {
      //alert("1111")
      //alert(ss)
      //titles = '<span style="font-size: 24px;font-weight:bold;">【-1层，1层，2层】实时客流量监测展示分析图</span>';

      function zong() {
          var _w = $(window).width(),
              _h = $(window).height();
          $('.left_nav').css('height', _h + 'px');
          $('.main_co').css({
              'height': _h - 20 + 'px',
              'width': _w - 300 + 'px'
          });
          $('.tableDiv').css('height', _h - 130 + 'px')
          $('.main_chart').css('height', _h - 150 + 'px')
      }
      zong();
      window.onresize = zong;

      mainTop()
      titleSwitch()
  });

  //选择筛选
  function mainTop() {
      $('.main_top > p').on('click', function() {
          $('.timetxt').css('display', 'block')
      })
      $('.timetxt p').on('click', function() {
          $(this).parent().css('display', 'none')
      })

      $('.timetxt dl dd label :checkbox').click(function() {
          allchk();
      })
      $('#all').click(function() {
          if (this.checked) {
              $('.timetxt dl dd label :checkbox').prop('checked', true);
          } else {
              $('.timetxt dl dd label :checkbox').prop('checked', false);
          }
      });
      selectedVal()
  }

  //选中项的值获取
  var _str = '';

  function selectedVal() {
      iShow(ss);
      var r = $('.timetxt dl dd').find('input');
      $('.timetxt p a:last-child').click(function() {
          arrVal = new Array;
          var _str = '';
          var _txt = "";
          for (var i = 0; i < r.length; i++) {
              if (r[i].checked) {
                  arrVal[i] = r[i].value;
                  if (!_str) {
                      _str += r[i].value;
                  } else {
                      _str += ',' + r[i].value;
                  }
                  if (!_txt) {
                      _txt += r[i].nextSibling.nodeValue;
                  } else {
                      _txt += ',' + r[i].nextSibling.nodeValue;
                  }

              }
          }
          ss = _str.split(",");
          //alert(ss)
          $("#titletext").text(_txt);
          if (_txt == "") {
              titles = "";
          } else {
              titles = '<span style="font-size: 24px;font-weight:bold;">' + "【" + _txt + "】" + '去向监测展示分析图</span>';
          }
          iShow(ss);
      })
  }



  function allchk() {
      var chknum = $('#list :checkbox').size();
      var chk = 0;
      $('#list :checkbox').each(function() {
          if ($(this).prop('checked') == true) {
              chk++;
          }
      })
      if (chk == chknum) {
          $('#all').prop('checked', true);
      } else {
          $('#all').prop('checked', false);
      }
  }

  //表格与图标切换
  function titleSwitch() {
          var btn1 = $('.main_table h2 a');
          btn1.click(function() {
              $(this).addClass('active')
                  .siblings().removeClass();
              var _index = $(this).index();
              $('.main_active > div').eq(btn1.index(this) - 1).css('display', 'block').siblings().css('display', 'none');
          });
      }
      //每隔三个字符加逗号

  function toThousands(num) {
      var result = [],
          counter = 0;
      num = (num || 0).toString().split('');
      for (var i = num.length - 1; i >= 0; i--) {
          counter++;
          result.unshift(num[i]);
          if (!(counter % 3) && i != 0) {
              result.unshift(',');
          }
      }
      return result.join('');
  }

  function iShow(arr) {
      //位数不足2位加0
      function toDouble(iNum) {
          if (iNum < 10) {
              return '0' + iNum;
          } else {
              return '' + iNum;
          }
      }

      //获取系统时间
      function getNowFormatDate() {
          var date = new Date();
          var currentdate = toDouble(date.getHours()) + toDouble(date.getMinutes());
          return currentdate;
      }
      var _time = getNowFormatDate()

      var iHtml = '';
      traffic = traffic.sort(function(a, b) {
          return b.data - a.data;
      });
      iHtml += '<thead>'
      iHtml += '<tr>'
      iHtml += '<th>时间 / 区域</th>'
      $(arr).each(function(i, obj1) {
          var tc = "未知层"
          if (obj1 == "dsquare") {
              tc = "东广场";
              iHtml += '<th>' + tc + '</th>'
          } else if (obj1 == "xsquare") {
              tc = "西广场";
              iHtml += '<th>' + tc + '</th>'
          } else if (obj1 == "parking") {
              tc = "停车场";
              iHtml += '<th>' + tc + '</th>'
          } else {
              tc = "未知层"
          }
      });
      iHtml += '</tr>'
      iHtml += '</thead>'
      iHtml += '<tbody>'
      $(traffic).each(function(i, obj) {
          if ((obj.data.substring(8, 10) + obj.data.substr(obj.data.length - 3)) <= _time-1) {

              if (arr[0] == '' || arr[0] == null) {} else {
                  iHtml += '<tr>'
                  iHtml += '<td> ' + (obj.data).substring(8, 10) + ':' + obj.data.substr(obj.data.length - 3) + ' </td>'
                  $(arr).each(function(j, obj1) {
                      iHtml += '<td> ' + toThousands($.trim(obj[obj1])) + ' </td>'
                  })
                  iHtml += '</tr>';
              }
          }
      })

      var serieslist = [];
      $(arr).each(function(i, obj1) {

              var arryrdata = [];
              $(traffic).each(function(j, obj) {
                  if ((obj.data.substring(8, 10) + obj.data.substr(obj.data.length - 3)) <= _time) {
                      var tempSj = Number(Number((obj.data).substring(8, 10))+Number((Number((obj.data).substring(10, 12))/60).toFixed(2)));
                      arryrdata.push([tempSj, Number(obj[obj1])]);
                  }

              })
              var tc = "未知层"
              if (obj1 == "dsquare") {
                  tc = "东广场";
                  serieslist.push({
                      name: tc,
                      data: arryrdata
                  });
              } else if (obj1 == "xsquare") {
                  tc = "西广场";
                  serieslist.push({
                      name: tc,
                      data: arryrdata
                  });
              } else if (obj1 == "parking") {
                  tc = "停车场";
                  serieslist.push({
                      name: tc,
                      data: arryrdata
                  });
              } else {
                  tc = "未知层"
              }
              //alert(tc)
              //var res={"name":obj1,"data":arryrdata};

          })
          // console.log(serieslist);
      iHtml += '</tbody>'
      $('.tableDiv table').html(iHtml)
          //if(serieslist!=null&&serieslist[0]!=''&&serieslist[0]!=null){
          //}else{
          //    serieslist=[];
          // }
      showHighcharts(serieslist);
  }

  function showHighcharts(serieslist) {
      //console.info(serieslist);
      leged = true;
      chart = new Highcharts.Chart({
          chart: {
              animation: Highcharts.svg, // don't animate in old IE
              marginRight: 30,
              renderTo: 'chart',
              type: 'spline'
          },
          title: {
              text: titles
          },
          legend: {
              enabled: leged
          },
          credits: { //右下角地址
              text: ''
          },
          xAxis: {
              min: 0,
              max: 24,
              tickInterval: 1, //步进
              tickPixelInterval: 10,
              labels: {
                  style: {
                      color: '#000000'
                  }
              }
          },
          yAxis: {
              title: {
                  text: '实时客流量'
              },
              labels: {
                  format: '{value}',
                  style: {
                      color: '#000000'
                  }
              },
              min: 0,
              plotLines: [{
                  value: 0,
                  width: 1,
                  color: '#808080'
              }]
          },
          tooltip: {
              backgroundColor: '#999999', // 背景颜色
              borderColor: 'ffffff', // 边框颜色
              borderRadius: 5, // 边框圆角
              animation: true, // 是否启用动画效果
              useHTML: true,
              shared: true, //共享提示框
              formatter: function() {
                  var shi = (this.x + '').split('.');
                  var er = 0;
                  if (shi.length == 2) {
                      er = Number(shi[1]);
                      if (shi[1].length == 1) {
                          er = Number(er + '0');
                      }
                  }
                  er = Math.round(er * 60 / 100);
                  if (er == 0) {
                      er = er + '0';
                  } else if (er < 10) {
                      er = '0' + er;
                  }
                  var temp = '<div style="color:#ffffff">';
                  temp += '<div style="height:20px;background:#666666;border-radius: 10px;line-height:20px;margin:0px 0px 5px 0px;">';
                  temp += ' <div style="width:60%;float:left;height:8px;margin:0px 8px 8px 8px;">';
                  temp += '   <span style="margin-left:7px;">时间：</span>';
                  temp += '   <span style="heigt:8px;font-size:13px;margin-left:5px;">' + shi[0] + ':' + er + '</span>';
                  temp += ' </div>';
                  temp += '</div>';
                  for (var i = 0; i < this.points.length; i++) {
                      temp += '<div style="height:20px;background:#666666;border-radius: 10px;line-height:20px;margin:0px 0px 5px 0px;">';
                      temp += ' <div style="width:60%;float:left;height:8px;margin:0px 8px 8px 8px;">';
                      temp += '   <span style="margin-left:7px;">' + (this.points[i].series.name) + '</span>';
                      temp += '   <span style="display:inline-block;margin-top:5px;margin-left:10px;line-height:10px;width:10px;height:10px;background:' + this.points[i].series.color + ';">&nbsp;</span>';
                      temp += '   <span style="heigt:8px;font-size:13px;margin-left:5px;">' + toThousands(this.points[i].y) + '</span>';
                      temp += ' </div>';
                      temp += '</div>';
                  }
                  temp += '</div>';
                  return temp;
              }
          },
          plotOptions: {
              series: {
                  cursor: 'pointer',
                  marker: {
                      enabled: false //false false的时候就不会突出显示点 
                  }
              },
              column: {
                  pointPadding: 0.4,
                  borderWidth: 0
              }
          },
          exporting: {
              enabled: true,
              // 文件名  
              //filename : titles,
              // 导出文件默认类型  
              type: 'image/png',
              //exporttable : etstr,
              sourceWidth: (screen.availWidth - 365),
              url: 'kpi/export/export.do'
          },
          series: serieslist
      });
  }
}

$(function() {
  //导航移入移出
  var timer2 = null;
  $(".header1").mouseover(function() {
    clearTimeout(timer2);
    $(".header").css({
        top: '0px'
    });
  });
  $(".header").mouseout(function() {
    clearTimeout(timer2);
    timer2 = setTimeout(function() {
      $(".header").css({
          top: '-66px'
      });
    }, 800)
  });
})