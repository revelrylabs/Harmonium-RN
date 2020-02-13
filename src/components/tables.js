import {Colors, Spacing, Fonts, Headers} from '..'

export default {
  // TABLE
  tableWrapper: {
    backgroundColor: Colors.white,
    borderColor: Colors.brandBlue,
    borderWidth: 1,
    marginTop: Spacing.globalMargin,
  },
  tableWrapperHeaders: {
    backgroundColor: Colors.brandBlue,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Spacing.globalPaddingSmaller,
  },
  tableWrapperHeader: {
    color: Colors.white,
    fontFamily: Fonts.bodyFontBold,
    fontSize: Headers.h5Size,
  },
  tableContainer: {
    borderColor: Colors.dividerColor,
    borderWidth: 1,
  },
  tableHeader: {
    backgroundColor: Colors.lighterGray,
    flex: 1,
    flexDirection: 'row',
    padding: Spacing.globalPaddingSmaller,
  },
  tableRow: {
    borderTopColor: Colors.dividerColor,
    borderTopWidth: 1,
    flex: 1,
    flexDirection: 'row',
    padding: Spacing.globalPaddingSmaller,
  },
  tableTextFirst: {
    flex: 2,
  },
  tableText: {
    flex: 1,
  },
  textRight: {
    textAlign: 'right',
  },
}
